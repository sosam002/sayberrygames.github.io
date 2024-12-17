import React from 'react';
import { motion } from 'framer-motion';

const PageHeader = ({ title, description }) => {
  return (
    <div className="mb-8 text-center">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-4 text-white"
      >
        {title}
      </motion.h1>
      {description && (
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xl text-slate-300"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default PageHeader;