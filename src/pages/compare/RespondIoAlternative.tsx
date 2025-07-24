import { ArrowLeft, Check, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const RespondIoAlternative = () => {
  const { i18n } = useTranslation();
  const comparisonFeatures = [
    {
      feature: 'Pricing Model',
      seasalt: 'Simple & predictable per-agent fee',
      competitor: 'Monthly Active Contacts (MACs) + Users',
      seasaltAdvantage: true
    },
    {
      feature: 'Starting Price',
      seasalt: '$25/agent/month',
      competitor: '$79/month (includes 5 users)',
      seasaltAdvantage: true
    },
    {
      feature: 'Voice Calling',
      seasalt: 'Yes, native and fully supported',
      competitor: 'Beta feature',
      seasaltAdvantage: true
    },
    {
      feature: 'WhatsApp Fees',
      seasalt: 'Included in usage',
      competitor: 'Billed separately by Meta',
      seasaltAdvantage: true
    },
    {
      feature: 'AI Agent',
      seasalt: 'Yes, included in all plans',
      competitor: 'Requires Growth plan ($159/mo+)',
      seasaltAdvantage: true
    },
    {
      feature: 'Core Focus',
      seasalt: 'True Omnichannel (Voice + Digital)',
      competitor: 'Digital-First Messaging',
      seasaltAdvantage: false
    },
    {
      feature: 'Best For',
      seasalt: 'SMEs needing a unified hub for all customer conversations, including phone calls',
      competitor: 'Marketing and sales teams focused primarily on lead generation through chat',
      seasaltAdvantage: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to={`/${i18n.language}/compare-us-overview`} className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 mb-8">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Compare Us Overview
            </Link>
            
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Don't Settle for Digital-Only.{' '}
                <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  Get True Omnichannel with Native Voice and Messaging
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Respond.io is a strong platform for businesses focused on messaging channels like WhatsApp. However, its pricing is based on 
                Monthly Active Contacts (MACs), which can become unpredictable, and crucial channels like Voice are still in beta. 
                Furthermore, WhatsApp usage fees are billed separately, adding another layer of cost complexity. Seasalt.ai offers a 
                truly unified platform where voice is a core, native feature.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Comparison */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Unified Omnichannel vs. Digital-First
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See why native voice integration matters for complete customer communication
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">Seasalt.ai</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">respond.io</th>
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

        {/* Pricing Complexity */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Predictable vs. Variable Pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Why simple per-agent pricing beats complex contact-based models
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-blue-600 mb-6">Seasalt.ai: Simple & Predictable</h3>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800">Per-Agent Pricing</h4>
                    <p className="text-green-700 text-sm">$25/agent/month - easy to budget and scale</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800">All Channels Included</h4>
                    <p className="text-blue-700 text-sm">Voice, SMS, WhatsApp, chat - no extra fees</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800">Usage Included</h4>
                    <p className="text-purple-700 text-sm">WhatsApp and SMS usage included in plan</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800">No Surprises</h4>
                    <p className="text-orange-700 text-sm">Predictable monthly costs, easy to forecast</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-600 mb-6">respond.io: Complex Variables</h3>
                <div className="space-y-4">
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800">Monthly Active Contacts</h4>
                    <p className="text-yellow-700 text-sm">Pricing varies based on contact activity</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800">Separate WhatsApp Fees</h4>
                    <p className="text-red-700 text-sm">Meta charges billed separately</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800">Voice in Beta</h4>
                    <p className="text-red-700 text-sm">Core feature still being developed</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800">Unpredictable Costs</h4>
                    <p className="text-red-700 text-sm">Monthly bills can vary significantly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Voice Integration Comparison */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Native Voice vs. Beta Feature
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Why voice should be a core feature, not an afterthought
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-blue-600 mb-6">Seasalt.ai: Voice-First Design</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Native voice calling built into platform</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">AI voicebot with human handoff</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Unified conversation history across voice and digital</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Professional phone system features</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Production-ready and fully supported</span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-yellow-600 mb-6">respond.io: Voice as Beta</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Voice calling still in beta testing</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Limited voice features and reliability</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Potential for bugs and instability</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Uncertain roadmap and timeline</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Not recommended for production use</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready for True Omnichannel?
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              Stop waiting for beta features. Get a platform where voice and digital 
              channels work together seamlessly from day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                 href="https://seax.seasalt.ai/signup"
                 className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
               >
                 Sign Up
              </a>
              <a
                href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                Book A Demo
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RespondIoAlternative;