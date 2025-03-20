
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
            Feel free to reach out for collaborations or just a friendly hello
          </p>
          
          <div className="flex items-center justify-center space-x-4 mt-8">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5 text-portfolio-dark" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 text-portfolio-dark" />
            </a>
            <a 
              href="mailto:your.email@example.com" 
              className="social-link"
              aria-label="Email me"
            >
              <Mail className="w-5 h-5 text-portfolio-dark" />
            </a>
          </div>
          
          <div className="mt-16 pt-8 border-t border-portfolio-border">
            <p className="text-sm text-portfolio-muted">
              © {new Date().getFullYear()} · Designed & Built with care
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
