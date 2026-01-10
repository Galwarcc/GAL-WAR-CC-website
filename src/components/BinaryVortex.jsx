import React, { useEffect, useRef } from 'react';

const BinaryVortex = () => {
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
    
    // Tunnel parameters
    const numRings = 40;
    const charsPerRing = 80;
    let rotation = 0;
    let depth = 0;

    // Create spiral/tunnel structure
    const createTunnel = () => {
      const tunnel = [];
      for (let ring = 0; ring < numRings; ring++) {
        const ringData = [];
        for (let i = 0; i < charsPerRing; i++) {
          ringData.push({
            char: binary[Math.floor(Math.random() * binary.length)],
            angle: (i / charsPerRing) * Math.PI * 2,
            z: ring,
          });
        }
        tunnel.push(ringData);
      }
      return tunnel;
    };

    let tunnel = createTunnel();

    const draw = () => {
      // Black background with slight fade for trail effect
      ctx.fillStyle = 'rgba(0, 0, 1, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Update rotation and depth
      rotation += 0.005;
      depth += 0.3;

      // Draw tunnel from back to front
      for (let ringIndex = numRings - 1; ringIndex >= 0; ringIndex--) {
        const ring = tunnel[ringIndex];
        const z = (ringIndex - depth / 10) % numRings;
        
        if (z < 0) continue;

        const scale = 1000 / (z + 5);
        const alpha = Math.max(0, Math.min(1, 1 - z / numRings));

        ring.forEach((item, i) => {
          // Calculate position with rotation
          const angle = item.angle + rotation;
          const x = centerX + Math.cos(angle) * scale * 3;
          const y = centerY + Math.sin(angle) * scale * 3;

          // Size based on depth
          const fontSize = Math.max(8, scale / 2);
          
          // Green color with depth-based brightness
          const brightness = Math.floor(255 * alpha);
          ctx.fillStyle = `rgba(0, ${brightness}, 0, ${alpha})`;
          ctx.font = `${fontSize}px monospace`;
          
          // Add glow effect for closer characters
          if (z < 10) {
            ctx.shadowBlur = 15;
            ctx.shadowColor = `rgba(0, 255, 0, ${alpha * 0.8})`;
          } else {
            ctx.shadowBlur = 0;
          }

          ctx.fillText(item.char, x, y);
        });
      }

      // Reset tunnel when it loops
      if (depth > 100) {
        depth = 0;
      }

      // Randomly change some characters
      if (Math.random() > 0.95) {
        const ringIndex = Math.floor(Math.random() * numRings);
        const charIndex = Math.floor(Math.random() * charsPerRing);
        tunnel[ringIndex][charIndex].char = binary[Math.floor(Math.random() * binary.length)];
      }
    };

    const interval = setInterval(draw, 30);

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
        opacity: 0.4,
      }}
    />
  );
};

export default BinaryVortex;
