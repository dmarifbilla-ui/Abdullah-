import React, { useState } from 'react';
import { ExternalLink, Edit3, Check, Globe } from 'lucide-react';

export const SocialMediaSection: React.FC = () => {
  const [facebookUrl, setFacebookUrl] = useState('');
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  return (
    <section className="py-16 md:py-20 bg-white border-t border-[#0B3D35]/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block mb-3">
            <span className="text-xs uppercase tracking-widest text-[#0B3D35] font-semibold">
              অনলাইন উপস্থিতি
            </span>
            <div className="h-0.5 w-12 bg-[#C8A96B] mx-auto mt-1" />
          </div>
          <h2 className="font-serif-bengali text-2xl sm:text-3xl font-bold text-[#0B3D35] tracking-tight mb-2">
            সামাজিক যোগাযোগমাধ্যম
          </h2>
          <p className="text-xs sm:text-sm text-[#1F2926]/75 font-normal">
            বক্তার অফিসিয়াল সোশ্যাল মিডিয়া লিংক (সম্পাদনাযোগ্য প্লেসহোল্ডার)
          </p>
        </div>

        {/* Social Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          
          {/* Facebook Card */}
          <div className="bg-[#FAF8F2] border border-[#0B3D35]/15 hover:border-[#C8A96B] rounded-xl p-6 transition-all duration-200 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-[#1877F2]/10 border border-[#1877F2]/20 flex items-center justify-center text-[#1877F2]">
                  {/* Facebook Icon SVG */}
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <span className="text-[11px] text-amber-800 bg-amber-100/80 px-2.5 py-0.5 rounded-full font-medium">
                  প্লেসহোল্ডার লিংক
                </span>
              </div>

              <div>
                <h3 className="font-serif-bengali text-lg font-bold text-[#0B3D35]">
                  Facebook পেজ
                </h3>
                <p className="text-xs text-[#1F2926]/70 mt-0.5">
                  নিয়মিত আলোচনা ও মাহফিলের আপডেট পেতে
                </p>
              </div>

              {isEditing ? (
                <div className="pt-2">
                  <label className="text-[11px] text-[#0B3D35] block mb-1">
                    ফেসবুক পেজ লিংক:
                  </label>
                  <input
                    type="url"
                    value={facebookUrl}
                    onChange={(e) => setFacebookUrl(e.target.value)}
                    placeholder="https://facebook.com/your-page"
                    className="w-full px-2.5 py-1.5 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:border-[#0B3D35]"
                  />
                </div>
              ) : (
                <p className="text-xs text-slate-500 italic">
                  {facebookUrl ? facebookUrl : 'অফিসিয়াল ফেসবুক পেজ লিংক পরবর্তীতে যুক্ত হবে'}
                </p>
              )}
            </div>

            <div className="pt-5 mt-4 border-t border-[#0B3D35]/10">
              <a
                href={facebookUrl || '#'}
                onClick={(e) => {
                  if (!facebookUrl) {
                    e.preventDefault();
                    setIsEditing(true);
                  }
                }}
                target={facebookUrl ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B3D35] hover:text-[#C8A96B] transition-colors"
              >
                <span>{facebookUrl ? 'Facebook পেজে যান' : 'লিংক যুক্ত করুন / সম্পাদনা'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* YouTube Card */}
          <div className="bg-[#FAF8F2] border border-[#0B3D35]/15 hover:border-[#C8A96B] rounded-xl p-6 transition-all duration-200 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-[#FF0000]/10 border border-[#FF0000]/20 flex items-center justify-center text-[#FF0000]">
                  {/* YouTube Icon SVG */}
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </div>
                <span className="text-[11px] text-amber-800 bg-amber-100/80 px-2.5 py-0.5 rounded-full font-medium">
                  প্লেসহোল্ডার লিংক
                </span>
              </div>

              <div>
                <h3 className="font-serif-bengali text-lg font-bold text-[#0B3D35]">
                  YouTube চ্যানেল
                </h3>
                <p className="text-xs text-[#1F2926]/70 mt-0.5">
                  ভিডিও আলোচনা ও বয়ান সরাসরি দেখতে
                </p>
              </div>

              {isEditing ? (
                <div className="pt-2">
                  <label className="text-[11px] text-[#0B3D35] block mb-1">
                    ইউটিউব চ্যানেল লিংক:
                  </label>
                  <input
                    type="url"
                    value={youtubeUrl}
                    onChange={(e) => setYoutubeUrl(e.target.value)}
                    placeholder="https://youtube.com/@your-channel"
                    className="w-full px-2.5 py-1.5 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:border-[#0B3D35]"
                  />
                </div>
              ) : (
                <p className="text-xs text-slate-500 italic">
                  {youtubeUrl ? youtubeUrl : 'অফিসিয়াল ইউটিউব চ্যানেল লিংক পরবর্তীতে যুক্ত হবে'}
                </p>
              )}
            </div>

            <div className="pt-5 mt-4 border-t border-[#0B3D35]/10 flex items-center justify-between">
              <a
                href={youtubeUrl || '#'}
                onClick={(e) => {
                  if (!youtubeUrl) {
                    e.preventDefault();
                    setIsEditing(true);
                  }
                }}
                target={youtubeUrl ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B3D35] hover:text-[#C8A96B] transition-colors"
              >
                <span>{youtubeUrl ? 'YouTube চ্যানেলে যান' : 'লিংক যুক্ত করুন / সম্পাদনা'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => setIsEditing(!isEditing)}
                className="text-xs text-[#C8A96B] hover:text-[#0B3D35] inline-flex items-center gap-1"
              >
                <Edit3 className="w-3 h-3" />
                <span>{isEditing ? 'সম্পন্ন' : 'সম্পাদনা'}</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
