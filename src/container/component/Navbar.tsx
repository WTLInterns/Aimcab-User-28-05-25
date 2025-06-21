/* eslint-disable @next/next/no-img-element */
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Check initial scroll position
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    if (!isMenuOpen) return;
    
    const handleClickOutside = (event) => {
      // Close menu if clicked outside the menu and not on the hamburger button
      if (isMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.hamburger-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Handle navigation with smooth scroll for section links
  const handleNavigation = (e, target) => {
    e.preventDefault();
    setIsMenuOpen(false);

    // Extract the ID from the target (remove leading '#' if present)
    const id = target.startsWith('#') ? target.substring(1) : target;

    if (pathname !== '/') {
      // If not on homepage, navigate to homepage with hash
      router.push(`/${target}`);
    } else {
      // If on homepage, smooth scroll to section
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Update URL without reload
        window.history.pushState({}, '', `#${id}`);
      }
    }
  };

  // Define navigation items
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/aboutus' },
    { name: 'Services', path: '#services' },
    { name: 'Contact', path: '/Contact' }
  ];

  return (
    <nav className={`h-18 w-full text-white sticky top-0 z-50 shadow-lg transition-all duration-300 ease-in-out backdrop-blur-sm ${
      pathname === '/' ? (scrolled ? 'bg-slate-800/95' : 'bg-transparent') : 'bg-slate-800/95'
    }`}>
      <div className="max-w-screen-xl  mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          onClick={() => setIsMenuOpen(false)}
          className="flex items-center text-2xl font-bold text-yellow-500 hover:text-yellow-400 transition-all duration-300 ease-in-out transform hover:scale-105 hover:rotate-1"
        >
          <img
            src="/images/logo-png.png"
            alt="AIMCAB Logo"
            className={`w-12 h-12 transform transition-all duration-300 ease-in-out hover:rotate-12 hover:scale-110 ${
              scrolled ? 'drop-shadow-lg' : 'drop-shadow-xl'
            }`}
          />
          <span className="ml-3 font-bold tracking-wider text-white">AIMCAB</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-10 font-semibold items-center">
        
          
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={(e) => {
                if (item.path === '/' && pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else if (item.path.startsWith('#')) {
                  handleNavigation(e, item.path);
                } else {
                  setIsMenuOpen(false);
                }
              }}
              className="text-lg transition-all duration-300 transform hover:scale-105 hover:translate-y-[-2px] relative group text-white hover:text-yellow-400"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-yellow-400"></span>
            </Link>
          ))}
            <a 
          href="/Callus"
            className="text-lg transition-all duration-300 transform hover:scale-105 hover:translate-y-[-2px] flex items-center gap-2 text-white hover:text-yellow-400"
          >
            <i className="fas fa-phone-alt fa-lg"></i> Call Us
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none hover:scale-110 transition-transform duration-300 text-white hamburger-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className={`block w-6 h-0.5 mb-1.5 transition-all duration-300 ${
            isMenuOpen ? 'rotate-45 translate-y-2 bg-yellow-400' : 'bg-white'
          }`}></span>
          <span className={`block w-6 h-0.5 mb-1.5 transition-all duration-300 ${
            isMenuOpen ? 'opacity-0' : 'bg-white'
          }`}></span>
          <span className={`block w-6 h-0.5 transition-all duration-300 ${
            isMenuOpen ? '-rotate-45 -translate-y-2 bg-yellow-400' : 'bg-white'
          }`}></span>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          className={`md:hidden fixed inset-0 bg-gray-900/95 backdrop-blur-sm transition-all duration-300 ease-in-out transform mobile-menu ${
            isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}
          style={{ paddingTop: '5rem', zIndex: 40 }}
        >
          {/* Close button in mobile menu */}
          <button
            className="absolute top-6 right-6 text-white hover:text-yellow-400 transition-all duration-300 transform"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="flex flex-col bg-gray-900/95  items-center py-8 space-y-8">
            <a 
              href="tel:9130030054" 
              className="text-white text-xl hover:text-yellow-400 transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
              onClick={() => setIsMenuOpen(false)}
            >
              <i className="fas fa-phone-alt fa-lg"></i> Call Us
            </a>
            
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={(e) => {
                  if (item.path === '/' && pathname === '/') {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setIsMenuOpen(false);
                  } else if (item.path.startsWith('#')) {
                    handleNavigation(e, item.path);
                  } else {
                    setIsMenuOpen(false);
                  }
                }}
                className="text-white text-xl hover:text-yellow-400 transition-all duration-300 transform hover:scale-105 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-yellow-400"></span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}