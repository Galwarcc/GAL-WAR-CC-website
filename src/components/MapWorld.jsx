import React, { useState } from 'react';
import { detailedMapAreas } from '../data/mockMapAreas';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Map, MapPin, AlertTriangle, Skull, Globe, Zap, Droplet, Flame, Sun } from 'lucide-react';
import MapAreaModal from './MapAreaModal';

const MapWorld = () => {
  const [selectedArea, setSelectedArea] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlanet, setSelectedPlanet] = useState('Atomspire');

  const planets = [
    { 
      name: 'Atomspire', 
      available: true,
      icon: Zap,
      color: 'from-purple-600 via-pink-600 to-red-600',
      glowColor: 'rgba(168, 85, 247, 0.6)',
      theme: 'Nuclear energy and radiation'
    },
    { 
      name: 'Steamreach', 
      available: false,
      icon: Zap,
      color: 'from-gray-600 via-slate-500 to-zinc-600',
      glowColor: 'rgba(148, 163, 184, 0.6)',
      theme: 'Industrial steam power'
    },
    { 
      name: 'Aqua Rift', 
      available: false,
      icon: Droplet,
      color: 'from-blue-600 via-cyan-500 to-teal-600',
      glowColor: 'rgba(6, 182, 212, 0.6)',
      theme: 'Deep ocean trenches'
    },
    { 
      name: 'Warforge', 
      available: false,
      icon: Flame,
      color: 'from-orange-600 via-red-600 to-rose-700',
      glowColor: 'rgba(239, 68, 68, 0.6)',
      theme: 'Volcanic battlegrounds'
    },
    { 
      name: 'Sunreach', 
      available: false,
      icon: Sun,
      color: 'from-yellow-500 via-orange-500 to-amber-600',
      glowColor: 'rgba(251, 146, 60, 0.6)',
      theme: 'Solar-scorched deserts'
    },
  ];

  const handleAreaClick = (area) => {
    setSelectedArea(area);
    setIsModalOpen(true);
  };

  const getRiskColor = (risk) => {
    const colors = {
      'Medium': 'text-yellow-400 border-yellow-500/50 bg-yellow-950/20',
      'High': 'text-orange-400 border-orange-500/50 bg-orange-950/20',
      'Critical': 'text-red-400 border-red-500/50 bg-red-950/20',
      'Extreme': 'text-pink-400 border-pink-500/50 bg-pink-950/20',
    };
    return colors[risk] || 'text-gray-400 border-gray-500/50 bg-gray-950/20';
  };

  const getRiskIcon = (risk) => {
    if (risk === 'Extreme' || risk === 'Critical') return Skull;
    if (risk === 'High') return AlertTriangle;
    return MapPin;
  };

  const currentPlanet = planets.find(p => p.name === selectedPlanet);

  return (
    <section id="map" className="relative py-12 px-6 overflow-hidden" style={{ background: "#10241E" }}>
      {/* Animated Serpent Green Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              background: i % 5 === 0 ? '#C9A45C' : '#2E7A5E',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.1,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 4 + 3}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{
            background: `radial-gradient(circle, ${currentPlanet.glowColor} 0%, transparent 70%)`,
            top: '10%',
            left: '20%',
            animationDuration: '4s',
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full blur-3xl animate-pulse"
          style={{
            background: `radial-gradient(circle, ${currentPlanet.glowColor} 0%, transparent 70%)`,
            bottom: '20%',
            right: '15%',
            animationDelay: '2s',
            animationDuration: '5s',
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 relative">
          <div className="inline-flex items-center gap-4 mb-6 relative">
            {/* Animated Icon Container */}
            <div className="relative group">
              {/* Outer rotating ring */}
              <div className="absolute inset-0 w-20 h-20 border-3 border-cyan-400/30 rounded-full animate-spin" style={{ top: '-18px', left: '-18px', animationDuration: '8s' }} />
              
              {/* Middle pulsing ring */}
              <div className="absolute inset-0 w-16 h-16 border-2 border-cyan-500/40 rounded-full animate-pulse" style={{ top: '-12px', left: '-12px' }} />
              
              {/* Inner icon with glow */}
              <div className="relative w-12 h-12 rounded-full flex items-center justify-center" style={{
                background: 'radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, transparent 70%)',
                boxShadow: '0 0 30px rgba(6, 182, 212, 0.4)',
              }}>
                <Map className="w-8 h-8 text-cyan-300 animate-pulse" style={{
                  filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.8))',
                }} />
              </div>
              
              {/* Orbiting particles */}
              {[0, 120, 240].map((angle, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-cyan-400 animate-pulse"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${angle}deg) translateX(24px) translateY(-50%)`,
                    animationDelay: `${i * 0.3}s`,
                    boxShadow: '0 0 10px rgba(6, 182, 212, 0.8)',
                  }}
                />
              ))}
            </div>
            
            {/* Creative Exploration Text */}
            <div className="relative">
              <span 
                className="text-2xl font-black tracking-[0.4em] uppercase" 
                style={{ 
                  fontFamily: 'Orbitron, sans-serif',
                  color: '#738A9A',
                  textShadow: '0 0 40px rgba(115, 138, 154, 0.9), 0 0 60px rgba(115, 138, 154, 0.7)',
                  filter: 'drop-shadow(0 0 20px rgba(115, 138, 154, 0.8))',
                  letterSpacing: '0.4em',
                }}
              >
                Exploration
              </span>
              
              {/* Animated underline */}
              <div className="absolute -bottom-2 left-0 right-0 h-1 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-transparent via-[#738A9A] to-transparent animate-pulse"
                  style={{
                    boxShadow: '0 0 20px rgba(115, 138, 154, 0.7)',
                  }}
                />
              </div>
              
              {/* Scanline effect */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-30"
                style={{
                  background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(115, 138, 154, 0.15) 2px, rgba(115, 138, 154, 0.15) 4px)',
                  animation: 'scan 3s linear infinite',
                }}
              />
            </div>
          </div>
          
          {/* Animated Planet Title */}
          <div className="relative inline-block">
            <h2 
              className="heading-section font-black orbitron mb-6 relative z-10"
              style={{
                color: '#E3C987',
                textShadow: '0 0 30px rgba(201, 164, 92, 0.5)',
              }}
            >
              {selectedPlanet.toUpperCase()}
            </h2>
            {/* Orbiting ring effect */}
            <div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              style={{
                width: '120%',
                height: '120%',
                border: `2px solid ${currentPlanet.glowColor}`,
                borderRadius: '50%',
                animation: 'spin 20s linear infinite',
                opacity: 0.3,
              }}
            />
          </div>
          
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#C9D6CF' }}>
            Navigate war-torn worlds with diverse zones. High-risk areas offer greater rewards.
          </p>
        </div>

       {/* Enhanced Planet Selector with 3D Cards */}
        <div className="mb-16 flex flex-wrap justify-center gap-6">
          {planets.map((planet) => {
            const PlanetIcon = planet.icon;
            const isSelected = selectedPlanet === planet.name;
            
            return (
              <button
                key={planet.name}
                onClick={() => setSelectedPlanet(planet.name)}
                className={`relative group px-8 py-6 rounded-2xl font-bold uppercase tracking-wider transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 ${
                  isSelected ? 'scale-105' : ''
                }`}
                style={{
                  fontFamily: 'Orbitron, sans-serif',
                  background: isSelected 
                    ? `linear-gradient(135deg, ${planet.color})`
                    : 'rgba(0, 0, 0, 0.6)',
                  border: `3px solid ${isSelected ? planet.glowColor : 'rgba(100, 100, 100, 0.3)'}`,
                  boxShadow: isSelected 
                    ? `0 0 40px ${planet.glowColor}, 0 20px 40px rgba(0, 0, 0, 0.5)`
                    : '0 10px 30px rgba(0, 0, 0, 0.3)',
                }}
              >
                {/* Animated background gradient */}
                {isSelected && (
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-50 animate-pulse"
                    style={{
                      background: `linear-gradient(135deg, ${planet.color})`,
                      filter: 'blur(10px)',
                    }}
                  />
                )}
                
                <div className="relative z-10 flex flex-col items-center gap-3">
                  {/* Rotating icon */}
                  <div 
                    className={`w-16 h-16 rounded-full flex items-center justify-center ${
                      isSelected ? 'animate-spin' : ''
                    }`}
                    style={{
                      background: isSelected ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)',
                      border: `2px solid ${isSelected ? 'white' : 'rgba(255, 255, 255, 0.3)'}`,
                      animationDuration: '3s',
                    }}
                  >
                    <PlanetIcon 
                      className="w-8 h-8"
                      style={{ 
                        color: isSelected ? 'white' : 'rgba(255, 255, 255, 0.6)',
                        filter: isSelected ? 'drop-shadow(0 0 10px white)' : 'none',
                      }} 
                    />
                  </div>
                  
                  <span className={isSelected ? 'text-white' : 'text-gray-400'}>
                    {planet.name}
                  </span>
                  
                  {!planet.available && (
                    <span className="text-xs bg-yellow-500/30 text-yellow-300 px-3 py-1 rounded-full border border-yellow-500/50 animate-pulse">
                      Soon
                    </span>
                  )}
                  
                  {/* Hover effect particles */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at center, ${planet.glowColor} 0%, transparent 70%)`,
                      }}
                    />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Map Display - Conditional based on selected planet */}
        {selectedPlanet === 'Atomspire' ? (
          <>
            {/* Featured Map Display with Clickable Hotspots */}
            <div className="mb-8 relative">
              <div 
                className="w-full h-[600px] rounded-2xl border-4 overflow-hidden relative transform hover:scale-[1.01] transition-transform duration-300"
                style={{
                  borderColor: currentPlanet.glowColor,
                  background: '#0f1419',
                  boxShadow: `0 0 60px ${currentPlanet.glowColor}, inset 0 0 60px rgba(168, 85, 247, 0.1)`,
                }}
              >
                {/* Map image */}
                <img 
                  src="https://customer-assets.emergentagent.com/job_terraforce/artifacts/5t2agmi4_Blueprint.png"
                  alt="Atomspire Map"
                  className="w-full h-full object-contain"
                  style={{
                    filter: 'brightness(1.1) contrast(1.2) saturate(1.3)',
                  }}
                />
                
                {/* Clickable Hotspots with enhanced effects */}
                {[
                  { area: detailedMapAreas[0], top: '22%', left: '19%' }, // Laboratory & Research Centre - Area I (top left quadrant)
                  { area: detailedMapAreas[1], top: '60%', left: '16%' }, // Aerospace - Area II (top center-left)
                  { area: detailedMapAreas[2], top: '27%', left: '73%' }, // Enforcement Grid - Area III (top center-right)
                  { area: detailedMapAreas[3], top: '11%', left: '84%' }, // Elemental Extraction - Area IV (top right)
                  { area: detailedMapAreas[4], top: '40%', left: '44%' }, // Techspire - Area V (dead center - Tentacle City)
                  { area: detailedMapAreas[5], top: '71%', left: '47%' }, // Horizon Medisphere - Area VI (middle right)
                  { area: detailedMapAreas[6], top: '77%', left: '32%' }, // Bio Farms - Area VII (bottom left)
                  { area: detailedMapAreas[7], top: '62%', left: '65%' }, // Eco Dome Haven - EDH (bottom center)
                  { area: detailedMapAreas[8], top: '62%', left: '88%' }, // Port/Harbor - Area IX (bottom right)
                  { area: detailedMapAreas[9], top: '20%', left: '35%' }, // Area X - Restricted Zone (left edge, centered vertically)
                ].map((hotspot, index) => (
                  <div
                    key={index}
                    onClick={() => handleAreaClick(hotspot.area)}
                    className="absolute cursor-pointer group transition-all duration-300 hover:scale-150"
                    style={{
                      top: hotspot.top,
                      left: hotspot.left,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    {/* Multi-layered pulsing marker */}
                    <div className="relative flex items-center justify-center">
                      {/* Outer ring */}
                      <div 
                        className="absolute w-16 h-16 rounded-full animate-ping"
                        style={{
                          background: `radial-gradient(circle, ${currentPlanet.glowColor} 0%, transparent 70%)`,
                          animationDuration: '2s',
                        }}
                      />
                      {/* Middle ring */}
                      <div 
                        className="absolute w-12 h-12 rounded-full animate-pulse"
                        style={{
                          background: 'rgba(255, 215, 0, 0.4)',
                          border: '2px solid rgba(255, 215, 0, 0.9)',
                          boxShadow: '0 0 30px rgba(255, 215, 0, 0.8)',
                        }}
                      />
                      {/* Inner core */}
                      <div 
                        className="w-8 h-8 rounded-full animate-pulse"
                        style={{
                          background: 'rgba(255, 215, 0, 0.6)',
                          border: '3px solid rgba(255, 215, 0, 1)',
                          boxShadow: '0 0 20px rgba(255, 215, 0, 1), inset 0 0 10px rgba(255, 255, 255, 0.5)',
                        }}
                      />
                      <MapPin 
                        className="absolute w-5 h-5 animate-bounce" 
                        style={{ 
                          color: '#FFD700',
                          filter: 'drop-shadow(0 0 8px rgba(255, 215, 0, 1))',
                        }} 
                      />
                    </div>
                    
                    {/* Enhanced hover label */}
                    <div 
                      className="absolute top-16 left-1/2 transform -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none scale-0 group-hover:scale-100"
                      style={{
                        background: 'linear-gradient(135deg, rgba(15, 20, 25, 0.98) 0%, rgba(30, 30, 40, 0.98) 100%)',
                        border: '2px solid rgba(255, 215, 0, 0.8)',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        color: '#FFD700',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        boxShadow: '0 0 25px rgba(255, 215, 0, 0.6), 0 10px 20px rgba(0, 0, 0, 0.5)',
                        zIndex: 10,
                      }}
                    >
                      {hotspot.area.name}
                    </div>
                  </div>
                ))}
                
                {/* Enhanced overlay effects */}
                <div className="absolute inset-0 pointer-events-none" style={{
                  background: 'radial-gradient(circle at 50% 50%, transparent 40%, rgba(0, 0, 0, 0.7) 100%)',
                }} />
                
                {/* Animated scanlines */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-20"
                  style={{
                    background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(168, 85, 247, 0.2) 2px, rgba(168, 85, 247, 0.2) 4px)',
                    animation: 'scan 3s linear infinite',
                  }}
                />
                
                {/* Glowing corner brackets */}
                <div className="absolute top-4 left-4 w-16 h-16 border-t-4 border-l-4 opacity-80 animate-pulse" style={{ borderColor: currentPlanet.glowColor }} />
                <div className="absolute top-4 right-4 w-16 h-16 border-t-4 border-r-4 opacity-80 animate-pulse" style={{ borderColor: currentPlanet.glowColor, animationDelay: '0.5s' }} />
                <div className="absolute bottom-4 left-4 w-16 h-16 border-b-4 border-l-4 opacity-80 animate-pulse" style={{ borderColor: currentPlanet.glowColor, animationDelay: '1s' }} />
                <div className="absolute bottom-4 right-4 w-16 h-16 border-b-4 border-r-4 opacity-80 animate-pulse" style={{ borderColor: currentPlanet.glowColor, animationDelay: '1.5s' }} />
                
                {/* Enhanced map title overlay */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-center pointer-events-none">
                  <div 
                    className="px-8 py-4 rounded-xl animate-pulse"
                    style={{
                      background: 'linear-gradient(135deg, rgba(15, 20, 25, 0.95) 0%, rgba(30, 30, 40, 0.95) 100%)',
                      border: `3px solid ${currentPlanet.glowColor}`,
                      boxShadow: `0 0 30px ${currentPlanet.glowColor}, inset 0 0 20px rgba(168, 85, 247, 0.2)`,
                    }}
                  >
                    <p 
                      className="text-2xl font-black orbitron text-white"
                      style={{ 
                        textShadow: `0 0 30px ${currentPlanet.glowColor}, 0 0 50px ${currentPlanet.glowColor}`,
                        filter: `drop-shadow(0 0 15px ${currentPlanet.glowColor})`,
                      }}
                    >
                      ATOMSPIRE • TACTICAL MAP
                    </p>
                  </div>
                </div>
                
                {/* Enhanced instruction hint */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center pointer-events-none animate-bounce">
                  <div 
                    className="px-6 py-3 rounded-lg"
                    style={{
                      background: 'rgba(15, 20, 25, 0.9)',
                      border: '2px solid rgba(255, 215, 0, 0.5)',
                      boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)',
                    }}
                  >
                    <p className="text-body-small font-bold" style={{ color: '#FFD700' }}>
                      ✨ Click markers to view area details
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Areas Grid - Enhanced */}
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {detailedMapAreas.map((area) => {
                const RiskIcon = getRiskIcon(area.risk);
                return (
                  <Card
                    key={area.id}
                    onClick={() => handleAreaClick(area)}
                    className="bg-slate-900/80 hover-lift transition-all duration-300 cursor-pointer group transform hover:scale-105 hover:-translate-y-2"
                    style={{
                      border: '2px solid rgba(168, 85, 247, 0.3)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = currentPlanet.glowColor;
                      e.currentTarget.style.boxShadow = `0 0 30px ${currentPlanet.glowColor}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.3)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-3">
                        <div 
                          className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:animate-spin"
                          style={{
                            background: `rgba(168, 85, 247, 0.2)`,
                            border: `2px solid ${currentPlanet.glowColor}`,
                          }}
                        >
                          <RiskIcon className="w-6 h-6" style={{ color: '#a855f7' }} />
                        </div>
                        <Badge className={getRiskColor(area.risk)}>
                          {area.risk}
                        </Badge>
                      </div>
                      <CardTitle className="text-base orbitron group-hover:text-shadow" style={{ 
                        color: '#a855f7',
                      }}>
                        {area.name}
                      </CardTitle>
                      <CardDescription className="text-gray-400 text-body-small line-clamp-2">
                        {area.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>

            <MapAreaModal 
              area={selectedArea}
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />

            {/* Special Zones Info - Enhanced */}
            <div className="mt-16 grid md:grid-cols-2 gap-8">
              <Card 
                className="bg-gradient-to-br from-red-950/20 to-pink-950/20 border-red-500/30 transform hover:scale-105 transition-all duration-300"
                style={{
                  boxShadow: '0 0 30px rgba(239, 68, 68, 0.3)',
                }}
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-red-600/20 border-3 border-red-500 flex items-center justify-center animate-pulse">
                      <Skull className="w-8 h-8 text-red-400" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl orbitron text-red-400">Infected Areas</CardTitle>
                      <Badge className="bg-red-600/50 border-red-400/50 mt-1">EXTREME DANGER</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    High-risk zones with toxic gas causing continuous damage. Standard healing won't cure infection. 
                    Only Disinfection Syringes can save you after exposure.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 rounded bg-black/40">
                      <span className="text-gray-400">Rewards</span>
                      <span className="text-red-400 font-bold">Cycle 3 Key Cards</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded bg-black/40">
                      <span className="text-gray-400">Risk</span>
                      <span className="text-red-400 font-bold">Continuous DoT</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card 
                className="bg-gradient-to-br from-cyan-950/20 to-purple-950/20 border-cyan-500/30 transform hover:scale-105 transition-all duration-300"
                style={{
                  boxShadow: '0 0 30px rgba(6, 182, 212, 0.3)',
                }}
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-cyan-600/20 border-3 border-cyan-500 flex items-center justify-center animate-pulse">
                      <MapPin className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl orbitron text-cyan-400">Terraform Zones</CardTitle>
                      <Badge className="bg-cyan-600/50 border-cyan-400/50 mt-1">STRATEGIC</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Critical locations housing Terraform Devices. Control these zones to reshape the environment. 
                    Devices decrease from 10 to 3 as the match progresses.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 rounded bg-black/40">
                      <span className="text-gray-400">Starting Devices</span>
                      <span className="text-cyan-400 font-bold">10 Active</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded bg-black/40">
                      <span className="text-gray-400">Endgame</span>
                      <span className="text-cyan-400 font-bold">3 Remaining</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </>
        ) : (
          /* Enhanced Coming Soon Display with Planet-Specific Themes */
          <div className="mb-8 relative">
            <div 
              className="w-full h-[600px] rounded-2xl border-4 overflow-hidden relative flex items-center justify-center transform hover:scale-[1.02] transition-all duration-500"
              style={{
                borderColor: currentPlanet.glowColor,
                background: `linear-gradient(135deg, #0f1419 0%, #1a2332 50%, #0f1419 100%)`,
                boxShadow: `0 0 60px ${currentPlanet.glowColor}, inset 0 0 100px ${currentPlanet.glowColor}`,
              }}
            >
              {/* Animated particle effect */}
              <div className="absolute inset-0">
                {[...Array(30)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full animate-pulse"
                    style={{
                      width: `${Math.random() * 4 + 2}px`,
                      height: `${Math.random() * 4 + 2}px`,
                      background: currentPlanet.glowColor,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      animationDuration: `${Math.random() * 3 + 2}s`,
                      boxShadow: `0 0 10px ${currentPlanet.glowColor}`,
                    }}
                  />
                ))}
              </div>

              <div className="text-center z-10 relative">
                {/* Rotating planet icon */}
                <div className="relative inline-block mb-8">
                  <div 
                    className="w-40 h-40 rounded-full animate-spin mx-auto"
                    style={{
                      background: `conic-gradient(from 0deg, ${currentPlanet.color})`,
                      animationDuration: '4s',
                      boxShadow: `0 0 60px ${currentPlanet.glowColor}, inset 0 0 40px rgba(0, 0, 0, 0.5)`,
                    }}
                  />
                  <Globe 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 animate-pulse" 
                    style={{ 
                      color: 'white',
                      filter: `drop-shadow(0 0 20px ${currentPlanet.glowColor})`,
                    }}
                  />
                </div>

                <h3 
                  className="text-6xl md:text-7xl font-black orbitron mb-6 animate-pulse text-white"
                  style={{
                    textShadow: `0 0 40px ${currentPlanet.glowColor}, 0 0 60px ${currentPlanet.glowColor}`,
                    filter: `drop-shadow(0 0 30px ${currentPlanet.glowColor})`,
                  }}
                >
                  COMING SOON
                </h3>
                
                <p 
                  className="text-3xl text-gray-300 orbitron mb-6"
                  style={{
                    textShadow: `0 0 20px ${currentPlanet.glowColor}`,
                  }}
                >
                  {selectedPlanet} Map
                </p>

                <p className="text-body-large text-gray-400 italic max-w-md mx-auto">
                  {currentPlanet.theme}
                </p>

                {/* Countdown-style animation */}
                <div className="mt-12 flex justify-center gap-4">
                  {['DISCOVERY', 'IN', 'PROGRESS'].map((word, i) => (
                    <div
                      key={i}
                      className="px-6 py-3 rounded-lg font-bold animate-pulse"
                      style={{
                        background: `rgba(0, 0, 0, 0.5)`,
                        border: `2px solid ${currentPlanet.glowColor}`,
                        color: 'white',
                        animationDelay: `${i * 0.3}s`,
                        boxShadow: `0 0 20px ${currentPlanet.glowColor}`,
                      }}
                    >
                      {word}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Animated rotating ring */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 50%, transparent 45%, ${currentPlanet.glowColor} 50%, transparent 55%)`,
                  animation: 'spin 10s linear infinite',
                  opacity: 0.3,
                }}
              />
              
              {/* Pulsing glow effect */}
              <div className="absolute inset-0 pointer-events-none animate-pulse" style={{
                background: `radial-gradient(circle at 50% 50%, ${currentPlanet.glowColor} 0%, transparent 70%)`,
                opacity: 0.2,
              }} />
              
              {/* Glowing corner brackets */}
              <div className="absolute top-6 left-6 w-20 h-20 border-t-4 border-l-4 opacity-80 animate-pulse" style={{ borderColor: currentPlanet.glowColor }} />
              <div className="absolute top-6 right-6 w-20 h-20 border-t-4 border-r-4 opacity-80 animate-pulse" style={{ borderColor: currentPlanet.glowColor, animationDelay: '0.5s' }} />
              <div className="absolute bottom-6 left-6 w-20 h-20 border-b-4 border-l-4 opacity-80 animate-pulse" style={{ borderColor: currentPlanet.glowColor, animationDelay: '1s' }} />
              <div className="absolute bottom-6 right-6 w-20 h-20 border-b-4 border-r-4 opacity-80 animate-pulse" style={{ borderColor: currentPlanet.glowColor, animationDelay: '1.5s' }} />
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
};

export default MapWorld;
