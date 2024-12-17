import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true }) => {
  const baseStyles = 'bg-white/10 backdrop-blur-sm rounded-xl border border-white/10';
  const hoverStyles = hover ? 'transition-all duration-300 hover:bg-white/20' : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`${baseStyles} ${hoverStyles} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;