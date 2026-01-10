import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Rocket } from 'lucide-react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      style={{
        background: scrolled ? 'rgba(16, 36, 30, 0.95)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(31, 107, 79, 0.3)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
          <img 
            src="https://customer-assets.emergentagent.com/job_21c6a349-a761-4a11-8483-30c1322f9abc/artifacts/x1dh2llh_Gal%20War%20cc.jfif" 
            alt="GAL WAR CC Logo" 
            className="h-10 w-auto object-contain"
            style={{
              filter: 'drop-shadow(0 0 10px rgba(201, 164, 92, 0.5))',
            }}
          />
          <span
            className="text-xl font-black tracking-wider hidden md:block"
            style={{
              fontFamily: 'Orbitron, sans-serif',
              color: '#E3C987',
              textShadow: '0 0 20px rgba(227, 201, 135, 0.4)',
            }}
          >
            GAL WAR CC
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: 'HOME', id: 'home' },
            { name: 'ARSENAL', id: 'weapons' },
            { name: 'GAMEPLAY', id: 'gameplay' },
            { name: 'RACES', id: 'races' },
            { name: 'MAP', id: 'map' },
            { name: 'TEAM', id: 'team' },
            { name: 'ABOUT', id: 'about' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-body-small font-bold tracking-wider uppercase transition-all duration-300 hover:scale-110"
              style={{
                fontFamily: 'Orbitron, sans-serif',
                color: '#C9D6CF',
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#C9A45C';
                e.target.style.textShadow = '0 0 20px rgba(227, 201, 135, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#C9D6CF';
                e.target.style.textShadow = 'none';
              }}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <Button
          size="lg"
          className="hidden md:block font-bold uppercase tracking-wider"
          style={{
            fontFamily: 'Orbitron, sans-serif',
            background: 'linear-gradient(135deg, #1F6B4F 0%, #C9A45C 100%)',
            border: '2px solid rgba(201, 164, 92, 0.6)',
            boxShadow: '0 0 30px rgba(227, 201, 135, 0.3)',
            color: '#FFFFFF',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 0 40px rgba(227, 201, 135, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 0 30px rgba(227, 201, 135, 0.3)';
          }}
        >
          LAUNCH GAME
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
