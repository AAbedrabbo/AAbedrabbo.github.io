import React from 'react';

const ProjectsSection: React.FC = () => {
  return (
    <section id="experience" className="py-32 px-8">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-light text-gray-900 mb-16">Experience</h2>
        
        <div className="space-y-16">
          <div className="space-y-3">
            <h3 className="text-xl font-normal text-gray-900">Product Manager</h3>
            <p className="text-base text-gray-600 leading-relaxed font-light">
              I'm currently a Product Manager at EdTech scale-up, <a href="https://www.cambridgespark.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 underline hover:no-underline transition-colors">Cambridge Spark</a>, and have been for close to two years now. At Cambridge Spark, I have the privilege of looking after both a portfolio of curriculum products, as well as an AI product—our LLM-based learning assistant—that all our learners have access to on our platform, <a href="https://edukate.ai/" target="_blank" rel="noopener noreferrer" className="text-gray-900 underline hover:no-underline transition-colors">EDUKATE.AI</a>.
            </p>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-xl font-normal text-gray-900">Data and AI education</h3>
            <p className="text-base text-gray-600 leading-relaxed font-light">
              Before Cambridge Spark, I spent 5 years also in Education, at <a href="https://www.decoded.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 underline hover:no-underline transition-colors">Decoded</a>, where I did a mixture of creating content, teaching workshops, and managing our courses and content for a variety of audiences—from folks who needed to up-skill in Python and machine learning, to Leadership and C-Suite audiences who wanted to learn more about data and AI.
            </p>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-xl font-normal text-gray-900">Data Science</h3>
            <p className="text-base text-gray-600 leading-relaxed font-light">
              And before that I worked at the <a href="https://www.nationalgrid.co.uk/" target="_blank" rel="noopener noreferrer" className="text-gray-900 underline hover:no-underline transition-colors">National Grid</a> in the UK as a data scientist for a short while, after graduating from the <a href="https://warwick.ac.uk/" target="_blank" rel="noopener noreferrer" className="text-gray-900 underline hover:no-underline transition-colors">University of Warwick</a> with a BEng in Systems Engineering and an MSc in Data Analytics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
