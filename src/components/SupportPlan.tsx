import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SupportPlan = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('supportPlan.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('supportPlan.priceNote')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Trial Plan */}
          <div className="bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-2xl p-8 text-white shadow-xl lg:col-span-1 flex flex-col h-full">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-6 text-white">{t('supportPlan.trial.title')}</h3>
              <div className="text-6xl font-bold mb-6 text-yellow-50">{t('supportPlan.trial.price')}</div>
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-3">
                  <Check className="w-6 h-6 text-white flex-shrink-0" />
                  <span className="text-lg font-medium text-white">{t('supportPlan.trial.features.diy')}</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Check className="w-6 h-6 text-white flex-shrink-0" />
                  <span className="text-lg font-medium text-white">{t('supportPlan.trial.features.email')}</span>
                </div>
                <div className="text-base text-yellow-50 mt-4" dangerouslySetInnerHTML={{ __html: t('supportPlan.trial.features.chat') }} />
              </div>
            </div>
          </div>

          {/* Launch Plan */}
          <div className="bg-black rounded-2xl p-8 text-white shadow-xl lg:col-span-2 flex flex-col h-full">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">{t('supportPlan.launch.title')}</h3>
              <div className="mb-4">
                <span className="text-2xl">{t('supportPlan.launch.startsAt')} </span>
                <span className="text-4xl font-bold text-pink-200">{t('supportPlan.launch.minPrice')}</span>
                <span className="text-2xl"> {t('supportPlan.launch.upTo')} </span>
                <span className="text-4xl font-bold text-pink-200">{t('supportPlan.launch.maxPrice')}</span>
              </div>
              <div className="text-lg mb-6">{t('supportPlan.launch.duration')}</div>
            </div>

            <div className="mb-8">
              <p className="text-pink-100 mb-6">
                {t('supportPlan.launch.description')}
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">{t('supportPlan.launch.features.meetings.title')}</div>
                  <div className="text-pink-100">{t('supportPlan.launch.features.meetings.description')}</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">{t('supportPlan.launch.features.promptTuning.title')}</div>
                  <div className="text-pink-100">{t('supportPlan.launch.features.promptTuning.description')}</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">{t('supportPlan.launch.features.guidance.title')}</div>
                  <div className="text-pink-100">{t('supportPlan.launch.features.guidance.description')}</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">{t('supportPlan.launch.features.launchSupport.title')}</div>
                  <div className="text-pink-100">{t('supportPlan.launch.features.launchSupport.description')}</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">{t('supportPlan.launch.features.marketStrategy.title')}</div>
                  <div className="text-pink-100">{t('supportPlan.launch.features.marketStrategy.description')}</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">{t('supportPlan.launch.features.successfulLaunch.title')}</div>
                  <div className="text-pink-100">{t('supportPlan.launch.features.successfulLaunch.description')}</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">{t('supportPlan.launch.features.postLaunch.title')}</div>
                  <div className="text-pink-100">{t('supportPlan.launch.features.postLaunch.description')}</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">{t('supportPlan.launch.features.operational.title')}</div>
                  <div className="text-pink-100">{t('supportPlan.launch.features.operational.description')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportPlan;
