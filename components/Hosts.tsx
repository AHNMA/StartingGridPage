import React from 'react';
import { Twitter, Instagram } from 'lucide-react';
import { HOSTS, COLORS } from '../constants';

const Hosts: React.FC = () => {
  return (
    <section id="hosts" className="py-24 bg-[#272928] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1a1c1b] transform -skew-x-12 translate-x-32 hidden lg:block pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase italic">
            Die <span style={{ color: COLORS.accent }}>Hosts</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Die Stimmen hinter Starting Grid. Kompetent, leidenschaftlich und immer nah am Geschehen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          {HOSTS.map((host, index) => (
            <div key={host.name} className={`relative group ${index % 2 !== 0 ? 'md:mt-20' : ''}`}>
              {/* Host Card */}
              <div className="relative">
                {/* Photo Frame */}
                <div className="relative h-[500px] w-full clip-racer bg-gray-800 overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(204,25,26,0.3)]">
                  <div className="absolute inset-0 bg-[#cc191a] mix-blend-overlay opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10" />
                  <img 
                    src={host.image} 
                    alt={host.name} 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                  />
                  
                  {/* Overlay Info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-8 pt-24 z-20">
                    <h3 className="font-display text-3xl font-bold text-white uppercase italic mb-1">
                      {host.name}
                    </h3>
                    <p className="text-[#cc191a] font-bold text-sm tracking-wider uppercase mb-4">
                      {host.role}
                    </p>
                    
                    <div className="flex space-x-4">
                      {host.socials.twitter && (
                        <a 
                          href={`https://twitter.com/${host.socials.twitter}`} 
                          target="_blank" 
                          rel="noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <Twitter className="h-5 w-5" />
                        </a>
                      )}
                      {host.socials.instagram && (
                        <a 
                          href={`https://instagram.com/${host.socials.instagram}`} 
                          target="_blank" 
                          rel="noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <Instagram className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-t-4 border-r-4 border-[#cc191a] rounded-tr-3xl pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-4 border-l-4 border-[#cc191a] rounded-bl-3xl pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hosts;