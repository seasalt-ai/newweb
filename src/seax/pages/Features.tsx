import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHelmet from '../../components/SEOHelmet';
import { useTranslation } from 'react-i18next';
import { 
  MessageSquare, 
  BarChart3, 
  Shield, 
  ArrowRight,
  CheckCircle,
  Zap,
  Globe,
  Bot,
  Lock,
  Building2
} from 'lucide-react';
import { getSeaxCoreFeatures } from '../data/seaxFeatures';

const Features = () => {
  const { t } = useTranslation();
  const seaxCoreFeatures = getSeaxCoreFeatures(t);

  const featureCategories = [
    {
      title: t('seax.features.messagingChannels.title'),
      icon: MessageSquare,
      color: 'blue',
      features: [
        {
          name: t('seax.features.messagingChannels.sms.name'),
          description: t('seax.features.messagingChannels.sms.description'),
          link: '/channels/sms'
        },
        {
          name: t('seax.features.messagingChannels.whatsapp.name'),
          description: t('seax.features.messagingChannels.whatsapp.description'),
          link: '/channels/whatsapp'
        },
        {
          name: t('seax.features.messagingChannels.voice.name'),
          description: t('seax.features.messagingChannels.voice.description'),
          link: '/channels/voice'
        }
      ]
    },
    {
      title: t('seax.features.aiAutomation.title'),
      icon: Bot,
      color: 'green',
      features: [
        {
          name: t('seax.features.aiAutomation.followUp.name'),
          description: t('seax.features.aiAutomation.followUp.description'),
          link: '/features'
        },
        {
          name: t('seax.features.aiAutomation.responses.name'),
          description: t('seax.features.aiAutomation.responses.description'),
          link: '/features'
        },
        {
          name: t('seax.features.aiAutomation.leadScoring.name'),
          description: t('seax.features.aiAutomation.leadScoring.description'),
          link: '/features'
        }
      ]
    },
    {
      title: t('seax.features.analyticsInsights.title'),
      icon: BarChart3,
      color: 'purple',
      features: [
        {
          name: t('seax.features.analyticsInsights.dashboard.name'),
          description: t('seax.features.analyticsInsights.dashboard.description'),
          link: '/features'
        },
        {
          name: t('seax.features.analyticsInsights.tracking.name'),
          description: t('seax.features.analyticsInsights.tracking.description'),
          link: '/features'
        },
        {
          name: t('seax.features.analyticsInsights.reporting.name'),
          description: t('seax.features.analyticsInsights.reporting.description'),
          link: '/features'
        }
      ]
    },
    {
      title: t('seax.features.enterpriseSecurity.title'),
      icon: Shield,
      color: 'red',
      features: [
        {
          name: t('seax.features.enterpriseSecurity.gdpr.name'),
          description: t('seax.features.enterpriseSecurity.gdpr.description'),
          link: '/features'
        },
        {
          name: t('seax.features.enterpriseSecurity.collaboration.name'),
          description: t('seax.features.enterpriseSecurity.collaboration.description'),
          link: '/features'
        },
        {
          name: t('seax.features.enterpriseSecurity.slas.name'),
          description: t('seax.features.enterpriseSecurity.slas.description'),
          link: '/features'
        }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      red: 'bg-red-100 text-red-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet 
        title={t('seax.features.seoTitle')}
        description={t('seax.features.seoDescription')}
        favicon="/seasalt-ai-favicon.ico"
      />
      
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {t('seax.features.hero.title.line1')}
            <span className="text-blue-600 block">{t('seax.features.hero.title.line2')}</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t('seax.features.hero.description')}
          </p>
          
          <div className="flex justify-center items-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-yellow-500" />
              <span>{t('seax.features.hero.stats.messagesDaily')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5 text-blue-500" />
              <span>{t('seax.features.hero.stats.countries')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Lock className="w-5 h-5 text-green-500" />
              <span>{t('seax.features.hero.stats.security')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Core Features Grid */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('seax.features.coreFeatures.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('seax.features.coreFeatures.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seaxCoreFeatures.map((feature, _index) => (
              <div key={feature.id} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {feature.description}
                </p>
                
                {feature.metrics && (
                  <div className="bg-white rounded-lg p-4 mb-6">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      {feature.metrics.value}
                    </div>
                    <div className="text-sm text-gray-600">
                      {feature.metrics.label}
                    </div>
                  </div>
                )}
                
                <div className="space-y-2">
                  {feature.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature Categories */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('seax.features.featureCategories.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('seax.features.featureCategories.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featureCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 rounded-lg ${getColorClasses(category.color)}`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-900">
                          {feature.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          {feature.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Integration & API Section */}
      <div className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              {t('seax.features.integration.title')}
            </h2>
            <p className="text-xl text-blue-100">
              {t('seax.features.integration.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="bg-white/20 p-3 rounded-lg w-fit mb-4">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {t('seax.features.integration.crm.title')}
              </h3>
              <p className="text-blue-100 mb-4">
                {t('seax.features.integration.crm.description')}
              </p>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>{t('seax.features.integration.crm.features.sync')}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>{t('seax.features.integration.crm.features.mapping')}</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="bg-white/20 p-3 rounded-lg w-fit mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {t('seax.features.integration.analytics.title')}
              </h3>
              <p className="text-blue-100 mb-4">
                {t('seax.features.integration.analytics.description')}
              </p>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>{t('seax.features.integration.analytics.features.exports')}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>{t('seax.features.integration.analytics.features.dashboards')}</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="bg-white/20 p-3 rounded-lg w-fit mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {t('seax.features.integration.api.title')}
              </h3>
              <p className="text-blue-100 mb-4">
                {t('seax.features.integration.api.description')}
              </p>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>{t('seax.features.integration.api.features.endpoints')}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>{t('seax.features.integration.api.features.webhooks')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t('seax.features.cta.title')}
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            {t('seax.features.cta.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <span>{t('seax.features.cta.button')}</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Features;
