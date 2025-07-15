import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Volume2, Mic } from 'lucide-react';

const VoiceDemo = () => {
  const [text, setText] = useState('Hello! I\'m SeaVoice, your AI assistant. How can I help you today?');
  const [selectedVoice, setSelectedVoice] = useState('sarah');
  const [isPlaying, setIsPlaying] = useState(false);

  const voices = [
    { id: 'sarah', name: 'Sarah', description: 'Professional, warm' },
    { id: 'tom', name: 'Tom', description: 'Friendly, conversational' },
    { id: 'lissa', name: 'Lissa', description: 'Energetic, helpful' },
    { id: 'alex', name: 'Alex', description: 'Clear, confident' },
  ];

  const handlePlay = () => {
    setIsPlaying(true);
    // Simulate audio playing
    setTimeout(() => {
      setIsPlaying(false);
    }, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200"
    >
      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mb-6 mx-auto">
        <Mic className="w-8 h-8 text-white" />
      </div>
      
      <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">
        Interactive Voice Demo
      </h3>
      
      <div className="space-y-6">
        {/* Text Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Enter text to convert to speech:
          </label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
            rows={3}
            placeholder="Type something for our AI to say..."
          />
        </div>
        
        {/* Voice Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Choose a voice:
          </label>
          <div className="grid grid-cols-2 gap-3">
            {voices.map((voice) => (
              <motion.div
                key={voice.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedVoice(voice.id)}
                className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  selectedVoice === voice.id
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="font-semibold text-gray-900">{voice.name}</div>
                <div className="text-sm text-gray-600">{voice.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Play Button */}
        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePlay}
            disabled={!text.trim() || isPlaying}
            className={`inline-flex items-center px-8 py-4 rounded-lg text-lg font-semibold transition-all ${
              !text.trim() || isPlaying
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-600 to-teal-600 text-white hover:from-blue-700 hover:to-teal-700'
            }`}
          >
            {isPlaying ? (
              <>
                <Volume2 className="w-5 h-5 mr-2 animate-pulse" />
                Playing...
              </>
            ) : (
              <>
                <Play className="w-5 h-5 mr-2" />
                Generate Speech
              </>
            )}
          </motion.button>
        </div>
        
        {/* Audio Visualization */}
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center space-x-1 h-16"
          >
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 bg-gradient-to-t from-blue-600 to-teal-600 rounded-full"
                animate={{
                  height: [4, Math.random() * 40 + 10, 4],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default VoiceDemo;