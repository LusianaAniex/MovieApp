import React from 'react';
import { Link } from 'react-router-dom';
const Footer: React.FC = () => {
  return (
    <footer className='bg-black text-neutral-600 py-8 border-t border-neutral-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-15 lg:px-25 not-first: flex flex-col md:flex-row items-left justify-start md:justify-between'>
        <Link
          to='/'
          className='flex items-center space-x-2 hover:opacity-80 transition-opacity'
        >
          <img src='/Logo.svg' alt='FooterLogo' />
        </Link>
        <div className='text-neutral-600 text-sm mt-4 md:mt-0'>
          Copyright ©2025 Movie Explorer
        </div>
      </div>
    </footer>
  );
};

export default Footer;
