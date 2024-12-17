import React from 'react';
import { FaGraduationCap, FaChalkboardTeacher, FaCalendarAlt, FaChartLine, FaComments } from 'react-icons/fa';
import FeatureItem from './FeatureItem';

const ProgramFeatures = () => {
  const features = [
    { icon: <FaGraduationCap className="w-6 h-6" />, title: '일반사이버' },
    { icon: <FaChalkboardTeacher className="w-6 h-6" />, title: '교육정위탁' },
    { icon: <FaCalendarAlt className="w-6 h-6" />, title: '교육일정' },
    { icon: <FaChartLine className="w-6 h-6" />, title: '교육만족도&효과' },
    { icon: <FaComments className="w-6 h-6" />, title: '자주하는 질문' }
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramFeatures;