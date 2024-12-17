import React from 'react';
import { motion } from 'framer-motion';

const HeroContent = () => {
  const features = [
    "창의적으로 실험하고, 수많은 실패와 도전으로 논리를 내면화합니다.",
    "무엇이든 상상하고, 무엇이든 도전하고, 수많은 AI 도구를 활용할 수 있습니다.",
    "AI와 함께 생각의 기술을 배우고, 상상을 실현합니다.",
    "미래의 인재가 자랍니다."
  ];

  return (
    <div className="mt-8 sm:mt-10">
      <div className="space-y-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="flex items-start space-x-4 text-left"
          >
            <div className="flex-shrink-0 mt-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            </div>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">{feature}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HeroContent;