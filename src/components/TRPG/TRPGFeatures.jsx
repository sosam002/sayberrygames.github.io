import React from 'react';
import { FaDiceD20, FaRobot, FaBookOpen, FaUsers } from 'react-icons/fa';
import TRPGFeature from './TRPGFeature';

const TRPGFeatures = () => {
  const features = [
    {
      icon: <FaDiceD20 className="w-8 h-8" />,
      title: "스토리텔링 기반 학습",
      description: "AI가 생성하는 다양한 시나리오를 통해 창의적 문제해결 능력을 향상시킵니다."
    },
    {
      icon: <FaRobot className="w-8 h-8" />,
      title: "AI 게임마스터",
      description: "실시간으로 적응하는 AI가 각 학생의 수준에 맞춘 맞춤형 시나리오를 제공합니다."
    },
    {
      icon: <FaBookOpen className="w-8 h-8" />,
      title: "교과 연계 시나리오",
      description: "수학, 과학 교과과정과 연계된 시나리오로 재미있게 학습합니다."
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "협동 학습",
      description: "다른 학생들과 함께 문제를 해결하며 의사소통 능력을 키웁니다."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {features.map((feature, index) => (
        <TRPGFeature key={index} {...feature} />
      ))}
    </div>
  );
};

export default TRPGFeatures;