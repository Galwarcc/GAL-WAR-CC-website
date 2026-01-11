import React from 'react';
import { gameFeatures } from '../data/mock';
import DotaCard from './DotaCard';
import { Globe, Zap, Trophy } from 'lucide-react';
import StarfieldBackground from './StarfieldBackground';

const Features = () => {
  const iconMap = {
    globe: <Globe className="w-8 h-8" />,
    zap: <Zap className="w-8 h-8" />,
    trophy: <Trophy className="w-8 h-8" />,
  };

  return (
    <section id="features" className="relative py-12 px-6 overflow-hidden" style={{ background: "#10241E" }}>
      <StarfieldBackground />
      {/* Main Feature - Terraform Device */}
      <div className="max-w-7xl mx-auto relative z-10 mb-10">
        <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 rounded-lg relative overflow-hidden" style={{
          background: 'rgba(16, 36, 30, 0.7)',
          border: '2px solid rgba(201, 164, 92, 0.3)',
        }}>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(31, 107, 79, 0.1) 0%, rgba(201, 164, 92, 0.05) 100%)' }}></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{
                background: 'rgba(201, 164, 92, 0.2)',
                border: '2px solid #C9A45C',
              }}>
                <Globe className="w-8 h-8" style={{ color: '#C9A45C' }} />
              </div>
              <div>
                <h3
                  className="text-3xl font-bold uppercase tracking-wider"
                  style={{ fontFamily: 'Cinzel, serif', color: '#E3C987' }}
                >
                  Terraform Device
                </h3>
                <p className="text-sm" style={{ color: '#8FA39A' }}>Environmental Domination System</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4
                  className="text-lg font-bold mb-3 uppercase tracking-wide"
                  style={{ fontFamily: 'Cinzel, serif', color: '#C9A45C' }}
                >
                  How It Works
                </h4>
                <p className="leading-relaxed" style={{ color: '#C9D6CF' }}>
                  10 Terraform Devices are scattered across planet E-47. Find Key Cards during timed cycles, activate a device, 
                  and transform the environment to match your race's home planet atmosphere.
                </p>
              </div>
              
              <div>
                <h4
                  className="text-lg font-bold mb-3 uppercase tracking-wide"
                  style={{ fontFamily: 'Cinzel, serif', color: '#1F6B4F' }}
                >
                  Tactical Advantage
                </h4>
                <p className="leading-relaxed" style={{ color: '#C9D6CF' }}>
                  Control your atmosphere to gain powerful buffs while debuffing enemies. Strategic device placement 
                  turns the tide of battle.
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-center">
            <div className="w-full h-[400px]">
              <iframe
                src="/model-viewer.html?src=/models/terraform_device_compressed.glb"
                title="Terraform Device"
                style={{ 
                  width: '100%', 
                  height: '100%',
                  border: 'none',
                  background: 'transparent'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h3
            className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-4"
            style={{ fontFamily: 'Cinzel, serif', color: '#E3C987' }}
          >
            See What's New
          </h3>
          <p style={{ color: '#C9D6CF' }}>Latest features and game mechanics</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gameFeatures.slice(0, 3).map((feature, index) => (
            <DotaCard
              key={index}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              icon={iconMap[feature.icon]}
            />
          ))}
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{
        background: 'radial-gradient(circle, rgba(201, 164, 92, 0.15) 0%, transparent 70%)',
      }} />
    </section>
  );
};

export default Features;
