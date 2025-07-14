import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHelmet from '../../../components/SEOHelmet';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Users, Target, Zap, MessageSquare, BarChart3, Phone } from 'lucide-react';

const LeadGeneration = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const getLocalizedPath = (path: string) => `/${currentLanguage}/seax${path}`;

  const features = [
    {
      icon: Target,
      title: 'Targeted Outreach',
      description: 'Reach the right prospects with precision targeting across SMS, WhatsApp, and voice calls.'
    },
    {
      icon: Zap,
      title: 'Multi-Channel Campaigns',
      description: 'Execute coordinated campaigns across SMS, WhatsApp, and voice for maximum impact.'
    },
    {
      icon: MessageSquare,
      title: 'AI-Powered Follow-ups',
      description: 'Automated intelligent responses that qualify leads and schedule meetings 24/7.'
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description: 'Track campaign performance, lead quality, and conversion rates in real-time.'
    },
    {
      icon: Users,
      title: 'Lead Scoring',
      description: 'Automatic lead scoring and prioritization based on engagement and responses.'
    },
    {
      icon: Phone,
      title: 'Voice Qualification',
      description: 'AI-powered voice calls to qualify leads and book appointments automatically.'
    }
  ];

  const useCases = [
    {
      title: 'B2B Sales Outreach',
      description: 'Generate qualified leads for B2B sales teams with targeted messaging campaigns.',
      stats: '300% increase in qualified leads'
    },
    {
      title: 'Real Estate Lead Generation',
      description: 'Connect with property buyers and sellers through multi-channel campaigns.',
      stats: '85% response rate improvement'
    },
    {
      title: 'Insurance Lead Qualification',
      description: 'Qualify insurance prospects with automated follow-ups and appointment booking.',
      stats: '60% reduction in qualification time'
    },
    {
      title: 'Event Registration',
      description: 'Drive event registrations with targeted invitations and follow-up sequences.',
      stats: '200% increase in registrations'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet 
        title="Lead Generation Solution - SeaX Multi-Channel Outreach"
        description="Generate qualified leads at scale with SeaX's multi-channel lead generation solution. SMS, WhatsApp, and voice campaigns with AI-powered follow-ups."
        favicon="/seasalt-ai-favicon.ico"
      />
      
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Lead Generation
            <span className="text-blue-600 block">at Scale</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Generate qualified leads with multi-channel campaigns across SMS, WhatsApp, and voice calls. 
            AI-powered follow-ups ensure no opportunity is missed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={getLocalizedPath('/signup')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Start Generating Leads</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            
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
              Powerful Lead Generation Features
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to capture, qualify, and convert leads at scale
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
              Lead Generation Use Cases
            </h2>
            <p className="text-lg text-gray-600">
              Proven strategies across industries and business types
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
              Proven Results
            </h2>
            <p className="text-lg text-gray-600">
              See what our clients achieve with SeaX Lead Generation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">5x</div>
                <div className="text-gray-600">More Qualified Leads</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
                <div className="text-gray-600">Response Rate</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">60%</div>
                <div className="text-gray-600">Time Savings</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">300%</div>
                <div className="text-gray-600">ROI Increase</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Scale Your Lead Generation?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of businesses generating qualified leads with SeaX
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={getLocalizedPath('/signup')}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center space-x-2"
            >
              <span>Sign Up Now</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to={getLocalizedPath('/demo')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
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

export default LeadGeneration;
