import { Zap, Shield, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ChannelPageTemplate from '../../components/ChannelPageTemplate';
import { seaxChannelFeatures } from '../../data/seaxFeatures';

const SMSShortCode = () => {
  const { t } = useTranslation();
  const shortCodeData = seaxChannelFeatures.sms.types.shortCode;
  
  const heroContent = (
    <div className="bg-white rounded-2xl shadow-2xl p-8">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold text-gray-900">{t('seax.channels.smsShortCode.hero.title')}</div>
          <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
            {t('seax.channels.smsShortCode.hero.status')}
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-4xl font-bold text-blue-600 mb-2">
            12345
          </div>
          <div className="text-sm text-gray-600">{t('seax.channels.smsShortCode.hero.dedicatedCode')}</div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-blue-600 mb-1">1000+</div>
            <div className="text-sm text-gray-600">{t('seax.channels.smsShortCode.hero.messagesPerSecond')}</div>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-green-600 mb-1">99.9%</div>
            <div className="text-sm text-gray-600">{t('seax.channels.smsShortCode.hero.deliveryRate')}</div>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="text-sm font-medium text-gray-700">{t('seax.channels.smsShortCode.hero.activeCampaigns.title')}</div>
          <div className="space-y-2">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1 text-sm">
                <div className="font-medium">{t('seax.channels.smsShortCode.hero.activeCampaigns.massMarketing.title')}</div>
                <div className="text-gray-500">{t('seax.channels.smsShortCode.hero.activeCampaigns.massMarketing.details')}</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1 text-sm">
                <div className="font-medium">{t('seax.channels.smsShortCode.hero.activeCampaigns.contest.title')}</div>
                <div className="text-gray-500">{t('seax.channels.smsShortCode.hero.activeCampaigns.contest.details')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const stats = [
    {
      value: '1000+',
      label: t('seax.channels.smsShortCode.stats.messagesPerSecond'),
      icon: <Zap className="w-8 h-8 text-blue-600" />
    },
    {
      value: '99.9%',
      label: t('seax.channels.smsShortCode.stats.deliveryRate'),
      icon: <Shield className="w-8 h-8 text-green-600" />
    },
    {
      value: '5-6',
      label: t('seax.channels.smsShortCode.stats.digitNumbers'),
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />
    }
  ];

  const testimonial = {
    quote: t('seax.channels.smsShortCode.testimonial.quote'),
    author: t('seax.channels.smsShortCode.testimonial.author'),
    company: t('seax.channels.smsShortCode.testimonial.company'),
    results: t('seax.channels.smsShortCode.testimonial.results')
  };

  return (
    <ChannelPageTemplate
      title={t('seax.channels.smsShortCode.title')}
      subtitle={t('seax.channels.smsShortCode.subtitle')}
      description={t('seax.channels.smsShortCode.description')}
      seoTitle={t('seax.channels.smsShortCode.seo.title')}
      seoDescription={t('seax.channels.smsShortCode.seo.description')}
      heroContent={heroContent}
      features={shortCodeData.features}
      useCases={shortCodeData.useCases}
      pricing={shortCodeData.pricing}
      stats={stats}
      testimonial={testimonial}
    >
      {/* Premium Features Section */}
      <div className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('seax.channels.smsShortCode.premiumFeatures.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('seax.channels.smsShortCode.premiumFeatures.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t('seax.channels.smsShortCode.premiumFeatures.ultraThroughput.title')}
              </h3>
              <p className="text-gray-600">
                {t('seax.channels.smsShortCode.premiumFeatures.ultraThroughput.description')}
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-green-100 p-3 rounded-lg w-fit mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t('seax.channels.smsShortCode.premiumFeatures.premiumRoutes.title')}
              </h3>
              <p className="text-gray-600">
                {t('seax.channels.smsShortCode.premiumFeatures.premiumRoutes.description')}
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-purple-100 p-3 rounded-lg w-fit mb-4">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t('seax.channels.smsShortCode.premiumFeatures.brandRecognition.title')}
              </h3>
              <p className="text-gray-600">
                {t('seax.channels.smsShortCode.premiumFeatures.brandRecognition.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </ChannelPageTemplate>
  );
};

export default SMSShortCode;
