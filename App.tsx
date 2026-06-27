import { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import PressClippings from './components/PressClippings';
import Awards from './components/Awards';
import ShortFilms from './components/ShortFilms';
import Contact from './components/Contact';
import { Film, ArrowUp, Mail, Phone, ExternalLink } from 'lucide-react';

export default function App() {
  // Simple listener to scroll back to top of specific sections
  const handleWatchWork = () => {
    document.getElementById('films')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleStory = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#030303] text-zinc-100 font-sans antialiased overflow-x-hidden selection:bg-brand-red selection:text-white">
      {/* Absolute Film Grain/Vignette Overlay */}
      <div className="fixed inset-0 pointer-events-none z-40 bg-[linear-gradient(to_bottom,transparent_80%,rgba(3,3,3,0.95)_100%)]" />
      
      {/* Main Core View Modules */}
      <main>
        <Hero onWatchClick={handleWatchWork} onStoryClick={handleStory} />
        <About />
        <PressClippings />
        <Awards />
        <ShortFilms />
        <Contact />
      </main>

      {/* Cinematic Elegant Footer */}
      <footer className="relative bg-[#020202] border-t border-zinc-900/60 py-16 text-zinc-500 text-xs font-mono">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-12">
          
          {/* Brand/Credits column */}
          <div className="flex flex-col gap-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-zinc-300 font-display uppercase tracking-wider text-base">
              <Film size={14} className="text-brand-red" />
              <span>BABUMON ANAKOTTOOR</span>
            </div>
            <p className="max-w-xs text-zinc-500 font-light leading-relaxed font-sans text-xs">
              A celebration of independent voice, climate awareness, and raw cinematic storytelling from Trivandrum, Kerala.
            </p>
          </div>

          {/* Sub Navigation */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 uppercase tracking-widest text-[10px]">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#press" className="hover:text-white transition-colors">Press Recognition</a>
            <a href="#awards" className="hover:text-white transition-colors">Honours</a>
            <a href="#films" className="hover:text-white transition-colors">Screening Room</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Quick Line / Copyright */}
          <div className="flex flex-col items-center md:items-end gap-2 text-[10px] uppercase text-zinc-600">
            <span>© 2026 BABUMON ANAKOTTOOR</span>
            <span>All rights reserved • Crafted with Conviction</span>
          </div>

        </div>

        {/* Horizontal footer frame block */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-12 pt-8 border-t border-zinc-900/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-[9px] text-zinc-600">
          <span>PORTFOLIO CODE VERSION: 2.1.0 • SHOT IN FULL HD</span>
          <div className="flex items-center gap-6">
            <a href="mailto:babumonyah@gmail.com" className="hover:text-zinc-400 flex items-center gap-1">Email <Mail size={10} /></a>
            <a href="tel:8547757997" className="hover:text-zinc-400 flex items-center gap-1">Phone <Phone size={10} /></a>
          </div>
        </div>
      </footer>

      {/* Floating Action: Back To Top Button */}
      <button 
        onClick={handleScrollToTop}
        className="fixed bottom-6 right-6 z-40 p-3 bg-zinc-950/80 border border-zinc-800 hover:border-brand-red text-zinc-400 hover:text-white transition-all rounded-full cursor-pointer backdrop-blur-md hover:scale-110 shadow-xl"
        title="Scroll to Top"
      >
        <ArrowUp size={16} />
      </button>
    </div>
  );
}
