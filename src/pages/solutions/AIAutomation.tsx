import { ArrowLeft, Check, Star, Bot, Zap, Cog, Brain, Clock, BarChart3, Shield, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHelmet from '../../components/SEOHelmet';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES } from '../../constants/languages';

const AIAutomation = () => {
  const { t, i18n } = useTranslation();
  const canonicalUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/${i18n.language}/solutions/ai-automation` 
    : `/${i18n.language}/solutions/ai-automation`;

  const challenges = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: t('solutions.aiAutomation.challenges.manualTasks.title'),
      description: t('solutions.aiAutomation.challenges.manualTasks.description'),
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: t('solutions.aiAutomation.challenges.scaling.title'),
      description: t('solutions.aiAutomation.challenges.scaling.description'),
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: t('solutions.aiAutomation.challenges.inconsistent.title'),
      description: t('solutions.aiAutomation.challenges.inconsistent.description'),
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    }
  ];

  const solutions = [
    {
      icon: <Bot className="h-8 w-8" />,
      title: t('solutions.aiAutomation.solutions.voiceChat.title'),
      description: t('solutions.aiAutomation.solutions.voiceChat.description'),
      benefits: [
        t('solutions.aiAutomation.solutions.voiceChat.benefits.nlp'),
        t('solutions.aiAutomation.solutions.voiceChat.benefits.channels'),
        t('solutions.aiAutomation.solutions.voiceChat.benefits.contextAware'),
        t('solutions.aiAutomation.solutions.voiceChat.benefits.handoff')
      ],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      icon: <Workflow className="h-8 w-8" />,
      title: t('solutions.aiAutomation.solutions.workflow.title'),
      description: t('solutions.aiAutomation.solutions.workflow.description'),
      benefits: [
        t('solutions.aiAutomation.solutions.workflow.benefits.leadQualification'),
        t('solutions.aiAutomation.solutions.workflow.benefits.scheduling'),
        t('solutions.aiAutomation.solutions.workflow.benefits.pricing'),
        t('solutions.aiAutomation.solutions.workflow.benefits.followUp')
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: t('solutions.aiAutomation.solutions.learning.title'),
      description: t('solutions.aiAutomation.solutions.learning.description'),
      benefits: [
        t('solutions.aiAutomation.solutions.learning.benefits.machineLearning'),
        t('solutions.aiAutomation.solutions.learning.benefits.optimization'),
        t('solutions.aiAutomation.solutions.learning.benefits.predictive'),
        t('solutions.aiAutomation.solutions.learning.benefits.monitoring')
      ],
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    }
  ];

  const automationTypes = [
    {
      title: t('solutions.aiAutomation.automationTypes.customerService.title'),
      description: t('solutions.aiAutomation.automationTypes.customerService.description'),
      examples: [
        t('solutions.aiAutomation.automationTypes.customerService.examples.orderStatus'),
        t('solutions.aiAutomation.automationTypes.customerService.examples.faq'),
        t('solutions.aiAutomation.automationTypes.customerService.examples.troubleshooting'),
        t('solutions.aiAutomation.automationTypes.customerService.examples.account')
      ]
    },
    {
      title: t('solutions.aiAutomation.automationTypes.sales.title'),
      description: t('solutions.aiAutomation.automationTypes.sales.description'),
      examples: [
        t('solutions.aiAutomation.automationTypes.sales.examples.leadScoring'),
        t('solutions.aiAutomation.automationTypes.sales.examples.demoBooking'),
        t('solutions.aiAutomation.automationTypes.sales.examples.proposals'),
        t('solutions.aiAutomation.automationTypes.sales.examples.followUp')
      ]
    },
    {
      title: t('solutions.aiAutomation.automationTypes.marketing.title'),
      description: t('solutions.aiAutomation.automationTypes.marketing.description'),
      examples: [
        t('solutions.aiAutomation.automationTypes.marketing.examples.personalized'),
        t('solutions.aiAutomation.automationTypes.marketing.examples.timing'),
        t('solutions.aiAutomation.automationTypes.marketing.examples.testing'),
        t('solutions.aiAutomation.automationTypes.marketing.examples.optimization')
      ]
    },
    {
      title: t('solutions.aiAutomation.automationTypes.operational.title'),
      description: t('solutions.aiAutomation.automationTypes.operational.description'),
      examples: [
        t('solutions.aiAutomation.automationTypes.operational.examples.dataEntry'),
        t('solutions.aiAutomation.automationTypes.operational.examples.reports'),
        t('solutions.aiAutomation.automationTypes.operational.examples.taskAssignment'),
        t('solutions.aiAutomation.automationTypes.operational.examples.qualityMonitoring')
      ]
    }
  ];

  const metrics = [
    {
      metric: t('solutions.aiAutomation.metrics.reduction.value'),
      description: t('solutions.aiAutomation.metrics.reduction.label'),
      icon: <Cog className="h-6 w-6" />
    },
    {
      metric: t('solutions.aiAutomation.metrics.availability.value'),
      description: t('solutions.aiAutomation.metrics.availability.label'),
      icon: <Clock className="h-6 w-6" />
    },
    {
      metric: t('solutions.aiAutomation.metrics.accuracy.value'),
      description: t('solutions.aiAutomation.metrics.accuracy.label'),
      icon: <Star className="h-6 w-6" />
    },
    {
      metric: t('solutions.aiAutomation.metrics.speed.value'),
      description: t('solutions.aiAutomation.metrics.speed.label'),
      icon: <Zap className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* SEO Tags */}
      <SEOHelmet
        title={t('solutions.aiAutomation.seo.title')}
        description={t('solutions.aiAutomation.seo.description')}
        favicon="/seasalt-ai-favicon.ico"
        canonicalUrl={canonicalUrl}
        availableLanguages={SUPPORTED_LANGUAGES}
      />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <Link to="/" className="inline-flex items-center text-gray-600 hover:text-purple-600 transition-colors duration-200 mb-8">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  {t('solutions.aiAutomation.nav.backToHome')}
                </Link>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                  {t('solutions.aiAutomation.hero.title.prefix')}{' '}
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    {t('solutions.aiAutomation.hero.title.highlight')}
                  </span>
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700 mb-8">
                  {t('solutions.aiAutomation.hero.subtitle')}
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  {t('solutions.aiAutomation.hero.description')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://seax.seasalt.ai/signup"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                  >
                    {t('solutions.aiAutomation.hero.cta.primary')}
                  </a>
                  <a
                    href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
                    className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                  >
                    {t('solutions.aiAutomation.hero.cta.secondary')}
                  </a>
                </div>
              </div>
              
              <div className="mt-12 lg:mt-0">
                <div className="relative">
                  <div className="bg-white rounded-2xl shadow-2xl p-6">
                    <div className="flex items-center mb-4">
                      <Bot className="h-8 w-8 text-purple-600 mr-3" />
                      <h3 className="text-lg font-semibold">{t('solutions.aiAutomation.hero.dashboard.title')}</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-500">
                        <p className="text-sm font-medium text-purple-800">{t('solutions.aiAutomation.hero.dashboard.stats.tasks')}</p>
                        <p className="text-xs text-purple-600">{t('solutions.aiAutomation.hero.dashboard.stats.tasksSaved')}</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                        <p className="text-sm font-medium text-blue-800">{t('solutions.aiAutomation.hero.dashboard.stats.workflows')}</p>
                        <p className="text-xs text-blue-600">{t('solutions.aiAutomation.hero.dashboard.stats.workflowsDescription')}</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
                        <p className="text-sm font-medium text-green-800">{t('solutions.aiAutomation.hero.dashboard.stats.accuracy')}</p>
                        <p className="text-xs text-green-600">{t('solutions.aiAutomation.hero.dashboard.stats.accuracyDescription')}</p>
                      </div>
                      <div className="bg-orange-50 p-3 rounded-lg border-l-4 border-orange-500">
                        <p className="text-sm font-medium text-orange-800">{t('solutions.aiAutomation.hero.dashboard.stats.savings')}</p>
                        <p className="text-xs text-orange-600">{t('solutions.aiAutomation.hero.dashboard.stats.savingsDescription')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('solutions.aiAutomation.challenges.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('solutions.aiAutomation.challenges.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {challenges.map((challenge, index) => (
                <div 
                  key={index}
                  className={`p-8 rounded-2xl ${challenge.bgColor} border border-gray-200 hover:shadow-lg transition-all duration-300 text-center`}
                >
                  <div className={`${challenge.color} mb-6 mx-auto w-fit`}>
                    {challenge.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-600">
                    {challenge.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('solutions.aiAutomation.solutions.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('solutions.aiAutomation.solutions.description')}
              </p>
            </div>

            <div className="space-y-12">
              {solutions.map((solution, index) => (
                <div 
                  key={index}
                  className={`p-8 rounded-2xl border-2 ${solution.borderColor} ${solution.bgColor} hover:shadow-lg transition-all duration-300`}
                >
                  <div className="grid lg:grid-cols-2 gap-8 items-start">
                    <div>
                      <div className={`${solution.color} mb-6`}>
                        {solution.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {solution.title}
                      </h3>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">{t('solutions.aiAutomation.solutions.capabilities')}</h4>
                      <ul className="space-y-3">
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start">
                            <Check className={`h-5 w-5 ${solution.color} mr-3 mt-0.5 flex-shrink-0`} />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Automation Types */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('solutions.aiAutomation.automationTypes.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('solutions.aiAutomation.automationTypes.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {automationTypes.map((type, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {type.description}
                  </p>
                  <div>
                    <h4 className="text-sm font-semibold text-purple-600 mb-3">{t('solutions.aiAutomation.automationTypes.examples')}</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {type.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className="bg-purple-50 px-3 py-2 rounded-lg text-sm text-purple-800">
                          {example}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('solutions.aiAutomation.metrics.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('solutions.aiAutomation.metrics.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {metrics.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300">
                  <div className="text-purple-600 mb-4 mx-auto w-fit">
                    {item.icon}
                  </div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {item.metric}
                  </div>
                  <p className="text-gray-700 text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security & Compliance */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-12 shadow-xl">
              <div className="text-center mb-12">
                <Shield className="h-16 w-16 text-purple-600 mx-auto mb-6" />
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {t('solutions.aiAutomation.security.title')}
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  {t('solutions.aiAutomation.security.description')}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-purple-100 p-4 rounded-2xl w-fit mx-auto mb-4">
                    <Shield className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('solutions.aiAutomation.security.dataProtection.title')}</h3>
                  <p className="text-gray-600 text-sm">{t('solutions.aiAutomation.security.dataProtection.description')}</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 p-4 rounded-2xl w-fit mx-auto mb-4">
                    <Check className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('solutions.aiAutomation.security.compliance.title')}</h3>
                  <p className="text-gray-600 text-sm">{t('solutions.aiAutomation.security.compliance.description')}</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 p-4 rounded-2xl w-fit mx-auto mb-4">
                    <BarChart3 className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('solutions.aiAutomation.security.auditTrail.title')}</h3>
                  <p className="text-gray-600 text-sm">{t('solutions.aiAutomation.security.auditTrail.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              {t('solutions.aiAutomation.cta.title')}
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              {t('solutions.aiAutomation.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                 href="https://seax.seasalt.ai/signup"
                 className="bg-white text-purple-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
               >
                 {t('solutions.aiAutomation.cta.primary')}
              </a>
              <a
                href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                {t('solutions.aiAutomation.cta.secondary')}
              </a>
            </div>
            <p className="text-white opacity-75 mt-6 text-sm">
              {t('solutions.aiAutomation.cta.disclaimer')}
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIAutomation;