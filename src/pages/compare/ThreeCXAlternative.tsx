import { ArrowLeft, Check, X, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ThreeCXAlternative = () => {
  const { i18n } = useTranslation();
  const comparisonFeatures = [
    {
      feature: 'Platform Type',
      seasalt: 'Cloud-Native Unified Communications',
      competitor: 'Self-Hosted or Hosted IP PBX',
      seasaltAdvantage: true
    },
    {
      feature: 'Pricing Model',
      seasalt: 'Simple per-agent fee',
      competitor: 'Per-Simultaneous Call + Hosting + Support',
      seasaltAdvantage: true
    },
    {
      feature: 'Management Overhead',
      seasalt: 'None (Fully managed by Seasalt.ai)',
      competitor: 'High (Requires technical expertise for setup & maintenance)',
      seasaltAdvantage: true
    },
    {
      feature: 'Omnichannel Inbox',
      seasalt: 'Yes, native',
      competitor: 'No, primarily a phone system',
      seasaltAdvantage: true
    },
    {
      feature: 'AI Capabilities',
      seasalt: 'Yes, native Voice & Chatbots',
      competitor: '"Coming Soon" Add-on',
      seasaltAdvantage: true
    },
    {
      feature: 'Best For',
      seasalt: 'Businesses that want a powerful, easy-to-use, all-in-one solution',
      competitor: 'Tech-savvy organizations that want full control over their PBX',
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
                Choose Simplicity and Cloud Power.{' '}
                <span className="bg-gradient-to-r from-indigo-600 to-indigo-700 bg-clip-text text-transparent">
                  Stop Managing Servers and Start Talking to Customers
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                3CX offers an open-platform PBX with a unique pricing model based on simultaneous calls, not users, which can be cost-effective 
                for some. However, this comes with significant hidden complexity and costs. You are responsible for hosting, SSL certificates, 
                and technical support (which starts at $75 per ticket). It is fundamentally a phone system, not a native omnichannel platform. 
                Seasalt.ai is a fully managed, cloud-native solution.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Comparison */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Managed Cloud vs. Self-Hosted Complexity
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See why fully managed beats do-it-yourself for growing businesses
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">Seasalt.ai</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">3CX</th>
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

        {/* Hidden Costs Analysis */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                The Hidden Costs of "Affordable" 3CX
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See what 3CX doesn't include in their advertised pricing
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-indigo-600 mb-6">Seasalt.ai: All-Inclusive</h3>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800">$25/agent/month</h4>
                    <p className="text-green-700 text-sm">Everything included</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800">Cloud Hosting</h4>
                    <p className="text-blue-700 text-sm">Included - no server management</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800">Support</h4>
                    <p className="text-purple-700 text-sm">Included - unlimited support</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800">Updates & Maintenance</h4>
                    <p className="text-orange-700 text-sm">Included - automatic updates</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800">SSL Certificates</h4>
                    <p className="text-gray-700 text-sm">Included - managed automatically</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-600 mb-6">3CX: Hidden Costs</h3>
                <div className="space-y-4">
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800">~$25/mo (4 calls)</h4>
                    <p className="text-yellow-700 text-sm">Base license only</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800">Hosting Costs</h4>
                    <p className="text-red-700 text-sm">$20-100+/month for VPS/cloud hosting</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800">Support Tickets</h4>
                    <p className="text-red-700 text-sm">$75+ per support ticket</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800">IT Management</h4>
                    <p className="text-red-700 text-sm">Your time or consultant fees</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800">SSL Certificates</h4>
                    <p className="text-red-700 text-sm">$50-200+/year for certificates</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-red-50 border-2 border-red-200 rounded-2xl p-8">
              <div className="text-center">
                <AlertCircle className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-red-800 mb-4">
                  The Real Total Cost of Ownership
                </h3>
                <p className="text-red-700 max-w-2xl mx-auto mb-6">
                  3CX's advertised pricing doesn't include hosting, support, maintenance, or the time you'll spend managing it. 
                  For most businesses, the total cost quickly exceeds a fully managed solution.
                </p>
                <div className="bg-white p-4 rounded-lg inline-block">
                  <p className="text-red-800 font-semibold">
                    3CX "Real" Cost: $25 license + $50 hosting + $75 support ticket + your time = $150+ per month
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Complexity */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Focus on Business, Not IT Management
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See what you'll need to manage with 3CX vs. what Seasalt.ai handles for you
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-red-600 mb-6">What You Manage with 3CX</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Server provisioning and configuration</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Operating system updates and security patches</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">SSL certificate installation and renewal</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Firewall configuration and security</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Backup and disaster recovery</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Troubleshooting and support tickets</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Capacity planning and scaling</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-green-600 mb-6">What Seasalt.ai Handles</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Complete infrastructure management</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Automatic security updates</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">SSL certificates managed automatically</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Enterprise-grade security built-in</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Automated backups and redundancy</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">24/7 monitoring and support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Automatic scaling and optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-indigo-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Focus on Growing Your Business, Not Managing Servers
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              Why spend time on IT management when you could be talking to customers? 
              Get a fully managed solution that just works.
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

export default ThreeCXAlternative;