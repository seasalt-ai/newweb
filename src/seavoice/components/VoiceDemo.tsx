import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';

const VoiceDemo = () => {
  const [playingDemo, setPlayingDemo] = useState<string | null>(null);
  const [audioDuration, setAudioDuration] = useState<{[key: string]: number}>({});
  const [audioProgress, setAudioProgress] = useState<{[key: string]: number}>({});
  const audioRefs = useRef<{[key: string]: HTMLAudioElement}>({});

  const demos = [
    {
      id: 'restaurant',
      title: 'Restaurant reservation booking',
      description: 'AI handles table bookings, availability checks, and special requests',
      audioUrl: '/seavoice-recordings/Restaurant-reservation-booking.m4a',
      image: '/demo-images/restaurant.png'
    },
    {
      id: 'insurance',
      title: 'Insurance verification call',
      description: 'Automated insurance verification and claim processing',
      audioUrl: '/seavoice-recordings/Insurance-verification-call.m4a',
      image: '/demo-images/insurance.png'
    },
    {
      id: 'tech-support',
      title: 'Tech support',
      description: 'Technical troubleshooting and customer support automation',
      audioUrl: '/seavoice-recordings/Tech-support.m4a',
      image: '/demo-images/technical.png'
    },
    {
      id: 'sales-lead',
      title: 'Sales lead qualification',
      description: 'Intelligent lead qualification and sales funnel management',
      audioUrl: '/seavoice-recordings/Sales-lead-qualification.m4a',
      image: '/demo-images/ecommerce.png'
    },
    {
      id: 'realestate',
      title: 'Real estate inquiry handling',
      description: 'Property inquiries, scheduling viewings, and client management',
      audioUrl: '/seavoice-recordings/Real-estate-inquiry-handling.m4a',
      image: '/demo-images/realestate.png'
    },
    {
      id: 'donation',
      title: 'Donation campaign outreach',
      description: 'Fundraising campaigns and donor engagement automation',
      audioUrl: '/seavoice-recordings/Donation-campaign-outreach.m4a',
      image: '/demo-images/donation.png'
    }
  ];

  useEffect(() => {
    // Initialize audio elements
    demos.forEach(demo => {
      if (!audioRefs.current[demo.id]) {
        const audio = new Audio(demo.audioUrl);
        audioRefs.current[demo.id] = audio;
        
        audio.addEventListener('loadedmetadata', () => {
          setAudioDuration(prev => ({
            ...prev,
            [demo.id]: audio.duration
          }));
        });
        
        audio.addEventListener('timeupdate', () => {
          setAudioProgress(prev => ({
            ...prev,
            [demo.id]: (audio.currentTime / audio.duration) * 100
          }));
        });
        
        audio.addEventListener('ended', () => {
          setPlayingDemo(null);
          setAudioProgress(prev => ({
            ...prev,
            [demo.id]: 0
          }));
        });
      }
    });
    
    return () => {
      // Cleanup audio elements
      Object.values(audioRefs.current).forEach(audio => {
        audio.pause();
      });
    };
  }, []);

  const handlePlay = (demoId: string) => {
    const audio = audioRefs.current[demoId];
    if (!audio) return;
    
    if (playingDemo === demoId) {
      // Pause current audio
      audio.pause();
      setPlayingDemo(null);
    } else {
      // Stop any currently playing audio
      if (playingDemo) {
        const currentAudio = audioRefs.current[playingDemo];
        if (currentAudio) {
          currentAudio.pause();
          currentAudio.currentTime = 0;
        }
      }
      
      // Play new audio
      audio.currentTime = 0;
      audio.play();
      setPlayingDemo(demoId);
    }
  };

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>, demoId: string) => {
    const audio = audioRefs.current[demoId];
    if (!audio || !audioDuration[demoId]) return;
    
    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const progressBarWidth = rect.width;
    const clickPercentage = clickX / progressBarWidth;
    
    // Calculate new time position
    const newTime = clickPercentage * audioDuration[demoId];
    audio.currentTime = Math.max(0, Math.min(newTime, audioDuration[demoId]));
    
    // Update progress immediately
    setAudioProgress(prev => ({
      ...prev,
      [demoId]: (audio.currentTime / audioDuration[demoId]) * 100
    }));
    
    // If audio wasn't playing, start playing from the new position
    if (playingDemo !== demoId) {
      // Stop any currently playing audio
      if (playingDemo) {
        const currentAudio = audioRefs.current[playingDemo];
        if (currentAudio) {
          currentAudio.pause();
          currentAudio.currentTime = 0;
        }
      }
      audio.play();
      setPlayingDemo(demoId);
    }
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {demos.map((demo, index) => (
          <motion.div
            key={demo.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Demo Title */}
            <div className="p-4 pb-2">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{demo.title}</h3>
              
              {/* Audio Controls */}
              <div className="flex items-center space-x-3 mb-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handlePlay(demo.id)}
                  className="flex items-center justify-center w-10 h-10 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors"
                >
                  {playingDemo === demo.id ? (
                    <Pause className="w-5 h-5 text-white" />
                  ) : (
                    <Play className="w-5 h-5 text-white ml-0.5" />
                  )}
                </motion.button>
                
                {/* Progress Bar */}
                <div 
                  className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden cursor-pointer hover:h-3 transition-all duration-200"
                  onClick={(e) => handleProgressBarClick(e, demo.id)}
                  title="Click to seek"
                >
                  <motion.div
                    className="h-full bg-purple-600 rounded-full pointer-events-none"
                    initial={{ width: '0%' }}
                    animate={{ 
                      width: `${audioProgress[demo.id] || 0}%`
                    }}
                    transition={{ 
                      duration: 0.1,
                      ease: 'linear'
                    }}
                  />
                </div>
              </div>
            </div>
            
            {/* Demo Image */}
            <div className="relative h-40 overflow-hidden">
              <img 
                src={demo.image} 
                alt={demo.title}
                className="w-full h-full object-cover"
              />
              
              {/* Playing indicator */}
              {playingDemo === demo.id && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-purple-600/20 flex items-center justify-center"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center"
                  >
                    <div className="flex space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-1 h-4 bg-purple-600 rounded-full"
                          animate={{
                            height: [16, 8, 16],
                          }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default VoiceDemo;