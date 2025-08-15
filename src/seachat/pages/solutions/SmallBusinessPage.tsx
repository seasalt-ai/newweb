import { Store, Users, DollarSign, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { MEETING_URL, getMeetingUrl } from '../../../constants/urls';
const SmallBusinessPage = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  const features = [
    {
      icon: Store,
      title: t('seachat.solutions.smallBusiness.features.local.title', 'Local Business Support'),
      description: t('seachat.solutions.smallBusiness.features.local.description', 'Perfect for local shops, restaurants, and service providers'),
      benefits: [
        t('seachat.solutions.smallBusiness.features.local.benefits.seo', 'Local SEO optimization'), 
        t('seachat.solutions.smallBusiness.features.local.benefits.google', 'Google My Business integration'), 
        t('seachat.solutions.smallBusiness.features.local.benefits.reviews', 'Review management'), 
        t('seachat.solutions.smallBusiness.features.local.benefits.customer', 'Local customer base')
      ]
    },
    {
      icon: DollarSign,
      title: t('seachat.solutions.smallBusiness.features.cost.title', 'Cost-Effective Solution'),
      description: t('seachat.solutions.smallBusiness.features.cost.description', 'Affordable pricing that grows with your business'),
      benefits: [
        t('seachat.solutions.smallBusiness.features.cost.benefits.free', 'Free plan available'), 
        t('seachat.solutions.smallBusiness.features.cost.benefits.setup', 'No setup fees'), 
        t('seachat.solutions.smallBusiness.features.cost.benefits.pricing', 'Flexible pricing'), 
        t('seachat.solutions.smallBusiness.features.cost.benefits.roi', 'ROI tracking')
      ]
    },
    {
      icon: Clock,
      title: t('seachat.solutions.smallBusiness.features.setup.title', 'Quick Setup'),
      description: t('seachat.solutions.smallBusiness.features.setup.description', 'Get started in minutes, not hours or days'),
      benefits: [
        t('seachat.solutions.smallBusiness.features.setup.benefits.minutes', '5-minute setup'), 
        t('seachat.solutions.smallBusiness.features.setup.benefits.templates', 'Pre-built templates'), 
        t('seachat.solutions.smallBusiness.features.setup.benefits.integration', 'Easy integration'), 
        t('seachat.solutions.smallBusiness.features.setup.benefits.activation', 'Instant activation')
      ]
    },
    {
      icon: Users,
      title: t('seachat.solutions.smallBusiness.features.personal.title', 'Personal Touch'),
      description: t('seachat.solutions.smallBusiness.features.personal.description', 'Maintain personal relationships while scaling efficiently'),
      benefits: [
        t('seachat.solutions.smallBusiness.features.personal.benefits.history', 'Customer history'), 
        t('seachat.solutions.smallBusiness.features.personal.benefits.notes', 'Personal notes'), 
        t('seachat.solutions.smallBusiness.features.personal.benefits.relationship', 'Relationship building'), 
        t('seachat.solutions.smallBusiness.features.personal.benefits.community', 'Local community focus')
      ]
    }
  ];

  const businessTypes = [
    {
      title: t('seachat.solutions.smallBusiness.types.retail.title', 'Retail Stores'),
      description: t('seachat.solutions.smallBusiness.types.retail.description', 'Clothing, electronics, home goods, and specialty shops'),
      features: [
        t('seachat.solutions.smallBusiness.types.retail.features.product', 'Product inquiries'), 
        t('seachat.solutions.smallBusiness.types.retail.features.hours', 'Store hours'), 
        t('seachat.solutions.smallBusiness.types.retail.features.inventory', 'Inventory checks'), 
        t('seachat.solutions.smallBusiness.types.retail.features.appointment', 'Appointment booking')
      ]
    },
    {
      title: t('seachat.solutions.smallBusiness.types.restaurants.title', 'Restaurants & Cafes'),
      description: t('seachat.solutions.smallBusiness.types.restaurants.description', 'Dining establishments and food service businesses'),
      features: [
        t('seachat.solutions.smallBusiness.types.restaurants.features.menu', 'Menu questions'), 
        t('seachat.solutions.smallBusiness.types.restaurants.features.reservations', 'Reservations'), 
        t('seachat.solutions.smallBusiness.types.restaurants.features.takeout', 'Takeout orders'), 
        t('seachat.solutions.smallBusiness.types.restaurants.features.dietary', 'Dietary information')
      ]
    },
    {
      title: t('seachat.solutions.smallBusiness.types.professional.title', 'Professional Services'),
      description: t('seachat.solutions.smallBusiness.types.professional.description', 'Lawyers, accountants, consultants, and agencies'),
      features: [
        t('seachat.solutions.smallBusiness.types.professional.features.consultation', 'Consultation booking'), 
        t('seachat.solutions.smallBusiness.types.professional.features.service', 'Service information'), 
        t('seachat.solutions.smallBusiness.types.professional.features.documents', 'Document requests'), 
        t('seachat.solutions.smallBusiness.types.professional.features.followup', 'Follow-up scheduling')
      ]
    },
    {
      title: t('seachat.solutions.smallBusiness.types.health.title', 'Health & Wellness'),
      description: t('seachat.solutions.smallBusiness.types.health.description', 'Gyms, spas, clinics, and wellness centers'),
      features: [
        t('seachat.solutions.smallBusiness.types.health.features.appointment', 'Appointment scheduling'), 
        t('seachat.solutions.smallBusiness.types.health.features.class', 'Class bookings'), 
        t('seachat.solutions.smallBusiness.types.health.features.membership', 'Membership info'), 
        t('seachat.solutions.smallBusiness.types.health.features.consultations', 'Health consultations')
      ]
    },
    {
      title: t('seachat.solutions.smallBusiness.types.home.title', 'Home Services'),
      description: t('seachat.solutions.smallBusiness.types.home.description', 'Contractors, cleaners, landscapers, and repair services'),
      features: [
        t('seachat.solutions.smallBusiness.types.home.features.quotes', 'Service quotes'), 
        t('seachat.solutions.smallBusiness.types.home.features.scheduling', 'Scheduling'), 
        t('seachat.solutions.smallBusiness.types.home.features.emergency', 'Emergency requests'), 
        t('seachat.solutions.smallBusiness.types.home.features.followup', 'Follow-up support')
      ]
    },
    {
      title: t('seachat.solutions.smallBusiness.types.creative.title', 'Creative Services'),
      description: t('seachat.solutions.smallBusiness.types.creative.description', 'Photographers, designers, artists, and studios'),
      features: [
        t('seachat.solutions.smallBusiness.types.creative.features.portfolio', 'Portfolio sharing'), 
        t('seachat.solutions.smallBusiness.types.creative.features.quotes', 'Project quotes'), 
        t('seachat.solutions.smallBusiness.types.creative.features.booking', 'Booking sessions'), 
        t('seachat.solutions.smallBusiness.types.creative.features.consultations', 'Creative consultations')
      ]
    }
  ];

  const useCases = [
    {
      title: t('seachat.solutions.smallBusiness.useCases.inquiries.title', 'Customer Inquiries'),
      description: t('seachat.solutions.smallBusiness.useCases.inquiries.description', 'Handle common questions about products, services, and business hours'),
      example: t('seachat.solutions.smallBusiness.useCases.inquiries.example', '"Are you open on Sundays? What time do you close?"'),
      outcome: t('seachat.solutions.smallBusiness.useCases.inquiries.outcome', 'Instant response with current hours and holiday schedule information')
    },
    {
      title: t('seachat.solutions.smallBusiness.useCases.booking.title', 'Appointment Booking'),
      description: t('seachat.solutions.smallBusiness.useCases.booking.description', 'Allow customers to book appointments and services directly'),
      example: t('seachat.solutions.smallBusiness.useCases.booking.example', '"I need to schedule a haircut for this Friday afternoon"'),
      outcome: t('seachat.solutions.smallBusiness.useCases.booking.outcome', 'Real-time availability check with booking confirmation and reminders')
    },
    {
      title: t('seachat.solutions.smallBusiness.useCases.product.title', 'Product Information'),
      description: t('seachat.solutions.smallBusiness.useCases.product.description', 'Provide detailed product information and availability'),
      example: t('seachat.solutions.smallBusiness.useCases.product.example', '"Do you have the iPhone 15 in blue color?"'),
      outcome: t('seachat.solutions.smallBusiness.useCases.product.outcome', 'Product availability check with pricing and reservation options')
    },
    {
      title: t('seachat.solutions.smallBusiness.useCases.directions.title', 'Local Directions'),
      description: t('seachat.solutions.smallBusiness.useCases.directions.description', 'Help customers find your location and get directions'),
      example: t('seachat.solutions.smallBusiness.useCases.directions.example', '"How do I get to your store from downtown?"'),
      outcome: t('seachat.solutions.smallBusiness.useCases.directions.outcome', 'Interactive map with directions and parking information')
    }
  ];

  const metrics = [
    { 
      value: '50%', 
      label: t('seachat.solutions.smallBusiness.metrics.inquiries.label', 'More Customer Inquiries'), 
      description: t('seachat.solutions.smallBusiness.metrics.inquiries.description', 'With 24/7 availability') 
    },
    { 
      value: '35%', 
      label: t('seachat.solutions.smallBusiness.metrics.bookings.label', 'Increased Bookings'), 
      description: t('seachat.solutions.smallBusiness.metrics.bookings.description', 'Through automated scheduling') 
    },
    { 
      value: '60%', 
      label: t('seachat.solutions.smallBusiness.metrics.time.label', 'Time Savings'), 
      description: t('seachat.solutions.smallBusiness.metrics.time.description', 'On routine customer questions') 
    },
    { 
      value: '90%', 
      label: t('seachat.solutions.smallBusiness.metrics.satisfaction.label', 'Customer Satisfaction'), 
      description: t('seachat.solutions.smallBusiness.metrics.satisfaction.description', 'With instant responses') 
    }
  ];

  const affordableFeatures = t('seachat.solutions.smallBusiness.affordableFeatures', { returnObjects: true });
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
                {t('seachat.solutions.smallBusiness.title', 'Small Business Solutions')}
              </h1>
            </div>
            <p className="text-2xl text-green-200 mb-8 max-w-4xl mx-auto">
              {t('seachat.solutions.smallBusiness.subtitle', 'Affordable, easy-to-use customer support for small businesses. Start free and grow with features that help you serve customers better without breaking the bank.')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
                {t('seachat.solutions.smallBusiness.startButton', 'Start Free Today')}
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all">
                {t('seachat.solutions.smallBusiness.demoButton', 'View Small Business Demo')}
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
              {t('seachat.solutions.smallBusiness.featuresTitle', 'Built for Small Business Success')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('seachat.solutions.smallBusiness.featuresSubtitle', 'Everything small businesses need to provide professional customer support without the complexity or cost.')}
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
              {t('seachat.solutions.smallBusiness.typesTitle', 'Perfect for Every Small Business')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('seachat.solutions.smallBusiness.typesSubtitle', 'From retail stores to professional services, we support all types of small businesses.')}
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
                {t('seachat.solutions.smallBusiness.affordableTitle', 'Affordable for Every Budget')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('seachat.solutions.smallBusiness.affordableSubtitle', 'Start completely free and only pay for what you need as you grow. No hidden fees, no long-term contracts, no surprises.')}
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{t('seachat.solutions.smallBusiness.pricingTitle', 'Simple Pricing')}</h3>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-md border-2 border-green-500">
                  <div className="text-center mb-4">
                    <h4 className="text-xl font-bold text-gray-900">{t('seachat.solutions.smallBusiness.pricing.free.title', 'Free Forever')}</h4>
                    <div className="text-3xl font-bold text-green-600">$0</div>
                    <div className="text-gray-600">{t('seachat.solutions.smallBusiness.pricing.free.period', 'per month')}</div>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{t('seachat.solutions.smallBusiness.pricing.free.agent', '1 Human agent for life')}</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{t('seachat.solutions.smallBusiness.pricing.free.conversations', 'Unlimited conversations')}</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{t('seachat.solutions.smallBusiness.pricing.free.widget', 'Basic website widget')}</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{t('seachat.solutions.smallBusiness.pricing.free.support', 'Email support')}</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="text-center mb-4">
                    <h4 className="text-xl font-bold text-gray-900">{t('seachat.solutions.smallBusiness.pricing.starter.title', 'AI Starter')}</h4>
                    <div className="text-3xl font-bold text-blue-600">$29</div>
                    <div className="text-gray-600">{t('seachat.solutions.smallBusiness.pricing.starter.period', 'per month')}</div>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{t('seachat.solutions.smallBusiness.pricing.starter.everything', 'Everything in Free')}</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{t('seachat.solutions.smallBusiness.pricing.starter.ai', 'AI automation')}</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{t('seachat.solutions.smallBusiness.pricing.starter.analytics', 'Advanced analytics')}</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{t('seachat.solutions.smallBusiness.pricing.starter.priority', 'Priority support')}</span>
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
              {t('seachat.solutions.smallBusiness.resultsTitle', 'Small Business Results')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('seachat.solutions.smallBusiness.resultsSubtitle', 'Real results from small businesses using SeaChat to improve customer service and grow their business.')}
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
              {t('seachat.solutions.smallBusiness.scenariosTitle', 'Common Small Business Scenarios')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('seachat.solutions.smallBusiness.scenariosSubtitle', 'See how SeaChat handles typical small business customer interactions.')}
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
                    <h4 className="font-semibold text-blue-900 mb-2">{t('seachat.solutions.smallBusiness.customerQuestion', 'Customer Question')}:</h4>
                    <p className="text-blue-800 italic">"{useCase.example}"</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                    <h4 className="font-semibold text-green-900 mb-2">{t('seachat.solutions.smallBusiness.seachatResponse', 'SeaChat Response')}:</h4>
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
            {t('seachat.solutions.smallBusiness.ctaTitle', 'Ready to Grow Your Small Business?')}
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            {t('seachat.solutions.smallBusiness.ctaSubtitle', 'Join thousands of small businesses already using SeaChat to provide professional customer support and grow their business without the big business costs.')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://chat.seasalt.ai/gpt/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
            >
              {t('seachat.solutions.smallBusiness.ctaStartButton', 'Start Small Business For Free')}
            </a>
            <a
              href={getMeetingUrl(currentLanguage)}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center text-center"
            >
              {t('seachat.solutions.smallBusiness.ctaDemoButton', 'Schedule Small Business Demo')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmallBusinessPage;