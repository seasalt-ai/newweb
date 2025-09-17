import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { User, Bot, Brain, Zap, MessageCircle, TrendingUp } from 'lucide-react';
import { useTranslation, type SupportedLanguage } from '../../../../i18n/helpers';

interface Conversation {
  id: number;
  type: 'human' | 'ai';
  message: string;
  learned: boolean;
  progress: number;
}

interface AgentToAIProps {
  lang: SupportedLanguage;
  translations?: any;
}

const AgentToAI: React.FC<AgentToAIProps> = ({ lang, translations }) => {
  const { t: hookT, isLoading } = translations ? 
    { t: null, isLoading: false } : 
    useTranslation(lang);

  const getText = useCallback((key: string, fallback: string = key): string => {
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
  }, [translations, hookT, lang]);

  // 處理載入狀態
  if (isLoading) {
    return (
      <div className="w-full h-96 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl flex items-center justify-center">
        <div className="animate-pulse bg-gray-200 h-32 w-32 rounded-2xl"></div>
      </div>
    );
  }

  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [aiConfidence, setAiConfidence] = useState(20);
  const [phase, setPhase] = useState<'learning' | 'handoff' | 'autonomous'>('learning');
  const [nextId, setNextId] = useState(1);

  // humanMessages 和 aiMessages 現在直接在 useEffect 中定義，避免不必要的依賴

  // 初始化一些對話 - 使用預設值避免依賴 humanMessages
  useEffect(() => {
    const initialMessage = getText('seachat.heroAnimations.agentToAI.humanMessages.0', 'How can I help you with your order today?');
    const initialConversations = [
      {
        id: 1,
        type: 'human' as const,
        message: initialMessage,
        learned: false,
        progress: 50,
      }
    ];
    setConversations(initialConversations);
    setNextId(2);
  }, []); // 只在組件掛載時執行一次

  // 主要動畫邏輯 - 使用穩定的訊息陣列
  useEffect(() => {
    // 建立本地穩定的訊息陣列
    const stableHumanMessages = [
      getText('seachat.heroAnimations.agentToAI.humanMessages.0', 'How can I help you with your order today?'),
      getText('seachat.heroAnimations.agentToAI.humanMessages.1', 'Let me check that information for you'),
      getText('seachat.heroAnimations.agentToAI.humanMessages.2', 'I understand your concern, let me assist'),
      getText('seachat.heroAnimations.agentToAI.humanMessages.3', 'Thank you for your patience while I research this'),
    ];
    
    const stableAiMessages = [
      getText('seachat.heroAnimations.agentToAI.aiMessages.0', 'I can help you with your order. Let me check the status.'),
      getText('seachat.heroAnimations.agentToAI.aiMessages.1', 'Based on our records, here\'s what I found...'),
      getText('seachat.heroAnimations.agentToAI.aiMessages.2', 'I understand your concern. Let me provide a solution.'),
      getText('seachat.heroAnimations.agentToAI.aiMessages.3', 'I\'ve processed your request successfully.'),
    ];
    
    const interval = setInterval(() => {
      setNextId(currentNextId => {
        setPhase(currentPhase => {
          setAiConfidence(currentConfidence => {
            if (currentPhase === 'learning' && currentConfidence < 80) {
              // Human agent phase
              const newConversation: Conversation = {
                id: currentNextId,
                type: 'human',
                message: stableHumanMessages[Math.floor(Math.random() * stableHumanMessages.length)],
                learned: false,
                progress: 0,
              };
              
              setConversations(prev => [...prev.slice(-4), newConversation]);
              
              // Mark as learned after a delay
              setTimeout(() => {
                setConversations(prev => 
                  prev.map(conv => 
                    conv.id === newConversation.id ? { ...conv, learned: true } : conv
                  )
                );
              }, 1000);
              
              return Math.min(currentConfidence + 15, 80);
              
            } else if (currentPhase === 'learning' && currentConfidence >= 80) {
              setPhase('handoff');
              setTimeout(() => setPhase('autonomous'), 2000);
              return currentConfidence;
              
            } else if (currentPhase === 'autonomous') {
              // AI autonomous phase
              const newConversation: Conversation = {
                id: currentNextId,
                type: 'ai',
                message: stableAiMessages[Math.floor(Math.random() * stableAiMessages.length)],
                learned: true,
                progress: 0,
              };
              
              setConversations(prev => [...prev.slice(-4), newConversation]);
              return Math.min(currentConfidence + 5, 100);
            }
            return currentConfidence;
          });
          return currentPhase;
        });
        return currentNextId + 1;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [getText]); // 只依賴穩定的 getText

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
        <div className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-500 ${
          phase === 'learning' ? 'bg-blue-100 text-blue-800' :
          phase === 'handoff' ? 'bg-yellow-100 text-yellow-800 animate-pulse' :
          'bg-green-100 text-green-800'
        }`}>
          {phase === 'learning' ? getText('seachat.heroAnimations.agentToAI.phases.learning', 'Learning Phase') :
           phase === 'handoff' ? getText('seachat.heroAnimations.agentToAI.phases.handoff', 'Handoff') :
           getText('seachat.heroAnimations.agentToAI.phases.autonomous', 'AI Autonomous')}
        </div>
        
        {/* AI Confidence Meter */}
        <div className="flex items-center space-x-2">
          <Brain className="w-4 h-4 text-purple-600" />
          <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${aiConfidence}%` }}
            />
          </div>
          <span className="text-xs font-medium text-gray-600 min-w-[2.5rem]">{aiConfidence}%</span>
        </div>
      </div>

      {/* Agent Avatars */}
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 flex items-center space-x-8">
        {/* Human Agent */}
        <div className={`relative transition-all duration-1000 ${
          phase === 'autonomous' ? 'opacity-50 scale-90' : 'opacity-100 scale-100'
        }`}>
          <div className={`w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 ${
            phase === 'learning' ? 'animate-pulse' : ''
          }`}>
            <User className="w-8 h-8 text-white" />
          </div>
          {phase === 'learning' && (
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
              <MessageCircle className="w-3 h-3 text-white" />
            </div>
          )}
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-600 whitespace-nowrap">
            {getText('seachat.heroAnimations.agentToAI.humanAgent', 'Human Agent')}
          </div>
        </div>

        {/* Transfer Arrow/Animation */}
        <div className="flex items-center">
          {phase === 'handoff' ? (
            <div className="flex items-center animate-pulse">
              <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded animate-pulse" />
              <Zap className="w-6 h-6 text-yellow-500 animate-bounce mx-2" />
              <div className="w-8 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded animate-pulse" />
            </div>
          ) : (
            <div className="w-16 h-1 bg-gray-200 rounded">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded transition-all duration-1000"
                style={{ width: `${aiConfidence}%` }}
              />
            </div>
          )}
        </div>

        {/* AI Agent */}
        <div className={`relative transition-all duration-1000 ${
          phase === 'autonomous' ? 'opacity-100 scale-110' : 
          phase === 'handoff' ? 'opacity-80 scale-105' : 'opacity-60 scale-90'
        }`}>
          <div className={`w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 ${
            phase === 'autonomous' ? 'animate-pulse' : ''
          }`}>
            <Bot className="w-8 h-8 text-white" />
          </div>
          {phase === 'autonomous' && (
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
              <TrendingUp className="w-3 h-3 text-white" />
            </div>
          )}
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-600 whitespace-nowrap">
            {getText('seachat.heroAnimations.agentToAI.aiAgent', 'AI Agent')}
          </div>
        </div>
      </div>

      {/* Conversation Feed */}
      <div className="absolute top-40 left-6 right-6 bottom-16 overflow-hidden">
        <div className="space-y-3 max-h-full overflow-y-auto">
          {conversations.slice(-3).map((conv) => (
            <div
              key={conv.id}
              className={`flex items-start space-x-3 transition-all duration-700 ${
                conv.progress < 50 ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                conv.type === 'human' ? 'bg-blue-500 shadow-blue-200' : 'bg-purple-500 shadow-purple-200'
              } shadow-lg`}>
                {conv.type === 'human' ? 
                  <User className="w-4 h-4 text-white" /> : 
                  <Bot className="w-4 h-4 text-white" />
                }
              </div>
              <div className={`flex-1 p-3 rounded-lg shadow-sm transition-all duration-500 ${
                conv.type === 'human' ? 'bg-blue-50 border-l-4 border-blue-200' : 'bg-purple-50 border-l-4 border-purple-200'
              }`}>
                <p className="text-sm text-gray-800 leading-relaxed">{conv.message}</p>
                {conv.learned && (
                  <div className="flex items-center mt-2 space-x-1 animate-fade-in">
                    <Brain className="w-3 h-3 text-green-500 animate-pulse" />
                    <span className="text-xs text-green-600 font-medium">
                      {getText('seachat.heroAnimations.agentToAI.learned', 'Learned ✓')}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Title */}
      <div className="absolute bottom-4 left-4 right-4 text-center">
        <h3 className="text-lg font-bold text-gray-800">{getText('seachat.heroAnimations.agentToAI.title', 'Human-to-AI Handoff')}</h3>
        <p className="text-sm text-gray-600">{getText('seachat.heroAnimations.agentToAI.subtitle', 'Start with humans, scale with AI')}</p>
      </div>
    </div>
  );
};

export default AgentToAI;