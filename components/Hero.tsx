import React from 'react';
import { Play } from 'lucide-react';
import { LINKS, COLORS } from '../constants';
import SpeedLines from './SpeedLines';

const Hero: React.FC = () => {
  const primaryLink = LINKS.find(l => l.name === 'Spotify') || LINKS[0];

  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden asphalt-texture">
      {/* Background Visuals */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1c1b] via-[#1a1c1b]/90 to-[#cc191a]/20 z-0" />
      <SpeedLines />
      
      {/* Decorative Track Element */}
      <div className="absolute -right-20 top-1/4 w-[600px] h-[600px] border-[40px] border-[#272928] rounded-full opacity-30 transform rotate-12 blur-sm pointer-events-none" />
      <div className="absolute -left-20 bottom-0 w-[400px] h-[400px] border-[20px] border-[#cc191a] rounded-full opacity-10 transform -rotate-12 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <div className="inline-block mb-8 px-4 py-1 border border-[#cc191a] rounded-full bg-[#cc191a]/10 backdrop-blur-sm animate-pulse">
          <span className="text-[#cc191a] font-bold text-sm tracking-widest uppercase">Jede Woche Neu</span>
        </div>
        
        {/* Main Logo */}
        <div className="mb-6 relative group">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-[#cc191a] blur-[80px] opacity-20 rounded-full animate-pulse pointer-events-none"></div>
          
          <img 
            src="/logo.png" 
            alt="Starting Grid Logo" 
            className="relative z-10 w-64 md:w-80 lg:w-[450px] h-auto drop-shadow-2xl transform hover:scale-105 hover:rotate-2 transition-all duration-500 ease-out" 
          />
        </div>
        
        <h1 className="sr-only">Starting Grid</h1>

        <p className="font-display text-xl md:text-2xl text-[#cc191a] font-bold uppercase tracking-widest mb-8">
          Der Formel 1 Podcast
        </p>
        
        <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-10 leading-relaxed">
          Analysen, News und Meinungen zur Königsklasse des Motorsports. 
          Direkt, ehrlich und immer aus eigener Kraft.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href={primaryLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-[#cc191a] text-white font-bold uppercase tracking-wider clip-skew hover:bg-white hover:text-[#cc191a] transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(204,25,26,0.5)]"
          >
            <div className="flex items-center gap-2 transform skew-x-[0deg]">
              <Play className="fill-current h-5 w-5" />
              <span>Jetzt Hören</span>
            </div>
          </a>
          
          <a 
            href="#episodes"
            className="px-8 py-4 border-2 border-white/20 text-white font-bold uppercase tracking-wider clip-skew hover:border-[#cc191a] hover:bg-[#272928] transition-all duration-300"
          >
            Aktuelle Folgen
          </a>
        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#1a1c1b] to-transparent z-10" />
    </div>
  );
};

export default Hero;