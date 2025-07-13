import React from 'react';
import { ShoppingBag, TrendingUp, Clock, Users, Star, ArrowRight, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const EcommerceSolutionPage = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: ShoppingBag,
      title: t('solutions.ecommerce.features.orders.title', 'Order Management Integration'),
      description: t('solutions.ecommerce.features.orders.description', 'Seamlessly integrate with your e-commerce platform for real-time order tracking and updates.'),
      benefits: [
        t('solutions.ecommerce.features.orders.benefits.status', 'Real-time order status'), 
        t('solutions.ecommerce.features.orders.benefits.shipping', 'Automated shipping updates'), 
        t('solutions.ecommerce.features.orders.benefits.returns', 'Return processing'), 
        t('solutions.ecommerce.features.orders.benefits.inventory', 'Inventory inquiries')
      ]
    },
    {
      icon: Users,
      title: t('solutions.ecommerce.features.accounts.title', 'Customer Account Support'),
      description: t('solutions.ecommerce.features.accounts.description', 'Help customers with account issues, password resets, and profile management.'),
      benefits: [
        t('solutions.ecommerce.features.accounts.benefits.recovery', 'Account recovery'), 
        t('solutions.ecommerce.features.accounts.benefits.updates', 'Profile updates'), 
        t('solutions.ecommerce.features.accounts.benefits.subscriptions', 'Subscription management'), 
        t('solutions.ecommerce.features.accounts.benefits.billing', 'Billing support')
      ]
    },
    {
      icon: Star,
      title: t('solutions.ecommerce.features.recommendations.title', 'Product Recommendations'),
      description: t('solutions.ecommerce.features.recommendations.description', 'AI-powered product suggestions based on customer preferences and browsing history.'),
      benefits: [
        t('solutions.ecommerce.features.recommendations.benefits.personalized', 'Personalized suggestions'), 
        t('solutions.ecommerce.features.recommendations.benefits.cross', 'Cross-selling opportunities'), 
        t('solutions.ecommerce.features.recommendations.benefits.upselling', 'Upselling automation'), 
        t('solutions.ecommerce.features.recommendations.benefits.inventory', 'Inventory optimization')
      ]
    },
    {
      icon: Clock,
      title: t('solutions.ecommerce.features.assistance.title', '24/7 Shopping Assistance'),
      description: t('solutions.ecommerce.features.assistance.description', 'Round-the-clock support for customers across different time zones and shopping patterns.'),
      benefits: [
        t('solutions.ecommerce.features.assistance.benefits.global', 'Global coverage'), 
        t('solutions.ecommerce.features.assistance.benefits.peak', 'Peak hour support'), 
        t('solutions.ecommerce.features.assistance.benefits.holiday', 'Holiday assistance'), 
        t('solutions.ecommerce.features.assistance.benefits.mobile', 'Mobile shopping help')
      ]
    }
  ];

  const integrations = [
    { 
      name: t('solutions.ecommerce.integrations.shopify.name', 'Shopify'), 
      logo: '🛍️', 
      description: t('solutions.ecommerce.integrations.shopify.description', 'Native Shopify app with full order integration') 
    },
    { 
      name: t('solutions.ecommerce.integrations.woocommerce.name', 'WooCommerce'), 
      logo: '🛒', 
      description: t('solutions.ecommerce.integrations.woocommerce.description', 'WordPress plugin for WooCommerce stores') 
    },
    { 
      name: t('solutions.ecommerce.integrations.magento.name', 'Magento'), 
      logo: '🏪', 
      description: t('solutions.ecommerce.integrations.magento.description', 'Enterprise-grade Magento integration') 
    },
    { 
      name: t('solutions.ecommerce.integrations.bigcommerce.name', 'BigCommerce'), 
      logo: '🏬', 
      description: t('solutions.ecommerce.integrations.bigcommerce.description', 'Complete BigCommerce API integration') 
    },
    { 
      name: t('solutions.ecommerce.integrations.stripe.name', 'Stripe'), 
      logo: '💳', 
      description: t('solutions.ecommerce.integrations.stripe.description', 'Payment processing and billing support') 
    },
    { 
      name: t('solutions.ecommerce.integrations.paypal.name', 'PayPal'), 
      logo: '💰', 
      description: t('solutions.ecommerce.integrations.paypal.description', 'PayPal transaction and dispute handling') 
    }
  ];

  const metrics = [
    { 
      value: '40%', 
      label: t('solutions.ecommerce.metrics.conversion.label', 'Increase in Sales Conversion'), 
      description: t('solutions.ecommerce.metrics.conversion.description', 'Through proactive customer support') 
    },
    { 
      value: '65%', 
      label: t('solutions.ecommerce.metrics.abandonment.label', 'Reduction in Cart Abandonment'), 
      description: t('solutions.ecommerce.metrics.abandonment.description', 'With real-time shopping assistance') 
    },
    { 
      value: '80%', 
      label: t('solutions.ecommerce.metrics.resolution.label', 'Faster Order Resolution'), 
      description: t('solutions.ecommerce.metrics.resolution.description', 'Automated order status updates') 
    },
    { 
      value: '90%', 
      label: t('solutions.ecommerce.metrics.satisfaction.label', 'Customer Satisfaction Rate'), 
      description: t('solutions.ecommerce.metrics.satisfaction.description', 'For e-commerce support interactions') 
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-800 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <ShoppingBag className="w-16 h-16 text-purple-300 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold">
                {t('solutions.ecommerce.title', 'E-commerce & Retail')}
              </h1>
            </div>
            <p className="text-2xl text-purple-200 mb-8 max-w-4xl mx-auto">
              {t('solutions.ecommerce.subtitle', 'Transform your online store with intelligent customer support that drives sales, reduces cart abandonment, and creates loyal customers.')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://chat.seasalt.ai/gpt/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-500 hover:bg-purple-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 text-center"
            >
              {t('solutions.ecommerce.trialButton', 'Start E-commerce For Free')}
            </a>
            <a
              href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all text-center"
            >
              {t('solutions.ecommerce.demoButton', 'Schedule E-commerce Demo')}
            </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('solutions.ecommerce.featuresTitle', 'E-commerce Specialized Features')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('solutions.ecommerce.featuresSubtitle', 'Purpose-built features for online retailers to maximize sales and customer satisfaction.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6 text-lg">{feature.description}</p>
                  
                  <div className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('solutions.ecommerce.resultsTitle', 'Proven E-commerce Results')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('solutions.ecommerce.resultsSubtitle', 'Real metrics from e-commerce businesses using SeaChat for customer support.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl font-bold text-purple-600 mb-4">{metric.value}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{metric.label}</h3>
                <p className="text-gray-600 text-sm">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Integrations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('solutions.ecommerce.integrationsTitle', 'E-commerce Platform Integrations')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('solutions.ecommerce.integrationsSubtitle', 'Seamlessly connect with your existing e-commerce stack for unified customer support.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-4xl mb-4">{integration.logo}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{integration.name}</h3>
                <p className="text-gray-600">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Case Example */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t('solutions.ecommerce.successTitle', 'Success Story: Fashion Retailer')}
              </h2>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="font-bold text-red-600 mb-2">{t('solutions.ecommerce.challenge', 'Challenge')}:</h3>
                  <p className="text-gray-700">
                    {t('solutions.ecommerce.challengeDescription', 'High cart abandonment rate and customers leaving due to sizing questions and product availability concerns.')}
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="font-bold text-blue-600 mb-2">{t('solutions.ecommerce.solution', 'Solution')}:</h3>
                  <p className="text-gray-700">
                    {t('solutions.ecommerce.solutionDescription', 'Deployed SeaChat with product catalog integration, sizing guides, and proactive cart abandonment recovery.')}
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="font-bold text-green-600 mb-2">{t('solutions.ecommerce.results', 'Results')}:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span>{t('solutions.ecommerce.result1', '45% increase in conversion rate')}</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span>{t('solutions.ecommerce.result2', '60% reduction in cart abandonment')}</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span>{t('solutions.ecommerce.result3', '$2.3M additional revenue in 6 months')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">{t('solutions.ecommerce.chatPreview', 'Live Chat Preview')}</h3>
              <div className="space-y-4">
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-2">{t('solutions.ecommerce.customer', 'Customer')}</div>
                  <div className="text-gray-800">{t('solutions.ecommerce.customerQuestion', '"Is this dress available in size M?"')}</div>
                </div>
                <div className="bg-blue-100 rounded-lg p-4">
                  <div className="text-sm text-blue-600 mb-2">{t('solutions.ecommerce.seachatAI', 'SeaChat AI')}</div>
                  <div className="text-gray-800">{t('solutions.ecommerce.aiResponse1', '"Yes! The Blue Summer Dress is available in size M. We have 3 in stock. Would you like me to add it to your cart?"')}</div>
                </div>
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-2">{t('solutions.ecommerce.customer', 'Customer')}</div>
                  <div className="text-gray-800">{t('solutions.ecommerce.customerResponse', '"Perfect! Yes, please add it."')}</div>
                </div>
                <div className="bg-green-100 rounded-lg p-4">
                  <div className="text-sm text-green-600 mb-2">{t('solutions.ecommerce.seachatAI', 'SeaChat AI')}</div>
                  <div className="text-gray-800">{t('solutions.ecommerce.aiResponse2', '"Added to cart! 🛍️ You qualify for free shipping. Ready to checkout?"')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('solutions.ecommerce.ctaTitle', 'Ready to Boost Your E-commerce Sales?')}
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            {t('solutions.ecommerce.ctaSubtitle', 'Join hundreds of online retailers using SeaChat to increase conversions, reduce cart abandonment, and create exceptional shopping experiences.')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://chat.seasalt.ai/gpt/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
            >
              {t('solutions.ecommerce.ctaTrialButton', 'Start E-commerce For Free')}
            </a>
            <a
              href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center text-center"
            >
              {t('solutions.ecommerce.ctaDemoButton', 'Schedule E-commerce Demo')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcommerceSolutionPage;