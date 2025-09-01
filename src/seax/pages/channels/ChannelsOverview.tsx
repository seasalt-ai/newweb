import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHelmet from '../../../components/SEOHelmet';
import { useTranslation } from 'react-i18next';

const ChannelsOverview = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet 
        title={t('seax.pages.channelsOverview.seo.title')}
        description={t('seax.pages.channelsOverview.seo.description')}
        favicon="/seasalt-ai-favicon.ico"
      />
      
      <Header />
      
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            {t('seax.pages.channelsOverview.title')}
          </h1>
          <div className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              {t('seax.pages.channelsOverview.comingSoon')}
            </h2>
            <p className="text-blue-700">
              {t('seax.pages.channelsOverview.description')}
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ChannelsOverview;
