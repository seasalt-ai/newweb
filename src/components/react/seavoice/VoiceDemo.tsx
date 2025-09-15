import React, { useState, useRef, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';
import { getTranslationHelpers, type SupportedLanguage } from '../../../i18n/helpers';

interface VoiceDemoProps {
  lang: SupportedLanguage;
}

const VoiceDemo: React.FC<VoiceDemoProps> = ({ lang }) => {
  const [mounted, setMounted] = useState(false);
  const [tFunc, setTFunc] = useState<((key: string) => string) | null>(null);
  const [playingDemo, setPlayingDemo] = useState<string | null>(null);
  const [audioDuration, setAudioDuration] = useState<{[key: string]: number}>({});
  const [audioProgress, setAudioProgress] = useState<{[key: string]: number}>({});
  const audioRefs = useRef<{[key: string]: HTMLAudioElement}>({});
  
  // Load translations on client mount
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const { t } = await getTranslationHelpers(lang);
        setTFunc(() => t);
        setMounted(true);
      } catch (error) {
        console.error('Failed to load translations:', error);
        setMounted(true); // Still mount, will use fallbacks
      }
    };
    
    loadTranslations();
  }, [lang]);
  
  // Helper function to get text from translations
  const getText = (key: string, fallback: string = key): string => {
    if (tFunc) {
      return tFunc(key) || fallback;
    }
    return fallback;
  };

  const demos = useMemo(() => [
    {
      id: 'restaurant',
      title: getText('seavoice.components.voiceDemo.demos.restaurant.title', 'Restaurant Reservation'),
      description: getText('seavoice.components.voiceDemo.demos.restaurant.description', 'AI handling restaurant booking'),
      audioUrl: '/seavoice-recordings/Restaurant-reservation-booking.m4a',
      image: '/demo-images/restaurant.png'
    },
    {
      id: 'insurance',
      title: getText('seavoice.components.voiceDemo.demos.insurance.title', 'Insurance Verification'),
      description: getText('seavoice.components.voiceDemo.demos.insurance.description', 'AI verifying insurance claims'),
      audioUrl: '/seavoice-recordings/Insurance-verification-call.m4a',
      image: '/demo-images/insurance.png'
    },
    {
      id: 'tech-support',
      title: getText('seavoice.components.voiceDemo.demos.techSupport.title', 'Tech Support'),
      description: getText('seavoice.components.voiceDemo.demos.techSupport.description', 'AI providing technical assistance'),
      audioUrl: '/seavoice-recordings/Tech-support.m4a',
      image: '/demo-images/technical.png'
    },
    {
      id: 'sales-lead',
      title: getText('seavoice.components.voiceDemo.demos.salesLead.title', 'Sales Lead Qualification'),
      description: getText('seavoice.components.voiceDemo.demos.salesLead.description', 'AI qualifying sales prospects'),
      audioUrl: '/seavoice-recordings/Sales-lead-qualification.m4a',
      image: '/demo-images/ecommerce.png'
    },
    {
      id: 'realestate',
      title: getText('seavoice.components.voiceDemo.demos.realEstate.title', 'Real Estate Inquiry'),
      description: getText('seavoice.components.voiceDemo.demos.realEstate.description', 'AI handling property inquiries'),
      audioUrl: '/seavoice-recordings/Real-estate-inquiry-handling.m4a',
      image: '/demo-images/realestate.png'
    },
    {
      id: 'donation',
      title: getText('seavoice.components.voiceDemo.demos.donation.title', 'Donation Campaign'),
      description: getText('seavoice.components.voiceDemo.demos.donation.description', 'AI managing donation outreach'),
      audioUrl: '/seavoice-recordings/Donation-campaign-outreach.m4a',
      image: '/demo-images/donation.png'
    }
  ], [getText]);

  useEffect(() => {
    if (!mounted) return;
    
    // Static demo configuration to avoid dependency issues
    const staticDemos = [
      { id: 'restaurant', audioUrl: '/seavoice-recordings/Restaurant-reservation-booking.m4a' },
      { id: 'insurance', audioUrl: '/seavoice-recordings/Insurance-verification-call.m4a' },
      { id: 'tech-support', audioUrl: '/seavoice-recordings/Tech-support.m4a' },
      { id: 'sales-lead', audioUrl: '/seavoice-recordings/Sales-lead-qualification.m4a' },
      { id: 'realestate', audioUrl: '/seavoice-recordings/Real-estate-inquiry-handling.m4a' },
      { id: 'donation', audioUrl: '/seavoice-recordings/Donation-campaign-outreach.m4a' }
    ];
    
    // Initialize audio elements
    staticDemos.forEach(demo => {
      if (!audioRefs.current[demo.id]) {
        const audio = new Audio();
        audio.preload = 'auto';
        audio.src = demo.audioUrl;
        audioRefs.current[demo.id] = audio;
        
        audio.addEventListener('loadedmetadata', () => {
          setAudioDuration(prev => ({
            ...prev,
            [demo.id]: audio.duration
          }));
        });
        
        audio.addEventListener('timeupdate', () => {
          if (audio.duration) {
            setAudioProgress(prev => ({
              ...prev,
              [demo.id]: (audio.currentTime / audio.duration) * 100
            }));
          }
        });
        
        audio.addEventListener('ended', () => {
          setPlayingDemo(null);
          setAudioProgress(prev => ({
            ...prev,
            [demo.id]: 0
          }));
        });
        
        // Handle audio loading errors gracefully
        audio.addEventListener('error', (e) => {
          const target = e.target as HTMLAudioElement;
          const error = target.error;
          console.error(`Audio error for ${demo.id}:`, {
            code: error?.code,
            message: error?.message,
            src: audio.src,
            networkState: audio.networkState,
            readyState: audio.readyState
          });
          setPlayingDemo(null);
        });
        
        // Try to load the audio
        audio.load();
      }
    });
    
    return () => {
      // Cleanup audio elements
      Object.values(audioRefs.current).forEach(audio => {
        audio.pause();
        // Don't clear src or call load() as it causes issues
        // Just pause is enough for cleanup
      });
    };
  }, [mounted]); // Only depend on mounted state


  if (!mounted) {
    return (
      <div className="w-full animate-pulse">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-4 pb-2">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full"></div>
                </div>
              </div>
              <div className="h-40 bg-gray-200"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const handlePlay = (demoId: string) => {
    const audio = audioRefs.current[demoId];
    
    if (!audio) {
      console.error(`No audio element found for ${demoId}`);
      return;
    }
    
    // Check if src is correct, if not, fix it
    const expectedSrc = {
      'restaurant': '/seavoice-recordings/Restaurant-reservation-booking.m4a',
      'insurance': '/seavoice-recordings/Insurance-verification-call.m4a',
      'tech-support': '/seavoice-recordings/Tech-support.m4a',
      'sales-lead': '/seavoice-recordings/Sales-lead-qualification.m4a',
      'realestate': '/seavoice-recordings/Real-estate-inquiry-handling.m4a',
      'donation': '/seavoice-recordings/Donation-campaign-outreach.m4a'
    };
    
    const correctSrc = expectedSrc[demoId as keyof typeof expectedSrc];
    if (!audio.src.endsWith(correctSrc)) {
      audio.src = correctSrc;
      audio.load();
    }
    
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
      
      // Check if audio is ready to play
      if (audio.readyState < 2) {
        // Try to load the audio first
        audio.load();
        
        // Wait for it to be ready
        const onCanPlay = () => {
          audio.removeEventListener('canplay', onCanPlay);
          startPlayback();
        };
        audio.addEventListener('canplay', onCanPlay);
        
        // Set a timeout in case it never loads
        setTimeout(() => {
          audio.removeEventListener('canplay', onCanPlay);
        }, 5000);
      } else {
        startPlayback();
      }
      
      function startPlayback() {
        // Reset audio to beginning
        audio.currentTime = 0;
        
        // Handle play promise to catch potential errors
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setPlayingDemo(demoId);
            })
            .catch((error) => {
              console.error(`Audio play failed for ${demoId}:`, error);
              
              // Check specific error types
              if (error.name === 'NotAllowedError') {
                alert('Please click the play button again. Browser requires user interaction to play audio.');
              } else if (error.name === 'NotSupportedError') {
                alert('Audio format not supported by your browser.');
              }
              
              setPlayingDemo(null);
            });
        } else {
          setPlayingDemo(demoId);
        }
      }
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
      
      // Handle play promise for progress bar click
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setPlayingDemo(demoId);
          })
          .catch((error) => {
            console.warn(`Audio play failed for ${demoId} (progress click):`, error);
            setPlayingDemo(null);
          });
      } else {
        setPlayingDemo(demoId);
      }
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
                  title={getText('seavoice.components.voiceDemo.seekTooltip', 'Click to seek')}
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