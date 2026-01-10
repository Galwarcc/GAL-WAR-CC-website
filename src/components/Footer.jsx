import React from 'react';
import { Rocket, Twitter, Youtube, Mail } from 'lucide-react';
import StarfieldBackground from './StarfieldBackground';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-opacity-20 overflow-hidden" style={{
      background: '#10241E',
      borderColor: 'rgba(31, 107, 79, 0.3)',
    }}>
      <StarfieldBackground />
      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10" style={{ background: 'transparent' }}>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12" style={{ background: 'transparent' }}>
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{
                background: 'rgba(31, 107, 79, 0.2)',
                boxShadow: '0 0 30px rgba(201, 164, 92, 0.4)',
              }}>
                <Rocket className="w-7 h-7" style={{ color: '#C9A45C' }} />
              </div>
              <span
                className="text-2xl font-bold uppercase tracking-widest"
                style={{ 
                  fontFamily: 'Cinzel, serif',
                  color: '#E3C987',
                  textShadow: '0 0 20px rgba(227, 201, 135, 0.3)',
                }}
              >
                GAL WAR CC
              </span>
            </div>
            <p className="mb-6 leading-relaxed" style={{ color: '#C9D6CF' }}>
              Cosmic Conquest: Galactic War - The next generation of Battle Royale gaming. 
              Battle among the stars in the ultimate intergalactic showdown.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-all" style={{
                background: 'rgba(30, 111, 99, 0.15)',
                border: '1px solid rgba(30, 111, 99, 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(30, 111, 99, 0.3)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(110, 198, 174, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(30, 111, 99, 0.15)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <Twitter className="w-5 h-5" style={{ color: '#1E6F63' }} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-all" style={{
                background: 'rgba(30, 111, 99, 0.15)',
                border: '1px solid rgba(30, 111, 99, 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(30, 111, 99, 0.3)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(110, 198, 174, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(30, 111, 99, 0.15)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <Youtube className="w-5 h-5" style={{ color: '#1E6F63' }} />
              </a>
              <a href="#about" className="w-10 h-10 rounded-full flex items-center justify-center transition-all" style={{
                background: 'rgba(30, 111, 99, 0.15)',
                border: '1px solid rgba(30, 111, 99, 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(30, 111, 99, 0.3)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(110, 198, 174, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(30, 111, 99, 0.15)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <Mail className="w-5 h-5" style={{ color: '#1E6F63' }} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wider" style={{ 
              fontFamily: 'Cinzel, serif',
              color: '#1E6F63',
              textShadow: '0 0 15px rgba(110, 198, 174, 0.4)',
            }}>Game</h3>
            <ul className="space-y-2">
              {['About', 'Features', 'Races', 'Map'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="transition-colors" style={{ color: '#5E6E68' }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#1E6F63';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#5E6E68';
                  }}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wider" style={{ 
              fontFamily: 'Cinzel, serif',
              color: '#1E6F63',
              textShadow: '0 0 15px rgba(110, 198, 174, 0.4)',
            }}>Community</h3>
            <ul className="space-y-2">
              {['Discord', 'Forums', 'Support'].map((link) => (
                <li key={link}>
                  <a href="#" className="transition-colors" style={{ color: '#5E6E68' }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#1E6F63';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#5E6E68';
                  }}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t" style={{ borderColor: 'rgba(30, 111, 99, 0.2)' }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm" style={{ color: '#5E6E68' }}>
              © {currentYear} Gal War CC Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm" style={{ color: '#5E6E68' }}>Built with</span>
              <span className="text-sm font-bold" style={{ color: '#1E6F63' }}>Unreal Engine 5.3</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;