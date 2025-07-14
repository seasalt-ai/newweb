import Header from '../../components/Header';
import SEOHelmet from '../../../components/SEOHelmet';

const SMSShortCode = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet 
        title="SeaX SMSShortCode - Powerful SMS Outreach"
        description="SeaX SMSShortCode page showcases high-volume SMS capabilities."
        favicon="/seasalt-ai-favicon.ico"
      />
      
      <Header />
      
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            SMSShortCode
          </h1>
          <div className="bg-yellow-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-yellow-900 mb-4">
              Coming Soon
            </h2>
            <p className="text-yellow-700">
              We're building out the complete SMSShortCode experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SMSShortCode;
