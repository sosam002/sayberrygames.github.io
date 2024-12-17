import React from 'react';
import Logo from '../common/Logo';
import FooterContact from './FooterContact';
import FooterAddress from './FooterAddress';
import FooterSocial from './FooterSocial';
import FooterCopyright from './FooterCopyright';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Logo />
            <p className="mt-4 text-gray-400">
              창의적 사고와 문제해결 능력을 키우는 교육 플랫폼
            </p>
          </div>
          <FooterContact />
          <FooterAddress />
          <FooterSocial />
        </div>
        <FooterCopyright />
      </div>
    </footer>
  );
};

export default Footer;