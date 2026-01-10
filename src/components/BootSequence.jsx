import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

const BootSequence = ({ onComplete }) => {
  const [lines, setLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);

  const bootLines = [
    '> Initializing Galactic War Command...',
    '> Loading Reactor Core...',
    '> Plasma Systems Online...',
    '> Terraform Protocols Active...',
    '> Weapon Systems Initialized...',
    '> Welcome, Commander.',
  ];

  useEffect(() => {
    if (currentLine < bootLines.length) {
      const timer = setTimeout(() => {
        setLines((prev) => [...prev, bootLines[currentLine]]);
        setCurrentLine((prev) => prev + 1);
      }, 400);
      return () => clearTimeout(timer);
    } else {
      const completeTimer = setTimeout(() => {
        onComplete();
      }, 800);
      return () => clearTimeout(completeTimer);
    }
  }, [currentLine, bootLines.length, onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="scanline" />
      <div className="max-w-2xl w-full px-8">
        <div className="flex items-center gap-3 mb-8">
          <Terminal className="w-8 h-8 text-cyan-400" />
          <h1 className="text-2xl font-bold orbitron neon-cyan">SYSTEM BOOT</h1>
        </div>
        <div className="space-y-3 font-mono">
          {lines.map((line, index) => (
            <div
              key={index}
              className="text-cyan-400 text-lg animate-pulse"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BootSequence;