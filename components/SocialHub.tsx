import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { LINKS, COLORS } from '../constants';
import { SocialLink } from '../types';

const SocialCard: React.FC<{ link: SocialLink }> = ({ link }) => (
  <a
    href={link.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center justify-between p-6 bg-[#272928] border border-gray-800 hover:border-[#cc191a] transition-all duration-300 hover:bg-[#1a1c1b]"
  >
    <div className="flex items-center gap-4">
      <div className="p-3 bg-[#1a1c1b] rounded-lg group-hover:bg-[#cc191a] transition-colors duration-300">
        <link.icon className="h-6 w-6 text-white" />
      </div>
      <div>
        <h4 className="font-display font-bold text-lg text-white uppercase">{link.name}</h4>
        <span className="text-xs text-gray-500 uppercase tracking-widest group-hover:text-[#cc191a]">
          {link.category === 'platform' ? 'Hören' : link.category === 'community' ? 'Join' : 'Follow'}
        </span>
      </div>
    </div>
    <ArrowUpRight className="h-5 w-5 text-gray-600 group-hover:text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
  </a>
);

const SocialHub: React.FC = () => {
  const platforms = LINKS.filter(l => l.category === 'platform');
  const socials = LINKS.filter(l => l.category === 'social');
  const community = LINKS.filter(l => l.category === 'community');

  return (
    <section id="community" className="py-24 bg-[#1a1c1b] relative asphalt-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-white uppercase italic">
            Connect <span className="text-[#cc191a]">Grid</span>
          </h2>
          <p className="mt-4 text-gray-400">
            Werde Teil der Community und verpasse keine Updates mehr.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Column 1: Platforms */}
          <div className="space-y-4">
            <h3 className="font-display text-xl text-white mb-6 pl-2 border-l-4 border-[#cc191a]">
              Podcast Plattformen
            </h3>
            <div className="flex flex-col gap-4">
              {platforms.map(link => <SocialCard key={link.name} link={link} />)}
            </div>
          </div>

          {/* Column 2: Socials */}
          <div className="space-y-4">
            <h3 className="font-display text-xl text-white mb-6 pl-2 border-l-4 border-[#cc191a]">
              Social Media
            </h3>
            <div className="flex flex-col gap-4">
              {socials.map(link => <SocialCard key={link.name} link={link} />)}
            </div>
          </div>

          {/* Column 3: Community */}
          <div className="space-y-4">
            <h3 className="font-display text-xl text-white mb-6 pl-2 border-l-4 border-[#cc191a]">
              Community Groups
            </h3>
            <div className="flex flex-col gap-4">
              {community.map(link => <SocialCard key={link.name} link={link} />)}
            </div>
            
            {/* Newsletter / CTA Box */}
            <div className="mt-8 p-6 bg-gradient-to-br from-[#cc191a] to-red-900 rounded-lg text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
              <div className="relative z-10">
                <h4 className="font-display font-bold text-xl text-white mb-2">Live Support?</h4>
                <p className="text-white/80 text-sm mb-4">Diskutiere live mit uns während den Rennen im Discord.</p>
                <a href="https://discord.gg/aRaNvy9Qch" className="inline-block px-6 py-2 bg-white text-[#cc191a] font-bold rounded hover:bg-gray-100 transition-colors">
                  Join Discord
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialHub;