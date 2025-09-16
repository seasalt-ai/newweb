import React, { useState } from 'react';
import { Copy, Terminal, CheckCircle } from 'lucide-react';
import { useTranslation, type SupportedLanguage } from '../../../i18n/helpers';

interface ApiPageComponentsProps {
  lang: SupportedLanguage;
  translations?: any;
}

// Code Example with Copy functionality
export const CodeExample: React.FC<ApiPageComponentsProps> = ({ lang, translations }) => {
  const { t: hookT, isLoading } = translations ? 
    { t: null, isLoading: false } : 
    useTranslation(lang);

  // Unified getText function  
  const getText = (key: string, fallback: string = key): string => {
    if (translations) {
      const keys = key.split('.');
      let result: any = translations;
      
      for (const k of keys) {
        if (result && typeof result === 'object' && k in result) {
          result = result[k];
        } else {
          console.warn(`Missing translation key: "${key}" in locale "${lang}"`);
          return fallback;
        }
      }
      
      return typeof result === 'string' ? result : fallback;
    }
    
    return hookT ? hookT(key) : fallback;
  };

  const [copied, setCopied] = useState(false);

  const codeExample = `// Initialize SeaChat client
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
});`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeExample).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  if (isLoading) {
    return (
      <div className="animate-pulse bg-gray-200 h-64 rounded-2xl"></div>
    );
  }

  return (
    <div className="bg-gray-900 rounded-2xl p-8 overflow-x-auto">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white">{getText('seachat.features.api.jsExample', 'JavaScript Example')}</h3>
        <button 
          onClick={copyToClipboard}
          className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
        >
          {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          <span>{copied ? 'Copied!' : getText('seachat.features.api.copy', 'Copy')}</span>
        </button>
      </div>
      <pre className="text-green-400 text-sm leading-relaxed">
        <code>{codeExample}</code>
      </pre>
    </div>
  );
};

// API Endpoint Interactive Section
export const ApiEndpoints: React.FC<ApiPageComponentsProps> = ({ lang, translations }) => {
  const { t: hookT, isLoading } = translations ? 
    { t: null, isLoading: false } : 
    useTranslation(lang);

  // Unified getText function  
  const getText = (key: string, fallback: string = key): string => {
    if (translations) {
      const keys = key.split('.');
      let result: any = translations;
      
      for (const k of keys) {
        if (result && typeof result === 'object' && k in result) {
          result = result[k];
        } else {
          console.warn(`Missing translation key: "${key}" in locale "${lang}"`);
          return fallback;
        }
      }
      
      return typeof result === 'string' ? result : fallback;
    }
    
    return hookT ? hookT(key) : fallback;
  };

  const endpoints = [
    {
      method: 'POST',
      endpoint: '/api/v1/conversations',
      description: getText('seachat.features.api.endpoints.createConversation', 'Create a new conversation'),
      example: `{
  "customer_id": "cust_123",
  "channel": "website",
  "message": "Hello, I need help"
}`
    },
    {
      method: 'GET',
      endpoint: '/api/v1/conversations/{id}',
      description: getText('seachat.features.api.endpoints.getConversation', 'Retrieve conversation details'),
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
      description: getText('seachat.features.api.endpoints.sendMessage', 'Send a message in a conversation'),
      example: `{
  "conversation_id": "conv_456",
  "content": "How can I help you?",
  "type": "text"
}`
    }
  ];

  const [copiedEndpoint, setCopiedEndpoint] = useState<number | null>(null);

  const copyEndpoint = (code: string, index: number) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedEndpoint(index);
      setTimeout(() => setCopiedEndpoint(null), 2000);
    });
  };

  if (isLoading) {
    return (
      <div className="space-y-8">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="animate-pulse bg-gray-200 h-48 rounded-2xl"></div>
        ))}
      </div>
    );
  }

  return (
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
                <h4 className="font-semibold text-gray-900 mb-4">{getText('seachat.features.api.exampleRequestResponse', 'Example Request/Response')}</h4>
                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-green-400 text-sm">
                    <code>{endpoint.example}</code>
                  </pre>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">{getText('seachat.features.api.tryItOut', 'Try it out')}</h4>
                <div className="space-y-4">
                  <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                    <Terminal className="w-4 h-4" />
                    <span>{getText('seachat.features.api.testConsole', 'Test in Console')}</span>
                  </button>
                  <button 
                    onClick={() => copyEndpoint(endpoint.example, index)}
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 font-medium"
                  >
                    {copiedEndpoint === index ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedEndpoint === index ? 'Copied!' : getText('seachat.features.api.copyCurl', 'Copy cURL')}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};