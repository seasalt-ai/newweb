import { Cloud, Code, Users, TrendingUp, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SaaSPage = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: Code,
      title: t('solutions.saas.features.technical.title', 'Technical Support'),
      description: t('solutions.saas.features.technical.description', 'Provide expert technical assistance for software issues and integrations'),
      benefits: [
        t('solutions.saas.features.technical.benefits.api', 'API documentation help'), 
        t('solutions.saas.features.technical.benefits.integration', 'Integration support'), 
        t('solutions.saas.features.technical.benefits.troubleshooting', 'Troubleshooting guides'), 
        t('solutions.saas.features.technical.benefits.resources', 'Developer resources')
      ]
    },
    {
      icon: Users,
      title: t('solutions.saas.features.onboarding.title', 'User Onboarding'),
      description: t('solutions.saas.features.onboarding.description', 'Streamline user onboarding with guided setup and feature introduction'),
      benefits: [
        t('solutions.saas.features.onboarding.benefits.tutorials', 'Interactive tutorials'), 
        t('solutions.saas.features.onboarding.benefits.walkthroughs', 'Feature walkthroughs'), 
        t('solutions.saas.features.onboarding.benefits.setup', 'Setup assistance'), 
        t('solutions.saas.features.onboarding.benefits.practices', 'Best practices')
      ]
    },
    {
      icon: TrendingUp,
      title: t('solutions.saas.features.success.title', 'Customer Success'),
      description: t('solutions.saas.features.success.description', 'Drive product adoption and reduce churn with proactive support'),
      benefits: [
        t('solutions.saas.features.success.benefits.analytics', 'Usage analytics'), 
        t('solutions.saas.features.success.benefits.adoption', 'Feature adoption'), 
        t('solutions.saas.features.success.benefits.churn', 'Churn prevention'), 
        t('solutions.saas.features.success.benefits.upselling', 'Upselling opportunities')
      ]
    },
    {
      icon: Shield,
      title: t('solutions.saas.features.security.title', 'Security & Compliance'),
      description: t('solutions.saas.features.security.description', 'Address security concerns and compliance requirements'),
      benefits: [
        t('solutions.saas.features.security.benefits.documentation', 'Security documentation'), 
        t('solutions.saas.features.security.benefits.compliance', 'Compliance guides'), 
        t('solutions.saas.features.security.benefits.protection', 'Data protection'), 
        t('solutions.saas.features.security.benefits.audit', 'Audit support')
      ]
    }
  ];

  const useCases = [
    {
      title: t('solutions.saas.useCases.api.title', 'API Integration Help'),
      description: t('solutions.saas.useCases.api.description', 'Assist developers with API implementation and troubleshooting'),
      example: t('solutions.saas.useCases.api.example', '"How do I authenticate with your API?"'),
      outcome: t('solutions.saas.useCases.api.outcome', 'Step-by-step authentication guide with code examples and testing tools')
    },
    {
      title: t('solutions.saas.useCases.feature.title', 'Feature Guidance'),
      description: t('solutions.saas.useCases.feature.description', 'Help users discover and implement advanced features'),
      example: t('solutions.saas.useCases.feature.example', '"How do I set up automated workflows?"'),
      outcome: t('solutions.saas.useCases.feature.outcome', 'Interactive tutorial with workflow templates and configuration assistance')
    },
    {
      title: t('solutions.saas.useCases.billing.title', 'Billing & Subscriptions'),
      description: t('solutions.saas.useCases.billing.description', 'Handle billing inquiries and subscription management'),
      example: t('solutions.saas.useCases.billing.example', '"I want to upgrade my plan, what are the differences?"'),
      outcome: t('solutions.saas.useCases.billing.outcome', 'Plan comparison with pricing details and upgrade assistance')
    },
    {
      title: t('solutions.saas.useCases.performance.title', 'Performance Optimization'),
      description: t('solutions.saas.useCases.performance.description', 'Provide guidance on optimizing software performance'),
      example: t('solutions.saas.useCases.performance.example', '"My dashboard is loading slowly, how can I fix this?"'),
      outcome: t('solutions.saas.useCases.performance.outcome', 'Performance analysis with optimization recommendations and implementation help')
    }
  ];

  const metrics = [
    { 
      value: '70%', 
      label: t('solutions.saas.metrics.tickets.label', 'Reduced Support Tickets'), 
      description: t('solutions.saas.metrics.tickets.description', 'Through self-service automation') 
    },
    { 
      value: '45%', 
      label: t('solutions.saas.metrics.onboarding.label', 'Faster Onboarding'), 
      description: t('solutions.saas.metrics.onboarding.description', 'With guided setup assistance') 
    },
    { 
      value: '60%', 
      label: t('solutions.saas.metrics.adoption.label', 'Higher Feature Adoption'), 
      description: t('solutions.saas.metrics.adoption.description', 'Through proactive feature guidance') 
    },
    { 
      value: '35%', 
      label: t('solutions.saas.metrics.churn.label', 'Reduced Churn Rate'), 
      description: t('solutions.saas.metrics.churn.description', 'With proactive customer success') 
    }
  ];

  const saasTypes = [
    {
      title: t('solutions.saas.types.b2b.title', 'B2B SaaS Platforms'),
      description: t('solutions.saas.types.b2b.description', 'Enterprise software and business tools'),
      features: [
        t('solutions.saas.types.b2b.features.tenant', 'Multi-tenant support'), 
        t('solutions.saas.types.b2b.features.security', 'Enterprise security'), 
        t('solutions.saas.types.b2b.features.api', 'API documentation'), 
        t('solutions.saas.types.b2b.features.assistance', 'Integration assistance')
      ]
    },
    {
      title: t('solutions.saas.types.developer.title', 'Developer Tools'),
      description: t('solutions.saas.types.developer.description', 'APIs, SDKs, and development platforms'),
      features: [
        t('solutions.saas.types.developer.features.examples', 'Code examples'), 
        t('solutions.saas.types.developer.features.documentation', 'Technical documentation'), 
        t('solutions.saas.types.developer.features.debugging', 'Debugging help'), 
        t('solutions.saas.types.developer.features.community', 'Community support')
      ]
    },
    {
      title: t('solutions.saas.types.marketing.title', 'Marketing Software'),
      description: t('solutions.saas.types.marketing.description', 'Marketing automation and analytics tools'),
      features: [
        t('solutions.saas.types.marketing.features.campaign', 'Campaign setup'), 
        t('solutions.saas.types.marketing.features.analytics', 'Analytics guidance'), 
        t('solutions.saas.types.marketing.features.integration', 'Integration help'), 
        t('solutions.saas.types.marketing.features.practices', 'Best practices')
      ]
    },
    {
      title: t('solutions.saas.types.productivity.title', 'Productivity Apps'),
      description: t('solutions.saas.types.productivity.description', 'Collaboration and productivity software'),
      features: [
        t('solutions.saas.types.productivity.features.tutorials', 'Feature tutorials'), 
        t('solutions.saas.types.productivity.features.workflow', 'Workflow optimization'), 
        t('solutions.saas.types.productivity.features.team', 'Team setup'), 
        t('solutions.saas.types.productivity.features.usage', 'Usage analytics')
      ]
    },
    {
      title: t('solutions.saas.types.ecommerce.title', 'E-commerce Platforms'),
      description: t('solutions.saas.types.ecommerce.description', 'Online store and payment solutions'),
      features: [
        t('solutions.saas.types.ecommerce.features.store', 'Store setup'), 
        t('solutions.saas.types.ecommerce.features.payment', 'Payment integration'), 
        t('solutions.saas.types.ecommerce.features.theme', 'Theme customization'), 
        t('solutions.saas.types.ecommerce.features.performance', 'Performance optimization')
      ]
    },
    {
      title: t('solutions.saas.types.analytics.title', 'Analytics Platforms'),
      description: t('solutions.saas.types.analytics.description', 'Data analytics and business intelligence'),
      features: [
        t('solutions.saas.types.analytics.features.dashboard', 'Dashboard creation'), 
        t('solutions.saas.types.analytics.features.data', 'Data integration'), 
        t('solutions.saas.types.analytics.features.report', 'Report generation'), 
        t('solutions.saas.types.analytics.features.visualization', 'Visualization help')
      ]
    }
  ];

  const integrations = t('solutions.saas.integrations', { returnObjects: true });
  const safeIntegrations = Array.isArray(integrations) ? integrations : [];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Cloud className="w-16 h-16 text-indigo-300 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold">
                {t('solutions.saas.title', 'SaaS & Technology')}
              </h1>
            </div>
            <p className="text-2xl text-indigo-200 mb-8 max-w-4xl mx-auto">
              {t('solutions.saas.subtitle', 'Accelerate user adoption and reduce churn with intelligent customer support that provides technical assistance, onboarding guidance, and proactive success management.')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://chat.seasalt.ai/gpt/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-500 hover:bg-indigo-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 text-center"
            >
              {t('solutions.saas.trialButton', 'Start SaaS For Free')}
            </a>
            <a
              href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-indigo-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all text-center"
            >
              {t('solutions.saas.demoButton', 'Schedule SaaS Demo')}
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
              {t('solutions.saas.featuresTitle', 'SaaS-Specific Features')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('solutions.saas.featuresSubtitle', 'Purpose-built features for SaaS companies to drive user success and business growth.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
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

      {/* SaaS Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('solutions.saas.typesTitle', 'All SaaS Categories Supported')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('solutions.saas.typesSubtitle', 'From enterprise platforms to developer tools, we support every type of SaaS business.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {saasTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{type.title}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>
                
                <div className="space-y-2">
                  {type.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('solutions.saas.impactTitle', 'SaaS Business Impact')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('solutions.saas.impactSubtitle', 'Real results from SaaS companies using SeaChat for customer support and success.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl font-bold text-indigo-600 mb-4">{metric.value}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{metric.label}</h3>
                <p className="text-gray-600 text-sm">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('solutions.saas.useCasesTitle', 'SaaS Support Use Cases')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('solutions.saas.useCasesSubtitle', 'See how SeaChat handles typical SaaS customer interactions and technical support.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                <p className="text-gray-600 mb-6">{useCase.description}</p>
                
                <div className="space-y-4">
                  <div className="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-500">
                    <h4 className="font-semibold text-indigo-900 mb-2">{t('solutions.saas.userQuestion', 'User Question')}:</h4>
                    <p className="text-indigo-800 italic">"{useCase.example}"</p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                    <h4 className="font-semibold text-green-900 mb-2">{t('solutions.saas.seachatResponse', 'SeaChat Response')}:</h4>
                    <p className="text-green-800">{useCase.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t('solutions.saas.integrationsTitle', 'SaaS Platform Integrations')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('solutions.saas.integrationsSubtitle', 'Connect with the tools and platforms that power your SaaS business for unified customer success operations.')}
              </p>
              
              <div className="grid md:grid-cols-1 gap-4">
                {safeIntegrations.map((integration, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{integration}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('solutions.saas.successFlowTitle', 'Customer Success Flow')}</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('solutions.saas.flow.onboarding.title', 'User Onboarding')}</h4>
                    <p className="text-gray-600 text-sm">{t('solutions.saas.flow.onboarding.description', 'Guided setup and feature introduction')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('solutions.saas.flow.adoption.title', 'Feature Adoption')}</h4>
                    <p className="text-gray-600 text-sm">{t('solutions.saas.flow.adoption.description', 'Proactive feature recommendations')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('solutions.saas.flow.monitoring.title', 'Usage Monitoring')}</h4>
                    <p className="text-gray-600 text-sm">{t('solutions.saas.flow.monitoring.description', 'Track engagement and identify issues')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('solutions.saas.flow.growth.title', 'Success & Growth')}</h4>
                    <p className="text-gray-600 text-sm">{t('solutions.saas.flow.growth.description', 'Upselling and expansion opportunities')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('solutions.saas.ctaTitle', 'Ready to Accelerate SaaS Growth?')}
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            {t('solutions.saas.ctaSubtitle', 'Join SaaS companies already using SeaChat to drive user adoption, reduce churn, and accelerate customer success.')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://chat.seasalt.ai/gpt/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
            >
              {t('solutions.saas.ctaTrialButton', 'Start SaaS For Free')}
            </a>
            <a
              href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center text-center"
            >
              {t('solutions.saas.ctaDemoButton', 'Schedule SaaS Demo')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SaaSPage;