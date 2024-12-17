import React from 'react';
import PageContainer from '../components/common/PageContainer';
import PageHeader from '../components/common/PageHeader';
import TRPGIntro from '../components/TRPG/TRPGIntro';
import TRPGFeatures from '../components/TRPG/TRPGFeatures';
import TRPGSchedule from '../components/TRPG/TRPGSchedule';
import Card from '../components/common/Card';
import Grid from '../components/common/Grid';

const TRPG = () => {
  const programs = [
    {
      title: "초등학생 저학년 (1-3학년)",
      description: "기초 창의력과 협동심 향상",
      features: [
        "쉽고 재미있는 TRPG 규칙 학습",
        "기초 스토리텔링 활동",
        "팀워크 게임을 통한 협동심 향상"
      ]
    },
    {
      title: "초등학생 고학년 (4-6학년)",
      description: "창의력과 디지털 기초 역량 강화",
      features: [
        "AI 기초 도구 활용",
        "캐릭터 디자인과 스토리 구성",
        "문제해결 중심 TRPG"
      ]
    },
    {
      title: "중학생 (1-3학년)",
      description: "심화된 AI 활용과 프로그래밍",
      features: [
        "AI 도구 활용 TRPG",
        "복잡한 시나리오 해결",
        "팀 프로젝트 진행"
      ]
    }
  ];

  return (
    <PageContainer>
      <PageHeader 
        title="AI 활용 TRPG 프로그램" 
        description="창의적 문제해결과 협동학습을 위한 새로운 교육 방식"
      />
      
      <div className="space-y-8 text-slate-200">
        <Card className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-white">TRPG 기반 창의력 교육</h2>
          <div className="space-y-4 text-lg text-slate-300">
            <p>• 학생들이 직접 캐릭터를 만들고 이야기를 전개하는 몰입형 학습</p>
            <p>• 창의적 사고와 협업 능력 강화</p>
            <p>• 소규모 클래스로 개인 맞춤형 지도</p>
          </div>
        </Card>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">대상별 프로그램</h2>
          <Grid cols={3} className="gap-6">
            {programs.map((program, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">{program.title}</h3>
                <p className="text-slate-300 mb-4">{program.description}</p>
                <ul className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </Grid>
        </div>

        <TRPGFeatures />
        <TRPGSchedule />
      </div>
    </PageContainer>
  );
};

export default TRPG;