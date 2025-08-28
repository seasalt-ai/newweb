import { MessageSquare, Users, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ChannelPageTemplate from '../../components/ChannelPageTemplate';

interface Pricing {
  setup: string;
  monthly: string;
  perMessage?: string;
  perMinute?: string;
  note?: string;
}

const SMSLocal = () => {
  const { t } = useTranslation();

  // features 和 useCases 获取数组
  const features: string[] = t('seax.channels.smsLocal.features.items', { returnObjects: true }) as string[];
  const useCases: string[] = t('seax.channels.smsLocal.useCases.items', { returnObjects: true }) as string[];

  // pricing 正規化結構：從 label/value 物件轉換為模板所需的扁平結構
  const pricingRaw = t('seax.channels.smsLocal.pricing', { returnObjects: true }) as any;
  const pricing: Pricing = {
    setup: pricingRaw?.setup?.value ?? '',
    monthly: pricingRaw?.monthly?.value ?? '',
    perMessage: pricingRaw?.perMessage?.value ?? pricingRaw?.perMinute?.value ?? undefined,
    note: pricingRaw?.note ?? undefined,
  };

  const heroContent = (
    <div className="bg-white rounded-2xl shadow-2xl p-8">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold text-gray-900">
            {t('seax.channels.smsLocal.hero.campaign.title')}
          </div>
          <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
            {t('seax.channels.smsLocal.hero.campaign.status')}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-blue-600 mb-1">{t('seax.channels.smsLocal.hero.campaign.messagesSentValue')}</div>
            <div className="text-sm text-gray-600">
              {t('seax.channels.smsLocal.hero.campaign.messagesSent')}
            </div>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-green-600 mb-1">{t('seax.channels.smsLocal.hero.campaign.deliveryRateValue')}</div>
            <div className="text-sm text-gray-600">
              {t('seax.channels.smsLocal.hero.campaign.deliveryRate')}
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-medium text-gray-700">
            {t('seax.channels.smsLocal.hero.recentActivity.title')}
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1 text-sm">
                <div className="font-medium">
                  {t('seax.channels.smsLocal.hero.recentActivity.marketing.title')}
                </div>
                <div className="text-gray-500">
                  {t('seax.channels.smsLocal.hero.recentActivity.marketing.details')}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1 text-sm">
                <div className="font-medium">
                  {t('seax.channels.smsLocal.hero.recentActivity.appointment.title')}
                </div>
                <div className="text-gray-500">
                  {t('seax.channels.smsLocal.hero.recentActivity.appointment.details')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const stats = [
    {
      value: t('seax.channels.smsLocal.stats.deliveryRateValue'),
      label: t('seax.channels.smsLocal.stats.deliveryRate'),
      icon: <MessageSquare className="w-8 h-8 text-blue-600" />,
    },
    {
      value: t('seax.channels.smsLocal.stats.openRateValue'),
      label: t('seax.channels.smsLocal.stats.openRate'),
      icon: <Users className="w-8 h-8 text-green-600" />,
    },
    {
      value: t('seax.channels.smsLocal.stats.supportValue'),
      label: t('seax.channels.smsLocal.stats.support'),
      icon: <CheckCircle2 className="w-8 h-8 text-purple-600" />,
    },
  ];

  const testimonial = {
    quote: t('seax.channels.smsLocal.testimonial.quote'),
    author: t('seax.channels.smsLocal.testimonial.author'),
    company: t('seax.channels.smsLocal.testimonial.company'),
    results: t('seax.channels.smsLocal.testimonial.results'),
  };

  return (
    <ChannelPageTemplate
      title={t('seax.channels.smsLocal.title')}
      subtitle={t('seax.channels.smsLocal.subtitle')}
      description={t('seax.channels.smsLocal.description')}
      seoTitle={t('seax.channels.smsLocal.seo.title')}
      seoDescription={t('seax.channels.smsLocal.seo.description')}
      heroContent={heroContent}
      features={features}
      featuresTitle={t('seax.channels.smsLocal.features.title')}
      featuresSubtitle={t('seax.channels.smsLocal.features.subtitle')}
      useCases={useCases}
      useCasesTitle={t('seax.channels.smsLocal.useCases.title')}
      useCasesSubtitle={t('seax.channels.smsLocal.useCases.subtitle')}
      pricing={pricing}
      stats={stats}
      testimonial={testimonial}
    >
      {/* Compliance Section */}
      <div className="py-20 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('seax.channels.smsLocal.compliance.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('seax.channels.smsLocal.compliance.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                <CheckCircle2 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t('seax.channels.smsLocal.compliance.brandRegistration.title')}
              </h3>
              <p className="text-gray-600">
                {t('seax.channels.smsLocal.compliance.brandRegistration.description')}
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-green-100 p-3 rounded-lg w-fit mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t('seax.channels.smsLocal.compliance.campaignApproval.title')}
              </h3>
              <p className="text-gray-600">
                {t('seax.channels.smsLocal.compliance.campaignApproval.description')}
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-purple-100 p-3 rounded-lg w-fit mb-4">
                <CheckCircle2 className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t('seax.channels.smsLocal.compliance.monitoring.title')}
              </h3>
              <p className="text-gray-600">
                {t('seax.channels.smsLocal.compliance.monitoring.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </ChannelPageTemplate>
  );
};

export default SMSLocal;



