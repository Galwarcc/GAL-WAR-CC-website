import React, { useEffect, useRef } from 'react';

const IndustrialChamber = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle system for ambient effects
    const particles = [];
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    // Tube glow positions
    const tubes = [
      { x: 0.2, y: 0.3, radius: 80 },
      { x: 0.8, y: 0.4, radius: 60 },
      { x: 0.5, y: 0.7, radius: 70 },
      { x: 0.15, y: 0.8, radius: 50 }
    ];

    let frame = 0;

    const animate = () => {
      frame++;
      ctx.fillStyle = '#1F2327';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw metallic panel grid
      ctx.strokeStyle = 'rgba(107, 116, 126, 0.15)';
      ctx.lineWidth = 1;
      const gridSize = 100;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw tube glows (amber/red pulsing)
      tubes.forEach((tube, index) => {
        const x = tube.x * canvas.width;
        const y = tube.y * canvas.height;
        const pulse = Math.sin(frame * 0.02 + index) * 0.3 + 0.7;
        
        // Amber glow
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, tube.radius * pulse);
        gradient.addColorStop(0, 'rgba(250, 211, 90, 0.4)');
        gradient.addColorStop(0.5, 'rgba(231, 49, 41, 0.2)');
        gradient.addColorStop(1, 'rgba(231, 49, 41, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(x - tube.radius, y - tube.radius, tube.radius * 2, tube.radius * 2);
      });

      // Draw particles (dust/ambient)
      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        ctx.fillStyle = `rgba(151, 229, 245, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw neon blue accents (pipes/cables)
      ctx.strokeStyle = 'rgba(59, 168, 247, 0.3)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, canvas.height * 0.2);
      ctx.lineTo(canvas.width, canvas.height * 0.2);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(canvas.width * 0.3, 0);
      ctx.lineTo(canvas.width * 0.3, canvas.height);
      ctx.stroke();

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ background: '#1F2327' }}
    />
  );
};

export default IndustrialChamber;