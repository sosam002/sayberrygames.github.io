import React from 'react';
import PageContainer from '../components/common/PageContainer';
import PageHeader from '../components/common/PageHeader';
import Card from '../components/common/Card';
import Grid from '../components/common/Grid';

const About = () => {
  const philosophies = [
    {
      title: "실험과 체험을 통한 과학적 사고력 배양",
      points: [
        "직접 실험하고 관찰하며 과학적 원리 이해",
        "Story telling 기반의 몰입형 과학 수업 진행"
      ]
    },
    {
      title: "창의적 문제해결 능력 개발",
      points: [
        "TRPG를 활용한 상황 기반 문제해결 학습",
        "AI 도구를 활용한 창의적 사고력 확장",
        "협업과 소통 능력 강화"
      ]
    },
    {
      title: "논리적 사고력 강화",
      points: [
        "단계별 사고수학 프로그램 운영",
        "수학적 개념의 실생활 적용 능력 배양",
        "개인별 맞춤형 학습 진도 관리"
      ]
    }
  ];

  const strengths = [
    {
      title: "통합 교육 시스템",
      points: [
        "과학/수학/AI/TRPG의 유기적 결합",
        "이론과 실습의 균형잡힌 교육",
        "소규모 맞춤형 교육"
      ]
    },
    {
      title: "전문성 있는 교육진",
      points: [
        "KAIST 출신의 전문 교육진",
        "풍부한 현장 경험을 갖춘 강사진",
        "지속적인 교육 연구와 개발"
      ]
    }
  ];

  return (
    <PageContainer>
      <PageHeader title="미래형 교육센터" subtitle="생각하는 힘을 키우는 융합 교육의 리더" />
      
      <div className="space-y-8 text-slate-200">
        <Card className="p-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">우리의 모토</h2>
            <p className="text-xl text-slate-300">"생각하는 힘으로 미래를 여는 교육"</p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-6 text-white">교육 철학</h2>
              <Grid cols={3} className="gap-6">
                {philosophies.map((philosophy, index) => (
                  <Card key={index} className="p-6">
                    <h3 className="text-lg font-semibold mb-4 text-white">{philosophy.title}</h3>
                    <ul className="space-y-2">
                      {philosophy.points.map((point, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          <span className="text-slate-300">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </Grid>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-white">우리의 강점</h2>
              <Grid cols={2} className="gap-6">
                {strengths.map((strength, index) => (
                  <Card key={index} className="p-6">
                    <h3 className="text-lg font-semibold mb-4 text-white">{strength.title}</h3>
                    <ul className="space-y-2">
                      {strength.points.map((point, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          <span className="text-slate-300">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </Grid>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-white">목표</h2>
              <Card className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span className="text-slate-300">학생들의 자기주도적 학습능력 배양</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span className="text-slate-300">미래사회가 요구하는 융합형 인재 육성</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span className="text-slate-300">즐겁게 배우며 성장하는 교육환경 조성</span>
                  </li>
                </ul>
              </Card>
            </section>

            <div className="text-center mt-12">
              <p className="text-lg text-slate-300 italic">
                "우리는 단순한 지식 전달을 넘어, 생각하는 힘을 키워 미래를 준비하는 인재를 양성합니다."
              </p>
            </div>
          </div>
        </Card>
      </div>
    </PageContainer>
  );
};

export default About;