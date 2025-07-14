import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHelmet from '../../../components/SEOHelmet';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  MessageCircle, 
  CheckCircle, 
  Globe, 
  Shield, 
  Zap, 
  BarChart3, 
  Users, 
  ArrowRight,
  Image,
  Video,
  FileText,
  Star,
  TrendingUp
} from 'lucide-react';

const WhatsApp = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const getLocalizedPath = (path: string) => `/${currentLanguage}/seax${path}`;

  const features = [
    {
      icon: MessageCircle,
      title: 'Rich Media Support',
      description: 'Send images, videos, documents, and interactive buttons for engaging conversations.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Reach 2+ billion WhatsApp users worldwide with localized messaging.'
    },
    {
      icon: Shield,
      title: 'End-to-End Security',
      description: 'WhatsApp Business API with enterprise-grade encryption and compliance.'
    },
    {
      icon: Zap,
      title: 'Instant Delivery',
      description: 'Messages delivered instantly with read receipts and delivery confirmations.'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Track delivery rates, read rates, and customer engagement metrics.'
    },
    {
      icon: Users,
      title: 'Two-way Conversations',
      description: 'Enable real-time customer support and interactive messaging experiences.'
    }
  ];

  const messageTypes = [
    {
      icon: MessageCircle,
      title: 'Template Messages',
      description: 'Pre-approved messages for notifications, alerts, and marketing campaigns.',
      features: ['Order confirmations', 'Shipping updates', 'Appointment reminders', 'Marketing offers']
    },
    {
      icon: Image,
      title: 'Rich Media',
      description: 'Send images, videos, documents, and audio messages.',
      features: ['Product catalogs', 'Video tutorials', 'PDF documents', 'Voice messages']
    },
    {
      icon: Users,
      title: 'Interactive Messages',
      description: 'Buttons, lists, and quick replies for better user engagement.',
      features: ['Call-to-action buttons', 'Quick reply options', 'List messages', 'Location sharing']
    }
  ];

  const useCases = [
    {
      title: 'Customer Support',
      description: 'Provide instant support through WhatsApp with rich media and file sharing.',
      metrics: '90% customer satisfaction'
    },
    {
      title: 'Order Notifications',
      description: 'Send order confirmations, shipping updates, and delivery notifications.',
      metrics: '95% open rate'
    },
    {
      title: 'Marketing Campaigns',
      description: 'Reach customers with promotional messages, product launches, and offers.',
      metrics: '65% engagement rate'
    },
    {
      title: 'Appointment Reminders',
      description: 'Automated appointment confirmations and reminders with calendar integration.',
      metrics: '80% reduction in no-shows'
    }
  ];

  const stats = [
    { value: '2B+', label: 'Monthly active users' },
    { value: '95%', label: 'Open rate' },
    { value: '65%', label: 'Engagement rate' },
    { value: '180+', label: 'Countries supported' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet 
        title="SeaX WhatsApp Business Platform - Reach 2B+ Users Globally"
        description="Send WhatsApp messages to customers worldwide. 95% open rate, rich media support, two-way conversations. Start your WhatsApp Business campaign today."
        favicon="/seasalt-ai-favicon.ico"
      />
      
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <MessageCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <span className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
                    WhatsApp Business
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                  Reach 2+ Billion Users on 
                  <span className="text-green-600 block">WhatsApp</span>
                </h1>
                <p className="text-xl text-gray-600">
                  Connect with customers on their favorite messaging platform. 
                  Rich media, two-way conversations, and global reach.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-green-600">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://seax.seasalt.ai/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Start WhatsApp Campaign</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors text-center"
                >
                  View Pricing
                </a>
              </div>
            </div>
            
            {/* WhatsApp Illustration */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8 border">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">WhatsApp Business</h3>
                      <p className="text-sm text-gray-600">API Campaign</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">Template Message</span>
                      </div>
                      <div className="bg-white rounded-lg p-3 border-l-4 border-green-500">
                        <div className="text-sm text-gray-900">
                          🎉 Hi {'{name}'}, your order #{'{order_id}'} is ready for pickup!
                        </div>
                        <div className="mt-2 flex space-x-2">
                          <button className="bg-green-600 text-white px-3 py-1 rounded text-xs">
                            View Order
                          </button>
                          <button className="border border-green-600 text-green-600 px-3 py-1 rounded text-xs">
                            Contact Us
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-blue-600">94.8%</div>
                        <div className="text-sm text-gray-600">Open Rate</div>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-purple-600">12.3K</div>
                        <div className="text-sm text-gray-600">Delivered</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose WhatsApp Business?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The world's most popular messaging platform for business communication.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="bg-green-100 p-4 rounded-lg w-16 h-16 flex items-center justify-center mx-auto">
                  <feature.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Message Types Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Message Types
            </h2>
            <p className="text-lg text-gray-600">
              Choose the right message format for your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {messageTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="bg-green-100 p-3 rounded-lg w-fit mb-4">
                  <type.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Use Cases Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              WhatsApp Use Cases
            </h2>
            <p className="text-lg text-gray-600">
              Drive engagement and build relationships through WhatsApp.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Star className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                    <p className="text-gray-600 mb-3">{useCase.description}</p>
                    <div className="text-sm font-medium text-green-600">{useCase.metrics}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-green-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Connect with Your Customers?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of businesses using WhatsApp to engage customers
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://seax.seasalt.ai/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <a
              href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default WhatsApp;
