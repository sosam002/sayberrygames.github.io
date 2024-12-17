import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageContainer from '../components/common/PageContainer';
import PageHeader from '../components/common/PageHeader';
import Card from '../components/common/Card';
import Grid from '../components/common/Grid';
import Button from '../components/common/Button';

const Assessment = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "수학·과학 사고력 진단",
      points: [
        "교과별 개념 이해도",
        "문제해결 능력",
        "창의적 사고력",
        "논리적 추론 능력"
      ]
    },
    {
      title: "융합인재성향 진단",
      points: [
        "학습 태도 및 성향",
        "흥미와 호기심도",
        "집중력과 과제 수행력",
        "창의성과 상상력",
        "자기주도성 평가"
      ]
    }
  ];

  const characteristics = [
    {
      title: "객관적인 데이터 분석",
      points: [
        "전국 단위 빅데이터 기반 분석",
        "연령별 수준 비교",
        "영역별 강점/약점 분석"
      ]
    },
    {
      title: "맞춤형 학습 설계",
      points: [
        "개인별 학습 로드맵 제시",
        "취약점 보완 전략 수립",
        "장점 강화 프로그램 제안"
      ]
    },
    {
      title: "전문적 상담 제공",
      points: [
        "진단 결과 전문가 분석",
        "학부모 1:1 상담",
        "구체적 학습 방향 제시"
      ]
    }
  ];

  const steps = [
    { title: "사전예약", description: "온라인으로 편리하게 예약" },
    { title: "진단평가 실시", description: "체계적인 평가 진행" },
    { title: "결과 분석", description: "전문가의 심층 분석" },
    { title: "학부모 상담", description: "1:1 맞춤 상담" },
    { title: "맞춤형 학습 설계", description: "개인별 학습 계획 수립" }
  ];

  const reviews = [
    "단순 점수가 아닌 아이의 성향까지 파악할 수 있어 만족스러웠습니다.",
    "객관적인 데이터를 바탕으로 우리 아이의 현재 위치를 정확히 알 수 있었어요.",
    "진단 결과를 바탕으로 한 맞춤형 학습 설계가 실질적인 도움이 되었습니다."
  ];

  return (
    <PageContainer>
      <PageHeader title="진단평가 시스템" />
      
      <div className="space-y-8 text-slate-200">
        {/* Overview */}
        <Card className="p-8">
          <h2 className="text-2xl font-bold text-center text-white mb-6">
            단순한 레벨테스트를 넘어선 종합적인 학습 진단 시스템
          </h2>
          <Grid cols={4} className="gap-6 text-center">
            <div>
              <h3 className="font-semibold mb-2 text-white">대상</h3>
              <p className="text-slate-300">예비 초1(7세) ~ 초등 6학년</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-white">시간</h3>
              <p className="text-slate-300">저학년 40분 / 고학년 60분</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-white">방법</h3>
              <p className="text-slate-300">센터 방문 검사</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-white">비용</h3>
              <p className="text-slate-300">무료 (사전예약 필수)</p>
            </div>
          </Grid>
        </Card>

        {/* Diagnostic Areas */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-white">진단 영역</h2>
          <Grid cols={2} className="gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                <ul className="space-y-2">
                  {feature.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-slate-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </Grid>
        </section>

        {/* Characteristics */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-white">진단평가의 특징</h2>
          <Grid cols={3} className="gap-6">
            {characteristics.map((char, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">{char.title}</h3>
                <ul className="space-y-2">
                  {char.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-slate-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </Grid>
        </section>

        {/* Process */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-white">진단평가 절차</h2>
          <Card className="p-8">
            <div className="flex flex-wrap justify-between">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4 mb-6 w-full md:w-auto">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-400 text-white rounded-full flex items-center justify-center">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{step.title}</h3>
                    <p className="text-sm text-slate-300">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Reviews */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-white">학부모 후기</h2>
          <Grid cols={3} className="gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="p-6">
                <p className="text-slate-300 italic">"{review}"</p>
              </Card>
            ))}
          </Grid>
        </section>

        {/* Contact */}
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-6 text-white">진단평가 예약 및 문의</h2>
          <div className="space-y-2 mb-8 text-slate-300">
            <p>전화: 010-XXXX-XXXX</p>
            <p>카톡: @미래형교육센터</p>
            <p>홈페이지: www.future-edu.kr</p>
          </div>
          <Button onClick={() => navigate('/assessment/booking')} size="lg">
            진단평가 예약하기
          </Button>
          <p className="mt-6 text-lg font-medium text-slate-300">
            "아이의 미래를 위한 첫걸음, 정확한 진단평가로 시작하세요."
          </p>
        </Card>
      </div>
    </PageContainer>
  );
};

export default Assessment;