import React, { useEffect, useRef } from 'react';

const BinaryRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Set canvas to full screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Binary characters
    const binary = '01';
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    
    // Array to track y position of each column
    const drops = [];
    const speeds = [];
    
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100; // Start above screen
      speeds[i] = Math.random() * 0.5 + 0.5; // Random speed for each column
    }

    const draw = () => {
      // Black background with opacity for fade effect
      ctx.fillStyle = 'rgba(0, 0, 1, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Random binary character
        const text = binary[Math.floor(Math.random() * binary.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Create gradient effect - brighter at the head
        const gradient = ctx.createLinearGradient(x, y - fontSize * 10, x, y);
        gradient.addColorStop(0, 'rgba(0, 255, 0, 0)');
        gradient.addColorStop(0.5, 'rgba(0, 255, 0, 0.5)');
        gradient.addColorStop(1, 'rgba(0, 255, 0, 1)');
        
        ctx.fillStyle = gradient;
        
        // Add glow effect to the head character
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(0, 255, 0, 0.8)';
        
        ctx.fillText(text, x, y);

        // Reset shadow for trail
        ctx.shadowBlur = 0;

        // Reset drop to top randomly
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Increment y coordinate with speed
        drops[i] += speeds[i];
      }
    };

    const interval = setInterval(draw, 33);

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Recalculate columns
      const newColumns = Math.floor(canvas.width / fontSize);
      drops.length = newColumns;
      speeds.length = newColumns;
      for (let i = 0; i < newColumns; i++) {
        if (drops[i] === undefined) {
          drops[i] = Math.random() * -100;
          speeds[i] = Math.random() * 0.5 + 0.5;
        }
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{
        zIndex: 0,
        opacity: 0.3,
      }}
    />
  );
};

export default BinaryRain;
