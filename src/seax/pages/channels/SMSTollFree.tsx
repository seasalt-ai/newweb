import { Phone, Shield, TrendingUp } from 'lucide-react';
import ChannelPageTemplate from '../../components/ChannelPageTemplate';
import { seaxChannelFeatures } from '../../data/seaxFeatures';

const SMSTollFree = () => {
  const tollFreeData = seaxChannelFeatures.sms.types.tollFree;
  
  const heroContent = (
    <div className="bg-white rounded-2xl shadow-2xl p-8">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold text-gray-900">Toll-Free SMS</div>
          <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
            Premium
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-4xl font-bold text-blue-600 mb-2">
            1-800-SEAX-SMS
          </div>
          <div className="text-sm text-gray-600">Your dedicated toll-free number</div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-green-600 mb-1">94.7%</div>
            <div className="text-sm text-gray-600">Delivery Rate</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-purple-600 mb-1">2.3x</div>
            <div className="text-sm text-gray-600">Higher Trust</div>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="text-sm font-medium text-gray-700">Recent Messages</div>
          <div className="space-y-2">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1 text-sm">
                <div className="font-medium">Customer Support</div>
                <div className="text-gray-500">Two-way conversation • Active</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1 text-sm">
                <div className="font-medium">Survey Response</div>
                <div className="text-gray-500">Completed • 3 min ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const stats = [
    {
      value: '94%',
      label: 'Delivery Rate',
      icon: <Phone className="w-8 h-8 text-blue-600" />
    },
    {
      value: '2.3x',
      label: 'Higher Trust',
      icon: <Shield className="w-8 h-8 text-green-600" />
    },
    {
      value: '78%',
      label: 'Response Rate',
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />
    }
  ];

  const testimonial = {
    quote: "Our toll-free SMS campaigns have 2x higher engagement than standard numbers. Customers trust the 800 number and respond more frequently.",
    author: "Michael Chen",
    company: "TechSupport Pro",
    results: "2x engagement rate, 78% customer satisfaction"
  };

  return (
    <ChannelPageTemplate
      title="SMS Toll-Free Numbers"
      subtitle="Premium Business Messaging"
      description="Build trust and increase engagement with toll-free SMS numbers. No carrier fees for recipients, faster deployment, and higher response rates."
      seoTitle="SMS Toll-Free Numbers - Premium Business Messaging | SeaX"
      seoDescription="Boost SMS engagement with toll-free numbers. Higher trust, better response rates, and no carrier fees for recipients. Perfect for customer support."
      heroContent={heroContent}
      features={tollFreeData.features}
      useCases={tollFreeData.useCases}
      pricing={tollFreeData.pricing}
      stats={stats}
      testimonial={testimonial}
    >
      {/* Trust & Engagement Section */}
      <div className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Customers Trust Toll-Free Numbers
            </h2>
            <p className="text-lg text-gray-600">
              Toll-free numbers signal professionalism and build instant trust
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-green-100 p-3 rounded-lg w-fit mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Professional Image
              </h3>
              <p className="text-gray-600">
                Toll-free numbers convey established business credibility and professionalism to recipients.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No Carrier Fees
              </h3>
              <p className="text-gray-600">
                Recipients never pay to receive messages, removing barriers to engagement and responses.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-purple-100 p-3 rounded-lg w-fit mb-4">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Higher Response Rates
              </h3>
              <p className="text-gray-600">
                Studies show toll-free numbers achieve 2-3x higher response rates than standard numbers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ChannelPageTemplate>
  );
};

export default SMSTollFree;
