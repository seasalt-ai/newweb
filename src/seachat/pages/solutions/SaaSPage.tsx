import { Cloud, Code, Users, TrendingUp, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { MEETING_URL, getMeetingUrl } from '../../../constants/urls';
import SEOHelmet from '../../../components/SEOHelmet';
import { getSEOData, getCanonicalUrl } from '../../../utils/seo';

const SaaSPage = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  // Generate SEO data using standardized utility
  const seoData = getSEOData(t, 'seachat.solutions.saas', {
    canonicalUrl: getCanonicalUrl(i18n.language, '/seachat/solutions/saas')
  });
  
  const features = [
    {
      icon: Code,
      title: t('seachat.solutions.saas.features.technical.title'),
      description: t('seachat.solutions.saas.features.technical.description'),
      benefits: [
        t('seachat.solutions.saas.features.technical.benefits.api'), 
        t('seachat.solutions.saas.features.technical.benefits.integration'), 
        t('seachat.solutions.saas.features.technical.benefits.troubleshooting'), 
        t('seachat.solutions.saas.features.technical.benefits.resources')
      ]
    },
    {
      icon: Users,
      title: t('seachat.solutions.saas.features.onboarding.title'),
      description: t('seachat.solutions.saas.features.onboarding.description'),
      benefits: [
        t('seachat.solutions.saas.features.onboarding.benefits.tutorials'), 
        t('seachat.solutions.saas.features.onboarding.benefits.walkthroughs'), 
        t('seachat.solutions.saas.features.onboarding.benefits.setup'), 
        t('seachat.solutions.saas.features.onboarding.benefits.practices')
      ]
    },
    {
      icon: TrendingUp,
      title: t('seachat.solutions.saas.features.success.title'),
      description: t('seachat.solutions.saas.features.success.description'),
      benefits: [
        t('seachat.solutions.saas.features.success.benefits.analytics'), 
        t('seachat.solutions.saas.features.success.benefits.adoption'), 
        t('seachat.solutions.saas.features.success.benefits.churn'), 
        t('seachat.solutions.saas.features.success.benefits.upselling')
      ]
    },
    {
      icon: Shield,
      title: t('seachat.solutions.saas.features.security.title'),
      description: t('seachat.solutions.saas.features.security.description'),
      benefits: [
        t('seachat.solutions.saas.features.security.benefits.documentation'), 
        t('seachat.solutions.saas.features.security.benefits.compliance'), 
        t('seachat.solutions.saas.features.security.benefits.protection'), 
        t('seachat.solutions.saas.features.security.benefits.audit')
      ]
    }
  ];

  const useCases = [
    {
      title: t('seachat.solutions.saas.useCases.api.title'),
      description: t('seachat.solutions.saas.useCases.api.description'),
      example: t('seachat.solutions.saas.useCases.api.example'),
      outcome: t('seachat.solutions.saas.useCases.api.outcome')
    },
    {
      title: t('seachat.solutions.saas.useCases.feature.title'),
      description: t('seachat.solutions.saas.useCases.feature.description'),
      example: t('seachat.solutions.saas.useCases.feature.example'),
      outcome: t('seachat.solutions.saas.useCases.feature.outcome')
    },
    {
      title: t('seachat.solutions.saas.useCases.billing.title'),
      description: t('seachat.solutions.saas.useCases.billing.description'),
      example: t('seachat.solutions.saas.useCases.billing.example'),
      outcome: t('seachat.solutions.saas.useCases.billing.outcome')
    },
    {
      title: t('seachat.solutions.saas.useCases.performance.title'),
      description: t('seachat.solutions.saas.useCases.performance.description'),
      example: t('seachat.solutions.saas.useCases.performance.example'),
      outcome: t('seachat.solutions.saas.useCases.performance.outcome')
    }
  ];

  const metrics = [
    { 
      value: '70%', 
      label: t('seachat.solutions.saas.metrics.tickets.label'), 
      description: t('seachat.solutions.saas.metrics.tickets.description') 
    },
    { 
      value: '45%', 
      label: t('seachat.solutions.saas.metrics.onboarding.label'), 
      description: t('seachat.solutions.saas.metrics.onboarding.description') 
    },
    { 
      value: '60%', 
      label: t('seachat.solutions.saas.metrics.adoption.label'), 
      description: t('seachat.solutions.saas.metrics.adoption.description') 
    },
    { 
      value: '35%', 
      label: t('seachat.solutions.saas.metrics.churn.label'), 
      description: t('seachat.solutions.saas.metrics.churn.description') 
    }
  ];

  const saasTypes = [
    {
      title: t('seachat.solutions.saas.types.b2b.title'),
      description: t('seachat.solutions.saas.types.b2b.description'),
      features: [
        t('seachat.solutions.saas.types.b2b.features.tenant'), 
        t('seachat.solutions.saas.types.b2b.features.security'), 
        t('seachat.solutions.saas.types.b2b.features.api'), 
        t('seachat.solutions.saas.types.b2b.features.assistance')
      ]
    },
    {
      title: t('seachat.solutions.saas.types.developer.title'),
      description: t('seachat.solutions.saas.types.developer.description'),
      features: [
        t('seachat.solutions.saas.types.developer.features.examples'), 
        t('seachat.solutions.saas.types.developer.features.documentation'), 
        t('seachat.solutions.saas.types.developer.features.debugging'), 
        t('seachat.solutions.saas.types.developer.features.community')
      ]
    },
    {
      title: t('seachat.solutions.saas.types.marketing.title'),
      description: t('seachat.solutions.saas.types.marketing.description'),
      features: [
        t('seachat.solutions.saas.types.marketing.features.campaign'), 
        t('seachat.solutions.saas.types.marketing.features.analytics'), 
        t('seachat.solutions.saas.types.marketing.features.integration'), 
        t('seachat.solutions.saas.types.marketing.features.practices')
      ]
    },
    {
      title: t('seachat.solutions.saas.types.productivity.title'),
      description: t('seachat.solutions.saas.types.productivity.description'),
      features: [
        t('seachat.solutions.saas.types.productivity.features.tutorials'), 
        t('seachat.solutions.saas.types.productivity.features.workflow'), 
        t('seachat.solutions.saas.types.productivity.features.team'), 
        t('seachat.solutions.saas.types.productivity.features.usage')
      ]
    },
    {
      title: t('seachat.solutions.saas.types.ecommerce.title'),
      description: t('seachat.solutions.saas.types.ecommerce.description'),
      features: [
        t('seachat.solutions.saas.types.ecommerce.features.store'), 
        t('seachat.solutions.saas.types.ecommerce.features.payment'), 
        t('seachat.solutions.saas.types.ecommerce.features.theme'), 
        t('seachat.solutions.saas.types.ecommerce.features.performance')
      ]
    },
    {
      title: t('seachat.solutions.saas.types.analytics.title'),
      description: t('seachat.solutions.saas.types.analytics.description'),
      features: [
        t('seachat.solutions.saas.types.analytics.features.dashboard'), 
        t('seachat.solutions.saas.types.analytics.features.data'), 
        t('seachat.solutions.saas.types.analytics.features.report'), 
        t('seachat.solutions.saas.types.analytics.features.visualization')
      ]
    }
  ];

  const integrations = t('seachat.solutions.saas.integrations', { returnObjects: true });
  const safeIntegrations = Array.isArray(integrations) ? integrations : [];

  return (
    <>
      <SEOHelmet {...seoData} />
      <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Cloud className="w-16 h-16 text-indigo-300 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold">
                {t('seachat.solutions.saas.title')}
              </h1>
            </div>
            <p className="text-2xl text-indigo-200 mb-8 max-w-4xl mx-auto">
              {t('seachat.solutions.saas.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://chat.seasalt.ai/gpt/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-500 hover:bg-indigo-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 text-center"
            >
              {t('seachat.solutions.saas.trialButton')}
            </a>
            <a
              href={getMeetingUrl(currentLanguage)}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-indigo-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all text-center"
            >
              {t('seachat.solutions.saas.demoButton')}
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
              {t('seachat.solutions.saas.featuresTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('seachat.solutions.saas.featuresSubtitle')}
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
              {t('seachat.solutions.saas.typesTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('seachat.solutions.saas.typesSubtitle')}
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
              {t('seachat.solutions.saas.impactTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('seachat.solutions.saas.impactSubtitle')}
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
              {t('seachat.solutions.saas.useCasesTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('seachat.solutions.saas.useCasesSubtitle')}
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
                    <h4 className="font-semibold text-indigo-900 mb-2">{t('seachat.solutions.saas.userQuestion')}:</h4>
                    <p className="text-indigo-800 italic">"{useCase.example}"</p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                    <h4 className="font-semibold text-green-900 mb-2">{t('seachat.solutions.saas.seachatResponse')}:</h4>
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
                {t('seachat.solutions.saas.integrationsTitle')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('seachat.solutions.saas.integrationsSubtitle')}
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('seachat.solutions.saas.successFlowTitle')}</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('seachat.solutions.saas.flow.onboarding.title')}</h4>
                    <p className="text-gray-600 text-sm">{t('seachat.solutions.saas.flow.onboarding.description')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('seachat.solutions.saas.flow.adoption.title')}</h4>
                    <p className="text-gray-600 text-sm">{t('seachat.solutions.saas.flow.adoption.description')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('seachat.solutions.saas.flow.monitoring.title')}</h4>
                    <p className="text-gray-600 text-sm">{t('seachat.solutions.saas.flow.monitoring.description')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('seachat.solutions.saas.flow.growth.title')}</h4>
                    <p className="text-gray-600 text-sm">{t('seachat.solutions.saas.flow.growth.description')}</p>
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
            {t('seachat.solutions.saas.ctaTitle')}
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            {t('seachat.solutions.saas.ctaSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://chat.seasalt.ai/gpt/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
            >
              {t('seachat.solutions.saas.ctaTrialButton')}
            </a>
            <a
              href={getMeetingUrl(currentLanguage)}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center text-center"
            >
              {t('seachat.solutions.saas.ctaDemoButton')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default SaaSPage;