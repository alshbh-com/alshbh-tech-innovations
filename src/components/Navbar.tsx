
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed w-full z-50 transition-all duration-300 px-4 py-3 md:px-8',
        scrolled ? 'bg-dark-300/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img 
            src="public/lovable-uploads/efd76f76-9611-4e9d-ac28-f7c3646352c9.png" 
            alt="Alshbh Logo" 
            className="h-10 w-10 object-contain"
          />
          <span className="text-2xl font-bold text-gradient glow">Alshbh</span>
        </a>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <a href="#about" className="text-gray-300 hover:text-neon transition-colors">من نحن</a>
          <a href="#services" className="text-gray-300 hover:text-neon transition-colors">خدماتنا</a>
          <a href="#projects" className="text-gray-300 hover:text-neon transition-colors">مشاريعنا</a>
          <a href="#contact">
            <Button variant="outline" className="border-neon text-neon hover:bg-neon/10">
              تواصل معنا
            </Button>
          </a>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12h18M3 6h18M3 18h18"></path>
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark-200/95 backdrop-blur-md border-b border-white/10">
          <div className="flex flex-col p-4 gap-4 text-right">
            <a href="#about" className="text-gray-300 py-2 hover:text-neon transition-colors">من نحن</a>
            <a href="#services" className="text-gray-300 py-2 hover:text-neon transition-colors">خدماتنا</a>
            <a href="#projects" className="text-gray-300 py-2 hover:text-neon transition-colors">مشاريعنا</a>
            <a href="#contact">
              <Button variant="outline" className="w-full border-neon text-neon hover:bg-neon/10">
                تواصل معنا
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
