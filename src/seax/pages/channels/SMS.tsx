import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHelmet from '../../../components/SEOHelmet';
import { useTranslation } from 'react-i18next';
import { 
  MessageSquare, 
  CheckCircle, 
  Globe, 
  Shield, 
  Zap, 
  BarChart3, 
  Users, 
  ArrowRight,
  Target
} from 'lucide-react';

const SMS = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Globe,
      title: t('seax.channels.sms.features.globalReach.title'),
      description: t('seax.channels.sms.features.globalReach.description')
    },
    {
      icon: Zap,
      title: t('seax.channels.sms.features.lightningFast.title'),
      description: t('seax.channels.sms.features.lightningFast.description')
    },
    {
      icon: Shield,
      title: t('seax.channels.sms.features.secure.title'),
      description: t('seax.channels.sms.features.secure.description')
    },
    {
      icon: BarChart3,
      title: t('seax.channels.sms.features.analytics.title'),
      description: t('seax.channels.sms.features.analytics.description')
    },
    {
      icon: Users,
      title: t('seax.channels.sms.features.bulk.title'),
      description: t('seax.channels.sms.features.bulk.description')
    },
    {
      icon: Target,
      title: t('seax.channels.sms.features.segmentation.title'),
      description: t('seax.channels.sms.features.segmentation.description')
    }
  ];

  const useCases = [
    {
      title: t('seax.channels.sms.useCases.marketing.title'),
      description: t('seax.channels.sms.useCases.marketing.description'),
      metrics: t('seax.channels.sms.useCases.marketing.metrics')
    },
    {
      title: t('seax.channels.sms.useCases.support.title'),
      description: t('seax.channels.sms.useCases.support.description'),
      metrics: t('seax.channels.sms.useCases.support.metrics')
    },
    {
      title: t('seax.channels.sms.useCases.appointments.title'),
      description: t('seax.channels.sms.useCases.appointments.description'),
      metrics: t('seax.channels.sms.useCases.appointments.metrics')
    },
    {
      title: t('seax.channels.sms.useCases.emergency.title'),
      description: t('seax.channels.sms.useCases.emergency.description'),
      metrics: t('seax.channels.sms.useCases.emergency.metrics')
    }
  ];

  const stats = [
    { value: t('seax.channels.sms.hero.stats.messagesValue'), label: t('seax.channels.sms.hero.stats.messagesSent') },
    { value: t('seax.channels.sms.hero.stats.countriesValue'), label: t('seax.channels.sms.hero.stats.countries') },
    { value: t('seax.channels.sms.hero.stats.uptimeValue'), label: t('seax.channels.sms.hero.stats.uptime') },
    { value: t('seax.channels.sms.hero.stats.deliveryValue'), label: t('seax.channels.sms.hero.stats.deliveryRate') }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet 
        title={t('seax.channels.sms.seo.title')}
        description={t('seax.channels.sms.seo.description')}
        favicon="/seasalt-ai-favicon.ico"
      />
      
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <MessageSquare className="w-8 h-8 text-green-600" />
                  </div>
                  <span className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
                    {t('seax.channels.sms.hero.badge')}
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                  {t('seax.channels.sms.hero.title')}
                  <span className="text-green-600 block">{t('seax.channels.sms.hero.titleHighlight')}</span>
                </h1>
                <p className="text-xl text-gray-600">
                  {t('seax.channels.sms.hero.description')}
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
                  <span>{t('seax.channels.sms.hero.cta.primary')}</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors text-center"
                >
                  {t('seax.channels.sms.hero.cta.secondary')}
                </a>
              </div>
            </div>
            
            {/* SMS Illustration */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8 border">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">{t('seax.channels.sms.hero.preview.title')}</h3>
                    <span className="text-sm text-green-600 bg-green-100 px-3 py-1 rounded-full font-medium">
                      {t('seax.channels.sms.hero.preview.status')}
                    </span>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-700 mb-2">{t('seax.channels.sms.hero.preview.messageLabel')}</div>
                    <div className="bg-white rounded-lg p-3 border-l-4 border-green-500">
                      <div className="text-sm text-gray-900">
                        "{t('seax.channels.sms.hero.preview.message')}"
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-blue-600">{t('seax.channels.sms.hero.preview.deliveredValue')}</div>
                      <div className="text-sm text-gray-600">{t('seax.channels.sms.hero.preview.delivered')}</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-green-600">{t('seax.channels.sms.hero.preview.successValue')}</div>
                      <div className="text-sm text-gray-600">{t('seax.channels.sms.hero.preview.successRate')}</div>
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
              {t('seax.channels.sms.features.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('seax.channels.sms.features.description')}
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
      
      {/* Use Cases Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('seax.channels.sms.useCases.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('seax.channels.sms.useCases.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-green-600" />
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
            {t('seax.channels.sms.cta.title')}
          </h2>
          <p className="text-xl text-green-100 mb-8">
            {t('seax.channels.sms.cta.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://seax.seasalt.ai/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
            >
              <span>{t('seax.channels.sms.cta.primary')}</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <a
              href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              {t('seax.channels.sms.cta.secondary')}
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SMS;