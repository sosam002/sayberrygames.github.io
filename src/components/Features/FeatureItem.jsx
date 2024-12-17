import React from 'react';

const FeatureItem = ({ icon, title }) => {
  return (
    <div className="text-center">
      <div className="flex justify-center">
        <div className="bg-gray-100 rounded-full p-3">
          {icon}
        </div>
      </div>
      <h3 className="mt-2 text-sm font-medium text-gray-900">{title}</h3>
    </div>
  );
};

export default FeatureItem;