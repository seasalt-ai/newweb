import React, { useState, useEffect } from 'react';
import { MessageCircle, Instagram, Facebook, Mail, Phone, Globe, User, Bot } from 'lucide-react';

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

const MultiChannelFlow = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [nextId, setNextId] = useState(1);

  const channels = [
    { name: 'WhatsApp', icon: MessageCircle, color: 'bg-green-500', x: 20 },
    { name: 'Instagram', icon: Instagram, color: 'bg-pink-500', x: 35 },
    { name: 'Facebook', icon: Facebook, color: 'bg-blue-600', x: 50 },
    { name: 'Email', icon: Mail, color: 'bg-red-500', x: 65 },
    { name: 'Website', icon: Globe, color: 'bg-blue-500', x: 80 },
  ];

  const messageTemplates = [
    'Need help with order',
    'Product question',
    'Technical support',
    'Billing inquiry',
    'General question',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomChannel = channels[Math.floor(Math.random() * channels.length)];
      const randomMessage = messageTemplates[Math.floor(Math.random() * messageTemplates.length)];
      
      const newMessage: Message = {
        id: nextId,
        channel: randomChannel.name,
        icon: randomChannel.icon,
        color: randomChannel.color,
        content: randomMessage,
        direction: Math.random() > 0.6 ? 'outgoing' : 'incoming',
        x: randomChannel.x,
        y: Math.random() > 0.5 ? 20 : 80,
        progress: 0,
      };

      setMessages(prev => [...prev.slice(-8), newMessage]);
      setNextId(prev => prev + 1);
    }, 1500);

    return () => clearInterval(interval);
  }, [nextId]);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setMessages(prev => 
        prev.map(msg => ({
          ...msg,
          progress: Math.min(msg.progress + 2, 100)
        })).filter(msg => msg.progress < 100)
      );
    }, 50);

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
            className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-100"
            style={{
              left: `${currentX}%`,
              top: `${currentY}%`,
              opacity: 1 - (message.progress / 100) * 0.3,
            }}
          >
            <div className={`w-8 h-8 ${message.color} rounded-full flex items-center justify-center shadow-md`}>
              <IconComponent className="w-4 h-4 text-white" />
            </div>
            {message.progress < 50 && (
              <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded text-xs shadow-lg whitespace-nowrap">
                {message.content}
              </div>
            )}
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
        <h3 className="text-lg font-bold text-gray-800">Multi-Channel Message Flow</h3>
        <p className="text-sm text-gray-600">Messages flowing between channels in real-time</p>
      </div>
    </div>
  );
};

export default MultiChannelFlow;
