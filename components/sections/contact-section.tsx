"use client"

import ContactForm from '@/components/contact-form';
import { Card } from '@/components/ui/card';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-manrope">
            Join the Raxxar Beta
          </h2>
          
          <p className="text-xl text-muted-foreground">
            Help shape the future of AI-powered e-commerce. Sign up for early access and be part of our journey.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-2">
            <ContactForm />
          </Card>
        </div>
      </div>
    </section>
  );
}