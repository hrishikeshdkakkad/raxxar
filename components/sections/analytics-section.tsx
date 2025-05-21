"use client"

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from '@/lib/framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart2, Layers, Target, TrendingUp, Users } from 'lucide-react';
import Link from 'next/link';

const analyticsFeatures = [
  {
    id: 'customer-behavior',
    icon: <Users className="h-6 w-6" />,
    title: 'Customer Behavior Analytics',
    description: 'Track the complete customer journey from first click to purchase, identifying patterns and optimization opportunities.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    benefits: [
      'Map entire customer journeys across touchpoints',
      'Segment customers by behavior and preferences',
      'Identify drop-off points in the purchase funnel',
      'Recommend personalization strategies based on behavior'
    ]
  },
  {
    id: 'ai-customer-profile',
    icon: <BarChart2 className="h-6 w-6" />,
    title: 'AI-Powered Customer Understanding',
    description: 'Leverage advanced AI to analyze chat sessions and interactions, building a rich, actionable customer profile for every user.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    benefits: [
      'Extract intent, sentiment, and context from every AI chat session',
      'Identify customer pain points, objections, and frequently asked questions',
      'Capture product interests, preferences, and urgency signals in real time',
      'Build dynamic customer personas based on conversation history',
      'Surface hidden opportunities for upsell, cross-sell, and retention',
      'Feed insights into personalization and targeted marketing workflows',
      'Track evolving needs and satisfaction over time',
      'Enable proactive support and tailored recommendations'
    ]
  },
  {
    id: 'purchase-intent',
    icon: <Target className="h-6 w-6" />,
    title: 'Purchase Intent Signals',
    description: 'Identify and act on signals that indicate high purchase probability, enabling targeted interventions.',
    image: 'https://images.pexels.com/photos/7681674/pexels-photo-7681674.jpeg',
    benefits: [
      'Score visitors based on demonstrated purchase intent',
      'Identify high-value prospects for targeted marketing',
      'Trigger timely interventions to encourage conversion',
      'Predict purchase likelihood and product preferences'
    ]
  },
  {
    id: 'product-insights',
    icon: <Layers className="h-6 w-6" />,
    title: 'Product Performance Insights',
    description: 'Understand which products drive revenue, margin, and customer satisfaction to optimize your catalog.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg',
    benefits: [
      'Track product performance across key metrics',
      'Identify high-margin and high-volume products',
      'Correlate product attributes with customer satisfaction',
      'Recommend inventory changes based on trends'
    ]
  },
  {
    id: 'roi-metrics',
    icon: <TrendingUp className="h-6 w-6" />,
    title: 'ROI & Performance Metrics',
    description: 'Measure the impact of Matrix on your business with comprehensive ROI and business impact metrics.',
    image: 'https://images.pexels.com/photos/6693921/pexels-photo-6693921.jpeg',
    benefits: [
      'Track conversion rate improvements by segment',
      'Measure average order value increases',
      'Calculate customer acquisition cost reductions',
      'Visualize revenue growth attributable to Raxxar'
    ]
  }
];

export default function AnalyticsSection() {
  const [activeTab, setActiveTab] = useState('customer-behavior');
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="analytics" 
      ref={sectionRef}
      className="py-24 bg-muted/30"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary">
            <BarChart2 className="h-4 w-4 mr-2" />
            <span className="font-medium">Enterprise Analytics</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-manrope">
            Powerful Insights That Drive Business Growth
          </h2>
          
          <p className="text-xl text-muted-foreground">
            Matrix transforms raw data—including AI chat session insights—into actionable intelligence, helping you understand your customers at a deeper level and optimize your business.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-5xl mx-auto">
          <div className="flex justify-center mb-12">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-4xl">
              {analyticsFeatures.map((feature) => (
                <TabsTrigger 
                  key={feature.id} 
                  value={feature.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <span className="hidden md:inline">{feature.title.split(' ')[0]}</span>
                  <span className="md:hidden">{feature.icon}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {analyticsFeatures.map((feature) => (
            <TabsContent key={feature.id} value={feature.id} className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] lg:h-[400px] rounded-xl overflow-hidden border">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <div>
                  <Card className="border-2">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-primary/10 p-2.5 rounded-lg">
                          {feature.icon}
                        </div>
                        <CardTitle className="text-2xl">{feature.title}</CardTitle>
                      </div>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-medium mb-3">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6">
                        <Button asChild>
                          <Link href="#demo">
                            See in Action <ArrowRight className="ml-2 h-5 w-5" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}