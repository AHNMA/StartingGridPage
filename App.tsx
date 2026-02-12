import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LatestEpisodes from './components/LatestEpisodes';
import Hosts from './components/Hosts';
import SocialHub from './components/SocialHub';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#1a1c1b] text-[#f1f1f1] selection:bg-[#cc191a] selection:text-white scroll-smooth">
      <Navbar />
      
      <main>
        <Hero />
        <LatestEpisodes />
        <Hosts />
        <SocialHub />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;