import { useState, useEffect, useMemo } from 'react';
import { RefreshCw } from 'lucide-react';
import { useTranslation, type SupportedLanguage } from '../../../i18n/helpers';

// Import animation components
import MultiChannelFlow from './hero-animations/MultiChannelFlow';
import AgentToAI from './hero-animations/AgentToAI';
import PhoneVoiceAI from './hero-animations/PhoneVoiceAI';
import RealtimeDashboard from './hero-animations/RealtimeDashboard';
import InteractiveChannels from './hero-animations/InteractiveChannels';
import ConversationLearning from './hero-animations/ConversationLearning';

interface HeroProps {
  lang: SupportedLanguage;
  translations?: any;
}

const Hero: React.FC<HeroProps> = ({ lang, translations }) => {
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

  const [activeAnimation, setActiveAnimation] = useState<string>('phoneVoice');
  const [autoRotate, setAutoRotate] = useState(true);

  // 處理載入狀態
  if (isLoading) {
    return (
      <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-pulse bg-gray-200 h-32 w-32 rounded-2xl"></div>
        </div>
      </section>
    );
  }

  const animations = useMemo(() => [
    {
      id: 'phoneVoice',
      name: getText('seachat.hero.animations.phoneVoice.name', 'Voice AI'),
      description: getText('seachat.hero.animations.phoneVoice.description', 'Smart phone calls'),
      component: PhoneVoiceAI,
    },
    {
      id: 'interactive',
      name: getText('seachat.hero.animations.interactive.name', 'Interactive Channels'),
      description: getText('seachat.hero.animations.interactive.description', 'Multi-platform support'),
      component: InteractiveChannels,
    },
    {
      id: 'multiChannel',
      name: getText('seachat.hero.animations.multiChannel.name', 'Multi-Channel'),
      description: getText('seachat.hero.animations.multiChannel.description', 'All platforms unified'),
      component: MultiChannelFlow,
    },
    {
      id: 'agentToAI',
      name: getText('seachat.hero.animations.agentToAI.name', 'Agent to AI'),
      description: getText('seachat.hero.animations.agentToAI.description', 'Learns from humans'),
      component: AgentToAI,
    },
    {
      id: 'learning',
      name: getText('seachat.hero.animations.learning.name', 'AI Learning'),
      description: getText('seachat.hero.animations.learning.description', 'Continuous improvement'),
      component: ConversationLearning,
    },
    {
      id: 'dashboard',
      name: getText('seachat.hero.animations.dashboard.name', 'Real-time Dashboard'),
      description: getText('seachat.hero.animations.dashboard.description', 'Live performance metrics'),
      component: RealtimeDashboard,
    },
  ], [getText]);

  const bubbles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
    size: 20 + Math.random() * 40,
  }));

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

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
      {/* Animated Background Bubbles */}
      <div className="absolute inset-0">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="absolute opacity-10 bg-white rounded-full animate-bounce"
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
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center space-y-12 lg:space-y-0 min-h-[80vh]">
          {/* Left Content */}
          <div className="text-white space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
              <span className="text-sm font-medium text-white">
                {getText('seachat.hero.badge', 'Start Free with Live Agents')}
              </span>
            </div>

            {/* Main headline matching SeaX style */}
            <div className="space-y-4 w-full">
              <h1
                className="font-bold text-white w-full text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                style={{
                  lineHeight: '1.1',
                  fontWeight: 'bold',
                  color: 'white'
                }}
              >
                <span className="block">{getText('seachat.hero.title.line1', 'Respond To')}</span>
                <span className="block">
                  <span className="text-teal-300">{getText('seachat.hero.title.line2', 'Millions 24/7')}</span>
                </span>
              </h1>
            </div>

            <p className="text-xl text-blue-100 leading-relaxed">
              {getText('seachat.hero.description', 'Transform customer support with our omnichannel platform. Begin with human agents at zero cost, then seamlessly integrate AI automation as you grow.')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://chat.seasalt.ai/gpt/signup" className="block">
                <button className="bg-teal-500 hover:bg-teal-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 hover:shadow-lg w-full">
                  {getText('seachat.hero.startFree', 'Start Free Now')}
                </button>
              </a>
              <a href="https://calendar.app.google/GcdRQv1DVoiDaoCT6" className="block">
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all w-full">
                  {getText('seachat.hero.exploreAI', 'Book A Demo')}
                </button>
              </a>
            </div>

            <div className="flex items-center space-x-8 text-blue-200">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>{getText('seachat.hero.alwaysFree', 'Always Free Plan')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>{getText('seachat.hero.integrations', '30+ Integrations')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>{getText('seachat.hero.setup', 'Setup in 2 Minutes')}</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Animations */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-2xl space-y-6">
              {/* Animation Controls */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-semibold">{getText('seachat.hero.animationSection.title', 'SeaChat in Action')}</h3>
                  <button
                    onClick={() => setAutoRotate(!autoRotate)}
                    className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${autoRotate
                        ? 'bg-teal-500 text-white'
                        : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                  >
                    <RefreshCw className={`w-4 h-4 ${autoRotate ? 'animate-spin' : ''}`} />
                    <span>{autoRotate ? getText('seachat.hero.animationSection.autoMode', 'Auto') : getText('seachat.hero.animationSection.manualMode', 'Manual')}</span>
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
                      className={`p-3 rounded-lg text-sm text-left transition-all duration-300 ${activeAnimation === animation.id
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
                  return ActiveComponent ? <ActiveComponent lang={lang} translations={translations} /> : null;
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