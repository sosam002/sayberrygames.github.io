import React from 'react';
import Button from '../common/Button';

const TRPGScheduleItem = ({ title, time }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-gray-600">{time}</p>
      </div>
      <Button>신청하기</Button>
    </div>
  );
};

export default TRPGScheduleItem;