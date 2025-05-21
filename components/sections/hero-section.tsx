"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { MessageSquare } from 'lucide-react';
import Link from 'next/link';
import ContactForm from '@/components/contact-form';
import { useChatBubble } from '@/components/ChatBubbleContext';

export default function HeroSection() {
  const [showWaitlist, setShowWaitlist] = useState(false);
  const { openChatBubble } = useChatBubble();

  return (
    <>
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-white via-[#f6f7fb] to-[#e9ebf0] overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-16">
          {/* Left: Headline & CTA */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <span className="inline-block mb-6 px-5 py-2 rounded-full bg-white/70 border border-neutral-200 text-sm text-neutral-500 font-medium tracking-widest shadow-sm backdrop-blur-md animate-fade-in">
              Early Access • AI Commerce
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-8 font-manrope text-neutral-900 animate-fade-in delay-100">
              Truly Understand Your Customer, Beyond Just Knowing Them
            </h1>
            <p className="text-2xl md:text-3xl text-neutral-600 mb-10 max-w-xl animate-fade-in delay-200">
              Discover products with natural language and AI that feels effortless, personal, and beautifully simple.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-5 animate-fade-in delay-300">
              <Button
                size="lg"
                className="h-14 px-8 text-lg font-semibold bg-neutral-900 text-white rounded-xl shadow-md hover:bg-neutral-800 transition-colors duration-200 border-0"
                onClick={() => setShowWaitlist(true)}
              >
                Join the Waitlist <MessageSquare className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-14 px-8 text-lg font-semibold border-neutral-300 text-neutral-700 bg-white/80 hover:bg-neutral-100 rounded-xl shadow-sm"
                onClick={e => { e.preventDefault(); openChatBubble(); }}
              >
                Experience AI Retail
              </Button>
            </div>
          </div>
          {/* Right: Device Mockup with Video */}
          <div className="flex-1 flex items-center justify-center animate-fade-in delay-400">
            <div className="relative w-[340px] sm:w-[400px] md:w-[480px] aspect-[16/10] rounded-2xl bg-white/70 border border-neutral-200 shadow-xl overflow-hidden backdrop-blur-xl flex items-center justify-center">
              {/* Device frame effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-white/80 pointer-events-none" />
              <video
                className="w-full h-full object-cover rounded-2xl"
                src="https://d1example.cloudfront.net/demo-video.mp4"
                poster="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                controls
                preload="none"
                style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.08)' }}
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
                <span className="inline-flex items-center px-4 py-1 rounded-full bg-white/90 text-neutral-700 text-xs font-semibold shadow-md border border-neutral-200">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-6.518-3.759A1 1 0 007 8.06v7.882a1 1 0 001.234.97l6.518-1.857A1 1 0 0016 14.06V9.94a1 1 0 00-1.248-.772z" /></svg>
                  Product Demo
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Waitlist Dialog - Minimal, Apple-like style */}
      <Dialog open={showWaitlist} onOpenChange={setShowWaitlist}>
        <DialogContent className="max-w-full w-full sm:max-w-lg md:max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl p-0 border-0 bg-white/90 shadow-2xl backdrop-blur-xl">
          <div className="p-8">
            <DialogTitle className="text-2xl font-extrabold mb-6 text-neutral-900 tracking-wide">Join the Waitlist</DialogTitle>
            <ContactForm onSuccess={() => setShowWaitlist(false)} />
          </div>
        </DialogContent>
      </Dialog>
      {/* Animations */}
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1.2s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
      `}</style>
    </>
  );
}