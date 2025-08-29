import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHelmet from '../../../components/SEOHelmet';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, CheckCircle, Home, Phone, Calendar, Users, Clock, MessageSquare } from 'lucide-react';

const RealEstate = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const getLocalizedPath = (path: string) => `/${currentLanguage}/seax${path}`;

  const challenges = [
    {
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      title: t('seax.industries.realEstate.challenges.items.0.title'),
      description: t('seax.industries.realEstate.challenges.items.0.description')
    },
    {
      icon: <Calendar className="w-6 h-6 text-blue-600" />,
      title: t('seax.industries.realEstate.challenges.items.1.title'),
      description: t('seax.industries.realEstate.challenges.items.1.description')
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: t('seax.industries.realEstate.challenges.items.2.title'),
      description: t('seax.industries.realEstate.challenges.items.2.description')
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: t('seax.industries.realEstate.challenges.items.3.title'),
      description: t('seax.industries.realEstate.challenges.items.3.description')
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-blue-600" />,
      title: t('seax.industries.realEstate.challenges.items.4.title'),
      description: t('seax.industries.realEstate.challenges.items.4.description')
    },
    {
      icon: <Home className="w-6 h-6 text-blue-600" />,
      title: t('seax.industries.realEstate.challenges.items.5.title'),
      description: t('seax.industries.realEstate.challenges.items.5.description')
    }
  ];

  const useCases = [
    {
      title: t('seax.industries.realEstate.useCases.items.0.title'),
      description: t('seax.industries.realEstate.useCases.items.0.description'),
      benefits: [
        t('seax.industries.realEstate.useCases.items.0.benefits.0'),
        t('seax.industries.realEstate.useCases.items.0.benefits.1'),
        t('seax.industries.realEstate.useCases.items.0.benefits.2')
      ]
    },
    {
      title: t('seax.industries.realEstate.useCases.items.1.title'),
      description: t('seax.industries.realEstate.useCases.items.1.description'),
      benefits: [
        t('seax.industries.realEstate.useCases.items.1.benefits.0'),
        t('seax.industries.realEstate.useCases.items.1.benefits.1'),
        t('seax.industries.realEstate.useCases.items.1.benefits.2')
      ]
    },
    {
      title: t('seax.industries.realEstate.useCases.items.2.title'),
      description: t('seax.industries.realEstate.useCases.items.2.description'),
      benefits: [
        t('seax.industries.realEstate.useCases.items.2.benefits.0'),
        t('seax.industries.realEstate.useCases.items.2.benefits.1'),
        t('seax.industries.realEstate.useCases.items.2.benefits.2')
      ]
    },
    {
      title: t('seax.industries.realEstate.useCases.items.3.title'),
      description: t('seax.industries.realEstate.useCases.items.3.description'),
      benefits: [
        t('seax.industries.realEstate.useCases.items.3.benefits.0'),
        t('seax.industries.realEstate.useCases.items.3.benefits.1'),
        t('seax.industries.realEstate.useCases.items.3.benefits.2')
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet 
        title={t('seax.industries.realEstate.seo.title')}
        description={t('seax.industries.realEstate.seo.description')}
        favicon="/seasalt-ai-favicon.ico"
      />
      
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {t('seax.industries.realEstate.hero.title.main')}
            <span className="text-blue-600 block">{t('seax.industries.realEstate.hero.title.highlight')}</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t('seax.industries.realEstate.hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://seax.seasalt.ai/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <span>{t('seax.industries.realEstate.hero.cta.primary')}</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <Link
              to={getLocalizedPath('/features')}
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              {t('seax.industries.realEstate.hero.cta.secondary')}
            </Link>
          </div>
        </div>
      </div>

      {/* Industry Challenges */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('seax.industries.realEstate.challenges.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('seax.industries.realEstate.challenges.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 mb-4">
                  {challenge.icon}
                  <h3 className="text-lg font-semibold text-gray-900">{challenge.title}</h3>
                </div>
                <p className="text-gray-600">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('seax.industries.realEstate.useCases.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('seax.industries.realEstate.useCases.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{useCase.title}</h3>
                <p className="text-gray-600 mb-6">
                  {useCase.description}
                </p>
                <div className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industry Stats */}
      <div className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              {t('seax.industries.realEstate.stats.title')}
            </h2>
            <p className="text-xl text-blue-100">
              {t('seax.industries.realEstate.stats.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">{t('seax.industries.realEstate.stats.items.0.value')}</div>
              <div className="text-blue-100">{t('seax.industries.realEstate.stats.items.0.label')}</div>
              <div className="text-sm text-blue-200 mt-2">{t('seax.industries.realEstate.stats.items.0.description')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">{t('seax.industries.realEstate.stats.items.1.value')}</div>
              <div className="text-blue-100">{t('seax.industries.realEstate.stats.items.1.label')}</div>
              <div className="text-sm text-blue-200 mt-2">{t('seax.industries.realEstate.stats.items.1.description')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">{t('seax.industries.realEstate.stats.items.2.value')}</div>
              <div className="text-blue-100">{t('seax.industries.realEstate.stats.items.2.label')}</div>
              <div className="text-sm text-blue-200 mt-2">{t('seax.industries.realEstate.stats.items.2.description')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t('seax.industries.realEstate.cta.title')}
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            {t('seax.industries.realEstate.cta.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://seax.seasalt.ai/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
            >
              <span>{t('seax.industries.realEstate.cta.primary')}</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <Link
              to={getLocalizedPath('/pricing')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              {t('seax.industries.realEstate.cta.secondary')}
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default RealEstate;
