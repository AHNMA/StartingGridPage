import React from 'react';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { EPISODES, COLORS } from '../constants';

const LatestEpisodes: React.FC = () => {
  return (
    <section id="episodes" className="py-20 bg-[#1a1c1b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12 border-b border-gray-800 pb-4">
          <div>
            <h2 className="font-display text-4xl font-bold text-white uppercase italic">
              Aktuelle <span style={{ color: COLORS.accent }}>Ausgaben</span>
            </h2>
          </div>
          <a href="#" className="hidden sm:flex items-center text-gray-400 hover:text-[#cc191a] transition-colors">
            Alle Episoden <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EPISODES.map((episode) => (
            <div key={episode.id} className="group relative bg-[#272928] rounded-none overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 shadow-xl border-l-4 border-transparent hover:border-[#cc191a]">
              {/* Image Container with overlay */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#272928] to-transparent z-10" />
                <img 
                  src={episode.image} 
                  alt={episode.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20 flex gap-2">
                  {episode.tags.map(tag => (
                    <span key={tag} className="text-xs font-bold uppercase px-2 py-1 bg-[#cc191a] text-white rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative z-20">
                <div className="flex items-center text-xs text-gray-400 mb-3 gap-4 font-mono">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1 text-[#cc191a]" />
                    {episode.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1 text-[#cc191a]" />
                    {episode.duration}
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-3 leading-tight group-hover:text-[#cc191a] transition-colors">
                  {episode.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                  {episode.description}
                </p>

                <button className="w-full py-3 bg-[#1a1c1b] border border-gray-700 hover:border-[#cc191a] text-white text-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center group-hover:bg-[#cc191a] group-hover:text-white">
                  Jetzt Anhören
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center sm:hidden">
          <a href="#" className="inline-flex items-center text-white hover:text-[#cc191a] font-bold uppercase">
            Alle Episoden anzeigen <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestEpisodes;