import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Volume2, Globe, ArrowRight, Settings, Play, Pause, RotateCcw } from 'lucide-react';

const AIVoiceAvatar = () => {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentVoice, setCurrentVoice] = useState('professional');
  const [currentLanguage, setCurrentLanguage] = useState('english');
  const [avatarMood, setAvatarMood] = useState('neutral');
  const [demoText, setDemoText] = useState('');

  const voices = [
    { id: 'professional', name: 'Professional Sarah', description: 'Clear, authoritative business voice' },
    { id: 'friendly', name: 'Friendly Mike', description: 'Warm, approachable customer service' },
    { id: 'empathetic', name: 'Caring Emma', description: 'Compassionate healthcare voice' }
  ];

  const languages = [
    { id: 'english', name: 'English', flag: '🇺🇸' },
    { id: 'spanish', name: 'Spanish', flag: '🇪🇸' },
    { id: 'french', name: 'French', flag: '🇫🇷' },
    { id: 'german', name: 'German', flag: '🇩🇪' },
    { id: 'chinese', name: 'Chinese', flag: '🇨🇳' }
  ];

  const demoScripts = {
    professional: "Hello, I'm Sarah, your AI business assistant. I can handle customer inquiries, schedule appointments, and provide detailed product information with precision and clarity.",
    friendly: "Hi there! I'm Mike, and I'm here to make your experience amazing. Whether you need help with an order or just have a quick question, I'm happy to chat!",
    empathetic: "Hello, I'm Emma. I understand that healthcare questions can be stressful, and I'm here to provide caring, accurate support whenever you need it."
  };

  // Avatar expressions based on mood
  const avatarStates = {
    neutral: {
      eyeScale: 1,
      mouthCurve: 0,
      eyebrowY: 0,
      color: 'from-blue-400 to-blue-600'
    },
    speaking: {
      eyeScale: 0.9,
      mouthCurve: 5,
      eyebrowY: -2,
      color: 'from-green-400 to-green-600'
    },
    listening: {
      eyeScale: 1.1,
      mouthCurve: 2,
      eyebrowY: -1,
      color: 'from-purple-400 to-purple-600'
    },
    thinking: {
      eyeScale: 0.8,
      mouthCurve: 1,
      eyebrowY: -3,
      color: 'from-orange-400 to-orange-600'
    }
  };

  const startDemo = async () => {
    setAvatarMood('thinking');
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSpeaking(true);
    setAvatarMood('speaking');
    setDemoText(demoScripts[currentVoice as keyof typeof demoScripts]);
    
    // Simulate speaking duration
    await new Promise(resolve => setTimeout(resolve, 4000));
    
    setIsSpeaking(false);
    setAvatarMood('neutral');
  };

  const startListening = () => {
    setIsListening(true);
    setAvatarMood('listening');
    
    // Simulate listening for 3 seconds
    setTimeout(() => {
      setIsListening(false);
      setAvatarMood('thinking');
      
      setTimeout(() => {
        setAvatarMood('speaking');
        setIsSpeaking(true);
        setDemoText("I heard you! This is where I would respond to your voice input with contextual understanding.");
        
        setTimeout(() => {
          setIsSpeaking(false);
          setAvatarMood('neutral');
        }, 3000);
      }, 1500);
    }, 3000);
  };

  const resetDemo = () => {
    setIsListening(false);
    setIsSpeaking(false);
    setAvatarMood('neutral');
    setDemoText('');
  };

  const currentAvatarState = avatarStates[avatarMood as keyof typeof avatarStates];

  return (
    <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-20 lg:py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-400/30 text-purple-200 text-sm font-medium mb-8"
            >
              <Volume2 className="w-4 h-4 mr-2 text-pink-400" />
              Interactive AI Avatar
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
              <span className="block">Meet Your</span>
              <span className="bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                AI Voice Agent
              </span>
            </h1>

            <p className="text-xl text-purple-100 leading-relaxed mb-8">
              Experience the future of AI communication. Our avatars demonstrate human-like 
              conversations with emotional intelligence and multiple personality options.
            </p>

            {/* Voice Selection */}
            <div className="mb-6">
              <div className="text-sm font-medium text-purple-200 mb-3">Choose Voice Personality:</div>
              <div className="grid grid-cols-1 gap-2">
                {voices.map((voice) => (
                  <motion.button
                    key={voice.id}
                    onClick={() => setCurrentVoice(voice.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-3 rounded-lg text-left transition-all ${
                      currentVoice === voice.id
                        ? 'bg-purple-500/30 border-2 border-purple-400'
                        : 'bg-white/10 border border-white/20 hover:bg-white/20'
                    }`}
                  >
                    <div className="text-white font-medium">{voice.name}</div>
                    <div className="text-purple-200 text-sm">{voice.description}</div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Language Selection */}
            <div className="mb-8">
              <div className="text-sm font-medium text-purple-200 mb-3">Language:</div>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <motion.button
                    key={lang.id}
                    onClick={() => setCurrentLanguage(lang.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-all ${
                      currentLanguage === lang.id
                        ? 'bg-purple-500/30 text-white'
                        : 'bg-white/10 text-purple-200 hover:bg-white/20'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span className="text-sm font-medium">{lang.name}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Demo Controls */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                onClick={startDemo}
                disabled={isSpeaking || isListening}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Play className="mr-2 w-5 h-5" />
                Demo Voice
              </motion.button>

              <motion.button
                onClick={startListening}
                disabled={isSpeaking || isListening}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-400 text-purple-200 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500/10 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Mic className="mr-2 w-5 h-5" />
                Try Voice Input
              </motion.button>

              <motion.button
                onClick={resetDemo}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-400 text-gray-300 px-4 py-4 rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center"
              >
                <RotateCcw className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Right column - Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            {/* Avatar Container */}
            <div className="relative w-80 h-80">
              {/* Outer glow ring */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className={`absolute inset-0 bg-gradient-to-br ${currentAvatarState.color} rounded-full blur-2xl`}
              />

              {/* Main Avatar Circle */}
              <motion.div
                animate={{ 
                  scale: isSpeaking ? [1, 1.05, 1] : 1,
                  boxShadow: isSpeaking 
                    ? [
                        "0 0 20px rgba(139, 92, 246, 0.5)",
                        "0 0 60px rgba(139, 92, 246, 0.8)",
                        "0 0 20px rgba(139, 92, 246, 0.5)"
                      ]
                    : "0 0 40px rgba(139, 92, 246, 0.3)"
                }}
                transition={{
                  scale: { duration: 0.5, repeat: isSpeaking ? Infinity : 0 },
                  boxShadow: { duration: 1, repeat: isSpeaking ? Infinity : 0 }
                }}
                className={`relative w-full h-full bg-gradient-to-br ${currentAvatarState.color} rounded-full flex items-center justify-center shadow-2xl overflow-hidden`}
              >
                {/* Avatar Face */}
                <div className="relative w-48 h-48 flex items-center justify-center">
                  {/* Eyes */}
                  <div className="absolute top-16 left-12 right-12 flex justify-between">
                    <motion.div
                      animate={{ scaleY: currentAvatarState.eyeScale }}
                      className="w-4 h-6 bg-white rounded-full"
                    />
                    <motion.div
                      animate={{ scaleY: currentAvatarState.eyeScale }}
                      className="w-4 h-6 bg-white rounded-full"
                    />
                  </div>

                  {/* Eyebrows */}
                  <div className="absolute top-12 left-12 right-12 flex justify-between">
                    <motion.div
                      animate={{ y: currentAvatarState.eyebrowY }}
                      className="w-6 h-1 bg-white/70 rounded-full transform -rotate-12"
                    />
                    <motion.div
                      animate={{ y: currentAvatarState.eyebrowY }}
                      className="w-6 h-1 bg-white/70 rounded-full transform rotate-12"
                    />
                  </div>

                  {/* Mouth */}
                  <motion.div
                    animate={{ 
                      borderRadius: isSpeaking 
                        ? ["50% 50% 50% 50%", "50% 50% 40% 40%", "50% 50% 50% 50%"]
                        : "50% 50% 50% 50%",
                      scaleX: isSpeaking ? [1, 1.2, 1] : 1
                    }}
                    transition={{
                      duration: 0.3,
                      repeat: isSpeaking ? Infinity : 0
                    }}
                    className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-white/90"
                    style={{
                      borderRadius: `50% 50% ${50 + currentAvatarState.mouthCurve}% ${50 + currentAvatarState.mouthCurve}%`
                    }}
                  />

                  {/* Speaking animation - sound waves */}
                  <AnimatePresence>
                    {isSpeaking && (
                      <div className="absolute -right-16 top-1/2 transform -translate-y-1/2">
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ 
                              opacity: [0, 1, 0],
                              scale: [0, 1.5, 2],
                              x: [0, 20, 40]
                            }}
                            exit={{ opacity: 0 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              delay: i * 0.2
                            }}
                            className="absolute w-2 h-2 bg-white/60 rounded-full"
                          />
                        ))}
                      </div>
                    )}
                  </AnimatePresence>

                  {/* Listening animation - ear icon */}
                  <AnimatePresence>
                    {isListening && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                          opacity: 1, 
                          scale: [1, 1.2, 1],
                          rotate: [0, -10, 10, 0]
                        }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{
                          scale: { duration: 1, repeat: Infinity },
                          rotate: { duration: 0.5, repeat: Infinity }
                        }}
                        className="absolute -left-16 top-1/2 transform -translate-y-1/2"
                      >
                        <Mic className="w-8 h-8 text-white/80" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mood indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-black/20 rounded-full">
                  <span className="text-white text-xs font-medium capitalize">{avatarMood}</span>
                </div>
              </motion.div>

              {/* Voice visualization */}
              {isSpeaking && (
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex items-end space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        height: [8, 24, 12, 20, 8],
                        opacity: [0.4, 1, 0.6, 1, 0.4]
                      }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: i * 0.1
                      }}
                      className="w-1 bg-white/60 rounded-full"
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Status Display */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-full max-w-sm"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-purple-200">Status:</span>
                  <span className={`text-sm font-bold ${
                    isListening ? 'text-purple-300' : 
                    isSpeaking ? 'text-green-300' : 
                    'text-blue-300'
                  }`}>
                    {isListening ? 'Listening...' : 
                     isSpeaking ? 'Speaking...' : 
                     'Ready'}
                  </span>
                </div>
                <AnimatePresence>
                  {demoText && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-xs text-purple-200 leading-relaxed"
                    >
                      "{demoText}"
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIVoiceAvatar;
