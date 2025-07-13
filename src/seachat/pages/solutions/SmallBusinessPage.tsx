import { Store, Users, DollarSign, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SmallBusinessPage = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: Store,
      title: t('solutions.smallBusiness.features.local.title', 'Local Business Support'),
      description: t('solutions.smallBusiness.features.local.description', 'Perfect for local shops, restaurants, and service providers'),
      benefits: [
        t('solutions.smallBusiness.features.local.benefits.seo', 'Local SEO optimization'), 
        t('solutions.smallBusiness.features.local.benefits.google', 'Google My Business integration'), 
        t('solutions.smallBusiness.features.local.benefits.reviews', 'Review management'), 
        t('solutions.smallBusiness.features.local.benefits.customer', 'Local customer base')
      ]
    },
    {
      icon: DollarSign,
      title: t('solutions.smallBusiness.features.cost.title', 'Cost-Effective Solution'),
      description: t('solutions.smallBusiness.features.cost.description', 'Affordable pricing that grows with your business'),
      benefits: [
        t('solutions.smallBusiness.features.cost.benefits.free', 'Free plan available'), 
        t('solutions.smallBusiness.features.cost.benefits.setup', 'No setup fees'), 
        t('solutions.smallBusiness.features.cost.benefits.pricing', 'Flexible pricing'), 
        t('solutions.smallBusiness.features.cost.benefits.roi', 'ROI tracking')
      ]
    },
    {
      icon: Clock,
      title: t('solutions.smallBusiness.features.setup.title', 'Quick Setup'),
      description: t('solutions.smallBusiness.features.setup.description', 'Get started in minutes, not hours or days'),
      benefits: [
        t('solutions.smallBusiness.features.setup.benefits.minutes', '5-minute setup'), 
        t('solutions.smallBusiness.features.setup.benefits.templates', 'Pre-built templates'), 
        t('solutions.smallBusiness.features.setup.benefits.integration', 'Easy integration'), 
        t('solutions.smallBusiness.features.setup.benefits.activation', 'Instant activation')
      ]
    },
    {
      icon: Users,
      title: t('solutions.smallBusiness.features.personal.title', 'Personal Touch'),
      description: t('solutions.smallBusiness.features.personal.description', 'Maintain personal relationships while scaling efficiently'),
      benefits: [
        t('solutions.smallBusiness.features.personal.benefits.history', 'Customer history'), 
        t('solutions.smallBusiness.features.personal.benefits.notes', 'Personal notes'), 
        t('solutions.smallBusiness.features.personal.benefits.relationship', 'Relationship building'), 
        t('solutions.smallBusiness.features.personal.benefits.community', 'Local community focus')
      ]
    }
  ];

  const businessTypes = [
    {
      title: t('solutions.smallBusiness.types.retail.title', 'Retail Stores'),
      description: t('solutions.smallBusiness.types.retail.description', 'Clothing, electronics, home goods, and specialty shops'),
      features: [
        t('solutions.smallBusiness.types.retail.features.product', 'Product inquiries'), 
        t('solutions.smallBusiness.types.retail.features.hours', 'Store hours'), 
        t('solutions.smallBusiness.types.retail.features.inventory', 'Inventory checks'), 
        t('solutions.smallBusiness.types.retail.features.appointment', 'Appointment booking')
      ]
    },
    {
      title: t('solutions.smallBusiness.types.restaurants.title', 'Restaurants & Cafes'),
      description: t('solutions.smallBusiness.types.restaurants.description', 'Dining establishments and food service businesses'),
      features: [
        t('solutions.smallBusiness.types.restaurants.features.menu', 'Menu questions'), 
        t('solutions.smallBusiness.types.restaurants.features.reservations', 'Reservations'), 
        t('solutions.smallBusiness.types.restaurants.features.takeout', 'Takeout orders'), 
        t('solutions.smallBusiness.types.restaurants.features.dietary', 'Dietary information')
      ]
    },
    {
      title: t('solutions.smallBusiness.types.professional.title', 'Professional Services'),
      description: t('solutions.smallBusiness.types.professional.description', 'Lawyers, accountants, consultants, and agencies'),
      features: [
        t('solutions.smallBusiness.types.professional.features.consultation', 'Consultation booking'), 
        t('solutions.smallBusiness.types.professional.features.service', 'Service information'), 
        t('solutions.smallBusiness.types.professional.features.documents', 'Document requests'), 
        t('solutions.smallBusiness.types.professional.features.followup', 'Follow-up scheduling')
      ]
    },
    {
      title: t('solutions.smallBusiness.types.health.title', 'Health & Wellness'),
      description: t('solutions.smallBusiness.types.health.description', 'Gyms, spas, clinics, and wellness centers'),
      features: [
        t('solutions.smallBusiness.types.health.features.appointment', 'Appointment scheduling'), 
        t('solutions.smallBusiness.types.health.features.class', 'Class bookings'), 
        t('solutions.smallBusiness.types.health.features.membership', 'Membership info'), 
        t('solutions.smallBusiness.types.health.features.consultations', 'Health consultations')
      ]
    },
    {
      title: t('solutions.smallBusiness.types.home.title', 'Home Services'),
      description: t('solutions.smallBusiness.types.home.description', 'Contractors, cleaners, landscapers, and repair services'),
      features: [
        t('solutions.smallBusiness.types.home.features.quotes', 'Service quotes'), 
        t('solutions.smallBusiness.types.home.features.scheduling', 'Scheduling'), 
        t('solutions.smallBusiness.types.home.features.emergency', 'Emergency requests'), 
        t('solutions.smallBusiness.types.home.features.followup', 'Follow-up support')
      ]
    },
    {
      title: t('solutions.smallBusiness.types.creative.title', 'Creative Services'),
      description: t('solutions.smallBusiness.types.creative.description', 'Photographers, designers, artists, and studios'),
      features: [
        t('solutions.smallBusiness.types.creative.features.portfolio', 'Portfolio sharing'), 
        t('solutions.smallBusiness.types.creative.features.quotes', 'Project quotes'), 
        t('solutions.smallBusiness.types.creative.features.booking', 'Booking sessions'), 
        t('solutions.smallBusiness.types.creative.features.consultations', 'Creative consultations')
      ]
    }
  ];

  const useCases = [
    {
      title: t('solutions.smallBusiness.useCases.inquiries.title', 'Customer Inquiries'),
      description: t('solutions.smallBusiness.useCases.inquiries.description', 'Handle common questions about products, services, and business hours'),
      example: t('solutions.smallBusiness.useCases.inquiries.example', '"Are you open on Sundays? What time do you close?"'),
      outcome: t('solutions.smallBusiness.useCases.inquiries.outcome', 'Instant response with current hours and holiday schedule information')
    },
    {
      title: t('solutions.smallBusiness.useCases.booking.title', 'Appointment Booking'),
      description: t('solutions.smallBusiness.useCases.booking.description', 'Allow customers to book appointments and services directly'),
      example: t('solutions.smallBusiness.useCases.booking.example', '"I need to schedule a haircut for this Friday afternoon"'),
      outcome: t('solutions.smallBusiness.useCases.booking.outcome', 'Real-time availability check with booking confirmation and reminders')
    },
    {
      title: t('solutions.smallBusiness.useCases.product.title', 'Product Information'),
      description: t('solutions.smallBusiness.useCases.product.description', 'Provide detailed product information and availability'),
      example: t('solutions.smallBusiness.useCases.product.example', '"Do you have the iPhone 15 in blue color?"'),
      outcome: t('solutions.smallBusiness.useCases.product.outcome', 'Product availability check with pricing and reservation options')
    },
    {
      title: t('solutions.smallBusiness.useCases.directions.title', 'Local Directions'),
      description: t('solutions.smallBusiness.useCases.directions.description', 'Help customers find your location and get directions'),
      example: t('solutions.smallBusiness.useCases.directions.example', '"How do I get to your store from downtown?"'),
      outcome: t('solutions.smallBusiness.useCases.directions.outcome', 'Interactive map with directions and parking information')
    }
  ];

  const metrics = [
    { 
      value: '50%', 
      label: t('solutions.smallBusiness.metrics.inquiries.label', 'More Customer Inquiries'), 
      description: t('solutions.smallBusiness.metrics.inquiries.description', 'With 24/7 availability') 
    },
    { 
      value: '35%', 
      label: t('solutions.smallBusiness.metrics.bookings.label', 'Increased Bookings'), 
      description: t('solutions.smallBusiness.metrics.bookings.description', 'Through automated scheduling') 
    },
    { 
      value: '60%', 
      label: t('solutions.smallBusiness.metrics.time.label', 'Time Savings'), 
      description: t('solutions.smallBusiness.metrics.time.description', 'On routine customer questions') 
    },
    { 
      value: '90%', 
      label: t('solutions.smallBusiness.metrics.satisfaction.label', 'Customer Satisfaction'), 
      description: t('solutions.smallBusiness.metrics.satisfaction.description', 'With instant responses') 
    }
  ];

  const affordableFeatures = t('solutions.smallBusiness.affordableFeatures', { returnObjects: true });
  const safeAffordableFeatures = Array.isArray(affordableFeatures) ? affordableFeatures : [];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-900 via-teal-800 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Store className="w-16 h-16 text-green-300 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold">
                {t('solutions.smallBusiness.title', 'Small Business Solutions')}
              </h1>
            </div>
            <p className="text-2xl text-green-200 mb-8 max-w-4xl mx-auto">
              {t('solutions.smallBusiness.subtitle', 'Affordable, easy-to-use customer support for small businesses. Start free and grow with features that help you serve customers better without breaking the bank.')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
                {t('solutions.smallBusiness.startButton', 'Start Free Today')}
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all">
                {t('solutions.smallBusiness.demoButton', 'View Small Business Demo')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('solutions.smallBusiness.featuresTitle', 'Built for Small Business Success')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('solutions.smallBusiness.featuresSubtitle', 'Everything small businesses need to provide professional customer support without the complexity or cost.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 border border-green-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
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

      {/* Business Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('solutions.smallBusiness.typesTitle', 'Perfect for Every Small Business')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('solutions.smallBusiness.typesSubtitle', 'From retail stores to professional services, we support all types of small businesses.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessTypes.map((business, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{business.title}</h3>
                <p className="text-gray-600 mb-6">{business.description}</p>
                
                <div className="space-y-2">
                  {business.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affordable Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t('solutions.smallBusiness.affordableTitle', 'Affordable for Every Budget')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('solutions.smallBusiness.affordableSubtitle', 'Start completely free and only pay for what you need as you grow. No hidden fees, no long-term contracts, no surprises.')}
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {safeAffordableFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 border border-green-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{t('solutions.smallBusiness.pricingTitle', 'Simple Pricing')}</h3>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-md border-2 border-green-500">
                  <div className="text-center mb-4">
                    <h4 className="text-xl font-bold text-gray-900">{t('solutions.smallBusiness.pricing.free.title', 'Free Forever')}</h4>
                    <div className="text-3xl font-bold text-green-600">$0</div>
                    <div className="text-gray-600">{t('solutions.smallBusiness.pricing.free.period', 'per month')}</div>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{t('solutions.smallBusiness.pricing.free.agent', '1 Human agent for life')}</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{t('solutions.smallBusiness.pricing.free.conversations', 'Unlimited conversations')}</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{t('solutions.smallBusiness.pricing.free.widget', 'Basic website widget')}</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{t('solutions.smallBusiness.pricing.free.support', 'Email support')}</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="text-center mb-4">
                    <h4 className="text-xl font-bold text-gray-900">{t('solutions.smallBusiness.pricing.starter.title', 'AI Starter')}</h4>
                    <div className="text-3xl font-bold text-blue-600">$29</div>
                    <div className="text-gray-600">{t('solutions.smallBusiness.pricing.starter.period', 'per month')}</div>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{t('solutions.smallBusiness.pricing.starter.everything', 'Everything in Free')}</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{t('solutions.smallBusiness.pricing.starter.ai', 'AI automation')}</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{t('solutions.smallBusiness.pricing.starter.analytics', 'Advanced analytics')}</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{t('solutions.smallBusiness.pricing.starter.priority', 'Priority support')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('solutions.smallBusiness.resultsTitle', 'Small Business Results')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('solutions.smallBusiness.resultsSubtitle', 'Real results from small businesses using SeaChat to improve customer service and grow their business.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl font-bold text-green-600 mb-4">{metric.value}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{metric.label}</h3>
                <p className="text-gray-600 text-sm">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('solutions.smallBusiness.scenariosTitle', 'Common Small Business Scenarios')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('solutions.smallBusiness.scenariosSubtitle', 'See how SeaChat handles typical small business customer interactions.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 border border-green-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                <p className="text-gray-600 mb-6">{useCase.description}</p>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-900 mb-2">{t('solutions.smallBusiness.customerQuestion', 'Customer Question')}:</h4>
                    <p className="text-blue-800 italic">"{useCase.example}"</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                    <h4 className="font-semibold text-green-900 mb-2">{t('solutions.smallBusiness.seachatResponse', 'SeaChat Response')}:</h4>
                    <p className="text-green-800">{useCase.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('solutions.smallBusiness.ctaTitle', 'Ready to Grow Your Small Business?')}
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            {t('solutions.smallBusiness.ctaSubtitle', 'Join thousands of small businesses already using SeaChat to provide professional customer support and grow their business without the big business costs.')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://chat.seasalt.ai/gpt/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
            >
              {t('solutions.smallBusiness.ctaStartButton', 'Start Small Business For Free')}
            </a>
            <a
              href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center text-center"
            >
              {t('solutions.smallBusiness.ctaDemoButton', 'Schedule Small Business Demo')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmallBusinessPage;