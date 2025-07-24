import { useEffect } from 'react';
import { MessageSquare, Globe, Shield, BarChart3, Clock, Users, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const SMS = () => {
  const { i18n } = useTranslation();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const features = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Global Reach',
      description: 'SMS delivery to 200+ countries with local number support and carrier optimization'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Compliance Tools',
      description: 'TCPA and GDPR compliance features with automatic opt-out management'
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Delivery Analytics',
      description: 'Real-time delivery tracking, response rates, and campaign performance metrics'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Smart Scheduling',
      description: 'Timezone-aware sending with optimal timing based on recipient behavior'
    }
  ];

  const useCases = [
    {
      title: 'Marketing Campaigns',
      description: 'Promotional messages with high open rates',
      stats: '98% open rate'
    },
    {
      title: 'Appointment Reminders',
      description: 'Reduce no-shows with automated reminders',
      stats: '25% fewer no-shows'
    },
    {
      title: 'Order Updates',
      description: 'Keep customers informed about their orders',
      stats: '90% satisfaction'
    },
    {
      title: 'Customer Support',
      description: 'Two-way conversations for quick support',
      stats: '5x faster resolution'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 via-white to-purple-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <Link to={`/${i18n.language}/channels-overview`} className="inline-flex items-center text-gray-600 hover:text-purple-600 transition-colors duration-200 mb-8">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back to Channels
                </Link>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                  SMS Marketing That{' '}
                  <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
                    Actually Converts
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Reach customers instantly with personalized SMS campaigns and automated responses. 
                  98% open rates and global delivery to 200+ countries.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://seax.seasalt.ai/signup"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                  >
                    Start SMS Campaigns
                  </a>
                  <a
                    href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
                    className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                  >
                    See Demo
                  </a>
                </div>
              </div>
              
              <div className="mt-12 lg:mt-0">
                <div className="relative">
                  <div className="bg-white rounded-2xl shadow-2xl p-6">
                    <div className="flex items-center mb-4">
                      <MessageSquare className="h-8 w-8 text-purple-600 mr-3" />
                      <h3 className="text-lg font-semibold">SMS Campaign</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <p className="text-sm font-medium text-purple-800">📱 Campaign: Flash Sale</p>
                        <p className="text-xs text-purple-600">2,847 messages sent</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-sm font-medium text-green-800">✅ Delivered: 2,834</p>
                        <p className="text-xs text-green-600">99.5% delivery rate</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm font-medium text-blue-800">💬 Replies: 312</p>
                        <p className="text-xs text-blue-600">11% response rate</p>
                      </div>
                      <div className="bg-orange-50 p-3 rounded-lg">
                        <p className="text-sm font-medium text-orange-800">🛒 Conversions: 47</p>
                        <p className="text-xs text-orange-600">$12,400 revenue</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Compliance & Delivery
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Enterprise-grade SMS platform with global reach and automatic compliance management
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="text-purple-600 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Proven Use Cases
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how businesses use SMS to drive engagement and revenue
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {useCase.description}
                  </p>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="text-purple-800 font-semibold text-sm">{useCase.stats}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Campaign Builder */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-12 text-white">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Advanced Campaign Builder
                </h2>
                <p className="text-xl opacity-90 max-w-2xl mx-auto">
                  Create sophisticated SMS campaigns with drag-and-drop automation and smart targeting
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white bg-opacity-20 p-6 rounded-xl">
                  <Users className="h-8 w-8 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Smart Segmentation</h3>
                  <p className="text-sm opacity-90">Target customers based on behavior, location, and preferences</p>
                </div>
                <div className="bg-white bg-opacity-20 p-6 rounded-xl">
                  <Clock className="h-8 w-8 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Perfect Timing</h3>
                  <p className="text-sm opacity-90">AI-powered send time optimization for maximum engagement</p>
                </div>
                <div className="bg-white bg-opacity-20 p-6 rounded-xl">
                  <BarChart3 className="h-8 w-8 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Real-time Analytics</h3>
                  <p className="text-sm opacity-90">Track delivery, opens, clicks, and conversions in real-time</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Launch Your SMS Campaigns?
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses using SMS to drive higher engagement and revenue. 
              Start with our free trial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                 href="https://seax.seasalt.ai/signup"
                 className="bg-white text-purple-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
               >
                 Sign Up
              </a>
              <a
                href="#pricing"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                View Pricing
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SMS;