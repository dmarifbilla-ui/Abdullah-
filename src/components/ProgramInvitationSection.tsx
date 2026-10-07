import React, { useState } from 'react';
import { SPEAKER_DATA } from '../data/speakerData';
import { Phone, MessageSquare, Calendar, Send, Copy, Check, MapPin, Sparkles } from 'lucide-react';

export const ProgramInvitationSection: React.FC = () => {
  const [organizerName, setOrganizerName] = useState('');
  const [phone, setPhone] = useState('');
  const [programDate, setProgramDate] = useState('');
  const [location, setLocation] = useState('');
  const [programType, setProgramType] = useState('ওয়াজ মাহফিল');
  const [copied, setCopied] = useState(false);

  const getComposedMessage = () => {
    const org = organizerName.trim() || 'আমাদের মাহফিল পরিচালনা কমিটি';
    const loc = location.trim() || 'স্থান উল্লেখ করা হবে';
    const date = programDate.trim() || 'নির্দিষ্ট তারিখে';
    const type = programType;
    const contactPhone = phone.trim() ? `\nযোগাযোগের ফোন: ${phone.trim()}` : '';

    return `আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহ।
সম্মানিত এইচ এম আব্দুল্লাহ আল মামুন সাহেব,

আমরা ${org}-এর পক্ষ থেকে আগামী ${date} তারিখে ${loc}-এ একটি "${type}" আয়োজন করতে আগ্রহী। উক্ত অনুষ্ঠানে আপনার মূল্যবান তাশরিফ ও কুরআন-সুন্নাহর আলোকে আলোচনার জন্য সময় ও শিডিউল পেতে বিনীত অনুরোধ করছি।${contactPhone}

জাযাকাল্লাহু খাইরান।`;
  };

  const handleSendViaWhatsApp = () => {
    const text = encodeURIComponent(getComposedMessage());
    const url = `https://wa.me/${SPEAKER_DATA.whatsappNumber}?text=${text}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(getComposedMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="invitation" className="py-20 md:py-28 islamic-pattern-dark text-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C8A96B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#123C35] border border-[#C8A96B]/30 rounded-full text-xs font-medium text-[#F3E5C8] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A96B]" />
            <span>মাহফিল ও দাওয়াতি আমন্ত্রণ</span>
          </div>

          <h2 className="font-serif-bengali text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4 text-balance">
            ইসলামী অনুষ্ঠান ও আলোচনার জন্য যোগাযোগ করুন
          </h2>

          <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed font-normal max-w-2xl mx-auto">
            মাহফিল, ইসলামী অনুষ্ঠান, ধর্মীয় আলোচনা ও দাওয়াতি প্রোগ্রামের জন্য যোগাযোগ করতে পারেন।
          </p>
        </div>

        {/* High-visibility Primary CTA Buttons */}
        <div className="max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          {/* WhatsApp Button */}
          <a
            href={SPEAKER_DATA.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 text-sm sm:text-base font-semibold text-[#0B3D35] bg-[#C8A96B] hover:bg-[#D8BE85] rounded-xl shadow-lg shadow-black/25 transition-all transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <MessageSquare className="w-5 h-5" />
            <span>WhatsApp-এ যোগাযোগ করুন</span>
          </a>

          {/* Call Button */}
          <a
            href={SPEAKER_DATA.callLink}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 text-sm sm:text-base font-semibold text-white bg-[#123C35] hover:bg-[#1a4f46] border border-[#C8A96B]/50 hover:border-[#C8A96B] rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A96B]"
          >
            <Phone className="w-5 h-5 text-[#C8A96B]" />
            <span>কল করুন</span>
          </a>
        </div>

        {/* Interactive Program Invitation Planner for Organizers */}
        <div className="bg-[#123C35]/90 border border-[#C8A96B]/35 rounded-2xl p-6 sm:p-10 shadow-2xl backdrop-blur-sm max-w-3xl mx-auto">
          <div className="mb-6 pb-4 border-b border-emerald-800/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <h3 className="font-serif-bengali text-lg sm:text-xl font-bold text-[#F3E5C8]">
                আমন্ত্রণ বার্তা বা শিডিউল অনুরোধ তৈরি করুন
              </h3>
              <p className="text-xs text-emerald-200/80 mt-1">
                নিচের তথ্যগুলো পূরণ করে সরাসরি WhatsApp-এ বার্তা পাঠাতে পারেন
              </p>
            </div>
            <span className="text-[11px] font-english-display text-[#C8A96B] uppercase tracking-wider self-start sm:self-auto">
              Organizer Utility
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            {/* Committee Name */}
            <div>
              <label className="block text-xs font-medium text-emerald-200 mb-1.5">
                কমিটি / আয়োজক সংস্থার নাম
              </label>
              <input
                type="text"
                value={organizerName}
                onChange={(e) => setOrganizerName(e.target.value)}
                placeholder="যেমন: আল-হেরা ইসলামী যুব সংঘ"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#082823] border border-emerald-700/60 text-white placeholder-emerald-600/60 focus:outline-none focus:border-[#C8A96B]"
              />
            </div>

            {/* Contact Phone */}
            <div>
              <label className="block text-xs font-medium text-emerald-200 mb-1.5">
                আপনার যোগাযোগের মোবাইল নম্বর
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="01XXXXXXXXX"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#082823] border border-emerald-700/60 text-white placeholder-emerald-600/60 focus:outline-none focus:border-[#C8A96B]"
              />
            </div>

            {/* Proposed Date */}
            <div>
              <label className="block text-xs font-medium text-emerald-200 mb-1.5">
                মাহফিল / অনুষ্ঠানের প্রস্তাবিত তারিখ
              </label>
              <input
                type="text"
                value={programDate}
                onChange={(e) => setProgramDate(e.target.value)}
                placeholder="যেমন: ১৫ নভেম্বর, ২০২৬ (বাদ মাগরিব)"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#082823] border border-emerald-700/60 text-white placeholder-emerald-600/60 focus:outline-none focus:border-[#C8A96B]"
              />
            </div>

            {/* Program Type */}
            <div>
              <label className="block text-xs font-medium text-emerald-200 mb-1.5">
                অনুষ্ঠানের ধরণ
              </label>
              <select
                value={programType}
                onChange={(e) => setProgramType(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#082823] border border-emerald-700/60 text-white focus:outline-none focus:border-[#C8A96B]"
              >
                <option value="ওয়াজ মাহফিল">ওয়াজ মাহফিল</option>
                <option value="তাফসীরুল কুরআন মাহফিল">তাফসীরুল কুরআন মাহফিল</option>
                <option value="যুব সম্মেলন ও আলোচনা">যুব সম্মেলন ও আলোচনা</option>
                <option value="সিরাতুন্নবী (সা.) মাহফিল">সিরাতুন্নবী (সা.) মাহফিল</option>
                <option value="মসজিদ / মাদ্রাসা উদ্বোধনী আলোচনা">মসজিদ / মাদ্রাসা উদ্বোধনী আলোচনা</option>
              </select>
            </div>

            {/* Location (Full row) */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-medium text-emerald-200 mb-1.5">
                অনুষ্ঠানের স্থান (জেলা, উপজেলা ও গ্রাম/মাদ্রাসা প্রাঙ্গণ)
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="যেমন: শ্যামনগর, সাতক্ষীরা"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#082823] border border-emerald-700/60 text-white placeholder-emerald-600/60 focus:outline-none focus:border-[#C8A96B]"
              />
            </div>
          </div>

          {/* Form Action Buttons */}
          <div className="mt-6 pt-5 border-t border-emerald-800/80 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={handleSendViaWhatsApp}
              className="w-full sm:flex-1 py-3 px-5 bg-[#C8A96B] hover:bg-[#D8BE85] text-[#0B3D35] text-xs sm:text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors shadow-md"
            >
              <Send className="w-4 h-4" />
              <span>WhatsApp-এ সরাসরি পাঠান</span>
            </button>

            <button
              onClick={handleCopyMessage}
              className="w-full sm:w-auto py-3 px-5 bg-[#082823] hover:bg-[#061e1a] border border-emerald-700/80 text-emerald-200 text-xs sm:text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#C8A96B]" />
                  <span className="text-[#C8A96B]">বার্তা কপি হয়েছে!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>বার্তা কপি করুন</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
