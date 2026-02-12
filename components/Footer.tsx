import React from 'react';
import { COLORS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f1010] border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8 md:mb-0">
             <img 
               src="/logo.png" 
               alt="Starting Grid" 
               className="h-16 w-auto opacity-90 hover:opacity-100 transition-opacity duration-300" 
             />
          </div>

          <div className="flex space-x-8">
            <a href="#" className="text-gray-400 hover:text-white text-sm uppercase tracking-widest transition-colors">Impressum</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm uppercase tracking-widest transition-colors">Datenschutz</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm uppercase tracking-widest transition-colors">Kontakt</a>
          </div>
        </div>

        <div className="text-center md:text-left border-t border-gray-900 pt-8">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Starting Grid Podcast. Alle Rechte vorbehalten.
            <br className="md:hidden" />
            <span className="hidden md:inline"> | </span>
            Designed for Speed.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;