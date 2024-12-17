import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "수학",
      description: "창의적 사고와 문제해결",
      path: "/math"
    },
    {
      title: "과학",
      description: "AI 기반 맞춤형 학습",
      path: "/science"
    },
    {
      title: "TRPG",
      description: "융합형 인재 육성",
      path: "/trpg"
    }
  ];

  return (
    <div className="relative min-h-[80vh] flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-blue-900">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/90"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="block text-white">와이즈 퓨처랩</span>
            <span className="block text-blue-400 mt-2">수학·과학·TRPG</span>
            <span className="block text-white mt-2">AI 융합교육센터</span>
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 max-w-3xl mx-auto text-xl text-slate-300 leading-relaxed"
          >
            창의적으로 실험하고, 수많은 실패와 도전으로 논리를 내면화합니다.
            무엇이든 상상하고, 무엇이든 도전하고, 수많은 AI 도구를 활용할 수 있습니다.
            AI와 함께 생각의 기술을 배우고, 상상을 실현합니다.
            미래의 인재가 자랍니다.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => navigate('/programs')}
              className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-200 hover:shadow-blue-500/50"
            >
              프로그램 둘러보기
            </button>
            <button
              onClick={() => navigate('/assessment/booking')}
              className="px-8 py-4 bg-white/10 text-white text-lg font-semibold rounded-lg shadow-lg backdrop-blur-sm hover:bg-white/20 transition-colors duration-200"
            >
              진단 신청
            </button>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-4 bg-white/5 backdrop-blur-sm rounded-lg cursor-pointer"
                onClick={() => navigate(feature.path)}
              >
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;