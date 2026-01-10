import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Badge } from './ui/badge';
import { MapPin, AlertTriangle, Package, Zap } from 'lucide-react';

const MapAreaModal = ({ area, isOpen, onClose }) => {
  if (!area) return null;

  const getRiskColor = (risk) => {
    const colors = {
      'Low': { bg: 'rgba(0, 255, 65, 0.2)', border: 'rgba(0, 255, 65, 0.8)', text: '#00ff41' },
      'Medium': { bg: 'rgba(255, 221, 0, 0.2)', border: 'rgba(255, 221, 0, 0.8)', text: '#ffdd00' },
      'High': { bg: 'rgba(255, 107, 0, 0.2)', border: 'rgba(255, 107, 0, 0.8)', text: '#ff6b00' },
      'Critical': { bg: 'rgba(255, 0, 0, 0.2)', border: 'rgba(255, 0, 0, 0.8)', text: '#ff0000' },
      'Extreme': { bg: 'rgba(255, 0, 100, 0.2)', border: 'rgba(255, 0, 100, 0.8)', text: '#ff0064' },
    };
    return colors[risk] || colors['Medium'];
  };

  const riskColors = getRiskColor(area.risk);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-black/95 border-2 max-w-2xl" style={{
        borderColor: riskColors.border,
        boxShadow: `0 0 40px ${riskColors.bg}`,
      }}>
        <DialogHeader>
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <DialogTitle className="text-3xl orbitron mb-2" style={{ 
                color: riskColors.text,
                textShadow: `0 0 20px ${riskColors.bg}`,
              }}>
                {area.name}
              </DialogTitle>
              <DialogDescription className="text-gray-300 text-lg">
                {area.description}
              </DialogDescription>
            </div>
            <Badge className="ml-4 text-lg px-4 py-2" style={{
              background: riskColors.bg,
              borderColor: riskColors.border,
              color: riskColors.text,
              border: '2px solid',
            }}>
              {area.risk}
            </Badge>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Loot */}
          <div className="p-4 rounded-lg" style={{
            background: 'rgba(0, 255, 65, 0.05)',
            border: '1px solid rgba(0, 255, 65, 0.3)',
          }}>
            <div className="flex items-center gap-2 mb-3">
              <Package className="w-5 h-5" style={{ color: '#00ff41' }} />
              <h3 className="font-bold orbitron" style={{ color: '#00ff41' }}>Available Loot</h3>
            </div>
            <p className="text-gray-300">{area.loot}</p>
          </div>

          {/* Features */}
          <div className="p-4 rounded-lg" style={{
            background: 'rgba(255, 221, 0, 0.05)',
            border: '1px solid rgba(255, 221, 0, 0.3)',
          }}>
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5" style={{ color: '#ffdd00' }} />
              <h3 className="font-bold orbitron" style={{ color: '#ffdd00' }}>Key Features</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {area.features.map((feature, index) => (
                <Badge key={index} variant="outline" style={{
                  borderColor: 'rgba(255, 221, 0, 0.5)',
                  color: '#ffdd00',
                  background: 'rgba(255, 221, 0, 0.1)',
                }}>
                  {feature}
                </Badge>
              ))}
            </div>
          </div>

          {/* Tactical Info */}
          <div className="p-4 rounded-lg" style={{
            background: 'rgba(0, 217, 255, 0.05)',
            border: '1px solid rgba(0, 217, 255, 0.3)',
          }}>
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-5 h-5" style={{ color: '#00d9ff' }} />
              <h3 className="font-bold orbitron" style={{ color: '#00d9ff' }}>Tactical Assessment</h3>
            </div>
            <p className="text-gray-300">
              {area.risk === 'Extreme' && 'Maximum danger zone. Only enter if fully equipped. High-risk, high-reward area with infected zones.'}
              {area.risk === 'Critical' && 'Extremely dangerous area with heavy enemy presence. Coordinate with squad before engaging.'}
              {area.risk === 'High' && 'Significant combat expected. Ensure adequate resources and backup before entering.'}
              {area.risk === 'Medium' && 'Moderate threat level. Suitable for mid-game looting and strategic positioning.'}
              {area.risk === 'Low' && 'Relatively safe for early-game looting. Good starting position for new drops.'}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MapAreaModal;