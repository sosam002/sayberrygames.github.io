import React from 'react';
import { motion } from 'framer-motion';
import { FaSquareRootAlt, FaFlask, FaDiceD20, FaChartLine } from 'react-icons/fa';

const CodingPractices = () => {
  const programs = [
    {
      icon: <FaSquareRootAlt className="w-8 h-8" />,
      title: "수학",
      description: "창의적 사고와 논리적 추론으로 수학의 원리를 깊이 이해합니다"
    },
    {
      icon: <FaFlask className="w-8 h-8" />,
      title: "과학실험",
      description: "직접 실험하고 관찰하며 과학적 탐구력을 키웁니다"
    },
    {
      icon: <FaDiceD20 className="w-8 h-8" />,
      title: "AI TRPG",
      description: "AI와 함께하는 롤플레잉으로 문제해결 능력을 향상시킵니다"
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "진단검사",
      description: "개인별 맞춤 학습을 위한 체계적인 진단과 분석을 제공합니다"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            교육 프로그램
          </h2>
          <p className="text-xl text-gray-300">
            미래 인재를 위한 차별화된 교육 솔루션
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-blue-400 mb-4">{program.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {program.title}
              </h3>
              <p className="text-gray-400">{program.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CodingPractices;