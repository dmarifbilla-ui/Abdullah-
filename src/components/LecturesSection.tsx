import React, { useState } from 'react';
import { SPEAKER_DATA, Lecture } from '../data/speakerData';
import { Play, Clock, Info } from 'lucide-react';
import { VideoModal } from './VideoModal';

export const LecturesSection: React.FC = () => {
  const [selectedLecture, setSelectedLecture] = useState<Lecture | null>(null);

  return (
    <section id="lectures" className="py-20 md:py-28 bg-[#FAF8F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block mb-3">
            <span className="text-xs uppercase tracking-widest text-[#0B3D35] font-semibold">
              ভিডিও ও বয়ান সংগ্রহ
            </span>
            <div className="h-0.5 w-12 bg-[#C8A96B] mx-auto mt-1" />
          </div>
          <h2 className="font-serif-bengali text-3xl sm:text-4xl font-bold text-[#0B3D35] tracking-tight mb-3">
            ইসলামী আলোচনা
          </h2>
          <p className="text-base sm:text-lg text-[#1F2926]/80 font-normal">
            কুরআন ও সুন্নাহর আলোকে গুরুত্বপূর্ণ কিছু আলোচনা
          </p>
        </div>

        {/* Informational banner about placeholder content */}
        <div className="mb-10 max-w-2xl mx-auto bg-amber-50/90 border border-amber-200/80 rounded-xl p-3.5 flex items-start gap-3 text-xs text-amber-900">
          <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>বিজ্ঞপ্তি:</strong> এখানে প্রদর্শিত ভিডিওসমূহ সম্পাদনাযোগ্য নমুনা (Placeholder)। বক্তার নিজস্ব ইউটিউব চ্যানেল বা ভিডিওর লিংক প্রাপ্তিসাপেক্ষে বাস্তব ভিডিও যুক্ত করা যাবে।
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SPEAKER_DATA.sampleLectures.map((lecture, index) => (
            <div
              key={lecture.id}
              className="bg-white rounded-2xl border border-[#0B3D35]/10 hover:border-[#C8A96B]/50 transition-all duration-300 shadow-sm hover:shadow-lg overflow-hidden flex flex-col group"
            >
              {/* Thumbnail Container */}
              <div
                className="relative aspect-video w-full bg-[#0B3D35] overflow-hidden cursor-pointer"
                onClick={() => setSelectedLecture(lecture)}
              >
                {/* Geometric Pattern Backdrop */}
                <div className="absolute inset-0 islamic-pattern-dark opacity-90 transition-transform duration-500 group-hover:scale-105" />

                {/* Subtle Islamic Arch Frame Silhouette */}
                <div className="absolute inset-4 border border-[#C8A96B]/25 rounded-lg flex items-center justify-center">
                  <div className="text-center p-4">
                    <span className="text-[11px] text-[#C8A96B] font-english-display uppercase tracking-widest block mb-1">
                      Islamic Lecture Series
                    </span>
                    <p className="font-serif-bengali text-base sm:text-lg font-bold text-[#F3E5C8] line-clamp-2 max-w-xs">
                      {lecture.title}
                    </p>
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-[11px] font-mono text-emerald-100 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#C8A96B]" />
                  <span>{lecture.duration}</span>
                </div>

                {/* Central Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/35 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-[#C8A96B] text-[#0B3D35] flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-200">
                    <Play className="w-6 h-6 ml-0.5 fill-[#0B3D35]" />
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Clean unboxed metadata with dot separator */}
                  <div className="flex items-center gap-2 text-xs text-[#0B3D35]/70 font-medium mb-3">
                    <span className="text-[#0B3D35] font-semibold">{lecture.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#C8A96B] font-medium">{lecture.duration}</span>
                    <span aria-hidden="true">·</span>
                    <span>{lecture.date}</span>
                  </div>

                  <h3 className="font-serif-bengali text-lg sm:text-xl font-bold text-[#0B3D35] leading-snug mb-2 group-hover:text-[#123C35] transition-colors">
                    {lecture.title}
                  </h3>

                  <p className="text-sm text-[#1F2926]/80 leading-relaxed mb-6 font-normal">
                    {lecture.description}
                  </p>
                </div>

                {/* CTA Button */}
                <div className="pt-4 border-t border-[#0B3D35]/10 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedLecture(lecture)}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#0B3D35] bg-[#FAF8F2] hover:bg-[#C8A96B] hover:text-[#0B3D35] border border-[#0B3D35]/20 hover:border-[#C8A96B] rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B3D35]"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>ভিডিও দেখুন</span>
                  </button>

                  <span className="text-xs text-[#1F2926]/50">
                    নমুনা ভিডিও {index + 1}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        <VideoModal
          lecture={selectedLecture}
          onClose={() => setSelectedLecture(null)}
        />

      </div>
    </section>
  );
};
