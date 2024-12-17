import React from 'react';
import { Link } from 'react-router-dom';

const FooterCopyright = () => {
  return (
    <div className="mt-8 pt-8 border-t border-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-400 text-sm">
          © 2024 교육 플랫폼. All rights reserved.
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">
            개인정보처리방침
          </Link>
          <Link to="/terms" className="text-gray-400 hover:text-white text-sm">
            이용약관
          </Link>
          <Link to="/sitemap" className="text-gray-400 hover:text-white text-sm">
            사이트맵
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterCopyright;