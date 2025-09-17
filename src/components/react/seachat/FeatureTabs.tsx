import { useState, useEffect, useMemo } from 'react';
import { Users, Bot, BookOpen, Zap, Check, Brain, Clock, Search, Database, FileText, Target } from 'lucide-react';
import { useTranslation, type SupportedLanguage } from '../../../i18n/helpers';

// Define interfaces for type safety
interface AdvancedFeature {
  icon: any;
  title: string;
  description: string;
  details: string[];
}

interface FeatureTabsProps {
  lang: SupportedLanguage;
  translations?: any;
}

const FeatureTabs: React.FC<FeatureTabsProps> = ({ lang, translations }) => {
  const { t: hookT, isLoading } = translations ? 
    { t: null, isLoading: false } : 
    useTranslation(lang);

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

  const getTextArray = (key: string, fallback: string[] = []): string[] => {
    if (translations) {
      const keys = key.split('.');
      let result: any = translations;
      
      for (const k of keys) {
        if (result && typeof result === 'object' && k in result) {
          result = result[k];
        } else {
          return fallback;
        }
      }
      
      return Array.isArray(result) ? result : fallback;
    }
    
    if (hookT) {
      const result = hookT(key, { returnObjects: true });
      return Array.isArray(result) ? result : fallback;
    }
    
    return fallback;
  };

  const [activeTab, setActiveTab] = useState('agent-chat');

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse bg-gray-200 h-96 rounded-2xl"></div>
        </div>
      </section>
    );
  }

  const tabs = useMemo(() => [
    { id: 'agent-chat', label: getText('seachat.featureTabs.tabs.humanAgent', 'Human Agent'), icon: Users },
    { id: 'ai-agent', label: getText('seachat.featureTabs.tabs.aiAgent', 'AI Agent'), icon: Bot },
    { id: 'advanced-ai', label: getText('seachat.featureTabs.tabs.advancedAI', 'Advanced AI'), icon: Brain },
    { id: 'knowledge-base', label: getText('seachat.featureTabs.tabs.knowledgeBase', 'Knowledge Base'), icon: BookOpen },
    { id: 'integrations', label: getText('seachat.featureTabs.tabs.integrations', 'Integrations'), icon: Zap }
  ], [getText]);

  // Auto-cycle tabs every 3 seconds
  useEffect(() => {
    const tabIds = tabs.map(tab => tab.id);
    const interval = setInterval(() => {
      setActiveTab(prev => {
        const idx = tabIds.indexOf(prev);
        return tabIds[(idx + 1) % tabIds.length];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [tabs]);

  const tabContent: Record<string, any> = useMemo(() => ({
    'agent-chat': {
      title: getText('seachat.featureTabs.content.agentChat.title', 'Human Agent Excellence'),
      subtitle: getText('seachat.featureTabs.content.agentChat.subtitle', 'Start with real human support, completely free'),
      features: getTextArray('seachat.featureTabs.content.agentChat.features', [
        'Unlimited free agent hours',
        'Real-time conversation management',
        'Multi-agent collaboration',
        'Advanced labeling and routing',
        'Performance analytics',
        'Custom workflows'
      ]),
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    },
    'ai-agent': {
      title: getText('seachat.featureTabs.content.aiAgent.title', 'Intelligent AI Automation'),
      subtitle: getText('seachat.featureTabs.content.aiAgent.subtitle', 'Scale seamlessly with smart AI that learns'),
      features: getTextArray('seachat.featureTabs.content.aiAgent.features', [
        'Context-aware responses',
        'Learning from conversations',
        'Seamless human handoff',
        'Multi-language support',
        'Custom AI training',
        'Voice agent capabilities'
      ]),
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    },
    'advanced-ai': {
      title: getText('seachat.featureTabs.content.advancedAI.title', 'Next-Generation AI Intelligence'),
      subtitle: getText('seachat.featureTabs.content.advancedAI.subtitle', 'Advanced AI features for personalized experiences'),
      features: getTextArray('seachat.featureTabs.content.advancedAI.features', [
        'Retrieval Augmented Generation (RAG)',
        'Long-term user memory system',
        'Time-aware contextual responses',
        'Smart context extraction',
        'Referenced chat results',
        'Knowledge base refinement'
      ]),
      image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      advancedFeatures: [
        {
          icon: Search,
          title: getText('seachat.featureTabs.advancedAI.features.rag.title', 'Retrieval Augmented Generation'),
          description: getText('seachat.featureTabs.advancedAI.features.rag.description', 'Keyword, Vector, and Hybrid Search for precise information retrieval'),
          details: [
            getText('seachat.featureTabs.advancedAI.features.rag.details.0', 'Semantic vector search'),
            getText('seachat.featureTabs.advancedAI.features.rag.details.1', 'Keyword matching'),
            getText('seachat.featureTabs.advancedAI.features.rag.details.2', 'Hybrid search algorithms'),
            getText('seachat.featureTabs.advancedAI.features.rag.details.3', 'Real-time content indexing')
          ]
        },
        {
          icon: Brain,
          title: getText('seachat.featureTabs.advancedAI.features.memory.title', 'Long Term Memory'),
          description: getText('seachat.featureTabs.advancedAI.features.memory.description', 'Personalized experiences through persistent user memory'),
          details: [
            getText('seachat.featureTabs.advancedAI.features.memory.details.0', 'User preference tracking'),
            getText('seachat.featureTabs.advancedAI.features.memory.details.1', 'Conversation history analysis'),
            getText('seachat.featureTabs.advancedAI.features.memory.details.2', 'Behavioral pattern recognition'),
            getText('seachat.featureTabs.advancedAI.features.memory.details.3', 'Cross-session continuity')
          ]
        },
        {
          icon: Clock,
          title: getText('seachat.featureTabs.advancedAI.features.timeAware.title', 'Time Awareness'),
          description: getText('seachat.featureTabs.advancedAI.features.timeAware.description', 'Context-aware responses based on current time and timezone'),
          details: [
            getText('seachat.featureTabs.advancedAI.features.timeAware.details.0', 'Real-time timestamp integration'),
            getText('seachat.featureTabs.advancedAI.features.timeAware.details.1', 'Timezone-aware scheduling'),
            getText('seachat.featureTabs.advancedAI.features.timeAware.details.2', 'Time-sensitive recommendations'),
            getText('seachat.featureTabs.advancedAI.features.timeAware.details.3', 'Business hours optimization')
          ]
        },
        {
          icon: Target,
          title: getText('seachat.featureTabs.advancedAI.features.contextExtraction.title', 'Context Extraction'),
          description: getText('seachat.featureTabs.advancedAI.features.contextExtraction.description', 'Intelligent field mapping for better user comprehension'),
          details: [
            getText('seachat.featureTabs.advancedAI.features.contextExtraction.details.0', 'Custom field definitions'),
            getText('seachat.featureTabs.advancedAI.features.contextExtraction.details.1', 'Automatic data extraction'),
            getText('seachat.featureTabs.advancedAI.features.contextExtraction.details.2', 'User language preferences'),
            getText('seachat.featureTabs.advancedAI.features.contextExtraction.details.3', 'Dynamic context building')
          ]
        },
        {
          icon: FileText,
          title: getText('seachat.featureTabs.advancedAI.features.referencedResults.title', 'Referenced Results'),
          description: getText('seachat.featureTabs.advancedAI.features.referencedResults.description', 'Transparent AI responses with source citations'),
          details: [
            getText('seachat.featureTabs.advancedAI.features.referencedResults.details.0', 'Source document linking'),
            getText('seachat.featureTabs.advancedAI.features.referencedResults.details.1', 'Citation tracking'),
            getText('seachat.featureTabs.advancedAI.features.referencedResults.details.2', 'Confidence scoring'),
            getText('seachat.featureTabs.advancedAI.features.referencedResults.details.3', 'Fact verification')
          ]
        },
        {
          icon: Database,
          title: getText('seachat.featureTabs.advancedAI.features.knowledgeRefinement.title', 'Knowledge Refinement'),
          description: getText('seachat.featureTabs.advancedAI.features.knowledgeRefinement.description', 'Continuous improvement of knowledge base accuracy'),
          details: [
            getText('seachat.featureTabs.advancedAI.features.knowledgeRefinement.details.0', 'Auto-updating content'),
            getText('seachat.featureTabs.advancedAI.features.knowledgeRefinement.details.1', 'Quality scoring'),
            getText('seachat.featureTabs.advancedAI.features.knowledgeRefinement.details.2', 'Relevance optimization'),
            getText('seachat.featureTabs.advancedAI.features.knowledgeRefinement.details.3', 'Performance analytics')
          ]
        }
      ]
    },
    'knowledge-base': {
      title: getText('seachat.featureTabs.content.knowledgeBase.title', 'Comprehensive Knowledge Hub'),
      subtitle: getText('seachat.featureTabs.content.knowledgeBase.subtitle', 'Upload 30+ file types for instant AI responses'),
      features: getTextArray('seachat.featureTabs.content.knowledgeBase.features', [
        'PDF, Excel, CSV, Word support',
        'Website content ingestion',
        'Image and video processing',
        'Rich response formatting',
        'Auto-updating content',
        'Version control'
      ]),
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    },
    'integrations': {
      title: getText('seachat.featureTabs.content.integrations.title', 'Powerful Integrations'),
      subtitle: getText('seachat.featureTabs.content.integrations.subtitle', 'Connect with your favorite tools and platforms'),
      features: getTextArray('seachat.featureTabs.content.integrations.features', [
        'CRM integrations (Salesforce, HubSpot)',
        'Calendar booking (Google, Outlook)',
        'E-commerce platforms',
        'Marketing tools',
        'Custom API access',
        'Webhook support'
      ]),
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    }
  }), [getText, getTextArray]);

  const currentContent = tabContent[activeTab as keyof typeof tabContent];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {getText('seachat.featureTabs.title', 'Powerful Features, Simple Setup')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {getText('seachat.featureTabs.subtitle', 'Explore our comprehensive feature set designed to transform your customer support experience.')}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12 bg-gray-100 rounded-2xl p-2 max-w-4xl mx-auto">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 text-sm ${
                  activeTab === tab.id
                    ? 'bg-white text-blue-600 shadow-md transform scale-105'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        {activeTab === 'advanced-ai' ? (
          // Advanced AI Features Layout
          <div className="space-y-16">
            {/* Header */}
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {currentContent.title}
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                {currentContent.subtitle}
              </p>
            </div>

            {/* Advanced Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentContent.advancedFeatures?.map((feature: AdvancedFeature, index: number) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h4>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {feature.details.map((detail: string, idx: number) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 flex-shrink-0"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          // Standard Tab Content Layout
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {currentContent.title}
                </h3>
                <p className="text-xl text-gray-600 mb-8">
                  {currentContent.subtitle}
                </p>
              </div>

              <div className="grid gap-4">
                {(currentContent.features as string[]).map((feature: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 group"
                  >
                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://chat.seasalt.ai/gpt/signup" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 inline-block text-center">
                  {getText('seachat.featureTabs.content.agentChat.tryFeature', 'Try This Feature')}
                </a>
              </div>
            </div>

            {/* Image/Demo */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src={currentContent.image}
                  alt={currentContent.title}
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeatureTabs;