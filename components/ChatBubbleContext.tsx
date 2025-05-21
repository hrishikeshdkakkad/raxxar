'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ChatBubbleContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
  openChatBubble: () => void;
}

const ChatBubbleContext = createContext<ChatBubbleContextType | undefined>(undefined);

export function ChatBubbleProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openChatBubble = () => setOpen(true);
  return (
    <ChatBubbleContext.Provider value={{ open, setOpen, openChatBubble }}>
      {children}
    </ChatBubbleContext.Provider>
  );
}

export function useChatBubble() {
  const ctx = useContext(ChatBubbleContext);
  if (!ctx) throw new Error('useChatBubble must be used within a ChatBubbleProvider');
  return ctx;
} 