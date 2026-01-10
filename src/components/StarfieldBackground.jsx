import React from 'react';

const StarfieldBackground = () => {
  return (
    <>
      {/* Animated Serpent Green Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              width: Math.random() > 0.8 ? '3px' : '2px',
              height: Math.random() > 0.8 ? '3px' : '2px',
              background: i % 10 === 0 ? '#6FAF95' : '#2E7A5E',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.4 + 0.2,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 4 + 3}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Emerald Orbs - Slytherin Spirit */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-15 blur-3xl animate-float"
            style={{
              width: `${250 + i * 60}px`,
              height: `${250 + i * 60}px`,
              background: `radial-gradient(circle, ${
                [
                  'rgba(31, 107, 79, 0.25)',
                  'rgba(46, 122, 94, 0.2)',
                  'rgba(201, 164, 92, 0.15)',
                  'rgba(23, 79, 58, 0.22)',
                ][i]
              } 0%, transparent 70%)`,
              top: `${10 + i * 23}%`,
              left: `${8 + i * 27}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${25 + i * 5}s`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default StarfieldBackground;