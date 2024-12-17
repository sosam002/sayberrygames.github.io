import React, { useState } from 'react';
import PageContainer from '../../components/common/PageContainer';
import PageHeader from '../../components/common/PageHeader';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import Select from '../../components/common/Select';
import { scheduleData } from '../../data/scheduleData';

const ScheduleManagement = () => {
  const [selectedDay, setSelectedDay] = useState('월');
  const [selectedTime, setSelectedTime] = useState('13:00 - 13:30');
  const [selectedClass, setSelectedClass] = useState(null);

  const timeSlots = [
    '13:00 - 13:30', '13:30 - 14:00', '14:00 - 14:30', '14:30 - 15:00',
    '15:00 - 15:30', '15:30 - 16:00', '16:00 - 16:30', '16:30 - 17:00',
    '17:00 - 17:30', '17:30 - 18:00', '18:00 - 18:30', '18:30 - 19:00',
    '19:00 - 19:30'
  ];

  const days = ['월', '화', '수', '목', '금'];
  
  const classTypes = [
    { value: 'math', label: '수학' },
    { value: 'science', label: '과학실험' },
    { value: 'trpg', label: 'TRPG' }
  ];

  const rooms = [
    { value: 'room1', label: '1강의실' },
    { value: 'room2', label: '2강의실' },
    { value: 'lab1', label: '실험실1' },
    { value: 'lab2', label: '실험실2' }
  ];

  const handleScheduleSave = () => {
    // TODO: Implement schedule saving logic
    console.log('Schedule saved:', {
      day: selectedDay,
      time: selectedTime,
      class: selectedClass
    });
  };

  const getClassTypeColor = (type) => {
    const colors = {
      '수학': 'bg-blue-500',
      '과학실험': 'bg-green-500',
      'TRPG': 'bg-purple-500'
    };
    return colors[type] || 'bg-gray-500';
  };

  return (
    <PageContainer>
      <PageHeader 
        title="시간표 관리" 
        description="수업 시간표를 관리할 수 있습니다."
      />

      <Card className="mb-8">
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <Select
              options={days.map(day => ({ value: day, label: `${day}요일` }))}
              value={selectedDay}
              onChange={setSelectedDay}
              className="w-full bg-slate-800 text-white border-slate-700"
              placeholder="요일 선택"
            />
            <Select
              options={timeSlots.map(time => ({ value: time, label: time }))}
              value={selectedTime}
              onChange={setSelectedTime}
              className="w-full bg-slate-800 text-white border-slate-700"
              placeholder="시간 선택"
            />
            <Select
              options={classTypes}
              className="w-full bg-slate-800 text-white border-slate-700"
              onChange={(value) => setSelectedClass({ type: value })}
              placeholder="수업 유형 선택"
            />
            <Button onClick={handleScheduleSave}>
              저장하기
            </Button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-slate-800">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                    시간
                  </th>
                  {days.map(day => (
                    <th key={day} className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                      {day}요일
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {timeSlots.map((timeSlot) => (
                  <tr key={timeSlot} className="hover:bg-slate-800/50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">
                      {timeSlot}
                    </td>
                    {days.map(day => {
                      const classInfo = scheduleData[day][timeSlot];
                      return (
                        <td key={day} className="px-6 py-4 whitespace-nowrap">
                          {classInfo && (
                            <div className="flex items-center space-x-2">
                              <span className={`inline-block w-3 h-3 rounded-full ${getClassTypeColor(classInfo.type)}`}></span>
                              <span className="text-sm text-white">{classInfo.title}</span>
                            </div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    </PageContainer>
  );
};

export default ScheduleManagement;