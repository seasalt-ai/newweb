import { ArrowLeft, Check, Star, TrendingUp, Target, Megaphone, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHelmet from '../../components/SEOHelmet';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES } from '../../constants/languages';
import { MEETING_URL, getMeetingUrl } from '../../constants/urls';

const SalesMarketing = () => {
  const { i18n, t } = useTranslation();
  const canonicalUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/${i18n.language}/solutions/sales-marketing` 
    : `/${i18n.language}/solutions/sales-marketing`;

  const challenges = [
    {
      icon: <Target className="h-8 w-8" />,
      title: t('solutions.salesMarketing.challenges.leadGeneration.title'),
      description: t('solutions.salesMarketing.challenges.leadGeneration.description'),
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: t('solutions.salesMarketing.challenges.conversion.title'),
      description: t('solutions.salesMarketing.challenges.conversion.description'),
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: <Megaphone className="h-8 w-8" />,
      title: t('solutions.salesMarketing.challenges.campaignManagement.title'),
      description: t('solutions.salesMarketing.challenges.campaignManagement.description'),
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const solutions = [
    {
      icon: <Target className="h-8 w-8" />,
      title: t('solutions.salesMarketing.solutions.leadCapture.title'),
      description: t('solutions.salesMarketing.solutions.leadCapture.description'),
      benefits: [
        t('solutions.salesMarketing.solutions.leadCapture.benefit1'),
        t('solutions.salesMarketing.solutions.leadCapture.benefit2'),
        t('solutions.salesMarketing.solutions.leadCapture.benefit3'),
        t('solutions.salesMarketing.solutions.leadCapture.benefit4')
      ],
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: t('solutions.salesMarketing.solutions.responseTime.title'),
      description: t('solutions.salesMarketing.solutions.responseTime.description'),
      benefits: [
        t('solutions.salesMarketing.solutions.responseTime.benefit1'),
        t('solutions.salesMarketing.solutions.responseTime.benefit2'),
        t('solutions.salesMarketing.solutions.responseTime.benefit3'),
        t('solutions.salesMarketing.solutions.responseTime.benefit4')
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: <Megaphone className="h-8 w-8" />,
      title: t('solutions.salesMarketing.solutions.omnichannel.title'),
      description: t('solutions.salesMarketing.solutions.omnichannel.description'),
      benefits: [
        t('solutions.salesMarketing.solutions.omnichannel.benefit1'),
        t('solutions.salesMarketing.solutions.omnichannel.benefit2'),
        t('solutions.salesMarketing.solutions.omnichannel.benefit3'),
        t('solutions.salesMarketing.solutions.omnichannel.benefit4')
      ],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    }
  ];

  const useCases = [
    {
      title: t('solutions.salesMarketing.useCases.saas.title'),
      scenario: t('solutions.salesMarketing.useCases.saas.challenge'),
      solution: t('solutions.salesMarketing.useCases.saas.solution')
    },
    {
      title: t('solutions.salesMarketing.useCases.ecommerce.title'),
      scenario: t('solutions.salesMarketing.useCases.ecommerce.challenge'),
      solution: t('solutions.salesMarketing.useCases.ecommerce.solution')
    },
    {
      title: t('solutions.salesMarketing.useCases.realEstate.title'),
      scenario: t('solutions.salesMarketing.useCases.realEstate.challenge'),
      solution: t('solutions.salesMarketing.useCases.realEstate.solution')
    },
    {
      title: t('solutions.salesMarketing.useCases.professionalServices.title'),
      scenario: t('solutions.salesMarketing.useCases.professionalServices.challenge'),
      solution: t('solutions.salesMarketing.useCases.professionalServices.solution')
    }
  ];

  const metrics = [
    {
      metric: '300%',
      description: t('solutions.salesMarketing.metrics.responseRate'),
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      metric: '45%',
      description: t('solutions.salesMarketing.metrics.conversionRate'),
      icon: <Target className="h-6 w-6" />
    },
    {
      metric: '24/7',
      description: t('solutions.salesMarketing.metrics.availability'),
      icon: <Zap className="h-6 w-6" />
    },
    {
      metric: '5x',
      description: t('solutions.salesMarketing.metrics.qualifiedLeads'),
      icon: <Star className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* SEO Tags */}
      <SEOHelmet
        title={t('solutions.salesMarketing.seo.title')}
        description={t('solutions.salesMarketing.seo.description')}
        favicon="/seasalt-ai-favicon.ico"
        canonicalUrl={canonicalUrl}
        availableLanguages={SUPPORTED_LANGUAGES}
      />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <Link to="/" className="inline-flex items-center text-gray-600 hover:text-green-600 transition-colors duration-200 mb-8">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  {t('solutions.salesMarketing.navigation.backToHome')}
                </Link>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                  {t('solutions.salesMarketing.hero.title1')}{' '}
                  <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    {t('solutions.salesMarketing.hero.titleGradient')}
                  </span>
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700 mb-8">
                  {t('solutions.salesMarketing.hero.subtitle')}
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  {t('solutions.salesMarketing.hero.description')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://seax.seasalt.ai/signup"
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                  >
                    {t('solutions.salesMarketing.hero.cta.primary')}
                  </a>
                  <a
                    href={getMeetingUrl(i18n.language)} className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                  >
                    {t('solutions.salesMarketing.hero.cta.secondary')}
                  </a>
                </div>
              </div>
              
              <div className="mt-12 lg:mt-0">
                <div className="relative">
                  <div className="bg-white rounded-2xl shadow-2xl p-6">
                    <div className="flex items-center mb-4">
                      <TrendingUp className="h-8 w-8 text-green-600 mr-3" />
                      <h3 className="text-lg font-semibold">{t('solutions.salesMarketing.hero.dashboard.title')}</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
                        <p className="text-sm font-medium text-green-800">{t('solutions.salesMarketing.hero.dashboard.leads')}</p>
                        <p className="text-xs text-green-600">{t('solutions.salesMarketing.hero.dashboard.leadsQualified')}</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                        <p className="text-sm font-medium text-blue-800">{t('solutions.salesMarketing.hero.dashboard.responseTime')}</p>
                        <p className="text-xs text-blue-600">{t('solutions.salesMarketing.hero.dashboard.responseTimeBenefit')}</p>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-500">
                        <p className="text-sm font-medium text-purple-800">{t('solutions.salesMarketing.hero.dashboard.demos')}</p>
                        <p className="text-xs text-purple-600">{t('solutions.salesMarketing.hero.dashboard.demosNote')}</p>
                      </div>
                      <div className="bg-orange-50 p-3 rounded-lg border-l-4 border-orange-500">
                        <p className="text-sm font-medium text-orange-800">{t('solutions.salesMarketing.hero.dashboard.pipeline')}</p>
                        <p className="text-xs text-orange-600">{t('solutions.salesMarketing.hero.dashboard.conversion')}</p>
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
                {t('solutions.salesMarketing.challenges.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('solutions.salesMarketing.challenges.description')}
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
                {t('solutions.salesMarketing.solutions.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('solutions.salesMarketing.solutions.description')}
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
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">{t('solutions.salesMarketing.solutions.keyBenefits')}</h4>
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
                {t('solutions.salesMarketing.useCases.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('solutions.salesMarketing.useCases.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {useCase.title}
                  </h3>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-600 mb-2">{t('solutions.salesMarketing.useCases.challengeLabel')}</h4>
                    <p className="text-gray-700 mb-4">{useCase.scenario}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-green-600 mb-2">{t('solutions.salesMarketing.useCases.solutionLabel')}</h4>
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
                {t('solutions.salesMarketing.metrics.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('solutions.salesMarketing.metrics.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {metrics.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300">
                  <div className="text-green-600 mb-4 mx-auto w-fit">
                    {item.icon}
                  </div>
                  <div className="text-3xl font-bold text-green-600 mb-2">
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
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              {t('solutions.salesMarketing.cta.title')}
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              {t('solutions.salesMarketing.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                 href="https://seax.seasalt.ai/signup"
                 className="bg-white text-green-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
               >
                 {t('solutions.salesMarketing.cta.primary')}
              </a>
              <a
                href={getMeetingUrl(i18n.language)}
                className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                {t('solutions.salesMarketing.cta.secondary')}
              </a>
            </div>
            <p className="text-white opacity-75 mt-6 text-sm">
              {t('solutions.salesMarketing.cta.disclaimer')}
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SalesMarketing;