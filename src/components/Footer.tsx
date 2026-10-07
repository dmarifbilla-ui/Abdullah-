import React from 'react';
import { SPEAKER_DATA } from '../data/speakerData';
import { MapPin, Phone, MessageSquare, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'হোম', href: '#hero' },
    { name: 'পরিচিতি', href: '#about' },
    { name: 'আলোচনা', href: '#lectures' },
    { name: 'বিষয়সমূহ', href: '#topics' },
    { name: 'যোগাযোগ', href: '#contact' },
  ];

  return (
    <footer className="bg-[#082823] text-white border-t border-[#C8A96B]/25 pt-16 pb-24 md:pb-16 islamic-pattern-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-emerald-900/80 items-start">
          
          {/* Col 1: Speaker Identity & Description (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif-bengali text-2xl font-bold tracking-tight text-[#F3E5C8]">
                {SPEAKER_DATA.name}
              </span>
            </div>

            <p className="text-sm font-semibold text-[#C8A96B]">
              {SPEAKER_DATA.title}
            </p>

            <p className="text-xs sm:text-sm text-emerald-200/80 max-w-md leading-relaxed">
              কুরআন ও সুন্নাহর আলোকে মানুষের ব্যক্তি, পরিবার ও সমাজ গঠনে নৈতিকতা ও সুন্দর জীবনযাপনের বার্তা প্রচার।
            </p>

            <div className="pt-2 space-y-2 text-xs text-emerald-300/90">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C8A96B] shrink-0" />
                <span>{SPEAKER_DATA.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C8A96B] shrink-0" />
                <a href={SPEAKER_DATA.callLink} className="hover:text-[#F3E5C8] font-mono transition-colors">
                  {SPEAKER_DATA.mobile}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-[#C8A96B] font-semibold">
              সাইট মেনু
            </h4>
            <ul className="space-y-2 text-sm text-emerald-200/80">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Quick Contact (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-wider text-[#C8A96B] font-semibold">
              জরুরি যোগাযোগ
            </h4>
            <div className="space-y-2.5">
              <a
                href={SPEAKER_DATA.callLink}
                className="flex items-center justify-center gap-2 py-2.5 px-4 bg-[#123C35] hover:bg-emerald-900 border border-[#C8A96B]/30 rounded-lg text-xs font-semibold text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C8A96B]" />
                <span>সরাসরি কল: {SPEAKER_DATA.phoneRaw}</span>
              </a>

              <a
                href={SPEAKER_DATA.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-4 bg-[#C8A96B] hover:bg-[#D8BE85] rounded-lg text-xs font-semibold text-[#0B3D35] transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp-এ বার্তা দিন</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-300/70">
          <p className="text-center sm:text-left">
            © ২০২৬ {SPEAKER_DATA.name}। সর্বস্বত্ব সংরক্ষিত।
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-emerald-300 hover:text-white transition-colors py-1 px-3 rounded hover:bg-emerald-900/40"
            aria-label="পৃষ্ঠার শুরুতে যান"
          >
            <span>উপরে যান</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#C8A96B]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
