import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-8 py-5 max-w-4xl">
        <nav className="flex justify-between items-center">
          <a href="#about" className="text-base font-medium text-gray-900 hover:text-gray-600 transition-colors">
            Alaa Abedrabbo
          </a>
          <div className="flex gap-8">
            <a href="#about" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">About</a>
            <a href="#experience" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Experience</a>
            <a href="#contact" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Contact</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
