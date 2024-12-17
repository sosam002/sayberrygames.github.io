import React from 'react';
import Card from '../common/Card';
import Badge from '../common/Badge';
import { scheduleData } from '../../data/scheduleData';

const ScheduleCalendar = ({ selectedProgram }) => {
  const timeSlots = [
    '13:00 - 13:30', '13:30 - 14:00', '14:00 - 14:30', '14:30 - 15:00',
    '15:00 - 15:30', '15:30 - 16:00', '16:00 - 16:30', '16:30 - 17:00',
    '17:00 - 17:30', '17:30 - 18:00', '18:00 - 18:30', '18:30 - 19:00',
    '19:00 - 19:30'
  ];

  const days = ['월', '화', '수', '목', '금'];

  const getClassTypeColor = (type) => {
    const colors = {
      '수학': 'primary',
      '과학실험': 'success',
      'TRPG': 'purple'
    };
    return colors[type] || 'primary';
  };

  const filterSchedule = (schedule) => {
    if (!selectedProgram || selectedProgram === 'all') return schedule;
    return schedule ? (schedule.type === selectedProgram ? schedule : null) : null;
  };

  const shouldShowClass = (day, timeSlot, rowIndex) => {
    const classInfo = scheduleData[day][timeSlot];
    if (!classInfo) return null;
    
    // 첫 번째 슬롯에만 표시하고 나머지는 숨김
    const currentIndex = timeSlots.indexOf(timeSlot);
    const prevSlot = timeSlots[currentIndex - 1];
    const prevClass = prevSlot ? scheduleData[day][prevSlot] : null;
    
    if (prevClass && prevClass.duration > 1) {
      const slotsFromStart = currentIndex % prevClass.duration;
      if (slotsFromStart !== 0) return null;
    }
    
    return filterSchedule(classInfo);
  };

  const getRowSpan = (classInfo) => {
    return classInfo ? classInfo.duration : 1;
  };

  return (
    <Card className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-700">
        <thead className="bg-slate-800">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
              시간
            </th>
            {days.map((day) => (
              <th key={day} className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                {day}요일
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700">
          {timeSlots.map((timeSlot, index) => (
            <tr key={timeSlot} className="hover:bg-slate-800/50">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">
                {timeSlot}
              </td>
              {days.map((day) => {
                const classInfo = shouldShowClass(day, timeSlot, index);
                if (classInfo === null) return <td key={day}></td>;
                
                return (
                  <td 
                    key={day} 
                    className="px-6 py-4 whitespace-nowrap"
                    rowSpan={getRowSpan(classInfo)}
                  >
                    <div>
                      <div className="text-sm font-medium text-white">
                        {classInfo.title}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant={getClassTypeColor(classInfo.type)}>
                          {classInfo.type}
                        </Badge>
                        <span className="text-xs text-slate-400">{classInfo.room}</span>
                      </div>
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default ScheduleCalendar;