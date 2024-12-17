import React from 'react';
import Badge from '../common/Badge';

const ScheduleItem = ({ time, title, type, room }) => {
  const typeVariants = {
    '수학': 'primary',
    '과학실험': 'success',
    'TRPG': 'purple'
  };

  return (
    <div className="p-4 hover:bg-gray-50 transition-colors duration-200">
      <div className="flex justify-between items-center">
        <div>
          <span className="text-gray-600">{time}</span>
          <h3 className="font-medium mt-1">{title}</h3>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant={typeVariants[type]}>{type}</Badge>
          <span className="text-sm text-gray-600">{room}</span>
        </div>
      </div>
    </div>
  );
};

export default ScheduleItem;