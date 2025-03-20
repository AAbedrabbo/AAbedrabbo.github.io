
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        scrolled ? "glass-effect shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-lg font-medium">Portfolio</h1>
        <nav className="space-x-8 hidden md:block">
          <a href="#about" className="text-sm hover:text-portfolio-accent transition-colors">About</a>
          <a href="#projects" className="text-sm hover:text-portfolio-accent transition-colors">Projects</a>
          <a href="#contact" className="text-sm hover:text-portfolio-accent transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
