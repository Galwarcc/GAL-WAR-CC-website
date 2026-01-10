import React from 'react';

export const ComicBurst = ({ children, color = '#FFD700' }) => {
  return (
    <div className="relative inline-block">
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
        <defs>
          <filter id="comic-shadow">
            <feOffset dx="4" dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3" />
            </feComponentTransfer>
          </filter>
        </defs>
        <polygon
          points="50,5 61,35 95,35 68,57 79,91 50,70 21,91 32,57 5,35 39,35"
          fill={color}
          stroke="#000"
          strokeWidth="3"
          filter="url(#comic-shadow)"
          transform="scale(0.8)"
        />
      </svg>
      {children}
    </div>
  );
};

export const ActionLines = ({ direction = 'right' }) => {
  const lines = Array.from({ length: 10 }, (_, i) => i);
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {lines.map((i) => (
        <div
          key={i}
          className="absolute h-0.5 bg-black"
          style={{
            width: `${Math.random() * 300 + 100}px`,
            top: `${i * 10}%`,
            left: direction === 'right' ? '-100px' : 'auto',
            right: direction === 'left' ? '-100px' : 'auto',
            transform: `skewY(${Math.random() * 10 - 5}deg)`,
            animation: `speed-line-${direction} ${Math.random() * 2 + 1}s linear infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

export const ComicPanel = ({ children, className = '', angle = 0 }) => {
  return (
    <div 
      className={`comic-panel ${className}`}
      style={{
        transform: `rotate(${angle}deg)`,
      }}
    >
      {children}
    </div>
  );
};

export const ImpactText = ({ children, size = 'large' }) => {
  const sizeClasses = {
    small: 'text-4xl',
    medium: 'text-6xl',
    large: 'text-8xl',
    huge: 'text-9xl',
  };

  return (
    <div className="relative inline-block">
      <div 
        className={`${sizeClasses[size]} font-black manga-text`}
        style={{
          color: '#fff',
          textShadow: `-4px -4px 0 #000, 4px -4px 0 #000, -4px 4px 0 #000, 4px 4px 0 #000,
                       -6px 0 0 #000, 6px 0 0 #000, 0 -6px 0 #000, 0 6px 0 #000`,
          animation: 'comic-pop 0.5s ease-in-out infinite',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export const HalftonePattern = () => {
  return (
    <div 
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: 'radial-gradient(circle, #000 1.5px, transparent 1.5px)',
        backgroundSize: '8px 8px',
        opacity: 0.1,
      }}
    />
  );
};
