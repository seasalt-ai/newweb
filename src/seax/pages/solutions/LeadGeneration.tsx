import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHelmet from '../../../components/SEOHelmet';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Users, Target, Zap, MessageSquare, BarChart3, Phone } from 'lucide-react';

const LeadGeneration = () => {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;
  const getLocalizedPath = (path: string) => `/${currentLanguage}/seax${path}`;

  const features = [
    {
      icon: Target,
      title: t('seax.solutions.leadGeneration.features.targetedOutreach.title'),
      description: t('seax.solutions.leadGeneration.features.targetedOutreach.description')
    },
    {
      icon: Zap,
      title: t('seax.solutions.leadGeneration.features.multiChannelCampaigns.title'),
      description: t('seax.solutions.leadGeneration.features.multiChannelCampaigns.description')
    },
    {
      icon: MessageSquare,
      title: t('seax.solutions.leadGeneration.features.aiFollowUps.title'),
      description: t('seax.solutions.leadGeneration.features.aiFollowUps.description')
    },
    {
      icon: BarChart3,
      title: t('seax.solutions.leadGeneration.features.realTimeAnalytics.title'),
      description: t('seax.solutions.leadGeneration.features.realTimeAnalytics.description')
    },
    {
      icon: Users,
      title: t('seax.solutions.leadGeneration.features.leadScoring.title'),
      description: t('seax.solutions.leadGeneration.features.leadScoring.description')
    },
    {
      icon: Phone,
      title: t('seax.solutions.leadGeneration.features.voiceQualification.title'),
      description: t('seax.solutions.leadGeneration.features.voiceQualification.description')
    }
  ];

  const useCases = [
    {
      title: t('seax.solutions.leadGeneration.useCases.b2bSales.title'),
      description: t('seax.solutions.leadGeneration.useCases.b2bSales.description'),
      stats: t('seax.solutions.leadGeneration.useCases.b2bSales.stats')
    },
    {
      title: t('seax.solutions.leadGeneration.useCases.realEstate.title'),
      description: t('seax.solutions.leadGeneration.useCases.realEstate.description'),
      stats: t('seax.solutions.leadGeneration.useCases.realEstate.stats')
    },
    {
      title: t('seax.solutions.leadGeneration.useCases.insurance.title'),
      description: t('seax.solutions.leadGeneration.useCases.insurance.description'),
      stats: t('seax.solutions.leadGeneration.useCases.insurance.stats')
    },
    {
      title: t('seax.solutions.leadGeneration.useCases.eventRegistration.title'),
      description: t('seax.solutions.leadGeneration.useCases.eventRegistration.description'),
      stats: t('seax.solutions.leadGeneration.useCases.eventRegistration.stats')
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet 
        title={t('seax.solutions.leadGeneration.seo.title')}
        description={t('seax.solutions.leadGeneration.seo.description')}
        favicon="/seasalt-ai-favicon.ico"
      />
      
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {t('seax.solutions.leadGeneration.hero.title')}
            <span className="text-blue-600 block">{t('seax.solutions.leadGeneration.hero.titleHighlight')}</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t('seax.solutions.leadGeneration.hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={getLocalizedPath('/signup')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <span>{t('seax.solutions.leadGeneration.hero.cta.primary')}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <Link
              to={getLocalizedPath('/demo')}
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              {t('seax.solutions.leadGeneration.hero.cta.secondary')}
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('seax.solutions.leadGeneration.features.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('seax.solutions.leadGeneration.features.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <IconComponent className="w-6 h-6 text-blue-600" />
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
              {t('seax.solutions.leadGeneration.useCases.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('seax.solutions.leadGeneration.useCases.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <div className="bg-blue-50 rounded-lg p-3">
                  <div className="text-sm font-medium text-blue-800">{useCase.stats}</div>
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
              {t('seax.solutions.leadGeneration.stats.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('seax.solutions.leadGeneration.stats.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">{t('seax.solutions.leadGeneration.stats.qualifiedLeads.value')}</div>
                <div className="text-gray-600">{t('seax.solutions.leadGeneration.stats.qualifiedLeads.label')}</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">{t('seax.solutions.leadGeneration.stats.responseRate.value')}</div>
                <div className="text-gray-600">{t('seax.solutions.leadGeneration.stats.responseRate.label')}</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">{t('seax.solutions.leadGeneration.stats.timeSavings.value')}</div>
                <div className="text-gray-600">{t('seax.solutions.leadGeneration.stats.timeSavings.label')}</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">{t('seax.solutions.leadGeneration.stats.roiIncrease.value')}</div>
                <div className="text-gray-600">{t('seax.solutions.leadGeneration.stats.roiIncrease.label')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t('seax.solutions.leadGeneration.cta.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {t('seax.solutions.leadGeneration.cta.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={getLocalizedPath('/signup')}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center space-x-2"
            >
              <span>{t('seax.solutions.leadGeneration.cta.primary')}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to={getLocalizedPath('/demo')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              {t('seax.solutions.leadGeneration.cta.secondary')}
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default LeadGeneration;
