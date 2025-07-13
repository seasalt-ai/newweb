import { useState, useEffect } from 'react';
import { MessageCircle, Send, User, Bot } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  
  const [chatMessages, setChatMessages] = useState([
    { id: 1, type: 'user', text: t('seachat.hero.chat.userMessage'), time: '2:30 PM' },
    { id: 2, type: 'bot', text: t('seachat.hero.chat.botMessage'), time: '2:30 PM' },
  ]);
  
  const [currentMessage, setCurrentMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const bubbles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
    size: 20 + Math.random() * 40,
  }));

  const handleSendMessage = () => {
    if (!currentMessage.trim()) return;
    
    const newMessage = {
      id: chatMessages.length + 1,
      type: 'user' as const,
      text: currentMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setChatMessages([...chatMessages, newMessage]);
    setCurrentMessage('');
    setIsTyping(true);
    
    setTimeout(() => {
      setIsTyping(false);
      setChatMessages(prev => [...prev, {
        id: prev.length + 1,
        type: 'bot' as const,
        text: t('seachat.hero.chat.userMessage2'),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    }, 2000);
  };

  // Update chat messages when language changes
  useEffect(() => {
    setChatMessages([
      { id: 1, type: 'user', text: t('seachat.hero.chat.userMessage'), time: '2:30 PM' },
      { id: 2, type: 'bot', text: t('seachat.hero.chat.botMessage'), time: '2:30 PM' },
    ]);
  }, [t]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
      {/* Animated Background Bubbles */}
      <div className="absolute inset-0">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="absolute opacity-10 bg-white rounded-full animate-float"
            style={{
              left: `${bubble.left}%`,
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              animationDelay: `${bubble.delay}s`,
              animationDuration: `${bubble.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {t('seachat.hero.title')}{' '}
                <span className="text-teal-300">{t('seachat.hero.subtitle')}</span>
              </h1>
            </div>
            
            <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
              {t('seachat.hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://chat.seasalt.ai/gpt/signup" className="block">
                <button className="bg-teal-500 hover:bg-teal-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 hover:shadow-lg w-full">
                  {t('seachat.hero.startFree')}
                </button>
              </a>
              <a href="https://meetings.hubspot.com/seasalt-ai/seasalt-meeting/" className="block">
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all w-full">
                  {t('seachat.hero.exploreAI')}
                </button>
              </a>
            </div>

            <div className="flex items-center space-x-8 text-blue-200">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>{t('seachat.hero.alwaysFree')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>{t('seachat.hero.integrations')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>{t('seachat.hero.setup')}</span>
              </div>
            </div>
          </div>

          {/* Right Content - Interactive Chat Demo */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-blue-600 to-teal-500 p-4 text-white">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{t('seachat.hero.chat.supportTitle')}</h3>
                    <div className="flex items-center space-x-1 text-sm text-blue-100">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>{t('seachat.hero.chat.online')}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="h-80 p-4 space-y-4 overflow-y-auto bg-gray-50">
                {chatMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-end space-x-2 max-w-xs ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        message.type === 'user' ? 'bg-teal-500 text-white' : 'bg-blue-500 text-white'
                      }`}>
                        {message.type === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                      </div>
                      <div className={`px-4 py-2 rounded-2xl ${
                        message.type === 'user' 
                          ? 'bg-teal-500 text-white rounded-br-md' 
                          : 'bg-white text-gray-800 border rounded-bl-md'
                      }`}>
                        <p className="text-sm">{message.text}</p>
                        <p className={`text-xs mt-1 ${message.type === 'user' ? 'text-teal-200' : 'text-gray-500'}`}>
                          {message.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-end space-x-2 max-w-xs">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                        <Bot className="w-4 h-4" />
                      </div>
                      <div className="bg-white border px-4 py-2 rounded-2xl rounded-bl-md">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t bg-white">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder={t('seachat.hero.chat.typePlaceholder')}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="bg-teal-500 hover:bg-teal-600 text-white p-2 rounded-full transition-colors"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;