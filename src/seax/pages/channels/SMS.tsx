import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHelmet from '../../../components/SEOHelmet';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  MessageSquare, 
  CheckCircle, 
  Globe, 
  Shield, 
  Zap, 
  BarChart3, 
  Clock, 
  Users, 
  ArrowRight,
  TrendingUp,
  Target,
  AlertCircle
} from 'lucide-react';

const SMS = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const getLocalizedPath = (path: string) => `/${currentLanguage}/seax${path}`;

  const features = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Send SMS to 200+ countries with local number support and carrier optimization.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Deliver messages instantly with 99.9% uptime and sub-second delivery rates.'
    },
    {
      icon: Shield,
      title: 'Secure & Compliant',
      description: 'GDPR, TCPA, and CCPA compliant with enterprise-grade security.'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Real-time delivery reports, open rates, and conversion tracking.'
    },
    {
      icon: Users,
      title: 'Bulk Messaging',
      description: 'Send to millions of recipients simultaneously with smart rate limiting.'
    },
    {
      icon: Target,
      title: 'Smart Segmentation',
      description: 'Target specific audiences with AI-powered segmentation and personalization.'
    }
  ];

  const useCases = [
    {
      title: 'Marketing Campaigns',
      description: 'Promotional messages, flash sales, and product announcements.',
      metrics: '35% avg open rate'
    },
    {
      title: 'Customer Support',
      description: 'Order confirmations, shipping updates, and support notifications.',
      metrics: '98% delivery rate'
    },
    {
      title: 'Appointment Reminders',
      description: 'Automated reminders for appointments, meetings, and events.',
      metrics: '60% reduction in no-shows'
    },
    {
      title: 'Emergency Alerts',
      description: 'Critical notifications, security alerts, and urgent updates.',
      metrics: '< 5 second delivery'
    }
  ];

  const stats = [
    { value: '10M+', label: 'Messages sent daily' },
    { value: '200+', label: 'Countries supported' },
    { value: '99.9%', label: 'Uptime guarantee' },
    { value: '98%', label: 'Delivery rate' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet 
        title="SeaX SMS - Send Bulk Text Messages to Millions Instantly"
        description="Send SMS campaigns to millions of customers worldwide. 98% delivery rate, 200+ countries, real-time analytics. Start your SMS campaign today."
        favicon="/seasalt-ai-favicon.ico"
      />
      
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <MessageSquare className="w-8 h-8 text-green-600" />
                  </div>
                  <span className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
                    SMS Marketing
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                  Send SMS to 
                  <span className="text-green-600 block">Millions Instantly</span>
                </h1>
                <p className="text-xl text-gray-600">
                  Reach customers worldwide with high-converting SMS campaigns. 
                  98% delivery rate, 200+ countries, real-time analytics.
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
                  <span>Start SMS Campaign</span>
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
            
            {/* SMS Illustration */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8 border">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">SMS Campaign</h3>
                    <span className="text-sm text-green-600 bg-green-100 px-3 py-1 rounded-full font-medium">
                      Active
                    </span>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-700 mb-2">Message Preview:</div>
                    <div className="bg-white rounded-lg p-3 border-l-4 border-green-500">
                      <div className="text-sm text-gray-900">
                        "Hi John, 🎉 Flash Sale! 50% off all items. Use code SAVE50.
                        Shop now: link.co/shop. Reply STOP to opt out."
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-blue-600">847K</div>
                      <div className="text-sm text-gray-600">Delivered</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-green-600">98.2%</div>
                      <div className="text-sm text-gray-600">Success Rate</div>
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
              Why Choose SeaX SMS?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Powerful SMS marketing platform built for scale, compliance, and results.
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
      
      {/* Use Cases Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              SMS Use Cases
            </h2>
            <p className="text-lg text-gray-600">
              From marketing to customer service, SMS drives results across industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-green-600" />
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
            Ready to Start Your SMS Campaign?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of businesses reaching millions with SMS
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

export default SMS;
