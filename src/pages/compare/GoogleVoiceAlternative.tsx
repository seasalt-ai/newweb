import { ArrowLeft, Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const GoogleVoiceAlternative = () => {
  const comparisonFeatures = [
    {
      feature: 'System Type',
      seasalt: 'Professional Omni-Channel Contact Center',
      competitor: 'Basic VoIP Service (not a true phone system)',
      seasaltAdvantage: true
    },
    {
      feature: 'Team Collaboration',
      seasalt: 'Shared Inbox, Team Management',
      competitor: 'No Shared Inbox. Designed for individuals, not teams',
      seasaltAdvantage: true
    },
    {
      feature: 'CRM & 3rd Party Integrations',
      seasalt: 'Yes, extensive integrations',
      competitor: 'No. Only integrates with Google Workspace apps',
      seasaltAdvantage: true
    },
    {
      feature: 'Supported Channels',
      seasalt: 'Voice, SMS, WhatsApp, Messenger, Instagram, LINE, Webchat',
      competitor: 'Voice, SMS (US only)',
      seasaltAdvantage: true
    },
    {
      feature: 'Automation (Bots/IVR)',
      seasalt: 'AI Voicebot, Chatbot, Advanced IVR',
      competitor: 'Basic Auto-Attendant only. No other automation',
      seasaltAdvantage: true
    },
    {
      feature: 'Toll-Free Numbers',
      seasalt: 'Yes',
      competitor: 'No',
      seasaltAdvantage: true
    },
    {
      feature: 'Call Analytics',
      seasalt: 'Yes, detailed reporting',
      competitor: 'No. Basic usage logs only',
      seasaltAdvantage: true
    },
    {
      feature: 'Best For',
      seasalt: 'Growing businesses needing a professional, scalable communications platform',
      competitor: 'Solopreneurs or freelancers in the US needing a simple, separate phone number',
      seasaltAdvantage: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 via-white to-green-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/compare-us-overview" className="inline-flex items-center text-gray-600 hover:text-green-600 transition-colors duration-200 mb-8">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Compare Us Overview
            </Link>
            
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Graduating from Google Voice?{' '}
                <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                  Here's the Professional Solution You Need
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Google Voice is a great tool for personal use or solopreneurs, but it's not a true business phone system. 
                As soon as you hire a team, you'll hit a wall. It lacks critical business features like a shared team inbox, 
                call queues, toll-free numbers, and analytics. Most importantly, it has no public API, meaning it cannot 
                integrate with your CRM or other essential business software.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Comparison */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Professional Business System vs. Personal VoIP
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See why growing businesses need more than a basic phone service
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">Seasalt.ai</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Google Voice</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {comparisonFeatures.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.feature}</td>
                        <td className="px-6 py-4 text-center">
                          <div className="flex items-center justify-center">
                            {item.seasaltAdvantage && <Check className="h-5 w-5 text-green-600 mr-2" />}
                            <span className="text-sm text-gray-700">{item.seasalt}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <div className="flex items-center justify-center">
                            {item.seasaltAdvantage && <X className="h-5 w-5 text-red-500 mr-2" />}
                            <span className="text-sm text-gray-700">{item.competitor}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Growth Limitations */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                When You Outgrow Google Voice
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Signs it's time to upgrade to a professional business communications platform
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-red-100 p-3 rounded-lg mb-4">
                  <X className="h-8 w-8 text-red-600 mx-auto" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">You Hired Your First Employee</h3>
                <p className="text-gray-600 text-sm">
                  Google Voice doesn't support shared inboxes or team collaboration. Each person needs their own number.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-red-100 p-3 rounded-lg mb-4">
                  <X className="h-8 w-8 text-red-600 mx-auto" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">You Need CRM Integration</h3>
                <p className="text-gray-600 text-sm">
                  No API means no integration with Salesforce, HubSpot, or any other business tools.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-red-100 p-3 rounded-lg mb-4">
                  <X className="h-8 w-8 text-red-600 mx-auto" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">You Want Professional Features</h3>
                <p className="text-gray-600 text-sm">
                  No call queues, advanced IVR, call analytics, or toll-free numbers available.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-red-100 p-3 rounded-lg mb-4">
                  <X className="h-8 w-8 text-red-600 mx-auto" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">You Need Multiple Channels</h3>
                <p className="text-gray-600 text-sm">
                  Only supports voice and SMS. No WhatsApp, webchat, or social media integration.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-red-100 p-3 rounded-lg mb-4">
                  <X className="h-8 w-8 text-red-600 mx-auto" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">You Want Automation</h3>
                <p className="text-gray-600 text-sm">
                  No AI chatbots, voicebots, or advanced automation capabilities available.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-red-100 p-3 rounded-lg mb-4">
                  <X className="h-8 w-8 text-red-600 mx-auto" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">You Need International Support</h3>
                <p className="text-gray-600 text-sm">
                  Limited international calling and SMS support compared to business platforms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Migration Benefits */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                What You Gain with Seasalt.ai
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The professional features your growing business needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-green-600 mb-6">Team Collaboration</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Shared team inbox for all communications</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Round-robin call distribution</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Team performance analytics</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Conversation handoffs between agents</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-blue-600 mb-6">Professional Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Advanced IVR and call routing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Toll-free numbers available</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Detailed call analytics and reporting</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">CRM and business tool integrations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Upgrade to Professional Communications?
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              Make the switch from Google Voice to a platform built for growing businesses. 
              Keep your existing number and gain powerful new capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                 href="https://seax.seasalt.ai/signup"
                 className="bg-white text-green-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
               >
                 Sign Up
              </a>
              <a
                href="#migration"
                className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                Learn About Migration
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GoogleVoiceAlternative;