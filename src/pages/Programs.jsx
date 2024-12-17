import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';
import Card from '../components/common/Card';
import Grid from '../components/common/Grid';
import { FaSquareRootAlt, FaFlask, FaDiceD20, FaChartLine } from 'react-icons/fa';

const Programs = () => {
  const programs = [
    {
      icon: <FaSquareRootAlt className="w-12 h-12 text-blue-600" />,
      title: "수학",
      description: "창의적 사고와 논리적 추론으로 수학의 원리를 깊이 이해합니다",
      features: [
        "단계별 사고수학 프로그램",
        "소수정예 맞춤형 교육",
        "체계적인 학습 관리"
      ],
      link: "/math"
    },
    {
      icon: <FaFlask className="w-12 h-12 text-green-600" />,
      title: "과학실험",
      description: "직접 실험하고 관찰하며 과학적 탐구력을 키웁니다",
      features: [
        "Story telling 기반 수업",
        "실험 중심의 과학 교육",
        "체계적인 실험 보고서 작성"
      ],
      link: "/science"
    },
    {
      icon: <FaDiceD20 className="w-12 h-12 text-purple-600" />,
      title: "AI TRPG",
      description: "AI와 함께하는 롤플레잉으로 문제해결 능력을 향상시킵니다",
      features: [
        "AI 기반 스토리텔링",
        "협동 학습 중심",
        "창의적 문제해결"
      ],
      link: "/trpg"
    },
    {
      icon: <FaChartLine className="w-12 h-12 text-red-600" />,
      title: "진단검사",
      description: "개인별 맞춤 학습을 위한 체계적인 진단과 분석을 제공합니다",
      features: [
        "수준별 진단평가",
        "학습 성향 분석",
        "맞춤형 학습 설계"
      ],
      link: "/assessment"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <PageHeader 
        title="교육 프로그램" 
        description="미래 인재를 위한 차별화된 교육 솔루션"
      />

      <Grid cols={2} className="gap-8">
        {programs.map((program, index) => (
          <Link key={index} to={program.link}>
            <Card className="h-full p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  {program.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </Grid>
    </div>
  );
};

export default Programs;