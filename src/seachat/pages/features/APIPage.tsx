import React from 'react';
import { Code, Zap, Shield, Globe, Terminal, Book, ArrowRight, Copy } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const APIPage = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: Code,
      title: t('features.api.restful.title', 'RESTful API'),
      description: t('features.api.restful.description', 'Clean, intuitive REST API with comprehensive documentation'),
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Zap,
      title: t('features.api.webhooks.title', 'Real-time Webhooks'),
      description: t('features.api.webhooks.description', 'Get instant notifications for events and conversation updates'),
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: Shield,
      title: t('features.api.security.title', 'Secure Authentication'),
      description: t('features.api.security.description', 'OAuth 2.0 and API key authentication with rate limiting'),
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Globe,
      title: t('features.api.cdn.title', 'Global CDN'),
      description: t('features.api.cdn.description', 'Low-latency API access from anywhere in the world'),
      color: 'from-orange-500 to-red-600'
    }
  ];

  const endpoints = [
    {
      method: 'POST',
      endpoint: '/api/v1/conversations',
      description: t('features.api.endpoints.createConversation', 'Create a new conversation'),
      example: `{
  "customer_id": "cust_123",
  "channel": "website",
  "message": "Hello, I need help"
}`
    },
    {
      method: 'GET',
      endpoint: '/api/v1/conversations/{id}',
      description: t('features.api.endpoints.getConversation', 'Retrieve conversation details'),
      example: `{
  "id": "conv_456",
  "status": "active",
  "messages": [...],
  "agent": "agent_789"
}`
    },
    {
      method: 'POST',
      endpoint: '/api/v1/messages',
      description: t('features.api.endpoints.sendMessage', 'Send a message in a conversation'),
      example: `{
  "conversation_id": "conv_456",
  "content": "How can I help you?",
  "type": "text"
}`
    }
  ];

  const sdks = [
    { name: 'JavaScript/Node.js', icon: '🟨', status: t('features.api.sdks.available', 'Available') },
    { name: 'Python', icon: '🐍', status: t('features.api.sdks.available', 'Available') },
    { name: 'PHP', icon: '🐘', status: t('features.api.sdks.available', 'Available') },
    { name: 'Ruby', icon: '💎', status: t('features.api.sdks.available', 'Available') },
    { name: 'Java', icon: '☕', status: t('features.api.sdks.available', 'Available') },
    { name: 'C#/.NET', icon: '🔷', status: t('features.api.sdks.available', 'Available') },
    { name: 'Go', icon: '🐹', status: t('features.api.sdks.comingSoon', 'Coming Soon') },
    { name: 'Rust', icon: '🦀', status: t('features.api.sdks.comingSoon', 'Coming Soon') }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Code className="w-16 h-16 text-blue-300 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold">
                {t('features.api.title', 'API & Developer Tools')}
              </h1>
            </div>
            <p className="text-2xl text-blue-200 mb-8 max-w-4xl mx-auto">
              {t('features.api.subtitle', 'Build custom integrations and extend SeaChat\'s capabilities with our comprehensive API and developer-friendly tools.')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://chat.seasalt.ai/gpt/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 text-center"
              >
                {t('features.api.getKeyButton', 'Get API Key')}
              </a>
              <a
                href="https://api.seasalt.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all text-center"
              >
                {t('features.api.viewDocsButton', 'View Documentation')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* API Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('features.api.featuresTitle', 'Powerful API Features')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('features.api.featuresSubtitle', 'Everything you need to integrate SeaChat into your existing systems and workflows.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('features.api.endpointsTitle', 'API Endpoints')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('features.api.endpointsSubtitle', 'Explore our comprehensive API with examples and interactive documentation.')}
            </p>
          </div>

          <div className="space-y-8">
            {endpoints.map((endpoint, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="bg-gray-900 p-6">
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                      endpoint.method === 'GET' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="text-green-400 font-mono text-lg">{endpoint.endpoint}</code>
                  </div>
                  <p className="text-gray-300 mt-2">{endpoint.description}</p>
                </div>
                
                <div className="p-6">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">{t('features.api.exampleRequestResponse', 'Example Request/Response')}</h4>
                      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-green-400 text-sm">
                          <code>{endpoint.example}</code>
                        </pre>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">{t('features.api.tryItOut', 'Try it out')}</h4>
                      <div className="space-y-4">
                        <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                          <Terminal className="w-4 h-4" />
                          <span>{t('features.api.testConsole', 'Test in Console')}</span>
                        </button>
                        <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 font-medium">
                          <Copy className="w-4 h-4" />
                          <span>{t('features.api.copyCurl', 'Copy cURL')}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDKs and Libraries */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('features.api.sdksTitle', 'SDKs & Libraries')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('features.api.sdksSubtitle', 'Get started quickly with our official SDKs for popular programming languages.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sdks.map((sdk, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{sdk.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{sdk.name}</h3>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  sdk.status === t('features.api.sdks.available', 'Available') 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {sdk.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('features.api.exampleTitle', 'Quick Start Example')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('features.api.exampleSubtitle', 'Get up and running with SeaChat API in just a few lines of code.')}
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 overflow-x-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">{t('features.api.jsExample', 'JavaScript Example')}</h3>
              <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <Copy className="w-4 h-4" />
                <span>{t('features.api.copy', 'Copy')}</span>
              </button>
            </div>
            <pre className="text-green-400 text-sm leading-relaxed">
              <code>{`// Initialize SeaChat client
const SeaChat = require('@seachat/sdk');
const client = new SeaChat({
  apiKey: 'your_api_key_here'
});

// Create a new conversation
const conversation = await client.conversations.create({
  customer_id: 'customer_123',
  channel: 'website',
  message: 'Hello, I need help with my order'
});

// Send a response
await client.messages.send({
  conversation_id: conversation.id,
  content: 'I'd be happy to help you with your order!',
  type: 'text'
});

// Listen for new messages
client.on('message.received', (message) => {
  console.log('New message:', message);
});`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('features.api.ctaTitle', 'Ready to Start Building?')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {t('features.api.ctaSubtitle', 'Get your API key and start integrating SeaChat into your applications today.')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://chat.seasalt.ai/gpt/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
            >
              {t('features.api.ctaAccessButton', 'Get API Access')}
            </a>
            <a
              href="https://api.seasalt.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center text-center"
            >
              <Book className="w-5 h-5 mr-2" />
              {t('features.api.ctaDocsButton', 'Read Documentation')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default APIPage;