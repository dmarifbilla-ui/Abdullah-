import React from 'react';
import { SPEAKER_DATA } from '../data/speakerData';
import { Phone, MessageSquare } from 'lucide-react';

export const MobileStickyBar: React.FC = () => {
  return (
    <aside
      aria-label="মোবাইল কুইক অ্যাকশন"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#082823]/95 backdrop-blur-md border-t border-[#C8A96B]/30 px-3 py-2 shadow-2xl"
    >
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        {/* Direct Call Button */}
        <a
          href={SPEAKER_DATA.callLink}
          className="h-11 flex items-center justify-center gap-2 px-3 bg-[#123C35] hover:bg-emerald-900 border border-[#C8A96B]/40 rounded-lg text-white text-xs font-bold transition-transform active:scale-95"
        >
          <Phone className="w-4 h-4 text-[#C8A96B] shrink-0" />
          <span className="truncate">কল করুন</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={SPEAKER_DATA.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="h-11 flex items-center justify-center gap-2 px-3 bg-[#C8A96B] hover:bg-[#D8BE85] rounded-lg text-[#0B3D35] text-xs font-bold transition-transform active:scale-95 shadow-sm"
        >
          <MessageSquare className="w-4 h-4 text-[#0B3D35] shrink-0" />
          <span className="truncate">WhatsApp</span>
        </a>
      </div>
    </aside>
  );
};
