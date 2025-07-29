import { Headphones, Bot, MessageSquareText, Megaphone, MessageCircleMore, MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const UseCases = () => {
  const { t } = useTranslation();
  const useCases = [
    {
      icon: <Headphones className="h-10 w-10" />,
      titleKey: 'useCases.contactCenter.title',
      headlineKey: 'useCases.contactCenter.headline',
      descriptionKey: 'useCases.contactCenter.description',
      featuresKey: 'useCases.contactCenter.features',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: <Bot className="h-10 w-10" />,
      titleKey: 'useCases.virtualReceptionist.title',
      headlineKey: 'useCases.virtualReceptionist.headline',
      descriptionKey: 'useCases.virtualReceptionist.description',
      featuresKey: 'useCases.virtualReceptionist.features',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      icon: <MessageSquareText className="h-10 w-10" />,
      titleKey: 'useCases.smsManagement.title',
      headlineKey: 'useCases.smsManagement.headline',
      descriptionKey: 'useCases.smsManagement.description',
      featuresKey: 'useCases.smsManagement.features',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      icon: <Megaphone className="h-10 w-10" />,
      titleKey: 'useCases.smsMarketing.title',
      headlineKey: 'useCases.smsMarketing.headline',
      descriptionKey: 'useCases.smsMarketing.description',
      featuresKey: 'useCases.smsMarketing.features',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    },
    {
      icon: <MessageCircleMore className="h-10 w-10" />,
      titleKey: 'useCases.whatsappBusiness.title',
      headlineKey: 'useCases.whatsappBusiness.headline',
      descriptionKey: 'useCases.whatsappBusiness.description',
      featuresKey: 'useCases.whatsappBusiness.features',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      icon: <MessageSquare className="h-10 w-10" />,
      titleKey: 'useCases.aiSupport.title',
      headlineKey: 'useCases.aiSupport.headline',
      descriptionKey: 'useCases.aiSupport.description',
      featuresKey: 'useCases.aiSupport.features',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('useCases.title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('useCases.subtitle')}
          </p>
        </div>

        <div className="space-y-12">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className={`p-6 sm:p-8 rounded-2xl border-2 ${useCase.borderColor} ${useCase.bgColor} hover:shadow-lg transition-all duration-300 group`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
                {/* Left Column - Icon, Title, Headline, and Description */}
                <div>
                  <div className={`${useCase.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    {t(useCase.titleKey)}
                  </h3>
                  <h4 className={`text-base sm:text-lg font-semibold ${useCase.color} mb-3 sm:mb-4`}>
                    {t(useCase.headlineKey)}
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    {t(useCase.descriptionKey)}
                  </p>
                </div>

                {/* Right Column - Features */}
                <div>
                  <h5 className="text-xs sm:text-sm font-semibold text-gray-900 mb-3 sm:mb-4 uppercase tracking-wide">
                    {t('useCases.keyFeatures')}
                  </h5>
                  <ul className="space-y-2 sm:space-y-3">
                    {(t(useCase.featuresKey, { returnObjects: true }) as string[] || []).map((feature: string, featureIndex: number) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className={`w-2 h-2 ${useCase.color.replace('text-', 'bg-')} rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0`}></div>
                        <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 sm:p-8 md:p-12 text-white">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
            {t('useCases.cta.title')}
          </h3>
          <p className="text-lg sm:text-xl opacity-90 mb-6 sm:mb-8 max-w-2xl mx-auto">
            {t('useCases.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
               href="https://seax.seasalt.ai/signup"
               className="bg-white text-blue-600 hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-200"
             >
               {t('useCases.cta.signUp')}
            </a>
            <a
              href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-200"
            >
              {t('useCases.cta.bookDemo')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;