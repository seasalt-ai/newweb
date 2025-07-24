import { MessageSquare, Phone, MessageCircle, Megaphone } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';
import { useState, useEffect } from 'react';

const Hero = () => {
  const { t } = useTranslation();
  const [animationPhase, setAnimationPhase] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setAnimationPhase((prev) => (prev + 1) % 4);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const appIcons = [
    { icon: MessageCircle, color: 'text-green-500', name: 'WhatsApp' },
    { icon: MessageSquare, color: 'text-blue-500', name: 'SMS' },
    { icon: Phone, color: 'text-purple-500', name: 'Phone' },
    { icon: MessageSquare, color: 'text-orange-500', name: 'Chat' }
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center space-y-12 lg:space-y-0">
          {/* Left Column - Content */}
          <div className="lg:pr-8 w-full">
            <div className="text-center lg:text-left w-full">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                <Trans
                  i18nKey="hero.titleWithGradient"
                  components={{
                    1: <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent" />
                  }}
                />
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                {t('hero.description')}
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 sm:mb-12">
                <a
                  href="https://seax.seasalt.ai/signup"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-200"
                >
                  {t('hero.signUp')}
                </a>
                <a
                   href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/" className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                >
                  {t('hero.seeDemo')}
                </a>
              </div>

              {/* Social Proof */}
              <div className="border-t border-gray-200 pt-6 sm:pt-8">
                <p className="text-sm text-gray-500 mb-4">
                  <Trans
                    i18nKey="hero.developerMessage"
                    components={{
                      1: <code className="text-sm font-mono text-red-800 font-semibold whitespace-nowrap" />
                    }}
                  />
                </p>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
                  <code className="text-sm font-mono bg-red-50 text-red-800 px-3 py-1.5 rounded-md border border-red-200 font-semibold whitespace-nowrap">
                    phone use
                  </code>
                  <code className="text-sm font-mono bg-red-50 text-red-800 px-3 py-1.5 rounded-md border border-red-200 font-semibold whitespace-nowrap">
                    message use
                  </code>
                  <code className="text-sm font-mono bg-red-50 text-red-800 px-3 py-1.5 rounded-md border border-red-200 font-semibold whitespace-nowrap">
                    email use
                  </code>
                  <code className="text-sm font-mono bg-red-50 text-red-800 px-3 py-1.5 rounded-md border border-red-200 font-semibold whitespace-nowrap">
                    meeting use
                  </code>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Animation */}
          <div className="mt-8 lg:mt-0">
            {/* Animation Container */}
            <div 
              className="relative h-96 mb-16 flex items-center justify-center cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Scattered App Icons */}
              {appIcons.map((app, index) => {
                const Icon = app.icon;
                return (
                  <div
                    key={index}
                    className={`absolute transition-all duration-1000 ease-in-out ${
                      animationPhase >= 2 ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                    }`}
                    style={{
                      transform: animationPhase === 0 
                        ? `translate(${Math.cos(index * Math.PI / 2) * 150}px, ${Math.sin(index * Math.PI / 2) * 150}px)`
                        : animationPhase === 1
                        ? `translate(${Math.cos(index * Math.PI / 2) * 75}px, ${Math.sin(index * Math.PI / 2) * 75}px)`
                        : 'translate(0px, 0px)'
                    }}
                  >
                    <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-300">
                      <Icon className={`h-8 w-8 ${app.color}`} />
                    </div>
                    <div className="text-center mt-2">
                      <span className="text-sm font-medium text-gray-600">{app.name}</span>
                    </div>
                  </div>
                );
              })}

              {/* Central Unified Inbox */}
              <div 
                className={`absolute transition-all duration-1000 ease-in-out ${
                  animationPhase >= 2 ? 'opacity-100 scale-110' : 'opacity-0 scale-0'
                }`}
              >
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl shadow-2xl flex items-center justify-center">
                  <Megaphone className="h-12 w-12 text-white" />
                </div>
                <div className="text-center mt-4">
                  <span className="text-lg font-semibold text-gray-800">Unified Inbox</span>
                </div>
              </div>

              {/* Connection Lines */}
              {animationPhase === 1 && (
                <>
                  {[0, 1, 2, 3].map((index) => (
                    <div
                      key={index}
                      className="absolute w-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-60 animate-pulse"
                      style={{
                        height: '75px',
                        transform: `rotate(${index * 90}deg)`,
                        transformOrigin: 'bottom center'
                      }}
                    ></div>
                  ))}
                </>
              )}

              {/* Floating Particles */}
              {animationPhase >= 2 && (
                <>
                  {[...Array(8)].map((_, index) => (
                    <div
                      key={index}
                      className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-bounce"
                      style={{
                        left: `${20 + index * 10}%`,
                        top: `${30 + (index % 3) * 20}%`,
                        animationDelay: `${index * 0.2}s`,
                        animationDuration: '2s'
                      }}
                    ></div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;