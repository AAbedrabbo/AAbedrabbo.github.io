import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-8 border-t border-gray-100">
      <div className="container mx-auto max-w-3xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-light text-gray-900">Get in Touch</h2>
            <p className="text-base text-gray-600 font-light max-w-xl">
              Feel free to reach out for collaborations or just a friendly hello.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/AAbedrabbo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://gitlab.com/alaa.abedrabbo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors"
              aria-label="GitLab Profile"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51a.42.42 0 0 1 .82 0l2.44 7.51h8.1l2.44-7.51a.42.42 0 0 1 .82 0l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/alaaabedrabbo/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:alaa.abedrabbo@gmail.com" 
              className="text-gray-500 hover:text-gray-900 transition-colors"
              aria-label="Email me"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          
          <div className="pt-12 border-t border-gray-100">
            <p className="text-sm text-gray-400 font-light">
              © {new Date().getFullYear()} Alaa Abedrabbo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
