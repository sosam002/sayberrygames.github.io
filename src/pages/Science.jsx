import React from 'react';
import PageContainer from '../components/common/PageContainer';
import PageHeader from '../components/common/PageHeader';
import Card from '../components/common/Card';
import Grid from '../components/common/Grid';

const Science = () => {
  const educationFlow = [
    "Story telling 형식으로 수업과 관련된 현상을 이야기",
    "실험내용과 관련 있는 경험에 대해 이야기를 나눔",
    "궁금한 점과 궁금증을 해결하기 위한 방안 모색",
    "실험 대상을 적절히 변화시키고 영향 요인 통제",
    "실험이나 만들기 활동 진행",
    "알게 된 사실을 정리하고 발표하며 토론",
    "관련 있는 다양한 예시와 내용 정리"
  ];

  const curriculums = [
    {
      title: "7세~초등 2학년 과정",
      features: [
        "다양한 주제별 수업",
        "다양한 경험과 관찰 중심",
        "기초실험도구 사용법 학습",
        "기초 측정 활동",
        "예상과 추리 활동",
        "지적호기심 충족"
      ]
    },
    {
      title: "초등 3~5학년 과정",
      features: [
        "심화 주제별 수업",
        "현상의 상호연관성 탐구",
        "근본 원인 탐구",
        "표와 그래프 활용",
        "보고서 작성 능력 배양"
      ]
    }
  ];

  return (
    <PageContainer>
      <PageHeader 
        title="과학실험" 
        description="직접 체험하며 배우는 실험 중심의 과학 교육"
      />

      <div className="space-y-8 text-slate-200">
        {/* 교육 형태 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">교육 형태</h2>
          <Grid cols={2} className="gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-white">방문실험</h3>
              <p className="text-slate-300">
                단순한 키트가 아닌 각종 실험에 필요한 모든 실험도구를 교사가 모두 구비해서 방문합니다.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-white">내원실험</h3>
              <p className="text-slate-300">
                센터 또는 홈스쿨링 형태의 실험으로 각 센터나 홈에서는 실험에 필요한 모든 기자재를 구비하고 있습니다.
              </p>
            </Card>
          </Grid>
        </section>

        {/* 교육 흐름도 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">교육 흐름도</h2>
          <Card className="p-6">
            <div className="space-y-4">
              {educationFlow.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-400 text-white rounded-full flex items-center justify-center">
                    {index + 1}
                  </div>
                  <p className="text-slate-300 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* 커리큘럼 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">커리큘럼</h2>
          <Grid cols={2} className="gap-6">
            {curriculums.map((curriculum, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">{curriculum.title}</h3>
                <div className="space-y-3">
                  {curriculum.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <p className="text-slate-300">{feature}</p>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </Grid>
        </section>
      </div>
    </PageContainer>
  );
};

export default Science;