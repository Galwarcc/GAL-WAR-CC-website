import React, { useEffect, useState } from 'react';
import { Globe, Gamepad2, Zap, Target, Shield } from 'lucide-react';
import StarfieldBackground from './StarfieldBackground';

const Gameplay = () => {
  const [shootingStars, setShootingStars] = useState([]);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    // Generate shooting stars
    const stars = [];
    for (let i = 0; i < 8; i++) {
      stars.push({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 60}%`,
        delay: Math.random() * 10,
        duration: Math.random() * 3 + 2,
      });
    }
    setShootingStars(stars);

    // Generate orbiting planets
    const planetData = [
      { size: 80, color: 'rgba(31, 107, 79, 0.4)', orbit: 200, speed: 8 },
      { size: 60, color: 'rgba(201, 164, 92, 0.4)', orbit: 300, speed: 12 },
      { size: 40, color: 'rgba(46, 122, 94, 0.3)', orbit: 250, speed: 10 },
      { size: 50, color: 'rgba(111, 175, 149, 0.4)', orbit: 350, speed: 15 },
    ];
    setPlanets(planetData);
  }, []);

  return (
    <section id="gameplay" className="relative py-12 px-6 overflow-hidden" style={{ background: "#10241E" }}>
      <StarfieldBackground />
      {/* Professional Grid Overlay */}
      <div className="grid-overlay" />
      
      {/* Subtle Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-[500px] h-[500px] rounded-full opacity-20 animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(31, 107, 79, 0.2) 0%, transparent 70%)',
            top: '10%',
            left: '5%',
            filter: 'blur(80px)',
          }}
        />
        <div 
          className="absolute w-[400px] h-[400px] rounded-full opacity-20 animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(201, 164, 92, 0.15) 0%, transparent 70%)',
            bottom: '10%',
            right: '5%',
            filter: 'blur(80px)',
            animationDelay: '3s',
          }}
        />
      </div>

      {/* Section Header */}
      <div className="max-w-7xl mx-auto relative z-10 mb-8">
        <div className="text-center">
          {/* Animated Icon */}
          <div className="inline-flex items-center gap-3 mb-6 relative">
            <div className="relative">
              <Gamepad2 className="w-10 h-10 animate-pulse" style={{ color: '#C9A45C' }} />
              {/* Rotating Ring */}
              <div
                className="absolute inset-0 w-16 h-16 border-2 rounded-full animate-spin"
                style={{ top: '-12px', left: '-12px', animationDuration: '3s', borderColor: 'rgba(201, 164, 92, 0.3)' }}
              />
            </div>
            <span
              className="text-sm font-bold tracking-[0.3em] uppercase animate-pulse"
              style={{ fontFamily: 'Cinzel, serif', color: '#C9A45C' }}
            >
              Mechanics
            </span>
          </div>
          
          {/* Glitching Title Effect */}
          <div className="relative inline-block mb-6">
            <h2
              className="heading-section font-black uppercase tracking-[0.15em] relative z-10"
              style={{ 
                fontFamily: 'Cinzel, serif',
              }}
            >
              <span style={{
                color: '#E3C987',
                textShadow: '0 0 40px rgba(201, 164, 92, 0.5), 0 0 60px rgba(227, 201, 135, 0.3)',
                filter: 'drop-shadow(0 0 20px rgba(201, 164, 92, 0.4))',
              }}>
                JOIN THE CONQUEST OF THE
              </span>
              <br />
              <span
                className="animate-pulse"
                style={{
                  color: '#1F6B4F',
                  textShadow: 'none',
                  filter: 'drop-shadow(0 0 30px rgba(31, 107, 79, 0.5))',
                }}
              >
                PLANET
              </span>
            </h2>
            {/* Holographic Scanlines */}
            <div
              className="absolute inset-0 pointer-events-none opacity-10"
              style={{
                background: 'repeating-linear-gradient(0deg, transparent, transparent 4px, rgba(201, 164, 92, 0.2) 4px, rgba(201, 164, 92, 0.2) 8px)',
                animation: 'scan 2s linear infinite',
              }}
            />
          </div>
          
          {/* Enhanced Divider */}
          <div className="relative h-1 w-64 mx-auto mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-antique to-transparent animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slytherin-emerald to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          
          {/* Typing Effect Text */}
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl leading-relaxed space-y-4" style={{ color: '#C9D6CF' }}>
              <span className="block text-2xl font-bold mb-4 animate-pulse" style={{ color: '#C9A45C' }}>So... how far can you go?</span>
              
              <span className="block">Choose your race, explore a vast sci-fi world, and carve your own path through fast-paced multiplayer combat. No two battles play the same, and every victory feels earned.</span>
              
              <span className="block">This is your chance to compete, experiment, and grow — until your race stands above all others.</span>
              
              <span className="block text-xl font-bold mt-6" style={{ color: '#1F6B4F' }}>The planet is ready. Are you?</span>
              
              <span className="block text-sm italic mt-4" style={{ color: '#8FA39A' }}>There's only one way to find out.<br />Take your first drop.</span>
            </p>
          </div>

          {/* Action Icons */}
          <div className="flex justify-center items-center gap-8 mt-12">
            {[
              { Icon: Zap, color: '#C9A45C', label: 'Fast-Paced' },
              { Icon: Target, color: '#1F6B4F', label: 'Tactical' },
              { Icon: Shield, color: '#2E7A5E', label: 'Strategic' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center gap-3 group cursor-pointer transform hover:scale-110 transition-all duration-300"
                style={{ animationDelay: `${i * 0.2}s`, minWidth: '100px' }}
              >
                <div
                  className="relative w-16 h-16 rounded-full flex items-center justify-center"
                  style={{
                    background: `${item.color}20`,
                    border: `2px solid ${item.color}`,
                    boxShadow: `0 0 20px ${item.color}40`,
                  }}
                >
                  <item.Icon className="w-8 h-8" style={{ color: item.color }} />
                  {/* Rotating ring */}
                  <div
                    className="absolute inset-0 border-2 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-spin"
                    style={{
                      borderColor: `${item.color}40`,
                      borderTopColor: item.color,
                      animationDuration: '1s',
                    }}
                  />
                </div>
                <span
                  className="text-label uppercase tracking-wider font-bold text-center"
                  style={{ color: item.color }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shooting-star {
          0% {
            transform: translate(0, 0);
            opacity: 1;
          }
          100% {
            transform: translate(-300px, 300px);
            opacity: 0;
          }
        }
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float-slow {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(10px, -10px);
          }
          50% {
            transform: translate(-5px, 5px);
          }
          75% {
            transform: translate(-10px, -5px);
          }
        }
        @keyframes float-cube {
          0%, 100% {
            transform: translateY(0px) rotate(45deg);
          }
          50% {
            transform: translateY(-20px) rotate(45deg);
          }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-shooting-star {
          animation: shooting-star linear infinite;
        }
        .animate-float-slow {
          animation: float-slow ease-in-out infinite;
        }
        .animate-float-cube {
          animation: float-cube 6s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Gameplay;