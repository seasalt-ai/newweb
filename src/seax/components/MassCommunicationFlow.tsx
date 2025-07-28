import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Smartphone, Phone, Mail, Send, User } from 'lucide-react';

interface Stats {
  totalSent: number;
  delivered: number;
  active: number;
}

interface MassCommunicationFlowProps {
  onStatsUpdate?: (stats: Stats) => void;
}

const MassCommunicationFlow: React.FC<MassCommunicationFlowProps> = ({ onStatsUpdate }) => {
  const [messageNodes, setMessageNodes] = useState<Array<{ id: number; type: string; targetAngle: number; progress: number; emissionAngle: number }>>([]);
  const [stats, setStats] = useState<Stats>({ totalSent: 0, delivered: 0, active: 3245 });
  const [centralRotation, setCentralRotation] = useState(0);

  // Move messageTypes outside of render to prevent recreation
  const messageTypes = React.useMemo(() => [
    { type: 'SMS', icon: MessageCircle, color: 'text-blue-300', bgColor: 'bg-blue-500/40' },
    { type: 'WhatsApp', icon: Smartphone, color: 'text-green-300', bgColor: 'bg-green-500/40' },
    { type: 'Voice', icon: Phone, color: 'text-purple-300', bgColor: 'bg-purple-500/40' },
    { type: 'Email', icon: Mail, color: 'text-orange-300', bgColor: 'bg-orange-500/40' }
  ], []);

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


      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {contacts.map((contact, index) => {
          const endX = `calc(50% + ${Math.cos(contact.angle) * contact.radius}px)`;
          const endY = `calc(50% + ${Math.sin(contact.angle) * contact.radius}px)`;
          return (
            <motion.line
              key={contact.id}
              x1="50%"
              y1="50%"
              x2={endX}
              y2={endY}
              stroke="url(#connectionGradient)"
              strokeWidth="2"
              strokeDasharray="2,6"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 1.5, delay: index * 0.1 }}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default MassCommunicationFlow;
