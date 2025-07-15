import { Shield, AlertTriangle, CheckCircle, Clock, Phone, BarChart3 } from 'lucide-react';

const FraudAlertsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-6">Fraud Alert System</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Protect your customers with instant fraud alerts. Our AI-powered system detects suspicious activities and automatically contacts customers to verify transactions.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Fraud Detection</h2>
            <p className="text-xl text-gray-600">
              Real-time monitoring and intelligent alerting to protect your customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <AlertTriangle className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Real-time Detection</h3>
              <p className="text-gray-600">
                Monitor transactions 24/7 and detect suspicious patterns instantly using advanced AI algorithms.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Phone className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Instant Alerts</h3>
              <p className="text-gray-600">
                Automatically call customers within minutes of detecting suspicious activity to verify transactions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <BarChart3 className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Detailed Analytics</h3>
              <p className="text-gray-600">
                Track fraud prevention metrics and customer response rates with comprehensive reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">How Fraud Alerts Work</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <span className="text-red-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Fraud Detection</h3>
                    <p className="text-gray-600">System identifies suspicious transaction patterns</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <span className="text-orange-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Immediate Alert</h3>
                    <p className="text-gray-600">AI agent calls customer within 2 minutes</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Verification</h3>
                    <p className="text-gray-600">Customer confirms or denies the transaction</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <span className="text-green-600 font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Action Taken</h3>
                    <p className="text-gray-600">Transaction approved or security measures activated</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Sample Alert Call</h3>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-gray-700 italic">
                  "Hello, this is a security alert from [Bank Name]. We've detected unusual activity on your account. 
                  A transaction of $500 at Amazon was just attempted. Did you authorize this purchase? 
                  Please press 1 to confirm or 2 if this was not you."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Key Benefits</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">Fraud Prevention</h3>
              <p className="text-gray-600">Reduce fraudulent transactions by up to 85%</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Instant Response</h3>
              <p className="text-gray-600">Alert customers within 2 minutes of detection</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Customer Trust</h3>
              <p className="text-gray-600">Build confidence with proactive protection</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Smart Analytics</h3>
              <p className="text-gray-600">Detailed insights on fraud patterns and trends</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Common Use Cases</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border">
              <h3 className="text-xl font-semibold mb-4">Banking & Financial Services</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Credit card fraud detection
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Unusual spending pattern alerts
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Account takeover prevention
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Large transaction verification
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border">
              <h3 className="text-xl font-semibold mb-4">E-commerce & Retail</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Suspicious purchase patterns
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  High-value order verification
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Identity theft protection
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Payment method changes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Protect Your Customers Today</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Implement advanced fraud detection with automated customer alerts to reduce losses and build trust.
          </p>
          <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Started with Fraud Alerts
          </button>
        </div>
      </section>
    </div>
  );
};

export default FraudAlertsPage;
