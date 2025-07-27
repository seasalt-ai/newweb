import { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Import all animation components
import MultiChannelFlow from './hero-animations/MultiChannelFlow';
import AgentToAI from './hero-animations/AgentToAI';
import RealtimeDashboard from './hero-animations/RealtimeDashboard';
import InteractiveChannels from './hero-animations/InteractiveChannels';
import ConversationLearning from './hero-animations/ConversationLearning';
import PhoneVoiceAI from './hero-animations/PhoneVoiceAI';

const Hero = () => {
  const { t } = useTranslation();
  
  const [activeAnimation, setActiveAnimation] = useState<string>('phoneVoice');
  const [autoRotate, setAutoRotate] = useState(true);

  const animations = [
    {
      id: 'phoneVoice',
      name: 'Phone Voice AI',
      description: 'AI agents handling phone conversations',
      component: PhoneVoiceAI,
    },
    {
      id: 'interactive',
      name: 'Interactive Channels',
      description: 'Click to see different conversations',
      component: InteractiveChannels,
    },
    {
      id: 'multiChannel',
      name: 'Multi-Channel Flow',
      description: 'Messages flowing between different platforms',
      component: MultiChannelFlow,
    },
    {
      id: 'agentToAI',
      name: 'Human-to-AI Handoff',
      description: 'Start with humans, scale with AI',
      component: AgentToAI,
    },
    {
      id: 'learning',
      name: 'AI Learning Journey',
      description: 'Watch AI get smarter from content',
      component: ConversationLearning,
    },
    {
      id: 'dashboard',
      name: 'Real-Time Analytics',
      description: 'Live performance metrics',
      component: RealtimeDashboard,
    },
  ];
  
  const [chatMessages, setChatMessages] = useState([
    { id: 1, type: 'user', text: t('seachat.hero.chat.userMessage'), time: '2:30 PM' },
    { id: 2, type: 'bot', text: t('seachat.hero.chat.botMessage'), time: '2:30 PM' },
  ]);
  
  const [currentMessage, setCurrentMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const bubbles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
    size: 20 + Math.random() * 40,
  }));

  const handleSendMessage = () => {
    if (!currentMessage.trim()) return;
    
    const newMessage = {
      id: chatMessages.length + 1,
      type: 'user' as const,
      text: currentMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setChatMessages([...chatMessages, newMessage]);
    setCurrentMessage('');
    setIsTyping(true);
    
    setTimeout(() => {
      setIsTyping(false);
      setChatMessages(prev => [...prev, {
        id: prev.length + 1,
        type: 'bot' as const,
        text: t('seachat.hero.chat.userMessage2'),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    }, 2000);
  };

  // Auto-rotate animations
  useEffect(() => {
    if (autoRotate) {
      const interval = setInterval(() => {
        const currentIndex = animations.findIndex(anim => anim.id === activeAnimation);
        const nextIndex = (currentIndex + 1) % animations.length;
        setActiveAnimation(animations[nextIndex].id);
      }, 10000); // Change every 10 seconds

      return () => clearInterval(interval);
    }
  }, [activeAnimation, autoRotate, animations]);

  // Update chat messages when language changes
  useEffect(() => {
    setChatMessages([
      { id: 1, type: 'user', text: t('seachat.hero.chat.userMessage'), time: '2:30 PM' },
      { id: 2, type: 'bot', text: t('seachat.hero.chat.botMessage'), time: '2:30 PM' },
    ]);
  }, [t]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
      {/* Animated Background Bubbles */}
      <div className="absolute inset-0">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="absolute opacity-10 bg-white rounded-full animate-float"
            style={{
              left: `${bubble.left}%`,
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              animationDelay: `${bubble.delay}s`,
              animationDuration: `${bubble.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-white space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
              <span className="text-sm font-medium text-white">
                Start Free with Live Agents
              </span>
            </div>

            {/* Main headline matching SeaX style */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                <span className="block">Respond To</span>
                <span className="block"><span className="text-teal-300">Millions</span> 24/7</span>
              </h1>
            </div>
            
            <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
              {t('seachat.hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://chat.seasalt.ai/gpt/signup" className="block">
                <button className="bg-teal-500 hover:bg-teal-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 hover:shadow-lg w-full">
                  {t('seachat.hero.startFree')}
                </button>
              </a>
              <a href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/" className="block">
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all w-full">
                  {t('seachat.hero.exploreAI')}
                </button>
              </a>
            </div>

            <div className="flex items-center space-x-8 text-blue-200">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>{t('seachat.hero.alwaysFree')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>{t('seachat.hero.integrations')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>{t('seachat.hero.setup')}</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Animations */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-2xl space-y-6">
              {/* Animation Controls */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-semibold">SeaChat in Action</h3>
                  <button
                    onClick={() => setAutoRotate(!autoRotate)}
                    className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      autoRotate 
                        ? 'bg-teal-500 text-white' 
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    <RefreshCw className={`w-4 h-4 ${autoRotate ? 'animate-spin' : ''}`} />
                    <span>{autoRotate ? 'Auto' : 'Manual'}</span>
                  </button>
                </div>
                
                {/* Animation Selector */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {animations.map((animation) => (
                    <button
                      key={animation.id}
                      onClick={() => {
                        setActiveAnimation(animation.id);
                        setAutoRotate(false);
                      }}
                      className={`p-3 rounded-lg text-sm text-left transition-all duration-300 ${
                        activeAnimation === animation.id
                          ? 'bg-teal-500 text-white transform scale-105'
                          : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                    >
                      <div className="font-medium mb-1">{animation.name}</div>
                      <div className="text-xs opacity-80">{animation.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Animation */}
              <div className="transition-all duration-500">
                {(() => {
                  const ActiveComponent = animations.find(anim => anim.id === activeAnimation)?.component;
                  return ActiveComponent ? <ActiveComponent /> : null;
                })()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;