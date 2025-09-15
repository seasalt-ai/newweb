import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Smartphone, Phone, Mail, Send, User } from 'lucide-react';
import { useTranslation, type SupportedLanguage } from '../../../i18n/helpers';

interface Stats {
  totalSent: number;
  delivered: number;
  active: number;
}

interface MassCommunicationFlowProps {
  lang: SupportedLanguage;
  onStatsUpdate?: (stats: Stats) => void;
}

const MassCommunicationFlow: React.FC<MassCommunicationFlowProps> = ({ lang, onStatsUpdate }) => {
  const { t, isLoading } = useTranslation(lang);
  const [messageNodes, setMessageNodes] = useState<Array<{ id: number; type: string; targetAngle: number; progress: number; emissionAngle: number }>>([]);
  const [stats, setStats] = useState<Stats>({ totalSent: 0, delivered: 0, active: 3245 });
  const [centralRotation, setCentralRotation] = useState(0);

  if (isLoading) {
    return (
      <div className="relative w-full h-full min-h-[400px] bg-gradient-to-br from-gray-900 via-indigo-800 to-gray-700 rounded-xl overflow-hidden shadow-2xl animate-pulse">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-20 h-20 bg-gray-600 rounded-full"></div>
        </div>
      </div>
    );
  }

  // Move messageTypes outside of render to prevent recreation
  const messageTypes = React.useMemo(() => [
    { type: t?.('seax.massCommunicationFlow.messageTypes.sms') || 'SMS', icon: MessageCircle, color: 'text-blue-300', bgColor: 'bg-blue-500/40' },
    { type: t?.('seax.massCommunicationFlow.messageTypes.whatsapp') || 'WhatsApp', icon: Smartphone, color: 'text-green-300', bgColor: 'bg-green-500/40' },
    { type: t?.('seax.massCommunicationFlow.messageTypes.voice') || 'Voice', icon: Phone, color: 'text-purple-300', bgColor: 'bg-purple-500/40' },
    { type: t?.('seax.massCommunicationFlow.messageTypes.email') || 'Email', icon: Mail, color: 'text-orange-300', bgColor: 'bg-orange-500/40' }
  ], [t]);

  const contacts = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    angle: (i * 30) * (Math.PI / 180),
    radius: 160
  }));

  // Rotate central icon continuously
  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setCentralRotation(prev => (prev + 1.5) % 360);
    }, 50);

    return () => clearInterval(rotationInterval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const numMessages = Math.floor(Math.random() * 3) + 4; // 4-6 messages
      
      // Get current rotation at time of emission
      setCentralRotation(currentRotation => {
        const currentRotationRad = currentRotation * (Math.PI / 180);
        
        const newNodes = Array.from({ length: numMessages }, (_, index) => {
          // Spread messages around the current rotation angle
          const spreadAngle = (index - numMessages/2) * 0.3; // Small spread around current angle
          const emissionAngle = currentRotationRad + spreadAngle;
          
          return {
            id: Date.now() + Math.random() + index,
            type: messageTypes[Math.floor(Math.random() * messageTypes.length)].type,
            targetAngle: Math.random() * 2 * Math.PI,
            progress: 0,
            emissionAngle: emissionAngle
          };
        });

        setMessageNodes(prev => [...prev.slice(-20), ...newNodes]);

        setStats(prev => ({
          totalSent: prev.totalSent + Math.floor(Math.random() * 30) + 15,
          delivered: prev.delivered + Math.floor(Math.random() * 25) + 12,
          active: 3245 + Math.floor(Math.random() * 100) - 50
        }));
        
        return currentRotation; // Return unchanged rotation
      });
    }, 600); // Faster emission

    return () => clearInterval(interval);
  }, [messageTypes]); // Remove centralRotation from dependencies

  // Separate useEffect to handle stats updates
  useEffect(() => {
    if (onStatsUpdate) {
      onStatsUpdate(stats);
    }
  }, [stats, onStatsUpdate]);

  return (
    <div className="relative w-full h-full min-h-[400px] bg-gradient-to-br from-gray-900 via-indigo-800 to-gray-700 rounded-xl overflow-hidden shadow-2xl">
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full"
            style={{ left: `${15 + i * 12}%`, top: `${10 + i * 10}%` }}
            animate={{
              x: [0, 25, 0],
              y: [0, 15, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{ duration: 4 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="absolute inset-0 flex justify-center items-center">
        <motion.div
          className="w-20 h-20 bg-gradient-to-tr from-blue-700 to-purple-800 rounded-full flex items-center justify-center shadow-xl border-4 border-white/50"
          animate={{ 
            rotate: centralRotation,
            scale: [1, 1.05, 1] 
          }}
          transition={{ 
            rotate: { duration: 0, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <Send className="w-10 h-10 text-white" />
        </motion.div>
      </div>

      {contacts.map((contact, index) => {
        const x = Math.cos(contact.angle) * contact.radius;
        const y = Math.sin(contact.angle) * contact.radius;
        return (
          <motion.div
            key={contact.id}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center border border-white/50">
              <User className="w-5 h-5 text-white/80" />
            </div>
          </motion.div>
        );
      })}

      <AnimatePresence>
        {messageNodes.map((node) => {
          const messageType = messageTypes.find(t => t.type === node.type);
          const Icon = messageType?.icon || MessageCircle;
          
          // Start position based on emission angle (where central icon was when message was emitted)
          const startRadius = 12; // Start from edge of central icon
          const startX = Math.cos(node.emissionAngle) * startRadius;
          const startY = Math.sin(node.emissionAngle) * startRadius;
          
          // End position at target contact
          const endX = Math.cos(node.targetAngle) * 160;
          const endY = Math.sin(node.targetAngle) * 160;
          
          return (
            <motion.div
              key={node.id}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              style={{ zIndex: 50 }}
              initial={{ 
                x: startX, 
                y: startY, 
                opacity: 0, 
                scale: 0 
              }}
              animate={{ 
                x: endX,
                y: endY,
                opacity: [0, 1, 1, 0.7, 0],
                scale: [0, 0.8, 1, 0.8, 0]
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ 
                duration: 2.5, 
                ease: "easeOut",
                x: { ease: "easeOut" },
                y: { ease: "easeOut" }
              }}
            >
              <div className={`w-8 h-8 ${messageType?.bgColor} rounded-full flex items-center justify-center border-2 border-white/70 shadow-xl backdrop-blur-sm`}>
                <Icon className={`w-4 h-4 ${messageType?.color}`} />
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default MassCommunicationFlow;