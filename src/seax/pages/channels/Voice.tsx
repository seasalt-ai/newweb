import { Phone, Globe, Mic } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ChannelPageTemplate from '../../components/ChannelPageTemplate';
import { seaxChannelFeatures } from '../../data/seaxFeatures';

interface Pricing {
  setup: string;
  monthly: string;
  perMessage?: string;
  perMinute?: string;
  note?: string;
}

const Voice = () => {
  const { t } = useTranslation();
  const voiceData = seaxChannelFeatures.voice;

  // Features 和 Use Cases，从对象转换为数组
  const featuresObj = t('seax.channels.voice.features.items', { returnObjects: true }) as Record<string, string>;
  const features: string[] = Object.values(featuresObj || {});
  
  const useCasesObj = t('seax.channels.voice.useCases.items', { returnObjects: true }) as Record<string, string>;
  const useCases: string[] = Object.values(useCasesObj || {});

  // Features / UseCases 标题
  const featuresTitle = t('seax.channels.voice.features.title') || '';
  const featuresSubtitle = t('seax.channels.voice.features.subtitle') || '';
  const useCasesTitle = t('seax.channels.voice.useCases.title') || '';
  const useCasesSubtitle = t('seax.channels.voice.useCases.subtitle') || '';

  // Pricing 原始对象
  const pricingRaw = t('seax.channels.voice.pricing', { returnObjects: true }) as any;

  // 提取 value
  const pricing: Pricing = {
    setup: pricingRaw.setup?.value || '',
    monthly: pricingRaw.monthly?.value || '',
    perMessage: pricingRaw.perMessage?.value,
    perMinute: pricingRaw.perMinute?.value,
    note: pricingRaw.note?.value,
  };

  const pricingLabels = {
    setup: pricingRaw.setup?.label || 'Setup',
    monthly: pricingRaw.monthly?.label || 'Monthly',
    perMessage: pricingRaw.perMessage?.label || 'Per Message',
  };

  // Hero content
  const heroContent = (
    <div className="bg-white rounded-2xl shadow-2xl p-8">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold text-gray-900">{t('seax.channels.voice.hero.widget.title') || ''}</div>
          <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {t('seax.channels.voice.hero.widget.poweredBy') || ''}
          </div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-blue-600 mb-2">
            {t('seax.channels.voice.hero.widget.callsNumber') || ''}
          </div>
          <div className="text-sm text-gray-600">{t('seax.channels.voice.hero.widget.callsCompletedToday') || ''}</div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-green-600 mb-1">{t('seax.channels.voice.hero.widget.connectionRateValue') || ''}</div>
            <div className="text-sm text-gray-600">{t('seax.channels.voice.hero.widget.connectionRateLabel') || ''}</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-purple-600 mb-1">{t('seax.channels.voice.hero.widget.countriesValue') || ''}</div>
            <div className="text-sm text-gray-600">{t('seax.channels.voice.hero.widget.countriesLabel') || ''}</div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="text-sm font-medium text-gray-700">{t('seax.channels.voice.hero.widget.activeCalls') || ''}</div>
          <div className="space-y-2">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="flex-1 text-sm">
                <div className="font-medium">{t('seax.channels.voice.hero.widget.usPhoneNumber') || ''}</div>
                <div className="text-gray-500">{t('seax.channels.voice.hero.widget.appointmentReminder') || ''}</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <div className="flex-1 text-sm">
                <div className="font-medium">{t('seax.channels.voice.hero.widget.ukPhoneNumber') || ''}</div>
                <div className="text-gray-500">{t('seax.channels.voice.hero.widget.surveyCall') || ''}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Stats
  const stats = [
    {
      value: t('seax.channels.voice.hero.widget.countriesValue') || '',
      label: t('seax.channels.voice.hero.widget.countriesLabel') || '',
      icon: <Globe className="w-8 h-8 text-blue-600" />
    },
    {
      value: t('seax.channels.voice.hero.widget.connectionRateValue') || '',
      label: t('seax.channels.voice.hero.widget.connectionRateLabel') || '',
      icon: <Phone className="w-8 h-8 text-green-600" />
    },
    {
      value: t('seax.channels.voice.stats.languagesValue') || '',
      label: t('seax.channels.voice.stats.languagesLabel') || '',
      icon: <Mic className="w-8 h-8 text-purple-600" />
    }
  ];

  // Testimonial
  const testimonial = {
    quote: t('seax.channels.voice.testimonial.quote') || '',
    author: t('seax.channels.voice.testimonial.author') || '',
    company: t('seax.channels.voice.testimonial.company') || '',
    results: t('seax.channels.voice.testimonial.results') || ''
  };

  return (
    <ChannelPageTemplate
      title={t('seax.channels.voice.title') || ''}
      subtitle={t('seax.channels.voice.subtitle') || ''}
      description={t('seax.channels.voice.description') || ''}
      seoTitle={t('seax.channels.voice.seoTitle') || ''}
      seoDescription={t('seax.channels.voice.seoDescription') || ''}
      heroContent={heroContent}
      features={features}
      featuresTitle={featuresTitle}
      featuresSubtitle={featuresSubtitle}
      useCases={useCases}
      useCasesTitle={useCasesTitle}
      useCasesSubtitle={useCasesSubtitle}
      pricing={pricing}
      pricingTitle={pricingRaw.title || ''}
      pricingSubtitle={pricingRaw.subtitle || ''}
      pricingLabels={pricingLabels}
      stats={stats}
      testimonial={testimonial}
    />
  );
};

export default Voice;
