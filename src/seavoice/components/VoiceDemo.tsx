import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';

const VoiceDemo = () => {
  const [playingDemo, setPlayingDemo] = useState<string | null>(null);

  const demos = [
    {
      id: 'restaurant',
      title: 'Restaurant reservation booking',
      image: '/demo-images/restaurant.png',
      audioUrl: '/demo-audio/restaurant.mp3' // You'll need to add these audio files
    },
    {
      id: 'insurance',
      title: 'Insurance verification call',
      image: '/demo-images/insurance.png',
      audioUrl: '/demo-audio/insurance.mp3'
    },
    {
      id: 'ecommerce',
      title: 'E-commerce cart recovery',
      image: '/demo-images/ecommerce.png',
      audioUrl: '/demo-audio/ecommerce.mp3'
    },
    {
      id: 'technical',
      title: 'Technical support troubleshooting',
      image: '/demo-images/technical.png',
      audioUrl: '/demo-audio/technical.mp3'
    },
    {
      id: 'realestate',
      title: 'Real estate inquiry handling',
      image: '/demo-images/realestate.png',
      audioUrl: '/demo-audio/realestate.mp3'
    },
    {
      id: 'donation',
      title: 'Donation campaign outreach',
      image: '/demo-images/donation.png',
      audioUrl: '/demo-audio/donation.mp3'
    }
  ];

  const handlePlay = (demoId: string) => {
    if (playingDemo === demoId) {
      setPlayingDemo(null);
    } else {
      setPlayingDemo(demoId);
      // Simulate audio playing for 3 seconds
      setTimeout(() => {
        setPlayingDemo(null);
      }, 3000);
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
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-purple-600 rounded-full"
                    initial={{ width: '0%' }}
                    animate={{ 
                      width: playingDemo === demo.id ? '100%' : '0%' 
                    }}
                    transition={{ 
                      duration: playingDemo === demo.id ? 3 : 0.2,
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