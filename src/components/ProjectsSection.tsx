import React, { useEffect, useRef } from 'react';

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
          <h2 className="text-3xl md:text-4xl font-bold mt-4">The journey so far</h2>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <div className="text-left text-3xl mb-1">
              🤖
            </div>
            <p className="text-portfolio-dark leading-relaxed">
            I'm currently a Product Manager at EdTech scale-up, <a href="https://www.cambridgespark.com" target="_blank" rel="noopener noreferrer">Cambridge Spark</a>, and have been for over a year now. At Cambridge Spark, I have the privilege of looking after both a portfolio of curriculum products, as well as an AI product—our LLM-based learning assistant—that all our learners have access to on our platform, <a href="https://edukate.ai/" target="_blank" rel="noopener noreferrer">EDUKATE.AI</a> .
            </p>
          </div>
          
          <div>
            <div className="text-left text-3xl mb-1">
              💻
            </div>
            <p className="text-portfolio-dark leading-relaxed">
            Before Cambridge Spark, I spent 5 years also in Education, at <a href="https://www.decoded.com" target="_blank" rel="noopener noreferrer">Decoded</a>, where I did a mixture of creating content, teaching workshops, and managing our courses and content for a variety of audiences—from folks who needed to up-skill in Python and machine learning, to Leadership and C-Suite audiences who wanted to learn more about data and AI. 
            </p>
          </div>
          
          <div>
            <div className="text-left text-3xl mb-1">
              📊
            </div>
            <p>
            And before that I worked at the <a href="https://www.nationalgrid.co.uk/" target="_blank" rel="noopener noreferrer">National Grid</a> in the UK as a data scientist for a short while, after graduating from the <a href="https://warwick.ac.uk/" target="_blank" rel="noopener noreferrer">University of Warwick</a> with a BEng in Systems Engineering and an MSc in Data Analytics. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
