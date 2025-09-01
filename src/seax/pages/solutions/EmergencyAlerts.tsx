import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHelmet from '../../../components/SEOHelmet';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MEETING_URL, getMeetingUrl } from '../../../constants/urls';
import { ArrowRight, AlertTriangle, Clock, Users, Shield, Bell, MessageSquare } from 'lucide-react';
const EmergencyAlerts = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const getLocalizedPath = (path: string) => `/${currentLanguage}/seax${path}`;

  const features = [
    {
      icon: AlertTriangle,
      title: t('seax.solutions.emergencyAlerts.features.items[0].title'),
      description: t('seax.solutions.emergencyAlerts.features.items[0].description')
    },
    {
      icon: Clock,
      title: t('seax.solutions.emergencyAlerts.features.items[1].title'),
      description: t('seax.solutions.emergencyAlerts.features.items[1].description')
    },
    {
      icon: Users,
      title: t('seax.solutions.emergencyAlerts.features.items[2].title'),
      description: t('seax.solutions.emergencyAlerts.features.items[2].description')
    },
    {
      icon: Shield,
      title: t('seax.solutions.emergencyAlerts.features.items[3].title'),
      description: t('seax.solutions.emergencyAlerts.features.items[3].description')
    },
    {
      icon: Bell,
      title: t('seax.solutions.emergencyAlerts.features.items[4].title'),
      description: t('seax.solutions.emergencyAlerts.features.items[4].description')
    },
    {
      icon: MessageSquare,
      title: t('seax.solutions.emergencyAlerts.features.items[5].title'),
      description: t('seax.solutions.emergencyAlerts.features.items[5].description')
    }
  ];

  const useCases = [
    {
      title: t('seax.solutions.emergencyAlerts.useCases.items[0].title'),
      description: t('seax.solutions.emergencyAlerts.useCases.items[0].description'),
      stats: t('seax.solutions.emergencyAlerts.useCases.items[0].stats')
    },
    {
      title: t('seax.solutions.emergencyAlerts.useCases.items[1].title'),
      description: t('seax.solutions.emergencyAlerts.useCases.items[1].description'),
      stats: t('seax.solutions.emergencyAlerts.useCases.items[1].stats')
    },
    {
      title: t('seax.solutions.emergencyAlerts.useCases.items[2].title'),
      description: t('seax.solutions.emergencyAlerts.useCases.items[2].description'),
      stats: t('seax.solutions.emergencyAlerts.useCases.items[2].stats')
    },
    {
      title: t('seax.solutions.emergencyAlerts.useCases.items[3].title'),
      description: t('seax.solutions.emergencyAlerts.useCases.items[3].description'),
      stats: t('seax.solutions.emergencyAlerts.useCases.items[3].stats')
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet
        title={t('seax.solutions.emergencyAlerts.seo.title')}
        description={t('seax.solutions.emergencyAlerts.seo.description')}
        favicon="/seasalt-ai-favicon.ico"
      />

      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-50 to-yellow-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {t('seax.solutions.emergencyAlerts.hero.title.main')}
            <span className="text-red-600 block">{t('seax.solutions.emergencyAlerts.hero.title.highlight')}</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t('seax.solutions.emergencyAlerts.hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={getMeetingUrl(currentLanguage)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center space-x-2"
            >
              <span>{t('seax.solutions.emergencyAlerts.hero.cta.primary')}</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <Link
              to={getLocalizedPath('/demo')}
              className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-colors"
            >
              {t('seax.solutions.emergencyAlerts.hero.cta.secondary')}
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('seax.solutions.emergencyAlerts.features.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('seax.solutions.emergencyAlerts.features.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <IconComponent className="w-6 h-6 text-red-600" />
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

      {/* Use Cases Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('seax.solutions.emergencyAlerts.useCases.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('seax.solutions.emergencyAlerts.useCases.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <div className="bg-red-50 rounded-lg p-3">
                  <div className="text-sm font-medium text-red-800">{useCase.stats}</div>
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
              {t('seax.solutions.emergencyAlerts.stats.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('seax.solutions.emergencyAlerts.stats.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6">
                <div className="text-3xl font-bold text-red-600 mb-2">{t('seax.solutions.emergencyAlerts.stats.items[0].value')}</div>
                <div className="text-gray-600">{t('seax.solutions.emergencyAlerts.stats.items[0].label')}</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-6">
                <div className="text-3xl font-bold text-yellow-600 mb-2">{t('seax.solutions.emergencyAlerts.stats.items[1].value')}</div>
                <div className="text-gray-600">{t('seax.solutions.emergencyAlerts.stats.items[1].label')}</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">{t('seax.solutions.emergencyAlerts.stats.items[2].value')}</div>
                <div className="text-gray-600">{t('seax.solutions.emergencyAlerts.stats.items[2].label')}</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">{t('seax.solutions.emergencyAlerts.stats.items[3].value')}</div>
                <div className="text-gray-600">{t('seax.solutions.emergencyAlerts.stats.items[3].label')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-red-600 to-yellow-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t('seax.solutions.emergencyAlerts.cta.title')}
          </h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            {t('seax.solutions.emergencyAlerts.cta.description')}
          </p>

          <a
            href={getMeetingUrl(currentLanguage)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center space-x-2"
          >
            <span>{t('seax.solutions.emergencyAlerts.cta.primary')}</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default EmergencyAlerts;
