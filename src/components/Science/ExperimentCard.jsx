import React from 'react';
import Card from '../common/Card';
import Button from '../common/Button';

const ExperimentCard = ({ title, experiments, level, duration }) => {
  return (
    <Card>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2 mb-4">
        {experiments.map((exp, index) => (
          <li key={index} className="flex items-center">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            {exp}
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
        <span>대상: {level}</span>
        <span>소요시간: {duration}</span>
      </div>
      <Button variant="outline" className="w-full">
        실험 신청하기
      </Button>
    </Card>
  );
};

export default ExperimentCard;