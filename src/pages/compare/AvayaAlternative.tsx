import { ArrowLeft, Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AvayaAlternative = () => {
  const { i18n } = useTranslation();
  const comparisonFeatures = [
    {
      feature: 'Platform Type',
      seasalt: 'Cloud-Native Unified Communications',
      competitor: 'Legacy On-Premise with Cloud Migration',
      seasaltAdvantage: true
    },
    {
      feature: 'Starting Price',
      seasalt: '$25/agent/month',
      competitor: 'Quote-based (typically $50-100+/user/month)',
      seasaltAdvantage: true
    },
    {
      feature: 'Setup Complexity',
      seasalt: 'Self-service, minutes to deploy',
      competitor: 'Requires professional services and implementation',
      seasaltAdvantage: true
    },
    {
      feature: 'Modern Architecture',
      seasalt: 'Built for cloud-first, API-driven',
      competitor: 'Legacy architecture with cloud adaptations',
      seasaltAdvantage: true
    },
    {
      feature: 'AI Integration',
      seasalt: 'Native AI voice and chatbots included',
      competitor: 'AI capabilities through partnerships and add-ons',
      seasaltAdvantage: true
    },
    {
      feature: 'Target Market',
      seasalt: 'SMEs and growing businesses',
      competitor: 'Large enterprises with existing Avaya infrastructure',
      seasaltAdvantage: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-50 via-white to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to={`/${i18n.language}/compare-us-overview`} className="inline-flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-200 mb-8">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Compare Us Overview
            </Link>
            
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Modern Cloud-Native vs.{' '}
                <span className="bg-gradient-to-r from-indigo-600 to-indigo-700 bg-clip-text text-transparent">
                  Legacy Infrastructure
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Avaya has been a telecommunications giant for decades, but their legacy architecture and complex enterprise focus 
                make them a poor fit for modern, growing businesses. While they're transitioning to cloud solutions, their 
                pricing remains enterprise-focused with complex licensing and professional services requirements. 
                Seasalt.ai is built cloud-native from day one for the modern business.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Comparison */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Cloud-Native vs. Legacy Migration
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See why starting with modern architecture beats adapting legacy systems
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">Seasalt.ai</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Avaya</th>
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

        {/* Architecture Comparison */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Modern vs. Legacy Architecture
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Why cloud-native architecture matters for growing businesses
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-indigo-600 mb-6">Seasalt.ai: Cloud-Native</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Built for cloud from day one</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">API-first architecture</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Automatic updates and scaling</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Modern integrations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Self-service deployment</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-600 mb-6">Avaya: Legacy Migration</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Legacy on-premise roots</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Complex licensing models</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Professional services required</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Integration complexity</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Enterprise sales process</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Business Impact */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Business Impact
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                How architecture choices affect your business operations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-green-50 p-6 rounded-xl text-center">
                <h3 className="text-xl font-bold text-green-800 mb-4">Time to Value</h3>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">Minutes</div>
                    <div className="text-sm text-green-700">Seasalt.ai</div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">Months</div>
                    <div className="text-sm text-red-700">Avaya</div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl text-center">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Setup Complexity</h3>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">Self-Service</div>
                    <div className="text-sm text-blue-700">Seasalt.ai</div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">Professional Services</div>
                    <div className="text-sm text-red-700">Avaya</div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl text-center">
                <h3 className="text-xl font-bold text-purple-800 mb-4">Ongoing Maintenance</h3>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">Automatic</div>
                    <div className="text-sm text-purple-700">Seasalt.ai</div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">Manual</div>
                    <div className="text-sm text-red-700">Avaya</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-indigo-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Choose Modern Over Legacy
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              Why struggle with legacy architecture when you can have a modern, 
              cloud-native solution built for today's businesses?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                 href="https://seax.seasalt.ai/signup"
                 className="bg-white text-indigo-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
               >
                 Sign Up
              </a>
              <a
                href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/" className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
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

export default AvayaAlternative;