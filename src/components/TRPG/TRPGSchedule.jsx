import React from 'react';
import TRPGScheduleItem from './TRPGScheduleItem';

const TRPGSchedule = () => {
  const schedules = [
    { title: '입문반', time: '매주 토요일 10:00 - 12:00' },
    { title: '심화반', time: '매주 일요일 14:00 - 16:00' }
  ];

  return (
    <div className="mt-8 bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">프로그램 일정</h2>
      <div className="space-y-4">
        {schedules.map((schedule, index) => (
          <TRPGScheduleItem key={index} {...schedule} />
        ))}
      </div>
    </div>
  );
};

export default TRPGSchedule;