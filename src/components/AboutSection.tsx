import React from 'react';
import { SPEAKER_DATA } from '../data/speakerData';
import { User, Award, MapPin, Phone, MessageSquare, Quote, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#FAF8F2] relative islamic-pattern-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-3">
            <span className="text-xs uppercase tracking-widest text-[#0B3D35] font-semibold">
              বক্তার পরিচিতি ও বার্তা
            </span>
            <div className="h-0.5 w-12 bg-[#C8A96B] mx-auto mt-1" />
          </div>
          <h2 className="font-serif-bengali text-3xl sm:text-4xl font-bold text-[#0B3D35] tracking-tight">
            পরিচিতি
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Main Editorial Text & Mission (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[#0B3D35]/10 shadow-sm relative">
              <Quote className="w-10 h-10 text-[#C8A96B]/25 absolute top-6 right-6 pointer-events-none" />
              
              <h3 className="font-serif-bengali text-xl sm:text-2xl font-bold text-[#0B3D35] mb-5 leading-snug">
                দাওয়াতি উদ্দেশ্য ও মূল দর্শন
              </h3>
              
              <p className="text-[#1F2926] text-base sm:text-lg leading-relaxed font-normal mb-6">
                “{SPEAKER_DATA.aboutText}”
              </p>

              <div className="pt-6 border-t border-[#0B3D35]/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {SPEAKER_DATA.corePrinciples.map((item, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex items-center gap-1.5 text-sm font-semibold text-[#0B3D35]">
                      <CheckCircle2 className="w-4 h-4 text-[#C8A96B] shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-[#1F2926]/75 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick trust statement banner */}
            <div className="bg-[#123C35] text-white p-6 sm:p-7 rounded-2xl border border-[#C8A96B]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left space-y-1">
                <p className="text-sm font-medium text-[#F3E5C8]">
                  কুরআন ও সুন্নাহভিত্তিক আলোচনা ও নির্ভরযোগ্য দিকনির্দেশনা
                </p>
                <p className="text-xs text-emerald-200/80">
                  সাতক্ষীরা জেলাসহ দেশের বিভিন্ন প্রান্তে ইসলামী মাহফিল ও দাওয়াতি অনুষ্ঠান
                </p>
              </div>
              <a
                href={SPEAKER_DATA.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-5 py-2.5 bg-[#C8A96B] hover:bg-[#D8BE85] text-[#0B3D35] text-xs font-semibold rounded-md transition-colors"
              >
                WhatsApp বার্তা পাঠান
              </a>
            </div>
          </div>

          {/* Elegant Information Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-white rounded-2xl border-2 border-[#C8A96B]/35 shadow-md p-8 sm:p-9 flex flex-col justify-between h-full relative overflow-hidden">
              
              {/* Top Accent Strip */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#0B3D35] via-[#C8A96B] to-[#0B3D35]" />

              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#0B3D35]/10">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#0B3D35]/70">
                    অফিসিয়াল তথ্য কার্ড
                  </span>
                  <span className="text-xs text-[#C8A96B] font-english-display">
                    Speaker Credentials
                  </span>
                </div>

                {/* Speaker Portrait Header */}
                <div className="flex items-center gap-4 mb-6 p-3 bg-[#FAF8F2] rounded-xl border border-[#0B3D35]/10">
                  <img
                    src={SPEAKER_DATA.photoUrl}
                    alt={SPEAKER_DATA.name}
                    className="w-16 h-16 rounded-full object-cover object-top border-2 border-[#C8A96B] shadow-sm"
                  />
                  <div>
                    <h4 className="font-serif-bengali font-bold text-base text-[#0B3D35]">
                      {SPEAKER_DATA.name}
                    </h4>
                    <p className="text-xs text-[#C8A96B] font-medium">
                      {SPEAKER_DATA.title}
                    </p>
                    <span className="text-[11px] text-[#1F2926]/70">
                      {SPEAKER_DATA.location}
                    </span>
                  </div>
                </div>

                {/* Information Rows */}
                <dl className="space-y-6">
                  {/* Name */}
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-[#FAF8F2] border border-[#0B3D35]/10 text-[#0B3D35] shrink-0 mt-0.5">
                      <User className="w-5 h-5 text-[#C8A96B]" />
                    </div>
                    <div>
                      <dt className="text-xs text-[#1F2926]/60 font-medium">নাম</dt>
                      <dd className="font-serif-bengali text-lg sm:text-xl font-bold text-[#0B3D35] mt-0.5">
                        {SPEAKER_DATA.name}
                      </dd>
                    </div>
                  </div>

                  {/* Identity */}
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-[#FAF8F2] border border-[#0B3D35]/10 text-[#0B3D35] shrink-0 mt-0.5">
                      <Award className="w-5 h-5 text-[#C8A96B]" />
                    </div>
                    <div>
                      <dt className="text-xs text-[#1F2926]/60 font-medium">পরিচয়</dt>
                      <dd className="text-base font-semibold text-[#1F2926] mt-0.5">
                        {SPEAKER_DATA.title}
                      </dd>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-[#FAF8F2] border border-[#0B3D35]/10 text-[#0B3D35] shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5 text-[#C8A96B]" />
                    </div>
                    <div>
                      <dt className="text-xs text-[#1F2926]/60 font-medium">ঠিকানা</dt>
                      <dd className="text-base font-medium text-[#1F2926] mt-0.5">
                        {SPEAKER_DATA.location}
                      </dd>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-[#FAF8F2] border border-[#0B3D35]/10 text-[#0B3D35] shrink-0 mt-0.5">
                      <Phone className="w-5 h-5 text-[#C8A96B]" />
                    </div>
                    <div>
                      <dt className="text-xs text-[#1F2926]/60 font-medium">মোবাইল নম্বর</dt>
                      <dd className="text-base font-bold text-[#0B3D35] mt-0.5 font-mono">
                        <a href={SPEAKER_DATA.callLink} className="hover:text-[#C8A96B] transition-colors">
                          {SPEAKER_DATA.mobile}
                        </a>
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>

              {/* Action Buttons inside Card */}
              <div className="mt-8 pt-6 border-t border-[#0B3D35]/10 grid grid-cols-2 gap-3">
                <a
                  href={SPEAKER_DATA.callLink}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#0B3D35] hover:bg-[#123C35] text-white text-xs font-semibold rounded-lg transition-colors shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C8A96B]" />
                  কল করুন
                </a>
                <a
                  href={SPEAKER_DATA.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#FAF8F2] hover:bg-emerald-50 border border-[#0B3D35]/20 text-[#0B3D35] text-xs font-semibold rounded-lg transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  WhatsApp
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
