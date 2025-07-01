import React from 'react';
import { Instagram, Camera, Users, Bot, BarChart3, Heart, ArrowLeft } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const InstagramPage = () => {
  const features = [
    {
      icon: <Camera className="h-8 w-8" />,
      title: 'Image Recognition',
      description: 'AI understanding of product images in DMs for intelligent responses and recommendations'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Story Integration',
      description: 'Automated responses to story interactions, polls, and questions from your audience'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Influencer Support',
      description: 'Tools for managing high-volume DM conversations and brand partnerships'
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: 'Smart Automation',
      description: 'AI-powered responses that maintain your brand voice and personality'
    }
  ];

  const useCases = [
    {
      title: 'E-commerce Brands',
      description: 'Product inquiries and order support',
      metric: '40% faster response'
    },
    {
      title: 'Influencers',
      description: 'Fan engagement and collaboration requests',
      metric: '10x more conversations'
    },
    {
      title: 'Local Businesses',
      description: 'Appointment booking and customer service',
      metric: '60% more bookings'
    },
    {
      title: 'Content Creators',
      description: 'Community management and feedback',
      metric: '95% satisfaction rate'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-pink-50 via-white to-purple-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <a href="/channels-overview" className="inline-flex items-center text-gray-600 hover:text-pink-600 transition-colors duration-200 mb-8">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back to Channels
                </a>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Scale Your{' '}
                  <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    Instagram Customer Service
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Handle thousands of Instagram DMs with AI automation while maintaining personal touch. 
                  Perfect for brands, influencers, and businesses building communities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#setup"
                    className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                  >
                    Automate Instagram DMs
                  </a>
                  <a
                    href="#demo"
                    className="border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                  >
                    See Demo
                  </a>
                </div>
              </div>
              
              <div className="mt-12 lg:mt-0">
                <div className="relative">
                  <div className="bg-white rounded-2xl shadow-2xl p-6">
                    <div className="flex items-center mb-4">
                      <Instagram className="h-8 w-8 text-pink-600 mr-3" />
                      <h3 className="text-lg font-semibold">Instagram DMs</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-pink-50 p-3 rounded-lg flex items-center">
                        <div className="w-8 h-8 bg-pink-200 rounded-full mr-3"></div>
                        <div>
                          <p className="text-sm font-medium text-pink-800">@sarah_style</p>
                          <p className="text-xs text-pink-600">"Love this dress! What sizes do you have?"</p>
                        </div>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm text-blue-700">AI: "Hi Sarah! 😍 That dress is available in XS-XL. Would you like me to check stock in your size?"</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg flex items-center">
                        <div className="w-8 h-8 bg-green-200 rounded-full mr-3"></div>
                        <div>
                          <p className="text-sm font-medium text-green-800">@mike_fitness</p>
                          <p className="text-xs text-green-600">"Can you help me with my order?"</p>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-700">AI: "Of course! Let me connect you with our support team..."</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visual-First Approach */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Visual-First Approach
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Instagram is all about visuals. Our AI understands images and provides contextual responses
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="text-pink-600 mb-4">
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
                Perfect for Every Instagram Business
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From small businesses to major influencers, see how Instagram automation drives results
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
                  <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-3 rounded-lg">
                    <p className="text-pink-800 font-semibold text-sm">{useCase.metric}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Instagram Business Features */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-12 text-white">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Instagram Business Integration
                </h2>
                <p className="text-xl opacity-90 max-w-2xl mx-auto">
                  Full integration with Instagram Business accounts for professional customer service
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white bg-opacity-20 p-6 rounded-xl">
                  <BarChart3 className="h-8 w-8 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Analytics Integration</h3>
                  <p className="text-sm opacity-90">Connect with Instagram Insights for complete performance tracking</p>
                </div>
                <div className="bg-white bg-opacity-20 p-6 rounded-xl">
                  <Users className="h-8 w-8 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Audience Insights</h3>
                  <p className="text-sm opacity-90">Understand your audience better with integrated demographic data</p>
                </div>
                <div className="bg-white bg-opacity-20 p-6 rounded-xl">
                  <Heart className="h-8 w-8 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Engagement Tracking</h3>
                  <p className="text-sm opacity-90">Monitor story interactions, post engagement, and DM performance</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Scale Your Instagram Presence?
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of brands and influencers using AI to provide better customer service 
              and build stronger communities on Instagram.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#signup"
                className="bg-white text-pink-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                Start Automation
              </a>
              <a
                href="#demo"
                className="border-2 border-white text-white hover:bg-white hover:text-pink-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                See Demo
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InstagramPage;