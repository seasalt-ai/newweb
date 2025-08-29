import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHelmet from '../../../components/SEOHelmet';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Zap, Clock, Users, BarChart3, MessageSquare, Settings } from 'lucide-react';

const MarketingAutomation = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const getLocalizedPath = (path: string) => `/${currentLanguage}/seax${path}`;

  const features = [
    {
      icon: Zap,
      title: t('seax.solutions.marketingAutomation.features.items[0].title'),
      description: t('seax.solutions.marketingAutomation.features.items[0].description')
    },
    {
      icon: Clock,
      title: t('seax.solutions.marketingAutomation.features.items[1].title'),
      description: t('seax.solutions.marketingAutomation.features.items[1].description')
    },
    {
      icon: Users,
      title: t('seax.solutions.marketingAutomation.features.items[2].title'),
      description: t('seax.solutions.marketingAutomation.features.items[2].description')
    },
    {
      icon: BarChart3,
      title: t('seax.solutions.marketingAutomation.features.items[3].title'),
      description: t('seax.solutions.marketingAutomation.features.items[3].description')
    },
    {
      icon: MessageSquare,
      title: t('seax.solutions.marketingAutomation.features.items[4].title'),
      description: t('seax.solutions.marketingAutomation.features.items[4].description')
    },
    {
      icon: Settings,
      title: t('seax.solutions.marketingAutomation.features.items[5].title'),
      description: t('seax.solutions.marketingAutomation.features.items[5].description')
    }
  ];

  const automationTypes = [
    {
      title: t('seax.solutions.marketingAutomation.automationTypes.items[0].title'),
      description: t('seax.solutions.marketingAutomation.automationTypes.items[0].description'),
      example: t('seax.solutions.marketingAutomation.automationTypes.items[0].example')
    },
    {
      title: t('seax.solutions.marketingAutomation.automationTypes.items[1].title'),
      description: t('seax.solutions.marketingAutomation.automationTypes.items[1].description'),
      example: t('seax.solutions.marketingAutomation.automationTypes.items[1].example')
    },
    {
      title: t('seax.solutions.marketingAutomation.automationTypes.items[2].title'),
      description: t('seax.solutions.marketingAutomation.automationTypes.items[2].description'),
      example: t('seax.solutions.marketingAutomation.automationTypes.items[2].example')
    },
    {
      title: t('seax.solutions.marketingAutomation.automationTypes.items[3].title'),
      description: t('seax.solutions.marketingAutomation.automationTypes.items[3].description'),
      example: t('seax.solutions.marketingAutomation.automationTypes.items[3].example')
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet 
        title={t('seax.solutions.marketingAutomation.seo.title')}
        description={t('seax.solutions.marketingAutomation.seo.description')}
        favicon="/seasalt-ai-favicon.ico"
      />
      
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {t('seax.solutions.marketingAutomation.hero.title.main')}
            <span className="text-purple-600 block">{t('seax.solutions.marketingAutomation.hero.title.highlight')}</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t('seax.solutions.marketingAutomation.hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={getLocalizedPath('/signup')}
              className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"
            >
              <span>{t('seax.solutions.marketingAutomation.hero.cta.primary')}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <Link
              to={getLocalizedPath('/demo')}
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              {t('seax.solutions.marketingAutomation.hero.cta.secondary')}
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('seax.solutions.marketingAutomation.features.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('seax.solutions.marketingAutomation.features.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <IconComponent className="w-6 h-6 text-purple-600" />
                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Automation Types Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('seax.solutions.marketingAutomation.automationTypes.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('seax.solutions.marketingAutomation.automationTypes.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {automationTypes.map((automation, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{automation.title}</h3>
                <p className="text-gray-600 mb-4">{automation.description}</p>
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="text-sm font-medium text-purple-800 mb-2">{t('seax.solutions.marketingAutomation.automationTypes.exampleFlowLabel')}</div>
                  <div className="text-sm text-purple-700">{automation.example}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('seax.solutions.marketingAutomation.stats.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('seax.solutions.marketingAutomation.stats.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">{t('seax.solutions.marketingAutomation.stats.items[0].value')}</div>
                <div className="text-gray-600">{t('seax.solutions.marketingAutomation.stats.items[0].label')}</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">{t('seax.solutions.marketingAutomation.stats.items[1].value')}</div>
                <div className="text-gray-600">{t('seax.solutions.marketingAutomation.stats.items[1].label')}</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">{t('seax.solutions.marketingAutomation.stats.items[2].value')}</div>
                <div className="text-gray-600">{t('seax.solutions.marketingAutomation.stats.items[2].label')}</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">{t('seax.solutions.marketingAutomation.stats.items[3].value')}</div>
                <div className="text-gray-600">{t('seax.solutions.marketingAutomation.stats.items[3].label')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t('seax.solutions.marketingAutomation.cta.title')}
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            {t('seax.solutions.marketingAutomation.cta.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={getLocalizedPath('/signup')}
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center space-x-2"
            >
              <span>{t('seax.solutions.marketingAutomation.cta.primary')}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to={getLocalizedPath('/demo')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              {t('seax.solutions.marketingAutomation.cta.secondary')}
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default MarketingAutomation;
