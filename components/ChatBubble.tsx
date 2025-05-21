'use client';
import { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import AnimatedChatDemo from '@/components/animated-chat-demo';
import { useChatBubble } from './ChatBubbleContext';

export default function ChatBubble() {
  const { open, setOpen } = useChatBubble();
  const [resetting, setResetting] = useState(false);

  // Listen for custom event from AnimatedChatDemo to know when it's resetting
  if (typeof window !== 'undefined') {
    window.addEventListener('ai-retail-reset', () => {
      setResetting(true);
      setTimeout(() => setResetting(false), 1000); // Show placeholder for 1s
    });
  }

  if (!open) {
    // Collapsed bubble
    return null;
  }

  // Responsive chat window
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <div className="w-full h-full max-w-[98vw] max-h-[98vh] md:w-[600px] md:h-[700px] md:max-w-[98vw] md:max-h-[90vh] bg-white/80 dark:bg-background/80 backdrop-blur-lg border border-primary/10 shadow-2xl rounded-3xl flex flex-col overflow-hidden transition-all">
        {/* Header (fixed height: 64px on mobile, 72px on md+) */}
        <div className="flex items-center justify-between gap-2 px-4 py-3 md:px-6 md:py-4 border-b border-primary/10 bg-gradient-to-r from-primary/10 to-background/60 dark:from-primary/20 dark:to-background/80" style={{height: '4rem'}}>
          <span className="inline-flex items-center gap-2 text-base md:text-lg font-bold text-primary drop-shadow-sm">
            <span className="rounded-full bg-primary/90 p-2 shadow-md"><MessageSquare className="w-5 h-5 text-primary-foreground" /></span>
            Experience AI Retail
          </span>
          <button
            className="ml-2 p-2 rounded-full hover:bg-primary/10 text-primary"
            onClick={() => setOpen(false)}
            aria-label="Close AI Retail Chat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        {/* Chat Content (dynamic height) */}
        <div className="flex-1 overflow-y-auto bg-gradient-to-br from-white/70 to-primary/5 dark:from-background/80 dark:to-primary/10 p-3 md:p-6">
          {resetting ? (
            <div className="flex flex-col items-center justify-center h-full w-full animate-pulse">
              <MessageSquare className="w-12 h-12 text-primary mb-2" />
              <div className="text-lg font-semibold text-primary">Experience AI Retail</div>
              <div className="text-sm text-muted-foreground mt-1">Ruminating on your next look...</div>
            </div>
          ) : (
            <AnimatedChatDemo />
          )}
        </div>
      </div>
    </div>
  );
} 