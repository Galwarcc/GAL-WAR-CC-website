import React, { useEffect, useRef } from 'react';

const SpaceBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Set canvas to full screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Star field layers for depth
    const starLayers = [
      { stars: [], count: 200, speed: 0.05, size: 1, brightness: 0.3 },
      { stars: [], count: 150, speed: 0.1, size: 1.5, brightness: 0.5 },
      { stars: [], count: 100, speed: 0.2, size: 2, brightness: 0.8 }
    ];

    // Falling stars (comets)
    const comets = [];
    const cometCount = 3;

    // Nebulae clouds
    const nebulae = [];
    const nebulaCount = 5;

    // Stardust particles
    const stardust = [];
    const stardustCount = 300;

    // Holographic energy lines
    const energyLines = [];
    const energyLineCount = 8;

    // Distant galaxies
    const galaxies = [];
    const galaxyCount = 3;

    // Initialize star layers
    starLayers.forEach(layer => {
      for (let i = 0; i < layer.count; i++) {
        layer.stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          twinkle: Math.random() * Math.PI * 2
        });
      }
    });

    // Initialize comets
    for (let i = 0; i < cometCount; i++) {
      comets.push({
        x: Math.random() * canvas.width,
        y: -50,
        speed: Math.random() * 2 + 1,
        angle: Math.random() * 0.5 + 0.2,
        length: Math.random() * 100 + 50,
        brightness: Math.random() * 0.5 + 0.5
      });
    }

    // Initialize nebulae
    const nebulaColors = [
      { r: 138, g: 43, b: 226 },  // Purple
      { r: 30, g: 144, b: 255 },  // Blue
      { r: 0, g: 255, b: 255 }    // Cyan
    ];

    for (let i = 0; i < nebulaCount; i++) {
      const color = nebulaColors[Math.floor(Math.random() * nebulaColors.length)];
      nebulae.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 200 + 150,
        color: color,
        drift: { x: Math.random() * 0.1 - 0.05, y: Math.random() * 0.1 - 0.05 }
      });
    }

    // Initialize stardust
    for (let i = 0; i < stardustCount; i++) {
      stardust.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.random() * 0.2 - 0.1,
        vy: Math.random() * 0.2 - 0.1,
        brightness: Math.random() * 0.5 + 0.3,
        size: Math.random() * 1 + 0.5
      });
    }

    // Initialize energy lines
    for (let i = 0; i < energyLineCount; i++) {
      const points = [];
      const numPoints = Math.floor(Math.random() * 3) + 3;
      for (let j = 0; j < numPoints; j++) {
        points.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height
        });
      }
      energyLines.push({
        points: points,
        drift: Math.random() * 0.3 + 0.1,
        opacity: Math.random() * 0.2 + 0.1,
        color: Math.random() > 0.5 ? '#00ffff' : '#8a2be2'
      });
    }

    // Initialize galaxies
    for (let i = 0; i < galaxyCount; i++) {
      galaxies.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 100 + 80,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: Math.random() * 0.001 + 0.0005,
        arms: 3,
        color: nebulaColors[Math.floor(Math.random() * nebulaColors.length)]
      });
    }

    const draw = () => {
      // Deep space black background
      ctx.fillStyle = '#000001';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw nebulae with soft glow
      nebulae.forEach(nebula => {
        const gradient = ctx.createRadialGradient(
          nebula.x, nebula.y, 0,
          nebula.x, nebula.y, nebula.radius
        );
        gradient.addColorStop(0, `rgba(${nebula.color.r}, ${nebula.color.g}, ${nebula.color.b}, 0.3)`);
        gradient.addColorStop(0.5, `rgba(${nebula.color.r}, ${nebula.color.g}, ${nebula.color.b}, 0.1)`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(
          nebula.x - nebula.radius,
          nebula.y - nebula.radius,
          nebula.radius * 2,
          nebula.radius * 2
        );

        // Drift nebulae
        nebula.x += nebula.drift.x;
        nebula.y += nebula.drift.y;

        // Wrap around
        if (nebula.x < -nebula.radius) nebula.x = canvas.width + nebula.radius;
        if (nebula.x > canvas.width + nebula.radius) nebula.x = -nebula.radius;
        if (nebula.y < -nebula.radius) nebula.y = canvas.height + nebula.radius;
        if (nebula.y > canvas.height + nebula.radius) nebula.y = -nebula.radius;
      });

      // Draw distant spiral galaxies
      galaxies.forEach(galaxy => {
        ctx.save();
        ctx.translate(galaxy.x, galaxy.y);
        ctx.rotate(galaxy.rotation);

        for (let arm = 0; arm < galaxy.arms; arm++) {
          const armAngle = (Math.PI * 2 / galaxy.arms) * arm;
          
          for (let i = 0; i < 50; i++) {
            const angle = armAngle + (i * 0.2);
            const distance = (i / 50) * galaxy.radius;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;
            
            const gradient = ctx.createRadialGradient(x, y, 0, x, y, 3);
            gradient.addColorStop(0, `rgba(${galaxy.color.r}, ${galaxy.color.g}, ${galaxy.color.b}, ${0.5 - (i / 100)})`);
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(x, y, 2, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        ctx.restore();
        galaxy.rotation += galaxy.rotationSpeed;
      });

      // Draw energy lines with glow
      ctx.shadowBlur = 10;
      energyLines.forEach(line => {
        ctx.shadowColor = line.color;
        ctx.strokeStyle = line.color;
        ctx.globalAlpha = line.opacity;
        ctx.lineWidth = 1;
        
        ctx.beginPath();
        ctx.moveTo(line.points[0].x, line.points[0].y);
        
        for (let i = 1; i < line.points.length; i++) {
          ctx.lineTo(line.points[i].x, line.points[i].y);
        }
        
        ctx.stroke();
        
        // Drift energy lines
        line.points.forEach(point => {
          point.x += line.drift;
          if (point.x > canvas.width) point.x = 0;
        });
      });
      
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;

      // Draw star layers (parallax effect)
      starLayers.forEach((layer, index) => {
        layer.stars.forEach(star => {
          star.twinkle += 0.05;
          const brightness = layer.brightness * (0.5 + Math.sin(star.twinkle) * 0.5);
          
          ctx.fillStyle = `rgba(255, 255, 255, ${brightness})`;
          ctx.shadowBlur = layer.size * 2;
          ctx.shadowColor = '#ffffff';
          
          ctx.beginPath();
          ctx.arc(star.x, star.y, layer.size, 0, Math.PI * 2);
          ctx.fill();
          
          // Move stars
          star.y += layer.speed;
          if (star.y > canvas.height) {
            star.y = 0;
            star.x = Math.random() * canvas.width;
          }
        });
      });
      
      ctx.shadowBlur = 0;

      // Draw stardust particles
      stardust.forEach(particle => {
        ctx.fillStyle = `rgba(200, 200, 255, ${particle.brightness})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Wrap around
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      });

      // Draw comets with glowing trails
      comets.forEach(comet => {
        const gradient = ctx.createLinearGradient(
          comet.x,
          comet.y,
          comet.x - Math.cos(comet.angle) * comet.length,
          comet.y - Math.sin(comet.angle) * comet.length
        );
        
        gradient.addColorStop(0, `rgba(255, 255, 255, ${comet.brightness})`);
        gradient.addColorStop(0.3, `rgba(200, 220, 255, ${comet.brightness * 0.6})`);
        gradient.addColorStop(1, 'rgba(100, 150, 255, 0)');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 3;
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#ffffff';
        
        ctx.beginPath();
        ctx.moveTo(comet.x, comet.y);
        ctx.lineTo(
          comet.x - Math.cos(comet.angle) * comet.length,
          comet.y - Math.sin(comet.angle) * comet.length
        );
        ctx.stroke();
        
        // Draw comet head
        ctx.fillStyle = `rgba(255, 255, 255, ${comet.brightness})`;
        ctx.shadowBlur = 20;
        ctx.beginPath();
        ctx.arc(comet.x, comet.y, 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Move comet
        comet.x += Math.cos(comet.angle) * comet.speed;
        comet.y += Math.sin(comet.angle) * comet.speed;
        
        // Reset comet when off screen
        if (comet.x > canvas.width + 100 || comet.y > canvas.height + 100) {
          comet.x = Math.random() * canvas.width;
          comet.y = -50;
          comet.angle = Math.random() * 0.5 + 0.2;
          comet.speed = Math.random() * 2 + 1;
        }
      });
      
      ctx.shadowBlur = 0;
    };

    const interval = setInterval(draw, 1000 / 60); // 60 FPS

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
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
      }}
    />
  );
};

export default SpaceBackground;
