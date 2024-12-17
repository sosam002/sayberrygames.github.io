import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-between h-auto py-2 sm:h-10 items-center text-sm">
          <div className="flex flex-wrap gap-4 items-center">
            <Link to="/wiki" className="hover:text-gray-300">와이키즈</Link>
            <Link to="/community" className="hover:text-gray-300 hidden sm:block">중등와이즈맨CNI</Link>
            <Link to="/library" className="hover:text-gray-300">와이브러리</Link>
          </div>
          <div>
            <Link to="/ask" className="hover:text-gray-300">askhow</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;