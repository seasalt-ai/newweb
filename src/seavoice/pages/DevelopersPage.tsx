
import { motion } from 'framer-motion';
import { Code, Book, Zap, Download, ExternalLink, Copy } from 'lucide-react';

const DevelopersPage = () => {
  const quickstarts = [
    {
      title: 'Make Your First Call',
      description: 'Create and deploy your first AI voice agent in under 5 minutes',
      language: 'curl',
      time: '5 min'
    },
    {
      title: 'Speech-to-Text Integration',
      description: 'Convert audio to text with high accuracy and real-time processing',
      language: 'javascript',
      time: '10 min'
    },
    {
      title: 'Custom Voice Creation',
      description: 'Clone voices and create custom voice profiles for your brand',
      language: 'python',
      time: '15 min'
    }
  ];

  const sdks = [
    { name: 'JavaScript SDK', version: 'v2.1.0', downloads: '25k+' },
    { name: 'Python SDK', version: 'v1.8.0', downloads: '18k+' },
    { name: 'Node.js SDK', version: 'v3.0.1', downloads: '32k+' },
    { name: 'Go SDK', version: 'v1.2.0', downloads: '8k+' }
  ];

  const codeExample = `// Make an outbound call with SeaVoice API
import { SeaVoice } from '@seavoice/sdk';

const client = new SeaVoice({
  apiKey: 'your-api-key'
});

const call = await client.calls.create({
  to: '+1234567890',
  voice: 'sarah',
  message: 'Hello! This is Sarah from SeaVoice.',
  context: {
    customer_name: 'John Doe',
    appointment_time: '2pm today'
  }
});

console.log('Call initiated:', call.id);`;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Build the Future of Voice
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Powerful APIs, comprehensive documentation, and developer tools to integrate 
              AI voice capabilities into your applications.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors mr-4"
            >
              Get Your Free API Key
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              View Documentation
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Technology Highlights */}
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
              Built on Proven Technology
            </h2>
            <p className="text-xl text-gray-600">
              Deep integration with industry-leading platforms and frameworks
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Twilio Integration</h3>
              <p className="text-gray-600 mb-4">
                Deep integration with Twilio Programmable Voice API, allowing for robust 
                and scalable custom voice solutions with global infrastructure.
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                <ExternalLink className="w-4 h-4 mr-2" />
                Learn More
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">RESTful APIs</h3>
              <p className="text-gray-600 mb-4">
                Clean, intuitive REST APIs with comprehensive documentation, 
                webhooks, and real-time event streaming for seamless integration.
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                <Book className="w-4 h-4 mr-2" />
                API Reference
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">WebRTC Support</h3>
              <p className="text-gray-600 mb-4">
                Real-time communication capabilities with browser-based voice 
                interactions and streaming audio processing.
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                <Code className="w-4 h-4 mr-2" />
                View Examples
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Simple. Powerful. Ready.</h2>
              <p className="text-xl text-gray-300 mb-8">
                Get started with just a few lines of code. Our APIs are designed 
                for developers who want to build fast and scale effortlessly.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span>Real-time voice processing</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span>Webhook integration</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span>Custom voice training</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span>Multi-language support</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <button className="text-gray-400 hover:text-white">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
                <pre className="text-sm text-gray-300 overflow-x-auto">
                  <code>{codeExample}</code>
                </pre>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quickstarts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Quick Start Guides</h2>
            <p className="text-xl text-gray-600">
              Step-by-step tutorials to get you building in minutes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickstarts.map((guide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {guide.time}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{guide.title}</h3>
                <p className="text-gray-600 mb-4">{guide.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-600 font-medium">{guide.language}</span>
                  <div className="flex items-center text-blue-600 font-semibold">
                    Start Guide <ExternalLink className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SDKs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Official SDKs</h2>
            <p className="text-xl text-gray-600">
              Native libraries for your favorite programming languages
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sdks.map((sdk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center hover:shadow-xl transition-shadow"
              >
                <Download className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{sdk.name}</h3>
                <p className="text-gray-600 mb-2">{sdk.version}</p>
                <p className="text-sm text-gray-500 mb-4">{sdk.downloads} downloads</p>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Download
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* API Status */}
      <section className="py-20 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-4 h-4 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <h2 className="text-2xl font-bold text-gray-900">All Systems Operational</h2>
            </div>
            <p className="text-gray-600 mb-8">
              99.99% uptime over the last 30 days. Check our status page for real-time API health.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              View Status Page
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DevelopersPage;