import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="flex items-center">
      <Link to="/" className="flex items-center">
        <img src="/wise-future-lab-icon.svg" alt="와이즈 퓨처랩" className="h-8" />
        <div className="hidden lg:block ml-2">
          <img src="/wise-future-lab-text.svg" alt="와이즈 퓨처랩 AI융합교육센터" className="h-10" />
        </div>
      </Link>
    </div>
  );
};

export default Logo;