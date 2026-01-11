import React, { useState } from 'react';
import { weapons } from '../data/mock';
import StarfieldBackground from './StarfieldBackground';

const Weapons = () => {
  const [activeTab, setActiveTab] = useState('weapons');
  const [selectedWeapon, setSelectedWeapon] = useState(weapons[0]);
  const [selectedThrowable, setSelectedThrowable] = useState(null);

  // Map weapon IDs to their 3D model assets
  const weaponAssets = {
    1: { type: 'glb', url: '/models/ar32_phoenix_compressed.glb', name: 'AR-32 Phoenix' },
    2: { type: 'glb', url: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb', name: 'AR-35 Titan' },
    3: { type: 'glb', url: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb', name: 'Nova Marksman-80' },
    4: { type: 'glb', url: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb', name: 'Void Striker-90' },
    5: { 
      type: 'image', 
      url: 'https://customer-assets.emergentagent.com/job_21c6a349-a761-4a11-8483-30c1322f9abc/artifacts/2o7y6cas_Artillary%20Gun.png',
      name: 'Missile Strike Gun'
    }
  };

  const throwables = [
    { id: 1, name: 'Frag Grenade', description: 'Deals area explosive damage', icon: 'grenade' },
    { id: 2, name: 'EMP Grenade', description: 'Disrupts enemy shields and electronic equipment', icon: 'emp' },
    { id: 3, name: 'Flash Bomb', description: 'Temporarily blinds opponents', icon: 'flash' },
    { id: 4, name: 'Smoke Grenade', description: 'Smokes the area', icon: 'smoke' },
    { id: 5, name: 'Toxic Gas Canister', description: 'Creates a lingering damage zone (DoT)', icon: 'toxic' },
  ];

  const getWeaponAsset = (weaponId) => weaponAssets[weaponId] || null;

  // Get throwable icon based on type
  const getThrowableIcon = (iconType) => {
    const icons = {
      grenade: (
        <svg className="w-20 h-20" fill="none" stroke="#C9A45C" viewBox="0 0 24 24">
          <circle cx="12" cy="14" r="6" strokeWidth="1.5"/>
          <path strokeWidth="1.5" d="M12 8V6M10 6h4M9 4h6"/>
        </svg>
      ),
      emp: (
        <svg className="w-20 h-20" fill="none" stroke="#C9A45C" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="8" strokeWidth="1.5"/>
          <path strokeWidth="1.5" d="M12 4v2M12 18v2M4 12h2M18 12h2M6.34 6.34l1.42 1.42M16.24 16.24l1.42 1.42M6.34 17.66l1.42-1.42M16.24 7.76l1.42-1.42"/>
        </svg>
      ),
      flash: (
        <svg className="w-20 h-20" fill="none" stroke="#C9A45C" viewBox="0 0 24 24">
          <path strokeWidth="1.5" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      ),
      smoke: (
        <svg className="w-20 h-20" fill="none" stroke="#C9A45C" viewBox="0 0 24 24">
          <path strokeWidth="1.5" d="M8 16c0 2.21 1.79 4 4 4s4-1.79 4-4M12 4c-3.31 0-6 2.69-6 6 0 1.1.3 2.13.81 3.02"/>
          <circle cx="12" cy="10" r="4" strokeWidth="1.5"/>
        </svg>
      ),
      toxic: (
        <svg className="w-20 h-20" fill="none" stroke="#C9A45C" viewBox="0 0 24 24">
          <path strokeWidth="1.5" d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
          <circle cx="12" cy="12" r="4" strokeWidth="1.5"/>
        </svg>
      ),
    };
    return icons[iconType] || icons.grenade;
  };

  return (
    <section 
      id="weapons" 
      data-testid="weapons-section"
      className="relative py-16 px-6 overflow-hidden min-h-screen" 
      style={{ background: "#0B1A16" }}
    >
      <StarfieldBackground />
      
      {/* Background glowing effects */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full" style={{
          background: 'radial-gradient(circle, rgba(31, 107, 79, 0.3) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full" style={{
          background: 'radial-gradient(circle, rgba(201, 164, 92, 0.3) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span
            className="text-sm font-bold tracking-[0.3em] uppercase block mb-2"
            style={{ fontFamily: 'Cinzel, serif', color: '#C9A45C' }}
          >
            Arsenal
          </span>
          
          <h2
            className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-[0.1em]"
            style={{ fontFamily: 'Cinzel, serif', color: '#E3C987' }}
            data-testid="weapons-title"
          >
            <span style={{ color: '#1F6B4F' }}>WEAPONS</span> & COMBAT
          </h2>
          
          <p className="text-base max-w-2xl mx-auto" style={{ color: '#C9D6CF' }}>
            Master a diverse arsenal of futuristic weaponry designed for interstellar warfare.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveTab('weapons')}
            data-testid="weapons-tab"
            className="px-8 py-3 text-sm font-semibold uppercase tracking-wider rounded transition-all duration-300"
            style={{
              background: activeTab === 'weapons' ? '#C9D6CF' : 'rgba(201, 214, 207, 0.15)',
              color: activeTab === 'weapons' ? '#0B1A16' : '#C9D6CF',
              border: '1px solid rgba(201, 214, 207, 0.3)',
            }}
          >
            Weapons
          </button>
          <button
            onClick={() => setActiveTab('throwables')}
            data-testid="throwables-tab"
            className="px-8 py-3 text-sm font-semibold uppercase tracking-wider rounded transition-all duration-300"
            style={{
              background: activeTab === 'throwables' ? '#C9D6CF' : 'rgba(201, 214, 207, 0.15)',
              color: activeTab === 'throwables' ? '#0B1A16' : '#C9D6CF',
              border: '1px solid rgba(201, 214, 207, 0.3)',
            }}
          >
            Throwables
          </button>
        </div>

        {/* Weapons Tab Content */}
        {activeTab === 'weapons' && (
          <div className="flex gap-6" data-testid="weapons-content">
            {/* Left: Large Preview Panel */}
            <div className="flex-1">
              <div 
                className="rounded-lg h-[600px] flex flex-col"
                style={{
                  background: 'rgba(16, 36, 30, 0.6)',
                  border: '1px solid rgba(201, 214, 207, 0.2)',
                }}
                data-testid="weapon-preview-panel"
              >
                {/* Header with weapon name */}
                <div className="p-4 border-b" style={{ borderColor: 'rgba(201, 214, 207, 0.15)' }}>
                  <p className="text-sm" style={{ color: '#8FA39A' }}>{selectedWeapon.name}</p>
                </div>
                
                {/* 3D Model Viewer - Large Area */}
                <div className="flex-1" style={{ minHeight: '400px' }}>
                  {(() => {
                    const asset = getWeaponAsset(selectedWeapon.id);
                    if (asset) {
                      if (asset.type === 'glb') {
                        return (
                          <iframe
                            key={`model-${selectedWeapon.id}`}
                            src={`/model-viewer.html?src=${encodeURIComponent(asset.url)}`}
                            title={selectedWeapon.name}
                            style={{ 
                              width: '100%', 
                              height: '380px',
                              border: 'none',
                              background: 'transparent'
                            }}
                            data-testid="weapon-3d-model"
                          />
                        );
                      } else if (asset.type === 'image') {
                        return (
                          <div className="flex items-center justify-center h-full p-4">
                            <img
                              src={asset.url}
                              alt={selectedWeapon.name}
                              className="max-w-full max-h-full object-contain"
                              style={{ maxHeight: '360px' }}
                              data-testid="weapon-image"
                            />
                          </div>
                        );
                      }
                    }
                    return (
                      <div className="flex items-center justify-center h-full">
                        <div className="text-center" style={{ color: '#8FA39A' }}>
                          <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="#C9A45C" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21" />
                          </svg>
                          <p>Select a weapon to preview</p>
                        </div>
                      </div>
                    );
                  })()}
                </div>

                {/* Footer with weapon info */}
                <div className="p-6 border-t" style={{ borderColor: 'rgba(201, 214, 207, 0.15)' }}>
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-6 h-6" fill="none" stroke="#C9A45C" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21" />
                    </svg>
                    <h4 className="text-xl font-bold uppercase tracking-wider" style={{ color: '#E3C987', fontFamily: 'Cinzel, serif' }}>
                      {selectedWeapon.name}
                    </h4>
                  </div>
                  <p className="text-sm" style={{ color: '#C9D6CF' }}>{selectedWeapon.description}</p>
                </div>
              </div>
            </div>

            {/* Right: Weapons List - Vertical Stack */}
            <div className="w-[280px] flex-shrink-0 flex flex-col gap-4 overflow-y-auto max-h-[600px] pr-2">
              {weapons.map((weapon) => (
                <WeaponCard
                  key={weapon.id}
                  weapon={weapon}
                  isSelected={selectedWeapon.id === weapon.id}
                  onClick={() => setSelectedWeapon(weapon)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Throwables Tab Content */}
        {activeTab === 'throwables' && (
          <div className="flex gap-6" data-testid="throwables-content">
            {/* Left: Large Preview Panel */}
            <div className="flex-1">
              <div 
                className="rounded-lg h-[600px] flex flex-col"
                style={{
                  background: 'rgba(16, 36, 30, 0.6)',
                  border: '1px solid rgba(201, 214, 207, 0.2)',
                }}
                data-testid="throwable-preview-panel"
              >
                {/* Header */}
                <div className="p-4 border-b" style={{ borderColor: 'rgba(201, 214, 207, 0.15)' }}>
                  <p className="text-sm" style={{ color: '#8FA39A' }}>
                    {selectedThrowable ? selectedThrowable.name : 'Select a throwable'}
                  </p>
                </div>
                
                {/* Throwable Preview - Large Area */}
                <div className="flex-1 flex items-center justify-center p-8">
                  {selectedThrowable ? (
                    <div className="text-center">
                      <div className="w-40 h-40 mx-auto mb-6 rounded-full flex items-center justify-center" 
                        style={{ background: 'rgba(201, 164, 92, 0.15)', border: '2px solid rgba(201, 164, 92, 0.3)' }}>
                        {getThrowableIcon(selectedThrowable.icon)}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center" style={{ color: '#8FA39A' }}>
                      <div className="w-32 h-32 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: 'rgba(201, 164, 92, 0.2)' }}>
                        <svg className="w-16 h-16" fill="none" stroke="#C9A45C" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                          <path strokeWidth="2" d="M12 8v4l3 3"/>
                        </svg>
                      </div>
                      <p>Select a throwable to preview</p>
                    </div>
                  )}
                </div>

                {/* Footer with throwable info */}
                <div className="p-6 border-t" style={{ borderColor: 'rgba(201, 214, 207, 0.15)' }}>
                  {selectedThrowable ? (
                    <>
                      <div className="flex items-center gap-3 mb-2">
                        <svg className="w-6 h-6" fill="none" stroke="#C9A45C" viewBox="0 0 24 24">
                          <circle cx="12" cy="14" r="6" strokeWidth="1.5"/>
                          <path strokeWidth="1.5" d="M12 8V6M10 6h4"/>
                        </svg>
                        <h4 className="text-xl font-bold uppercase tracking-wider" style={{ color: '#E3C987', fontFamily: 'Cinzel, serif' }}>
                          {selectedThrowable.name}
                        </h4>
                      </div>
                      <p className="text-sm mb-3" style={{ color: '#C9D6CF' }}>{selectedThrowable.description}</p>
                      <span
                        className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase"
                        style={{
                          background: 'rgba(201, 164, 92, 0.2)',
                          color: '#C9A45C',
                        }}
                      >
                        Coming Soon
                      </span>
                    </>
                  ) : (
                    <p className="text-sm" style={{ color: '#8FA39A' }}>Select a throwable to view details</p>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Throwables List - Vertical Stack */}
            <div className="w-[280px] flex-shrink-0 flex flex-col gap-4 overflow-y-auto max-h-[600px] pr-2">
              {throwables.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedThrowable(item)}
                  className="p-4 rounded-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer text-left"
                  style={{
                    background: selectedThrowable?.id === item.id ? 'rgba(201, 164, 92, 0.15)' : 'rgba(16, 36, 30, 0.6)',
                    border: `1px solid ${selectedThrowable?.id === item.id ? '#C9A45C' : 'rgba(201, 214, 207, 0.2)'}`,
                    boxShadow: selectedThrowable?.id === item.id ? '0 0 20px rgba(201, 164, 92, 0.3)' : 'none',
                  }}
                  data-testid={`throwable-card-${item.id}`}
                >
                  {/* Icon placeholder */}
                  <div className="h-16 mb-3 rounded flex items-center justify-center" style={{ background: 'rgba(11, 26, 22, 0.8)' }}>
                    <svg className="w-8 h-8" fill="none" stroke={selectedThrowable?.id === item.id ? '#C9A45C' : '#8FA39A'} viewBox="0 0 24 24">
                      <circle cx="12" cy="14" r="6" strokeWidth="1.5"/>
                      <path strokeWidth="1.5" d="M12 8V6M10 6h4"/>
                    </svg>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <svg className="w-4 h-4" fill="none" stroke={selectedThrowable?.id === item.id ? '#C9A45C' : '#8FA39A'} viewBox="0 0 24 24">
                      <circle cx="12" cy="14" r="5" strokeWidth="1.5"/>
                    </svg>
                    <h5 className="text-sm font-bold uppercase tracking-wider" style={{ 
                      color: selectedThrowable?.id === item.id ? '#E3C987' : '#C9D6CF',
                      fontFamily: 'Cinzel, serif'
                    }}>
                      {item.name}
                    </h5>
                  </div>
                  <p className="text-xs" style={{ color: '#8FA39A' }}>{item.description}</p>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// Weapon Card Component - Vertical Layout
const WeaponCard = ({ weapon, isSelected, onClick }) => (
  <button
    onClick={onClick}
    className="w-full p-4 rounded-lg text-left transition-all duration-300 hover:scale-[1.02]"
    style={{
      background: isSelected ? 'rgba(201, 164, 92, 0.15)' : 'rgba(16, 36, 30, 0.6)',
      border: `1px solid ${isSelected ? '#C9A45C' : 'rgba(201, 214, 207, 0.2)'}`,
      boxShadow: isSelected ? '0 0 20px rgba(201, 164, 92, 0.3)' : 'none',
    }}
    data-testid={`weapon-card-${weapon.id}`}
  >
    {/* Image placeholder area */}
    <div className="h-16 mb-3 rounded flex items-center justify-center" style={{ background: 'rgba(11, 26, 22, 0.8)' }}>
      <svg className="w-8 h-8" fill="none" stroke={isSelected ? '#C9A45C' : '#8FA39A'} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21" />
      </svg>
    </div>
    
    {/* Weapon info */}
    <div className="flex items-center gap-2 mb-1">
      <svg className="w-4 h-4" fill="none" stroke={isSelected ? '#C9A45C' : '#8FA39A'} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" strokeWidth="1.5"/>
        <path strokeWidth="1.5" d="M12 2v4M12 18v4M2 12h4M18 12h4"/>
      </svg>
      <h5 className="text-sm font-bold uppercase tracking-wider" style={{ 
        color: isSelected ? '#E3C987' : '#C9D6CF',
        fontFamily: 'Cinzel, serif'
      }}>
        {weapon.name}
      </h5>
    </div>
    <p className="text-xs" style={{ color: '#8FA39A' }}>{weapon.description}</p>
  </button>
);

export default Weapons;
