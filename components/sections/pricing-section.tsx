"use client"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function PricingSection() {
  const features = [
    "Core analytics dashboard",
    "Customer journey mapping",
    "AI shopping assistant",
    "Standard integrations (Shopify, WooCommerce)",
    "Product recommendation engine",
    "Custom dashboards",
    "API access",
    "Priority support",
    "Advanced security features",
    "Custom integrations"
  ];

  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-manrope">
            Ready to Transform Your Business?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8">
            Join the waitlist to be among the first to experience Matrix.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="border-2">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Everything You Need to Succeed</CardTitle>
              <CardDescription>Comprehensive features for your e-commerce business</CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <Button asChild size="lg" className="w-full md:w-auto">
                  <Link href="#contact">
                    Join Waitlist <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}