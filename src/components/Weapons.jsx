import React, { useState } from 'react';
import { weapons } from '../data/mock';
import { Crosshair, Sword, Bomb } from 'lucide-react';
import StarfieldBackground from './StarfieldBackground';

const Weapons = () => {
  const [selectedWeapon, setSelectedWeapon] = useState(weapons[0]);

  // Map weapon IDs to their display assets
  const weaponAssets = {
    1: { // AR-32 Phoenix
      type: 'glb',
      url: '/models/gun_v05.glb'
    },
    5: { // Missile Strike Gun
      type: 'image',
      url: 'https://customer-assets.emergentagent.com/job_21c6a349-a761-4a11-8483-30c1322f9abc/artifacts/2o7y6cas_Artillary%20Gun.png'
    }
  };

  const throwables = [
    { name: 'Frag Grenade', description: 'Deals area explosive damage', status: '' },
    { name: 'EMP Grenade', description: 'Disrupts enemy shields and electronic equipment', status: '' },
    { name: 'Flash Bomb', description: 'Temporarily blinds opponents', status: '' },
    { name: 'Smoke Grenade', description: 'Smokes the area', status: '' },
    { name: 'Toxic Gas Canister', description: 'Creates a lingering damage zone (DoT)', status: 'Coming Soon' },
  ];

  const getWeaponAsset = (weaponId) => {
    return weaponAssets[weaponId] || null;
  };

  return (
    <section id="weapons" className="relative py-12 px-6 overflow-hidden" style={{ background: "#0B1A16" }}>
      <StarfieldBackground />
      {/* Slytherin emerald & gold glowing background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full" style={{
          background: 'radial-gradient(circle, rgba(31, 107, 79, 0.3) 0%, transparent 70%)',
          filter: 'blur(100px)',
          animation: 'pulse 3s ease-in-out infinite',
        }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full" style={{
          background: 'radial-gradient(circle, rgba(201, 164, 92, 0.3) 0%, transparent 70%)',
          filter: 'blur(100px)',
          animation: 'pulse 4s ease-in-out infinite',
        }} />
      </div>
      {/* Section Header */}
      <div className="max-w-7xl mx-auto relative z-10 mb-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <Sword className="w-8 h-8" style={{ color: '#C9A45C' }} />
            <span
              className="text-sm font-bold tracking-[0.3em] uppercase"
              style={{ 
                fontFamily: 'Cinzel, serif',
                color: '#C9A45C',
              }}
            >
              Arsenal
            </span>
          </div>
          
          <h2
            className="heading-section font-black mb-6 uppercase tracking-[0.15em]"
            style={{ 
              fontFamily: 'Cinzel, serif',
              color: '#E3C987',
            }}
          >
            <span style={{ color: '#1F6B4F' }}>WEAPONS</span> & COMBAT
          </h2>
          
          <div className="section-divider"></div>
          
          <p className="text-body-large max-w-3xl mx-auto" style={{ color: '#C9D6CF' }}>
            Master a diverse arsenal of futuristic weaponry designed for interstellar warfare.
          </p>
        </div>
      </div>

      {/* Weapons Grid */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Weapon List */}
          <div className="space-y-4">
            <h3
              className="text-2xl font-bold uppercase tracking-wider mb-6"
              style={{ fontFamily: 'Cinzel, serif', color: '#C9A45C' }}
            >
              Primary Weapons
            </h3>
            {weapons.map((weapon) => (
              <button
                key={weapon.id}
                onClick={() => setSelectedWeapon(weapon)}
                className="w-full p-6 text-left rounded-lg transition-all duration-300 hover:scale-105"
                style={{
                  background: selectedWeapon.id === weapon.id 
                    ? 'rgba(31, 107, 79, 0.3)'
                    : 'rgba(16, 36, 30, 0.6)',
                  border: `2px solid ${selectedWeapon.id === weapon.id ? '#C9A45C' : 'rgba(31, 107, 79, 0.3)'}`,
                  boxShadow: selectedWeapon.id === weapon.id ? '0 0 30px rgba(201, 164, 92, 0.4)' : 'none',
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-xl font-bold" style={{ 
                    fontFamily: 'Cinzel, serif',
                    color: selectedWeapon.id === weapon.id ? '#E3C987' : '#C9D6CF',
                  }}>
                    {weapon.name}
                  </h4>
                  <Crosshair className="w-6 h-6" style={{ color: '#C9A45C' }} />
                </div>
                <p className="text-sm mb-3" style={{ color: '#C9D6CF' }}>{weapon.description}</p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span style={{ color: '#8FA39A' }}>Damage:</span>
                    <span className="ml-2 font-bold" style={{ color: '#C9A45C' }}>{weapon.damage}</span>
                  </div>
                  <div>
                    <span style={{ color: '#8FA39A' }}>Range:</span>
                    <span className="ml-2 font-bold" style={{ color: '#1F6B4F' }}>{weapon.range}</span>
                  </div>
                  <div>
                    <span style={{ color: '#8FA39A' }}>Fire Rate:</span>
                    <span className="ml-2 font-bold" style={{ color: '#2E7A5E' }}>{weapon.fireRate}</span>
                  </div>
                  <div>
                    <span style={{ color: '#8FA39A' }}>Ammo:</span>
                    <span className="ml-2 font-bold" style={{ color: '#6FAF95' }}>{weapon.magazineSize}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Selected Weapon Display */}
          <div className="p-8 rounded-lg" style={{
            background: 'rgba(16, 36, 30, 0.7)',
            border: '2px solid rgba(201, 164, 92, 0.3)',
          }}>
            <h3
              className="text-2xl font-bold uppercase tracking-wider mb-6"
              style={{ fontFamily: 'Cinzel, serif', color: '#E3C987' }}
            >
              {selectedWeapon.name}
            </h3>
            
            {/* 3D Model or Image Display */}
            <div className="w-full h-96 mb-6 rounded-lg flex items-center justify-center" style={{
              background: 'rgba(11, 26, 22, 0.8)',
              border: '1px solid rgba(31, 107, 79, 0.3)',
            }}>
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                {(() => {
                  const asset = getWeaponAsset(selectedWeapon.id);
                  if (asset) {
                    if (asset.type === 'glb') {
                      return (
                        <model-viewer
                          src={asset.url}
                          alt={selectedWeapon.name}
                          auto-rotate
                          camera-controls
                          shadow-intensity="1"
                          style={{ width: '100%', height: '100%' }}
                          className="model-viewer-custom"
                        ></model-viewer>
                      );
                    } else if (asset.type === 'image') {
                      return (
                        <img
                          src={asset.url}
                          alt={selectedWeapon.name}
                          className="max-w-full max-h-full object-contain"
                        />
                      );
                    }
                  }
                  return (
                    <div className="text-center p-8">
                      <Crosshair className="w-24 h-24 mx-auto mb-4" style={{ color: '#C9A45C' }} />
                      <p style={{ color: '#C9D6CF' }}>3D model rendering...</p>
                    </div>
                  );
                })()}
              </div>
            </div>

            <p className="mb-4" style={{ color: '#C9D6CF' }}>{selectedWeapon.description}</p>
            <p className="text-sm" style={{ color: '#8FA39A' }}>Type: {selectedWeapon.type}</p>
          </div>
        </div>

        {/* Throwables Section */}
        <div className="mt-12">
          <div className="flex items-center gap-3 mb-6">
            <Bomb className="w-8 h-8" style={{ color: '#C9A45C' }} />
            <h3
              className="text-2xl font-bold uppercase tracking-wider"
              style={{ fontFamily: 'Cinzel, serif', color: '#E3C987' }}
            >
              Throwables & Utilities
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {throwables.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-lg transition-all duration-300 hover:scale-105"
                style={{
                  background: 'rgba(16, 36, 30, 0.6)',
                  border: '2px solid rgba(31, 107, 79, 0.3)',
                }}
              >
                <h4 className="text-lg font-bold mb-2" style={{ color: '#C9A45C' }}>{item.name}</h4>
                <p className="text-sm mb-2" style={{ color: '#C9D6CF' }}>{item.description}</p>
                {item.status && (
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase"
                    style={{
                      background: 'rgba(201, 164, 92, 0.2)',
                      color: '#C9A45C',
                    }}
                  >
                    {item.status}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Weapons;