import React, { useEffect, useRef } from 'react';
import { races } from '../data/mock';
import { Dna, Sparkles, Users } from 'lucide-react';

const Races = () => {
  const raceCardsRef = useRef([]);
  const statsRef = useRef(null);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe race cards
    raceCardsRef.current.forEach((card, index) => {
      if (card) {
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
      }
    });

    // Observe stats section
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="races" className="relative py-24 px-6 bg-dota-bg-deep overflow-hidden">
      {/* Animated Background Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      {/* DNA Helix Animation */}
      <div className="absolute top-1/4 right-10 w-32 h-64 opacity-10 pointer-events-none">
        <Dna className="w-full h-full text-dota-gold animate-spin-slow" style={{ animationDuration: '20s' }} />
      </div>

      {/* Section Header */}
      <div className="max-w-7xl mx-auto relative z-10 mb-16">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 mb-6 animate-fade-in-up">
            <div className="relative">
              <Users className="w-10 h-10 text-dota-gold animate-pulse" />
              <div className="absolute inset-0 w-16 h-16 border-2 border-dota-gold/30 rounded-full animate-ping" style={{ top: '-12px', left: '-12px' }} />
            </div>
            <span
              className="text-sm font-bold tracking-[0.3em] uppercase text-dota-orange"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Species
            </span>
          </div>
          
          <h2
            className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-[0.15em] animate-fade-in-up delay-200"
            style={{ 
              fontFamily: 'Cinzel, serif',
              background: 'linear-gradient(135deg, #fff 0%, #ffd700 50%, #ff8c00 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            <span className="block">WHO WILL YOU DROP</span>
            <span className="block text-dota-gold">AS?</span>
          </h2>
          
          <div className="relative h-1 w-64 mx-auto mb-6 animate-fade-in-up delay-300">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-dota-gold to-transparent animate-pulse" />
          </div>
          
          <p className="text-lg md:text-xl text-dota-text-light max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-400">
            Your race is your symbol — the legacy you build, and the dominance you earn.
          </p>
        </div>
      </div>

      {/* Races Hero Grid with Enhanced Animations */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {races.map((race, index) => (
            <div
              key={race.id}
              ref={(el) => (raceCardsRef.current[index] = el)}
              className="group relative overflow-hidden rounded-lg cursor-pointer bg-dota-charcoal/50 border border-transparent hover:border-dota-gold transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-on-scroll hover-glow"
              style={{
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
              }}
            >
              {/* Shimmer Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
              </div>

              {/* Race Image/Icon */}
              <div className="aspect-square relative overflow-hidden">
                {race.image ? (
                  <img
                    src={race.image}
                    alt={race.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center text-6xl font-bold group-hover:scale-125 transition-transform duration-500"
                    style={{ color: race.color }}
                  >
                    {race.symbol}
                  </div>
                )}
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                
                {/* Hover Glow Effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${race.color}40, transparent 70%)`,
                  }}
                />

                {/* Particle Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 rounded-full animate-float"
                      style={{
                        background: race.color,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.2}s`,
                        boxShadow: `0 0 10px ${race.color}`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Race Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3
                  className="text-lg font-bold text-dota-text-white uppercase tracking-wider mb-1 group-hover:text-shadow transition-all duration-300"
                  style={{ fontFamily: 'Cinzel, serif', color: race.color }}
                >
                  {race.name}
                </h3>
                <p className="text-xs text-dota-text-light uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {race.element} Element
                </p>
              </div>

              {/* Element Badge */}
              <div
                className="absolute top-2 right-2 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider transform scale-0 group-hover:scale-100 transition-transform duration-300"
                style={{
                  background: `${race.color}30`,
                  borderColor: `${race.color}80`,
                  color: race.color,
                  border: `2px solid`,
                  boxShadow: `0 0 15px ${race.color}60`,
                }}
              >
                {race.element}
              </div>

              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ borderColor: race.color }} />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ borderColor: race.color }} />
            </div>
          ))}
        </div>

        {/* View All Factions Button */}
        <div className="mt-16 text-center">
          <button
            className="relative px-12 py-4 text-lg font-bold uppercase tracking-wider border-2 border-dota-gold hover:border-dota-orange bg-transparent hover:bg-dota-gold/10 text-dota-text-white transition-all duration-500 rounded overflow-hidden group transform hover:scale-105"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            {/* Button shimmer effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-dota-gold/30 to-transparent animate-shimmer" />
            </div>
            <span className="relative z-10 flex items-center gap-2 justify-center">
              <Sparkles className="w-5 h-5 animate-pulse" />
              VIEW ALL FACTIONS
              <Sparkles className="w-5 h-5 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </span>
          </button>
        </div>
      </div>

      {/* Stats Section with Animations */}
      <div ref={statsRef} className="max-w-7xl mx-auto relative z-10 mt-24 animate-on-scroll">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 p-12 bg-dota-charcoal/30 border border-dota-red/20 rounded-lg backdrop-blur-sm hover-glow">
          {[
            { value: '10', label: 'Unique Races', color: '#ffd700' },
            { value: '5', label: 'Planets', color: '#06b6d4' },
            { value: '∞', label: 'Strategies', color: '#ff8c00' },
          ].map((stat, index) => (
            <div 
              key={index} 
              className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-500"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative inline-block">
                {/* Rotating ring */}
                <div 
                  className="absolute inset-0 rounded-full border-4 opacity-0 group-hover:opacity-100 group-hover:animate-spin"
                  style={{ 
                    borderColor: `${stat.color}20`,
                    borderTopColor: stat.color,
                    width: '120%',
                    height: '120%',
                    top: '-10%',
                    left: '-10%',
                    animationDuration: '2s'
                  }}
                />
                <div
                  className="text-5xl md:text-6xl font-black mb-2 transition-all duration-300 group-hover:scale-110"
                  style={{ 
                    fontFamily: 'Cinzel, serif',
                    color: stat.color,
                    textShadow: `0 0 20px ${stat.color}60`,
                    filter: `drop-shadow(0 0 10px ${stat.color})`,
                  }}
                >
                  {stat.value}
                </div>
              </div>
              <div
                className="text-dota-text-light text-xs uppercase tracking-[0.2em] group-hover:text-white transition-colors"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-dota-red/10 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-dota-gold/10 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '2s', animationDuration: '5s' }} />

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Races;
