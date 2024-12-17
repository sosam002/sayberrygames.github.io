import React from 'react';
import { motion } from 'framer-motion';

const PageContainer = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-900 to-blue-900">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/90"></div>
      
      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-7xl mx-auto px-4 py-8"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default PageContainer;