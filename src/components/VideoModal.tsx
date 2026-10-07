import React, { useState } from 'react';
import { X, Play, ExternalLink, Film, CheckCircle2 } from 'lucide-react';
import { Lecture } from '../data/speakerData';

interface VideoModalProps {
  lecture: Lecture | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ lecture, onClose }) => {
  const [customUrl, setCustomUrl] = useState('');
  const [activeUrl, setActiveUrl] = useState<string | null>(null);

  if (!lecture) return null;

  const handleApplyCustomUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (customUrl.trim()) {
      setActiveUrl(customUrl.trim());
    }
  };

  // Convert regular YouTube URL to embed URL if applicable
  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com/watch?v=')) {
      const id = url.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${id}`;
    }
    if (url.includes('youtu.be/')) {
      const id = url.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${id}`;
    }
    return url;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in"
    >
      <div className="relative w-full max-w-2xl bg-[#0B3D35] border border-[#C8A96B]/40 rounded-2xl shadow-2xl overflow-hidden text-white">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-emerald-900 bg-[#0A332C]">
          <div className="flex items-center gap-2">
            <Film className="w-5 h-5 text-[#C8A96B]" />
            <span className="text-xs font-semibold text-[#F3E5C8] uppercase tracking-wider">
              ইসলামী আলোচনা প্রিভিউ
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-emerald-300 hover:text-white rounded-lg hover:bg-emerald-800 transition-colors"
            aria-label="বন্ধ করুন"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Area */}
        <div className="p-6 space-y-5">
          {activeUrl ? (
            <div className="aspect-video w-full rounded-xl overflow-hidden bg-black border border-[#C8A96B]/30">
              <iframe
                src={getEmbedUrl(activeUrl)}
                title={lecture.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="aspect-video w-full rounded-xl overflow-hidden bg-[#123C35] border border-[#C8A96B]/30 flex flex-col items-center justify-center p-6 text-center relative islamic-pattern-dark">
              <div className="w-16 h-16 rounded-full bg-[#C8A96B]/20 border border-[#C8A96B] flex items-center justify-center mb-4 text-[#F3E5C8]">
                <Play className="w-7 h-7 ml-1 fill-[#C8A96B] text-[#C8A96B]" />
              </div>
              <span className="text-xs text-[#C8A96B] font-medium mb-1">
                নমুনা প্লেসোল্ডার ভিডিও
              </span>
              <h4 className="font-serif-bengali text-lg font-bold text-white max-w-md">
                {lecture.title}
              </h4>
              <p className="text-xs text-emerald-200/80 mt-2 max-w-sm">
                প্রকৃত ভিডিও যুক্ত করার জন্য নিচের বক্সে ইউটিউব লিংক পেস্ট করে প্রিভিউ দেখুন অথবা পরবর্তীতে অফিসিয়াল চ্যানেলের লিংক যোগ করুন।
              </p>
            </div>
          )}

          {/* Lecture Metadata */}
          <div className="space-y-2 border-t border-emerald-900/80 pt-4">
            <div className="flex items-center justify-between text-xs text-emerald-200/70">
              <span>বিষয়: <strong className="text-white font-medium">{lecture.category}</strong></span>
              <span>সময়কাল: <strong className="text-[#C8A96B] font-medium">{lecture.duration}</strong></span>
            </div>
            <h3 id="video-modal-title" className="font-serif-bengali text-xl font-bold text-white">
              {lecture.title}
            </h3>
            <p className="text-sm text-emerald-100/90 leading-relaxed">
              {lecture.description}
            </p>
          </div>

          {/* Custom Link Attachment (Organizers / Speaker friendly) */}
          <form onSubmit={handleApplyCustomUrl} className="pt-2">
            <label className="block text-xs text-emerald-200/80 mb-1.5 font-medium">
              ইউটিউব বা ভিডিও লিংক যুক্ত করে পরীক্ষা করুন:
            </label>
            <div className="flex gap-2">
              <input
                type="url"
                value={customUrl}
                onChange={(e) => setCustomUrl(e.target.value)}
                placeholder="https://www.youtube.com/watch?v=..."
                className="flex-1 px-3 py-2 text-xs bg-[#082823] border border-emerald-700/60 rounded-md text-white placeholder-emerald-500/50 focus:outline-none focus:border-[#C8A96B]"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#C8A96B] hover:bg-[#D8BE85] text-[#0B3D35] text-xs font-semibold rounded-md transition-colors shrink-0"
              >
                প্লে করুন
              </button>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-[#0A332C] border-t border-emerald-900 flex items-center justify-between text-xs text-emerald-300/80">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#C8A96B]" />
            <span>সম্পাদনাযোগ্য প্লেসহোল্ডার কনটেন্ট</span>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-[#C8A96B] font-medium"
          >
            বন্ধ করুন
          </button>
        </div>

      </div>
    </div>
  );
};
