import React, { useState, useEffect } from 'react';
import { User, Bot, Brain, Zap, MessageCircle, TrendingUp } from 'lucide-react';

interface Conversation {
  id: number;
  type: 'human' | 'ai';
  message: string;
  learned: boolean;
  progress: number;
}

const AgentToAI = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [aiConfidence, setAiConfidence] = useState(20);
  const [phase, setPhase] = useState<'learning' | 'handoff' | 'autonomous'>('learning');
  const [nextId, setNextId] = useState(1);

  const humanMessages = [
    "Thank you for contacting support! How can I help?",
    "I understand your concern. Let me check that for you.",
    "Based on our policy, here's what I recommend...",
    "Is there anything else I can help you with today?",
  ];

  const aiMessages = [
    "I've learned to handle this type of inquiry automatically.",
    "Based on previous conversations, I can help with this.",
    "I understand your question and can provide instant assistance.",
    "I'm ready to handle similar requests independently.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (phase === 'learning' && aiConfidence < 80) {
        // Human agent phase
        const newConversation: Conversation = {
          id: nextId,
          type: 'human',
          message: humanMessages[Math.floor(Math.random() * humanMessages.length)],
          learned: false,
          progress: 0,
        };
        
        setConversations(prev => [...prev.slice(-4), newConversation]);
        setAiConfidence(prev => Math.min(prev + 15, 80));
        setNextId(prev => prev + 1);
        
        // Mark as learned after a delay
        setTimeout(() => {
          setConversations(prev => 
            prev.map(conv => 
              conv.id === newConversation.id ? { ...conv, learned: true } : conv
            )
          );
        }, 1000);
        
      } else if (phase === 'learning' && aiConfidence >= 80) {
        setPhase('handoff');
        setTimeout(() => setPhase('autonomous'), 2000);
        
      } else if (phase === 'autonomous') {
        // AI autonomous phase
        const newConversation: Conversation = {
          id: nextId,
          type: 'ai',
          message: aiMessages[Math.floor(Math.random() * aiMessages.length)],
          learned: true,
          progress: 0,
        };
        
        setConversations(prev => [...prev.slice(-4), newConversation]);
        setAiConfidence(prev => Math.min(prev + 5, 100));
        setNextId(prev => prev + 1);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [phase, aiConfidence, nextId]);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setConversations(prev =>
        prev.map(conv => ({
          ...conv,
          progress: Math.min(conv.progress + 5, 100)
        }))
      );
    }, 100);

    return () => clearInterval(progressInterval);
  }, []);

  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl overflow-hidden p-6">
      {/* Phase Indicator */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
        <div className={`px-3 py-1 rounded-full text-sm font-medium ${
          phase === 'learning' ? 'bg-blue-100 text-blue-800' :
          phase === 'handoff' ? 'bg-yellow-100 text-yellow-800' :
          'bg-green-100 text-green-800'
        }`}>
          {phase === 'learning' ? '🧑‍💼 Learning from Human' :
           phase === 'handoff' ? '🤝 Smooth Handoff' :
           '🤖 AI Autonomous'}
        </div>
        
        {/* AI Confidence Meter */}
        <div className="flex items-center space-x-2">
          <Brain className="w-4 h-4 text-purple-600" />
          <div className="w-20 h-2 bg-gray-200 rounded-full">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-500"
              style={{ width: `${aiConfidence}%` }}
            />
          </div>
          <span className="text-xs font-medium text-gray-600">{aiConfidence}%</span>
        </div>
      </div>

      {/* Agent Avatars */}
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 flex items-center space-x-8">
        {/* Human Agent */}
        <div className={`relative transition-all duration-500 ${
          phase === 'autonomous' ? 'opacity-50 scale-90' : 'opacity-100 scale-100'
        }`}>
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
            <User className="w-8 h-8 text-white" />
          </div>
          {phase === 'learning' && (
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <MessageCircle className="w-3 h-3 text-white" />
            </div>
          )}
        </div>

        {/* Transfer Arrow */}
        {phase === 'handoff' && (
          <div className="flex items-center">
            <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded animate-pulse" />
            <Zap className="w-6 h-6 text-yellow-500 animate-bounce" />
            <div className="w-8 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded animate-pulse" />
          </div>
        )}

        {/* AI Agent */}
        <div className={`relative transition-all duration-500 ${
          phase === 'autonomous' ? 'opacity-100 scale-110' : 
          phase === 'handoff' ? 'opacity-80 scale-105' : 'opacity-60 scale-90'
        }`}>
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
            <Bot className="w-8 h-8 text-white" />
          </div>
          {phase === 'autonomous' && (
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
              <TrendingUp className="w-3 h-3 text-white" />
            </div>
          )}
        </div>
      </div>

      {/* Conversation Feed */}
      <div className="absolute top-40 left-6 right-6 bottom-16 overflow-hidden">
        <div className="space-y-3">
          {conversations.slice(-3).map((conv) => (
            <div
              key={conv.id}
              className={`flex items-start space-x-3 transition-all duration-500 ${
                conv.progress < 50 ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                conv.type === 'human' ? 'bg-blue-500' : 'bg-purple-500'
              }`}>
                {conv.type === 'human' ? 
                  <User className="w-4 h-4 text-white" /> : 
                  <Bot className="w-4 h-4 text-white" />
                }
              </div>
              <div className={`flex-1 p-3 rounded-lg shadow-sm ${
                conv.type === 'human' ? 'bg-blue-50' : 'bg-purple-50'
              }`}>
                <p className="text-sm text-gray-800">{conv.message}</p>
                {conv.learned && (
                  <div className="flex items-center mt-2 space-x-1">
                    <Brain className="w-3 h-3 text-green-500" />
                    <span className="text-xs text-green-600 font-medium">Learned</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Title */}
      <div className="absolute bottom-4 left-4 right-4 text-center">
        <h3 className="text-lg font-bold text-gray-800">Human-to-AI Handoff</h3>
        <p className="text-sm text-gray-600">Start with humans, scale with intelligent AI</p>
      </div>
    </div>
  );
};

export default AgentToAI;
