import React from 'react';
import ExperimentCard from './ExperimentCard';

const ExperimentList = () => {
  const experiments = [
    {
      title: '물리 실험',
      experiments: [
        '빛의 굴절과 반사',
        '전자기 유도',
        '역학적 에너지 보존'
      ],
      level: '중고등',
      duration: '90분'
    },
    {
      title: '화학 실험',
      experiments: [
        '산과 염기의 반응',
        '결정 생성',
        '중화 반응'
      ],
      level: '중고등',
      duration: '90분'
    },
    {
      title: '생물 실험',
      experiments: [
        '현미경 관찰',
        'DNA 추출',
        '효소 반응'
      ],
      level: '중고등',
      duration: '90분'
    },
    {
      title: '지구과학 실험',
      experiments: [
        '지층 모형 만들기',
        '화석 발굴',
        '기상 관측'
      ],
      level: '중고등',
      duration: '90분'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {experiments.map((experiment, index) => (
        <ExperimentCard key={index} {...experiment} />
      ))}
    </div>
  );
};

export default ExperimentList;