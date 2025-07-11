import React from 'react';
import { ArrowLeft, Check, Star, TrendingUp, Target, Megaphone, BarChart3, Users, Zap, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHelmet from '../../components/SEOHelmet';
import { useTranslation } from 'react-i18next';

const SalesMarketing = () => {
  const { i18n } = useTranslation();
  const canonicalUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/${i18n.language}/solutions/sales-marketing` 
    : `/${i18n.language}/solutions/sales-marketing`;

  const challenges = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Lead Generation & Qualification',
      description: 'Struggling to capture leads across multiple channels and qualify them efficiently',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Conversion Optimization',
      description: 'Missing opportunities to convert prospects due to slow response times',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: <Megaphone className="h-8 w-8" />,
      title: 'Campaign Management',
      description: 'Difficulty managing multi-channel campaigns and tracking their effectiveness',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const solutions = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Intelligent Lead Capture & Qualification',
      description: 'Capture leads from every channel and let AI qualify them instantly',
      benefits: [
        'Capture leads from website, social media, and ads',
        'AI qualifies leads with smart questioning',
        'Automatic lead scoring and prioritization',
        'Instant notifications for hot prospects'
      ],
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Lightning-Fast Response Times',
      description: 'Respond to prospects within seconds, not hours, with AI automation',
      benefits: [
        'Instant responses to all inquiries 24/7',
        'AI books demos and consultations automatically',
        'Smart follow-up sequences that nurture leads',
        'Seamless handoff to sales reps when ready'
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: <Megaphone className="h-8 w-8" />,
      title: 'Omnichannel Campaign Management',
      description: 'Launch and manage campaigns across SMS, WhatsApp, email, and voice',
      benefits: [
        'Unified campaign management across all channels',
        'Personalized messaging at scale',
        'Real-time campaign performance tracking',
        'Automated A/B testing and optimization'
      ],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    }
  ];

  const useCases = [
    {
      title: 'SaaS Sales Team',
      scenario: 'Generating and qualifying leads for software demos',
      solution: 'AI captures leads from website, qualifies interest level, and books demos automatically'
    },
    {
      title: 'E-commerce Marketing',
      scenario: 'Running promotional campaigns and recovering abandoned carts',
      solution: 'Automated SMS and WhatsApp campaigns with personalized offers and cart recovery'
    },
    {
      title: 'Real Estate Agents',
      scenario: 'Following up on property inquiries and scheduling showings',
      solution: 'AI responds to property questions instantly and books showing appointments'
    },
    {
      title: 'Professional Services',
      scenario: 'Converting consultation requests into booked appointments',
      solution: 'Smart qualification process that books consultations with the right team member'
    }
  ];

  const metrics = [
    {
      metric: '300%',
      description: 'Increase in lead response rate',
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      metric: '45%',
      description: 'Higher conversion rates',
      icon: <Target className="h-6 w-6" />
    },
    {
      metric: '24/7',
      description: 'Lead capture and qualification',
      icon: <Zap className="h-6 w-6" />
    },
    {
      metric: '5x',
      description: 'More qualified leads per month',
      icon: <Star className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* SEO Tags */}
      <SEOHelmet
        title="Sales & Marketing Solutions - Seasalt.ai"
        description="Capture more leads, respond faster, and convert better with intelligent automation that works across every channel. Your prospects get instant responses while you focus on closing deals."
        canonicalUrl={canonicalUrl}
        availableLanguages={['en', 'es', 'zh-TW']}
      />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <Link to="/" className="inline-flex items-center text-gray-600 hover:text-green-600 transition-colors duration-200 mb-8">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back to Home
                </Link>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Turn Every Lead into{' '}
                  <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    Revenue Opportunity
                  </span>
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700 mb-8">
                  AI-Powered Sales & Marketing Automation That Never Sleeps
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Capture more leads, respond faster, and convert better with intelligent automation 
                  that works across every channel. Your prospects get instant responses while you 
                  focus on closing deals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://seax.seasalt.ai/signup"
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                  >
                    Boost Your Conversions
                  </a>
                  <a
                    href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/" className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                  >
                    Book A Demo
                  </a>
                </div>
              </div>
              
              <div className="mt-12 lg:mt-0">
                <div className="relative">
                  <div className="bg-white rounded-2xl shadow-2xl p-6">
                    <div className="flex items-center mb-4">
                      <TrendingUp className="h-8 w-8 text-green-600 mr-3" />
                      <h3 className="text-lg font-semibold">Sales Performance</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
                        <p className="text-sm font-medium text-green-800">🎯 47 new leads captured today</p>
                        <p className="text-xs text-green-600">AI qualified 23 as high-priority</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                        <p className="text-sm font-medium text-blue-800">⚡ Average response time: 12 seconds</p>
                        <p className="text-xs text-blue-600">300% faster than industry average</p>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-500">
                        <p className="text-sm font-medium text-purple-800">📅 15 demos booked automatically</p>
                        <p className="text-xs text-purple-600">While your team was in meetings</p>
                      </div>
                      <div className="bg-orange-50 p-3 rounded-lg border-l-4 border-orange-500">
                        <p className="text-sm font-medium text-orange-800">💰 $24,500 pipeline added this week</p>
                        <p className="text-xs text-orange-600">45% conversion rate improvement</p>
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
                Sales & Marketing Challenges
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Every minute you're not responding to a lead is a minute your competitor might be. 
                Don't let manual processes cost you revenue.
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
                Your AI-Powered Sales Engine
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transform your sales and marketing operations with intelligent automation 
                that captures, qualifies, and converts leads around the clock.
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
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Benefits:</h4>
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
                Real Sales Team Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how sales and marketing teams are using Seasalt.ai to accelerate their growth
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {useCase.title}
                  </h3>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-600 mb-2">CHALLENGE:</h4>
                    <p className="text-gray-700 mb-4">{useCase.scenario}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-green-600 mb-2">SEASALT.AI SOLUTION:</h4>
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
                Sales Performance Impact
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See the measurable impact on your sales and marketing metrics
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
              Ready to Supercharge Your Sales Performance?
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              Join hundreds of sales teams using Seasalt.ai to capture more leads, 
              respond faster, and close more deals with AI automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                 href="https://seax.seasalt.ai/signup"
                 className="bg-white text-green-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
               >
                 Sign Up
              </a>
              <a
                href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
                className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                Book Sales Demo
              </a>
            </div>
            <p className="text-white opacity-75 mt-6 text-sm">
              No credit card required • See results in 24 hours • Cancel anytime
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SalesMarketing;