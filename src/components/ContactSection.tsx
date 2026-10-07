import React, { useState } from 'react';
import { SPEAKER_DATA } from '../data/speakerData';
import { Phone, MessageSquare, MapPin, Copy, Check, UserCheck, Shield } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(SPEAKER_DATA.phoneRaw);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FAF8F2] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-block mb-3">
            <span className="text-xs uppercase tracking-widest text-[#0B3D35] font-semibold">
              সরাসরি যোগাযোগ
            </span>
            <div className="h-0.5 w-12 bg-[#C8A96B] mx-auto mt-1" />
          </div>
          <h2 className="font-serif-bengali text-3xl sm:text-4xl font-bold text-[#0B3D35] tracking-tight mb-3">
            যোগাযোগ
          </h2>
          <p className="text-base text-[#1F2926]/80 font-normal">
            মাহফিলের শিডিউল ও দাওয়াতি পরামর্শের জন্য সরাসরি যোগাযোগ করুন
          </p>
        </div>

        {/* Premium Contact Card */}
        <div className="bg-white rounded-2xl border-2 border-[#C8A96B]/40 shadow-xl overflow-hidden p-8 sm:p-12 relative">
          
          {/* Subtle background ornamentation */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#0B3D35]/5 rounded-bl-full pointer-events-none" />

          {/* Speaker Identity Info */}
          <div className="text-center space-y-3 mb-10 pb-8 border-b border-[#0B3D35]/10">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#C8A96B] mx-auto shadow-md">
              <img
                src={SPEAKER_DATA.photoUrl}
                alt={SPEAKER_DATA.name}
                className="w-full h-full object-cover object-top"
              />
            </div>

            <h3 className="font-serif-bengali text-2xl sm:text-3xl font-bold text-[#0B3D35] tracking-tight">
              {SPEAKER_DATA.name}
            </h3>

            <p className="text-base font-semibold text-[#C8A96B]">
              {SPEAKER_DATA.title}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-sm text-[#1F2926]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#0B3D35] shrink-0" />
                <span>{SPEAKER_DATA.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0B3D35] shrink-0" />
                <span className="font-mono font-semibold">{SPEAKER_DATA.mobile}</span>
              </div>
            </div>
          </div>

          {/* TWO LARGE HIGH-VISIBILITY BUTTONS */}
          <div className="space-y-4 max-w-lg mx-auto">
            {/* 1. Large Direct Call Button */}
            <a
              href={SPEAKER_DATA.callLink}
              className="w-full flex items-center justify-center gap-3 py-4 px-6 text-base sm:text-lg font-bold text-white bg-[#0B3D35] hover:bg-[#123C35] rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B3D35]"
            >
              <Phone className="w-6 h-6 text-[#C8A96B]" />
              <span>📞 কল করুন</span>
            </a>

            {/* 2. Large WhatsApp Button */}
            <a
              href={SPEAKER_DATA.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 py-4 px-6 text-base sm:text-lg font-bold text-[#0B3D35] bg-[#C8A96B] hover:bg-[#D8BE85] rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B3D35]"
            >
              <MessageSquare className="w-6 h-6 text-[#0B3D35]" />
              <span>WhatsApp-এ যোগাযোগ করুন</span>
            </a>

            {/* Quick Copy Action */}
            <div className="pt-2 text-center">
              <button
                onClick={handleCopyPhone}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#0B3D35] hover:text-[#C8A96B] transition-colors py-1 px-3 rounded hover:bg-[#FAF8F2]"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">নম্বর কপি হয়েছে ({SPEAKER_DATA.mobile})</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>মোবাইল নম্বর কপি করুন ({SPEAKER_DATA.mobile})</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Helpful Guidelines Card */}
          <div className="mt-10 pt-6 border-t border-[#0B3D35]/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#1F2926]/75">
            <div className="flex items-start gap-2">
              <UserCheck className="w-4 h-4 text-[#C8A96B] shrink-0 mt-0.5" />
              <span>মাহফিল আয়োজনের তারিখ নির্ধারণের পূর্বে অনুগ্রহ করে কল বা হোয়াটসঅ্যাপে শিডিউল নিশ্চিত করুন।</span>
            </div>
            <div className="flex items-start gap-2">
              <Shield className="w-4 h-4 text-[#C8A96B] shrink-0 mt-0.5" />
              <span>সাতক্ষীরা জেলাসহ সারাদেশে ধর্মীয় ওয়াজ মাহফিলের জন্য যোগাযোগ উন্মুক্ত।</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
