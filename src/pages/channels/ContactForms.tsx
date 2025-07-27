import { useEffect } from 'react';
import { FileText, Zap, Users, BarChart3, Globe, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ContactForms = () => {
  const { i18n } = useTranslation();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const platforms = [
    {
      name: 'MailerLite',
      description: 'Seamless lead sync from MailerLite contact forms',
      icon: '📧',
      color: 'bg-green-50 border-green-200'
    },
    {
      name: 'Mailchimp',
      description: 'Direct integration with Mailchimp signup forms',
      icon: '🐵',
      color: 'bg-yellow-50 border-yellow-200'
    },
    {
      name: 'Constant Contact',
      description: 'Lead capture from Constant Contact forms',
      icon: '📮',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      name: 'HubSpot',
      description: 'Advanced form integration with HubSpot marketing',
      icon: '🔶',
      color: 'bg-orange-50 border-orange-200'
    },
    {
      name: 'Custom Forms',
      description: 'Support for any website contact form via API',
      icon: '⚙️',
      color: 'bg-purple-50 border-purple-200'
    },
    {
      name: 'WordPress',
      description: 'Native integration with WordPress contact forms',
      icon: '📝',
      color: 'bg-gray-50 border-gray-200'
    }
  ];

  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Instant Engagement',
      description: 'AI agent responds to form submissions immediately, while leads are hot'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Lead Qualification',
      description: 'Automated follow-up questions to qualify prospects before human handoff'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Multi-Channel Follow-up',
      description: 'Continue conversations via WhatsApp, SMS, or phone seamlessly'
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Conversion Tracking',
      description: 'Monitor form-to-customer conversion rates and optimize performance'
    }
  ];

  const useCases = [
    {
      title: 'Newsletter Signups',
      description: 'Engage new subscribers with welcome conversations',
      example: '"Thanks for subscribing! What topics interest you most?"'
    },
    {
      title: 'Demo Requests',
      description: 'Instantly qualify and schedule product demonstrations',
      example: '"I can schedule your demo right now. What\'s your preferred time?"'
    },
    {
      title: 'Contact Inquiries',
      description: 'Provide immediate responses to general inquiries',
      example: '"I\'m here to help! What specific information do you need?"'
    },
    {
      title: 'Lead Magnets',
      description: 'Follow up on content downloads with personalized outreach',
      example: '"Did you find the guide helpful? I can answer any questions!"'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <Link to={`/${i18n.language}/channels-overview`} className="inline-flex items-center text-gray-600 hover:text-gray-700 transition-colors duration-200 mb-8">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back to Channels
                </Link>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Turn Contact Forms into{' '}
                  <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                    Conversations
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Automatically capture leads from your email marketing forms and engage them instantly 
                  with AI-powered conversations. Works with MailerLite, HubSpot, Mailchimp, and more.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://chat.seasalt.ai/gpt/signup"
                    className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                  >
                    Connect Your Forms
                  </a>
                  <a
                    href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
                    className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                  >
                    See Demo
                  </a>
                </div>
              </div>
              
              <div className="mt-12 lg:mt-0">
                <div className="relative">
                  <div className="bg-white rounded-2xl shadow-2xl p-6">
                    <div className="flex items-center mb-4">
                      <FileText className="h-8 w-8 text-gray-600 mr-3" />
                      <h3 className="text-lg font-semibold">Form Integration</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-gray-500">
                        <p className="text-sm font-medium text-gray-800">📝 New Form Submission</p>
                        <p className="text-xs text-gray-600">Sarah Johnson • sarah@email.com</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm text-blue-700">AI: "Hi Sarah! Thanks for your interest. I can help you get started right away. What's your main goal?"</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-sm text-green-700">Sarah: "I want to improve my email marketing"</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm text-blue-700">AI: "Perfect! I can schedule a 15-min strategy call with our expert. Are you free tomorrow at 2 PM?"</p>
                      </div>
                      <div className="bg-orange-50 p-3 rounded-lg">
                        <p className="text-xs text-orange-600">✅ Meeting scheduled automatically</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Supported Platforms */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Supported Platforms
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Seamless integration with all major email marketing platforms and form builders
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {platforms.map((platform, index) => (
                <div key={index} className={`p-6 rounded-2xl border-2 ${platform.color} hover:shadow-lg transition-all duration-300`}>
                  <div className="text-4xl mb-4">{platform.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {platform.name}
                  </h3>
                  <p className="text-gray-600">
                    {platform.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lead Management Features */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Lead Management Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Turn form submissions into qualified leads with intelligent automation
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-gray-600 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Use Cases
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how different types of forms can be enhanced with AI conversations
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {useCase.description}
                  </p>
                  <div className="bg-white p-3 rounded-lg border-l-4 border-gray-400">
                    <p className="text-sm text-gray-700 italic">{useCase.example}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Benefits */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-12 shadow-xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Integration Benefits
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  See the immediate impact of connecting your forms to conversational AI
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-800">85%</div>
                  <div className="text-sm text-gray-600">Higher response rates</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">3x</div>
                  <div className="text-sm text-green-700">Faster lead qualification</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">60%</div>
                  <div className="text-sm text-blue-700">More qualified meetings</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">24/7</div>
                  <div className="text-sm text-purple-700">Lead engagement</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Supercharge Your Forms?
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              Connect your contact forms to Seasalt.ai and start converting more leads 
              with instant AI-powered conversations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://seax.seasalt.ai/signup"
                className="bg-white text-gray-800 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                Connect Forms Now
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactForms;