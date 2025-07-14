import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHelmet from '../../../components/SEOHelmet';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, CheckCircle, ShoppingCart, TrendingUp, Users, MessageSquare, Target, RefreshCw } from 'lucide-react';

const EcommerceRetail = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const getLocalizedPath = (path: string) => `/${currentLanguage}/seax${path}`;

  const challenges = [
    {
      icon: <ShoppingCart className="w-6 h-6 text-blue-600" />,
      title: "High Cart Abandonment Rates",
      description: "Customers leave without completing purchases due to lack of timely follow-up and personalized engagement."
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Low Customer Retention",
      description: "Difficulty maintaining long-term relationships with customers without effective retention strategies."
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-blue-600" />,
      title: "Inconsistent Communication",
      description: "Fragmented messaging across multiple channels leading to poor customer experience."
    },
    {
      icon: <Target className="w-6 h-6 text-blue-600" />,
      title: "Limited Personalization",
      description: "Generic marketing messages that don't resonate with individual customer preferences and behaviors."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
      title: "Poor Order Updates",
      description: "Customers left in the dark about order status, shipping updates, and delivery notifications."
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-blue-600" />,
      title: "Ineffective Re-engagement",
      description: "Struggle to win back inactive customers and encourage repeat purchases."
    }
  ];

  const useCases = [
    {
      title: "Abandoned Cart Recovery",
      description: "Automate personalized SMS and messaging campaigns to recover lost sales and re-engage customers who left items in their cart.",
      benefits: ["30% increase in cart recovery", "Personalized product recommendations", "Automated timing optimization"]
    },
    {
      title: "Order Status & Shipping Updates",
      description: "Keep customers informed throughout their purchase journey with real-time order updates and delivery notifications.",
      benefits: ["Reduced customer service inquiries", "Improved customer satisfaction", "Proactive communication"]
    },
    {
      title: "Customer Loyalty Programs",
      description: "Create targeted campaigns for repeat customers with exclusive offers, rewards, and personalized shopping experiences.",
      benefits: ["20% increase in repeat purchases", "Higher customer lifetime value", "Automated reward distribution"]
    },
    {
      title: "Promotional Campaigns",
      description: "Launch targeted marketing campaigns across SMS, messaging, and social platforms to drive sales and engagement.",
      benefits: ["Higher conversion rates", "Better ROI on marketing spend", "Segmented audience targeting"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet 
        title="SeaX for E-commerce & Retail - Boost Sales with Smart Messaging"
        description="Transform your e-commerce business with SeaX's intelligent messaging platform. Recover abandoned carts, increase customer retention, and drive sales with personalized communication."
        favicon="/seasalt-ai-favicon.ico"
      />
      
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            SeaX for
            <span className="text-blue-600 block">E-commerce & Retail</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your e-commerce experience with intelligent messaging that drives sales, reduces cart abandonment, and builds customer loyalty.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://seax.seasalt.ai/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Get Industry Solution</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <Link
              to={getLocalizedPath('/features')}
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              View Features
            </Link>
          </div>
        </div>
      </div>

      {/* Industry Challenges */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              E-commerce Challenges We Solve
            </h2>
            <p className="text-lg text-gray-600">
              Common communication challenges in the e-commerce and retail industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 mb-4">
                  {challenge.icon}
                  <h3 className="text-lg font-semibold text-gray-900">{challenge.title}</h3>
                </div>
                <p className="text-gray-600">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              E-commerce Use Cases
            </h2>
            <p className="text-lg text-gray-600">
              Real-world applications for e-commerce and retail businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{useCase.title}</h3>
                <p className="text-gray-600 mb-6">
                  {useCase.description}
                </p>
                <div className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industry Stats */}
      <div className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              E-commerce Results with SeaX
            </h2>
            <p className="text-xl text-blue-100">
              Proven outcomes for e-commerce and retail businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">30%</div>
              <div className="text-blue-100">Increase in Sales Conversion</div>
              <div className="text-sm text-blue-200 mt-2">Average improvement in cart recovery</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">20%</div>
              <div className="text-blue-100">Increase in Customer Retention</div>
              <div className="text-sm text-blue-200 mt-2">Higher repeat purchase rates</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">15%</div>
              <div className="text-blue-100">Reduction in Cart Abandonment</div>
              <div className="text-sm text-blue-200 mt-2">Through timely personalized messaging</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why E-commerce Businesses Choose SeaX
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive features designed specifically for online retail success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Omnichannel Messaging</h3>
              <p className="text-gray-600">Reach customers across SMS, WhatsApp, and social platforms from one unified dashboard.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Segmentation</h3>
              <p className="text-gray-600">Automatically segment customers based on behavior, purchase history, and preferences.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-time Analytics</h3>
              <p className="text-gray-600">Track campaign performance, customer engagement, and ROI with detailed insights.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your E-commerce Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of e-commerce businesses using SeaX to increase sales, reduce cart abandonment, and build lasting customer relationships.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://seax.seasalt.ai/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <Link
              to={getLocalizedPath('/pricing')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
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

export default EcommerceRetail;

