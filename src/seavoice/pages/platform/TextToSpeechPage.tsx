import { useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, User, Settings, Globe, Play, Pause } from 'lucide-react';

const TextToSpeechPage = () => {
  const [selectedVoice, setSelectedVoice] = useState('sarah');
  const [isPlaying, setIsPlaying] = useState(false);

  const voices = [
    { id: 'sarah', name: 'Sarah', gender: 'Female', accent: 'US English', description: 'Professional, warm' },
    { id: 'tom', name: 'Tom', gender: 'Male', accent: 'US English', description: 'Friendly, conversational' },
    { id: 'lissa', name: 'Lissa', gender: 'Female', accent: 'UK English', description: 'Energetic, helpful' },
    { id: 'alex', name: 'Alex', gender: 'Male', accent: 'Australian', description: 'Clear, confident' },
    { id: 'maria', name: 'Maria', gender: 'Female', accent: 'Spanish', description: 'Expressive, natural' },
    { id: 'hiroshi', name: 'Hiroshi', gender: 'Male', accent: 'Japanese', description: 'Polite, professional' }
  ];

  const features = [
    {
      icon: User,
      title: 'Custom Voice Cloning',
      description: 'Create unique voice profiles that match your brand personality and speaking style.',
      capabilities: ['Voice cloning from samples', 'Brand voice consistency', 'Emotional expression', 'Custom pronunciations']
    },
    {
      icon: Settings,
      title: 'Advanced Controls',
      description: 'Fine-tune every aspect of speech generation for perfect audio output.',
      capabilities: ['Speed adjustment', 'Pitch control', 'Emphasis placement', 'Pause insertion']
    },
    {
      icon: Globe,
      title: 'Multi-Language Support',
      description: 'Generate natural speech in 40+ languages with native pronunciation.',
      capabilities: ['40+ languages', 'Regional accents', 'Code-switching', 'Multilingual voices']
    }
  ];

  const qualityMetrics = [
    { metric: 'Naturalness Score', value: '4.8/5', description: 'Human evaluation rating' },
    { metric: 'Intelligibility', value: '99.2%', description: 'Word recognition accuracy' },
    { metric: 'Latency', value: '< 200ms', description: 'Text to audio generation' },
    { metric: 'Audio Quality', value: '48kHz', description: 'High-fidelity output' }
  ];

  const useCases = [
    {
      title: 'Customer Service',
      description: 'Provide consistent, professional voice responses for customer interactions.',
      benefits: ['24/7 availability', 'Consistent quality', 'Multi-language support', 'Brand voice alignment']
    },
    {
      title: 'Content Creation',
      description: 'Generate voiceovers for videos, podcasts, and multimedia content.',
      benefits: ['Cost-effective production', 'Quick turnaround', 'Multiple voice options', 'Easy revisions']
    },
    {
      title: 'Accessibility',
      description: 'Make content accessible with high-quality text-to-speech for visually impaired users.',
      benefits: ['Screen reader enhancement', 'Document narration', 'Web accessibility', 'Educational support']
    },
    {
      title: 'Interactive Applications',
      description: 'Add voice capabilities to apps, games, and interactive experiences.',
      benefits: ['Real-time generation', 'Dynamic content', 'User engagement', 'Immersive experiences']
    }
  ];

  const handlePlay = () => {
    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <Volume2 className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Text-to-Speech Technology
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Generate human-like speech from text with our advanced neural text-to-speech technology. 
              Create custom voices, support 40+ languages, and deliver exceptional audio quality.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Try Voice Generation
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Interactive Voice Demo */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Experience Our Voice Technology
            </h2>
            <p className="text-xl text-gray-600">
              Try different voices and hear the quality for yourself
            </p>
          </motion.div>

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
                  Choose a voice:
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
                  Enter text to convert to speech:
                </label>
                <textarea
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent resize-none"
                  rows={3}
                  defaultValue="Hello! I'm an AI voice assistant powered by SeaVoice technology. I can help you with customer service, sales, and support in a natural, human-like voice."
                  placeholder="Type something for our AI to say..."
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
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Advanced Voice Generation
            </h2>
            <p className="text-xl text-gray-600">
              Cutting-edge neural networks deliver human-like speech quality
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                <div className="space-y-2">
                  {feature.capabilities.map((capability, capIndex) => (
                    <div key={capIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">{capability}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Exceptional Quality Metrics
            </h2>
            <p className="text-xl text-gray-600">
              Measured performance that delivers professional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 text-center"
              >
                <div className="text-3xl font-bold text-purple-600 mb-2">{metric.value}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{metric.metric}</h3>
                <p className="text-sm text-gray-600">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Versatile Applications
            </h2>
            <p className="text-xl text-gray-600">
              Transform text into speech across industries and use cases
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                <p className="text-gray-600 mb-6">{useCase.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Voice Cloning Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Custom Voice Cloning
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Create unique voice profiles that perfectly match your brand personality. 
                Our advanced voice cloning technology can replicate speaking styles, 
                accents, and emotional expressions with just a few minutes of sample audio.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <User className="w-6 h-6 text-purple-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Brand Voice Consistency</h3>
                    <p className="text-gray-600">Maintain consistent brand voice across all interactions</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Settings className="w-6 h-6 text-purple-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Fine-Tuned Control</h3>
                    <p className="text-gray-600">Adjust tone, pace, and emotional expression</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Volume2 className="w-6 h-6 text-purple-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">High Fidelity Output</h3>
                    <p className="text-gray-600">Professional quality audio for any application</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Voice Cloning Process</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mr-4 text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Upload Audio Samples</h4>
                    <p className="text-gray-600 text-sm">Provide 5-10 minutes of clean audio recordings</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mr-4 text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">AI Training</h4>
                    <p className="text-gray-600 text-sm">Our neural networks learn your unique voice characteristics</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mr-4 text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Voice Generation</h4>
                    <p className="text-gray-600 text-sm">Generate unlimited speech with your custom voice</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Give Your Brand a Voice?</h2>
            <p className="text-xl mb-8 opacity-90">
              Create custom voices and generate professional-quality speech for any application
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Voice Cloning
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore API
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TextToSpeechPage;