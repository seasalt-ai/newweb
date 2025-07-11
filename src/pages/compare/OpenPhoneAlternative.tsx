import React from 'react';
import { ArrowLeft, Check, X, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const OpenPhoneAlternative = () => {
  const comparisonFeatures = [
    {
      feature: 'Platform Type',
      seasalt: 'Omni-Channel Contact Center',
      competitor: 'Business Phone System (VoIP)',
      seasaltAdvantage: true
    },
    {
      feature: 'Supported Channels',
      seasalt: 'Voice, SMS, WhatsApp, Webchat, Social',
      competitor: 'Voice & SMS/MMS only',
      seasaltAdvantage: true
    },
    {
      feature: 'Unified Inbox',
      seasalt: 'Yes, for all channels',
      competitor: 'Yes, but for calls & texts only',
      seasaltAdvantage: true
    },
    {
      feature: 'AI Voice/Chatbots',
      seasalt: 'Yes, native and included',
      competitor: 'AI is a paid add-on ($49/mo)',
      seasaltAdvantage: true
    },
    {
      feature: 'Advanced Routing',
      seasalt: 'Yes, skill-based & IVR',
      competitor: 'Basic IVR on Business plan ($23/mo+)',
      seasaltAdvantage: true
    },
    {
      feature: 'CRM Integrations',
      seasalt: 'Yes',
      competitor: 'HubSpot/Salesforce on Business plan only',
      seasaltAdvantage: true
    },
    {
      feature: 'Best For',
      seasalt: 'Businesses needing to manage all customer communication channels in one place',
      competitor: 'Small teams and startups needing a simple, affordable shared phone number',
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
                Your Business Needs More Than Just a Phone Number.{' '}
                <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                  Graduate to a True Communications Platform
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                OpenPhone is an excellent, modern, and affordable business phone system, perfect for teams needing a shared number for calls and texts. 
                However, it is not an omnichannel contact center. It lacks crucial channels like webchat and social media, and its automation and AI 
                capabilities are limited to add-ons or basic integrations. Seasalt.ai is the logical next step for businesses that have outgrown a 
                simple phone solution.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Comparison */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Phone System vs. Complete Communication Platform
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See why growing businesses need more than just voice and SMS
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">Seasalt.ai</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">OpenPhone</th>
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
                            {item.seasaltAdvantage && <AlertCircle className="h-5 w-5 text-yellow-500 mr-2" />}
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
                When You Outgrow a Simple Phone System
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Signs it's time to upgrade from OpenPhone to a complete communication platform
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-yellow-100 p-3 rounded-lg mb-4">
                  <AlertCircle className="h-8 w-8 text-yellow-600 mx-auto" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Customers Want to Chat</h3>
                <p className="text-gray-600 text-sm">
                  Your customers are asking for website chat, WhatsApp support, or social media messaging that OpenPhone can't provide.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-yellow-100 p-3 rounded-lg mb-4">
                  <AlertCircle className="h-8 w-8 text-yellow-600 mx-auto" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">You Need Automation</h3>
                <p className="text-gray-600 text-sm">
                  You want AI to handle routine questions, book appointments, or provide 24/7 support beyond basic auto-replies.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-yellow-100 p-3 rounded-lg mb-4">
                  <AlertCircle className="h-8 w-8 text-yellow-600 mx-auto" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Complex Call Routing</h3>
                <p className="text-gray-600 text-sm">
                  You need advanced IVR, skill-based routing, or queue management beyond OpenPhone's basic features.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-yellow-100 p-3 rounded-lg mb-4">
                  <AlertCircle className="h-8 w-8 text-yellow-600 mx-auto" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Marketing Campaigns</h3>
                <p className="text-gray-600 text-sm">
                  You want to run outbound SMS campaigns, WhatsApp marketing, or multi-channel customer outreach.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-yellow-100 p-3 rounded-lg mb-4">
                  <AlertCircle className="h-8 w-8 text-yellow-600 mx-auto" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Unified Customer View</h3>
                <p className="text-gray-600 text-sm">
                  You need to see all customer interactions across channels, not just phone calls and texts.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-yellow-100 p-3 rounded-lg mb-4">
                  <AlertCircle className="h-8 w-8 text-yellow-600 mx-auto" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Advanced Analytics</h3>
                <p className="text-gray-600 text-sm">
                  You want detailed reporting on customer interactions, agent performance, and business metrics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Expansion */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                What You Gain with Seasalt.ai
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Keep everything you love about OpenPhone and add powerful omnichannel capabilities
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-green-600 mb-6">Keep What Works</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Shared business phone number</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Team SMS and MMS messaging</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Simple, intuitive interface</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Mobile app for on-the-go</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Affordable pricing</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-blue-600 mb-6">Add New Capabilities</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">WhatsApp Business integration</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Website chat widget</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Social media messaging</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">AI voicebot and chatbot</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Advanced analytics and reporting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Pricing Comparison
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how Seasalt.ai's complete platform compares to OpenPhone with add-ons
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">OpenPhone Starter</h3>
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gray-900">$15</div>
                  <div className="text-sm text-gray-600">/user/month</div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-sm text-gray-700">Voice & SMS only</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-sm text-gray-700">No AI features</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-sm text-gray-700">No other channels</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-yellow-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">OpenPhone + Add-ons</h3>
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-yellow-600">$72</div>
                  <div className="text-sm text-gray-600">/user/month</div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-sm text-gray-700">Business plan ($23)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-sm text-gray-700">AI features ($49)</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-sm text-gray-700">Still voice & SMS only</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Seasalt.ai</h3>
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-blue-600">$25</div>
                  <div className="text-sm text-gray-600">/agent/month</div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-sm text-gray-700">All channels included</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-sm text-gray-700">AI included</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-sm text-gray-700">Complete platform</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Migration Path */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Easy Migration Path
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Seamlessly transition from OpenPhone to Seasalt.ai without losing your number or disrupting service
              </p>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                  <h3 className="font-semibold text-green-800 mb-2">Keep Your Number</h3>
                  <p className="text-green-700 text-sm">Port your existing business number to Seasalt.ai</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                  <h3 className="font-semibold text-green-800 mb-2">Add New Channels</h3>
                  <p className="text-green-700 text-sm">Connect WhatsApp, webchat, and social media</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                  <h3 className="font-semibold text-green-800 mb-2">Enable AI</h3>
                  <p className="text-green-700 text-sm">Set up automated responses and voicebots</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
                  <h3 className="font-semibold text-green-800 mb-2">Train Your Team</h3>
                  <p className="text-green-700 text-sm">Quick onboarding to new features and capabilities</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Upgrade Your Communication Platform?
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              Keep everything you love about OpenPhone and add powerful omnichannel capabilities 
              that will help your business grow.
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

export default OpenPhoneAlternative;