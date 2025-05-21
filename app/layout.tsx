import './globals.css';
import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ChatBubble from '@/components/ChatBubble';
import { ChatBubbleProvider } from '@/components/ChatBubbleContext';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: 'Raxxar | AI Shopping Assistant for Modern Retail',
  description: 'Transform your e-commerce with Matrix - An AI-powered shopping assistant that understands your customers and drives sales through personalized recommendations.',
  keywords: 'ai shopping assistant, conversational commerce, product discovery, personalized recommendations, e-commerce platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`flex flex-col min-h-screen ${inter.variable} ${manrope.variable} font-sans`}>
        <ChatBubbleProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
          >
            <Header />
            <main className="flex-1 flex flex-col">
              {children}
            </main>
            <Footer />
            <ChatBubble />
          </ThemeProvider>
        </ChatBubbleProvider>
      </body>
    </html>
  );
}