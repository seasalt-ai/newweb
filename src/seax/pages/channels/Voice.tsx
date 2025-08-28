import { Phone, Globe, Mic } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ChannelPageTemplate from '../../components/ChannelPageTemplate';
import { seaxChannelFeatures } from '../../data/seaxFeatures';

const Voice = () => {
  const { t } = useTranslation();
  const voiceData = seaxChannelFeatures.voice;
  
  const heroContent = (
    <div className="bg-white rounded-2xl shadow-2xl p-8">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold text-gray-900">{t('seax.channels.voice.hero.widget.title')}</div>
          <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {t('seax.channels.voice.hero.widget.poweredBy')}
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-4xl font-bold text-blue-600 mb-2">
            {t('seax.channels.voice.hero.widget.callsNumber')}
          </div>
          <div className="text-sm text-gray-600">{t('seax.channels.voice.hero.widget.callsCompletedToday')}</div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-green-600 mb-1">{t('seax.channels.voice.hero.widget.connectionRateValue')}</div>
            <div className="text-sm text-gray-600">{t('seax.channels.voice.hero.widget.connectionRateLabel')}</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-purple-600 mb-1">{t('seax.channels.voice.hero.widget.countriesValue')}</div>
            <div className="text-sm text-gray-600">{t('seax.channels.voice.hero.widget.countriesLabel')}</div>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="text-sm font-medium text-gray-700">{t('seax.channels.voice.hero.widget.activeCalls')}</div>
          <div className="space-y-2">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="flex-1 text-sm">
                <div className="font-medium">{t('seax.channels.voice.hero.widget.usPhoneNumber')}</div>
                <div className="text-gray-500">{t('seax.channels.voice.hero.widget.appointmentReminder')}</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <div className="flex-1 text-sm">
                <div className="font-medium">{t('seax.channels.voice.hero.widget.ukPhoneNumber')}</div>
                <div className="text-gray-500">{t('seax.channels.voice.hero.widget.surveyCall')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const stats = [
    {
      value: t('seax.channels.voice.hero.widget.countriesValue'),
      label: t('seax.channels.voice.hero.widget.countriesLabel'),
      icon: <Globe className="w-8 h-8 text-blue-600" />
    },
    {
      value: t('seax.channels.voice.hero.widget.connectionRateValue'),
      label: t('seax.channels.voice.hero.widget.connectionRateLabel'),
      icon: <Phone className="w-8 h-8 text-green-600" />
    },
    {
      value: t('seax.channels.voice.stats.languagesValue'),
      label: t('seax.channels.voice.stats.languagesLabel'),
      icon: <Mic className="w-8 h-8 text-purple-600" />
    }
  ];

  const testimonial = {
    quote: t('seax.channels.voice.testimonial.quote'),
    author: t('seax.channels.voice.testimonial.author'),
    company: t('seax.channels.voice.testimonial.company'),
    results: t('seax.channels.voice.testimonial.results')
  };

  return (
    <ChannelPageTemplate
      title={t('seax.channels.voice.title')}
      subtitle={t('seax.channels.voice.subtitle')}
      description={t('seax.channels.voice.description')}
      seoTitle={t('seax.channels.voice.seoTitle')}
      seoDescription={t('seax.channels.voice.seoDescription')}
      heroContent={heroContent}
      features={voiceData.features}
      useCases={voiceData.useCases}
      pricing={voiceData.pricing}
      stats={stats}
      testimonial={testimonial}
    >
      {/* Global Coverage Section */}
      <div className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('seax.channels.voice.globalCoverage.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('seax.channels.voice.globalCoverage.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {voiceData.globalReach.regions.map((region, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {region.split(' (')[0]}
                </h3>
                <p className="text-gray-600">
                  {region.includes('(') ? region.split('(')[1].replace(')', '') : t('seax.channels.voice.globalCoverage.fullRegionalCoverage')}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {t('seax.channels.voice.globalCoverage.infrastructureTitle')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {voiceData.globalReach.features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-green-100 p-3 rounded-lg w-fit mx-auto mb-3">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-800">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ChannelPageTemplate>
  );
};

export default Voice;
