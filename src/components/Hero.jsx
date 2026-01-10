import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Play, Target, Sparkles, MousePointer2 } from 'lucide-react';
import StarfieldBackground from './StarfieldBackground';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const heroRef = useRef(null);
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
  const throttleTimeout = useRef(null);

  useEffect(() => {
    // Throttled mouse tracking for better performance
    const handleMouseMove = (e) => {
      if (throttleTimeout.current) return;
      
      throttleTimeout.current = setTimeout(() => {
        if (!heroRef.current) return;
        
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        
        setMousePosition({ x, y });
        
        // Simplified parallax
        setParallaxOffset({
          x: (x - 0.5) * 20,
          y: (y - 0.5) * 20,
        });
        
        throttleTimeout.current = null;
      }, 50); // Throttle to 20fps for parallax
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (throttleTimeout.current) clearTimeout(throttleTimeout.current);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden" 
      style={{ background: '#0B1A16' }}
      id="home"
    >
      <StarfieldBackground />
      {/* SIMPLIFIED PARALLAX MIST PARTICLES - Single layer for performance */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          transform: `translate3d(${parallaxOffset.x}px, ${parallaxOffset.y}px, 0)`,
          transition: 'transform 0.5s ease-out',
          willChange: 'transform',
        }}
      >
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: '#C3D1CB',
              opacity: Math.random() * 0.3 + 0.1,
              animation: `twinkle ${Math.random() * 4 + 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* VIDEO with No Overlay - Full Visibility */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ 
            opacity: 0.7,
            filter: 'brightness(0.9) contrast(1.1) saturate(0.9)',
            mixBlendMode: 'normal',
          }}
        >
          <source src="https://customer-assets.emergentagent.com/job_vidback-gamesite/artifacts/r0astl4h_Hailuo_Video_Create%20an%208%E2%80%9310%20second%20cinemati_435498106785406985.mp4" type="video/mp4" />
          <source src="/cinematic-background.mp4" type="video/mp4" />
        </video>
        {/* Minimal edge darkening only for text readability */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to bottom, rgba(11, 26, 22, 0.3) 0%, transparent 20%, transparent 80%, rgba(11, 26, 22, 0.5) 100%)',
        }} />
      </div>

      {/* EMERALD & GOLD SPIRIT ORBS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[
          { size: 400, color: '31, 107, 79', pos: { top: '12%', left: '5%' } },
          { size: 320, color: '201, 164, 92', pos: { bottom: '15%', right: '8%' } },
          { size: 260, color: '46, 122, 94', pos: { top: '40%', right: '15%' } },
        ].map((orb, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              ...orb.pos,
              background: `radial-gradient(circle at 30% 30%, rgba(${orb.color}, 0.2), transparent 65%)`,
              filter: 'blur(70px)',
              animationDuration: `${7 + i * 2}s`,
            }}
          />
        ))}
      </div>

      {/* CONTENT with Disney-style Animation Principles */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        
        {/* TITLE with Split-text Reveal */}
        <div className="relative mb-12">
          <Sparkles 
            className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-12 h-12" 
            style={{
              color: '#C9A45C',
              animation: 'sparkle 2s ease-in-out infinite',
              filter: 'drop-shadow(0 0 10px rgba(227, 201, 135, 0.6))',
            }}
          />
          
          <h1 
            className="heading-hero font-black leading-tight tracking-wide" 
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            {['A New Era of Sci-Fi', 'Multiplayer Combat'].map((line, lineIndex) => (
              <span key={lineIndex} className="block">
                {line.split('').map((char, charIndex) => (
                  <span
                    key={charIndex}
                    className="inline-block transition-all duration-300 hover:scale-125"
                    style={{
                      animation: `letterDrop 0.8s ease-out forwards`,
                      animationDelay: `${(lineIndex * 20 + charIndex) * 0.03}s`,
                      opacity: 0,
                      color: '#E3C987',
                      textShadow: '0 0 30px rgba(201, 164, 92, 0.5), 0 0 50px rgba(227, 201, 135, 0.3)',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#FFD8A0';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#E3C987';
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </span>
            ))}
          </h1>
          
          {/* Underline with liquid animation */}
          <div className="relative h-2 w-80 mx-auto mt-8 overflow-hidden rounded-full" style={{
            background: 'rgba(28, 62, 51, 0.5)',
          }}>
            <div 
              style={{
                background: 'linear-gradient(90deg, #1F6B4F, #C9A45C, #2E7A5E)',
                animation: 'liquidFlow 3s ease-in-out infinite',
                position: 'absolute',
                inset: 0,
              }}
            />
          </div>
        </div>
        
        {/* BUTTONS with Magnetic Hover Effect */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 max-w-5xl mx-auto">
          {[
            { text: ['DOWNLOAD &', 'PLAY NOW'], icon: Play, gradient: 'from-emerald-800 via-emerald-700 to-emerald-600' },
            { text: ['EXPLORE', 'FACTIONS'], icon: Target, gradient: 'from-emerald-700 via-teal-700 to-emerald-600' },
            { text: ['EXPLORE', 'MAPS'], icon: Target, gradient: 'from-teal-800 via-emerald-700 to-teal-600' },
            { text: ['EXPLORE', 'ARSENAL'], icon: Target, gradient: 'from-emerald-900 via-emerald-700 to-emerald-800' },
          ].map((btn, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                animation: `buttonEntry 0.6s ease-out forwards`,
                animationDelay: `${1.5 + index * 0.1}s`,
                opacity: 0,
              }}
            >
              <Button
                onClick={() => scrollToSection('gameplay')}
                className="w-full relative px-8 py-6 text-base font-bold uppercase tracking-wider border-2 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl group"
                style={{ 
                  fontFamily: 'Cinzel, serif',
                  borderColor: 'rgba(31, 107, 79, 0.5)',
                  background: 'rgba(16, 36, 30, 0.6)',
                  color: '#C9A45C',
                }}
              >
                {/* Animated gradient background */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-r ${btn.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  style={{
                    animation: 'gradientShift 3s ease infinite',
                  }}
                />
                
                {/* Ripple effect on hover */}
                <div className="absolute inset-0 group-hover:animate-ripple" />
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200/20 to-transparent"
                    style={{ animation: 'shimmer 2s infinite' }}
                  />
                </div>
                
                <div className="relative z-10 flex items-center justify-center gap-2 group-hover:text-yellow-100">
                  <btn.icon className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="flex flex-col items-center">
                    <span>{btn.text[0]}</span>
                    <span>{btn.text[1]}</span>
                  </span>
                </div>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ borderColor: 'rgba(201, 164, 92, 0.8)' }} />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ borderColor: 'rgba(201, 164, 92, 0.8)' }} />
              </Button>
            </div>
          ))}
        </div>

        {/* STATS with Physics-based Animation */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { label: '10 Races', value: '10', color: '#C9A45C', delay: 2 },
            { label: '5 Planets', value: '5', color: '#1F6B4F', delay: 2.2 },
            { label: '∞ Strategies', value: '∞', color: '#E3C987', delay: 2.4 },
          ].map((stat, index) => (
            <div 
              key={index} 
              className="text-center group cursor-pointer relative"
              style={{
                animation: `statEntry 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`,
                animationDelay: `${stat.delay}s`,
                opacity: 0,
              }}
            >
              <div className="relative inline-block">
                {/* Orbiting ring */}
                <svg className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)]" style={{ opacity: 0.5 }}>
                  <circle
                    cx="50%"
                    cy="50%"
                    r="45%"
                    fill="none"
                    stroke={stat.color}
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    className="group-hover:animate-spin"
                    style={{ animationDuration: '3s' }}
                  />
                </svg>
                
                <div
                  className="text-5xl md:text-6xl font-black mb-2 transition-all duration-500 group-hover:scale-110"
                  style={{ 
                    fontFamily: 'Cinzel, serif',
                    color: stat.color,
                    textShadow: `0 0 20px ${stat.color}60, 0 0 40px ${stat.color}30`,
                    filter: `drop-shadow(0 0 25px ${stat.color}40)`,
                  }}
                >
                  {stat.value}
                </div>
              </div>
              
              <div
                className="text-xs uppercase tracking-[0.2em] transition-colors"
                style={{ 
                  fontFamily: 'Cinzel, serif',
                  color: '#8FA39A',
                }}
              >
                {stat.label}
              </div>

              {/* Glow pulse on hover */}
              <div 
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle, ${stat.color}20, transparent 70%)`,
                  filter: 'blur(20px)',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="relative animate-bounce" style={{ animationDuration: '2s' }}>
          <div 
            className="w-6 h-10 rounded-full flex items-start justify-center p-2"
            style={{ 
              border: '3px solid rgba(201, 164, 92, 0.5)',
              boxShadow: '0 0 20px rgba(227, 201, 135, 0.3)',
            }}
          >
            <div 
              className="w-1.5 h-2.5 rounded-full"
              style={{ 
                background: '#C9A45C',
                animation: 'scrollWheel 2s ease-in-out infinite',
                boxShadow: '0 0 10px rgba(227, 201, 135, 0.6)',
              }}
            />
          </div>
          <div className="absolute inset-0 rounded-full animate-ping" style={{ 
            border: '2px solid rgba(201, 164, 92, 0.3)',
            animationDuration: '3s',
          }} />
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        @keyframes letterDrop {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes buttonEntry {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes statEntry {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes liquidFlow {
          0%, 100% {
            transform: translateX(-30%);
          }
          50% {
            transform: translateX(30%);
          }
        }
        @keyframes sparkle {
          0%, 100% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.1) rotate(180deg);
          }
        }
        @keyframes scrollWheel {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(12px);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;