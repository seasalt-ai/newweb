import { Phone, Shield, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ChannelPageTemplate from '../../components/ChannelPageTemplate';
import { seaxChannelFeatures } from '../../data/seaxFeatures';

const SMSTollFree = () => {
  const { t } = useTranslation();
  const tollFreeData = seaxChannelFeatures.sms.types.tollFree;
  
  const heroContent = (
    <div className="bg-white rounded-2xl shadow-2xl p-8">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold text-gray-900">{t('seax.channels.smsTollFree.hero.title')}</div>
          <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
            {t('seax.channels.smsTollFree.hero.status')}
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-4xl font-bold text-blue-600 mb-2">
            1-800-SEAX-SMS
          </div>
          <div className="text-sm text-gray-600">{t('seax.channels.smsTollFree.hero.dedicatedNumber')}</div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-green-600 mb-1">94.7%</div>
            <div className="text-sm text-gray-600">{t('seax.channels.smsTollFree.hero.deliveryRate')}</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-purple-600 mb-1">2.3x</div>
            <div className="text-sm text-gray-600">{t('seax.channels.smsTollFree.hero.higherTrust')}</div>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="text-sm font-medium text-gray-700">{t('seax.channels.smsTollFree.hero.recentMessages.title')}</div>
          <div className="space-y-2">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1 text-sm">
                <div className="font-medium">{t('seax.channels.smsTollFree.hero.recentMessages.customerSupport.title')}</div>
                <div className="text-gray-500">{t('seax.channels.smsTollFree.hero.recentMessages.customerSupport.details')}</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1 text-sm">
                <div className="font-medium">{t('seax.channels.smsTollFree.hero.recentMessages.survey.title')}</div>
                <div className="text-gray-500">{t('seax.channels.smsTollFree.hero.recentMessages.survey.details')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const stats = [
    {
      value: '94%',
      label: t('seax.channels.smsTollFree.stats.deliveryRate'),
      icon: <Phone className="w-8 h-8 text-blue-600" />
    },
    {
      value: '2.3x',
      label: t('seax.channels.smsTollFree.stats.higherTrust'),
      icon: <Shield className="w-8 h-8 text-green-600" />
    },
    {
      value: '78%',
      label: t('seax.channels.smsTollFree.stats.responseRate'),
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />
    }
  ];

  const testimonial = {
    quote: t('seax.channels.smsTollFree.testimonial.quote'),
    author: t('seax.channels.smsTollFree.testimonial.author'),
    company: t('seax.channels.smsTollFree.testimonial.company'),
    results: t('seax.channels.smsTollFree.testimonial.results')
  };

  return (
    <ChannelPageTemplate
      title={t('seax.channels.smsTollFree.title')}
      subtitle={t('seax.channels.smsTollFree.subtitle')}
      description={t('seax.channels.smsTollFree.description')}
      seoTitle={t('seax.channels.smsTollFree.seo.title')}
      seoDescription={t('seax.channels.smsTollFree.seo.description')}
      heroContent={heroContent}
      features={tollFreeData.features}
      useCases={tollFreeData.useCases}
      pricing={tollFreeData.pricing}
      stats={stats}
      testimonial={testimonial}
    >
      {/* Trust & Engagement Section */}
      <div className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('seax.channels.smsTollFree.trust.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('seax.channels.smsTollFree.trust.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-green-100 p-3 rounded-lg w-fit mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t('seax.channels.smsTollFree.trust.professionalImage.title')}
              </h3>
              <p className="text-gray-600">
                {t('seax.channels.smsTollFree.trust.professionalImage.description')}
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t('seax.channels.smsTollFree.trust.noCarrierFees.title')}
              </h3>
              <p className="text-gray-600">
                {t('seax.channels.smsTollFree.trust.noCarrierFees.description')}
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-purple-100 p-3 rounded-lg w-fit mb-4">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t('seax.channels.smsTollFree.trust.higherResponse.title')}
              </h3>
              <p className="text-gray-600">
                {t('seax.channels.smsTollFree.trust.higherResponse.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </ChannelPageTemplate>
  );
};

export default SMSTollFree;
