import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroButton = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/programs')}
        className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-200"
      >
        프로그램 둘러보기
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/assessment/booking')}
        className="w-full sm:w-auto px-6 py-3 bg-white text-blue-600 text-lg font-semibold rounded-lg shadow-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors duration-200"
      >
        무료 체험 신청
      </motion.button>
    </div>
  );
};