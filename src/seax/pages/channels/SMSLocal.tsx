import { MessageSquare, Users, CheckCircle2 } from 'lucide-react';
import ChannelPageTemplate from '../../components/ChannelPageTemplate';
import { seaxChannelFeatures } from '../../data/seaxFeatures';

const SMSLocal = () => {
  const localData = seaxChannelFeatures.sms.types.local;
  
  const heroContent = (
    <div className="bg-white rounded-2xl shadow-2xl p-8">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold text-gray-900">10DLC A2P Campaign</div>
          <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
            Active
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-blue-600 mb-1">247,382</div>
            <div className="text-sm text-gray-600">Messages Sent</div>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-green-600 mb-1">89.2%</div>
            <div className="text-sm text-gray-600">Delivery Rate</div>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="text-sm font-medium text-gray-700">Recent Activity</div>
          <div className="space-y-2">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1 text-sm">
                <div className="font-medium">Marketing Campaign</div>
                <div className="text-gray-500">+1 (555) 123-4567 • 2 min ago</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1 text-sm">
                <div className="font-medium">Appointment Reminder</div>
                <div className="text-gray-500">+1 (555) 987-6543 • 5 min ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const stats = [
    {
      value: '98%',
      label: 'Delivery Rate',
      icon: <MessageSquare className="w-8 h-8 text-blue-600" />
    },
    {
      value: '85%',
      label: 'Open Rate',
      icon: <Users className="w-8 h-8 text-green-600" />
    },
    {
      value: '24/7',
      label: 'Support',
      icon: <CheckCircle2 className="w-8 h-8 text-purple-600" />
    }
  ];

  const testimonial = {
    quote: "SeaX's 10DLC A2P solution helped us reach 500K customers with our flash sale campaign. The delivery rates were incredible and setup was seamless.",
    author: "Sarah Johnson",
    company: "RetailMax",
    results: "500K messages delivered, 23% conversion rate"
  };

  return (
    <ChannelPageTemplate
      title="SMS Local Numbers (10DLC A2P)"
      subtitle="Application-to-Person Messaging"
      description="Send high-volume business messages using local 10-digit phone numbers with carrier-grade delivery and compliance."
      seoTitle="SMS Local 10DLC A2P - High-Volume Business Messaging | SeaX"
      seoDescription="Scale your SMS marketing with 10DLC A2P messaging. Local phone numbers, carrier-grade delivery, and full compliance for high-volume campaigns."
      heroContent={heroContent}
      features={localData.features}
      useCases={localData.useCases}
      pricing={localData.pricing}
      stats={stats}
      testimonial={testimonial}
    >
      {/* Compliance Section */}
      <div className="py-20 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              10DLC A2P Compliance Made Easy
            </h2>
            <p className="text-lg text-gray-600">
              We handle all the compliance requirements so you can focus on your campaigns
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                <CheckCircle2 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Brand Registration
              </h3>
              <p className="text-gray-600">
                We handle your brand registration with carriers, ensuring your business is verified and trusted.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-green-100 p-3 rounded-lg w-fit mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Campaign Approval
              </h3>
              <p className="text-gray-600">
                Pre-approved campaign types ensure maximum deliverability and compliance with carrier requirements.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-purple-100 p-3 rounded-lg w-fit mb-4">
                <CheckCircle2 className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Ongoing Monitoring
              </h3>
              <p className="text-gray-600">
                Continuous compliance monitoring and reporting to maintain optimal delivery rates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ChannelPageTemplate>
  );
};

export default SMSLocal;
