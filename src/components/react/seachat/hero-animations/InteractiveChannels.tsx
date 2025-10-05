import React, { useState, useEffect } from 'react';
import { MessageCircle, Instagram, Facebook, Mail, Phone, Globe, User, Bot, Check } from 'lucide-react';
import { useTranslation, type SupportedLanguage } from '../../../../i18n/helpers';

interface Channel {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  color: string;
  bgColor: string;
  messages: string[];
  active: boolean;
}

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'agent';
  timestamp: string;
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

  // 處理載入狀態
  if (isLoading) {
    return (
      <div className="w-full h-96 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl flex items-center justify-center">
        <div className="animate-pulse bg-gray-200 h-32 w-32 rounded-2xl"></div>
      </div>
    );
  }

  const [channels, setChannels] = useState<Channel[]>([
    {
      id: 'whatsapp',
      name: getText('seachat.heroAnimations.interactiveChannels.channelNames.whatsapp', 'WhatsApp'),
      icon: MessageCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-500',
      messages: [
        getText('seachat.heroAnimations.interactiveChannels.whatsapp.messages.0', 'Hi! I need help with my order'),
        getText('seachat.heroAnimations.interactiveChannels.whatsapp.messages.1', 'Can you track my package?'),
        getText('seachat.heroAnimations.interactiveChannels.whatsapp.messages.2', 'What are your store hours?')
      ],
      active: false,
    },
    {
      id: 'instagram',
      name: getText('seachat.heroAnimations.interactiveChannels.channelNames.instagram', 'Instagram'),
      icon: Instagram,
      color: 'text-pink-600',
      bgColor: 'bg-pink-500',
      messages: [
        getText('seachat.heroAnimations.interactiveChannels.instagram.messages.0', 'Love this product! Where can I buy it?'),
        getText('seachat.heroAnimations.interactiveChannels.instagram.messages.1', 'Do you have it in blue?'),
        getText('seachat.heroAnimations.interactiveChannels.instagram.messages.2', 'When will it be back in stock?')
      ],
      active: false,
    },
    {
      id: 'website',
      name: getText('seachat.heroAnimations.interactiveChannels.channelNames.website', 'Website'),
      icon: Globe,
      color: 'text-blue-600',
      bgColor: 'bg-blue-500',
      messages: [
        getText('seachat.heroAnimations.interactiveChannels.website.messages.0', 'I need help with my account'),
        getText('seachat.heroAnimations.interactiveChannels.website.messages.1', 'How do I reset my password?'),
        getText('seachat.heroAnimations.interactiveChannels.website.messages.2', 'Can I get a refund?')
      ],
      active: true,
    },
    {
      id: 'email',
      name: getText('seachat.heroAnimations.interactiveChannels.channelNames.email', 'Email'),
      icon: Mail,
      color: 'text-red-600',
      bgColor: 'bg-red-500',
      messages: [
        getText('seachat.heroAnimations.interactiveChannels.email.messages.0', 'I have a question about my subscription'),
        getText('seachat.heroAnimations.interactiveChannels.email.messages.1', 'Can you help me with billing?'),
        getText('seachat.heroAnimations.interactiveChannels.email.messages.2', 'I want to upgrade my plan')
      ],
      active: false,
    },
  ]);

  const [activeChannel, setActiveChannel] = useState('website');
  const [currentMessages, setCurrentMessages] = useState<Message[]>([]);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const channel = channels.find(c => c.id === activeChannel);
    if (channel) {
      setCurrentMessages([]);
      setMessageIndex(0);
    }
  }, [activeChannel, channels]);

  useEffect(() => {
    const channel = channels.find(c => c.id === activeChannel);
    if (!channel || messageIndex >= channel.messages.length) return;

    const timer = setTimeout(() => {
      const newMessage: Message = {
        id: Date.now(),
        text: channel.messages[messageIndex],
        sender: 'user',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setCurrentMessages(prev => [...prev, newMessage]);
      
      // Add agent response after a delay
      setTimeout(() => {
        const agentResponse: Message = {
          id: Date.now() + 1,
          text: getText('seachat.heroAnimations.interactiveChannels.agentResponse', 'Thanks for reaching out! I\'m here to help you with that.'),
          sender: 'agent',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setCurrentMessages(prev => [...prev, agentResponse]);
      }, 1500);

      setMessageIndex(prev => prev + 1);
    }, 3000);

    return () => clearTimeout(timer);
  }, [activeChannel, messageIndex, channels, getText]);

  useEffect(() => {
    // Auto-cycle through channels
    const interval = setInterval(() => {
      setChannels(prev => {
        const currentIndex = prev.findIndex(c => c.active);
        const nextIndex = (currentIndex + 1) % prev.length;
        
        return prev.map((channel, index) => ({
          ...channel,
          active: index === nextIndex,
        }));
      });
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleChannelClick = (channelId: string) => {
    setActiveChannel(channelId);
    setChannels(prev => prev.map(channel => ({
      ...channel,
      active: channel.id === channelId,
    })));
  };

  const activeChannelData = channels.find(c => c.id === activeChannel);

  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl overflow-hidden">
      {/* Channel Selector */}
      <div className="absolute top-6 left-6 right-6">
        <div className="flex justify-center space-x-4">
          {channels.map((channel) => {
            const IconComponent = channel.icon;
            return (
              <button
                key={channel.id}
                onClick={() => handleChannelClick(channel.id)}
                className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform ${
                  channel.active 
                    ? `${channel.bgColor} scale-110 shadow-lg` 
                    : 'bg-gray-200 hover:bg-gray-300 scale-100'
                }`}
              >
                <IconComponent 
                  className={`w-6 h-6 ${
                    channel.active ? 'text-white' : 'text-gray-600'
                  }`} 
                />
                {channel.active && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-2 h-2 text-white" />
                  </div>
                )}
                
                {/* Activity indicator */}
                {!channel.active && Math.random() > 0.7 && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full animate-pulse" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Chat Interface */}
      <div className="absolute top-24 left-6 right-6 bottom-20 bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Chat Header */}
        <div className={`${activeChannelData?.bgColor} p-4 text-white`}>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              {activeChannelData && React.createElement(activeChannelData.icon, { className: "w-4 h-4" })}
            </div>
            <div>
              <h3 className="font-semibold">{activeChannelData?.name} {getText('seachat.heroAnimations.interactiveChannels.supportSuffix', 'Support')}</h3>
              <div className="flex items-center space-x-1 text-sm opacity-90">
                <div className="w-2 h-2 bg-green-300 rounded-full" />
                <span>{getText('seachat.heroAnimations.interactiveChannels.online', 'Online')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="p-4 h-48 overflow-y-auto space-y-3">
          {currentMessages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-end space-x-2 max-w-xs ${
                message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
              }`}>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  message.sender === 'user' 
                    ? activeChannelData?.bgColor + ' text-white'
                    : 'bg-gray-500 text-white'
                }`}>
                  {message.sender === 'user' ? 
                    <User className="w-3 h-3" /> : 
                    <Bot className="w-3 h-3" />
                  }
                </div>
                <div className={`px-3 py-2 rounded-2xl ${
                  message.sender === 'user' 
                    ? activeChannelData?.bgColor + ' text-white rounded-br-md'
                    : 'bg-gray-100 text-gray-800 rounded-bl-md'
                }`}>
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-white/70' : 'text-gray-500'
                  }`}>
                    {message.timestamp}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Typing indicator */}
          {currentMessages.length > 0 && currentMessages.length % 2 === 1 && (
            <div className="flex justify-start">
              <div className="flex items-end space-x-2 max-w-xs">
                <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center text-white">
                  <Bot className="w-3 h-3" />
                </div>
                <div className="bg-gray-100 px-3 py-2 rounded-2xl rounded-bl-md">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Field */}
        <div className="p-4 border-t bg-gray-50">
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder={getText('seachat.heroAnimations.interactiveChannels.typePlaceholder', 'Type your message...')}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              disabled
            />
            <button className={`${activeChannelData?.bgColor} text-white p-2 rounded-full hover:opacity-90 transition-opacity`}>
              <MessageCircle className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {channels.map((channel, index) => {
          if (!channel.active) return null;
          
          const startX = 50 + (index - 1.5) * 15;
          const startY = 15;
          const endX = 50;
          const endY = 35;
          
          return (
            <line
              key={channel.id}
              x1={`${startX}%`}
              y1={`${startY}%`}
              x2={`${endX}%`}
              y2={`${endY}%`}
              stroke={channel.bgColor.replace('bg-', '#')}
              strokeWidth="3"
              strokeDasharray="5,5"
              className="animate-pulse opacity-50"
            />
          );
        })}
      </svg>

      {/* Title */}
      <div className="absolute bottom-4 left-4 right-4 text-center">
        <h3 className="text-lg font-bold text-gray-800">{getText('seachat.heroAnimations.interactiveChannels.title', 'Interactive Channels')}</h3>
        <p className="text-sm text-gray-600">{getText('seachat.heroAnimations.interactiveChannels.subtitle', 'Click to switch between channels')}</p>
      </div>
    </div>
  );
};

export default InteractiveChannels;