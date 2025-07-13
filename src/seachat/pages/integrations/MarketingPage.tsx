
import { SiMailchimp, SiHubspot } from 'react-icons/si';
import { Mail, Target, TrendingUp, Users, Zap, ArrowRight, CheckCircle } from 'lucide-react';

import { useTranslation } from 'react-i18next';

const MarketingPage = () => {
  const { t } = useTranslation();
  
  const platforms = [
    {
      name: t('integrations.marketing.platforms.activecampaign.name', 'ActiveCampaign'),
      icon: Zap,
      color: 'from-indigo-500 to-purple-500',
      description: t('integrations.marketing.platforms.activecampaign.description', 'Customer experience automation platform'),
      features: [
        t('integrations.marketing.platforms.activecampaign.features.automation', 'Marketing automation'), 
        t('integrations.marketing.platforms.activecampaign.features.crm', 'CRM integration'), 
        t('integrations.marketing.platforms.activecampaign.features.learning', 'Machine learning'), 
        t('integrations.marketing.platforms.activecampaign.features.sending', 'Predictive sending')
      ],
      setupTime: t('integrations.marketing.platforms.activecampaign.setupTime', '18 minutes'),
      category: t('integrations.marketing.platforms.activecampaign.category', 'Automation')
    },
    {
      name: t('integrations.marketing.platforms.constantcontact.name', 'Constant Contact'),
      icon: Mail,
      color: 'from-blue-500 to-yellow-400',
      description: t('integrations.marketing.platforms.constantcontact.description', 'Email marketing and automation for small businesses'),
      features: [
        t('integrations.marketing.platforms.constantcontact.features.templates', 'Email templates'),
        t('integrations.marketing.platforms.constantcontact.features.social', 'Social media tools'),
        t('integrations.marketing.platforms.constantcontact.features.scheduling', 'Campaign scheduling'),
        t('integrations.marketing.platforms.constantcontact.features.analytics', 'Analytics dashboard')
      ],
      setupTime: t('integrations.marketing.platforms.constantcontact.setupTime', '7 minutes'),
      category: t('integrations.marketing.platforms.constantcontact.category', 'Email Marketing')
    },
    {
      name: t('integrations.marketing.platforms.convertkit.name', 'ConvertKit'),
      icon: Users,
      color: 'from-blue-500 to-indigo-500',
      description: t('integrations.marketing.platforms.convertkit.description', 'Creator-focused email marketing with automation sequences'),
      features: [
        t('integrations.marketing.platforms.convertkit.features.sequences', 'Email sequences'), 
        t('integrations.marketing.platforms.convertkit.features.tagging', 'Subscriber tagging'), 
        t('integrations.marketing.platforms.convertkit.features.landing', 'Landing pages'), 
        t('integrations.marketing.platforms.convertkit.features.integrations', 'Integrations')
      ],
      setupTime: t('integrations.marketing.platforms.convertkit.setupTime', '9 minutes'),
      category: t('integrations.marketing.platforms.convertkit.category', 'Creator Economy')
    },
    {
      name: t('integrations.marketing.platforms.engagebay.name', 'EngageBay'),
      icon: Users,
      color: 'from-pink-500 to-orange-400',
      description: t('integrations.marketing.platforms.engagebay.description', 'All-in-one marketing, sales, and support CRM'),
      features: [
        t('integrations.marketing.platforms.engagebay.features.email', 'Email marketing'),
        t('integrations.marketing.platforms.engagebay.features.crm', 'CRM integration'),
        t('integrations.marketing.platforms.engagebay.features.forms', 'Lead forms & popups'),
        t('integrations.marketing.platforms.engagebay.features.automation', 'Marketing automation')
      ],
      setupTime: t('integrations.marketing.platforms.engagebay.setupTime', '11 minutes'),
      category: t('integrations.marketing.platforms.engagebay.category', 'All-in-One')
    },
    {
      name: t('integrations.marketing.platforms.hubspot.name', 'HubSpot Marketing'),
      icon: SiHubspot,
      color: 'from-orange-500 to-red-500',
      description: t('integrations.marketing.platforms.hubspot.description', 'Inbound marketing platform with lead nurturing capabilities'),
      features: [
        t('integrations.marketing.platforms.hubspot.features.scoring', 'Lead scoring'), 
        t('integrations.marketing.platforms.hubspot.features.automation', 'Marketing automation'), 
        t('integrations.marketing.platforms.hubspot.features.landing', 'Landing pages'), 
        t('integrations.marketing.platforms.hubspot.features.social', 'Social media')
      ],
      setupTime: t('integrations.marketing.platforms.hubspot.setupTime', '15 minutes'),
      category: t('integrations.marketing.platforms.hubspot.category', 'Marketing Hub')
    },
    {
      name: t('integrations.marketing.platforms.klaviyo.name', 'Klaviyo'),
      icon: Zap,
      color: 'from-purple-500 to-pink-500',
      description: t('integrations.marketing.platforms.klaviyo.description', 'E-commerce focused email and SMS marketing platform'),
      features: [
        t('integrations.marketing.platforms.klaviyo.features.triggers', 'Behavioral triggers'), 
        t('integrations.marketing.platforms.klaviyo.features.recommendations', 'Product recommendations'), 
        t('integrations.marketing.platforms.klaviyo.features.sms', 'SMS campaigns'), 
        t('integrations.marketing.platforms.klaviyo.features.revenue', 'Revenue tracking')
      ],
      setupTime: t('integrations.marketing.platforms.klaviyo.setupTime', '12 minutes'),
      category: t('integrations.marketing.platforms.klaviyo.category', 'E-commerce')
    },
    {
      name: t('integrations.marketing.platforms.mailchimp.name', 'Mailchimp'),
      icon: SiMailchimp,
      color: 'from-yellow-500 to-orange-500',
      description: t('integrations.marketing.platforms.mailchimp.description', 'Comprehensive email marketing platform with audience insights'),
      features: [
        t('integrations.marketing.platforms.mailchimp.features.builder', 'Campaign builder'), 
        t('integrations.marketing.platforms.mailchimp.features.segmentation', 'Audience segmentation'), 
        t('integrations.marketing.platforms.mailchimp.features.testing', 'A/B testing'), 
        t('integrations.marketing.platforms.mailchimp.features.reporting', 'Reporting')
      ],
      setupTime: t('integrations.marketing.platforms.mailchimp.setupTime', '10 minutes'),
      category: t('integrations.marketing.platforms.mailchimp.category', 'Email Marketing')
    },
    {
      name: t('integrations.marketing.platforms.mailerlite.name', 'MailerLite'),
      icon: Mail,
      color: 'from-green-500 to-emerald-500',
      description: t('integrations.marketing.platforms.mailerlite.description', 'Email marketing automation with customer support integration'),
      features: [
        t('integrations.marketing.platforms.mailerlite.features.campaigns', 'Email campaigns'), 
        t('integrations.marketing.platforms.mailerlite.features.automation', 'Automation workflows'), 
        t('integrations.marketing.platforms.mailerlite.features.subscribers', 'Subscriber management'), 
        t('integrations.marketing.platforms.mailerlite.features.analytics', 'Analytics')
      ],
      setupTime: t('integrations.marketing.platforms.mailerlite.setupTime', '8 minutes'),
      category: t('integrations.marketing.platforms.mailerlite.category', 'Email Marketing')
    },
    {
      name: t('integrations.marketing.platforms.omnisend.name', 'Omnisend'),
      icon: Mail,
      color: 'from-teal-500 to-green-500',
      description: t('integrations.marketing.platforms.omnisend.description', 'Omnichannel marketing automation for e-commerce'),
      features: [
        t('integrations.marketing.platforms.omnisend.features.email', 'Email & SMS campaigns'),
        t('integrations.marketing.platforms.omnisend.features.automation', 'Automation workflows'),
        t('integrations.marketing.platforms.omnisend.features.segmentation', 'Audience segmentation'),
        t('integrations.marketing.platforms.omnisend.features.reports', 'Advanced reporting')
      ],
      setupTime: t('integrations.marketing.platforms.omnisend.setupTime', '10 minutes'),
      category: t('integrations.marketing.platforms.omnisend.category', 'E-commerce')
    }
  ];

  const benefits = [
    {
      title: t('integrations.marketing.benefits.leads.title', 'Lead Generation'),
      description: t('integrations.marketing.benefits.leads.description', 'Convert support conversations into marketing qualified leads'),
      metric: '35%'
    },
    {
      title: t('integrations.marketing.benefits.retention.title', 'Customer Retention'),
      description: t('integrations.marketing.benefits.retention.description', 'Improve retention with personalized marketing campaigns'),
      metric: '60%'
    },
    {
      title: t('integrations.marketing.benefits.campaigns.title', 'Campaign Performance'),
      description: t('integrations.marketing.benefits.campaigns.description', 'Better campaign results with customer support insights'),
      metric: '45%'
    },
    {
      title: t('integrations.marketing.benefits.revenue.title', 'Revenue Growth'),
      description: t('integrations.marketing.benefits.revenue.description', 'Increase revenue through integrated marketing efforts'),
      metric: '28%'
    }
  ];

  const featuresFromTranslation = t('integrations.marketing.features', { returnObjects: true });
  const features = Array.isArray(featuresFromTranslation) ? featuresFromTranslation : [];

  const useCases = [
    {
      title: t('integrations.marketing.useCases.nurturing.title', 'Lead Nurturing'),
      description: t('integrations.marketing.useCases.nurturing.description', 'Automatically add support contacts to nurturing campaigns'),
      example: t('integrations.marketing.useCases.nurturing.example', 'Customer asks about pricing → Added to product demo email sequence')
    },
    {
      title: t('integrations.marketing.useCases.upselling.title', 'Upselling Opportunities'),
      description: t('integrations.marketing.useCases.upselling.description', 'Identify upselling opportunities from support conversations'),
      example: t('integrations.marketing.useCases.upselling.example', 'Customer mentions growth plans → Triggered upgrade campaign')
    },
    {
      title: t('integrations.marketing.useCases.onboarding.title', 'Customer Onboarding'),
      description: t('integrations.marketing.useCases.onboarding.description', 'Seamless onboarding experience with marketing automation'),
      example: t('integrations.marketing.useCases.onboarding.example', 'New customer support ticket → Welcome series with helpful resources')
    },
    {
      title: t('integrations.marketing.useCases.retention.title', 'Retention Campaigns'),
      description: t('integrations.marketing.useCases.retention.description', 'Proactive retention based on support interaction patterns'),
      example: t('integrations.marketing.useCases.retention.example', 'Multiple support tickets → Triggered customer success outreach')
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-900 via-red-800 to-pink-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Target className="w-16 h-16 text-orange-300 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold">
                {t('integrations.marketing.title', 'Marketing Platforms')}
              </h1>
            </div>
            <p className="text-2xl text-orange-200 mb-8 max-w-4xl mx-auto">
              {t('integrations.marketing.subtitle', 'Connect SeaChat with your marketing tools to turn customer support conversations into powerful marketing opportunities and personalized campaigns.')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://chat.seasalt.ai/gpt/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 text-center"
              >
                {t('integrations.marketing.connectButton', 'Connect Marketing Tools')}
              </a>
              <a
                href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all text-center"
              >
                {t('integrations.marketing.demoButton', 'Schedule Marketing Demo')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Platforms */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('integrations.marketing.platformsTitle', 'Popular Marketing Platforms')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('integrations.marketing.platformsSubtitle', 'Integrate with leading marketing platforms to create seamless customer experiences.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => {
              const IconComponent = platform.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${platform.color} rounded-2xl flex items-center justify-center`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                      {platform.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{platform.name}</h3>
                  <p className="text-gray-600 mb-6">{platform.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {platform.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-sm text-gray-600">
                      {t('integrations.marketing.setup')}: <span className="font-medium text-gray-900">{platform.setupTime}</span>
                    </div>
                  </div>
                  
                  <a
                    href="https://chat.seasalt.ai/gpt/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full bg-gradient-to-r ${platform.color} hover:opacity-90 text-white py-3 px-6 rounded-lg font-semibold transition-all transform hover:scale-105 text-center block`}
                  >
                    {t('integrations.marketing.connectPlatform', 'Connect')} {platform.name}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('integrations.marketing.benefitsTitle', 'Marketing Integration Benefits')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('integrations.marketing.benefitsSubtitle', 'Transform customer support into a powerful marketing and growth engine.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl font-bold text-orange-600 mb-4">+{benefit.metric}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('integrations.marketing.useCasesTitle', 'Marketing Automation Use Cases')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('integrations.marketing.useCasesSubtitle', 'See how support conversations can trigger powerful marketing workflows.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                <p className="text-gray-600 mb-6">{useCase.description}</p>
                
                <div className="bg-white rounded-lg p-4 border-l-4 border-orange-500">
                  <h4 className="font-semibold text-gray-900 mb-2">{t('integrations.marketing.workflowExample', 'Example Workflow')}:</h4>
                  <p className="text-gray-700 text-sm">{useCase.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t('integrations.marketing.integrationTitle', 'Complete Marketing Integration')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('integrations.marketing.integrationSubtitle', 'Bridge the gap between customer support and marketing with intelligent automation that turns every conversation into a growth opportunity.')}
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('integrations.marketing.automationTitle', 'Marketing Automation Flow')}</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('integrations.marketing.flow.conversation.title', 'Support Conversation')}</h4>
                    <p className="text-gray-600 text-sm">{t('integrations.marketing.flow.conversation.description', 'Customer asks about premium features')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('integrations.marketing.flow.tagging.title', 'Automatic Tagging')}</h4>
                    <p className="text-gray-600 text-sm">{t('integrations.marketing.flow.tagging.description', 'Customer tagged as "interested in upgrade"')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('integrations.marketing.flow.trigger.title', 'Campaign Trigger')}</h4>
                    <p className="text-gray-600 text-sm">{t('integrations.marketing.flow.trigger.description', 'Automated email sequence starts')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('integrations.marketing.flow.conversion.title', 'Conversion')}</h4>
                    <p className="text-gray-600 text-sm">{t('integrations.marketing.flow.conversion.description', 'Customer upgrades to premium plan')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('integrations.marketing.ctaTitle', 'Ready to Supercharge Your Marketing?')}
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            {t('integrations.marketing.ctaSubtitle', 'Connect your marketing platforms and turn every customer support conversation into a growth opportunity.')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://chat.seasalt.ai/gpt/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
            >
              {t('integrations.marketing.ctaConnectButton', 'Connect Marketing Tools')}
            </a>
            <a
              href="http://wiki.seasalt.ai/seachat/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center"
            >
              {t('integrations.marketing.ctaGuideButton', 'View Setup Guide')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketingPage;