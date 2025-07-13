import { Code, Zap, Puzzle, Settings, ArrowRight, CheckCircle, Copy } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const IntegrationAPIPage = () => {
  const { t } = useTranslation();
  
  const apiFeatures = [
    {
      icon: Code,
      title: t('integrations.api.features.restful.title', 'RESTful API'),
      description: t('integrations.api.features.restful.description', 'Clean, well-documented REST API for seamless integration'),
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Zap,
      title: t('integrations.api.features.webhooks.title', 'Real-time Webhooks'),
      description: t('integrations.api.features.webhooks.description', 'Instant notifications for events and conversation updates'),
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: Puzzle,
      title: t('integrations.api.features.custom.title', 'Custom Integrations'),
      description: t('integrations.api.features.custom.description', 'Build custom integrations for your specific business needs'),
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Settings,
      title: t('integrations.api.features.workflow.title', 'Workflow Automation'),
      description: t('integrations.api.features.workflow.description', 'Automate complex workflows with our integration platform'),
      color: 'from-orange-500 to-red-600'
    }
  ];

  const integrationTypes = [
    {
      title: t('integrations.api.types.crm.title', 'CRM Integration'),
      description: t('integrations.api.types.crm.description', 'Sync customer data with your CRM system'),
      example: t('integrations.api.types.crm.example', 'Automatically create leads from support conversations'),
      complexity: t('integrations.api.types.crm.complexity', 'Medium'),
      timeEstimate: t('integrations.api.types.crm.time', '2-4 hours')
    },
    {
      title: t('integrations.api.types.ecommerce.title', 'E-commerce Platform'),
      description: t('integrations.api.types.ecommerce.description', 'Connect with your online store for order management'),
      example: t('integrations.api.types.ecommerce.example', 'Provide real-time order status and tracking information'),
      complexity: t('integrations.api.types.ecommerce.complexity', 'Medium'),
      timeEstimate: t('integrations.api.types.ecommerce.time', '3-6 hours')
    },
    {
      title: t('integrations.api.types.payment.title', 'Payment Processing'),
      description: t('integrations.api.types.payment.description', 'Integrate with payment gateways for billing support'),
      example: t('integrations.api.types.payment.example', 'Handle refunds and payment inquiries automatically'),
      complexity: t('integrations.api.types.payment.complexity', 'High'),
      timeEstimate: t('integrations.api.types.payment.time', '4-8 hours')
    },
    {
      title: t('integrations.api.types.analytics.title', 'Analytics Platform'),
      description: t('integrations.api.types.analytics.description', 'Send conversation data to your analytics tools'),
      example: t('integrations.api.types.analytics.example', 'Track customer satisfaction and support metrics'),
      complexity: t('integrations.api.types.analytics.complexity', 'Low'),
      timeEstimate: t('integrations.api.types.analytics.time', '1-2 hours')
    }
  ];

  const codeExample = `// Initialize SeaChat API client
const SeaChat = require('@seachat/api');
const client = new SeaChat({
  apiKey: 'your_api_key_here',
  webhookSecret: 'your_webhook_secret'
});

// Listen for new conversations
client.webhooks.on('conversation.created', async (conversation) => {
  // Custom logic for new conversations
  console.log('New conversation:', conversation.id);
  
  // Example: Create CRM lead
  await createCRMLead({
    email: conversation.customer.email,
    source: 'support_chat',
    conversation_id: conversation.id
  });
});

// Create custom integration endpoint
app.post('/api/seachat/webhook', (req, res) => {
  const event = client.webhooks.verify(req.body, req.headers);
  
  switch(event.type) {
    case 'message.received':
      handleNewMessage(event.data);
      break;
    case 'conversation.resolved':
      updateCRMStatus(event.data);
      break;
  }
  
  res.status(200).send('OK');
});`;

  const benefits = [
    {
      title: t('integrations.api.benefits.dataFlow.title', 'Seamless Data Flow'),
      description: t('integrations.api.benefits.dataFlow.description', 'Automatic synchronization between SeaChat and your systems'),
      metric: '100%'
    },
    {
      title: t('integrations.api.benefits.manualWork.title', 'Reduced Manual Work'),
      description: t('integrations.api.benefits.manualWork.description', 'Eliminate repetitive tasks with intelligent automation'),
      metric: '80%'
    },
    {
      title: t('integrations.api.benefits.insights.title', 'Better Insights'),
      description: t('integrations.api.benefits.insights.description', 'Enhanced reporting with integrated data sources'),
      metric: '3x'
    },
    {
      title: t('integrations.api.benefits.implementation.title', 'Faster Implementation'),
      description: t('integrations.api.benefits.implementation.description', 'Quick setup with pre-built integration templates'),
      metric: '75%'
    }
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
                {t('integrations.api.title', 'Custom API Integrations')}
              </h1>
            </div>
            <p className="text-2xl text-blue-200 mb-8 max-w-4xl mx-auto">
              {t('integrations.api.subtitle', 'Build powerful custom integrations with our comprehensive API. Connect SeaChat to any system or workflow with our developer-friendly tools.')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://chat.seasalt.ai/gpt/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 text-center"
              >
                {t('integrations.api.accessButton', 'Get API Access')}
              </a>
              <a
                href="https://api.seasalt.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all text-center"
              >
                {t('integrations.api.docsButton', 'View API Documentation')}
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
              {t('integrations.api.capabilitiesTitle', 'Powerful Integration Capabilities')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('integrations.api.capabilitiesSubtitle', 'Everything you need to build robust, scalable integrations with SeaChat.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {apiFeatures.map((feature, index) => {
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

      {/* Integration Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('integrations.api.patternsTitle', 'Common Integration Patterns')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('integrations.api.patternsSubtitle', 'Explore popular integration scenarios and implementation examples.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {integrationTypes.map((integration, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{integration.title}</h3>
                <p className="text-gray-600 mb-6">{integration.description}</p>
                
                <div className="bg-blue-50 rounded-lg p-4 mb-6 border border-blue-100">
                  <h4 className="font-semibold text-blue-900 mb-2">{t('integrations.api.useCaseTitle', 'Example Use Case')}:</h4>
                  <p className="text-blue-800 text-sm">{integration.example}</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      integration.complexity === t('integrations.api.types.analytics.complexity', 'Low') ? 'bg-green-100 text-green-800' :
                      integration.complexity === t('integrations.api.types.crm.complexity', 'Medium') ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {integration.complexity}
                    </div>
                    <span className="text-sm text-gray-600">{integration.timeEstimate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('integrations.api.exampleTitle', 'Quick Start Code Example')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('integrations.api.exampleSubtitle', 'Get started with our API in just a few lines of code.')}
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 overflow-x-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">{t('integrations.api.integrationExample', 'Custom Integration Example')}</h3>
              <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <Copy className="w-4 h-4" />
                <span>{t('integrations.api.copyCode', 'Copy Code')}</span>
              </button>
            </div>
            <pre className="text-green-400 text-sm leading-relaxed overflow-x-auto">
              <code>{codeExample}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('integrations.api.benefitsTitle', 'Integration Benefits')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('integrations.api.benefitsSubtitle', 'Transform your workflow with powerful custom integrations.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl font-bold text-blue-600 mb-4">{benefit.metric}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t('integrations.api.buildTitle', 'Ready to Build Your Integration?')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('integrations.api.buildSubtitle', 'Follow these simple steps to get started with custom API integrations.')}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{t('integrations.api.steps.credentials.title', 'Get API Credentials')}</h4>
                    <p className="text-gray-600">{t('integrations.api.steps.credentials.description', 'Sign up and generate your API key and webhook secret')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{t('integrations.api.steps.docs.title', 'Review Documentation')}</h4>
                    <p className="text-gray-600">{t('integrations.api.steps.docs.description', 'Explore our comprehensive API documentation and examples')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{t('integrations.api.steps.build.title', 'Build & Test')}</h4>
                    <p className="text-gray-600">{t('integrations.api.steps.build.description', 'Develop your integration using our sandbox environment')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{t('integrations.api.steps.deploy.title', 'Deploy & Monitor')}</h4>
                    <p className="text-gray-600">{t('integrations.api.steps.deploy.description', 'Launch your integration and monitor performance')}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('integrations.api.resourcesTitle', 'Developer Resources')}</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">{t('integrations.api.resources.docs', 'Comprehensive API documentation')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">{t('integrations.api.resources.explorer', 'Interactive API explorer')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">{t('integrations.api.resources.examples', 'Code examples in multiple languages')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">{t('integrations.api.resources.sandbox', 'Sandbox environment for testing')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">{t('integrations.api.resources.simulator', 'Webhook event simulator')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">{t('integrations.api.resources.community', 'Developer community support')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('integrations.api.ctaTitle', 'Start Building Today')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {t('integrations.api.ctaSubtitle', 'Get API access and start building powerful custom integrations that transform your customer support workflow.')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://chat.seasalt.ai/gpt/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
            >
              {t('integrations.api.ctaAccessButton', 'Get API Access')}
            </a>
            <a
              href="https://api.seasalt.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center"
            >
              {t('integrations.api.ctaDocsButton', 'View Documentation')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntegrationAPIPage;