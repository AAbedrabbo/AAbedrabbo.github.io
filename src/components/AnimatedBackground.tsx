
import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div 
        className="blur-background bg-blue-200" 
        style={{ left: '10%', top: '15%' }}
      />
      <div 
        className="blur-background bg-blue-300" 
        style={{ right: '15%', bottom: '20%' }}
      />
    </div>
  );
};

export default AnimatedBackground;
