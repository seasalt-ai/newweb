import React from 'react';
import { ArrowLeft, Check, Star, Bot, Zap, Cog, Brain, Clock, BarChart3, Shield, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEOHelmet from '../../components/SEOHelmet';
import { useTranslation } from 'react-i18next';

const AIAutomation = () => {
  const { i18n } = useTranslation();
  const canonicalUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/${i18n.language}/solutions/ai-automation` 
    : `/${i18n.language}/solutions/ai-automation`;

  const challenges = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Manual Repetitive Tasks',
      description: 'Your team spends too much time on routine tasks that could be automated',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Scaling Limitations',
      description: 'Growth is limited by human capacity rather than market opportunity',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'Inconsistent Experiences',
      description: 'Customer experience varies based on which team member handles the interaction',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    }
  ];

  const solutions = [
    {
      icon: <Bot className="h-8 w-8" />,
      title: 'Intelligent Voice & Chat Automation',
      description: 'AI agents that understand context and provide human-like interactions',
      benefits: [
        'Natural language processing for complex queries',
        'Voice and text conversations across all channels',
        'Context-aware responses based on customer history',
        'Seamless handoff to humans when needed'
      ],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      icon: <Workflow className="h-8 w-8" />,
      title: 'Smart Workflow Automation',
      description: 'Automate complex business processes with intelligent decision-making',
      benefits: [
        'Automated lead qualification and routing',
        'Intelligent appointment scheduling and management',
        'Dynamic pricing and proposal generation',
        'Automated follow-up sequences and nurturing'
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'Continuous Learning & Optimization',
      description: 'AI that gets smarter over time, improving performance automatically',
      benefits: [
        'Machine learning from every customer interaction',
        'Automatic optimization of response accuracy',
        'Predictive analytics for proactive customer service',
        'Real-time performance monitoring and adjustment'
      ],
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    }
  ];

  const automationTypes = [
    {
      title: 'Customer Service Automation',
      description: 'AI handles routine inquiries, escalates complex issues',
      examples: ['Order status updates', 'FAQ responses', 'Basic troubleshooting', 'Account information']
    },
    {
      title: 'Sales Process Automation',
      description: 'Automate lead qualification, follow-ups, and scheduling',
      examples: ['Lead scoring', 'Demo booking', 'Proposal generation', 'Follow-up sequences']
    },
    {
      title: 'Marketing Campaign Automation',
      description: 'Intelligent campaigns that adapt based on customer behavior',
      examples: ['Personalized messaging', 'Optimal send times', 'A/B testing', 'Performance optimization']
    },
    {
      title: 'Operational Automation',
      description: 'Streamline internal processes and workflows',
      examples: ['Data entry', 'Report generation', 'Task assignment', 'Quality monitoring']
    }
  ];

  const metrics = [
    {
      metric: '80%',
      description: 'Reduction in manual tasks',
      icon: <Cog className="h-6 w-6" />
    },
    {
      metric: '24/7',
      description: 'Automated operations',
      icon: <Clock className="h-6 w-6" />
    },
    {
      metric: '95%',
      description: 'Accuracy rate',
      icon: <Star className="h-6 w-6" />
    },
    {
      metric: '3x',
      description: 'Faster processing',
      icon: <Zap className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* SEO Tags */}
      <SEOHelmet
        title="AI Automation Solutions - Seasalt.ai"
        description="Transform your business operations with AI that doesn't just follow rules—it understands context, makes intelligent decisions, and continuously improves to deliver exceptional results."
        canonicalUrl={canonicalUrl}
        availableLanguages={['en', 'es', 'zh-TW']}
      />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <Link to="/" className="inline-flex items-center text-gray-600 hover:text-purple-600 transition-colors duration-200 mb-8">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back to Home
                </Link>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Unleash the Power of{' '}
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    AI Automation
                  </span>
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700 mb-8">
                  Intelligent Automation That Thinks, Learns, and Scales
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Transform your business operations with AI that doesn't just follow rules—it 
                  understands context, makes intelligent decisions, and continuously improves 
                  to deliver exceptional results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#signup"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                  >
                    Start Automating
                  </a>
                  <a
                    href="#demo"
                    className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                  >
                    See AI in Action
                  </a>
                </div>
              </div>
              
              <div className="mt-12 lg:mt-0">
                <div className="relative">
                  <div className="bg-white rounded-2xl shadow-2xl p-6">
                    <div className="flex items-center mb-4">
                      <Bot className="h-8 w-8 text-purple-600 mr-3" />
                      <h3 className="text-lg font-semibold">AI Automation Center</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-500">
                        <p className="text-sm font-medium text-purple-800">🧠 AI processed 342 tasks today</p>
                        <p className="text-xs text-purple-600">Saved 8.5 hours of manual work</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                        <p className="text-sm font-medium text-blue-800">⚡ 23 workflows automated</p>
                        <p className="text-xs text-blue-600">From lead capture to customer onboarding</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
                        <p className="text-sm font-medium text-green-800">📈 97% accuracy rate</p>
                        <p className="text-xs text-green-600">Continuously improving through ML</p>
                      </div>
                      <div className="bg-orange-50 p-3 rounded-lg border-l-4 border-orange-500">
                        <p className="text-sm font-medium text-orange-800">🎯 $12,400 cost savings this month</p>
                        <p className="text-xs text-orange-600">Through intelligent automation</p>
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
                Automation Challenges
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Traditional automation is rigid and limited. Modern businesses need intelligent 
                automation that adapts, learns, and scales with their growth.
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
                Intelligent AI Automation
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Go beyond simple rule-based automation with AI that understands context, 
                makes intelligent decisions, and continuously improves performance.
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
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Capabilities:</h4>
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
                Automation Across Your Business
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From customer service to sales, marketing to operations—AI automation 
                transforms every aspect of your business.
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
                    <h4 className="text-sm font-semibold text-purple-600 mb-3">EXAMPLES:</h4>
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
                Automation Performance Impact
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Measurable improvements in efficiency, accuracy, and operational capacity
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
                  Secure & Compliant AI
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Enterprise-grade security and compliance built into every AI automation
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-purple-100 p-4 rounded-2xl w-fit mx-auto mb-4">
                    <Shield className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Protection</h3>
                  <p className="text-gray-600 text-sm">End-to-end encryption and secure data handling</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 p-4 rounded-2xl w-fit mx-auto mb-4">
                    <Check className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Compliance Ready</h3>
                  <p className="text-gray-600 text-sm">HIPAA, GDPR, and industry-specific compliance</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 p-4 rounded-2xl w-fit mx-auto mb-4">
                    <BarChart3 className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Audit Trail</h3>
                  <p className="text-gray-600 text-sm">Complete logging and monitoring of all AI actions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Automate Your Business with AI?
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses using Seasalt.ai to automate operations, 
              reduce costs, and scale efficiently with intelligent AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#signup"
                className="bg-white text-purple-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                Start Free Trial
              </a>
              <a
                href="#demo"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                Book AI Demo
              </a>
            </div>
            <p className="text-white opacity-75 mt-6 text-sm">
              No credit card required • See automation in 24 hours • Cancel anytime
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIAutomation;