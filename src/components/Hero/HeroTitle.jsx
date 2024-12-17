import React from 'react';

const HeroTitle = () => {
  return (
    <div className="space-y-2">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
        <span className="block text-gray-900">와이즈 퓨처랩</span>
        <span className="block text-blue-600 mt-2">수학·과학·TRPG</span>
        <span className="block text-gray-900 mt-2">AI 융합교육센터</span>
      </h1>
      <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl">
        창의적으로 실험하고, 수많은 실패와 도전으로 논리를 내면화합니다. 무엇이든 상상하고, 무엇이든 도전하고, 수많은 AI 도구를 활용할 수 있습니다. AI와 함께 생각의 기술을 배우고, 상상을 실현합니다. 미래의 인재가 자랍니다.
      </p>
    </div>
  );
};

export default HeroTitle;