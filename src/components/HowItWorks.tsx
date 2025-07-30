import { Link, Bot, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HowItWorks = () => {
  const { t } = useTranslation();
  
  const steps = [
    {
      icon: <Link className="h-12 w-12" />,
      title: t('howItWorks.connectYourChannels.title'),
      description: t('howItWorks.connectYourChannels.description'),
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: <Bot className="h-12 w-12" />,
      title: t('howItWorks.automateRoutineWork.title'),
      description: t('howItWorks.automateRoutineWork.description'),
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: t('howItWorks.unifyYourTeam.title'),
      description: t('howItWorks.unifyYourTeam.description'),
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('howItWorks.title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            {t('howItWorks.description1')}
            {t('howItWorks.description2')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Number */}
              <div className="text-center mb-6 sm:mb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full shadow-lg mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl font-bold text-gray-900">{index + 1}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 sm:top-8 left-1/2 w-full h-0.5 bg-gray-200 transform translate-x-8"></div>
                )}
              </div>

              {/* Step Content */}
              <div className="text-center">
                <div className={`${step.bgColor} ${step.color} p-3 sm:p-4 rounded-2xl w-fit mx-auto mb-4 sm:mb-6`}>
                  {step.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
             href="https://seax.seasalt.ai/signup" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            {t('howItWorks.signUpNow')}
          </a>
          <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">{t('howItWorks.setupTime')}</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;