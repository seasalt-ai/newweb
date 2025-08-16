import { ArrowLeft, Check, Star, Users, Zap, BarChart3, Clock, Shield, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHelmet from '../../components/SEOHelmet';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES } from '../../constants/languages';
import { MEETING_URL, getMeetingUrl } from '../../constants/urls';

const SmeOwners = () => {
  const { i18n, t } = useTranslation();
  const canonicalUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/${i18n.language}/solutions/sme-owners` 
    : `/${i18n.language}/solutions/sme-owners`;

  const challenges = [
    {
      icon: <Users className="h-8 w-8" />,
      title: t('solutions.smeOwners.challenges.wearingMultipleHats.title'),
      description: t('solutions.smeOwners.challenges.wearingMultipleHats.description'),
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: t('solutions.smeOwners.challenges.limitedTimeResources.title'),
      description: t('solutions.smeOwners.challenges.limitedTimeResources.description'),
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: t('solutions.smeOwners.challenges.scalingChallenges.title'),
      description: t('solutions.smeOwners.challenges.scalingChallenges.description'),
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const solutions = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: t('solutions.smeOwners.solutions.aiAutomation.title'),
      description: t('solutions.smeOwners.solutions.aiAutomation.description'),
      benefits: [
        t('solutions.smeOwners.solutions.aiAutomation.benefits.routineQuestions'),
        t('solutions.smeOwners.solutions.aiAutomation.benefits.bookAppointments'),
        t('solutions.smeOwners.solutions.aiAutomation.benefits.qualifyLeads'),
        t('solutions.smeOwners.solutions.aiAutomation.benefits.instantResponses')
      ],
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: t('solutions.smeOwners.solutions.unifiedView.title'),
      description: t('solutions.smeOwners.solutions.unifiedView.description'),
      benefits: [
        t('solutions.smeOwners.solutions.unifiedView.benefits.singleInbox'),
        t('solutions.smeOwners.solutions.unifiedView.benefits.conversationHistory'),
        t('solutions.smeOwners.solutions.unifiedView.benefits.neverLoseTrack'),
        t('solutions.smeOwners.solutions.unifiedView.benefits.seamlessHandoffs')
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: t('solutions.smeOwners.solutions.smartMarketing.title'),
      description: t('solutions.smeOwners.solutions.smartMarketing.description'),
      benefits: [
        t('solutions.smeOwners.solutions.smartMarketing.benefits.automatedFollowup'),
        t('solutions.smeOwners.solutions.smartMarketing.benefits.personalizedMessaging'),
        t('solutions.smeOwners.solutions.smartMarketing.benefits.trackPerformance'),
        t('solutions.smeOwners.solutions.smartMarketing.benefits.recoverCarts')
      ],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    }
  ];

  const useCases = [
    {
      title: t('solutions.smeOwners.useCases.soloEntrepreneur.title'),
      scenario: t('solutions.smeOwners.useCases.soloEntrepreneur.scenario'),
      solution: t('solutions.smeOwners.useCases.soloEntrepreneur.solution')
    },
    {
      title: t('solutions.smeOwners.useCases.smallRetailer.title'),
      scenario: t('solutions.smeOwners.useCases.smallRetailer.scenario'),
      solution: t('solutions.smeOwners.useCases.smallRetailer.solution')
    },
    {
      title: t('solutions.smeOwners.useCases.serviceProvider.title'),
      scenario: t('solutions.smeOwners.useCases.serviceProvider.scenario'),
      solution: t('solutions.smeOwners.useCases.serviceProvider.solution')
    },
    {
      title: t('solutions.smeOwners.useCases.growingStartup.title'),
      scenario: t('solutions.smeOwners.useCases.growingStartup.scenario'),
      solution: t('solutions.smeOwners.useCases.growingStartup.solution')
    }
  ];

  const roi = [
    {
      metric: t('solutions.smeOwners.roi.timeSaved.metric'),
      description: t('solutions.smeOwners.roi.timeSaved.description'),
      icon: <Clock className="h-6 w-6" />
    },
    {
      metric: t('solutions.smeOwners.roi.responseRate.metric'),
      description: t('solutions.smeOwners.roi.responseRate.description'),
      icon: <Star className="h-6 w-6" />
    },
    {
      metric: t('solutions.smeOwners.roi.availability.metric'),
      description: t('solutions.smeOwners.roi.availability.description'),
      icon: <Shield className="h-6 w-6" />
    },
    {
      metric: t('solutions.smeOwners.roi.conversationsHandled.metric'),
      description: t('solutions.smeOwners.roi.conversationsHandled.description'),
      icon: <Users className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* SEO Tags */}
      <SEOHelmet
        title={t('solutions.smeOwners.seo.title')}
        description={t('solutions.smeOwners.seo.description')}
        favicon="/seasalt-ai-favicon.ico"
        canonicalUrl={canonicalUrl}
        availableLanguages={SUPPORTED_LANGUAGES}
      />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <Link to="/" className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 mb-8">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  {t('solutions.smeOwners.navigation.backToHome')}
                </Link>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                  {t('solutions.smeOwners.hero.title.part1')}{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {t('solutions.smeOwners.hero.title.part2')}
                  </span>
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700 mb-8">
                  {t('solutions.smeOwners.hero.subtitle')}
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  {t('solutions.smeOwners.hero.description')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://seax.seasalt.ai/signup"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                  >
                    {t('solutions.smeOwners.hero.cta.getAssistant')}
                  </a>
                  <a
                     href={getMeetingUrl(i18n.language)} className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                  >
                    {t('solutions.smeOwners.hero.cta.bookDemo')}
                  </a>
                </div>
              </div>
              
              <div className="mt-12 lg:mt-0">
                <div className="relative">
                  <div className="bg-white rounded-2xl shadow-2xl p-6">
                    <div className="flex items-center mb-4">
                      <Briefcase className="h-8 w-8 text-blue-600 mr-3" />
                      <h3 className="text-lg font-semibold">{t('solutions.smeOwners.hero.dashboard.title')}</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
                        <p className="text-sm font-medium text-green-800">{t('solutions.smeOwners.hero.dashboard.aiHandledInquiries')}</p>
                        <p className="text-xs text-green-600">{t('solutions.smeOwners.hero.dashboard.timeSaved')}</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                        <p className="text-sm font-medium text-blue-800">{t('solutions.smeOwners.hero.dashboard.appointmentsBooked')}</p>
                        <p className="text-xs text-blue-600">{t('solutions.smeOwners.hero.dashboard.whileInMeetings')}</p>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-500">
                        <p className="text-sm font-medium text-purple-800">{t('solutions.smeOwners.hero.dashboard.leadsQualified')}</p>
                        <p className="text-xs text-purple-600">{t('solutions.smeOwners.hero.dashboard.readyForFollowup')}</p>
                      </div>
                      <div className="bg-orange-50 p-3 rounded-lg border-l-4 border-orange-500">
                        <p className="text-sm font-medium text-orange-800">{t('solutions.smeOwners.hero.dashboard.smsCampaign')}</p>
                        <p className="text-xs text-orange-600">{t('solutions.smeOwners.hero.dashboard.newCustomers')}</p>
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
                {t('solutions.smeOwners.challenges.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('solutions.smeOwners.challenges.description')}
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
                {t('solutions.smeOwners.solutions.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('solutions.smeOwners.solutions.description')}
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
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">{t('solutions.smeOwners.solutions.keyBenefits')}</h4>
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
                {t('solutions.smeOwners.useCases.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('solutions.smeOwners.useCases.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {useCase.title}
                  </h3>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-600 mb-2">{t('solutions.smeOwners.useCases.challengeLabel')}</h4>
                    <p className="text-gray-700 mb-4">{useCase.scenario}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-blue-600 mb-2">{t('solutions.smeOwners.useCases.solutionLabel')}</h4>
                    <p className="text-gray-700">{useCase.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('solutions.smeOwners.roi.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('solutions.smeOwners.roi.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {roi.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300">
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
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              {t('solutions.smeOwners.cta.title')}
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              {t('solutions.smeOwners.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://seax.seasalt.ai/signup"
                className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                {t('solutions.smeOwners.cta.startTrial')}
              </a>
              <a
                href={getMeetingUrl(i18n.language)}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                {t('solutions.smeOwners.cta.scheduleDemo')}
              </a>
            </div>
            <p className="text-white opacity-75 mt-6 text-sm">
              {t('solutions.smeOwners.cta.disclaimer')}
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SmeOwners;