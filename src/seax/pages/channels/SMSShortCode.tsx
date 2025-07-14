import { Zap, Shield, TrendingUp } from 'lucide-react';
import ChannelPageTemplate from '../../components/ChannelPageTemplate';
import { seaxChannelFeatures } from '../../data/seaxFeatures';

const SMSShortCode = () => {
  const shortCodeData = seaxChannelFeatures.sms.types.shortCode;
  
  const heroContent = (
    <div className="bg-white rounded-2xl shadow-2xl p-8">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold text-gray-900">SMS Short Code</div>
          <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
            Premium
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-4xl font-bold text-blue-600 mb-2">
            12345
          </div>
          <div className="text-sm text-gray-600">Your dedicated 5-digit short code</div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-blue-600 mb-1">1000+</div>
            <div className="text-sm text-gray-600">Messages/Second</div>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-green-600 mb-1">99.9%</div>
            <div className="text-sm text-gray-600">Delivery Rate</div>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="text-sm font-medium text-gray-700">Active Campaigns</div>
          <div className="space-y-2">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1 text-sm">
                <div className="font-medium">Mass Marketing</div>
                <div className="text-gray-500">10M messages • Active</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1 text-sm">
                <div className="font-medium">Contest Campaign</div>
                <div className="text-gray-500">Completed • 5 min ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const stats = [
    {
      value: '1000+',
      label: 'Messages/Second',
      icon: <Zap className="w-8 h-8 text-blue-600" />
    },
    {
      value: '99.9%',
      label: 'Delivery Rate',
      icon: <Shield className="w-8 h-8 text-green-600" />
    },
    {
      value: '5-6',
      label: 'Digit Numbers',
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />
    }
  ];

  const testimonial = {
    quote: "SMS Short Codes gave us the throughput we needed for our Super Bowl campaign. We sent 10 million messages in under 2 hours with 99.9% delivery.",
    author: "Sarah Johnson",
    company: "Fortune 500 Retail",
    results: "10M messages in 2 hours, 99.9% delivery rate"
  };

  return (
    <ChannelPageTemplate
      title="SMS Short Code"
      subtitle="Premium High-Volume Messaging"
      description="Achieve unmatched engagement with dedicated 5-6 digit short codes. Perfect for mass marketing campaigns with 1000+ messages per second throughput."
      seoTitle="SMS Short Code - Premium High-Volume Messaging | SeaX"
      seoDescription="Send mass SMS campaigns with dedicated short codes. 1000+ messages per second, 99.9% delivery rate. Perfect for TV/radio campaigns and contests."
      heroContent={heroContent}
      features={shortCodeData.features}
      useCases={shortCodeData.useCases}
      pricing={shortCodeData.pricing}
      stats={stats}
      testimonial={testimonial}
    >
      {/* Premium Features Section */}
      <div className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose SMS Short Codes?
            </h2>
            <p className="text-lg text-gray-600">
              Premium features that deliver exceptional results for high-volume campaigns
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Ultra-High Throughput
              </h3>
              <p className="text-gray-600">
                Send 1000+ messages per second with guaranteed delivery speeds for time-sensitive campaigns.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-green-100 p-3 rounded-lg w-fit mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Premium Carrier Routes
              </h3>
              <p className="text-gray-600">
                Direct carrier relationships ensure maximum deliverability and priority message routing.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-purple-100 p-3 rounded-lg w-fit mb-4">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Brand Recognition
              </h3>
              <p className="text-gray-600">
                Memorable 5-6 digit numbers perfect for TV, radio, and print advertising campaigns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ChannelPageTemplate>
  );
};

export default SMSShortCode;
