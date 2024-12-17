import React from 'react';

const Locations = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">학원찾기</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-6">
          <input
            type="text"
            placeholder="지역명을 입력하세요"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">강남센터</h3>
            <p className="text-gray-600">서울특별시 강남구 테헤란로 123</p>
            <p className="text-gray-600">02-1234-5678</p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">서초센터</h3>
            <p className="text-gray-600">서울특별시 서초구 서초대로 456</p>
            <p className="text-gray-600">02-2345-6789</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;