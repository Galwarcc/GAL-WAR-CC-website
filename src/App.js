console.log("✅ App.js is rendering!");

import React, { useState, useEffect } from 'react';
import './App.css';
import { Toaster } from './components/ui/sonner';
import BootSequence from './components/BootSequence';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Weapons from './components/Weapons';
import Gameplay from './components/Gameplay';
import Races from './components/Races';
import Features from './components/Features';
import MapWorld from './components/MapWorld';
import TeamDossier from './components/TeamDossier';
import AboutContact from './components/AboutContact';
import FutureExpansion from './components/FutureExpansion';
import Footer from './components/Footer';

function App() {
  console.log("✅ App component mounted");

  const [showBoot, setShowBoot] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show boot sequence only once per session
    const hasSeenBoot = sessionStorage.getItem('hasSeenBoot');
    if (hasSeenBoot) {
      setShowBoot(false);
      setShowContent(true);
    }
  }, []);

  const handleBootComplete = () => {
    sessionStorage.setItem('hasSeenBoot', 'true');
    setShowBoot(false);
    setTimeout(() => setShowContent(true), 300);
  };

  return (
    <div className="App">
      {showBoot && <BootSequence onComplete={handleBootComplete} />}

      {showContent && (
        <>
          <Navigation />
          <main id="home" style={{ background: '#0B1A16' }}>
            <Hero />
            <Gameplay />
            <Races />
            <Features />
            <Weapons />
            <MapWorld />
            <TeamDossier />
            <AboutContact />
            <FutureExpansion />
          </main>
          <Footer />
        </>
      )}

      <Toaster />
    </div>
  );
}

export default App;
