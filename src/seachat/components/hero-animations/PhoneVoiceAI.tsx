import React, { useState, useEffect } from 'react';
import { Phone, PhoneCall, Mic, MicOff, Volume2, VolumeX, User, Bot, Zap } from 'lucide-react';

interface Call {
  id: number;
  caller: string;
  status: 'incoming' | 'active' | 'completed';
  duration: number;
  transcript: string[];
  currentSpeaker: 'caller' | 'ai';
}

interface VoiceWave {
  id: number;
  amplitude: number;
  delay: number;
}

const PhoneVoiceAI = () => {
  const [calls, setCalls] = useState<Call[]>([]);
  const [activeCall, setActiveCall] = useState<Call | null>(null);
  const [voiceWaves, setVoiceWaves] = useState<VoiceWave[]>([]);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [callCount, setCallCount] = useState(365);

  const callerNames = ['John Smith', 'Sarah Johnson', 'Mike Chen', 'Emma Davis', 'David Wilson'];
  
  const conversationFlow = [
    { speaker: 'caller', text: 'Hi, I need help with my order status' },
    { speaker: 'ai', text: 'Hello! I\'d be happy to help you check your order status. Could you please provide your order number?' },
    { speaker: 'caller', text: 'Yes, it\'s order number 12345' },
    { speaker: 'ai', text: 'Thank you! Let me look that up for you. I can see your order was shipped yesterday and should arrive tomorrow.' },
    { speaker: 'caller', text: 'Perfect! Can I change the delivery address?' },
    { speaker: 'ai', text: 'I can help you with that. What would you like the new delivery address to be?' },
  ];

  // Generate voice waves
  useEffect(() => {
    if (isSpeaking || isListening) {
      const interval = setInterval(() => {
        setVoiceWaves(prev => {
          const newWaves = Array.from({ length: 12 }, (_, i) => ({
            id: Date.now() + i,
            amplitude: Math.random() * 80 + 20,
            delay: i * 50,
          }));
          return newWaves;
        });
      }, 150);

      return () => clearInterval(interval);
    } else {
      setVoiceWaves([]);
    }
  }, [isSpeaking, isListening]);

  // Simulate incoming calls and conversations
  useEffect(() => {
    const callInterval = setInterval(() => {
      if (!activeCall) {
        // Start new call
        const newCall: Call = {
          id: callCount + 1,
          caller: callerNames[Math.floor(Math.random() * callerNames.length)],
          status: 'incoming',
          duration: 0,
          transcript: [],
          currentSpeaker: 'caller',
        };
        
        setCalls(prev => [...prev.slice(-2), newCall]);
        setCallCount(prev => prev + 1);
        
        // Auto-answer after 2 seconds
        setTimeout(() => {
          setActiveCall(newCall);
          setCalls(prev => prev.map(call => 
            call.id === newCall.id ? { ...call, status: 'active' } : call
          ));
          startConversation(newCall);
        }, 2000);
      }
    }, 8000);

    return () => clearInterval(callInterval);
  }, [activeCall, callCount]);

  const startConversation = (call: Call) => {
    let stepIndex = 0;
    
    const conversationInterval = setInterval(() => {
      if (stepIndex >= conversationFlow.length) {
        // End call
        setTimeout(() => {
          setActiveCall(null);
          setCalls(prev => prev.map(c => 
            c.id === call.id ? { ...c, status: 'completed' } : c
          ));
          setIsListening(false);
          setIsSpeaking(false);
        }, 2000);
        clearInterval(conversationInterval);
        return;
      }

      const currentStep = conversationFlow[stepIndex];
      
      if (currentStep.speaker === 'caller') {
        setIsListening(true);
        setIsSpeaking(false);
        
        setTimeout(() => {
          setActiveCall(prev => prev ? {
            ...prev,
            transcript: [...prev.transcript, `Caller: ${currentStep.text}`],
            currentSpeaker: 'caller'
          } : null);
          setIsListening(false);
          stepIndex++;
        }, 2000);
      } else {
        setIsSpeaking(true);
        setIsListening(false);
        
        setTimeout(() => {
          setActiveCall(prev => prev ? {
            ...prev,
            transcript: [...prev.transcript, `AI: ${currentStep.text}`],
            currentSpeaker: 'ai'
          } : null);
          setIsSpeaking(false);
          stepIndex++;
        }, 3000);
      }
    }, 4000);
  };

  // Update call duration
  useEffect(() => {
    if (activeCall?.status === 'active') {
      const interval = setInterval(() => {
        setActiveCall(prev => prev ? { ...prev, duration: prev.duration + 1 } : null);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [activeCall?.status]);

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl overflow-hidden p-6">
      {/* Phone Interface */}
      <div className="flex items-center justify-center h-full">
        <div className="relative">
          {/* Main Phone Display */}
          <div className="w-80 h-full bg-gray-900 rounded-3xl p-6 shadow-2xl">
            {/* Status Bar */}
            <div className="flex items-center justify-between mb-6 text-white text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>SeaChat Voice AI</span>
              </div>
              <div className="flex space-x-1">
                <div className="w-1 h-3 bg-white rounded-full opacity-60" />
                <div className="w-1 h-4 bg-white rounded-full opacity-80" />
                <div className="w-1 h-5 bg-white rounded-full" />
              </div>
            </div>

            {activeCall ? (
              /* Active Call Interface */
              <div className="text-center text-white space-y-6">
                <div className="space-y-2">
                  <div className="text-sm text-gray-400">Connected with</div>
                  <div className="text-xl font-semibold">{activeCall.caller}</div>
                  <div className="text-sm text-gray-400">{formatDuration(activeCall.duration)}</div>
                </div>

                {/* Voice Visualization */}
                <div className="flex items-center justify-center space-x-1 h-20">
                  {voiceWaves.map((wave) => (
                    <div
                      key={wave.id}
                      className={`w-2 rounded-full transition-all duration-150 ${
                        isListening ? 'bg-blue-400' : isSpeaking ? 'bg-green-400' : 'bg-gray-600'
                      }`}
                      style={{
                        height: `${wave.amplitude}%`,
                        animationDelay: `${wave.delay}ms`,
                      }}
                    />
                  ))}
                </div>

                {/* Current Activity */}
                <div className="flex items-center justify-center space-x-3">
                  {isListening && (
                    <div className="flex items-center space-x-2 text-blue-400">
                      <Mic className="w-5 h-5 animate-pulse" />
                      <span className="text-sm">Listening...</span>
                    </div>
                  )}
                  {isSpeaking && (
                    <div className="flex items-center space-x-2 text-green-400">
                      <Volume2 className="w-5 h-5 animate-pulse" />
                      <span className="text-sm">AI Speaking...</span>
                    </div>
                  )}
                  {!isListening && !isSpeaking && (
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Bot className="w-5 h-5" />
                      <span className="text-sm">Processing...</span>
                    </div>
                  )}
                </div>

                {/* Live Transcript */}
                <div className="bg-gray-800 rounded-lg p-3 h-32 overflow-y-auto text-left">
                  <div className="text-xs text-gray-400 mb-2">Live Transcript:</div>
                  <div className="space-y-1 text-xs">
                    {activeCall.transcript.slice(-4).map((line, index) => (
                      <div
                        key={index}
                        className={line.startsWith('AI:') ? 'text-green-400' : 'text-blue-400'}
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call Controls */}
                <div className="flex justify-center space-x-4">
                  <button className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                    <PhoneCall className="w-6 h-6 text-white transform rotate-135" />
                  </button>
                </div>
              </div>
            ) : (
              /* Waiting State */
              <div className="text-center text-white space-y-8">
                <div className="space-y-2">
                  <div className="text-lg font-semibold">Voice AI Ready</div>
                  <div className="text-sm text-gray-400">Waiting for incoming calls...</div>
                </div>

                {/* Phone Icon with Pulse */}
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                      <Phone className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute inset-0 w-20 h-20 bg-green-500 rounded-full animate-ping opacity-30" />
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">{callCount}</div>
                    <div className="text-gray-400">Calls Handled</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">24/7</div>
                    <div className="text-gray-400">Available</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Incoming Call Notification */}
          {calls.some(call => call.status === 'incoming') && (
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium animate-bounce">
              📞 Incoming Call
            </div>
          )}

          {/* AI Processing Indicators */}
          <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 space-y-2">
            <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center animate-pulse">
              <Zap className="w-3 h-3 text-white" />
            </div>
            <div className="w-4 h-4 bg-blue-500 rounded-full animate-ping" />
            <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce" />
          </div>

          {/* Features List */}
          <div className="absolute -right-32 top-8 space-y-3 text-sm">
            <div className="bg-white rounded-lg p-3 shadow-lg border-l-4 border-green-500">
              <div className="font-semibold text-gray-800">Natural Speech</div>
              <div className="text-gray-600">Human-like conversation</div>
            </div>
            <div className="bg-white rounded-lg p-3 shadow-lg border-l-4 border-blue-500">
              <div className="font-semibold text-gray-800">Smart Recognition</div>
              <div className="text-gray-600">Accurate speech-to-text</div>
            </div>
            <div className="bg-white rounded-lg p-3 shadow-lg border-l-4 border-purple-500">
              <div className="font-semibold text-gray-800">Context Aware</div>
              <div className="text-gray-600">Understands intent</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneVoiceAI;
