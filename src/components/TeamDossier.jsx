import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Mail, Phone, Users } from 'lucide-react';
import { Card } from './ui/card';
import StarfieldBackground from './StarfieldBackground';
import prashanthImg from '../assets/prashanth.jpg'; 

const TeamDossier = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const teamMembers = [
    {
      id: 1,
      name: 'Vikram Simha Rao',
      role: 'Founder & Creative Director',
      email: 'yourname@domain.com',
      phone: '+91 77998 56251',
      tagline: 'Building the next era of sci-fi multiplayer combat',
      subtitle: 'From vision to battlefield',
      vision: `Cosmic Conquest: Galactic War was born from a simple idea —\n\nWhat if a battle royale was not just about survival, but domination of an entire world?\n\nWe wanted to replace shrinking circles with living environments, static maps with evolving planets, and generic combat with race-driven warfare.`,
      profilePlaceholder: true,
    },
    {
      id: 2,
      name: 'Prashanth Pabbathi',
      role: 'Co-founder',
      image: prashanthImg, // Use the imported variable here
      email: 'yourname@domain.com',
      phone: '+91 XXXXXXXXXX',
      tagline: 'Driving strategy, operations, and execution at scale',
      subtitle: 'From planning to launch readiness',
      vision: `Cosmic Conquest: Galactic War is built not only on imagination, but on disciplined execution —\n\nturning an ambitious universe into a real, scalable product.\n\nWe focus on aligning the team, timelines, and production pipeline to deliver a competitive sci-fi battle royale experience — with clear milestones, strong processes, and player-first decisions.`,
      profilePlaceholder: true,
    },
    {
      id: 3,
      name: 'Lead Developer',
      role: 'The Architect',
      tagline: '',
      subtitle: '',
      vision: `Designs and owns the technical backbone of Cosmic Conquest: Galactic War.\n\nResponsible for core gameplay systems, performance optimization, multiplayer logic, and cross-platform scalability — ensuring every mechanic is stable, responsive, and production-ready.`,
      profilePlaceholder: true,
      category: 'Production Unit',
    },
    {
      id: 4,
      name: 'Game Designer',
      role: 'The Mechanics',
      tagline: '',
      subtitle: '',
      vision: `Defines how Cosmic Conquest: Galactic War plays, feels, and balances.\n\nDesigns combat systems, abilities, progression, and gameplay rules — ensuring every encounter is skill-driven, competitive, and strategically meaningful.`,
      profilePlaceholder: true,
      category: 'Production Unit',
    },
    {
      id: 5,
      name: 'Level Designer',
      role: 'The World Builder',
      tagline: '',
      subtitle: '',
      vision: `Crafts the battlegrounds where conflict unfolds.\n\nDesigns map layouts, flow, verticality, and points of interest to drive movement, tension, and tactical decision-making throughout each match.`,
      profilePlaceholder: true,
      category: 'Production Unit',
    },
    {
      id: 6,
      name: 'Lead Animator',
      role: 'Motion',
      tagline: '',
      subtitle: '',
      vision: `Brings characters, combat, and traversal to life through movement.\n\nEnsures animations feel responsive, impactful, and cinematic — from gunplay and abilities to movement and eliminations.`,
      profilePlaceholder: true,
      category: 'Art & Animation',
    },
    {
      id: 7,
      name: 'Senior Rigger',
      role: 'Kinetics',
      tagline: '',
      subtitle: '',
      vision: `Builds and maintains the skeletal and control systems behind every animated asset.\n\nEnsures characters, equipment, and weapons move naturally while supporting complex combat and animation requirements.`,
      profilePlaceholder: true,
      category: 'Art & Animation',
    },
    {
      id: 8,
      name: 'Senior Asset Designer',
      role: 'Props & Weapons',
      tagline: '',
      subtitle: '',
      vision: `Creates high-fidelity weapons, gear, and interactive props.\n\nBalances visual detail with gameplay readability and performance, ensuring assets look powerful and feel intuitive in combat.`,
      profilePlaceholder: true,
      category: 'Art & Animation',
    },
    {
      id: 9,
      name: 'Environmental Artist',
      role: 'Atmosphere',
      tagline: '',
      subtitle: '',
      vision: `Shapes the identity and mood of each location.\n\nDesigns terrain, structures, lighting, and environmental details to make every zone feel alive, hostile, and visually distinct.`,
      profilePlaceholder: true,
      category: 'Art & Animation',
    },
  ];

  const currentMember = teamMembers[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="team" className="relative min-h-screen py-12 px-6" style={{
      background: 'transparent',
    }}>
      <StarfieldBackground />
      {/* Ambient background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full" style={{
          background: 'radial-gradient(circle, rgba(165, 146, 209, 0.4) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'pulse 4s ease-in-out infinite',
        }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full" style={{
          background: 'radial-gradient(circle, rgba(97, 134, 151, 0.4) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'pulse 5s ease-in-out infinite',
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-6">
            <Users className="w-8 h-8" style={{ color: '#A592D1' }} />
            <span className="text-body-small font-bold tracking-[0.3em] uppercase" style={{ 
              fontFamily: 'Cinzel, serif',
              color: '#B9D6E8',
            }}>
              DEVELOPMENT TEAM
            </span>
          </div>

          <h2 className="heading-section font-black mb-6 uppercase tracking-[0.15em]" style={{ 
            fontFamily: 'Cinzel, serif',
            color: '#B9D6E8',
            textShadow: '0 0 30px rgba(165, 146, 209, 0.6)',
          }}>
            THE <span style={{ color: '#A592D1' }}>ARCHITECTS</span>
          </h2>

          <p className="text-lg" style={{ color: '#B9D6E8' }}>
            Meet the minds behind Cosmic Conquest: Galactic War
          </p>
        </div>

        {/* Dossier Layout */}
        <div className="grid lg:grid-cols-5 gap-8 mb-8">
          {/* Left Side - Profile Card */}
          <div className="lg:col-span-2">
            <Card className="relative overflow-hidden p-8" style={{
              background: 'rgba(64, 76, 86, 0.6)',
              border: '2px solid rgba(165, 146, 209, 0.3)',
              boxShadow: '0 0 30px rgba(165, 146, 209, 0.2)',
              backdropFilter: 'blur(10px)',
            }}>
              {/* Profile Image Container */}
              <div className="aspect-square w-full rounded-lg overflow-hidden" style={{
                background: 'transparent',
                border: '3px solid #A592D1',
                boxShadow: '0 0 20px rgba(165, 146, 209, 0.4)',
              }}>
                <div className="w-full h-full flex items-center justify-center">
                  {/* Check if currentMember has an image property */}
                  {currentMember.image ? (
                    <img 
                      src={currentMember.image} 
                      alt={currentMember.name} 
                      className="w-full h-full object-cover transition-opacity duration-500" 
                    />
                  ) : (
                    /* Fallback to placeholder if no image exists */
                    <div className="text-center">
                      <Users className="w-24 h-24 mx-auto mb-4" style={{ color: '#B9D6E8', opacity: 0.5 }} />
                      <p className="text-body-small uppercase tracking-wider" style={{ color: '#B9D6E8', opacity: 0.7 }}>
                        Profile Image
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Profile Details */}
              <div className="space-y-4">
                <div>
                  <h3 className="heading-small font-black uppercase mb-1" style={{ 
                    fontFamily: 'Orbitron, sans-serif',
                    color: '#A592D1',
                    textShadow: '0 0 15px rgba(165, 146, 209, 0.6)',
                  }}>
                    {currentMember.name}
                  </h3>
                  <p className="text-body-large font-bold uppercase tracking-wider" style={{ color: '#B9D6E8' }}>
                    {currentMember.role}
                  </p>
                </div>

                {currentMember.email && (
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" style={{ color: '#A592D1' }} />
                    <span className="text-sm" style={{ color: '#B9D6E8' }}>{currentMember.email}</span>
                  </div>
                )}

                {currentMember.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" style={{ color: '#A592D1' }} />
                    <span className="text-sm" style={{ color: '#B9D6E8' }}>{currentMember.phone}</span>
                  </div>
                )}

                {currentMember.tagline && (
                  <div className="pt-4 border-t" style={{ borderColor: 'rgba(165, 146, 209, 0.3)' }}>
                    <p className="text-body-small font-semibold italic" style={{ color: '#B9D6E8' }}>
                      {currentMember.tagline}
                    </p>
                  </div>
                )}

                {currentMember.subtitle && (
                  <p className="text-body-small uppercase tracking-wider" style={{ color: '#B9D6E8' }}>
                    {currentMember.subtitle}
                  </p>
                )}

                {currentMember.category && (
                  <div className="pt-4">
                    <span className="inline-block px-3 py-1 text-label font-bold uppercase tracking-wider rounded" style={{
                      background: 'rgba(165, 146, 209, 0.2)',
                      color: '#A592D1',
                      border: '1px solid rgba(165, 146, 209, 0.4)',
                    }}>
                      {currentMember.category}
                    </span>
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* Right Side - Dossier Book */}
          <div className="lg:col-span-3">
            <div className="relative" style={{
              height: '550px',
            }}>
              {/* Book/Dossier */}
              <div className="absolute inset-0 rounded-lg overflow-hidden" style={{
                background: 'transparent',
                border: '3px solid rgba(165, 146, 209, 0.4)',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(165, 146, 209, 0.2)',
                transform: 'perspective(1000px) rotateY(-2deg)',
              }}>
                {/* Book Pages Effect */}
                <div className="absolute top-0 right-0 w-2 h-full" style={{
                  background: 'repeating-linear-gradient(0deg, #B8C9D2 0px, #B8C9D2 2px, transparent 2px, transparent 8px)',
                  opacity: 0.3,
                }} />

                {/* Content */}
                <div className="p-12 h-full overflow-y-auto">
                  {/* Title */}
                  <div className="mb-8">
                    <h4 className="text-3xl font-black uppercase mb-2" style={{
                      fontFamily: 'Cinzel, serif',
                      color: '#A592D1',
                      textShadow: '0 0 15px rgba(165, 146, 209, 0.6)',
                    }}>
                      THE VISION
                    </h4>
                    <div className="w-24 h-1" style={{ background: '#A592D1' }} />
                  </div>

                  {/* Vision Text */}
                  <div className="space-y-4">
                    {currentMember.vision.split('\\n\\n').map((paragraph, idx) => (
                      <p key={idx} className="text-base leading-relaxed" style={{ 
                        color: '#B9D6E8',
                        fontFamily: 'Georgia, serif',
                      }}>
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Decorative Elements */}
                  <div className="mt-12 flex justify-end">
                    <div className="text-right">
                      <div className="w-32 h-px mb-2" style={{ background: 'rgba(165, 146, 209, 0.4)' }} />
                      <p className="text-label uppercase tracking-widest" style={{ color: '#B9D6E8' }}>
                        Dossier #{currentIndex + 1} of {teamMembers.length}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Paper Clip Effect */}
                <div className="absolute top-8 right-8 w-8 h-12" style={{
                  border: '2px solid rgba(184, 201, 210, 0.4)',
                  borderRadius: '20px',
                  transform: 'rotate(15deg)',
                }} />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-8 mb-8">
          <button
            onClick={handlePrevious}
            data-testid="team-prev-btn"
            className="flex items-center gap-2 px-6 py-3 rounded-lg font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105"
            style={{
              background: 'rgba(165, 146, 209, 0.2)',
              border: '2px solid #A592D1',
              color: '#B9D6E8',
              fontFamily: 'Orbitron, sans-serif',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(165, 146, 209, 0.4)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(165, 146, 209, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(165, 146, 209, 0.2)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>

          <div className="text-center">
            <p className="text-body-small uppercase tracking-wider" style={{ color: '#B9D6E8' }} data-testid="member-count">
              Member {currentIndex + 1} of {teamMembers.length}
            </p>
          </div>

          <button
            onClick={handleNext}
            data-testid="team-next-btn"
            className="flex items-center gap-2 px-6 py-3 rounded-lg font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105"
            style={{
              background: 'rgba(165, 146, 209, 0.2)',
              border: '2px solid #A592D1',
              color: '#B9D6E8',
              fontFamily: 'Orbitron, sans-serif',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(165, 146, 209, 0.4)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(165, 146, 209, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(165, 146, 209, 0.2)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Thumbnail Gallery */}
        {/* Thumbnail Gallery */}
        <div className="mt-6">
          <div className="flex justify-center gap-4 flex-wrap">
            {teamMembers.map((member, index) => (
              <button
                key={member.id}
                onClick={() => handleThumbnailClick(index)}
                className="relative group transition-all duration-300"
                style={{
                  transform: currentIndex === index ? 'scale(1.05)' : 'scale(1)',
                }}
              >
                {/* Thumbnail Card */}
                <div 
                  className="w-28 h-36 rounded-lg overflow-hidden flex flex-col items-center justify-center p-3 transition-all duration-300"
                  style={{
                    background: currentIndex === index 
                      ? 'rgba(165, 146, 209, 0.3)' 
                      : 'rgba(64, 76, 86, 0.6)',
                    border: currentIndex === index 
                      ? '3px solid #A592D1' 
                      : '2px solid rgba(165, 146, 209, 0.2)',
                    boxShadow: currentIndex === index 
                      ? '0 0 25px rgba(165, 146, 209, 0.5)' 
                      : 'none',
                  }}
                >
                  {/* Profile Icon / Image Logic */}
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-2 overflow-hidden"
                    style={{
                      background: currentIndex === index 
                        ? 'rgba(165, 146, 209, 0.3)' 
                        : 'rgba(185, 214, 232, 0.1)',
                      border: currentIndex === index 
                        ? '2px solid #A592D1' 
                        : '1px solid rgba(185, 214, 232, 0.3)',
                    }}
                  >
                    {/* If member has an image, show it; otherwise show the Users icon */}
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover" 
                      />
                    ) : (
                      <Users 
                        className="w-6 h-6" 
                        style={{ 
                          color: currentIndex === index ? '#A592D1' : '#B9D6E8',
                          opacity: currentIndex === index ? 1 : 0.6,
                        }} 
                      />
                    )}
                  </div>
                  
                  {/* Person Label */}
                  <p 
                    className="text-xs text-center font-medium leading-tight"
                    style={{ 
                      color: currentIndex === index ? '#A592D1' : '#B9D6E8',
                      opacity: currentIndex === index ? 1 : 0.7,
                    }}
                  >
                    {/* Optional: Show actual name if you prefer, or keep the generic label */}
                    {member.image ? member.name.split(' ')[0] : 'Person'}<br/>Image
                  </p>
                </div>

                {/* Active Indicator Dot */}
                {currentIndex === index && (
                  <div 
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full"
                    style={{ background: '#A592D1', boxShadow: '0 0 10px #A592D1' }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamDossier;
