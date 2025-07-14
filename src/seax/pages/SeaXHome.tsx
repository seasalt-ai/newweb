import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Hero from '../components/Hero';
import StatsCounter from '../components/StatsCounter';
import SEOHelmet from '../../components/SEOHelmet';

const SeaXHome = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  // Generate canonical URL for SEO
  const canonicalUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/${currentLanguage}/seax` 
    : `/${currentLanguage}/seax`;
  
  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet 
        title="SeaX - Reach Millions Instantly | Mass SMS, WhatsApp & Voice Communication"
        description="The ultimate platform for sending millions of SMS, WhatsApp messages, and automated phone calls. Fill your pipeline, drive revenue, and scale your business with powerful outreach."
        favicon="/seasalt-ai-favicon.ico"
        canonicalUrl={canonicalUrl}
      />
      
      <Header />
      <Hero />
      <StatsCounter />
      
      {/* Placeholder for additional sections */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            More sections coming soon...
          </h2>
          <p className="text-lg text-gray-600">
            We're building out the complete SeaX experience with features, solutions, and industry-specific content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SeaXHome;
