import { useEffect } from 'react';
import { Mail, ShoppingBag, Users, BarChart3, Star, Zap, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const FacebookMessenger = () => {
  const { i18n } = useTranslation();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const features = [
    {
      icon: <ShoppingBag className="h-8 w-8" />,
      title: 'Facebook Shop Integration',
      description: 'Direct product recommendations in chat with seamless shopping experience'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Lead Generation',
      description: 'Automated lead capture from Messenger conversations with CRM sync'
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: 'Social Proof',
      description: 'Customer testimonials and reviews integration for trust building'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Instant Responses',
      description: 'AI-powered responses that engage your Facebook audience 24/7'
    }
  ];

  const socialCommerceFeatures = [
    {
      title: 'Product Catalog Sync',
      description: 'Automatically sync your Facebook Shop products for instant recommendations'
    },
    {
      title: 'Cart Recovery',
      description: 'Re-engage customers who abandoned their shopping carts with personalized messages'
    },
    {
      title: 'Order Tracking',
      description: 'Provide real-time order updates and shipping information through Messenger'
    },
    {
      title: 'Customer Reviews',
      description: 'Collect and showcase customer reviews to build trust and social proof'
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
                <Link to={`/${i18n.language}/channels-overview`} className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 mb-8">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back to Channels
                </Link>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Turn Facebook Messenger into a{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                    Sales Machine
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Engage your Facebook audience with AI-powered conversations that convert followers into customers. 
                  Integrate with Facebook Shop for seamless social commerce.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://chat.seasalt.ai/gpt/signup"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                  >
                    Connect Messenger Now
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
                      <Mail className="h-8 w-8 text-blue-600 mr-3" />
                      <h3 className="text-lg font-semibold">Facebook Messenger</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm font-medium text-blue-800">Customer: "Do you have this in size M?"</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-700">AI: "Yes! Size M is available. Here's the product link with current pricing 👇"</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-green-200 rounded mr-3"></div>
                          <div>
                            <p className="text-sm font-medium text-green-800">Summer Dress - Size M</p>
                            <p className="text-xs text-green-600">$49.99 • Free shipping</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm text-blue-700">Customer: "Perfect! Can I get 20% off?"</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-700">AI: "I can offer you 15% off with code MESSENGER15! Would you like to complete your order?"</p>
                      </div>
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
                Social Commerce Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Turn your Facebook presence into a powerful sales channel with integrated commerce features
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

        {/* Social Commerce Deep Dive */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Complete Social Commerce Solution
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to sell directly through Facebook Messenger
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {socialCommerceFeatures.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
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

        {/* Facebook Business Ecosystem */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Facebook Business Ecosystem Integration
                </h2>
                <p className="text-xl opacity-90 max-w-2xl mx-auto">
                  Seamlessly connect with your entire Facebook business presence
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white bg-opacity-20 p-6 rounded-xl">
                  <ShoppingBag className="h-8 w-8 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Facebook Shop</h3>
                  <p className="text-sm opacity-90">Direct integration with your Facebook Shop for instant product recommendations</p>
                </div>
                <div className="bg-white bg-opacity-20 p-6 rounded-xl">
                  <BarChart3 className="h-8 w-8 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Facebook Ads</h3>
                  <p className="text-sm opacity-90">Connect ad campaigns with Messenger for seamless customer journeys</p>
                </div>
                <div className="bg-white bg-opacity-20 p-6 rounded-xl">
                  <Users className="h-8 w-8 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Facebook Pages</h3>
                  <p className="text-sm opacity-90">Unified management of page messages and customer interactions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Proven Results
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how businesses are driving real results with Facebook Messenger automation
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
                <div className="text-sm text-gray-600">Higher engagement than email</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">3x</div>
                <div className="text-sm text-gray-600">Better conversion rates</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">60%</div>
                <div className="text-sm text-gray-600">Reduction in support costs</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Automated customer service</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Facebook Presence?
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              Connect Facebook Messenger to Seasalt.ai and start converting your social media 
              followers into paying customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://seax.seasalt.ai/signup"
                className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                Connect Messenger
              </a>
              <a
                href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                Book A Demo
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FacebookMessenger;