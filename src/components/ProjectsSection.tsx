
import React, { useEffect, useRef } from 'react';

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A modern shopping experience built with React and Node.js",
    tags: ["React", "Node.js", "MongoDB"]
  },
  {
    id: 2,
    title: "Finance Dashboard",
    description: "Data visualization tool for personal finance tracking",
    tags: ["TypeScript", "D3.js", "Firebase"]
  },
  {
    id: 3,
    title: "Mobile Health App",
    description: "Wellness tracking application designed for iOS and Android",
    tags: ["React Native", "GraphQL", "AWS"]
  }
];

const ProjectsSection: React.FC = () => {
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
    <section id="projects" ref={sectionRef} className="section py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-portfolio-accent text-xs font-medium uppercase tracking-wider">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">Featured Projects</h2>
          <p className="text-portfolio-muted mt-4">
            A selection of my recent work and personal projects
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-portfolio-border"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="h-40 rounded-xl bg-gray-100 mb-6 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                  <span className="text-portfolio-accent text-5xl font-bold opacity-10">
                    {project.id}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-portfolio-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-portfolio-muted text-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-xs py-1 px-2 rounded-full bg-blue-50 text-portfolio-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
