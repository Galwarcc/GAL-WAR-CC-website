import React, { useEffect, useRef } from 'react';

const HolographicBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Floating particles
    const particles = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: ['#A6E9FF', '#BCA9FF', '#F6A9E7', '#8AF6E0'][Math.floor(Math.random() * 4)],
        opacity: Math.random() * 0.6 + 0.2
      });
    }

    // Gradient waves
    const waves = [];
    for (let i = 0; i < 3; i++) {
      waves.push({
        y: canvas.height * (0.3 + i * 0.2),
        amplitude: 40 + i * 20,
        frequency: 0.002 + i * 0.001,
        phase: i * 2,
        color: ['rgba(166, 233, 255, 0.1)', 'rgba(188, 169, 255, 0.1)', 'rgba(246, 169, 231, 0.1)'][i]
      });
    }

    let frame = 0;

    const animate = () => {
      frame++;
      
      // Smooth gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width
      );
      gradient.addColorStop(0, '#1C1C1E');
      gradient.addColorStop(0.5, '#242426');
      gradient.addColorStop(1, '#1C1C1E');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw ethereal waves
      waves.forEach(wave => {
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += 5) {
          const y = wave.y + Math.sin(x * wave.frequency + frame * 0.01 + wave.phase) * wave.amplitude;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = wave.color;
        ctx.lineWidth = 3;
        ctx.stroke();
        
        // Fill below wave
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        ctx.fillStyle = wave.color;
        ctx.fill();
      });

      // Draw floating particles
      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        // Particle glow
        const particleGradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 4
        );
        particleGradient.addColorStop(0, particle.color);
        particleGradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = particleGradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 4, 0, Math.PI * 2);
        ctx.fill();
        
        // Core particle
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      // Holographic light beams
      const beamGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      beamGradient.addColorStop(0, 'rgba(166, 233, 255, 0.05)');
      beamGradient.addColorStop(0.5, 'rgba(188, 169, 255, 0.05)');
      beamGradient.addColorStop(1, 'rgba(246, 169, 231, 0.05)');
      
      ctx.fillStyle = beamGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

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
      style={{ background: '#1C1C1E' }}
    />
  );
};

export default HolographicBackground;