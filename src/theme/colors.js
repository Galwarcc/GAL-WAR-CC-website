// Professional Color Palettes extracted from user's design references
// These colors will be used throughout the website for a cohesive, beautiful design

export const colorPalettes = {
  // Palette 1: Earthy & Sophisticated (Garnet theme)
  earthy: {
    primary: '#792E29',      // Garnet - Deep red for primary actions
    secondary: '#24201D',    // Raisin Black - For backgrounds
    accent: '#565538',       // Olive Drab - Subtle accents
    light: '#ABA38F',        // Grullo - Secondary text
    lightest: '#D9D4C8',     // Timberwolf - Backgrounds & cards
  },

  // Palette 2: Industrial & Rugged (Engineering theme)
  industrial: {
    primary: '#B71007',      // International Orange - Striking accents
    secondary: '#153420',    // Medium Jungle Green - Deep backgrounds
    accent: '#D19E2C',       // Satin Sheen Gold - Highlights
    neutral: '#948870',      // Beaver - Neutral elements
    dark: '#55553D',         // Olive Drab Camouflage - Dark sections
  },


  // Palette 4: Nature & Mystical (Enchanted Forest theme)
  nature: {
    primary: '#81B55B',      // Leaf Green - Primary actions
    secondary: '#253721',    // Deep Forest Green - Backgrounds
    accent: '#B2D17F',       // Light Lime Green - Accents & highlights
    teal: '#5F929D',         // Dusty Teal - Contrasting elements
    sage: '#5F864C',         // Sage Green - Secondary elements
  },

  // Palette 5: Dramatic & Cultural (Traditional Asian theme)
  dramatic: {
    primary: '#F42C1D',      // Fiery Coral Red - Call-to-actions
    secondary: '#070709',    // Deep Charcoal Black - Primary backgrounds
    accent: '#AE1918',       // Vibrant Crimson - Accents
    brown: '#824334',        // Burnt Sienna - Warm elements
    burgundy: '#701C1A',     // Deep Burgundy - Secondary accents
    muted: '#4B2D2E',        // Muted Earthy Brown - Subtle elements
  },
};

// Website color scheme - combining palettes for different sections
export const websiteColors = {
  // Hero Section - Space & Dramatic combination
  hero: {
    text: '#FFFFFF',
    textSecondary: colorPalettes.space.accent,
    accent: colorPalettes.dramatic.accent,
    glow: 'rgba(174, 25, 24, 0.6)',
  },

  // Gameplay Section - Dramatic & Industrial
  gameplay: {
    title: colorPalettes.dramatic.accent,
    subtitle: colorPalettes.industrial.accent,
    text: '#FFFFFF',
    accent: colorPalettes.industrial.accent,
    glow: 'rgba(209, 158, 44, 0.8)',
  },

  // Races Section - Earthy & Industrial
  races: {
    title: '#FFFFFF',
    subtitle: colorPalettes.earthy.primary,
    accent: colorPalettes.industrial.accent,
    cardBorder: colorPalettes.earthy.accent,
  },

  // Map Section - Space & Nature combination
  map: {
    exploration: colorPalettes.space.primary,
    explorationGlow: 'rgba(115, 138, 154, 0.8)',
    atomspire: '#FFFFFF',
    atomspireGlow: 'rgba(168, 85, 247, 0.6)',
    background: colorPalettes.space.secondary,
  },

  // Weapons Section - Industrial & Dramatic
  weapons: {
    title: '#FFFFFF',
    accent: colorPalettes.dramatic.primary,
    border: colorPalettes.dramatic.accent,
    hover: colorPalettes.industrial.accent,
  },

  // About Section - Nature & Space
  about: {
    title: colorPalettes.nature.primary,
    text: '#FFFFFF',
    accent: colorPalettes.space.accent,
    cardBorder: colorPalettes.nature.accent,
  },

  // Footer - Earthy & Dramatic
  footer: {
    background: colorPalettes.dramatic.secondary,
    text: colorPalettes.earthy.light,
    accent: colorPalettes.dramatic.primary,
  },

  // UI Elements
  ui: {
    buttonPrimary: colorPalettes.dramatic.primary,
    buttonSecondary: colorPalettes.industrial.accent,
    cardBackground: 'rgba(7, 7, 9, 0.6)',
    cardBorder: colorPalettes.space.steel,
    success: colorPalettes.nature.primary,
    warning: colorPalettes.industrial.accent,
    danger: colorPalettes.dramatic.primary,
  },
};

export default websiteColors;
