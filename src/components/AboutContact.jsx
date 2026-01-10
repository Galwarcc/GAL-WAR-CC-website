import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Building, Mail, MessageSquare, Users, Calendar, Trophy } from 'lucide-react';
import { toast } from '../hooks/use-toast';
import StarfieldBackground from './StarfieldBackground';

const AboutContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: 'Thank you for your interest. We\'ll get back to you soon.',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="about" className="relative py-12 px-6 overflow-hidden" style={{ background: "#0B1A16" }}>
      <StarfieldBackground />
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{
        background: 'radial-gradient(circle, rgba(201, 164, 92, 0.15), transparent)',
      }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4" style={{ color: '#C9A45C' }}>
            <Building className="w-6 h-6" />
            <span className="text-body-small font-bold tracking-widest uppercase orbitron">Studio</span>
          </div>
          <h2 className="heading-section font-black orbitron mb-6" style={{ color: '#E3C987' }}>
            GAL WAR CC
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#C9D6CF' }}>
            Pioneering the future of intergalactic Battle Royale gaming.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* About Section */}
          <div className="space-y-8">
            <Card style={{ background: 'rgba(16, 36, 30, 0.7)', borderColor: 'rgba(201, 164, 92, 0.3)' }}>
              <CardHeader>
                <CardTitle className="text-3xl orbitron" style={{ color: '#E3C987' }}>Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p style={{ color: '#C9D6CF' }} className="leading-relaxed">
                  Gal War CC Pvt. Ltd. is dedicated to creating immersive, cutting-edge gaming experiences that push 
                  the boundaries of interactive entertainment. Cosmic Conquest: Galactic War represents our vision 
                  of the next generation of Battle Royale games.
                </p>
                <p style={{ color: '#5E6E68' }} className="leading-relaxed">
                  Built with Unreal Engine 5.3, our game combines innovative gameplay mechanics like the Terraform System 
                  with stunning visuals and deep strategic elements. We're committed to delivering a world-class gaming 
                  experience that challenges and thrills players.
                </p>
                
                <div className="pt-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5" style={{ color: '#1E6F63' }} />
                    <div>
                      <p className="text-body-small" style={{ color: '#9FB0AA' }}>Prototype Launch</p>
                      <p className="font-bold" style={{ color: '#1E6F63' }}>1 Year (PC)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5" style={{ color: '#2F8F7A' }} />
                    <div>
                      <p className="text-body-small" style={{ color: '#9FB0AA' }}>Target Players</p>
                      <p className="font-bold" style={{ color: '#2F8F7A' }}>100 Players Per Match</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Trophy className="w-5 h-5" style={{ color: '#4CAF8A' }} />
                    <div>
                      <p className="text-body-small" style={{ color: '#9FB0AA' }}>Game Engine</p>
                      <p className="font-bold" style={{ color: '#4CAF8A' }}>Unreal Engine 5.3</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card style={{ background: 'rgba(16, 36, 30, 0.7)', borderColor: 'rgba(201, 164, 92, 0.3)' }}>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Mail className="w-5 h-5" style={{ color: '#C9A45C' }} />
                  <CardTitle className="text-2xl orbitron" style={{ color: '#E3C987' }}>Get in Touch</CardTitle>
                </div>
                <CardDescription style={{ color: '#C9D6CF' }}>
                  Interested in partnerships, beta testing, or just want to say hi? Drop us a message!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-body-small font-medium mb-2 block" style={{ color: '#C9D6CF' }}>Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      style={{ 
                        background: 'rgba(11, 26, 22, 0.8)', 
                        borderColor: 'rgba(31, 107, 79, 0.4)', 
                        color: '#C9D6CF',
                      }}
                    />
                  </div>
                  <div>
                    <label className="text-body-small font-medium mb-2 block" style={{ color: '#C9D6CF' }}>Email</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      style={{ 
                        background: 'rgba(11, 26, 22, 0.8)', 
                        borderColor: 'rgba(31, 107, 79, 0.4)', 
                        color: '#C9D6CF',
                      }}
                    />
                  </div>
                  <div>
                    <label className="text-body-small font-medium mb-2 block" style={{ color: '#C9D6CF' }}>Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us what's on your mind..."
                      rows={5}
                      required
                      style={{ 
                        background: 'rgba(11, 26, 22, 0.8)', 
                        borderColor: 'rgba(31, 107, 79, 0.4)', 
                        color: '#C9D6CF',
                      }}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full orbitron font-bold uppercase tracking-wider"
                    style={{
                      background: 'linear-gradient(135deg, #1F6B4F 0%, #C9A45C 100%)',
                      border: '2px solid rgba(201, 164, 92, 0.6)',
                      color: '#FFFFFF',
                    }}
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContact;