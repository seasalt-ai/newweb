import React from 'react';
import { ArrowLeft, Check, Star, Users, Zap, BarChart3, Clock, Shield, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHelmet from '../../components/SEOHelmet';
import { useTranslation } from 'react-i18next';

const SmeOwners = () => {
  const { i18n } = useTranslation();
  const canonicalUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/${i18n.language}/solutions/sme-owners` 
    : `/${i18n.language}/solutions/sme-owners`;

  const challenges = [
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Wearing Multiple Hats',
      description: 'Managing sales, marketing, and support simultaneously while trying to grow your business',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Limited Time & Resources',
      description: 'Every minute counts when you\'re running a small business with a lean team',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Scaling Challenges',
      description: 'Growing customer demands without proportional increase in team size or budget',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const solutions = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'AI-Powered Automation',
      description: 'Let AI handle routine inquiries, appointment booking, and lead qualification 24/7',
      benefits: [
        'Automate 80% of routine customer questions',
        'Book appointments while you sleep',
        'Qualify leads before they reach you',
        'Provide instant responses across all channels'
      ],
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Unified Customer View',
      description: 'See every customer interaction in one place, whether they call, text, or chat',
      benefits: [
        'Single inbox for all customer communications',
        'Complete conversation history across channels',
        'Never lose track of customer context',
        'Seamless handoffs between AI and human'
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Smart Marketing Campaigns',
      description: 'Run targeted campaigns across SMS, WhatsApp, and email with AI assistance',
      benefits: [
        'Automated follow-up sequences',
        'Personalized messaging at scale',
        'Track campaign performance in real-time',
        'Recover abandoned carts automatically'
      ],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    }
  ];

  const useCases = [
    {
      title: 'The Solo Entrepreneur',
      scenario: 'Running a consulting business while managing all client communications',
      solution: 'AI handles initial inquiries and books consultations, freeing you to focus on delivery'
    },
    {
      title: 'The Small Retailer',
      scenario: 'Managing online orders, customer support, and marketing campaigns',
      solution: 'Automated order updates, instant support responses, and targeted marketing campaigns'
    },
    {
      title: 'The Service Provider',
      scenario: 'Juggling appointment scheduling, customer questions, and follow-ups',
      solution: 'AI books appointments, answers FAQs, and sends automated reminders'
    },
    {
      title: 'The Growing Startup',
      scenario: 'Scaling customer communications without hiring a full support team',
      solution: 'AI handles volume growth while maintaining personal touch with smart handoffs'
    }
  ];

  const roi = [
    {
      metric: '5+ Hours',
      description: 'Saved per week on routine communications',
      icon: <Clock className="h-6 w-6" />
    },
    {
      metric: '40%',
      description: 'Increase in lead response rate',
      icon: <Star className="h-6 w-6" />
    },
    {
      metric: '24/7',
      description: 'Customer service without hiring night staff',
      icon: <Shield className="h-6 w-6" />
    },
    {
      metric: '3x',
      description: 'More conversations handled with same team',
      icon: <Users className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* SEO Tags */}
      <SEOHelmet
        title="SME Owner Solutions - Seasalt.ai"
        description="You're the CEO, sales team, marketing department, and customer support all in one. Seasalt.ai gives you an AI assistant that handles routine communications so you can focus on growing your business."
        favicon="/seasalt-ai-favicon.ico"
        canonicalUrl={canonicalUrl}
        availableLanguages={['en', 'es', 'zh-TW']}
      />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <Link to="/" className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 mb-8">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back to Home
                </Link>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Stop Juggling.{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Start Scaling.
                  </span>
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700 mb-8">
                  The AI-Powered Communication Hub for SME Owners Who Wear Multiple Hats
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  You're the CEO, sales team, marketing department, and customer support all in one. 
                  Seasalt.ai gives you an AI assistant that handles routine communications so you can 
                  focus on growing your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://seax.seasalt.ai/signup"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                  >
                    Get Your AI Assistant
                  </a>
                  <a
                     href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                  >
                    Book A Demo
                  </a>
                </div>
              </div>
              
              <div className="mt-12 lg:mt-0">
                <div className="relative">
                  <div className="bg-white rounded-2xl shadow-2xl p-6">
                    <div className="flex items-center mb-4">
                      <Briefcase className="h-8 w-8 text-blue-600 mr-3" />
                      <h3 className="text-lg font-semibold">SME Owner Dashboard</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
                        <p className="text-sm font-medium text-green-800">🤖 AI handled 23 inquiries today</p>
                        <p className="text-xs text-green-600">Saved you 3.5 hours</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                        <p className="text-sm font-medium text-blue-800">📅 5 appointments booked automatically</p>
                        <p className="text-xs text-blue-600">While you were in meetings</p>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-500">
                        <p className="text-sm font-medium text-purple-800">💬 12 leads qualified and prioritized</p>
                        <p className="text-xs text-purple-600">Ready for your personal follow-up</p>
                      </div>
                      <div className="bg-orange-50 p-3 rounded-lg border-l-4 border-orange-500">
                        <p className="text-sm font-medium text-orange-800">📱 SMS campaign: 89% open rate</p>
                        <p className="text-xs text-orange-600">3 new customers acquired</p>
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
                The SME Owner's Dilemma
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Running a small business means wearing multiple hats. But that shouldn't mean 
                drowning in routine communications.
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
                Your AI-Powered Solution
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Seasalt.ai acts as your virtual team member, handling routine tasks so you can 
                focus on what only you can do - growing your business.
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
                Real SME Owner Scenarios
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how other business owners like you are using Seasalt.ai to scale their operations
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
                    <h4 className="text-sm font-semibold text-blue-600 mb-2">SEASALT.AI SOLUTION:</h4>
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
                The SME Owner's ROI
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See the immediate impact on your business operations and growth
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
              Ready to Stop Juggling and Start Scaling?
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of SME owners who've reclaimed their time and scaled their 
              customer communications with AI automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://seax.seasalt.ai/signup"
                className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                Start Your Free Trial
              </a>
              <a
                href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                Schedule Personal Demo
              </a>
            </div>
            <p className="text-white opacity-75 mt-6 text-sm">
              No credit card required • Setup in under 10 minutes • Cancel anytime
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SmeOwners;