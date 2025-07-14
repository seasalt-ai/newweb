import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHelmet from '../../../components/SEOHelmet';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Users, MessageSquare, Heart, BarChart3, Target, Zap } from 'lucide-react';

const CustomerEngagement = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const getLocalizedPath = (path: string) => `/${currentLanguage}/seax${path}`;

  const features = [
    {
      icon: Users,
      title: 'Advanced Customer Profiling',
      description: 'Create enriched customer profiles for more personalized engagement.'
    },
    {
      icon: MessageSquare,
      title: 'Multichannel Messaging',
      description: 'Engage customers across SMS, WhatsApp, and in-app messaging.'
    },
    {
      icon: Heart,
      title: 'Sentiment Analysis',
      description: 'Understand customer sentiments and adjust communications accordingly.'
    },
    {
      icon: BarChart3,
      title: 'Behavioral Analytics',
      description: 'Track and analyze customer behavior to improve engagement strategies.'
    },
    {
      icon: Target,
      title: 'Direct Marketing Tools',
      description: 'Run targeted campaigns with precision, based on customer data.'
    },
    {
      icon: Zap,
      title: 'Real-time Interaction',
      description: 'Engage customers when it matters most, with real-time triggers and communication.'
    }
  ];

  const useCases = [
    {
      title: 'E-commerce Engagement',
      description: 'Increase repeat business and customer retention through personalized promotions.',
      stats: '20% increase in repeat purchases'
    },
    {
      title: 'Financial Services Alerts',
      description: 'Keep clients informed on account activities with automated alerts and updates.',
      stats: '80% engagement rate on alerts'
    },
    {
      title: 'Travel and Hospitality',
      description: 'Enhance guest experience with pre-arrival updates and personalized itineraries.',
      stats: '50% reduction in customer inquiries'
    },
    {
      title: 'Retail Loyalty Programs',
      description: 'Boost loyalty with personalized rewards and offers based on purchase history.',
      stats: '25% increase in loyalty program members'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet 
        title="Customer Engagement - SeaX Communication Platform"
        description="Build stronger customer relationships with personalized multi-channel engagement across SMS, WhatsApp, and voice calls."
        favicon="/seasalt-ai-favicon.ico"
      />
      
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Customer Engagement
            <span className="text-blue-600 block">That Builds Loyalty</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Build stronger customer relationships with personalized multi-channel engagement across SMS, WhatsApp, and voice calls. Turn every interaction into an opportunity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Engage Customers</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <Link
              to={getLocalizedPath('/demo')}
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Engagement Features
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to build meaningful customer relationships
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Engagement Use Cases
            </h2>
            <p className="text-lg text-gray-600">
              Real-world customer engagement strategies across industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <div className="bg-blue-50 rounded-lg p-3">
                  <div className="text-sm font-medium text-blue-800">{useCase.stats}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Engagement Results
            </h2>
            <p className="text-lg text-gray-600">
              See the impact of enhanced customer engagement
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
                <div className="text-gray-600">Higher Engagement</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
                <div className="text-gray-600">Customer Satisfaction</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">60%</div>
                <div className="text-gray-600">Repeat Purchase Rate</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">3x</div>
                <div className="text-gray-600">Customer Lifetime Value</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build Stronger Customer Relationships?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of businesses using SeaX to engage customers and build lasting loyalty
          </p>
          
          <a
            href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center space-x-2"
          >
            <span>Get Started Today</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CustomerEngagement;
