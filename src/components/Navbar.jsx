import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Sparkles, Send, FileCode2, ExternalLink } from 'lucide-react';

/**
 * Navbar
 * Floating frosted-glass navbar fixed at top during scroll.
 * Features:
 * - Brand logo with cyber monogram `<ADH />`
 * - Clean links: 'About', 'Projects', 'Skills', 'Campus Life', 'Contact'
 * - Active/hover states with neon emerald glow
 * - Full responsive drawer for mobile devices
 * - Frosted glass backdrop blur (backdrop-blur-xl bg-[#0d1117]/80)
 */
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Campus Life', href: '#campus-life' },
    { name: 'Contact', href: '#contact' },
  ];

  // Track scroll position to adjust subtle navbar elevation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none">
      <nav
        className={`pointer-events-auto w-full max-w-6xl rounded-2xl transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0d1117]/85 backdrop-blur-xl border border-emerald-500/30 shadow-[0_12px_40px_rgba(0,0,0,0.7),0_0_20px_rgba(16,185,129,0.12)] py-2.5 px-4 sm:px-6'
            : 'bg-[#161b22]/75 backdrop-blur-lg border border-emerald-500/20 shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_12px_rgba(16,185,129,0.06)] py-3 px-4 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo & Cyber Monogram */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="A D Hansika Portfolio Home"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-[#0d1117] border border-emerald-500/40 group-hover:border-emerald-400 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all duration-300">
              <span className="font-mono text-xs font-bold text-emerald-400 group-hover:text-lime-300 transition-colors">
                &lt;H/&gt;
              </span>
              {/* Corner tech notch accent */}
              <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-lime-400 rounded-full" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-mono text-sm sm:text-base font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                  A D HANSIKA
                </span>
                <span className="text-[10px] font-mono px-1 py-0.2 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-500/25">
                  DEV
                </span>
              </div>
              <span className="text-[11px] font-mono text-[#8b949e] group-hover:text-emerald-400/80 transition-colors hidden sm:block">
                KSIT // 2ND YEAR
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveSection(link.name)}
                  className={`relative px-3.5 py-1.5 rounded-lg font-mono text-xs lg:text-sm font-medium tracking-wide transition-all duration-200 group ${
                    isActive
                      ? 'text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 shadow-[0_0_12px_rgba(16,185,129,0.15)]'
                      : 'text-[#c9d1d9] hover:text-emerald-300 hover:bg-emerald-500/5'
                  }`}
                >
                  <span className="text-lime-400/60 mr-1 text-[11px] font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                    #
                  </span>
                  {link.name}
                  {/* Subtle hover underline */}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-emerald-400 to-lime-400 group-hover:w-3/4 transition-all duration-300 rounded-full" />
                </a>
              );
            })}
          </div>

          {/* Right Action CTA (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="relative inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl font-mono text-xs font-semibold text-emerald-300 bg-emerald-950/40 border border-emerald-500/40 hover:border-emerald-400 hover:text-lime-300 hover:shadow-[0_0_18px_rgba(16,185,129,0.3)] transition-all duration-200"
            >
              <Send className="w-3.5 h-3.5 text-lime-400" />
              <span>Let's Connect</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-[#0d1117] border border-emerald-500/30 text-emerald-400 hover:text-lime-300 hover:border-emerald-400 focus:outline-none transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-emerald-500/20 flex flex-col gap-1.5 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.name);
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-between px-3.5 py-2 rounded-lg font-mono text-sm text-[#c9d1d9] hover:text-emerald-300 hover:bg-emerald-500/10 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="text-lime-400 text-xs">//</span>
                  <span>{link.name}</span>
                </div>
                <span className="text-xs text-emerald-500/50 font-mono">&gt;</span>
              </a>
            ))}

            <div className="pt-2 mt-1 border-t border-carbon-700/60 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-mono text-xs font-semibold text-[#0d1117] bg-emerald-400 hover:bg-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-colors"
              >
                <Send className="w-3.5 h-3.5 text-[#0d1117]" />
                <span>Let's Connect</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

