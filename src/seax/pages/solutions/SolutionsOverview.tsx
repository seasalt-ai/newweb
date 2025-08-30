import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHelmet from '../../../components/SEOHelmet';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { MEETING_URL, getMeetingUrl } from '../../../constants/urls';

const SolutionsOverview = () => {
  const { i18n, t } = useTranslation();

  const features = [
    { key: 'feature1', titleKey: 'seax.solutionsOverview.features.feature1.title', descriptionKey: 'seax.solutionsOverview.features.feature1.description' },
    { key: 'feature2', titleKey: 'seax.solutionsOverview.features.feature2.title', descriptionKey: 'seax.solutionsOverview.features.feature2.description' },
    { key: 'feature3', titleKey: 'seax.solutionsOverview.features.feature3.title', descriptionKey: 'seax.solutionsOverview.features.feature3.description' },
    { key: 'feature4', titleKey: 'seax.solutionsOverview.features.feature4.title', descriptionKey: 'seax.solutionsOverview.features.feature4.description' },
    { key: 'feature5', titleKey: 'seax.solutionsOverview.features.feature5.title', descriptionKey: 'seax.solutionsOverview.features.feature5.description' },
    { key: 'feature6', titleKey: 'seax.solutionsOverview.features.feature6.title', descriptionKey: 'seax.solutionsOverview.features.feature6.description' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet 
        title={t('seax.solutionsOverview.seo.title')}
        description={t('seax.solutionsOverview.seo.description')}
        favicon="/seasalt-ai-favicon.ico"
      />
      
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {t('seax.solutionsOverview.hero.title')}
            <span className="text-blue-600 block">{t('seax.solutionsOverview.hero.titleHighlight')}</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t('seax.solutionsOverview.hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={getMeetingUrl(i18n.language)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <span>{t('seax.solutionsOverview.hero.getStarted')}</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('seax.solutionsOverview.features.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('seax.solutionsOverview.features.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={feature.key} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h3 className="text-lg font-semibold text-gray-900">{t(feature.titleKey)}</h3>
                </div>
                <p className="text-gray-600">
                  {t(feature.descriptionKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('seax.solutionsOverview.stats.title')}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <div className="text-4xl font-bold text-blue-600 mb-2">300%</div>
                <div className="text-gray-600">{t('seax.solutionsOverview.stats.improvement')}</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <div className="text-4xl font-bold text-green-600 mb-2">85%</div>
                <div className="text-gray-600">{t('seax.solutionsOverview.stats.successRate')}</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <div className="text-4xl font-bold text-purple-600 mb-2">50%</div>
                <div className="text-gray-600">{t('seax.solutionsOverview.stats.timeSavings')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t('seax.solutionsOverview.cta.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {t('seax.solutionsOverview.cta.subtitle')}
          </p>
          
          <a
            href={getMeetingUrl(i18n.language)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center space-x-2"
          >
            <span>{t('seax.solutionsOverview.cta.getStarted')}</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SolutionsOverview;
