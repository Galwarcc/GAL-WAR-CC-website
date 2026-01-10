import React from 'react';

const VideoBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden bg-black">
      {/* Video Background Only */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/cinematic-background.mp4" type="video/mp4" />
      </video>
      
      {/* Subtle overlay for text readability */}
      <div 
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ 
          background: 'rgba(0,0,0,0.3)'
        }}
      />
    </div>
  );
};

export default VideoBackground;
