import { ArrowLeft, Check, X, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const EightXEightAlternative = () => {
  const comparisonFeatures = [
    {
      feature: 'Target Customer',
      seasalt: 'Small to Medium Businesses (SMEs)',
      competitor: 'Mid-Market to Enterprise',
      seasaltAdvantage: true
    },
    {
      feature: 'Pricing Model',
      seasalt: 'Simple & predictable per-agent fee',
      competitor: 'Quote-Based (Historically expensive tiers)',
      seasaltAdvantage: true
    },
    {
      feature: 'Starting Price',
      seasalt: '$25/agent/month',
      competitor: 'Not Publicly Listed (Previously started at $24/mo for basic UCaaS)',
      seasaltAdvantage: true
    },
    {
      feature: 'Omnichannel Routing',
      seasalt: 'Yes',
      competitor: 'Yes, advanced',
      seasaltAdvantage: false
    },
    {
      feature: 'Workforce Management',
      seasalt: 'Basic',
      competitor: 'Yes, advanced',
      seasaltAdvantage: false
    },
    {
      feature: 'Ease of Setup',
      seasalt: 'Simple, self-service',
      competitor: 'Complex, must contact sales',
      seasaltAdvantage: true
    },
    {
      feature: 'Best For',
      seasalt: 'SMEs needing a powerful but affordable and easy-to-use platform',
      competitor: 'Large enterprises requiring a full suite of advanced communication and management tools',
      seasaltAdvantage: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/compare-us-overview" className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200 mb-8">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Compare Us Overview
            </Link>
            
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Get the Enterprise Features You Need,{' '}
                <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                  Without the Enterprise Price You Don't
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                8x8 is a comprehensive, enterprise-grade solution offering a full suite of UCaaS and CCaaS features, including true omnichannel 
                routing and advanced analytics. While powerful, its pricing is opaque (quote-based) and historically expensive, targeting larger 
                organizations. For SMEs, the complexity and cost are often prohibitive. Seasalt.ai provides the key omnichannel and AI features 
                that drive value for a growing business.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Comparison */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                SME-Focused vs. Enterprise-Complex
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See why simple and transparent beats complex and opaque for growing businesses
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">Seasalt.ai</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">8x8</th>
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

        {/* Pricing Transparency */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Transparent vs. Hidden Pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Why quote-based pricing creates barriers for growing businesses
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-blue-600 mb-6">Seasalt.ai: Transparent Pricing</h3>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800">$25/agent/month</h4>
                    <p className="text-green-700 text-sm">Clear, published pricing</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800">Self-Service Signup</h4>
                    <p className="text-blue-700 text-sm">Start immediately, no sales calls required</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800">No Minimums</h4>
                    <p className="text-purple-700 text-sm">Start with 1 user, scale as needed</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800">Predictable Costs</h4>
                    <p className="text-orange-700 text-sm">Easy budgeting and forecasting</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-600 mb-6">8x8: Quote-Based Complexity</h3>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800">Hidden Pricing</h4>
                    <p className="text-red-700 text-sm">Must contact sales for pricing</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800">Sales Process</h4>
                    <p className="text-red-700 text-sm">Lengthy sales cycles and negotiations</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800">Enterprise Focus</h4>
                    <p className="text-red-700 text-sm">Pricing optimized for large organizations</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800">Complex Contracts</h4>
                    <p className="text-red-700 text-sm">Multi-year commitments and complex terms</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-8">
              <div className="text-center">
                <AlertCircle className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-yellow-800 mb-4">
                  The Quote-Based Pricing Problem
                </h3>
                <p className="text-yellow-700 max-w-2xl mx-auto">
                  When pricing isn't transparent, it usually means it's expensive. Quote-based pricing creates barriers 
                  for SMEs who need to budget and make quick decisions. It's designed for enterprise buyers with 
                  dedicated procurement teams and large budgets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Essential vs. Over-Engineered
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how Seasalt.ai focuses on what SMEs actually need vs. enterprise complexity
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-blue-600 mb-6">Seasalt.ai: SME-Focused</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Essential omnichannel features</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">AI automation included</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Simple setup and management</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Intuitive user interface</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Affordable scaling</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Fast time to value</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-600 mb-6">8x8: Enterprise-Complex</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Advanced workforce management</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Comprehensive analytics suite</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Complex implementation required</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Steep learning curve</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">High total cost of ownership</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Long deployment timelines</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Business Impact */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Business Impact Comparison
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                How platform choice affects your business operations and growth
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Time to Deploy</h3>
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">Minutes</div>
                    <div className="text-sm text-green-700">Seasalt.ai</div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">Months</div>
                    <div className="text-sm text-red-700">8x8</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Learning Curve</h3>
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">Low</div>
                    <div className="text-sm text-green-700">Seasalt.ai</div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">High</div>
                    <div className="text-sm text-red-700">8x8</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Total Cost</h3>
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">Predictable</div>
                    <div className="text-sm text-green-700">Seasalt.ai</div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">Variable</div>
                    <div className="text-sm text-red-700">8x8</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-gray-700 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Get Enterprise Power with SME Simplicity
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              Why deal with enterprise complexity when you can get the features you need 
              in a simple, affordable package designed for growing businesses?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                 href="https://seax.seasalt.ai/signup"
                 className="bg-white text-gray-800 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
               >
                 Sign Up
              </a>
              <a
                href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/" className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
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

export default EightXEightAlternative;