"use client"

import { useState } from 'react';
import Image from 'next/image';
import { motion } from '@/lib/framer-motion';
import DashboardPreview from '@/components/ui/dashboard-preview';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageSquare, Search, ShoppingCart, Bot, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function SolutionSection() {
  return (
    <section id="solution" className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-secondary/80 text-sm">
            <span className="font-medium">Introducing</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-manrope">
            Matrix: AI-Powered Shopping & Support
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8">
            Transform customer interactions with intelligent search, personalized recommendations, and proactive support that understands context.
          </p>
        </div>
        
        <div className="mb-20">
          <div 
            className="rounded-lg overflow-hidden shadow-2xl border relative"
            style={{
              transformStyle: 'preserve-3d',
              perspective: '1000px',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
            <DashboardPreview />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Natural Language Search</h3>
                  <p className="text-muted-foreground">
                    Let customers find products by describing what they want in their own words, with AI that understands context and intent.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <ShoppingCart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Personalized Shopping</h3>
                  <p className="text-muted-foreground">
                    Deliver tailored product recommendations and dynamic shopping experiences based on real-time behavior.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Bot className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Agentic Customer Support</h3>
                  <p className="text-muted-foreground">
                    AI agents that proactively assist customers, understand complex queries, and resolve issues autonomously.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Intelligent Insights</h3>
                  <p className="text-muted-foreground">
                    Turn customer interactions into actionable insights with AI-powered analytics and trend detection.
                  </p>
                </div>
              </div>
              
              <div className="pt-4">
                <Button asChild size="lg">
                  <Link href="#features">
                    Explore Features <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative h-[400px] md:h-[500px] rounded-xl overflow-hidden border">
            <Image
              src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              alt="Business team analyzing Matrix dashboard"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent flex items-end">
              <div className="p-6">
                <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg border max-w-md">
                  <p className="font-medium text-lg">
                    "Matrix's AI support agents have transformed our customer service. They handle 85% of inquiries automatically and our satisfaction scores are up by 42%."
                  </p>
                  <div className="mt-3 text-sm text-muted-foreground">
                    — Sarah Chen, E-commerce Director
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}