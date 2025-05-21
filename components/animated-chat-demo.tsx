import { useEffect, useRef, useState } from 'react';

const userPrompt = "Recommend my entire outfit and must-haves for a beach party in Hawaii.";

// Array of AI recommended items with image URLs
const aiItems = [
  { label: 'Linen shirt & shorts', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80' },
  { label: 'Flip-flops & espadrilles', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=200&q=80' },
  { label: 'Sunglasses & straw hat', image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=200&q=80' },
  { label: 'Reef-safe sunscreen', image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=200&q=80' },
  { label: 'Waterproof phone pouch', image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80' },
  { label: 'Hawaiian print swimwear', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80' },
  { label: 'Lightweight tote bag', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=200&q=80' },
];
const aiResponseText = "Absolutely! Here's your perfect beach party wardrobe:";
const aiResponseMore = '...and more! Want to see matching accessories?';

function useTypewriterEffect(fullText: string, speed = 28, delay = 0) {
  const [displayed, setDisplayed] = useState('');
  const indexRef = useRef(0);
  useEffect(() => {
    setDisplayed('');
    indexRef.current = 0;
    let timeout: NodeJS.Timeout | undefined;
    let interval: NodeJS.Timeout | undefined;
    timeout = setTimeout(() => {
      interval = setInterval(() => {
        if (indexRef.current < fullText.length) {
          setDisplayed(fullText.slice(0, indexRef.current + 1));
          indexRef.current += 1;
        } else {
          if (interval) clearInterval(interval);
        }
      }, speed);
    }, delay);
    return () => {
      if (timeout) clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [fullText, speed, delay]);
  return displayed;
}

// Message type for chat history
interface Message {
  sender: 'user' | 'ai';
  text?: string;
  items?: { label: string; image: string }[];
  isTyping?: boolean;
}

export default function AnimatedChatDemo() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [step, setStep] = useState<'user' | 'ai' | 'pause'>('user');
  const [loop, setLoop] = useState(0);

  // Only type the latest message
  const userTyped = useTypewriterEffect(step === 'user' ? userPrompt : '', 28, 400);
  const aiTyped = useTypewriterEffect(step === 'ai' ? aiResponseText : '', 18, 400);
  const userDone = userTyped.length === userPrompt.length;
  const aiDone = aiTyped.length === aiResponseText.length;

  // Add messages to history as they finish typing
  useEffect(() => {
    if (step === 'user' && userTyped && userDone) {
      setMessages((prev) => [...prev, { sender: 'user', text: userPrompt }]);
    }
    if (step === 'ai' && aiTyped && aiDone) {
      setMessages((prev) => [
        ...prev,
        { sender: 'ai', text: aiResponseText, items: aiItems },
        { sender: 'ai', text: aiResponseMore },
      ]);
    }
  }, [step, userDone, aiDone, userTyped, aiTyped]);

  // Control the chat flow
  useEffect(() => {
    if (step === 'user' && userDone) {
      const t = setTimeout(() => setStep('ai'), 700);
      return () => clearTimeout(t);
    }
    if (step === 'ai' && aiDone) {
      const t = setTimeout(() => setStep('pause'), 1800);
      return () => clearTimeout(t);
    }
    if (step === 'pause') {
      const t = setTimeout(() => {
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new Event('ai-retail-reset'));
        }
        setMessages([]); // Clear messages for next loop
        setStep('user');
        setLoop((l) => l + 1);
      }, 1200);
      return () => clearTimeout(t);
    }
  }, [step, userDone, aiDone]);

  // Prepare messages to render, including the currently typing one
  let renderedMessages = [...messages];
  if (step === 'user' && userTyped && !userDone) {
    renderedMessages = [...messages, { sender: 'user', text: userTyped, isTyping: true }];
  } else if (step === 'ai' && aiTyped && !aiDone) {
    renderedMessages = [...messages, { sender: 'ai', text: aiTyped, isTyping: true }];
  }

  return (
    <div className="w-full max-w-xl md:max-w-2xl flex flex-col gap-2">
      {renderedMessages.map((msg, idx) => (
        <div key={idx} className="flex items-start gap-2">
          <div className={msg.sender === 'user' ?
            'rounded-full bg-primary/80 text-primary-foreground w-8 h-8 flex items-center justify-center font-bold shadow' :
            'rounded-full bg-blue-500 text-white w-8 h-8 flex items-center justify-center font-bold shadow'}>
            {msg.sender === 'user' ? 'U' : 'AI'}
          </div>
          <div className={msg.sender === 'user' ?
            'bg-card border border-primary/20 rounded-2xl px-3 py-2 md:px-4 md:py-3 text-sm md:text-base shadow-md relative max-w-[80vw] md:max-w-[80%] whitespace-pre-line' :
            'bg-background border border-blue-200 rounded-2xl px-3 py-2 md:px-4 md:py-3 text-sm md:text-base shadow-md relative max-w-[90vw] md:max-w-[90%] whitespace-pre-line'}>
            {msg.text}
            {msg.isTyping && <span className="animate-pulse">|</span>}
            {/* Render AI items as image cards */}
            {msg.items && (
              <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-2 gap-1 md:gap-3 mt-3">
                {msg.items.map((item, i) => (
                  <div key={i} className="flex flex-col items-center bg-white/80 dark:bg-background/80 rounded-lg p-1 md:p-2 border border-primary/10 shadow-sm w-full">
                    <img src={item.image} alt={item.label} className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 object-cover rounded-md mb-1" />
                    <span className="text-[10px] sm:text-xs md:text-sm text-center font-medium leading-tight">{item.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
} 