import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';

const AssistantIcon = () => {
  return (
    <div className="flex justify-center items-center">
      {/* Outer glow ring */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-sm"
      />
      
      {/* Main icon container */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        animate={{ 
          boxShadow: [
            "0 0 20px rgba(59, 130, 246, 0.5)",
            "0 0 40px rgba(147, 51, 234, 0.7)",
            "0 0 20px rgba(59, 130, 246, 0.5)"
          ]
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        className="relative p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-2xl group cursor-pointer"
      >
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Bot className="w-8 h-8 text-white" />
        </motion.div>
        
        {/* Pulse effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
      </motion.div>
    </div>
  );
};

export default AssistantIcon;

