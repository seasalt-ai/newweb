import React from 'react';
import { Phone, Bot, Users, BarChart3, Globe, Shield, ArrowLeft } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const PhoneCalls = () => {
  const features = [
    {
      icon: <Phone className="h-8 w-8" />,
      title: 'Human Agent Dialpad',
      description: 'Full-featured cloud dialpad for making and receiving calls with contact management'
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: 'AI Voice Bot Integration',
      description: 'Automated call handling with natural handoff to human agents when needed'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Multi-Agent Support',
      description: 'Round robin system distributes calls across available agents automatically'
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Call Analytics',
      description: 'Comprehensive reporting on call performance, outcomes, and agent productivity'
    }
  ];

  const benefits = [
    'Gold Partner Status with direct Twilio Flex access',
    'Enterprise-Grade Reliability on proven infrastructure',
    'Global Reach - make calls in 200+ countries',
    'Quick Deployment - agents on calls in under 10 days'
  ];

  const useCases = [
    {
      title: 'Sales Teams',
      description: 'Outbound prospecting with auto dialer efficiency'
    },
    {
      title: 'Customer Support',
      description: 'Inbound call handling with AI screening'
    },
    {
      title: 'Appointment Setting',
      description: 'Automated calling with human confirmation'
    },
    {
      title: 'Follow-up Campaigns',
      description: 'Mass calling with personalized agent conversations'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <a href="/channels-overview" className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 mb-8">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back to Channels
                </a>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Professional Phone System That{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                    Scales with Your Business
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Empower your agents with a cloud-based dialpad for inbound and outbound calls, 
                  powered by our Twilio Gold Partnership and AI voice automation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://seax.seasalt.ai/signup"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                  >
                    Start Making Calls Today
                  </a>
                  <a
                    href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                  >
                    See Demo
                  </a>
                </div>
              </div>
              
              <div className="mt-12 lg:mt-0">
                <div className="relative">
                  <div className="bg-white rounded-2xl shadow-2xl p-6">
                    <div className="flex items-center mb-4">
                      <Phone className="h-8 w-8 text-blue-600 mr-3" />
                      <h3 className="text-lg font-semibold">Agent Dialpad</h3>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {[1,2,3,4,5,6,7,8,9,'*',0,'#'].map((num, index) => (
                        <button key={index} className="bg-gray-100 hover:bg-gray-200 p-3 rounded-lg text-center font-semibold">
                          {num}
                        </button>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <button className="w-full bg-green-600 text-white py-2 rounded-lg">Call</button>
                      <button className="w-full bg-red-600 text-white py-2 rounded-lg">End Call</button>
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
                Key Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything your team needs for professional phone communication
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="text-blue-600 mb-4">
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

        {/* Twilio Partnership */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Twilio Partnership Benefits
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built on the world's most trusted communications platform
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <Shield className="h-12 w-12 text-blue-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Gold Partner Status</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <Globe className="h-12 w-12 text-green-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Capabilities</h3>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800">200+ Countries</h4>
                    <p className="text-green-700 text-sm">Make and receive calls worldwide</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800">99.95% Uptime</h4>
                    <p className="text-blue-700 text-sm">Enterprise-grade reliability</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800">10-Day Setup</h4>
                    <p className="text-purple-700 text-sm">Quick deployment for your team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Use Cases
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how different teams use our phone system to drive results
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Upgrade Your Phone System?
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              Get your team on calls in under 10 days with enterprise-grade reliability 
              and AI-powered automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://seax.seasalt.ai/signup"
                className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                Start Setup
              </a>
              <a
                href="#contact"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PhoneCalls;