import { Zap, Shield, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ChannelPageTemplate from '../../components/ChannelPageTemplate';
import { getSEOData, getCanonicalUrl } from '../../../utils/seo';
import { SUPPORTED_LANGUAGES } from '../../../constants/languages';

interface Pricing {
  setup: string;
  monthly: string;
  perMessage?: string;
  note?: string;
}

const SMSShortCode = () => {
  const { t, i18n } = useTranslation();
  
  // Generate enhanced SEO data using standardized utility
  const seoData = getSEOData(t, 'seax.channels.smsShortCode', {
    canonicalUrl: getCanonicalUrl(i18n.language, '/seax/channels/sms-short-code')
  });

  // features 和 useCases 从对象转换为数组
  const featuresObj = t('seax.channels.smsShortCode.features.items', { returnObjects: true }) as Record<string, string>;
  const features: string[] = Object.values(featuresObj || {});

  const useCasesObj = t('seax.channels.smsShortCode.useCases.items', { returnObjects: true }) as Record<string, string>;
  const useCases: string[] = Object.values(useCasesObj || {});

  // pricing 正規化結構
  const pricingRaw = t('seax.channels.smsShortCode.pricing', { returnObjects: true }) as any;
  const pricing: Pricing = {
    setup: pricingRaw?.setup?.value ?? '',
    monthly: pricingRaw?.monthly?.value ?? '',
    perMessage: pricingRaw?.perMessage?.value ?? pricingRaw?.perMinute?.value ?? undefined,
    note: pricingRaw?.note ?? undefined,
  };

  const pricingLabels = {
    setup: pricingRaw?.setup?.label ?? 'Setup',
    monthly: pricingRaw?.monthly?.label ?? 'Monthly',
    perMessage: pricingRaw?.perMessage?.label ?? 'Per Message',
  };

  // Hero content
  const heroContent = (
    <div className="bg-white rounded-2xl shadow-2xl p-8">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold text-gray-900">
            {t('seax.channels.smsShortCode.hero.campaign.title')}
          </div>
          <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
            {t('seax.channels.smsShortCode.hero.campaign.status')}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-blue-600 mb-1">
              {t('seax.channels.smsShortCode.hero.campaign.messagesSentValue')}
            </div>
            <div className="text-sm text-gray-600">
              {t('seax.channels.smsShortCode.hero.campaign.messagesSent')}
            </div>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-green-600 mb-1">
              {t('seax.channels.smsShortCode.hero.campaign.deliveryRateValue')}
            </div>
            <div className="text-sm text-gray-600">
              {t('seax.channels.smsShortCode.hero.campaign.deliveryRate')}
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-medium text-gray-700">
            {t('seax.channels.smsShortCode.hero.recentActivity.title')}
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1 text-sm">
                <div className="font-medium">
                  {t('seax.channels.smsShortCode.hero.recentActivity.marketing.title')}
                </div>
                <div className="text-gray-500">
                  {t('seax.channels.smsShortCode.hero.recentActivity.marketing.details')}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1 text-sm">
                <div className="font-medium">
                  {t('seax.channels.smsShortCode.hero.recentActivity.appointment.title')}
                </div>
                <div className="text-gray-500">
                  {t('seax.channels.smsShortCode.hero.recentActivity.appointment.details')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const stats = [
    { value: t('seax.channels.smsShortCode.stats.messagesPerSecondValue'), label: t('seax.channels.smsShortCode.stats.messagesPerSecond'), icon: <Zap className="w-8 h-8 text-blue-600" /> },
    { value: t('seax.channels.smsShortCode.stats.deliveryRateValue'), label: t('seax.channels.smsShortCode.stats.deliveryRate'), icon: <Shield className="w-8 h-8 text-green-600" /> },
    { value: t('seax.channels.smsShortCode.stats.digitNumbersValue'), label: t('seax.channels.smsShortCode.stats.digitNumbers'), icon: <TrendingUp className="w-8 h-8 text-purple-600" /> },
  ];

  const testimonial = {
    quote: t('seax.channels.smsShortCode.testimonial.quote'),
    author: t('seax.channels.smsShortCode.testimonial.author'),
    company: t('seax.channels.smsShortCode.testimonial.company'),
    results: t('seax.channels.smsShortCode.testimonial.results'),
  };

  return (
    <ChannelPageTemplate
      title={t('seax.channels.smsShortCode.title')}
      subtitle={t('seax.channels.smsShortCode.subtitle')}
      description={t('seax.channels.smsShortCode.description')}
      seoTitle={seoData.title}
      seoDescription={seoData.description}
      heroContent={heroContent}
      features={features}
      featuresTitle={t('seax.channels.smsShortCode.features.title')}
      featuresSubtitle={t('seax.channels.smsShortCode.features.subtitle')}
      useCases={useCases}
      useCasesTitle={t('seax.channels.smsShortCode.useCases.title')}
      useCasesSubtitle={t('seax.channels.smsShortCode.useCases.subtitle')}
      pricing={pricing}
      pricingTitle={t('seax.channels.smsShortCode.pricing.title')}
      pricingSubtitle={t('seax.channels.smsShortCode.pricing.subtitle')}
      pricingLabels={pricingLabels}
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

