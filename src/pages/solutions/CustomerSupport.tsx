import { ArrowLeft, Check, Headphones, Clock, Users, Shield, BarChart3, Zap, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHelmet from '../../components/SEOHelmet';
import { useTranslation } from 'react-i18next';
import { MEETING_URL, getMeetingUrl } from '../../constants/urls';
import { getSEOData, getCanonicalUrl } from '../../utils/seo';

const CustomerSupport = () => {
  const { t, i18n } = useTranslation();
  
  // Generate SEO data using standardized utility
  const seoData = getSEOData(t, 'solutions.customerSupport', {
    canonicalUrl: getCanonicalUrl(i18n.language, '/solutions/customer-support')
  });

  const challenges = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: t('solutions.customerSupport.challenges.responseTimePressure.title'),
      description: t('solutions.customerSupport.challenges.responseTimePressure.description'),
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: t('solutions.customerSupport.challenges.scalingTeam.title'),
      description: t('solutions.customerSupport.challenges.scalingTeam.description'),
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: t('solutions.customerSupport.challenges.repetitiveInquiries.title'),
      description: t('solutions.customerSupport.challenges.repetitiveInquiries.description'),
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    }
  ];

  const solutions = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: t('solutions.customerSupport.solutions.instantResponse.title'),
      description: t('solutions.customerSupport.solutions.instantResponse.description'),
      benefits: [
        t('solutions.customerSupport.solutions.instantResponse.benefit1'),
        t('solutions.customerSupport.solutions.instantResponse.benefit2'),
        t('solutions.customerSupport.solutions.instantResponse.benefit3'),
        t('solutions.customerSupport.solutions.instantResponse.benefit4')
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: t('solutions.customerSupport.solutions.agentProductivity.title'),
      description: t('solutions.customerSupport.solutions.agentProductivity.description'),
      benefits: [
        t('solutions.customerSupport.solutions.agentProductivity.benefit1'),
        t('solutions.customerSupport.solutions.agentProductivity.benefit2'),
        t('solutions.customerSupport.solutions.agentProductivity.benefit3'),
        t('solutions.customerSupport.solutions.agentProductivity.benefit4')
      ],
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: t('solutions.customerSupport.solutions.satisfactionOptimization.title'),
      description: t('solutions.customerSupport.solutions.satisfactionOptimization.description'),
      benefits: [
        t('solutions.customerSupport.solutions.satisfactionOptimization.benefit1'),
        t('solutions.customerSupport.solutions.satisfactionOptimization.benefit2'),
        t('solutions.customerSupport.solutions.satisfactionOptimization.benefit3'),
        t('solutions.customerSupport.solutions.satisfactionOptimization.benefit4')
      ],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    }
  ];

  const useCases = [
    {
      title: t('solutions.customerSupport.useCases.ecommerce.title'),
      scenario: t('solutions.customerSupport.useCases.ecommerce.scenario'),
      solution: t('solutions.customerSupport.useCases.ecommerce.solution')
    },
    {
      title: t('solutions.customerSupport.useCases.saas.title'),
      scenario: t('solutions.customerSupport.useCases.saas.scenario'),
      solution: t('solutions.customerSupport.useCases.saas.solution')
    },
    {
      title: t('solutions.customerSupport.useCases.healthcare.title'),
      scenario: t('solutions.customerSupport.useCases.healthcare.scenario'),
      solution: t('solutions.customerSupport.useCases.healthcare.solution')
    },
    {
      title: t('solutions.customerSupport.useCases.financial.title'),
      scenario: t('solutions.customerSupport.useCases.financial.scenario'),
      solution: t('solutions.customerSupport.useCases.financial.solution')
    }
  ];

  const metrics = [
    {
      metric: t('solutions.customerSupport.metrics.responseTimeReduction'),
      description: t('solutions.customerSupport.metrics.responseTimeDescription'),
      icon: <Clock className="h-6 w-6" />
    },
    {
      metric: t('solutions.customerSupport.metrics.satisfactionScore'),
      description: t('solutions.customerSupport.metrics.satisfactionDescription'),
      icon: <Heart className="h-6 w-6" />
    },
    {
      metric: t('solutions.customerSupport.metrics.costDecrease'),
      description: t('solutions.customerSupport.metrics.costDescription'),
      icon: <BarChart3 className="h-6 w-6" />
    },
    {
      metric: t('solutions.customerSupport.metrics.availability'),
      description: t('solutions.customerSupport.metrics.availabilityDescription'),
      icon: <Shield className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <SEOHelmet {...seoData} />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <Link to="/" className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 mb-8">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  {t('solutions.customerSupport.navigation.backToHome')}
                </Link>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                  {t('solutions.customerSupport.hero.title.deliver')}{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {t('solutions.customerSupport.hero.title.exceptionalSupport')}
                  </span>{' '}
                  {t('solutions.customerSupport.hero.title.atScale')}
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700 mb-8">
                  {t('solutions.customerSupport.hero.subtitle')}
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  {t('solutions.customerSupport.hero.description')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://seax.seasalt.ai/signup"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                  >
                    {t('solutions.customerSupport.hero.cta.primary')}
                  </a>
                  <a
                    href={getMeetingUrl(i18n.language)}
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                  >
                    {t('solutions.customerSupport.hero.cta.secondary')}
                  </a>
                </div>
              </div>
              
              <div className="mt-12 lg:mt-0">
                <div className="relative">
                  <div className="bg-white rounded-2xl shadow-2xl p-6">
                    <div className="flex items-center mb-4">
                      <Headphones className="h-8 w-8 text-blue-600 mr-3" />
                      <h3 className="text-lg font-semibold">{t('solutions.customerSupport.hero.dashboard.title')}</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
                        <p className="text-sm font-medium text-green-800">{t('solutions.customerSupport.hero.dashboard.aiResolved')}</p>
                        <p className="text-xs text-green-600">{t('solutions.customerSupport.hero.dashboard.resolutionTime')}</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                        <p className="text-sm font-medium text-blue-800">{t('solutions.customerSupport.hero.dashboard.escalated')}</p>
                        <p className="text-xs text-blue-600">{t('solutions.customerSupport.hero.dashboard.complexIssues')}</p>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-500">
                        <p className="text-sm font-medium text-purple-800">{t('solutions.customerSupport.hero.dashboard.satisfaction')}</p>
                        <p className="text-xs text-purple-600">{t('solutions.customerSupport.hero.dashboard.satisfactionUp')}</p>
                      </div>
                      <div className="bg-orange-50 p-3 rounded-lg border-l-4 border-orange-500">
                        <p className="text-sm font-medium text-orange-800">{t('solutions.customerSupport.hero.dashboard.responseTime')}</p>
                        <p className="text-xs text-orange-600">{t('solutions.customerSupport.hero.dashboard.fasterThanAverage')}</p>
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
                {t('solutions.customerSupport.challenges.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('solutions.customerSupport.challenges.description')}
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
                {t('solutions.customerSupport.solutions.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('solutions.customerSupport.solutions.description')}
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
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">{t('solutions.customerSupport.solutions.keyBenefitsTitle')}</h4>
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

        {/* Use Cases */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('solutions.customerSupport.useCases.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('solutions.customerSupport.useCases.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {useCase.title}
                  </h3>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-600 mb-2">{t('solutions.customerSupport.useCases.challengeLabel')}</h4>
                    <p className="text-gray-700 mb-4">{useCase.scenario}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-blue-600 mb-2">{t('solutions.customerSupport.useCases.solutionLabel')}</h4>
                    <p className="text-gray-700">{useCase.solution}</p>
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
                {t('solutions.customerSupport.metrics.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('solutions.customerSupport.metrics.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {metrics.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300">
                  <div className="text-blue-600 mb-4 mx-auto w-fit">
                    {item.icon}
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              {t('solutions.customerSupport.cta.title')}
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              {t('solutions.customerSupport.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                 href="https://seax.seasalt.ai/signup"
                 className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
               >
                 {t('solutions.customerSupport.cta.primary')}
              </a>
              <a
                href={getMeetingUrl(i18n.language)}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                {t('solutions.customerSupport.cta.secondary')}
              </a>
            </div>
            <p className="text-white opacity-75 mt-6 text-sm">
              {t('solutions.customerSupport.cta.disclaimer')}
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CustomerSupport;