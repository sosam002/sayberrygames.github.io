import React from 'react';
import Card from '../common/Card';
import Button from '../common/Button';

const TRPGIntro = () => {
  return (
    <Card className="mb-8">
      <p className="text-lg text-gray-700 mb-4">
        AI 기술을 활용한 테이블톱 롤플레잉 게임(TRPG)으로 재미있게 배우는 새로운 교육 방식을 경험해보세요.
      </p>
      <Button>무료 체험 신청</Button>
    </Card>
  );
};

export default TRPGIntro;