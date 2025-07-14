import { Phone, Globe, Mic } from 'lucide-react';
import ChannelPageTemplate from '../../components/ChannelPageTemplate';
import { seaxChannelFeatures } from '../../data/seaxFeatures';

const Voice = () => {
  const voiceData = seaxChannelFeatures.voice;
  
  const heroContent = (
    <div className="bg-white rounded-2xl shadow-2xl p-8">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold text-gray-900">Voice Campaign</div>
          <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            Powered by Twilio
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-4xl font-bold text-blue-600 mb-2">
            47,293
          </div>
          <div className="text-sm text-gray-600">Calls completed today</div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-green-600 mb-1">92%</div>
            <div className="text-sm text-gray-600">Connection Rate</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-purple-600 mb-1">100+</div>
            <div className="text-sm text-gray-600">Countries</div>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="text-sm font-medium text-gray-700">Active Calls</div>
          <div className="space-y-2">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="flex-1 text-sm">
                <div className="font-medium">US: +1 (555) 123-4567</div>
                <div className="text-gray-500">Appointment reminder • 00:45</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <div className="flex-1 text-sm">
                <div className="font-medium">UK: +44 20 7123 4567</div>
                <div className="text-gray-500">Survey call • 01:23</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const stats = [
    {
      value: '100+',
      label: 'Countries',
      icon: <Globe className="w-8 h-8 text-blue-600" />
    },
    {
      value: '92%',
      label: 'Connection Rate',
      icon: <Phone className="w-8 h-8 text-green-600" />
    },
    {
      value: '50+',
      label: 'Languages',
      icon: <Mic className="w-8 h-8 text-purple-600" />
    }
  ];

  const testimonial = {
    quote: "SeaX's voice platform helped us conduct 250K appointment reminders across 15 countries. The AI voices are incredibly natural and Twilio's infrastructure is rock-solid.",
    author: "Dr. Amanda Rodriguez",
    company: "Global Health Network",
    results: "250K calls, 87% pickup rate, 40% reduction in no-shows"
  };

  return (
    <ChannelPageTemplate
      title="Voice Calls at Scale"
      subtitle="Powered by Twilio"
      description="High-volume automated and AI-powered phone calls available in 100+ countries. From appointment reminders to surveys, reach anyone, anywhere."
      seoTitle="Voice Calls at Scale - 100+ Countries | SeaX powered by Twilio"
      seoDescription="Scale your voice outreach with SeaX. AI-powered calls, 100+ countries, multiple languages. Perfect for reminders, surveys, and customer engagement."
      heroContent={heroContent}
      features={voiceData.features}
      useCases={voiceData.useCases}
      pricing={voiceData.pricing}
      stats={stats}
      testimonial={testimonial}
    >
      {/* Global Coverage Section */}
      <div className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Global Voice Coverage
            </h2>
            <p className="text-lg text-gray-600">
              Reach customers worldwide with local phone numbers and carrier-grade quality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {voiceData.globalReach.regions.map((region, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {region.split(' (')[0]}
                </h3>
                <p className="text-gray-600">
                  {region.includes('(') ? region.split('(')[1].replace(')', '') : 'Full regional coverage'}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Powered by Twilio Infrastructure
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {voiceData.globalReach.features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-green-100 p-3 rounded-lg w-fit mx-auto mb-3">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-800">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ChannelPageTemplate>
  );
};

export default Voice;
