
import React, { useEffect, useRef } from 'react';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-portfolio-accent text-xs font-medium uppercase tracking-wider opacity-0 animate-fade-in-up">
            Hello, World
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight opacity-0 animate-fade-in-up-delay-1">
            I'm a <span className="text-gradient">Developer</span> <br />
            Passionate About Creating
          </h1>
          <p className="text-lg text-portfolio-muted max-w-2xl mx-auto opacity-0 animate-fade-in-up-delay-2">
            I design and build digital experiences with a focus on simplicity, elegance, and attention to detail. My work combines clean code with thoughtful design to create products that are both functional and beautiful.
          </p>
          <div className="flex items-center justify-center gap-4 mt-8 opacity-0 animate-fade-in-up-delay-3">
            <a 
              href="#projects" 
              className="px-6 py-3 rounded-full bg-portfolio-accent text-white font-medium transition-all hover:shadow-lg hover:brightness-110"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-full border border-portfolio-border text-portfolio-dark font-medium transition-all hover:bg-gray-50"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
