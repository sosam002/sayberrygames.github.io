import React from 'react';
import Card from '../common/Card';

const TRPGFeature = ({ icon, title, description }) => {
  return (
    <Card>
      <div className="flex items-center mb-4">
        <div className="text-blue-600">{icon}</div>
        <h2 className="text-xl font-semibold ml-3">{title}</h2>
      </div>
      <p className="text-gray-600">{description}</p>
    </Card>
  );
};

export default TRPGFeature;