import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHelmet from '../../../components/SEOHelmet';
import { useTranslation } from 'react-i18next';
import { MEETING_URL, getMeetingUrl } from '../../../constants/urls';
import { 
  MessageCircle, 
  CheckCircle, 
  Globe, 
  Shield, 
  Zap, 
  BarChart3, 
  Users, 
  ArrowRight,
  Image,
  Star
} from 'lucide-react';

const WhatsApp = () => {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;

  const features = [
    {
      icon: MessageCircle,
      title: t('seax.channels.whatsapp.features.richMedia.title'),
      description: t('seax.channels.whatsapp.features.richMedia.description')
    },
    {
      icon: Globe,
      title: t('seax.channels.whatsapp.features.globalReach.title'),
      description: t('seax.channels.whatsapp.features.globalReach.description')
    },
    {
      icon: Shield,
      title: t('seax.channels.whatsapp.features.security.title'),
      description: t('seax.channels.whatsapp.features.security.description')
    },
    {
      icon: Zap,
      title: t('seax.channels.whatsapp.features.instantDelivery.title'),
      description: t('seax.channels.whatsapp.features.instantDelivery.description')
    },
    {
      icon: BarChart3,
      title: t('seax.channels.whatsapp.features.analytics.title'),
      description: t('seax.channels.whatsapp.features.analytics.description')
    },
    {
      icon: Users,
      title: t('seax.channels.whatsapp.features.twoWay.title'),
      description: t('seax.channels.whatsapp.features.twoWay.description')
    }
  ];

  const messageTypes = [
    {
      icon: MessageCircle,
      title: t('seax.channels.whatsapp.messageTypes.template.title'),
      description: t('seax.channels.whatsapp.messageTypes.template.description'),
      features: [
        t('seax.channels.whatsapp.messageTypes.template.feature1'),
        t('seax.channels.whatsapp.messageTypes.template.feature2'),
        t('seax.channels.whatsapp.messageTypes.template.feature3'),
        t('seax.channels.whatsapp.messageTypes.template.feature4')
      ]
    },
    {
      icon: Image,
      title: t('seax.channels.whatsapp.messageTypes.richMedia.title'),
      description: t('seax.channels.whatsapp.messageTypes.richMedia.description'),
      features: [
        t('seax.channels.whatsapp.messageTypes.richMedia.feature1'),
        t('seax.channels.whatsapp.messageTypes.richMedia.feature2'),
        t('seax.channels.whatsapp.messageTypes.richMedia.feature3'),
        t('seax.channels.whatsapp.messageTypes.richMedia.feature4')
      ]
    },
    {
      icon: Users,
      title: t('seax.channels.whatsapp.messageTypes.interactive.title'),
      description: t('seax.channels.whatsapp.messageTypes.interactive.description'),
      features: [
        t('seax.channels.whatsapp.messageTypes.interactive.feature1'),
        t('seax.channels.whatsapp.messageTypes.interactive.feature2'),
        t('seax.channels.whatsapp.messageTypes.interactive.feature3'),
        t('seax.channels.whatsapp.messageTypes.interactive.feature4')
      ]
    }
  ];

  const useCases = [
    {
      title: t('seax.channels.whatsapp.useCases.support.title'),
      description: t('seax.channels.whatsapp.useCases.support.description'),
      metrics: t('seax.channels.whatsapp.useCases.support.metrics')
    },
    {
      title: t('seax.channels.whatsapp.useCases.orders.title'),
      description: t('seax.channels.whatsapp.useCases.orders.description'),
      metrics: t('seax.channels.whatsapp.useCases.orders.metrics')
    },
    {
      title: t('seax.channels.whatsapp.useCases.marketing.title'),
      description: t('seax.channels.whatsapp.useCases.marketing.description'),
      metrics: t('seax.channels.whatsapp.useCases.marketing.metrics')
    },
    {
      title: t('seax.channels.whatsapp.useCases.appointments.title'),
      description: t('seax.channels.whatsapp.useCases.appointments.description'),
      metrics: t('seax.channels.whatsapp.useCases.appointments.metrics')
    }
  ];

  const stats = [
    { value: '2B+', label: t('seax.channels.whatsapp.hero.stats.monthlyUsers') },
    { value: '95%', label: t('seax.channels.whatsapp.hero.stats.openRate') },
    { value: '65%', label: t('seax.channels.whatsapp.hero.stats.engagementRate') },
    { value: '180+', label: t('seax.channels.whatsapp.hero.stats.countriesSupported') }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet 
        title={t('seax.channels.whatsapp.seo.title')}
        description={t('seax.channels.whatsapp.seo.description')}
        favicon="/seasalt-ai-favicon.ico"
      />
      
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <MessageCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <span className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
                    {t('seax.channels.whatsapp.hero.badge')}
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                  {t('seax.channels.whatsapp.hero.title.line1')}{' '}
                  <span className="text-green-600 block">{t('seax.channels.whatsapp.hero.title.line2')}</span>
                </h1>
                <p className="text-xl text-gray-600">
                  {t('seax.channels.whatsapp.hero.description')}
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-green-600">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://seax.seasalt.ai/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>{t('seax.channels.whatsapp.hero.cta.primary')}</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href={getMeetingUrl(currentLanguage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors text-center"
                >
                  {t('seax.channels.whatsapp.hero.cta.secondary')}
                </a>
              </div>
            </div>
            
            {/* WhatsApp Illustration */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8 border">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{t('seax.channels.whatsapp.hero.demo.title')}</h3>
                      <p className="text-sm text-gray-600">{t('seax.channels.whatsapp.hero.demo.subtitle')}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">{t('seax.channels.whatsapp.hero.demo.templateLabel')}</span>
                      </div>
                      <div className="bg-white rounded-lg p-3 border-l-4 border-green-500">
                        <div className="text-sm text-gray-900">
                          {t('seax.channels.whatsapp.hero.demo.message')}
                        </div>
                        <div className="mt-2 flex space-x-2">
                          <button className="bg-green-600 text-white px-3 py-1 rounded text-xs">
                            {t('seax.channels.whatsapp.hero.demo.button1')}
                          </button>
                          <button className="border border-green-600 text-green-600 px-3 py-1 rounded text-xs">
                            {t('seax.channels.whatsapp.hero.demo.button2')}
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-blue-600">94.8%</div>
                        <div className="text-sm text-gray-600">{t('seax.channels.whatsapp.hero.demo.openRateLabel')}</div>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-purple-600">12.3K</div>
                        <div className="text-sm text-gray-600">{t('seax.channels.whatsapp.hero.demo.deliveredLabel')}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('seax.channels.whatsapp.features.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('seax.channels.whatsapp.features.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="bg-green-100 p-4 rounded-lg w-16 h-16 flex items-center justify-center mx-auto">
                  <feature.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Message Types Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('seax.channels.whatsapp.messageTypes.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('seax.channels.whatsapp.messageTypes.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {messageTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="bg-green-100 p-3 rounded-lg w-fit mb-4">
                  <type.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Use Cases Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('seax.channels.whatsapp.useCases.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('seax.channels.whatsapp.useCases.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Star className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                    <p className="text-gray-600 mb-3">{useCase.description}</p>
                    <div className="text-sm font-medium text-green-600">{useCase.metrics}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-green-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t('seax.channels.whatsapp.cta.title')}
          </h2>
          <p className="text-xl text-green-100 mb-8">
            {t('seax.channels.whatsapp.cta.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://seax.seasalt.ai/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
            >
              <span>{t('seax.channels.whatsapp.cta.primary')}</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <a
              href={getMeetingUrl(currentLanguage)}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              {t('seax.channels.whatsapp.cta.secondary')}
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default WhatsApp;