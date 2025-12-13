import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-24 px-8">
      <div className="container mx-auto max-w-3xl">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 leading-tight tracking-tight">
              Product Manager
            </h1>
            <div className="h-px w-16 bg-gray-300"></div>
          </div>
          
          <div className="space-y-5 max-w-2xl">
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Hi! I'm Alaa, a Product Manager with a background in Engineering and Data Science. I've spent the majority of my career in the Data and AI Education space.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Looking to continually learn and apply myself to serve others as best I can.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              If there's anything I can do for you, please reach out!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
