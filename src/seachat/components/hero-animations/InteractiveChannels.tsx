import React, { useState, useEffect } from 'react';
import { MessageCircle, Instagram, Facebook, Mail, Phone, Globe, User, Bot, Check } from 'lucide-react';

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

const InteractiveChannels = () => {
  const [channels, setChannels] = useState<Channel[]>([
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      icon: MessageCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-500',
      messages: ['Hi! Need help with my order 📦', 'What\'s your return policy?', 'Thanks for the quick response! 😊'],
      active: false,
    },
    {
      id: 'instagram',
      name: 'Instagram',
      icon: Instagram,
      color: 'text-pink-600',
      bgColor: 'bg-pink-500',
      messages: ['Love your new product! 💕', 'Is this available in blue?', 'Can you ship to Europe?'],
      active: false,
    },
    {
      id: 'website',
      name: 'Website',
      icon: Globe,
      color: 'text-blue-600',
      bgColor: 'bg-blue-500',
      messages: ['I need technical support', 'How do I reset my password?', 'The checkout isn\'t working'],
      active: true,
    },
    {
      id: 'email',
      name: 'Email',
      icon: Mail,
      color: 'text-red-600',
      bgColor: 'bg-red-500',
      messages: ['Following up on my previous email', 'Request for bulk pricing', 'Thank you for your assistance'],
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
          text: 'I\'d be happy to help you with that! Let me check that information for you.',
          sender: 'agent',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setCurrentMessages(prev => [...prev, agentResponse]);
      }, 1500);

      setMessageIndex(prev => prev + 1);
    }, 3000);

    return () => clearTimeout(timer);
  }, [activeChannel, messageIndex, channels]);

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
              <h3 className="font-semibold">{activeChannelData?.name} Support</h3>
              <div className="flex items-center space-x-1 text-sm opacity-90">
                <div className="w-2 h-2 bg-green-300 rounded-full" />
                <span>Online</span>
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
              placeholder="Type your message..."
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
        <h3 className="text-lg font-bold text-gray-800">Interactive Channel Selector</h3>
        <p className="text-sm text-gray-600">Click channels to see different conversations</p>
      </div>
    </div>
  );
};

export default InteractiveChannels;
