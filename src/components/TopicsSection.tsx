import React from 'react';
import { SPEAKER_DATA } from '../data/speakerData';
import {
  BookOpen,
  Compass,
  HeartHandshake,
  Users,
  Home,
  Sparkles,
  MessageSquareHeart,
  ShieldCheck,
  LucideIcon
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Compass,
  HeartHandshake,
  Users,
  Home,
  Sparkles,
  MessageSquareHeart,
  ShieldCheck
};

export const TopicsSection: React.FC = () => {
  return (
    <section id="topics" className="py-20 md:py-28 bg-[#FAF8F2] relative border-t border-[#0B3D35]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-3">
            <span className="text-xs uppercase tracking-widest text-[#0B3D35] font-semibold">
              বক্তব্যের মূল ক্ষেত্র
            </span>
            <div className="h-0.5 w-12 bg-[#C8A96B] mx-auto mt-1" />
          </div>
          <h2 className="font-serif-bengali text-3xl sm:text-4xl font-bold text-[#0B3D35] tracking-tight mb-3">
            আলোচনার বিষয়সমূহ
          </h2>
          <p className="text-base text-[#1F2926]/80 font-normal">
            মাহফিল ও ধর্মীয় আলোচনায় সচরাচর আলোচিত গুরুত্বপূর্ণ বিষয়সমূহ
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPEAKER_DATA.topics.map((topic, index) => {
            const IconComponent = iconMap[topic.iconName] || BookOpen;

            return (
              <div
                key={topic.id}
                className="bg-white rounded-xl p-6 border border-[#0B3D35]/10 hover:border-[#C8A96B]/60 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon & Index Number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-lg bg-[#FAF8F2] group-hover:bg-[#0B3D35] border border-[#0B3D35]/15 group-hover:border-[#C8A96B] flex items-center justify-center transition-colors duration-200">
                      <IconComponent className="w-6 h-6 text-[#0B3D35] group-hover:text-[#F3E5C8] transition-colors" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-[#C8A96B]">
                      ০{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif-bengali text-lg font-bold text-[#0B3D35] mb-2 group-hover:text-[#123C35] transition-colors">
                    {topic.title}
                  </h3>

                  {/* Subtitle / Description */}
                  <p className="text-xs sm:text-sm text-[#1F2926]/75 leading-relaxed font-normal">
                    {topic.subtitle}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center text-[11px] text-[#C8A96B] font-medium">
                  <span>মাহফিল উপযোগী বিষয়</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
