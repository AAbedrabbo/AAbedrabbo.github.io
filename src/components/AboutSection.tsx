import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-24 px-8">
      <div className="container mx-auto max-w-3xl">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 leading-tight tracking-tight">
              Product Manager, Data scientist, Teacher
            </h1>
            <div className="h-px w-16 bg-gray-300"></div>
          </div>
          
          <div className="space-y-5 max-w-2xl">
            <p className="text-lg text-gray-600 leading-relaxed font-light">
            Hi! I'm Alaa, I'm an Engineer turned Data scientist, turned teacher, turned Product manager. Currently working in the EdTech space.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Always looking to learn and apply myself to serve others as best I can.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
            If you'd like to connect or collaborate, or just chat over a coffee, please reach out!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
