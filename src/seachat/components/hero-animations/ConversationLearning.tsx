import React, { useState, useEffect } from 'react';
import { Brain, FileText, TrendingUp, Zap, BookOpen, MessageCircle, CheckCircle } from 'lucide-react';

interface Document {
  id: number;
  name: string;
  type: 'pdf' | 'csv' | 'doc' | 'website';
  progress: number;
  processed: boolean;
}

interface KnowledgeNode {
  id: number;
  x: number;
  y: number;
  concept: string;
  connections: number[];
  strength: number;
}

interface Conversation {
  id: number;
  question: string;
  improvement: string;
  accuracy: number;
}

const ConversationLearning = () => {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [knowledgeNodes, setKnowledgeNodes] = useState<KnowledgeNode[]>([]);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [aiAccuracy, setAiAccuracy] = useState(65);
  const [phase, setPhase] = useState<'uploading' | 'processing' | 'learning' | 'mastery'>('uploading');

  const documentTypes = [
    { name: 'Product Manual.pdf', type: 'pdf' as const },
    { name: 'FAQ Database.csv', type: 'csv' as const },
    { name: 'Support Guide.doc', type: 'doc' as const },
    { name: 'Website Content', type: 'website' as const },
  ];

  const knowledgeConcepts = [
    'Product Features', 'Pricing Plans', 'Support Policies', 'Technical Specs',
    'User Guidelines', 'Troubleshooting', 'Integration Steps', 'Best Practices'
  ];

  const conversationExamples = [
    { question: 'How do I reset my password?', improvement: 'Learned step-by-step process', accuracy: 75 },
    { question: 'What are your pricing plans?', improvement: 'Added detailed comparisons', accuracy: 85 },
    { question: 'Integration with Slack?', improvement: 'Improved technical guidance', accuracy: 90 },
    { question: 'Billing question', improvement: 'Enhanced policy understanding', accuracy: 95 },
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (phase === 'uploading') {
      interval = setInterval(() => {
        setDocuments(prev => {
          if (prev.length < documentTypes.length) {
            const newDoc: Document = {
              id: prev.length,
              name: documentTypes[prev.length].name,
              type: documentTypes[prev.length].type,
              progress: 0,
              processed: false,
            };
            return [...prev, newDoc];
          }
          return prev;
        });
      }, 1500);
    } else if (phase === 'processing') {
      interval = setInterval(() => {
        setDocuments(prev => 
          prev.map(doc => {
            if (!doc.processed && doc.progress < 100) {
              const newProgress = Math.min(doc.progress + 20, 100);
              return {
                ...doc,
                progress: newProgress,
                processed: newProgress === 100,
              };
            }
            return doc;
          })
        );
      }, 800);
    } else if (phase === 'learning') {
      interval = setInterval(() => {
        if (knowledgeNodes.length < knowledgeConcepts.length) {
          const newNode: KnowledgeNode = {
            id: knowledgeNodes.length,
            x: Math.random() * 70 + 15,
            y: Math.random() * 60 + 20,
            concept: knowledgeConcepts[knowledgeNodes.length],
            connections: [],
            strength: 0.3 + Math.random() * 0.7,
          };
          setKnowledgeNodes(prev => [...prev, newNode]);
        }
      }, 1000);
    } else if (phase === 'mastery') {
      interval = setInterval(() => {
        if (conversations.length < conversationExamples.length) {
          const newConv = conversationExamples[conversations.length];
          setConversations(prev => [...prev, newConv]);
          setAiAccuracy(newConv.accuracy);
        }
      }, 2000);
    }

    return () => clearInterval(interval);
  }, [phase, knowledgeNodes.length, conversations.length]);

  useEffect(() => {
    // Phase transitions
    const timer = setTimeout(() => {
      if (phase === 'uploading' && documents.length >= documentTypes.length) {
        setPhase('processing');
      } else if (phase === 'processing' && documents.every(doc => doc.processed)) {
        setPhase('learning');
      } else if (phase === 'learning' && knowledgeNodes.length >= knowledgeConcepts.length) {
        setPhase('mastery');
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [phase, documents, knowledgeNodes]);

  const getPhaseIcon = () => {
    switch (phase) {
      case 'uploading': return FileText;
      case 'processing': return Zap;
      case 'learning': return Brain;
      case 'mastery': return TrendingUp;
    }
  };

  const getPhaseColor = () => {
    switch (phase) {
      case 'uploading': return 'text-blue-600';
      case 'processing': return 'text-orange-600';
      case 'learning': return 'text-purple-600';
      case 'mastery': return 'text-green-600';
    }
  };

  const PhaseIcon = getPhaseIcon();

  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl overflow-hidden p-6">
      {/* Phase Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <PhaseIcon className={`w-6 h-6 ${getPhaseColor()}`} />
          <h3 className="text-lg font-bold text-gray-800 capitalize">{phase} Phase</h3>
        </div>
        <div className="flex items-center space-x-2">
          <Brain className="w-4 h-4 text-purple-600" />
          <div className="w-20 h-2 bg-gray-200 rounded-full">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-1000"
              style={{ width: `${aiAccuracy}%` }}
            />
          </div>
          <span className="text-xs font-medium text-gray-600">{aiAccuracy}%</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="relative h-72">
        {/* Uploading Phase */}
        {phase === 'uploading' && (
          <div className="space-y-3">
            {documents.map((doc, index) => (
              <div
                key={doc.id}
                className="flex items-center space-x-3 bg-white rounded-lg p-3 shadow-sm opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <FileText className="w-5 h-5 text-blue-600" />
                <span className="flex-1 text-sm font-medium text-gray-800">{doc.name}</span>
                <CheckCircle className="w-4 h-4 text-green-500" />
              </div>
            ))}
          </div>
        )}

        {/* Processing Phase */}
        {phase === 'processing' && (
          <div className="space-y-3">
            {documents.map((doc) => (
              <div key={doc.id} className="bg-white rounded-lg p-3 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-800">{doc.name}</span>
                  <span className="text-xs text-gray-600">{doc.progress}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all duration-500"
                    style={{ width: `${doc.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Learning Phase */}
        {phase === 'learning' && (
          <div className="relative h-full">
            {knowledgeNodes.map((node) => (
              <div
                key={node.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-fade-in"
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
              >
                <div 
                  className="bg-purple-500 rounded-full flex items-center justify-center text-white shadow-lg"
                  style={{ 
                    width: `${20 + node.strength * 20}px`, 
                    height: `${20 + node.strength * 20}px` 
                  }}
                >
                  <BookOpen className="w-3 h-3" />
                </div>
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded text-xs shadow-lg whitespace-nowrap">
                  {node.concept}
                </div>
              </div>
            ))}
            
            {/* Knowledge Connections */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {knowledgeNodes.map((node, i) => 
                knowledgeNodes.slice(i + 1).map((otherNode, j) => (
                  <line
                    key={`${i}-${j}`}
                    x1={`${node.x}%`}
                    y1={`${node.y}%`}
                    x2={`${otherNode.x}%`}
                    y2={`${otherNode.y}%`}
                    stroke="rgba(147, 51, 234, 0.3)"
                    strokeWidth="1"
                    strokeDasharray="2,2"
                    className="animate-pulse"
                  />
                ))
              )}
            </svg>
          </div>
        )}

        {/* Mastery Phase */}
        {phase === 'mastery' && (
          <div className="space-y-4">
            {conversations.map((conv, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-green-500 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <MessageCircle className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-gray-800">"{conv.question}"</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-3 h-3 text-green-600" />
                      <span className="text-xs text-green-600">{conv.improvement}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">{conv.accuracy}%</div>
                    <div className="text-xs text-gray-500">Accuracy</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Title */}
      <div className="absolute bottom-4 left-4 right-4 text-center">
        <h3 className="text-lg font-bold text-gray-800">AI Learning Journey</h3>
        <p className="text-sm text-gray-600">Watch AI get smarter from your content</p>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ConversationLearning;
