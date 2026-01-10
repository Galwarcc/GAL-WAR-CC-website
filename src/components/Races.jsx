import React, { useState } from 'react';
import { Users, Zap } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import StarfieldBackground from './StarfieldBackground';

const Races = () => {
  const [hoveredRace, setHoveredRace] = useState(null);

  const races = [
    {
      id: 'humans',
      symbol: 'O₂',
      name: 'HUMANS',
      color: '#06b6d4',
      bgColor: 'rgba(6, 182, 212, 0.1)',
      description: 'Adaptable and resourceful, humans excel in balanced strategies.',
      stats: { strength: 7, tech: 8, speed: 6 },
    },
    {
      id: 'aquarions',
      symbol: 'CH₄',
      name: 'AQUARIONS',
      color: '#0891b2',
      bgColor: 'rgba(8, 145, 178, 0.1)',
      description: 'Masters of aquatic warfare with unmatched mobility.',
      stats: { strength: 6, tech: 7, speed: 9 },
    },
    {
      id: 'chronobots',
      symbol: 'H₂',
      name: 'CHRONOBOTS',
      color: '#F4FAFF',
      bgColor: 'rgba(255, 255, 255, 0.05)',
      description: 'Time-manipulating machines with superior tactical advantages.',
      stats: { strength: 8, tech: 10, speed: 5 },
    },
    {
      id: 'cosmorians',
      symbol: 'SO₂',
      name: 'COSMORIANS',
      color: '#D19E2C',
      bgColor: 'rgba(209, 158, 44, 0.1)',
      description: 'Cosmic beings with powerful energy-based attacks.',
      stats: { strength: 9, tech: 9, speed: 7 },
    },
    {
      id: 'genomorphs',
      symbol: 'Cl₂',
      name: 'GENOMORPHS',
      color: '#81B55B',
      bgColor: 'rgba(129, 181, 91, 0.1)',
      description: 'Bio-engineered warriors with adaptive evolution.',
      stats: { strength: 10, tech: 6, speed: 8 },
    },
  ];

  return (
    <section id="races" className="relative min-h-screen py-12 px-6 overflow-hidden" style={{
      background: '#0B1A16',
    }}>
      <StarfieldBackground />
      {/* Animated background effects */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full" style={{
          background: 'radial-gradient(circle, rgba(31, 107, 79, 0.3) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'pulse 4s ease-in-out infinite',
        }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full" style={{
          background: 'radial-gradient(circle, rgba(201, 164, 92, 0.2) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'pulse 5s ease-in-out infinite',
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-6">
            <Users className="w-8 h-8" style={{ color: '#C9A45C' }} />
            <span className="text-body-small font-bold tracking-[0.3em] uppercase" style={{ 
              fontFamily: 'Cinzel, serif',
              color: '#C9A45C',
            }}>
              SPECIES
            </span>
          </div>

          <h2
            className="heading-section font-black mb-4 uppercase tracking-[0.15em] animate-fade-in-up delay-200"
            style={{ 
              fontFamily: 'Cinzel, serif',
              color: '#E3C987',
            }}
          >
            <span className="block">WHO WILL YOU DROP</span>
            <span className="block" style={{ 
              color: '#1F6B4F',
            }}>AS?</span>
          </h2>

          <p className="text-body-large" style={{ color: '#C9D6CF' }}>
            Your race is your symbol — the legacy you build, and the dominance you earn.
          </p>
        </div>

        {/* Race Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {races.map((race, index) => (
            <Card
              key={race.id}
              className="group relative overflow-hidden transition-all duration-500 hover:scale-105 cursor-pointer"
              style={{
                background: hoveredRace === race.id ? race.bgColor : 'rgba(16, 36, 30, 0.6)',
                border: `2px solid ${hoveredRace === race.id ? race.color : 'rgba(31, 107, 79, 0.3)'}`,
                boxShadow: hoveredRace === race.id ? `0 0 40px ${race.color}60` : 'none',
              }}
              onMouseEnter={() => setHoveredRace(race.id)}
              onMouseLeave={() => setHoveredRace(null)}
            >
              <CardContent className="p-8 text-center">
                {/* Symbol */}
                <div className="mb-6">
                  <div
                    className="text-6xl font-black orbitron transition-all duration-300"
                    style={{
                      color: race.color,
                      textShadow: `0 0 30px ${race.color}, 0 0 50px ${race.color}`,
                    }}
                  >
                    {race.symbol}
                  </div>
                </div>

                {/* Name */}
                <h3
                  className="heading-small font-bold orbitron mb-4 uppercase tracking-wider"
                  style={{ color: race.color }}
                >
                  {race.name}
                </h3>

                {/* Description */}
                <p className="text-body-small mb-6" style={{ color: '#C9D6CF' }}>
                  {race.description}
                </p>

                {/* Stats */}
                <div className="space-y-2">
                  {Object.entries(race.stats).map(([stat, value]) => (
                    <div key={stat} className="flex items-center justify-between">
                      <span className="text-label uppercase" style={{ color: '#8FA39A' }}>
                        {stat}
                      </span>
                      <div className="flex gap-1">
                        {[...Array(10)].map((_, i) => (
                          <div
                            key={i}
                            className="w-2 h-2 rounded-full"
                            style={{
                              background: i < value ? race.color : 'rgba(115, 138, 154, 0.3)',
                              boxShadow: i < value ? `0 0 5px ${race.color}` : 'none',
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Hover effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${race.color}15 0%, transparent 70%)`,
                  }}
                />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            className="px-12 py-4 text-body-large font-bold uppercase tracking-wider orbitron transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #1F6B4F 0%, #C9A45C 100%)',
              border: '2px solid rgba(201, 164, 92, 0.6)',
              boxShadow: '0 0 30px rgba(227, 201, 135, 0.4)',
              color: '#FFFFFF',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 50px rgba(227, 201, 135, 0.7)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 30px rgba(227, 201, 135, 0.4)';
            }}
          >
            <Zap className="inline-block w-5 h-5 mr-2 mb-1" />
            VIEW ALL FACTIONS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Races;
