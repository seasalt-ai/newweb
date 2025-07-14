import Header from '../../components/Header';
import SEOHelmet from '../../../components/SEOHelmet';

const SMS = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet 
        title="SeaX SMS - Coming Soon"
        description="SeaX SMS page is coming soon."
        favicon="/seasalt-ai-favicon.ico"
      />
      
      <Header />
      
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            SMS
          </h1>
          <div className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              Coming Soon
            </h2>
            <p className="text-blue-700">
              We're building out the complete SMS experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SMS;
