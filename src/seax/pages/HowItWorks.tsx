import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHelmet from '../../components/SEOHelmet';
import { useTranslation } from 'react-i18next';
import { MEETING_URL, getMeetingUrl } from '../../constants/urls';
import { Upload, MessageSquare, BarChart3, ArrowRight, CheckCircle, Smartphone, Phone, Send } from 'lucide-react';
const HowItWorks = () => {
  const { t, i18n: _i18n } = useTranslation();
  const currentLanguage = _i18n.language;

  const steps = [
    {
      number: '01',
      title: t('seax.pages.howItWorks.steps.step1.title'),
      description: t('seax.pages.howItWorks.steps.step1.description'),
      icon: Upload,
      features: [
        t('seax.pages.howItWorks.steps.step1.features.csvImport'),
        t('seax.pages.howItWorks.steps.step1.features.crmIntegrations'),
        t('seax.pages.howItWorks.steps.step1.features.dataValidation'),
        t('seax.pages.howItWorks.steps.step1.features.duplicateRemoval'),
        t('seax.pages.howItWorks.steps.step1.features.segmentationTools')
      ],
      time: t('seax.pages.howItWorks.steps.step1.time')
    },
    {
      number: '02',
      title: t('seax.pages.howItWorks.steps.step2.title'),
      description: t('seax.pages.howItWorks.steps.step2.description'),
      icon: Smartphone,
      features: [
        t('seax.pages.howItWorks.steps.step2.features.smsDelivery'),
        t('seax.pages.howItWorks.steps.step2.features.whatsappMessaging'),
        t('seax.pages.howItWorks.steps.step2.features.phoneCallIntegration')
      ],
      time: t('seax.pages.howItWorks.steps.step2.time')
    },
    {
      number: '03',
      title: t('seax.pages.howItWorks.steps.step3.title'),
      description: t('seax.pages.howItWorks.steps.step3.description'),
      icon: MessageSquare,
      features: [
        t('seax.pages.howItWorks.steps.step3.features.messageTemplates'),
        t('seax.pages.howItWorks.steps.step3.features.abTesting'),
        t('seax.pages.howItWorks.steps.step3.features.schedulingOptions'),
        t('seax.pages.howItWorks.steps.step3.features.personalization')
      ],
      time: t('seax.pages.howItWorks.steps.step3.time')
    },
    {
      number: '04',
      title: t('seax.pages.howItWorks.steps.step4.title'),
      description: t('seax.pages.howItWorks.steps.step4.description'),
      icon: BarChart3,
      features: [
        t('seax.pages.howItWorks.steps.step4.features.instantDeployment'),
        t('seax.pages.howItWorks.steps.step4.features.realTimeTracking'),
        t('seax.pages.howItWorks.steps.step4.features.deliveryReports'),
        t('seax.pages.howItWorks.steps.step4.features.responseAnalytics'),
        t('seax.pages.howItWorks.steps.step4.features.roiMeasurement')
      ],
      time: t('seax.pages.howItWorks.steps.step4.time')
    }
  ];

  // JavaScript illustration components
  const ContactIllustration = () => (
    <div className="relative bg-gradient-to-r from-blue-50 to-indigo-100 rounded-xl p-8 min-h-[300px] flex items-center justify-center">
      <div className="space-y-4 w-full max-w-sm">
        <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-blue-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">✓</span>
            </div>
            <div>
              <div className="font-semibold text-gray-900">{t('seax.pages.howItWorks.illustrations.contacts.fileName')}</div>
              <div className="text-sm text-gray-600">{t('seax.pages.howItWorks.illustrations.contacts.fileSize')}</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-dashed border-gray-300">
          <div className="flex items-center space-x-3">
            <Upload className="w-8 h-8 text-gray-400" />
            <div>
              <div className="font-semibold text-gray-700">{t('seax.pages.howItWorks.illustrations.contacts.dropFiles')}</div>
              <div className="text-sm text-gray-500">{t('seax.pages.howItWorks.illustrations.contacts.browse')}</div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">100K+</div>
          <div className="text-sm text-gray-600">{t('seax.pages.howItWorks.illustrations.contacts.imported')}</div>
        </div>
      </div>
    </div>
  );

  const ChannelIllustration = () => (
    <div className="relative bg-gradient-to-r from-green-50 to-teal-100 rounded-xl p-8 min-h-[300px] flex items-center justify-center">
      <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
        <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-green-200 text-center">
          <MessageSquare className="w-8 h-8 text-green-600 mx-auto mb-2" />
          <div className="font-semibold text-gray-900">{t('seax.pages.howItWorks.illustrations.channels.sms')}</div>
          <div className="text-sm text-gray-600">{t('seax.pages.howItWorks.illustrations.channels.smsRate')}</div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-teal-200 text-center">
          <Send className="w-8 h-8 text-teal-600 mx-auto mb-2" />
          <div className="font-semibold text-gray-900">{t('seax.pages.howItWorks.illustrations.channels.whatsapp')}</div>
          <div className="text-sm text-gray-600">{t('seax.pages.howItWorks.illustrations.channels.whatsappRate')}</div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-blue-200 text-center">
          <Phone className="w-8 h-8 text-blue-600 mx-auto mb-2" />
          <div className="font-semibold text-gray-900">{t('seax.pages.howItWorks.illustrations.channels.voice')}</div>
          <div className="text-sm text-gray-600">{t('seax.pages.howItWorks.illustrations.channels.voiceRate')}</div>
        </div>
      </div>
    </div>
  );

  const CampaignIllustration = () => (
    <div className="relative bg-gradient-to-r from-purple-50 to-pink-100 rounded-xl p-8 min-h-[300px] flex items-center justify-center">
      <div className="space-y-4 w-full max-w-sm">
        <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-purple-200">
          <div className="flex items-center justify-between mb-3">
            <span className="font-semibold text-gray-900">{t('seax.pages.howItWorks.illustrations.campaign.draft')}</span>
            <span className="text-sm text-purple-600 bg-purple-100 px-2 py-1 rounded">{t('seax.pages.howItWorks.illustrations.campaign.status.draft')}</span>
          </div>
          <div className="bg-gray-50 rounded p-3 mb-3">
            <div className="text-sm text-gray-700">{t('seax.pages.howItWorks.illustrations.campaign.messagePreview')}</div>
          </div>
          <div className="flex space-x-2">
            <button className="flex-1 bg-purple-600 text-white px-3 py-2 rounded text-sm font-medium">{t('seax.pages.howItWorks.illustrations.campaign.preview')}</button>
            <button className="flex-1 bg-gray-200 text-gray-700 px-3 py-2 rounded text-sm font-medium">{t('seax.pages.howItWorks.illustrations.campaign.abTest')}</button>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-pink-200">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-gray-900">{t('seax.pages.howItWorks.illustrations.campaign.schedule')}</span>
            <span className="text-sm text-pink-600">{t('seax.pages.howItWorks.illustrations.campaign.scheduleNow')}</span>
          </div>
        </div>
      </div>
    </div>
  );

  const AnalyticsIllustration = () => (
    <div className="relative bg-gradient-to-r from-orange-50 to-red-100 rounded-xl p-8 min-h-[300px] flex items-center justify-center">
      <div className="space-y-4 w-full max-w-sm">
        <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-orange-200">
          <div className="flex items-center justify-between mb-3">
            <span className="font-semibold text-gray-900">{t('seax.pages.howItWorks.illustrations.analytics.campaignStatus')}</span>
            <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded">{t('seax.pages.howItWorks.illustrations.analytics.status.live')}</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">847K</div>
              <div className="text-sm text-gray-600">{t('seax.pages.howItWorks.illustrations.analytics.delivered')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">12.3%</div>
              <div className="text-sm text-gray-600">{t('seax.pages.howItWorks.illustrations.analytics.response')}</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-red-200">
          <div className="h-20 bg-gradient-to-r from-orange-200 to-red-200 rounded relative">
            <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-orange-400 to-red-400 rounded-b"></div>
            <div className="absolute top-2 left-2 text-xs font-medium text-gray-700">{t('seax.pages.howItWorks.illustrations.analytics.realTimeAnalytics')}</div>
          </div>
        </div>
      </div>
    </div>
  );

  const illustrations = [ContactIllustration, ChannelIllustration, CampaignIllustration, AnalyticsIllustration];

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet 
        title={t('seax.pages.howItWorks.seo.title')}
        description={t('seax.pages.howItWorks.seo.description')}
        favicon="/seasalt-ai-favicon.ico"
      />
      
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {t('seax.pages.howItWorks.hero.title.line1')}
            <span className="text-blue-600 block">{t('seax.pages.howItWorks.hero.title.line2')}</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t('seax.pages.howItWorks.hero.subtitle')}
          </p>
          
          <div className="flex justify-center items-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>{t('seax.pages.howItWorks.hero.features.setup')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>{t('seax.pages.howItWorks.hero.features.noCoding')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>{t('seax.pages.howItWorks.hero.features.instantDeploy')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div key={step.number} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl font-bold text-blue-600">
                      {step.number}
                    </div>
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <step.icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600">
                    {step.description}
                  </p>
                  
                  <div className="space-y-3">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-700">
                        {t('seax.pages.howItWorks.ui.timeRequired', { time: step.time })}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Visual */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  {React.createElement(illustrations[index])}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('seax.pages.howItWorks.results.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('seax.pages.howItWorks.results.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">10M+</div>
              <div className="text-gray-600">{t('seax.pages.howItWorks.results.stats.messagesDaily')}</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
              <div className="text-gray-600">{t('seax.pages.howItWorks.results.stats.openRate')}</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">400%</div>
              <div className="text-gray-600">{t('seax.pages.howItWorks.results.stats.roi')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t('seax.pages.howItWorks.cta.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {t('seax.pages.howItWorks.cta.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://seax.seasalt.ai/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
            >
              <span>{t('seax.pages.howItWorks.cta.signUp')}</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <a
              href={getMeetingUrl(currentLanguage)}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              {t('seax.pages.howItWorks.cta.bookDemo')}
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default HowItWorks;
