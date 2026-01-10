import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Rocket, Shield, Swords, Car } from 'lucide-react';
import { Badge } from './ui/badge';
import StarfieldBackground from './StarfieldBackground';

const FutureExpansion = () => {
  const upcomingFeatures = [
    {
      icon: Swords,
      title: 'Melee Weapons',
      description: 'Plasma blades, gravity axes, and electro staves for close combat',
      status: 'In Development',
      color: 'jade1',
    },
    {
      icon: Car,
      title: 'Vehicles',
      description: 'Hover bikes, combat cruisers, and transport ships for tactical mobility',
      status: 'Concept Phase',
      color: 'jade2',
    },
    {
      icon: Shield,
      title: 'Advanced Armor',
      description: 'Specialized armor sets with unique abilities and elemental resistances',
      status: 'In Development',
      color: 'jade3',
    },
    {
      icon: Rocket,
      title: 'New Maps',
      description: 'Explore more planets and moons with unique environmental challenges',
      status: 'Planned',
      color: 'jade4',
    },
  ];

  const getColorStyles = (color) => {
    const colors = {
      jade1: { bg: 'rgba(31, 107, 79, 0.15)', border: 'rgba(201, 164, 92, 0.4)', text: '#C9A45C', progress: '#C9A45C' },
      jade2: { bg: 'rgba(31, 107, 79, 0.15)', border: 'rgba(201, 164, 92, 0.4)', text: '#E3C987', progress: '#E3C987' },
      jade3: { bg: 'rgba(31, 107, 79, 0.15)', border: 'rgba(201, 164, 92, 0.4)', text: '#1F6B4F', progress: '#1F6B4F' },
      jade4: { bg: 'rgba(31, 107, 79, 0.15)', border: 'rgba(201, 164, 92, 0.4)', text: '#2E7A5E', progress: '#2E7A5E' },
    };
    return colors[color];
  };

  return (
    <section className="relative py-12 px-6 overflow-hidden" style={{ background: "#10241E" }}>
      <StarfieldBackground />
      {/* Slytherin emerald interface background */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(201, 164, 92, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(201, 164, 92, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
      }} />
      
      {/* System monitoring lines */}
      <div className="absolute left-0 top-20 w-full h-px" style={{
        background: 'linear-gradient(90deg, transparent, rgba(201, 164, 92, 0.4), transparent)',
      }} />
      <div className="absolute left-0 bottom-40 w-full h-px" style={{
        background: 'linear-gradient(90deg, transparent, rgba(201, 164, 92, 0.4), transparent)',
      }} />
      
      {/* Corner brackets - top left */}
      <div className="absolute top-10 left-10 w-20 h-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-0.5" style={{ background: '#C9A45C' }} />
        <div className="absolute top-0 left-0 w-0.5 h-full" style={{ background: '#C9A45C' }} />
      </div>
      
      {/* Corner brackets - top right */}
      <div className="absolute top-10 right-10 w-20 h-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-0.5" style={{ background: '#C9A45C' }} />
        <div className="absolute top-0 right-0 w-0.5 h-full" style={{ background: '#C9A45C' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* System Header */}
        <div className="text-center mb-12">
          <div className="inline-block relative mb-6">
            <div className="px-6 py-2 rounded border" style={{
              background: 'rgba(31, 107, 79, 0.2)',
              borderColor: 'rgba(201, 164, 92, 0.4)',
            }}>
              <span className="text-label uppercase tracking-widest font-bold" style={{ color: '#C9A45C' }}>
                System Update Protocol
              </span>
            </div>
          </div>
          
          <h2
            className="heading-section font-black orbitron mb-6 uppercase"
            style={{ color: '#E3C987' }}
          >
            FUTURE <span style={{ color: '#1F6B4F' }}>EXPANSION</span>
          </h2>
          
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#C9D6CF' }}>
            The war evolves. New systems, weapons, and worlds coming soon.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {upcomingFeatures.map((feature, index) => {
            const colorStyle = getColorStyles(feature.color);
            const Icon = feature.icon;
            
            return (
              <Card
                key={index}
                className="relative overflow-hidden transition-all duration-500 hover:scale-105 cursor-pointer group"
                style={{
                  background: 'rgba(16, 36, 30, 0.7)',
                  borderColor: colorStyle.border,
                }}
              >
                {/* Animated scan line */}
                <div
                  className="absolute top-0 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: colorStyle.text,
                    animation: 'scan 2s linear infinite',
                  }}
                />
                
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded flex items-center justify-center"
                        style={{
                          background: colorStyle.bg,
                          border: `2px solid ${colorStyle.border}`,
                        }}
                      >
                        <Icon className="w-6 h-6" style={{ color: colorStyle.text }} />
                      </div>
                      <CardTitle className="orbitron" style={{ color: '#E3C987' }}>{feature.title}</CardTitle>
                    </div>
                    <Badge
                      variant="outline"
                      style={{
                        background: colorStyle.bg,
                        borderColor: colorStyle.border,
                        color: colorStyle.text,
                      }}
                    >
                      {feature.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p style={{ color: '#C9D6CF' }}>{feature.description}</p>
                  
                  {/* Progress indicator */}
                  <div className="mt-6">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span style={{ color: '#8FA39A' }}>Development Progress</span>
                      <span style={{ color: colorStyle.text }} className="font-bold">
                        {feature.status === 'In Development' ? '65%' : feature.status === 'Concept Phase' ? '25%' : '10%'}
                      </span>
                    </div>
                    <div className="w-full h-1 rounded-full" style={{ background: 'rgba(28, 62, 51, 0.5)' }}>
                      <div
                        className="h-full rounded-full transition-all duration-1000 group-hover:w-full"
                        style={{
                          width: feature.status === 'In Development' ? '65%' : feature.status === 'Concept Phase' ? '25%' : '10%',
                          background: colorStyle.progress,
                        }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* System Status Footer */}
        <div className="mt-12 text-center">
          <div className="inline-block px-6 py-3 rounded" style={{
            background: 'rgba(31, 107, 79, 0.2)',
            border: '1px solid rgba(201, 164, 92, 0.4)',
          }}>
            <span className="text-sm uppercase tracking-wider" style={{ color: '#C9A45C' }}>
              <span className="inline-block w-2 h-2 rounded-full mr-2 animate-pulse" style={{ background: '#1F6B4F' }} />
              Systems Online • Updates Incoming
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureExpansion;