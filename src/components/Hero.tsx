import React, { useState } from 'react';
import { SPEAKER_DATA } from '../data/speakerData';
import { MapPin, Phone, MessageSquare, ArrowDown, Camera, Check, RefreshCw } from 'lucide-react';

export const Hero: React.FC = () => {
  const [photoUrl, setPhotoUrl] = useState<string>(SPEAKER_DATA.photoUrl || '');
  const [imgError, setImgError] = useState(false);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoUrl(reader.result as string);
        setImgError(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative islamic-pattern-dark text-white pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Subtle atmospheric ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C8A96B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-emerald-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs (7 cols on desktop) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#123C35] border border-[#C8A96B]/30 rounded-full text-xs font-medium text-[#F3E5C8] tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96B]"></span>
              <span>{SPEAKER_DATA.heroTagline}</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif-bengali text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.25] text-balance">
              {SPEAKER_DATA.name}
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-emerald-100/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {SPEAKER_DATA.heroSubtitle}
            </p>

            {/* Location marker */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-[#E0C792] pt-1">
              <MapPin className="w-4 h-4 text-[#C8A96B] shrink-0" />
              <span>{SPEAKER_DATA.location}</span>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {/* Primary button */}
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-[#0B3D35] bg-[#C8A96B] hover:bg-[#D8BE85] transition-all duration-200 rounded-md shadow-lg shadow-black/20 flex items-center justify-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>যোগাযোগ করুন</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </button>

              {/* Secondary button */}
              <button
                onClick={() => scrollToSection('lectures')}
                className="w-full sm:w-auto px-7 py-3.5 text-sm font-medium text-emerald-100 bg-[#123C35]/80 hover:bg-[#123C35] border border-[#C8A96B]/35 hover:border-[#C8A96B]/70 transition-all duration-200 rounded-md flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A96B]"
              >
                <span>আলোচনা দেখুন</span>
              </button>
            </div>

            {/* Quick contact direct access row */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-emerald-200/80">
              <span className="text-emerald-300/60 font-serif-bengali">সরাসরি যোগাযোগ:</span>
              <a
                href={SPEAKER_DATA.callLink}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#0A332C] hover:bg-[#123C35] border border-emerald-700/40 text-emerald-100 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C8A96B]" />
                <span>{SPEAKER_DATA.phoneRaw}</span>
              </a>
              <a
                href={SPEAKER_DATA.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#0A332C] hover:bg-[#123C35] border border-emerald-700/40 text-emerald-100 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#C8A96B]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Premium Portrait Placeholder (5 cols on desktop) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer decorative gold halo */}
              <div className="absolute -inset-2 bg-gradient-to-b from-[#C8A96B]/25 via-transparent to-[#C8A96B]/15 rounded-3xl blur-md" />

              {/* Main portrait container with subtle gold border */}
              <div className="relative bg-[#123C35] border-2 border-[#C8A96B]/60 rounded-2xl shadow-2xl overflow-hidden p-3">
                {/* Inner double border Islamic arch framing */}
                <div className="relative aspect-[3/4] w-full bg-[#082823] rounded-xl overflow-hidden border border-[#C8A96B]/30 flex flex-col items-center justify-between p-6">
                  
                  {/* Background architectural pattern hint */}
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C8A96B_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                  {photoUrl && !imgError ? (
                    /* Display Abdullah Al Mamun's Photo */
                    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden rounded-lg">
                      <img
                        src={photoUrl}
                        alt="এইচ এম আব্দুল্লাহ আল মামুন - ইসলামী বক্তা ও আলিম"
                        referrerPolicy="no-referrer"
                        onError={() => setImgError(true)}
                        className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                      />
                      
                      {/* Subtle gradient overlay at bottom for text contrast */}
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 text-center">
                        <span className="font-serif-bengali text-sm sm:text-base font-bold text-white block">
                          {SPEAKER_DATA.name}
                        </span>
                        <span className="text-[11px] text-[#E0C792] block">
                          {SPEAKER_DATA.title} • {SPEAKER_DATA.location}
                        </span>
                      </div>

                      {/* Photo change/reset button */}
                      <label className="absolute top-2.5 right-2.5 p-1.5 bg-black/60 hover:bg-black text-[#F3E5C8] rounded-full text-xs flex items-center justify-center backdrop-blur-sm cursor-pointer shadow border border-[#C8A96B]/40 transition-colors" title="ছবি পরিবর্তন বা আপডেট করুন">
                        <Camera className="w-3.5 h-3.5" />
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handlePhotoUpload}
                          className="hidden"
                        />
                      </label>
                    </div>
                  ) : (
                    /* Elegant Fallback Monogram Frame */
                    <>
                      {/* Top Islamic Arch Header Ornament */}
                      <div className="relative z-10 w-full flex flex-col items-center">
                        <div className="w-16 h-1 bg-[#C8A96B]/60 rounded-full mb-3" />
                        <span className="text-[11px] uppercase tracking-widest text-[#C8A96B] font-english-display">
                          Official Portrait Frame
                        </span>
                      </div>

                      {/* Center Monogram / Islamic Seal */}
                      <div className="relative z-10 flex flex-col items-center my-auto space-y-4">
                        <div className="relative w-28 h-28 rounded-full border-2 border-[#C8A96B]/70 bg-[#0B3D35] flex items-center justify-center shadow-inner group">
                          <div className="absolute inset-2 border border-[#C8A96B]/30 rotate-45 pointer-events-none" />
                          <div className="relative text-center">
                            <span className="font-serif-bengali text-2xl font-bold text-[#F3E5C8]">
                              আ.ম.
                            </span>
                            <span className="block text-[9px] text-[#C8A96B] tracking-wider mt-0.5 font-english-display">
                              EST. 2026
                            </span>
                          </div>
                        </div>

                        <div className="text-center space-y-1">
                          <h3 className="font-serif-bengali text-lg font-semibold text-white">
                            {SPEAKER_DATA.name}
                          </h3>
                          <p className="text-xs text-[#E0C792]">
                            {SPEAKER_DATA.title}
                          </p>
                          <p className="text-[11px] text-emerald-200/70">
                            {SPEAKER_DATA.location}
                          </p>
                        </div>
                      </div>

                      {/* Bottom placeholder notice & interactive upload helper */}
                      <div className="relative z-10 w-full pt-4 border-t border-[#C8A96B]/20 text-center space-y-2">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black/30 rounded border border-[#C8A96B]/20 text-[11px] text-emerald-200/90">
                          <Check className="w-3 h-3 text-[#C8A96B]" />
                          <span>প্রতিকৃতি ফ্রেম (বক্তার ছবি)</span>
                        </div>

                        <div className="pt-1">
                          <label className="cursor-pointer inline-flex items-center gap-1.5 text-xs text-[#C8A96B] hover:text-[#F3E5C8] transition-colors py-1 px-3 rounded hover:bg-emerald-900/40">
                            <Camera className="w-3.5 h-3.5" />
                            <span>ছবি আপলোড করতে ক্লিক করুন</span>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handlePhotoUpload}
                              className="hidden"
                            />
                          </label>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Subtle caption beneath portrait frame */}
                <div className="mt-2.5 px-2 flex items-center justify-between text-[11px] text-emerald-200/80">
                  <span className="font-serif-bengali">{SPEAKER_DATA.name}</span>
                  <span className="text-[#C8A96B] font-serif-bengali">{SPEAKER_DATA.location}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
