"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, CircuitBoard } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={cn(
        "top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b py-3 fixed" 
          : "bg-transparent py-5 absolute"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between min-h-[64px]">
        <Link 
          href="/" 
          className="flex items-center space-x-2 text-xl font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md transition"
          onClick={() => setMobileMenuOpen(false)}
        >
          <CircuitBoard className="h-8 w-8 text-primary" />
          <span className="font-manrope">Raxxar</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-end w-full">
          {/* Join Waitlist button removed */}
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="focus-visible:ring-2 focus-visible:ring-primary/70"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-4 border-b md:hidden shadow-lg z-50">
            <nav className="flex flex-col space-y-4 items-center">
              {/* Join Waitlist button removed */}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}