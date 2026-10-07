/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { LecturesSection } from './components/LecturesSection';
import { TopicsSection } from './components/TopicsSection';
import { ProgramInvitationSection } from './components/ProgramInvitationSection';
import { ContactSection } from './components/ContactSection';
import { SocialMediaSection } from './components/SocialMediaSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F2] text-[#1F2926] font-sans">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* About Section (পরিচিতি) */}
        <AboutSection />

        {/* Islamic Lectures Section (ইসলামী আলোচনা) */}
        <LecturesSection />

        {/* Topics Section (আলোচনার বিষয়সমূহ) */}
        <TopicsSection />

        {/* Program Invitation CTA Section (মাহফিল ও দাওয়াতি আমন্ত্রণ) */}
        <ProgramInvitationSection />

        {/* Contact Section (যোগাযোগ) */}
        <ContactSection />

        {/* Social Media Section (সামাজিক যোগাযোগমাধ্যম) */}
        <SocialMediaSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileStickyBar />
    </div>
  );
}

