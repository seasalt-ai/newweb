import { motion } from 'framer-motion';

const WaveformAnimation = () => {
  // Generate random heights for waveform bars
  const bars = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    height: Math.random() * 60 + 20, // Random height between 20-80
    delay: Math.random() * 0.5
  }));

  return (
    <div className="flex items-end justify-center space-x-1 h-20">
      {bars.map((bar) => (
        <motion.div
          key={bar.id}
          className="bg-gradient-to-t from-blue-400 to-purple-400 rounded-full w-2"
          initial={{ height: 10 }}
          animate={{ 
            height: [10, bar.height, 20, bar.height * 0.7, bar.height, 15],
            opacity: [0.6, 1, 0.8, 1, 0.9, 0.7]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: bar.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default WaveformAnimation;
