import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CheckCircle, ArrowRight, Star, TrendingUp, Shield, Clock } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import SEOHelmet from '../../components/SEOHelmet';

interface ChannelPageTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  heroContent: ReactNode;
  features: string[];
  useCases: string[];
  pricing?: {
    setup: string;
    monthly: string;
    perMessage?: string;
    perMinute?: string;
    note?: string;
  };
  stats: {
    value: string;
    label: string;
    icon: ReactNode;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    company: string;
    results: string;
  };
  children?: ReactNode;
}

const ChannelPageTemplate = ({
  title,
  subtitle,
  description,
  seoTitle,
  seoDescription,
  heroContent,
  features,
  useCases,
  pricing,
  stats,
  testimonial,
  children
}: ChannelPageTemplateProps) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const getLocalizedPath = (path: string) => `/${currentLanguage}/seax${path}`;

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet 
        title={seoTitle}
        description={seoDescription}
        favicon="/seasalt-ai-favicon.ico"
      />
      
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="mb-6">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {subtitle}
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                {title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                {description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://seax.seasalt.ai/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </a>
                
                <Link
                  to={getLocalizedPath('/how-it-works')}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  How It Works
                </Link>
              </div>
            </div>
            
            {/* Hero Visual */}
            <div>
              {heroContent}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Powerful Features
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need for high-volume messaging success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-800 font-medium">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Perfect For
            </h2>
            <p className="text-lg text-gray-600">
              Common use cases that drive results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-800 font-medium">{useCase}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      {pricing && (
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Transparent Pricing
              </h2>
              <p className="text-lg text-gray-600">
                Simple, predictable pricing that scales with your business
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-green-100 p-3 rounded-lg w-fit mx-auto mb-4">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">Setup</div>
                  <div className="text-2xl font-bold text-green-600">{pricing.setup}</div>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-100 p-3 rounded-lg w-fit mx-auto mb-4">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">Monthly</div>
                  <div className="text-2xl font-bold text-blue-600">{pricing.monthly}</div>
                </div>
                
                <div className="text-center">
                  <div className="bg-purple-100 p-3 rounded-lg w-fit mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">Per Message</div>
                  <div className="text-2xl font-bold text-purple-600">
                    {pricing.perMessage || pricing.perMinute}
                  </div>
                </div>
              </div>
              
              {pricing.note && (
                <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
                  <p className="text-sm text-yellow-800 text-center">
                    {pricing.note}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Testimonial Section */}
      {testimonial && (
        <div className="py-20 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <blockquote className="text-xl text-blue-100 mb-8">
              "{testimonial.quote}"
            </blockquote>
            
            <div className="text-white font-semibold">
              {testimonial.author}
            </div>
            <div className="text-blue-200 mb-4">
              {testimonial.company}
            </div>
            
            <div className="bg-white/10 rounded-lg p-4 max-w-md mx-auto">
              <div className="text-white font-bold text-lg">
                {testimonial.results}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Content */}
      {children}

      {/* CTA Section */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Scale Your Outreach?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses reaching millions with SeaX
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://seax.seasalt.ai/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <Link
              to={getLocalizedPath('/pricing')}
              className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ChannelPageTemplate;
