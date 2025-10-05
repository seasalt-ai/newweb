import React, { useState, useEffect, useMemo } from 'react';
import { MessageCircle, Instagram, Facebook, Mail, Phone, Globe, User, Bot } from 'lucide-react';
import { useTranslation, type SupportedLanguage } from '../../../../i18n/helpers';

interface Message {
  id: number;
  channel: string;
  icon: React.ComponentType<any>;
  color: string;
  content: string;
  direction: 'incoming' | 'outgoing';
  x: number;
  y: number;
  progress: number;
}

interface MultiChannelFlowProps {
  lang: SupportedLanguage;
  translations?: any;
}

const MultiChannelFlow: React.FC<MultiChannelFlowProps> = ({ lang, translations }) => {
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

  // 處理載入狀態
  if (isLoading) {
    return (
      <div className="w-full h-96 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl flex items-center justify-center">
        <div className="animate-pulse bg-gray-200 h-32 w-32 rounded-2xl"></div>
      </div>
    );
  }

  const [messages, setMessages] = useState<Message[]>([]);
  const [nextId, setNextId] = useState(1);

  // 使用 useMemo 避免每次重新創建
  const channels = useMemo(() => [
    { name: getText('seachat.heroAnimations.multiChannelFlow.channels.whatsapp', 'WhatsApp'), icon: MessageCircle, color: 'bg-green-500', x: 20 },
    { name: getText('seachat.heroAnimations.multiChannelFlow.channels.instagram', 'Instagram'), icon: Instagram, color: 'bg-pink-500', x: 35 },
    { name: getText('seachat.heroAnimations.multiChannelFlow.channels.facebook', 'Facebook'), icon: Facebook, color: 'bg-blue-600', x: 50 },
    { name: getText('seachat.heroAnimations.multiChannelFlow.channels.email', 'Email'), icon: Mail, color: 'bg-red-500', x: 65 },
    { name: getText('seachat.heroAnimations.multiChannelFlow.channels.website', 'Website'), icon: Globe, color: 'bg-blue-500', x: 80 },
  ], [getText]);

  const messageTemplates = useMemo(() => [
    getText('seachat.heroAnimations.multiChannelFlow.messageTemplates.0', 'Help with order'),
    getText('seachat.heroAnimations.multiChannelFlow.messageTemplates.1', 'Product inquiry'),
    getText('seachat.heroAnimations.multiChannelFlow.messageTemplates.2', 'Support request'),
    getText('seachat.heroAnimations.multiChannelFlow.messageTemplates.3', 'Account question'),
    getText('seachat.heroAnimations.multiChannelFlow.messageTemplates.4', 'Billing issue'),
  ], [getText]);

  // 初始化一些消息
  useEffect(() => {
    const initialMessages = [
      {
        id: 1,
        channel: 'WhatsApp',
        icon: MessageCircle,
        color: 'bg-green-500',
        content: 'Hello!',
        direction: 'incoming' as const,
        x: 20,
        y: 20,
        progress: 0,
      },
      {
        id: 2,
        channel: 'Instagram',
        icon: Instagram,
        color: 'bg-pink-500',
        content: 'Hi there',
        direction: 'incoming' as const,
        x: 35,
        y: 80,
        progress: 25,
      },
    ];
    setMessages(initialMessages);
    setNextId(3);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomChannel = channels[Math.floor(Math.random() * channels.length)];
      const randomMessage = messageTemplates[Math.floor(Math.random() * messageTemplates.length)];
      
      setNextId(currentNextId => {
        const newMessage: Message = {
          id: currentNextId,
          channel: randomChannel.name,
          icon: randomChannel.icon,
          color: randomChannel.color,
          content: randomMessage,
          direction: Math.random() > 0.6 ? 'outgoing' : 'incoming',
          x: randomChannel.x,
          y: Math.random() > 0.5 ? 20 : 80,
          progress: 0,
        };

        setMessages(prev => [...prev.slice(-6), newMessage]);
        return currentNextId + 1;
      });
    }, 1200);

    return () => clearInterval(interval);
  }, [channels, messageTemplates]);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setMessages(prev => {
        const updated = prev.map(msg => ({
          ...msg,
          progress: Math.min(msg.progress + 3, 100)
        })).filter(msg => msg.progress < 100);
        
        return updated;
      });
    }, 80);

    return () => clearInterval(animationInterval);
  }, []);

  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl overflow-hidden">
      {/* Central Hub */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
        <Bot className="w-10 h-10 text-white" />
      </div>
      
      {/* Channel Icons */}
      {channels.map((channel, index) => {
        const IconComponent = channel.icon;
        return (
          <div
            key={channel.name}
            className={`absolute w-12 h-12 ${channel.color} rounded-full flex items-center justify-center shadow-lg animate-pulse`}
            style={{
              left: `${channel.x}%`,
              top: index % 2 === 0 ? '15%' : '75%',
            }}
          >
            <IconComponent className="w-6 h-6 text-white" />
          </div>
        );
      })}

      {/* Animated Messages */}
      {messages.map((message) => {
        const IconComponent = message.icon;
        const centerX = 50;
        const centerY = 50;
        const currentX = message.direction === 'incoming' 
          ? message.x + (centerX - message.x) * (message.progress / 100)
          : centerX + (message.x - centerX) * (message.progress / 100);
        const currentY = message.direction === 'incoming'
          ? message.y + (centerY - message.y) * (message.progress / 100)
          : centerY + (message.y - centerY) * (message.progress / 100);

        return (
          <div
            key={message.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-linear"
            style={{
              left: `${currentX}%`,
              top: `${currentY}%`,
              opacity: Math.max(0.7, 1 - (message.progress / 100) * 0.5),
              transform: `translate(-50%, -50%) scale(${1 - (message.progress / 100) * 0.2})`,
            }}
          >
            <div className={`w-8 h-8 ${message.color} rounded-full flex items-center justify-center shadow-lg animate-pulse`}>
              <IconComponent className="w-4 h-4 text-white" />
            </div>
            {message.progress < 60 && (
              <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded text-xs shadow-lg whitespace-nowrap border border-gray-200">
                {message.content}
              </div>
            )}
            
            {/* Trail effect */}
            <div 
              className={`absolute w-2 h-2 ${message.color} rounded-full opacity-30 animate-ping`}
              style={{
                transform: 'translate(-50%, -50%)',
              }}
            />
          </div>
        );
      })}

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {channels.map((channel, index) => {
          const startX = channel.x;
          const startY = index % 2 === 0 ? 15 : 75;
          const endX = 50;
          const endY = 50;
          
          return (
            <line
              key={channel.name}
              x1={`${startX}%`}
              y1={`${startY}%`}
              x2={`${endX}%`}
              y2={`${endY}%`}
              stroke="rgba(59, 130, 246, 0.2)"
              strokeWidth="2"
              strokeDasharray="5,5"
              className="animate-pulse"
            />
          );
        })}
      </svg>

      {/* Title */}
      <div className="absolute bottom-4 left-4 right-4 text-center">
        <h3 className="text-lg font-bold text-gray-800">{getText('seachat.heroAnimations.multiChannelFlow.title', 'Multi-Channel Flow')}</h3>
        <p className="text-sm text-gray-600">{getText('seachat.heroAnimations.multiChannelFlow.subtitle', 'Messages flowing between platforms')}</p>
      </div>
    </div>
  );
};

export default MultiChannelFlow;