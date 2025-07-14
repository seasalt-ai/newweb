import Header from '../components/Header';
import SEOHelmet from '../../components/SEOHelmet';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  MessageSquare, 
  Phone, 
  BarChart3, 
  Shield, 
  Users, 
  Building2, 
  ArrowRight,
  CheckCircle,
  Zap,
  Globe,
  Bot,
  Lock
} from 'lucide-react';
import { seaxCoreFeatures } from '../data/seaxFeatures';

const Features = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const getLocalizedPath = (path: string) => `/${currentLanguage}/seax${path}`;

  const featureCategories = [
    {
      title: 'Messaging Channels',
      icon: MessageSquare,
      color: 'blue',
      features: [
        {
          name: 'SMS (10DLC, Toll-Free, Short-Code)',
          description: 'All SMS types for every business need',
          link: '/channels/sms'
        },
        {
          name: 'WhatsApp Business Platform',
          description: 'Campaign mode for mass messaging',
          link: '/channels/whatsapp'
        },
        {
          name: 'Voice Calls (100+ Countries)',
          description: 'AI-powered calls via Twilio',
          link: '/channels/voice'
        }
      ]
    },
    {
      title: 'AI & Automation',
      icon: Bot,
      color: 'green',
      features: [
        {
          name: 'AI-Powered Follow-Up',
          description: 'Smart lead nurturing 24/7',
          link: '/features'
        },
        {
          name: 'Automated Responses',
          description: 'Intelligent conversation handling',
          link: '/features'
        },
        {
          name: 'Lead Scoring',
          description: 'AI-driven prospect qualification',
          link: '/features'
        }
      ]
    },
    {
      title: 'Analytics & Insights',
      icon: BarChart3,
      color: 'purple',
      features: [
        {
          name: 'Real-Time Dashboard',
          description: 'Live campaign monitoring',
          link: '/features'
        },
        {
          name: 'Conversion Tracking',
          description: 'ROI and performance metrics',
          link: '/features'
        },
        {
          name: 'Custom Reporting',
          description: 'Detailed analytics and insights',
          link: '/features'
        }
      ]
    },
    {
      title: 'Enterprise & Security',
      icon: Shield,
      color: 'red',
      features: [
        {
          name: 'GDPR Compliance',
          description: 'Full regulatory compliance',
          link: '/features'
        },
        {
          name: 'Team Collaboration',
          description: 'Multi-user access and permissions',
          link: '/features'
        },
        {
          name: 'Enterprise SLAs',
          description: 'Dedicated support and uptime',
          link: '/features'
        }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      red: 'bg-red-100 text-red-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet 
        title="SeaX Features - Powerful Tools for Mass Communication"
        description="Explore SeaX's powerful features: bulk messaging engine, AI-powered follow-up, real-time analytics, and enterprise-grade infrastructure."
        favicon="/seasalt-ai-favicon.ico"
      />
      
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="text-blue-600 block">Mass Communication</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Everything you need to reach millions of customers across SMS, WhatsApp, and voice channels. 
            Built for scale, designed for results.
          </p>
          
          <div className="flex justify-center items-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-yellow-500" />
              <span>10M+ messages daily</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5 text-blue-500" />
              <span>200+ countries</span>
            </div>
            <div className="flex items-center space-x-2">
              <Lock className="w-5 h-5 text-green-500" />
              <span>Enterprise security</span>
            </div>
          </div>
        </div>
      </div>

      {/* Core Features Grid */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Core Features
            </h2>
            <p className="text-lg text-gray-600">
              The essential tools that power your mass communication campaigns
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seaxCoreFeatures.map((feature, index) => (
              <div key={feature.id} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {feature.description}
                </p>
                
                {feature.metrics && (
                  <div className="bg-white rounded-lg p-4 mb-6">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      {feature.metrics.value}
                    </div>
                    <div className="text-sm text-gray-600">
                      {feature.metrics.label}
                    </div>
                  </div>
                )}
                
                <div className="space-y-2">
                  {feature.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature Categories */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Feature Categories
            </h2>
            <p className="text-lg text-gray-600">
              Explore our comprehensive feature set by category
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featureCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 rounded-lg ${getColorClasses(category.color)}`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-900">
                          {feature.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          {feature.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Integration & API Section */}
      <div className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Built for Integration
            </h2>
            <p className="text-xl text-blue-100">
              Connect SeaX with your existing tools and workflows
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="bg-white/20 p-3 rounded-lg w-fit mb-4">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                CRM Integration
              </h3>
              <p className="text-blue-100 mb-4">
                Connect with Salesforce, HubSpot, and other CRM systems for seamless data flow.
              </p>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Bi-directional sync</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Custom field mapping</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="bg-white/20 p-3 rounded-lg w-fit mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Analytics Tools
              </h3>
              <p className="text-blue-100 mb-4">
                Export data to Google Analytics, Mixpanel, and other analytics platforms.
              </p>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Real-time exports</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Custom dashboards</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="bg-white/20 p-3 rounded-lg w-fit mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Developer API
              </h3>
              <p className="text-blue-100 mb-4">
                Full REST API for custom integrations and automated workflows.
              </p>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>RESTful endpoints</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Webhook support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            See how SeaX can transform your communication strategy
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={getLocalizedPath('/contact-sales')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <Link
              to={getLocalizedPath('/how-it-works')}
              className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
