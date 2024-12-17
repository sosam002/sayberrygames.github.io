import React from 'react';
import PageContainer from '../components/common/PageContainer';
import PageHeader from '../components/common/PageHeader';
import Card from '../components/common/Card';

const News = () => {
  const news = [
    {
      title: "2025학년도 신입생 모집",
      date: "2025.01.15",
      content: `미래형 AI·창의력 TRPG 교육센터에서 2025학년도 신입생을 모집합니다.
        • 모집 대상: 초등학교 1학년 ~ 중학교 3학년
        • 모집 과정: 수학, 과학실험, AI TRPG 프로그램
        • 접수 기간: 2025년 1월 15일 ~ 2월 15일
        • 문의: 02-XXX-XXXX (상담시간: 평일 10:00-19:00)`,
      isHighlight: true
    },
    {
      title: "와이즈 퓨처랩 강남센터 개소",
      date: "2025.02.01",
      content: `2025년 2월, 미래형 AI·창의력 TRPG 교육센터가 강남에 문을 엽니다.
        최첨단 시설과 혁신적인 교육 프로그램으로 여러분을 찾아뵙겠습니다.
        • 위치: 서울시 강남구 테헤란로 123
        • 시설: AI 학습실, 과학실험실, TRPG 특별실 등
        • 개소식: 2025년 2월 1일 (토) 오후 2시`,
      isHighlight: true
    },
    {
      title: "2025 교육과정 설명회",
      date: "2025.01.20",
      content: `새롭게 선보이는 2025년 교육과정을 상세히 소개하는 학부모 설명회를 개최합니다.
        • 일시: 2025년 1월 20일 (토) 오후 2시
        • 장소: 강남센터 대강당
        • 내용: 교육 철학, 커리큘럼 소개, 학습 관리 시스템 안내
        • 참가신청: 홈페이지 또는 전화`,
      isHighlight: false
    }
  ];

  return (
    <PageContainer>
      <PageHeader title="새소식" description="와이즈 퓨처랩의 새로운 소식을 전해드립니다" />
      <div className="space-y-6">
        {news.map((item, index) => (
          <Card key={index} className={`p-6 ${item.isHighlight ? 'border-l-4 border-blue-400' : ''}`}>
            <article>
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-semibold text-white">{item.title}</h2>
                <span className="text-slate-400 text-sm">{item.date}</span>
              </div>
              <div className="text-slate-300 whitespace-pre-line">
                {item.content}
              </div>
            </article>
          </Card>
        ))}
      </div>
    </PageContainer>
  );
};

export default News;