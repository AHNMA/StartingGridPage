import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { COLORS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Episoden', href: '#episodes' },
    { name: 'Hosts', href: '#hosts' },
    { name: 'Community', href: '#community' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b-2 border-[#cc191a]/50 bg-[#1a1c1b]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Brand */}
          <div className="flex-shrink-0 flex items-center cursor-pointer hover:scale-105 transition-transform duration-300">
            <img 
              src="/logo.png" 
              alt="Starting Grid" 
              className="h-12 w-auto md:h-14 drop-shadow-md" 
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-display uppercase text-sm font-bold text-gray-300 hover:text-[#cc191a] transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#272928] focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-[#1a1c1b] border-b border-[#cc191a]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="font-display uppercase block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-[#cc191a]/20"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;