import { Brain, Search, Clock, Target, FileText, Database, Zap, Star, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AdvancedAIPage = () => {
  const { t } = useTranslation();
  
  const advancedFeatures = [
    {
      icon: Search,
      title: t('features.advancedAI.rag.title', 'Retrieval Augmented Generation (RAG)'),
      description: t('features.advancedAI.rag.description', 'Advanced search capabilities combining keyword, vector, and hybrid search for precise information retrieval.'),
      details: [
        t('features.advancedAI.rag.details.semantic', 'Semantic vector search for contextual understanding'),
        t('features.advancedAI.rag.details.keyword', 'Traditional keyword matching for exact queries'),
        t('features.advancedAI.rag.details.hybrid', 'Hybrid algorithms combining both approaches'),
        t('features.advancedAI.rag.details.indexing', 'Real-time content indexing and updates')
      ],
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Brain,
      title: t('features.advancedAI.memory.title', 'Long Term Memory System'),
      description: t('features.advancedAI.memory.description', 'Persistent user memory that creates personalized experiences across all interactions.'),
      details: [
        t('features.advancedAI.memory.details.preferences', 'User preference tracking and storage'),
        t('features.advancedAI.memory.details.history', 'Conversation history analysis'),
        t('features.advancedAI.memory.details.patterns', 'Behavioral pattern recognition'),
        t('features.advancedAI.memory.details.continuity', 'Cross-session continuity and context')
      ],
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Clock,
      title: t('features.advancedAI.timeAwareness.title', 'Time Awareness Integration'),
      description: t('features.advancedAI.timeAwareness.description', 'Context-aware responses based on current time, timezone, and temporal relevance.'),
      details: [
        t('features.advancedAI.timeAwareness.details.timestamp', 'Real-time timestamp integration'),
        t('features.advancedAI.timeAwareness.details.timezone', 'Timezone-aware scheduling and responses'),
        t('features.advancedAI.timeAwareness.details.recommendations', 'Time-sensitive recommendations'),
        t('features.advancedAI.timeAwareness.details.hours', 'Business hours optimization')
      ],
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: Target,
      title: t('features.advancedAI.context.title', 'Smart Context Extraction'),
      description: t('features.advancedAI.context.description', 'Intelligent field mapping and data extraction for better user comprehension.'),
      details: [
        t('features.advancedAI.context.details.fields', 'Custom field definitions and mapping'),
        t('features.advancedAI.context.details.extraction', 'Automatic data extraction from conversations'),
        t('features.advancedAI.context.details.language', 'User language preference detection'),
        t('features.advancedAI.context.details.dynamic', 'Dynamic context building and updates')
      ],
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: FileText,
      title: t('features.advancedAI.references.title', 'Referenced Chat Results'),
      description: t('features.advancedAI.references.description', 'Transparent AI responses with source citations and confidence scoring.'),
      details: [
        t('features.advancedAI.references.details.linking', 'Source document linking and citations'),
        t('features.advancedAI.references.details.tracking', 'Citation tracking and verification'),
        t('features.advancedAI.references.details.confidence', 'Confidence scoring for responses'),
        t('features.advancedAI.references.details.verification', 'Fact verification and validation')
      ],
      color: 'from-teal-500 to-blue-600'
    },
    {
      icon: Database,
      title: t('features.advancedAI.knowledge.title', 'Knowledge Base Refinement'),
      description: t('features.advancedAI.knowledge.description', 'Continuous improvement of knowledge base accuracy and relevance.'),
      details: [
        t('features.advancedAI.knowledge.details.updating', 'Auto-updating content based on interactions'),
        t('features.advancedAI.knowledge.details.scoring', 'Quality scoring and content ranking'),
        t('features.advancedAI.knowledge.details.relevance', 'Relevance optimization algorithms'),
        t('features.advancedAI.knowledge.details.analytics', 'Performance analytics and insights')
      ],
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  const memoryExamples = [
    {
      field: t('features.advancedAI.memoryExamples.language.field', 'User_Language'),
      description: t('features.advancedAI.memoryExamples.language.description', 'Remembers preferred communication language'),
      example: t('features.advancedAI.memoryExamples.language.example', 'Customer prefers Spanish responses')
    },
    {
      field: t('features.advancedAI.memoryExamples.product.field', 'Product_Interest'),
      description: t('features.advancedAI.memoryExamples.product.description', 'Tracks product categories of interest'),
      example: t('features.advancedAI.memoryExamples.product.example', 'Interested in premium software solutions')
    },
    {
      field: t('features.advancedAI.memoryExamples.history.field', 'Support_History'),
      description: t('features.advancedAI.memoryExamples.history.description', 'Maintains context of previous issues'),
      example: t('features.advancedAI.memoryExamples.history.example', 'Previously had billing questions resolved')
    },
    {
      field: t('features.advancedAI.memoryExamples.style.field', 'Communication_Style'),
      description: t('features.advancedAI.memoryExamples.style.description', 'Adapts to preferred interaction style'),
      example: t('features.advancedAI.memoryExamples.style.example', 'Prefers detailed technical explanations')
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Brain className="w-16 h-16 text-pink-300 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold">
                {t('features.advancedAI.title', 'Advanced AI Features')}
              </h1>
            </div>
            <p className="text-2xl text-purple-200 mb-8 max-w-4xl mx-auto">
              {t('features.advancedAI.subtitle', 'Next-generation AI intelligence with memory, context awareness, and advanced reasoning capabilities for truly personalized customer experiences.')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://chat.seasalt.ai/gpt/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-500 hover:bg-pink-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 text-center"
              >
                {t('features.advancedAI.exploreButton', 'Explore Advanced AI')}
              </a>
              <a
                href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all text-center"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('features.advancedAI.capabilities.title', 'Cutting-Edge AI Capabilities')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('features.advancedAI.capabilities.subtitle', 'Experience the future of customer support with our advanced AI features that learn, remember, and adapt.')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {advancedFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-3xl flex items-center justify-center mb-6`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="space-y-3">
                    {feature.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Memory System Deep Dive */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('features.advancedAI.memory.sectionTitle', 'Long Term Memory in Action')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('features.advancedAI.memory.sectionSubtitle', 'See how our AI remembers and learns from every interaction to provide increasingly personalized support.')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                {t('features.advancedAI.memory.fieldsTitle', 'Context Extraction Fields')}
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                {t('features.advancedAI.memory.fieldsDescription', 'Our AI automatically identifies and stores key information about each user, creating rich profiles that enhance every future interaction.')}
              </p>
              
              <div className="space-y-6">
                {memoryExamples.map((example, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-purple-100">
                    <div className="flex items-center mb-3">
                      <code className="bg-purple-100 text-purple-800 px-3 py-1 rounded-lg font-mono text-sm">
                        {example.field}
                      </code>
                    </div>
                    <p className="text-gray-700 mb-2">{example.description}</p>
                    <p className="text-sm text-gray-500 italic">{t('features.advancedAI.memory.example', 'Example')}: {example.example}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h4 className="text-xl font-bold text-gray-900 mb-6">{t('features.advancedAI.memory.timeline', 'Memory Timeline')}</h4>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mt-1"></div>
                  <div>
                    <div className="font-semibold text-gray-900">{t('features.advancedAI.memory.firstInteraction', 'First Interaction')}</div>
                    <div className="text-sm text-gray-600">{t('features.advancedAI.memory.firstInteractionDesc', 'AI learns user preferences and context')}</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-purple-500 rounded-full mt-1"></div>
                  <div>
                    <div className="font-semibold text-gray-900">{t('features.advancedAI.memory.ongoingConversations', 'Ongoing Conversations')}</div>
                    <div className="text-sm text-gray-600">{t('features.advancedAI.memory.ongoingConversationsDesc', 'Continuously updates user profile')}</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-green-500 rounded-full mt-1"></div>
                  <div>
                    <div className="font-semibold text-gray-900">{t('features.advancedAI.memory.returnVisits', 'Return Visits')}</div>
                    <div className="text-sm text-gray-600">{t('features.advancedAI.memory.returnVisitsDesc', 'Provides personalized, context-aware responses')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RAG Technology Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('features.advancedAI.rag.sectionTitle', 'Retrieval Augmented Generation')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('features.advancedAI.rag.sectionSubtitle', 'Advanced search technology that combines multiple approaches for the most accurate information retrieval.')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <Search className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('features.advancedAI.rag.keyword', 'Keyword Search')}</h3>
              <p className="text-gray-600">{t('features.advancedAI.rag.keywordDesc', 'Traditional exact-match searching for precise queries and specific terms.')}</p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
              <Brain className="w-16 h-16 text-purple-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('features.advancedAI.rag.vector', 'Vector Search')}</h3>
              <p className="text-gray-600">{t('features.advancedAI.rag.vectorDesc', 'Semantic understanding that finds contextually relevant information.')}</p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 border border-green-100">
              <Zap className="w-16 h-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('features.advancedAI.rag.hybrid', 'Hybrid Search')}</h3>
              <p className="text-gray-600">{t('features.advancedAI.rag.hybridDesc', 'Best of both worlds, combining keyword precision with semantic understanding.')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Star className="w-12 h-12 text-yellow-300 mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              {t('features.advancedAI.cta.title', 'Experience the Future of AI')}
            </h2>
          </div>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            {t('features.advancedAI.cta.subtitle', 'Ready to transform your customer support with advanced AI that remembers, learns, and adapts? Start your journey with our cutting-edge technology.')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://chat.seasalt.ai/gpt/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
            >
              Sign Up For Free
            </a>
            <a
              href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center"
            >
              Schedule Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdvancedAIPage;