import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Select from '../components/common/Select';

const AssessmentBooking = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    subject: '수학',
    name: '',
    phone: '',
    grade: '',
    center: '',
    date: '',
    time: ''
  });

  const subjects = [
    { value: '수학', label: '수학' },
    { value: '과학', label: '과학' },
    { value: '수학+과학', label: '수학+과학' }
  ];

  const grades = [
    { value: '초등1', label: '초등학교 1학년' },
    { value: '초등2', label: '초등학교 2학년' },
    { value: '초등3', label: '초등학교 3학년' },
    { value: '초등4', label: '초등학교 4학년' },
    { value: '초등5', label: '초등학교 5학년' },
    { value: '초등6', label: '초등학교 6학년' },
    { value: '중등1', label: '중학교 1학년' },
    { value: '중등2', label: '중학교 2학년' },
    { value: '중등3', label: '중학교 3학년' }
  ];

  const centers = [
    { value: '강남센터', label: '강남센터' },
    { value: '서초센터', label: '서초센터' },
    { value: '송파센터', label: '송파센터' }
  ];

  const timeSlots = [
    { value: '14:00', label: '14:00' },
    { value: '15:30', label: '15:30' },
    { value: '17:00', label: '17:00' },
    { value: '18:30', label: '18:30' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement booking submission
    console.log('Booking submitted:', formData);
    navigate('/assessment/confirmation');
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <PageHeader
        title="진단검사 예약"
        description="학습 수준과 성향을 정확하게 진단하여 최적의 학습 방향을 제시합니다."
      />

      <Card className="mt-8">
        <form onSubmit={handleSubmit} className="space-y-6 p-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              진단 과목
            </label>
            <div className="flex gap-4">
              {subjects.map(subject => (
                <label key={subject.value} className="flex items-center">
                  <input
                    type="radio"
                    name="subject"
                    value={subject.value}
                    checked={formData.subject === subject.value}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    className="mr-2"
                  />
                  {subject.label}
                </label>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                이름
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                연락처
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              학년
            </label>
            <Select
              options={grades}
              value={formData.grade}
              onChange={(value) => handleInputChange('grade', value)}
              className="w-full"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              희망 센터
            </label>
            <Select
              options={centers}
              value={formData.center}
              onChange={(value) => handleInputChange('center', value)}
              className="w-full"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                희망 날짜
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                희망 시간
              </label>
              <Select
                options={timeSlots}
                value={formData.time}
                onChange={(value) => handleInputChange('time', value)}
                className="w-full"
                required
              />
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <Button type="submit" className="w-full md:w-auto">
              예약하기
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AssessmentBooking;