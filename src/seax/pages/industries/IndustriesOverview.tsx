import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHelmet from '../../../components/SEOHelmet';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, CheckCircle, Building2 } from 'lucide-react';

const IndustriesOverview = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const getLocalizedPath = (path: string) => `/${currentLanguage}/seax${path}`;

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet 
        title={t('seax.industryOverview.seo.title')}
        description={t('seax.industryOverview.seo.description')}
        favicon="/seasalt-ai-favicon.ico"
      />
      
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {t('seax.industryOverview.hero.title.prefix')}
            <span className="text-blue-600 block">{t('seax.industryOverview.hero.title.industries')}</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t('seax.industryOverview.hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://seax.seasalt.ai/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <span>{t('seax.industryOverview.hero.cta.primary')}</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <Link
              to={getLocalizedPath('/features')}
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              {t('seax.industryOverview.hero.cta.secondary')}
            </Link>
          </div>
        </div>
      </div>

      {/* Industry Challenges */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('seax.industryOverview.challenges.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('seax.industryOverview.challenges.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              t('seax.industryOverview.challenges.challenge1'), 
              t('seax.industryOverview.challenges.challenge2'), 
              t('seax.industryOverview.challenges.challenge3'), 
              t('seax.industryOverview.challenges.challenge4'), 
              t('seax.industryOverview.challenges.challenge5'), 
              t('seax.industryOverview.challenges.challenge6')
            ].map((challenge, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Building2 className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">{challenge}</h3>
                </div>
                <p className="text-gray-600">
                  {t('seax.industryOverview.challenges.description', { challenge })}
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
              {t('seax.industryOverview.useCases.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('seax.industryOverview.useCases.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              t('seax.industryOverview.useCases.useCase1'), 
              t('seax.industryOverview.useCases.useCase2'), 
              t('seax.industryOverview.useCases.useCase3'), 
              t('seax.industryOverview.useCases.useCase4')
            ].map((useCase, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{useCase}</h3>
                <p className="text-gray-600 mb-6">
                  {t('seax.industryOverview.useCases.description', { useCase })}
                </p>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-700">{t('seax.industryOverview.useCases.badge')}</span>
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
              {t('seax.industryOverview.stats.title')}
            </h2>
            <p className="text-xl text-blue-100">
              {t('seax.industryOverview.stats.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">{t('seax.industryOverview.stats.roi.value')}</div>
              <div className="text-blue-100">{t('seax.industryOverview.stats.roi.label')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">{t('seax.industryOverview.stats.satisfaction.value')}</div>
              <div className="text-blue-100">{t('seax.industryOverview.stats.satisfaction.label')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">{t('seax.industryOverview.stats.time.value')}</div>
              <div className="text-blue-100">{t('seax.industryOverview.stats.time.label')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t('seax.industryOverview.cta.title')}
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            {t('seax.industryOverview.cta.subtitle')}
          </p>
          
          <a
            href="https://seax.seasalt.ai/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
          >
            <span>{t('seax.industryOverview.cta.button')}</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default IndustriesOverview;
