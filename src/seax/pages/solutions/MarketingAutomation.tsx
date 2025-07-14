import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHelmet from '../../../components/SEOHelmet';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, CheckCircle, TrendingUp, Zap, Clock, Users, BarChart3, MessageSquare, Settings } from 'lucide-react';

const MarketingAutomation = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const getLocalizedPath = (path: string) => `/${currentLanguage}/seax${path}`;

  const features = [
    {
      icon: Zap,
      title: 'Automated Workflows',
      description: 'Create complex multi-step campaigns that trigger based on customer behavior and responses.'
    },
    {
      icon: Clock,
      title: 'Smart Timing',
      description: 'Send messages at optimal times based on customer timezone and engagement patterns.'
    },
    {
      icon: Users,
      title: 'Audience Segmentation',
      description: 'Target specific customer segments with personalized messaging across all channels.'
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Track engagement rates, conversions, and ROI with detailed campaign analytics.'
    },
    {
      icon: MessageSquare,
      title: 'Multi-Channel Sequences',
      description: 'Orchestrate campaigns across SMS, WhatsApp, and voice calls for maximum reach.'
    },
    {
      icon: Settings,
      title: 'A/B Testing',
      description: 'Test different messages, timing, and channels to optimize campaign performance.'
    }
  ];

  const automationTypes = [
    {
      title: 'Welcome Series',
      description: 'Automatically onboard new customers with personalized welcome sequences.',
      example: 'Welcome SMS → Product info → Special offer → Feedback request'
    },
    {
      title: 'Abandoned Cart Recovery',
      description: 'Re-engage customers who left items in their cart with targeted reminders.',
      example: 'Cart reminder → Limited-time discount → Product recommendations'
    },
    {
      title: 'Customer Lifecycle',
      description: 'Guide customers through their journey with automated touchpoints.',
      example: 'Purchase confirmation → Usage tips → Upsell opportunities → Loyalty rewards'
    },
    {
      title: 'Re-engagement Campaigns',
      description: 'Win back inactive customers with compelling re-engagement sequences.',
      example: 'Miss you message → Exclusive offer → Product updates → Win-back incentive'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet 
        title="Marketing Automation Platform - SeaX Multi-Channel Automation"
        description="Automate your marketing campaigns across SMS, WhatsApp, and voice calls. Advanced workflows, audience segmentation, and performance analytics."
        favicon="/seasalt-ai-favicon.ico"
      />
      
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Marketing Automation
            <span className="text-purple-600 block">That Works</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Automate your marketing campaigns across SMS, WhatsApp, and voice calls. 
            Create sophisticated workflows that nurture leads and drive conversions 24/7.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={getLocalizedPath('/signup')}
              className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Start Automating</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <Link
              to={getLocalizedPath('/demo')}
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              See Demo
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Powerful Automation Features
            </h2>
            <p className="text-lg text-gray-600">
              Build sophisticated campaigns that run automatically and deliver results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <IconComponent className="w-6 h-6 text-purple-600" />
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

      {/* Automation Types Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Automation Workflows
            </h2>
            <p className="text-lg text-gray-600">
              Pre-built automation sequences for common marketing scenarios
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {automationTypes.map((automation, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{automation.title}</h3>
                <p className="text-gray-600 mb-4">{automation.description}</p>
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="text-sm font-medium text-purple-800 mb-2">Example Flow:</div>
                  <div className="text-sm text-purple-700">{automation.example}</div>
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
              Automation Results
            </h2>
            <p className="text-lg text-gray-600">
              See the impact of marketing automation on your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">10x</div>
                <div className="text-gray-600">More Efficient</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                <div className="text-gray-600">Engagement Rate</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">75%</div>
                <div className="text-gray-600">Time Savings</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">400%</div>
                <div className="text-gray-600">ROI Increase</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Automate Your Marketing?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of businesses scaling their marketing with SeaX automation
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={getLocalizedPath('/signup')}
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center space-x-2"
            >
              <span>Sign Up Now</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to={getLocalizedPath('/demo')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default MarketingAutomation;
