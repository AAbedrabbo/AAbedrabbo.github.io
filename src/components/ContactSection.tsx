import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const ContactSection: React.FC = () => {
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
    <section id="contact" ref={sectionRef} className="section py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-portfolio-accent text-xs font-medium uppercase tracking-wider">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">Let's Connect</h2>
          <p className="text-portfolio-muted mt-4 mb-8">
            Feel free to reach out for collaborations or just a friendly hello. Always up for a coffee! ☕
          </p>
          
          <div className="flex items-center justify-center space-x-4 mt-8">
            <a 
              href="https://github.com/AAbedrabbo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-portfolio-accent text-white hover:brightness-110 transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://gitlab.com/alaa.abedrabbo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-portfolio-accent text-white hover:brightness-110 transition-all"
              aria-label="GitLab Profile"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51a.42.42 0 0 1 .82 0l2.44 7.51h8.1l2.44-7.51a.42.42 0 0 1 .82 0l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/alaaabedrabbo/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-portfolio-accent text-white hover:brightness-110 transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:alaa.abedrabbo@gmail.com" 
              className="p-3 rounded-full bg-portfolio-accent text-white hover:brightness-110 transition-all"
              aria-label="Email me"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          
          <div className="mt-16 pt-8 border-t border-portfolio-border">
            <p className="text-sm text-portfolio-muted">
              © {new Date().getFullYear()} · Designed & Built by human + AI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
