import { MessageSquare } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';


const Hero = () => {
  const { t } = useTranslation();

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

          {/* Right Column - Visual Placeholder */}
          <div className="mt-8 lg:mt-0">
            <div className="relative">
              {/* Placeholder for future animation */}
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl shadow-2xl p-8 sm:p-12 text-center relative z-10 min-h-[400px] flex flex-col items-center justify-center">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <MessageSquare className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                  Hero Animation Placeholder
                </h3>
                <p className="text-gray-600 text-sm sm:text-base max-w-sm">
                  This space will contain the new hero animation once provided.
                </p>
                <div className="absolute top-4 right-4 text-xs text-gray-500 bg-white px-2 py-1 rounded">
                  Coming Soon
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;