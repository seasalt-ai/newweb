import React, { useState, useEffect } from 'react';
import { Brain, BookOpen, Target, TrendingUp, Lightbulb, Zap, Database, MessageCircle } from 'lucide-react';
import { useTranslation, type SupportedLanguage } from '../../../../i18n/helpers';

interface Insight {
  id: string;
  type: 'pattern' | 'improvement' | 'learning';
  title: string;
  description: string;
  confidence: number;
  icon: React.ComponentType<any>;
  color: string;
}

interface KnowledgeNode {
  id: number;
  topic: string;
  connections: number;
  strength: number;
  x: number;
  y: number;
  pulse: boolean;
}

interface ConversationLearningProps {
  lang: SupportedLanguage;
  translations?: any;
}

const ConversationLearning: React.FC<ConversationLearningProps> = ({ lang, translations }) => {
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

  const [insights, setInsights] = useState<Insight[]>([
    {
      id: '1',
      type: 'pattern',
      title: getText('seachat.heroAnimations.conversationLearning.insights.pattern.title', 'Usage Pattern Detected'),
      description: getText('seachat.heroAnimations.conversationLearning.insights.pattern.description', 'Peak hours: 2-4 PM'),
      confidence: 92,
      icon: Target,
      color: 'text-blue-600'
    },
    {
      id: '2',
      type: 'improvement',
      title: getText('seachat.heroAnimations.conversationLearning.insights.improvement.title', 'Response Quality'),
      description: getText('seachat.heroAnimations.conversationLearning.insights.improvement.description', 'Accuracy improved 15%'),
      confidence: 87,
      icon: TrendingUp,
      color: 'text-green-600'
    },
    {
      id: '3',
      type: 'learning',
      title: getText('seachat.heroAnimations.conversationLearning.insights.learning.title', 'New Knowledge'),
      description: getText('seachat.heroAnimations.conversationLearning.insights.learning.description', '47 topics learned'),
      confidence: 95,
      icon: Lightbulb,
      color: 'text-yellow-600'
    }
  ]);

  const [knowledgeNodes, setKnowledgeNodes] = useState<KnowledgeNode[]>([]);
  const [learningScore, setLearningScore] = useState(78);
  const [activeInsight, setActiveInsight] = useState(0);

  // 處理載入狀態
  if (isLoading) {
    return (
      <div className="w-full h-96 bg-gradient-to-br from-purple-50 to-indigo-100 rounded-2xl flex items-center justify-center">
        <div className="animate-pulse bg-gray-200 h-32 w-32 rounded-2xl"></div>
      </div>
    );
  }

  useEffect(() => {
    // Initialize knowledge nodes
    const topics = [
      getText('seachat.heroAnimations.conversationLearning.topics.support', 'Support'),
      getText('seachat.heroAnimations.conversationLearning.topics.billing', 'Billing'),
      getText('seachat.heroAnimations.conversationLearning.topics.product', 'Product'),
      getText('seachat.heroAnimations.conversationLearning.topics.technical', 'Technical'),
      getText('seachat.heroAnimations.conversationLearning.topics.sales', 'Sales'),
    ];
    
    const initialNodes = topics.map((topic, index) => ({
      id: index + 1,
      topic,
      connections: Math.floor(Math.random() * 20) + 5,
      strength: Math.random() * 0.8 + 0.2,
      x: Math.random() * 70 + 15,
      y: Math.random() * 60 + 20,
      pulse: false
    }));
    
    setKnowledgeNodes(initialNodes);
  }, [getText]);

  useEffect(() => {
    // Animate knowledge nodes
    const nodeInterval = setInterval(() => {
      setKnowledgeNodes(prev => prev.map(node => ({
        ...node,
        pulse: Math.random() > 0.7,
        connections: Math.max(1, node.connections + Math.floor(Math.random() * 6 - 3)),
        strength: Math.min(1, Math.max(0.1, node.strength + (Math.random() * 0.2 - 0.1)))
      })));
    }, 2000);

    // Cycle through insights
    const insightInterval = setInterval(() => {
      setActiveInsight(prev => (prev + 1) % insights.length);
    }, 4000);

    // Update learning score
    const scoreInterval = setInterval(() => {
      setLearningScore(prev => {
        const change = Math.floor(Math.random() * 6 - 3);
        return Math.max(60, Math.min(99, prev + change));
      });
    }, 3000);

    return () => {
      clearInterval(nodeInterval);
      clearInterval(insightInterval);
      clearInterval(scoreInterval);
    };
  }, [insights.length]);

  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-purple-50 to-indigo-100 rounded-2xl overflow-hidden p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Brain className="w-6 h-6 text-purple-600" />
          <h3 className="text-xl font-bold text-gray-800">{getText('seachat.heroAnimations.conversationLearning.title', 'AI Learning Center')}</h3>
        </div>
        <div className="flex items-center space-x-3">
          <div className="text-right">
            <div className="text-lg font-bold text-purple-600">{learningScore}%</div>
            <div className="text-xs text-gray-500">{getText('seachat.heroAnimations.conversationLearning.accuracy', 'Accuracy')}</div>
          </div>
          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
            <Database className="w-4 h-4 text-purple-600" />
          </div>
        </div>
      </div>

      {/* Knowledge Network Visualization */}
      <div className="relative h-32 mb-6 bg-white/70 backdrop-blur-sm rounded-xl border border-white/50 overflow-hidden">
        <svg className="w-full h-full">
          {/* Connection lines */}
          {knowledgeNodes.map((node1, i) =>
            knowledgeNodes.slice(i + 1).map((node2, j) => {
              const distance = Math.sqrt(
                Math.pow(node2.x - node1.x, 2) + Math.pow(node2.y - node1.y, 2)
              );
              
              if (distance < 40) {
                return (
                  <line
                    key={`${i}-${j}`}
                    x1={`${node1.x}%`}
                    y1={`${node1.y}%`}
                    x2={`${node2.x}%`}
                    y2={`${node2.y}%`}
                    stroke="rgb(147 51 234 / 0.3)"
                    strokeWidth="1"
                    className="animate-pulse"
                  />
                );
              }
              return null;
            })
          )}
          
          {/* Knowledge nodes */}
          {knowledgeNodes.map((node) => (
            <g key={node.id}>
              <circle
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r={node.strength * 8 + 4}
                fill="rgb(147 51 234 / 0.7)"
                className={node.pulse ? 'animate-ping' : ''}
              />
              <circle
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r={node.strength * 6 + 3}
                fill="rgb(147 51 234)"
              />
            </g>
          ))}
        </svg>

        {/* Node labels */}
        {knowledgeNodes.map((node) => (
          <div
            key={`label-${node.id}`}
            className="absolute text-xs text-gray-600 font-medium pointer-events-none"
            style={{
              left: `${node.x}%`,
              top: `${node.y + 8}%`,
              transform: 'translate(-50%, 0)'
            }}
          >
            {node.topic}
          </div>
        ))}
      </div>

      {/* Active Insight */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-white/50 mb-4">
        <div className="flex items-start space-x-4">
          <div className={`p-2 rounded-lg ${
            insights[activeInsight].type === 'pattern' ? 'bg-blue-100' :
            insights[activeInsight].type === 'improvement' ? 'bg-green-100' :
            'bg-yellow-100'
          }`}>
            {React.createElement(insights[activeInsight].icon, {
              className: `w-5 h-5 ${insights[activeInsight].color}`
            })}
          </div>
          
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-gray-800">{insights[activeInsight].title}</h4>
              <div className="flex items-center space-x-2">
                <div className="text-xs text-gray-500">{getText('seachat.heroAnimations.conversationLearning.confidence', 'Confidence')}</div>
                <div className="text-sm font-bold text-purple-600">{insights[activeInsight].confidence}%</div>
              </div>
            </div>
            <p className="text-sm text-gray-600">{insights[activeInsight].description}</p>
          </div>
        </div>
        
        {/* Progress indicator */}
        <div className="flex space-x-1 mt-3">
          {insights.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === activeInsight ? 'bg-purple-400 w-6' : 'bg-gray-200 w-2'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Learning Stats */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 text-center">
          <BookOpen className="w-5 h-5 text-blue-600 mx-auto mb-1" />
          <div className="text-lg font-bold text-gray-800">1,247</div>
          <div className="text-xs text-gray-500">{getText('seachat.heroAnimations.conversationLearning.stats.conversations', 'Conversations')}</div>
        </div>
        
        <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 text-center">
          <Zap className="w-5 h-5 text-yellow-600 mx-auto mb-1" />
          <div className="text-lg font-bold text-gray-800">89</div>
          <div className="text-xs text-gray-500">{getText('seachat.heroAnimations.conversationLearning.stats.improvements', 'Improvements')}</div>
        </div>
        
        <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 text-center">
          <MessageCircle className="w-5 h-5 text-green-600 mx-auto mb-1" />
          <div className="text-lg font-bold text-gray-800">4.8</div>
          <div className="text-xs text-gray-500">{getText('seachat.heroAnimations.conversationLearning.stats.rating', 'Avg Rating')}</div>
        </div>
      </div>

      {/* Title */}
      <div className="absolute bottom-4 left-4 right-4 text-center">
        <h3 className="text-lg font-bold text-gray-800">{getText('seachat.heroAnimations.conversationLearning.subtitle', 'Continuous Learning')}</h3>
        <p className="text-sm text-gray-600">{getText('seachat.heroAnimations.conversationLearning.description', 'AI that grows smarter')}</p>
      </div>
    </div>
  );
};

export default ConversationLearning;