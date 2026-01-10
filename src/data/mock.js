// Mock data for Cosmic Conquest: Galactic War

export const races = [
  {
    id: 1,
    name: 'Humans',
    element: 'Oxygen',
    symbol: 'O₂',
    color: '#00D4FF',
    description: 'Adaptable explorers, balanced survivors from Earth',
    affinity: 'Versatile and strategic',
  },
  {
    id: 2,
    name: 'Aquarions',
    element: 'Methane',
    symbol: 'CH₄',
    color: '#0FF4C6',
    description: 'Fierce nomads forged in volcanic storms',
    affinity: 'Aggressive and powerful',
  },
  {
    id: 3,
    name: 'Chronobots',
    element: 'Hydrogen',
    symbol: 'H₂',
    color: '#FFFFFF',
    description: 'Robotic species powered by hydrogen reactors',
    affinity: 'Technological supremacy',
  },
  {
    id: 4,
    name: 'Cosmorians',
    element: 'Sulfur',
    symbol: 'SO₂',
    color: '#FFD700',
    description: 'Aquatic species from frozen seas and ice worlds',
    affinity: 'Tactical adaptation',
  },
  {
    id: 5,
    name: 'Genomorphs',
    element: 'Chlorine',
    symbol: 'Cl₂',
    color: '#7FFF00',
    description: 'Genetically engineered beings shaped by mutation',
    affinity: 'Evolutionary advantage',
  },
];

export const weapons = [
  {
    id: 1,
    category: 'Assault Rifles',
    name: 'AR-32 Phoenix',
    damage: 32,
    range: 'Mid-Range',
    description: 'Versatile plasma rifle with balanced stats',
    image: 'ar-32',
  },
  {
    id: 2,
    category: 'Assault Rifles',
    name: 'AR-35 Titan',
    damage: 35,
    range: 'Mid-Range',
    description: 'Heavy assault rifle with superior damage output',
    image: 'ar-35',
  },
  {
    id: 3,
    category: 'Sniper Rifles',
    name: 'Nova Marksman-80',
    damage: 80,
    range: 'Long-Range',
    description: 'Precision long-range eliminator',
    image: 'nm-80',
  },
  {
    id: 4,
    category: 'Sniper Rifles',
    name: 'Void Striker-90',
    damage: 90,
    range: 'Long-Range',
    description: 'Devastating sniper with maximum damage',
    image: 'vs-90',
  },
  {
    id: 5,
    category: 'Special Weapons',
    name: 'Missile Strike Gun',
    damage: 'Variable',
    range: 'Area Effect',
    description: 'Deploy devastating missile strikes',
    image: 'msg',
  },
];

export const throwables = [
  { name: 'Plasma Grenade', effect: 'Explosive damage' },
  { name: 'EMP Device', effect: 'Disables electronics' },
  { name: 'Smoke Canister', effect: 'Visual cover' },
  { name: 'Toxic Gas', effect: 'Damage over time' },
];

export const mapAreas = [
  {
    id: 1,
    name: 'Tentacle City',
    description: 'Futuristic metropolis with alien architecture',
    risk: 'High',
  },
  {
    id: 2,
    name: 'Stellar Nexus',
    description: 'Advanced technology hub',
    risk: 'Medium',
  },
  {
    id: 3,
    name: 'Astro Nexus',
    description: 'Astronomical research facility',
    risk: 'Medium',
  },
  {
    id: 4,
    name: 'Celestial Nexus',
    description: 'Energy wells and power stations',
    risk: 'Medium',
  },
  {
    id: 5,
    name: 'Quantum Nexus',
    description: 'Quantum research center',
    risk: 'High',
  },
  {
    id: 6,
    name: 'Terraform Zones',
    description: 'Key locations for device activation',
    risk: 'Critical',
  },
  {
    id: 7,
    name: 'Ancient Ruins',
    description: 'Mysterious alien structures with hidden loot',
    risk: 'Medium',
  },
  {
    id: 8,
    name: 'Infected Areas',
    description: 'High-risk zones with toxic gas and rare rewards',
    risk: 'Extreme',
  },
];

export const gameFeatures = [
  {
    title: 'Terraform System',
    description: 'Transform the environment to match your race\'s home planet. Gain tactical advantages while opponents struggle in hostile conditions.',
    icon: 'globe',
  },
  {
    title: 'Plasma Reactor',
    description: 'Advanced energy system that powers plasma weapons and utilities. Manage your energy strategically for maximum combat effectiveness.',
    icon: 'zap',
  },
  {
    title: 'Battle Royale',
    description: '25-player intergalactic showdown. Solo, Duos, or Squads. Last team standing wins the war for planet E-47.',
    icon: 'trophy',
  },
  {
    title: 'Dynamic Combat',
    description: 'Engage with plasma weapons, missile strikes, throwables, and melee combat. Every fight is strategic and intense.',
    icon: 'crosshair',
  },
];

export const teammembers = [
  { name: 'Game Director', role: 'Gal War CC Pvt. Ltd.' },
  { name: 'Lead Designer', role: 'Gameplay & Mechanics' },
  { name: 'Art Director', role: 'Visual Design' },
  { name: 'Development Team', role: 'Unreal Engine 5.3' },
];