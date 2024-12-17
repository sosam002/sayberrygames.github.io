import React from 'react';

const Library = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">와이브러리</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">학습자료</h2>
          <ul className="space-y-2">
            <li>• 수학 문제집</li>
            <li>• 과학 실험 자료</li>
            <li>• 학습 가이드</li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">동영상 강의</h2>
          <ul className="space-y-2">
            <li>• 개념 설명</li>
            <li>• 문제 풀이</li>
            <li>• 실험 시연</li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">학습 도구</h2>
          <ul className="space-y-2">
            <li>• 계산기</li>
            <li>• 그래프 도구</li>
            <li>• 시뮬레이션</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Library;