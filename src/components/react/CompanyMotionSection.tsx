import React from 'react';
import { motion } from 'framer-motion';

interface CompanyMotionSectionProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
  className?: string;
}

const CompanyMotionSection: React.FC<CompanyMotionSectionProps> = ({ 
  children, 
  direction = 'up', 
  delay = 0,
  className = '' 
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'left': return { opacity: 0, x: -50 };
      case 'right': return { opacity: 0, x: 50 };
      case 'down': return { opacity: 0, y: -50 };
      case 'up':
      default: return { opacity: 0, y: 50 };
    }
  };

  return (
    <motion.div
      className={className}
      initial={getInitialPosition()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default CompanyMotionSection;
