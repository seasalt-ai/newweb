import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';
import { useTranslation, type SupportedLanguage } from '../../i18n/helpers';

interface VoiceDemoProps {
  lang: SupportedLanguage;
  translations?: any;
}

const VoiceDemo: React.FC<VoiceDemoProps> = ({ lang, translations }) => {
  const { t: hookT, isLoading } = translations ? 
    { t: null, isLoading: false } : 
    useTranslation(lang);
  
  const getText = (key: string, fallback: string = key): string => {
    if (translations) {
      const keys = key.split('.');
      let result: any = translations;
      
      for (const k of keys) {
        if (result && typeof result === 'object' && k in result) {
          result = result[k];
        } else {
          console.warn(`Missing translation key: "${key}" in locale "${lang}"`);
          return fallback;
        }
      }
      
      return typeof result === 'string' ? result : fallback;
    }
    
    return hookT ? hookT(key) : fallback;
  };

  const [selectedVoice, setSelectedVoice] = useState('sarah');
  const [isPlaying, setIsPlaying] = useState(false);
  const [textContent, setTextContent] = useState('');

  // Voice options
  const voices = [
    { 
      id: 'sarah', 
      name: getText('textToSpeech.voices.sarah.name', 'Sarah'),
      gender: getText('textToSpeech.voices.sarah.gender', 'Female'),
      accent: getText('textToSpeech.voices.sarah.accent', 'US English'),
      description: getText('textToSpeech.voices.sarah.description', 'Professional, warm')
    },
    { 
      id: 'tom', 
      name: getText('textToSpeech.voices.tom.name', 'Tom'),
      gender: getText('textToSpeech.voices.tom.gender', 'Male'),
      accent: getText('textToSpeech.voices.tom.accent', 'US English'),
      description: getText('textToSpeech.voices.tom.description', 'Friendly, conversational')
    },
    { 
      id: 'lissa', 
      name: getText('textToSpeech.voices.lissa.name', 'Lissa'),
      gender: getText('textToSpeech.voices.lissa.gender', 'Female'),
      accent: getText('textToSpeech.voices.lissa.accent', 'UK English'),
      description: getText('textToSpeech.voices.lissa.description', 'Energetic, helpful')
    },
    { 
      id: 'alex', 
      name: getText('textToSpeech.voices.alex.name', 'Alex'),
      gender: getText('textToSpeech.voices.alex.gender', 'Male'),
      accent: getText('textToSpeech.voices.alex.accent', 'Australian'),
      description: getText('textToSpeech.voices.alex.description', 'Clear, confident')
    },
    { 
      id: 'maria', 
      name: getText('textToSpeech.voices.maria.name', 'Maria'),
      gender: getText('textToSpeech.voices.maria.gender', 'Female'),
      accent: getText('textToSpeech.voices.maria.accent', 'Spanish'),
      description: getText('textToSpeech.voices.maria.description', 'Expressive, natural')
    },
    { 
      id: 'hiroshi', 
      name: getText('textToSpeech.voices.hiroshi.name', 'Hiroshi'),
      gender: getText('textToSpeech.voices.hiroshi.gender', 'Male'),
      accent: getText('textToSpeech.voices.hiroshi.accent', 'Japanese'),
      description: getText('textToSpeech.voices.hiroshi.description', 'Polite, professional')
    }
  ];

  const handlePlay = () => {
    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), 3000);
  };

  // Handle loading state
  if (isLoading) {
    return (
      <div className="animate-pulse bg-gray-200 h-64 rounded-2xl"></div>
    );
  }

  // Initialize default text if empty
  React.useEffect(() => {
    if (!textContent) {
      setTextContent(getText('textToSpeech.demo.defaultText', 'Hello! I\'m an AI voice assistant powered by SeaVoice technology.'));
    }
  }, [textContent, translations, hookT]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200"
    >
      <div className="space-y-6">
        {/* Voice Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            {getText('textToSpeech.demo.chooseVoice', 'Choose a voice:')}
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {voices.map((voice) => (
              <motion.div
                key={voice.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedVoice(voice.id)}
                className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  selectedVoice === voice.id
                    ? 'border-purple-600 bg-purple-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="font-semibold text-gray-900">{voice.name}</div>
                <div className="text-sm text-gray-600">{voice.gender} • {voice.accent}</div>
                <div className="text-xs text-gray-500 mt-1">{voice.description}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Text Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {getText('textToSpeech.demo.textPrompt', 'Enter text to convert to speech:')}
          </label>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent resize-none"
            rows={3}
            value={textContent}
            onChange={(e) => setTextContent(e.target.value)}
            placeholder={getText('textToSpeech.demo.placeholderText', 'Type something for our AI to say...')}
          />
        </div>

        {/* Play Button */}
        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePlay}
            disabled={isPlaying}
            className={`inline-flex items-center px-8 py-4 rounded-lg text-lg font-semibold transition-all ${
              isPlaying
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-5 h-5 mr-2" />
                {getText('textToSpeech.demo.playing', 'Playing...')}
              </>
            ) : (
              <>
                <Play className="w-5 h-5 mr-2" />
                {getText('textToSpeech.demo.generateSpeech', 'Generate Speech')}
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
            {[...Array(25)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 bg-gradient-to-t from-purple-600 to-blue-600 rounded-full"
                animate={{
                  height: [4, Math.random() * 50 + 10, 4],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.05,
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