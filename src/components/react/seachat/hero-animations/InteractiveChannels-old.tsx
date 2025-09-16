import React, { useState, useEffect } from 'react';
import { MessageCircle, Globe, Smartphone, Mail, Headphones, Monitor, Users, Wifi } from 'lucide-react';
import { useTranslation, type SupportedLanguage } from '../../../../i18n/helpers';

interface Channel {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  count: number;
  color: string;
  active: boolean;
}

interface Message {
  id: number;
  channel: string;
  content: string;
  timestamp: number;
  type: 'incoming' | 'outgoing';
}

interface InteractiveChannelsProps {
  lang: SupportedLanguage;
  translations?: any;
}

const InteractiveChannels: React.FC<InteractiveChannelsProps> = ({ lang, translations }) => {
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

  const [channels, setChannels] = useState<Channel[]>([
    { id: 'web', name: getText('seachat.heroAnimations.interactiveChannels.channels.web', 'Web Chat'), icon: Globe, count: 145, color: 'bg-blue-500', active: false },
    { id: 'mobile', name: getText('seachat.heroAnimations.interactiveChannels.channels.mobile', 'Mobile App'), icon: Smartphone, count: 89, color: 'bg-green-500', active: false },
    { id: 'email', name: getText('seachat.heroAnimations.interactiveChannels.channels.email', 'Email'), icon: Mail, count: 67, color: 'bg-yellow-500', active: false },
    { id: 'phone', name: getText('seachat.heroAnimations.interactiveChannels.channels.phone', 'Phone'), icon: Headphones, count: 34, color: 'bg-purple-500', active: false },
    { id: 'social', name: getText('seachat.heroAnimations.interactiveChannels.channels.social', 'Social Media'), icon: MessageCircle, count: 78, color: 'bg-pink-500', active: false },
    { id: 'desktop', name: getText('seachat.heroAnimations.interactiveChannels.channels.desktop', 'Desktop'), icon: Monitor, count: 23, color: 'bg-indigo-500', active: false },
  ]);

  const [messages, setMessages] = useState<Message[]>([]);
  const [activeConnections, setActiveConnections] = useState(0);
  const [nextMessageId, setNextMessageId] = useState(1);

  // 處理載入狀態
  if (isLoading) {
    return (
      <div className="w-full h-96 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl flex items-center justify-center">
        <div className="animate-pulse bg-gray-200 h-32 w-32 rounded-2xl"></div>
      </div>
    );
  }

  useEffect(() => {
    // Simulate channel activity
    const channelInterval = setInterval(() => {
      setChannels(prev => prev.map(channel => ({
        ...channel,
        active: Math.random() > 0.7,
        count: Math.max(10, channel.count + Math.floor(Math.random() * 10 - 5))
      })));
    }, 2000);

    // Update active connections
    const connectionInterval = setInterval(() => {
      setActiveConnections(prev => {
        const change = Math.floor(Math.random() * 20 - 10);
        return Math.max(200, Math.min(500, prev + change));
      });
    }, 3000);

    // Add new messages
    const messageInterval = setInterval(() => {
      const channelIds = ['web', 'mobile', 'email', 'phone', 'social', 'desktop'];
      const randomChannel = channelIds[Math.floor(Math.random() * channelIds.length)];
      
      const sampleMessages = [
        getText('seachat.heroAnimations.interactiveChannels.messages.help', 'How can I help you today?'),
        getText('seachat.heroAnimations.interactiveChannels.messages.order', 'I need help with my order'),
        getText('seachat.heroAnimations.interactiveChannels.messages.support', 'Technical support needed'),
        getText('seachat.heroAnimations.interactiveChannels.messages.billing', 'Question about billing'),
        getText('seachat.heroAnimations.interactiveChannels.messages.product', 'Product information request'),
      ];
      
      const newMessage: Message = {
        id: nextMessageId,
        channel: randomChannel,
        content: sampleMessages[Math.floor(Math.random() * sampleMessages.length)],
        timestamp: Date.now(),
        type: Math.random() > 0.5 ? 'incoming' : 'outgoing'
      };
      
      setMessages(prev => [...prev.slice(-4), newMessage]);
      setNextMessageId(prev => prev + 1);
    }, 1500);

    // Initialize active connections
    setActiveConnections(347);

    return () => {
      clearInterval(channelInterval);
      clearInterval(connectionInterval);
      clearInterval(messageInterval);
    };
  }, [nextMessageId, getText]);

  return (
    <div className="w-full h-96 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl overflow-hidden p-6 relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Wifi className="w-6 h-6 text-blue-600" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          </div>
          <h3 className="text-xl font-bold text-gray-800">{getText('seachat.heroAnimations.interactiveChannels.title', 'Multi-Channel Hub')}</h3>
        </div>
        <div className="flex items-center space-x-3">
          <Users className="w-5 h-5 text-gray-600" />
          <span className="text-gray-600 font-semibold">{activeConnections.toLocaleString()}</span>
        </div>
      </div>

      {/* Channels Grid */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {channels.map((channel) => {
          const IconComponent = channel.icon;
          return (
            <div
              key={channel.id}
              className={`relative p-3 rounded-xl border-2 transition-all duration-300 ${
                channel.active
                  ? 'border-blue-300 bg-white shadow-lg scale-105'
                  : 'border-gray-200 bg-white/70 hover:bg-white hover:shadow-md'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <IconComponent className={`w-5 h-5 ${channel.active ? 'text-blue-600' : 'text-gray-500'}`} />
                {channel.active && (
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                )}
              </div>
              <div className={`text-lg font-bold ${channel.active ? 'text-gray-800' : 'text-gray-600'}`}>
                {channel.count}
              </div>
              <div className="text-xs text-gray-500">{channel.name}</div>
              
              {/* Activity indicator */}
              {channel.active && (
                <div className={`absolute -top-1 -right-1 w-3 h-3 ${channel.color} rounded-full animate-ping opacity-75`} />
              )}
            </div>
          );
        })}
      </div>

      {/* Message Stream */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 h-32 overflow-hidden">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-gray-600">{getText('seachat.heroAnimations.interactiveChannels.messageStream', 'Message Stream')}</span>
          <div className="flex space-x-1">
            {Array.from({ length: 3 }, (_, i) => (
              <div
                key={i}
                className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 200}ms` }}
              />
            ))}
          </div>
        </div>
        
        <div className="space-y-2">
          {messages.slice(-3).map((message, index) => {
            const channel = channels.find(c => c.id === message.channel);
            const IconComponent = channel?.icon || MessageCircle;
            
            return (
              <div
                key={message.id}
                className={`flex items-center space-x-3 p-2 rounded-lg transition-all duration-500 ${
                  index === messages.slice(-3).length - 1
                    ? 'bg-blue-50 border border-blue-200'
                    : 'bg-gray-50'
                }`}
                style={{
                  opacity: 1 - (messages.slice(-3).length - 1 - index) * 0.3,
                  transform: `translateY(${(messages.slice(-3).length - 1 - index) * -2}px)`
                }}
              >
                <IconComponent className={`w-4 h-4 flex-shrink-0 ${channel?.color.replace('bg-', 'text-')}`} />
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-gray-500 mb-1">{channel?.name}</div>
                  <div className="text-sm text-gray-700 truncate">{message.content}</div>
                </div>
                <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                  message.type === 'incoming' ? 'bg-green-400' : 'bg-blue-400'
                }`} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Title */}
      <div className="absolute bottom-4 left-4 right-4 text-center">
        <h3 className="text-lg font-bold text-gray-800">{getText('seachat.heroAnimations.interactiveChannels.subtitle', 'Unified Communication')}</h3>
        <p className="text-sm text-gray-600">{getText('seachat.heroAnimations.interactiveChannels.description', 'Connect across all channels')}</p>
      </div>
    </div>
  );
};

export default InteractiveChannels;