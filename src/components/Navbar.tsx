import React, { useState, useEffect } from 'react';
import { SPEAKER_DATA } from '../data/speakerData';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';

interface NavbarProps {
  onOpenContactModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContactModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'হোম', href: '#hero' },
    { name: 'পরিচিতি', href: '#about' },
    { name: 'আলোচনা', href: '#lectures' },
    { name: 'বিষয়সমূহ', href: '#topics' },
    { name: 'আমন্ত্রণ', href: '#invitation' },
    { name: 'যোগাযোগ', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B3D35]/95 shadow-md backdrop-blur-md border-b border-[#C8A96B]/20 py-3'
          : 'bg-[#0B3D35] border-b border-[#C8A96B]/15 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single Brand Wordmark */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-2 text-white hover:text-[#C8A96B] transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A96B] rounded"
          >
            <span className="font-serif-bengali text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-[#F3E5C8] transition-colors whitespace-nowrap">
              {SPEAKER_DATA.shortName}
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-emerald-100/90 hover:text-[#C8A96B] transition-colors whitespace-nowrap relative py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C8A96B] rounded"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-[#0B3D35] bg-[#C8A96B] hover:bg-[#D8BE85] rounded-md transition-colors shadow-sm whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              যোগাযোগ করুন
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={SPEAKER_DATA.callLink}
              className="p-2 text-[#C8A96B] hover:text-white transition-colors"
              aria-label="সরাসরি কল করুন"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-emerald-100 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A96B] rounded"
              aria-label="মেনু খুলুন"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0A332C] border-b border-[#C8A96B]/25 px-5 py-5 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-base font-medium text-emerald-100 hover:text-[#C8A96B] py-2 border-b border-emerald-900/60"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="w-full text-center py-2.5 px-4 text-sm font-semibold text-[#0B3D35] bg-[#C8A96B] hover:bg-[#D8BE85] rounded-md transition-colors"
            >
              যোগাযোগ করুন
            </a>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={SPEAKER_DATA.callLink}
                className="flex items-center justify-center gap-2 py-2 px-3 text-xs font-medium text-emerald-100 bg-emerald-900/60 rounded border border-emerald-700/50"
              >
                <Phone className="w-4 h-4 text-[#C8A96B]" />
                কল করুন
              </a>
              <a
                href={SPEAKER_DATA.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2 px-3 text-xs font-medium text-emerald-100 bg-emerald-900/60 rounded border border-emerald-700/50"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
