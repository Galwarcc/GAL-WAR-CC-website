import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Cellular/organic particles inspired by the video
    const particles = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 40 + 10,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        color: ['#00D9FF', '#FF00FF', '#00FF88', '#FF6B00', '#8B00FF'][Math.floor(Math.random() * 5)],
        opacity: Math.random() * 0.4 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulsePhase: Math.random() * Math.PI * 2,
        type: Math.random() > 0.5 ? 'bubble' : 'pixelated'
      });
    }

    // Pixelated blocks inspired by the video
    const pixelBlocks = [];
    for (let i = 0; i < 15; i++) {
      pixelBlocks.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        width: Math.random() * 60 + 30,
        height: Math.random() * 60 + 30,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        colors: [
          ['#00D9FF', '#FF00FF', '#00FF88'],
          ['#8B00FF', '#FF6B00', '#00D9FF'],
          ['#FF00FF', '#00FF88', '#8B00FF']
        ][Math.floor(Math.random() * 3)],
        glitchPhase: Math.random() * 100
      });
    }

    let frame = 0;

    const animate = () => {
      frame++;
      
      // Dark background with slight gradient
      const bgGradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width * 0.8
      );
      bgGradient.addColorStop(0, '#0a0a0a');
      bgGradient.addColorStop(1, '#000000');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw organic bubble particles
      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Pulse effect
        particle.pulsePhase += particle.pulseSpeed;
        const pulse = Math.sin(particle.pulsePhase) * 0.3 + 1;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        const currentSize = particle.size * pulse;

        if (particle.type === 'bubble') {
          // Glowing bubble
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, currentSize
          );
          gradient.addColorStop(0, particle.color + 'AA');
          gradient.addColorStop(0.5, particle.color + '44');
          gradient.addColorStop(1, 'transparent');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, currentSize, 0, Math.PI * 2);
          ctx.fill();

          // Inner glow
          ctx.fillStyle = particle.color + 'FF';
          ctx.globalAlpha = particle.opacity;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, currentSize * 0.3, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalAlpha = 1;
        } else {
          // Fractal/spiky particle
          ctx.save();
          ctx.translate(particle.x, particle.y);
          ctx.rotate(frame * 0.01);
          
          for (let i = 0; i < 8; i++) {
            ctx.rotate(Math.PI / 4);
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(currentSize, 0);
            ctx.strokeStyle = particle.color + '88';
            ctx.lineWidth = 2;
            ctx.stroke();
          }
          ctx.restore();
        }
      });

      // Draw pixelated blocks with glitch effect
      pixelBlocks.forEach(block => {
        block.x += block.speedX;
        block.y += block.speedY;
        block.glitchPhase += 0.5;

        // Bounce off edges
        if (block.x < -block.width || block.x > canvas.width) block.speedX *= -1;
        if (block.y < -block.height || block.y > canvas.height) block.speedY *= -1;

        // Glitch effect - random offset
        const glitchOffsetX = Math.sin(block.glitchPhase) * 3;
        const glitchOffsetY = Math.cos(block.glitchPhase * 1.3) * 3;

        // Draw pixelated grid
        const pixelSize = 6;
        for (let px = 0; px < block.width; px += pixelSize) {
          for (let py = 0; py < block.height; py += pixelSize) {
            const colorIndex = Math.floor(Math.random() * block.colors.length);
            ctx.fillStyle = block.colors[colorIndex] + '44';
            ctx.fillRect(
              block.x + px + glitchOffsetX,
              block.y + py + glitchOffsetY,
              pixelSize - 1,
              pixelSize - 1
            );
          }
        }
      });

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
      className="absolute top-0 left-0 w-full h-full"
      style={{ background: '#000000' }}
    />
  );
};

export default AnimatedBackground;
