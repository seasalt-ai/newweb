import { ArrowLeft, Check, Headphones, Clock, Users, Shield, BarChart3, Zap, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHelmet from '../../components/SEOHelmet';
import { useTranslation } from 'react-i18next';

const CustomerSupport = () => {
  const { i18n } = useTranslation();
  const canonicalUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/${i18n.language}/solutions/customer-support` 
    : `/${i18n.language}/solutions/customer-support`;

  const challenges = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Response Time Pressure',
      description: 'Customers expect instant responses, but your team can\'t be available 24/7',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Scaling Support Team',
      description: 'Growing customer base requires more agents, but hiring is expensive and slow',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Repetitive Inquiries',
      description: 'Agents spend too much time on routine questions instead of complex issues',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    }
  ];

  const solutions = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: '24/7 Instant Response System',
      description: 'AI handles customer inquiries immediately, any time of day or night',
      benefits: [
        'Instant responses to common questions',
        'AI resolves 80% of routine inquiries',
        'Seamless escalation to human agents',
        'Consistent service quality around the clock'
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Smart Agent Productivity',
      description: 'Empower your human agents with AI assistance and unified customer context',
      benefits: [
        'Complete customer history in one view',
        'AI suggests responses and solutions',
        'Automatic ticket routing and prioritization',
        'Real-time sentiment analysis and alerts'
      ],
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Customer Satisfaction Optimization',
      description: 'Deliver exceptional experiences that turn customers into advocates',
      benefits: [
        'Proactive issue resolution and follow-up',
        'Personalized support based on customer history',
        'Multi-channel consistency across all touchpoints',
        'Continuous improvement through AI learning'
      ],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    }
  ];

  const useCases = [
    {
      title: 'E-commerce Support',
      scenario: 'Handling order status, returns, and product questions at scale',
      solution: 'AI instantly provides order updates and processes returns, escalating complex issues to humans'
    },
    {
      title: 'SaaS Customer Success',
      scenario: 'Supporting users with technical questions and feature guidance',
      solution: 'AI provides instant help articles and tutorials, books technical support calls when needed'
    },
    {
      title: 'Healthcare Patient Support',
      scenario: 'Managing appointment scheduling and basic health inquiries',
      solution: 'HIPAA-compliant AI handles scheduling and basic questions, routes urgent matters to staff'
    },
    {
      title: 'Financial Services',
      scenario: 'Answering account questions while maintaining security compliance',
      solution: 'Secure AI verifies identity and provides account info, escalates sensitive matters appropriately'
    }
  ];

  const metrics = [
    {
      metric: '80%',
      description: 'Reduction in response time',
      icon: <Clock className="h-6 w-6" />
    },
    {
      metric: '95%',
      description: 'Customer satisfaction score',
      icon: <Heart className="h-6 w-6" />
    },
    {
      metric: '60%',
      description: 'Decrease in support costs',
      icon: <BarChart3 className="h-6 w-6" />
    },
    {
      metric: '24/7',
      description: 'Availability without overtime',
      icon: <Shield className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* SEO Tags */}
      <SEOHelmet
        title="Customer Support Solutions - Seasalt.ai"
        description="Transform your customer support with intelligent automation that handles routine inquiries instantly while empowering your human agents to focus on complex, high-value interactions."
        favicon="/seasalt-ai-favicon.ico"
        canonicalUrl={canonicalUrl}
        availableLanguages={['en', 'es', 'zh-TW']}
      />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <Link to="/" className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 mb-8">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back to Home
                </Link>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Deliver{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Exceptional Support
                  </span>{' '}
                  at Scale
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700 mb-8">
                  AI-Powered Customer Support That Never Sleeps
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Transform your customer support with intelligent automation that handles routine 
                  inquiries instantly while empowering your human agents to focus on complex, 
                  high-value interactions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://seax.seasalt.ai/signup"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                  >
                    Improve Support Now
                  </a>
                  <a
                    href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                  >
                    See Demo
                  </a>
                </div>
              </div>
              
              <div className="mt-12 lg:mt-0">
                <div className="relative">
                  <div className="bg-white rounded-2xl shadow-2xl p-6">
                    <div className="flex items-center mb-4">
                      <Headphones className="h-8 w-8 text-blue-600 mr-3" />
                      <h3 className="text-lg font-semibold">Support Dashboard</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
                        <p className="text-sm font-medium text-green-800">🤖 AI resolved 156 tickets today</p>
                        <p className="text-xs text-green-600">Average resolution time: 23 seconds</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                        <p className="text-sm font-medium text-blue-800">👥 12 tickets escalated to humans</p>
                        <p className="text-xs text-blue-600">Complex issues requiring expertise</p>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-500">
                        <p className="text-sm font-medium text-purple-800">😊 Customer satisfaction: 96%</p>
                        <p className="text-xs text-purple-600">Up 15% from last month</p>
                      </div>
                      <div className="bg-orange-50 p-3 rounded-lg border-l-4 border-orange-500">
                        <p className="text-sm font-medium text-orange-800">⏱️ Average response time: 8 seconds</p>
                        <p className="text-xs text-orange-600">98% faster than industry average</p>
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
                Customer Support Challenges
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Modern customers expect instant, personalized support. Traditional support models 
                struggle to meet these expectations while controlling costs.
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
                Your AI-Powered Support Solution
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Combine the efficiency of AI automation with the empathy of human agents 
                to deliver exceptional customer experiences at any scale.
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
                Support Team Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how customer support teams are using Seasalt.ai to improve efficiency and satisfaction
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

        {/* Metrics Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Support Performance Impact
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Measurable improvements in efficiency, satisfaction, and cost management
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
              Ready to Transform Your Customer Support?
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              Join hundreds of support teams using Seasalt.ai to deliver faster, 
              more efficient, and more satisfying customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                 href="https://seax.seasalt.ai/signup"
                 className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
               >
                 Sign Up
              </a>
              <a
                href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                Book Support Demo
              </a>
            </div>
            <p className="text-white opacity-75 mt-6 text-sm">
              No credit card required • Improve satisfaction in 24 hours • Cancel anytime
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CustomerSupport;