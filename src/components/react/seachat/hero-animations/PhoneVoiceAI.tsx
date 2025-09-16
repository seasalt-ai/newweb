import React, { useState, useEffect } from 'react';
import { Phone, PhoneCall, Mic, MicOff, Volume2, VolumeX, User, Bot, Zap } from 'lucide-react';
import { useTranslation, type SupportedLanguage } from '../../../../i18n/helpers';

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

interface PhoneVoiceAIProps {
  lang: SupportedLanguage;
  translations?: any;
}

const PhoneVoiceAI: React.FC<PhoneVoiceAIProps> = ({ lang, translations }) => {
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

  const [calls, setCalls] = useState<Call[]>([]);
  const [activeCall, setActiveCall] = useState<Call | null>(null);
  const [voiceWaves, setVoiceWaves] = useState<VoiceWave[]>([]);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [callCount, setCallCount] = useState(365);

  // 處理載入狀態
  if (isLoading) {
    return (
      <div className="w-full h-96 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl flex items-center justify-center">
        <div className="animate-pulse bg-gray-200 h-32 w-32 rounded-2xl"></div>
      </div>
    );
  }

  const callerNames = [
    getText('seachat.heroAnimations.phoneVoiceAI.callerNames.0', 'John Smith'),
    getText('seachat.heroAnimations.phoneVoiceAI.callerNames.1', 'Sarah Johnson'),
    getText('seachat.heroAnimations.phoneVoiceAI.callerNames.2', 'Mike Chen'),
    getText('seachat.heroAnimations.phoneVoiceAI.callerNames.3', 'Lisa Wong'),
    getText('seachat.heroAnimations.phoneVoiceAI.callerNames.4', 'David Kim'),
  ];
  
  const conversationFlow = [
    { speaker: 'caller', text: getText('seachat.heroAnimations.phoneVoiceAI.conversationFlow.0.caller', 'Hi, I need help with my order') },
    { speaker: 'ai', text: getText('seachat.heroAnimations.phoneVoiceAI.conversationFlow.0.ai', 'I\'d be happy to help! Can you provide your order number?') },
    { speaker: 'caller', text: getText('seachat.heroAnimations.phoneVoiceAI.conversationFlow.1.caller', 'It\'s order #12345') },
    { speaker: 'ai', text: getText('seachat.heroAnimations.phoneVoiceAI.conversationFlow.1.ai', 'I found your order. It was shipped yesterday and should arrive tomorrow.') },
    { speaker: 'caller', text: getText('seachat.heroAnimations.phoneVoiceAI.conversationFlow.2.caller', 'Perfect! Thank you so much') },
    { speaker: 'ai', text: getText('seachat.heroAnimations.phoneVoiceAI.conversationFlow.2.ai', 'You\'re welcome! Is there anything else I can help you with?') },
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
  }, [activeCall, callCount, callerNames]);

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
                <span>{getText('seachat.heroAnimations.phoneVoiceAI.status.seachatVoiceAI', 'SeaChat Voice AI')}</span>
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
                  <div className="text-sm text-gray-400">{getText('seachat.heroAnimations.phoneVoiceAI.status.connectedWith', 'Connected with')}</div>
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

                {/* Call Status */}
                <div className="text-center">
                  {isListening && (
                    <div className="flex items-center justify-center space-x-2 text-blue-400">
                      <Mic className="w-4 h-4" />
                      <span className="text-sm">{getText('seachat.heroAnimations.phoneVoiceAI.status.listening', 'Listening...')}</span>
                    </div>
                  )}
                  {isSpeaking && (
                    <div className="flex items-center justify-center space-x-2 text-green-400">
                      <Volume2 className="w-4 h-4" />
                      <span className="text-sm">{getText('seachat.heroAnimations.phoneVoiceAI.status.speaking', 'AI Speaking...')}</span>
                    </div>
                  )}
                </div>

                {/* Call Controls */}
                <div className="flex justify-center space-x-4">
                  <button className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                    <Phone className="w-6 h-6 text-white transform rotate-135" />
                  </button>
                </div>

                {/* Transcript Preview */}
                {activeCall.transcript.length > 0 && (
                  <div className="bg-gray-800 rounded-lg p-3 max-h-20 overflow-y-auto">
                    <div className="text-xs text-gray-300">
                      {activeCall.transcript.slice(-2).map((line, index) => (
                        <div key={index} className="mb-1">{line}</div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Idle Interface */
              <div className="text-center text-white space-y-8 flex flex-col justify-center h-full">
                <div className="space-y-4">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                    <Phone className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{getText('seachat.heroAnimations.phoneVoiceAI.idle.title', 'Voice AI Ready')}</h3>
                  <p className="text-gray-400 text-sm">{getText('seachat.heroAnimations.phoneVoiceAI.idle.subtitle', 'Waiting for incoming calls...')}</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-gray-800 rounded-lg p-3">
                    <div className="text-2xl font-bold text-green-400">{callCount}</div>
                    <div className="text-xs text-gray-400">{getText('seachat.heroAnimations.phoneVoiceAI.stats.callsHandled', 'Calls Handled')}</div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3">
                    <div className="text-2xl font-bold text-blue-400">24/7</div>
                    <div className="text-xs text-gray-400">{getText('seachat.heroAnimations.phoneVoiceAI.stats.availability', 'Availability')}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="absolute bottom-4 left-4 right-4 text-center">
        <h3 className="text-lg font-bold text-gray-800">{getText('seachat.heroAnimations.phoneVoiceAI.title', 'AI Voice Agent')}</h3>
        <p className="text-sm text-gray-600">{getText('seachat.heroAnimations.phoneVoiceAI.subtitle', '24/7 intelligent phone support')}</p>
      </div>
    </div>
  );
};

export default PhoneVoiceAI;