import React, { useState, useEffect } from 'react';

const BootSequence = ({ onComplete }) => {
  const [lines, setLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [progress, setProgress] = useState(0);

  const bootSequence = [
    'INITIALISING GALACTIC WAR COMMAND...',
    'LOADING QUANTUM PROCESSORS...',
    'ESTABLISHING NEURAL LINK...',
    'SYNCING PLASMA REACTORS...',
    'CALIBRATING WEAPON SYSTEMS...',
    'REACTOR CORE ONLINE...',
    'SYSTEMS NOMINAL...',
    'WELCOME, COMMANDER.'
  ];

  useEffect(() => {
    if (currentLine < bootSequence.length) {
      const timer = setTimeout(() => {
        setLines(prev => [...prev, bootSequence[currentLine]]);
        setCurrentLine(prev => prev + 1);
      }, 400);
      return () => clearTimeout(timer);
    } else {
      const completeTimer = setTimeout(() => {
        onComplete();
      }, 1500);
      return () => clearTimeout(completeTimer);
    }
  }, [currentLine, onComplete]);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 50);
    return () => clearInterval(progressTimer);
  }, []);

  return (
    /* Changed bg-gradient to solid black with relative positioning */
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden">
      
      {/* BACKGROUND EFFECTS FROM SECOND PAGE */}
      <div className="absolute inset-0 scanline opacity-30" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-orange-600/15 rounded-full blur-[120px] transform -translate-x-1/2 -translate-y-1/2" />
      
      <div className="w-full max-w-3xl px-8 relative z-10">
        {/* Terminal Header */}
        <div className="mb-8 flex items-center space-x-2 text-[#00ff41]">
          <div className="w-3 h-3 rounded-full bg-[#00ff41] animate-pulse shadow-[0_0_10px_#00ff41]"></div>
          <div className="text-sm font-mono tracking-wider orbitron">SYSTEM BOOT v2.5.4</div>
        </div>

        {/* Boot Sequence Container - Uses the bg-black/60 from the second page cards */}
        <div className="space-y-3 mb-12 p-8 bg-black/60 border border-[#00ff41]/20 rounded-lg backdrop-blur-sm">
          {lines.map((line, index) => (
            <div
              key={index}
              className="font-mono text-[#00ff41] text-lg tracking-wide animate-fadeIn"
              style={{ textShadow: '0 0 8px rgba(0, 255, 65, 0.4)' }}
            >
              <span className="text-[#00ff41]/50 mr-3">&gt;</span>
              {line}
              {index === lines.length - 1 && (
                <span className="inline-block w-2 h-5 bg-[#00ff41] ml-1 animate-blink"></span>
              )}
            </div>
          ))}
        </div>

        {/* Progress Bar - Updated to match the Green/Yellow gradient from the second page */}
        <div className="space-y-3">
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden border border-white/5">
            <div
              className="h-full bg-gradient-to-r from-[#00ff41] via-[#ffdd00] to-[#00ff41] transition-all duration-300"
              style={{ width: `${progress}%`, boxShadow: '0 0 15px rgba(0, 255, 65, 0.5)' }}
            ></div>
          </div>
          <div className="flex justify-between text-xs font-mono text-[#00ff41]/70 orbitron">
            <span className="tracking-[0.2em]">LOADING SYSTEMS</span>
            <span>{progress}%</span>
          </div>
        </div>

        {/* Decorative Elements - Color matched to the green theme */}
        <div className="mt-16 flex justify-center space-x-8 opacity-20">
          <div className="w-12 h-12 border border-[#00ff41] rounded-lg animate-spin-slow"></div>
          <div className="w-12 h-12 border border-[#00ff41] rounded-lg animate-spin-slow-reverse" style={{ animationDelay: '0.5s' }}></div>
          <div className="w-12 h-12 border border-[#00ff41] rounded-lg animate-spin-slow" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default BootSequence;