
import { motion } from 'framer-motion';
import { Package, MapPin, Clock, BarChart3, CheckCircle, Truck } from 'lucide-react';

const OrderTrackingPage = () => {
  const features = [
    {
      icon: Package,
      title: 'Real-Time Order Status',
      description: 'Instantly provide customers with up-to-date information about their orders and shipments.',
      benefits: ['Live tracking updates', 'Delivery estimates', 'Status notifications']
    },
    {
      icon: MapPin,
      title: 'Location Tracking',
      description: 'Share precise location information and delivery progress with customers.',
      benefits: ['GPS tracking', 'Route optimization', 'Delivery mapping']
    },
    {
      icon: Clock,
      title: 'Proactive Updates',
      description: 'Automatically notify customers of delays, changes, or delivery confirmations.',
      benefits: ['Delay notifications', 'Schedule changes', 'Delivery confirmations']
    }
  ];

  const trackingCapabilities = [
    {
      stage: 'Order Placed',
      description: 'Confirmation of order receipt and processing start',
      information: ['Order number', 'Items ordered', 'Processing timeline']
    },
    {
      stage: 'In Transit',
      description: 'Package is on its way to the destination',
      information: ['Current location', 'Expected delivery', 'Carrier information']
    },
    {
      stage: 'Out for Delivery',
      description: 'Package is with delivery driver for final delivery',
      information: ['Delivery window', 'Driver contact', 'Special instructions']
    },
    {
      stage: 'Delivered',
      description: 'Package has been successfully delivered',
      information: ['Delivery time', 'Delivery location', 'Signature confirmation']
    }
  ];

  const benefits = [
    { metric: '85%', description: 'Reduction in "Where is my order?" calls' },
    { metric: '95%', description: 'Customer satisfaction with tracking info' },
    { metric: '24/7', description: 'Order status availability' },
    { metric: '60%', description: 'Decrease in customer service workload' }
  ];

  const integrations = [
    'FedEx API',
    'UPS Tracking',
    'USPS Integration',
    'DHL Services',
    'Amazon Logistics',
    'Custom Carriers'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Package className="w-16 h-16 text-green-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Order Status & Tracking
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Let customers instantly check their order status, track shipments, and get 
              delivery updates through natural voice conversations. Reduce support calls 
              while improving customer satisfaction.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Enable Order Tracking
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Order Tracking
            </h2>
            <p className="text-xl text-gray-600">
              Complete visibility into order status and delivery progress
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracking Stages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Complete Delivery Journey
            </h2>
            <p className="text-xl text-gray-600">
              Track every stage from order placement to final delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trackingCapabilities.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
              >
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{stage.stage}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{stage.description}</p>
                <div className="space-y-1">
                  {stage.information.map((info, infoIndex) => (
                    <div key={infoIndex} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                      <span className="text-xs text-gray-600">{info}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Carrier Integrations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Universal Carrier Integration
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Connect with all major shipping carriers and logistics providers to provide 
                comprehensive tracking information regardless of how packages are shipped.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Truck className="w-6 h-6 text-green-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Multi-Carrier Support</h3>
                    <p className="text-gray-600">Track packages across all major carriers</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-green-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Real-Time Updates</h3>
                    <p className="text-gray-600">Live tracking data from carrier APIs</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <BarChart3 className="w-6 h-6 text-green-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Delivery Analytics</h3>
                    <p className="text-gray-600">Performance insights and delivery metrics</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Supported Carriers</h3>
              <div className="grid grid-cols-2 gap-3">
                {integrations.map((integration, index) => (
                  <div key={index} className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700 font-medium">{integration}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Customer Service Impact
            </h2>
            <p className="text-xl text-gray-600">
              Measurable improvements in customer satisfaction and support efficiency
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg text-center border border-gray-200"
              >
                <div className="text-4xl font-bold text-green-600 mb-4">{benefit.metric}</div>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Automate Order Tracking?</h2>
            <p className="text-xl mb-8 opacity-90">
              Reduce support calls and improve customer satisfaction with instant order status
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                See Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OrderTrackingPage;