import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Brain, MessageSquare, Mic, Speaker, ArrowRight, Zap } from 'lucide-react';

const VoiceConversationFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoHighlight, setAutoHighlight] = useState(0);

  const steps = [
    {
      id: 'call-connected',
      title: 'Call Connected',
      description: 'Customer connected with your business',
      icon: Phone,
      color: 'from-blue-500 to-blue-600',
      animation: 'ring'
    },
    {
      id: 'listening',
      title: 'AI Listening',
      description: 'Advanced speech recognition captures every word',
      icon: Mic,
      color: 'from-green-500 to-green-600',
      animation: 'pulse'
    },
    {
      id: 'processing',
      title: 'AI Processing',
      description: 'Neural networks understand intent and context',
      icon: Brain,
      color: 'from-purple-500 to-purple-600',
      animation: 'think'
    },
    {
      id: 'responding',
      title: 'AI Responding',
      description: 'Human-like voice delivers perfect response',
      icon: Speaker,
      color: 'from-orange-500 to-orange-600',
      animation: 'speak'
    }
  ];

  const conversations = [
    {
      customer: "Hi, I'd like to schedule an appointment for next Tuesday.",
      ai: "I'd be happy to help you schedule an appointment. Let me check our availability for next Tuesday. What time would work best for you?",
      context: "Appointment Booking"
    },
    {
      customer: "I'm having trouble with my recent order. It hasn't arrived yet.",
      ai: "I understand your concern about your order. Let me look that up for you right away. Can you please provide your order number?",
      context: "Order Support"
    },
    {
      customer: "Can you tell me about your pricing plans?",
      ai: "Absolutely! We have several pricing options to fit different needs. Our basic plan starts at $29/month and includes all core features. Would you like me to explain the differences?",
      context: "Sales Inquiry"
    }
  ];

  const [currentConversation, setCurrentConversation] = useState(0);
  const [showCustomerText, setShowCustomerText] = useState(false);
  const [showAIText, setShowAIText] = useState(false);

  // Synchronized animation: conversation type changes, then step animation cycles through each card for 2 seconds (8 seconds total), then next conversation type
  useEffect(() => {
    let stepInterval: NodeJS.Timeout;
    let conversationTimeout: NodeJS.Timeout;

    const startAnimation = () => {
      let currentStepIndex = 0;
      
      const animateSteps = () => {
        setAutoHighlight(currentStepIndex);
        currentStepIndex++;
        
        if (currentStepIndex < steps.length) {
          // Continue to next step after 2 seconds
          stepInterval = setTimeout(animateSteps, 2000);
        } else {
          // All steps completed (8 seconds total), move to next conversation
          conversationTimeout = setTimeout(() => {
            setCurrentConversation(prev => (prev + 1) % conversations.length);
            startAnimation(); // Start the cycle again with new conversation
          }, 1000); // Brief pause before switching conversations
        }
      };
      
      // Start the step animation
      animateSteps();
    };

    // Start the initial animation
    startAnimation();

    return () => {
      clearTimeout(stepInterval);
      clearTimeout(conversationTimeout);
    };
  }, []); // Empty dependency array since we manage the cycle internally

  useEffect(() => {
    if (!isPlaying) return;

    const sequence = async () => {
      // Reset states
      setShowCustomerText(false);
      setShowAIText(false);
      
      // Step 1: Incoming call
      setCurrentStep(0);
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Step 2: Show customer speech and listening
      setCurrentStep(1);
      setShowCustomerText(true);
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Step 3: AI processing
      setCurrentStep(2);
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Step 4: AI response
      setCurrentStep(3);
      setShowAIText(true);
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Wait a moment before cycling to next conversation
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Move to next conversation and restart if still playing
      if (isPlaying) {
        setCurrentConversation(prev => (prev + 1) % conversations.length);
        // Longer delay before restarting sequence to show the progression
        setTimeout(() => {
          if (isPlaying) {
            sequence();
          }
        }, 1000);
      }
    };

    sequence();
  }, [isPlaying]); // Remove currentConversation from dependency to prevent restart on conversation change

  const startDemo = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Control Panel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        {/* Conversation selector */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <div className="space-y-3">
            <div className="text-sm text-white/80 text-center">Choose Conversation Type:</div>
            <div className="flex flex-wrap gap-3 justify-center">
              {conversations.map((conv, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isPlaying) {
                      setCurrentConversation(index);
                    }
                  }}
                  disabled={isPlaying}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
                    index === currentConversation
                      ? 'bg-purple-500 text-white border-purple-400 shadow-lg'
                      : 'bg-white/10 text-white/80 border-white/20 hover:bg-white/20 hover:border-white/40'
                  } ${isPlaying ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
                >
                  {conv.context}
                </button>
              ))}
            </div>
            
            {isPlaying && (
              <div className="flex items-center justify-center space-x-2 mt-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <div className="text-xs text-green-300">Auto-progressing through scenarios...</div>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Conversation Flow Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Flow Container */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              {/* Steps Flow */}
              <div className="space-y-8 mb-8">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    className={`flex items-center space-x-4 p-4 rounded-lg transition-all duration-500 ${
                      (isPlaying ? currentStep === index : autoHighlight === index)
                        ? 'bg-white/20 border-2 border-white/40' 
                        : 'bg-white/5 border border-white/10'
                    }`}
                  >
                    {/* Step Icon */}
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r ${step.color} relative overflow-hidden`}>
                      <step.icon className="w-6 h-6 text-white relative z-10" />
                      
                      {/* Animated effects */}
                      {(isPlaying ? currentStep === index : autoHighlight === index) && (
                        <>
                          {step.animation === 'ring' && (
                            <motion.div
                              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                              className="absolute inset-0 bg-blue-400 rounded-full"
                            />
                          )}
                          {step.animation === 'pulse' && (
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 1, repeat: Infinity }}
                              className="absolute inset-0 bg-green-400/30 rounded-full"
                            />
                          )}
                          {step.animation === 'think' && (
                            <motion.div
                              animate={{ rotate: [0, 360] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                              className="absolute inset-2 border-2 border-purple-300 rounded-full border-t-transparent"
                            />
                          )}
                          {step.animation === 'speak' && (
                            <motion.div
                              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.7, 0.3] }}
                              transition={{ duration: 0.8, repeat: Infinity }}
                              className="absolute inset-0 bg-orange-400/30 rounded-full"
                            />
                          )}
                        </>
                      )}
                    </div>

                    {/* Step Content */}
                    <div className="flex-1">
                      <div className="text-white font-semibold">{step.title}</div>
                      <div className="text-slate-300 text-sm">{step.description}</div>
                    </div>

                    {/* Active Indicator */}
                    {(isPlaying ? currentStep === index : autoHighlight === index) && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-3 h-3 bg-green-400 rounded-full animate-pulse"
                      />
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Conversation Display */}
              <div className="space-y-4">
                <div className="text-sm font-medium text-white mb-4">Live Conversation:</div>
                
                {/* Show preview when not playing, actual conversation when playing */}
                {!isPlaying && (
                  <div className="space-y-3">
                    {/* Customer Message Preview */}
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 relative">
                        <Mic className="w-4 h-4 text-white" />
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                      </div>
                      <div className="bg-blue-500/20 rounded-lg p-3 flex-1 relative">
                        <div className="flex items-center space-x-2 mb-1">
                          <div className="flex space-x-1">
                            <div className="w-1 h-3 bg-blue-300 rounded animate-pulse" style={{animationDelay: '0ms'}} />
                            <div className="w-1 h-4 bg-blue-300 rounded animate-pulse" style={{animationDelay: '150ms'}} />
                            <div className="w-1 h-2 bg-blue-300 rounded animate-pulse" style={{animationDelay: '300ms'}} />
                            <div className="w-1 h-5 bg-blue-300 rounded animate-pulse" style={{animationDelay: '450ms'}} />
                          </div>
                          <span className="text-xs text-blue-200 opacity-70">Speaking...</span>
                        </div>
                        <div className="text-blue-100 text-sm">
                          {conversations[currentConversation].customer}
                        </div>
                      </div>
                    </div>

                    {/* AI Response Preview */}
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 relative">
                        <Speaker className="w-4 h-4 text-white" />
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full animate-pulse" />
                      </div>
                      <div className="bg-purple-500/20 rounded-lg p-3 flex-1 relative">
                        <div className="flex items-center space-x-2 mb-1">
                          <div className="flex space-x-1">
                            <div className="w-1 h-2 bg-purple-300 rounded animate-pulse" style={{animationDelay: '0ms'}} />
                            <div className="w-1 h-4 bg-purple-300 rounded animate-pulse" style={{animationDelay: '100ms'}} />
                            <div className="w-1 h-3 bg-purple-300 rounded animate-pulse" style={{animationDelay: '200ms'}} />
                            <div className="w-1 h-5 bg-purple-300 rounded animate-pulse" style={{animationDelay: '300ms'}} />
                            <div className="w-1 h-2 bg-purple-300 rounded animate-pulse" style={{animationDelay: '400ms'}} />
                          </div>
                          <span className="text-xs text-purple-200 opacity-70">AI Speaking...</span>
                        </div>
                        <div className="text-purple-100 text-sm">
                          {conversations[currentConversation].ai}
                        </div>
                      </div>
                    </div>

                  </div>
                )}
                
                {/* Animated conversation during demo */}
                {isPlaying && (
                  <>
                    {/* Customer Message */}
                    <AnimatePresence>
                      {showCustomerText && (
                        <motion.div
                          initial={{ opacity: 0, x: -20, scale: 0.9 }}
                          animate={{ opacity: 1, x: 0, scale: 1 }}
                          exit={{ opacity: 0, x: -20, scale: 0.9 }}
                          className="flex items-start space-x-3"
                        >
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-sm font-medium">C</span>
                          </div>
                          <div className="bg-blue-500/20 rounded-lg p-3 flex-1">
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.3 }}
                              className="text-blue-100 text-sm"
                            >
                              {conversations[currentConversation].customer}
                            </motion.div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* AI Response */}
                    <AnimatePresence>
                      {showAIText && (
                        <motion.div
                          initial={{ opacity: 0, x: 20, scale: 0.9 }}
                          animate={{ opacity: 1, x: 0, scale: 1 }}
                          exit={{ opacity: 0, x: 20, scale: 0.9 }}
                          className="flex items-start space-x-3"
                        >
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-sm font-medium">AI</span>
                          </div>
                          <div className="bg-purple-500/20 rounded-lg p-3 flex-1">
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.5 }}
                              className="text-purple-100 text-sm"
                            >
                              {conversations[currentConversation].ai}
                            </motion.div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </div>
            </div>

            {/* Floating Processing Indicators */}
            <AnimatePresence>
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg p-4 shadow-xl"
                >
                  <div className="text-lg font-bold">AI Thinking...</div>
                  <div className="text-sm opacity-90">Processing context</div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Success Metrics */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-lg p-4 shadow-xl"
            >
              <div className="text-lg font-bold">99.2%</div>
              <div className="text-sm opacity-90">Accuracy Rate</div>
            </motion.div>
          </motion.div>
    </div>
  );
};

export default VoiceConversationFlow;
