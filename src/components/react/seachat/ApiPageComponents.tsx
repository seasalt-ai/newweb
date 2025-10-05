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
  content: 'I\'d be happy to help you with your order!',
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
  "message": "Hello, I need help",
  "metadata": {
    "source": "contact-form",
    "priority": "high"
  }
}`,
      response: `{
  "id": "conv_789",
  "status": "active",
  "created_at": "2024-01-15T10:30:00Z",
  "customer": {
    "id": "cust_123",
    "name": "John Doe",
    "email": "john@example.com"
  }
}`
    },
    {
      method: 'GET',
      endpoint: '/api/v1/conversations/{id}',
      description: getText('seachat.features.api.endpoints.getConversation', 'Retrieve conversation details'),
      example: `GET /api/v1/conversations/conv_789
Authorization: Bearer your_api_key`,
      response: `{
  "id": "conv_789",
  "status": "active",
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:45:00Z",
  "customer": {
    "id": "cust_123",
    "name": "John Doe",
    "email": "john@example.com"
  },
  "agent": {
    "id": "agent_456",
    "name": "Sarah Smith",
    "type": "human"
  },
  "messages_count": 5,
  "tags": ["support", "urgent"]
}`
    },
    {
      method: 'POST',
      endpoint: '/api/v1/messages',
      description: getText('seachat.features.api.endpoints.sendMessage', 'Send a message in a conversation'),
      example: `{
  "conversation_id": "conv_789",
  "content": "How can I help you today?",
  "type": "text",
  "agent_id": "agent_456"
}`,
      response: `{
  "id": "msg_101",
  "conversation_id": "conv_789",
  "content": "How can I help you today?",
  "type": "text",
  "sent_at": "2024-01-15T10:45:30Z",
  "sender": {
    "id": "agent_456",
    "type": "agent"
  }
}`
    },
    {
      method: 'GET',
      endpoint: '/api/v1/messages',
      description: getText('seachat.features.api.endpoints.listMessages', 'List messages in a conversation'),
      example: `GET /api/v1/messages?conversation_id=conv_789&limit=20`,
      response: `{
  "messages": [
    {
      "id": "msg_100",
      "content": "Hello, I need help",
      "type": "text",
      "sent_at": "2024-01-15T10:30:15Z",
      "sender": {
        "id": "cust_123",
        "type": "customer"
      }
    },
    {
      "id": "msg_101",
      "content": "How can I help you today?",
      "type": "text",
      "sent_at": "2024-01-15T10:45:30Z",
      "sender": {
        "id": "agent_456",
        "type": "agent"
      }
    }
  ],
  "pagination": {
    "total": 5,
    "limit": 20,
    "offset": 0
  }
}`
    },
    {
      method: 'POST',
      endpoint: '/api/v1/webhooks',
      description: getText('seachat.features.api.endpoints.createWebhook', 'Create a webhook endpoint'),
      example: `{
  "url": "https://yourapp.com/webhooks/seachat",
  "events": [
    "message.received",
    "conversation.created",
    "conversation.resolved"
  ],
  "secret": "your_webhook_secret"
}`,
      response: `{
  "id": "webhook_123",
  "url": "https://yourapp.com/webhooks/seachat",
  "events": [
    "message.received",
    "conversation.created",
    "conversation.resolved"
  ],
  "status": "active",
  "created_at": "2024-01-15T10:30:00Z"
}`
    },
    {
      method: 'GET',
      endpoint: '/api/v1/agents',
      description: getText('seachat.features.api.endpoints.listAgents', 'List all agents'),
      example: `GET /api/v1/agents?status=active&type=human`,
      response: `{
  "agents": [
    {
      "id": "agent_456",
      "name": "Sarah Smith",
      "email": "sarah@company.com",
      "type": "human",
      "status": "online",
      "skills": ["support", "billing"],
      "active_conversations": 3
    },
    {
      "id": "ai_agent_001",
      "name": "AI Assistant",
      "type": "ai",
      "status": "active",
      "capabilities": ["faq", "order_status"],
      "active_conversations": 15
    }
  ]
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
                <div className="space-y-4">
                  <div>
                    <h5 className="text-sm font-medium text-gray-700 mb-2">Request</h5>
                    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-green-400 text-sm">
                        <code>{endpoint.example}</code>
                      </pre>
                    </div>
                  </div>
                  {endpoint.response && (
                    <div>
                      <h5 className="text-sm font-medium text-gray-700 mb-2">Response</h5>
                      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-blue-400 text-sm">
                          <code>{endpoint.response}</code>
                        </pre>
                      </div>
                    </div>
                  )}
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