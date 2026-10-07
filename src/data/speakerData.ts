/**
 * Speaker Data & Content
 * এইচ এম আব্দুল্লাহ আল মামুন - ইসলামী বক্তা ও আলিম, সাতক্ষীরা, বাংলাদেশ
 */

export interface Lecture {
  id: string;
  title: string;
  category: string;
  duration: string;
  description: string;
  date: string;
  videoUrlPlaceholder?: string;
}

export interface TopicItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
}

export const SPEAKER_DATA = {
  name: "এইচ এম আব্দুল্লাহ আল মামুন",
  shortName: "আব্দুল্লাহ আল মামুন",
  englishName: "H. M. Abdullah Al Mamun",
  title: "ইসলামী বক্তা ও আলিম",
  titleEn: "Islamic Speaker & Alim",
  location: "সাতক্ষীরা, বাংলাদেশ",
  locationEn: "Satkhira, Bangladesh",
  mobile: "01314982591",
  mobileDisplay: "০১৭১৪-৯৮২৫৯১ / ০১৩১৪৯৮২৫৯১",
  phoneRaw: "01314982591",
  whatsappNumber: "8801314982591",
  whatsappLink: "https://wa.me/8801314982591",
  callLink: "tel:01314982591",
  photoUrl: "https://res.cloudinary.com/nf5dddil/image/upload/f_auto,q_auto/WhatsApp_Image_2026-10-07_at_10.39.17_AM_Mamun",

  heroTagline: "ইসলামী বক্তা • আলিম",
  heroSubtitle: "কুরআন ও সুন্নাহর আলোকে সুন্দর জীবন ও নৈতিকতার বার্তা",
  
  aboutText: "এইচ এম আব্দুল্লাহ আল মামুন একজন ইসলামী বক্তা ও আলিম। কুরআন ও সুন্নাহর আলোকে মানুষের ব্যক্তিগত, পারিবারিক ও সামাজিক জীবনে ইসলামী মূল্যবোধ, নৈতিকতা এবং সুন্দর জীবনযাপনের বার্তা তুলে ধরাই তাঁর আলোচনার মূল উদ্দেশ্য।",

  corePrinciples: [
    {
      title: "সহজ ও সাবলীল উপস্থাপনা",
      desc: "কুরআন ও হাদিসের শিক্ষাকে সাধারণ মানুষের বোধগম্য ভাষায় প্রাঞ্জলভাবে তুলে ধরা।"
    },
    {
      title: "নৈতিকতা ও সমাজ সংস্কার",
      desc: "পারিবারিক শান্তি, পারস্পরিক সৌহার্দ্য ও তরুণ সমাজের চরিত্র গঠনের ওপর গুরুত্বারোপ।"
    },
    {
      title: "বিশুদ্ধ দাওয়াত ও মধ্যমপন্থা",
      desc: "উগ্রতা পরিহার করে সুন্নাহর আলোকে মধ্যমপন্থা ও গঠনমূলক দাওয়াতি কর্মপদ্ধতি।"
    }
  ],

  topics: [
    {
      id: "quran-hadith",
      title: "কুরআন ও হাদিস",
      subtitle: "আল-কুরআন ও সহিহ সুন্নাহর আলোকে ঈমানি চেতনা ও সঠিক পথনির্দেশনা।",
      iconName: "BookOpen"
    },
    {
      id: "islamic-life",
      title: "ইসলামী জীবনব্যবস্থা",
      subtitle: "দৈনন্দিন জীবনে ইসলামের সামগ্রিক শিক্ষা ও ইবাদতের আন্তরিক অনুশীলন।",
      iconName: "Compass"
    },
    {
      id: "akhlaq",
      title: "আখলাক ও চরিত্র",
      subtitle: "উত্তম চরিত্র, বিনয়, সততা ও মানবিক মূল্যবোধ অর্জনের পাথেয়।",
      iconName: "HeartHandshake"
    },
    {
      id: "youth",
      title: "যুব সমাজ",
      subtitle: "তরুণ প্রজন্মের চরিত্র রক্ষা, ক্যারিয়ার ভাবনা ও দ্বীনি অনুপ্রেরণা।",
      iconName: "Users"
    },
    {
      id: "family-society",
      title: "পরিবার ও সমাজ",
      subtitle: "আদর্শ পরিবার গঠন, পিতা-মাতার অধিকার ও সমাজে পারস্পরিক সম্প্রীতি।",
      iconName: "Home"
    },
    {
      id: "tazkiyah",
      title: "আত্মশুদ্ধি",
      subtitle: "অন্তরের ব্যাধি দূরীকরণ, খাঁটি তওবা ও মহান রবের সন্তুষ্টি অর্জন।",
      iconName: "Sparkles"
    },
    {
      id: "dawah-ethics",
      title: "দাওয়াত ও নৈতিকতা",
      subtitle: "হেকমতপূর্ণ দাওয়াতি আচরণ ও অন্যকে কল্যাণের পথে আহ্বানের আদব।",
      iconName: "MessageSquareHeart"
    },
    {
      id: "contemporary",
      title: "সমসাময়িক ইসলামী আলোচনা",
      subtitle: "বর্তমান প্রেক্ষাপটে সামাজিক ও মানসিক সুস্থতায় ইসলামের বাস্তব সমাধান।",
      iconName: "ShieldCheck"
    }
  ],

  sampleLectures: [
    {
      id: "lec-1",
      title: "কুরআনের আলোকে শান্তিময় পারিবারিক জীবনের মূলনীতি",
      category: "পরিবার ও সমাজ",
      duration: "৪৫ মিনিট",
      date: "নমুনা আলোচনা ১",
      description: "পারিবারিক জীবনে ভালোবাসা, শ্রদ্ধা এবং ইসলামী শিষ্টাচারের গুরুত্ব সম্পর্কিত একটি প্রাঞ্জল আলোচনা।"
    },
    {
      id: "lec-2",
      title: "তরুণ প্রজন্মের নৈতিক অবক্ষয় রোধ ও দ্বীনি জাগরণ",
      category: "যুব সমাজ",
      duration: "৩৮ মিনিট",
      date: "নমুনা আলোচনা ২",
      description: "ডিজিটাল যুগে যুবসমাজের চরিত্র গঠন, সময় ব্যবস্থাপনা এবং আল্লাহর ভয় অর্জনের বাস্তবসম্মত দিকনির্দেশনা।"
    },
    {
      id: "lec-3",
      title: "আত্মশুদ্ধি ও অন্তরের প্রশান্তি লাভের সহজ আমল",
      category: "আত্মশুদ্ধি",
      duration: "৫২ মিনিট",
      date: "নমুনা আলোচনা ৩",
      description: "মানসিক অস্থিরতা দূরীকরণ, জিকির ও খাঁটি তওবার মাধ্যমে অন্তরে প্রশান্তি খোঁজার উপায়।"
    },
    {
      id: "lec-4",
      title: "উত্তম আখলাক: মুমিনের সর্বোত্তম সৌন্দর্য ও শক্তি",
      category: "আখলাক ও চরিত্র",
      duration: "৪০ মিনিট",
      date: "নমুনা আলোচনা ৪",
      description: "প্রতিবেশী ও আত্মীয়তার সম্পর্ক রক্ষা, সত্যবাদিতা এবং রাসুলুল্লাহ (সা.)-এর চরিত্রের বাস্তব শিক্ষা।"
    }
  ],

  socialMedia: [
    {
      name: "Facebook",
      nameBn: "ফেসবুক পেজ",
      status: "অফিসিয়াল পেজ শীঘ্রই যুক্ত হবে",
      placeholderUrl: "https://facebook.com",
      actionText: "Facebook পেজ দেখুন"
    },
    {
      name: "YouTube",
      nameBn: "ইউটিউব চ্যানেল",
      status: "ভিডিও চ্যানেল শীঘ্রই যুক্ত হবে",
      placeholderUrl: "https://youtube.com",
      actionText: "YouTube চ্যানেল দেখুন"
    }
  ]
};
