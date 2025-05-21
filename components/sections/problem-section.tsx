"use client"

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertTriangle, Users, ShoppingCart, Search, TrendingDown } from 'lucide-react';

const problemCards = [
  {
    id: 'blind-spots',
    icon: <AlertTriangle className="h-6 w-6 text-chart-1" />,
    title: "Analytics Blind Spots",
    description: "Limited visibility into customer behavior leaves merchants guessing about what drives purchases."
  },
  {
    id: 'insights',
    icon: <Users className="h-6 w-6 text-chart-2" />,
    title: "Disconnected Customer Insights",
    description: "Without unified data, merchants struggle to understand the complete customer journey."
  },
  {
    id: 'discovery',
    icon: <Search className="h-6 w-6 text-chart-3" />,
    title: "Poor Product Discovery",
    description: "Shoppers struggle to find exactly what they want, leading to abandoned carts and lost sales."
  },
  {
    id: 'conversion',
    icon: <TrendingDown className="h-6 w-6 text-chart-4" />,
    title: "Low Conversion Rates",
    description: "Traditional shopping experiences fail to engage customers effectively, resulting in poor conversion."
  },
  {
    id: 'returns',
    icon: <ShoppingCart className="h-6 w-6 text-chart-5" />,
    title: "High Return Rates",
    description: "Insufficient product information leads to mismatched expectations and expensive returns."
  }
];

export default function ProblemSection() {
  const [activeTab, setActiveTab] = useState('blind-spots');

  return (
    <section id="problem" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-manrope">
            The E-commerce Intelligence Gap
          </h2>
          <p className="text-xl text-muted-foreground">
            Today's merchants face critical challenges that limit growth and profitability.
          </p>
        </div>

        <Tabs 
          defaultValue="blind-spots" 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="w-full max-w-5xl mx-auto"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full max-w-4xl">
              {problemCards.map((card) => (
                <TabsTrigger 
                  key={card.id} 
                  value={card.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {card.title.split(' ')[0]}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {problemCards.map((card) => (
              <TabsContent key={card.id} value={card.id} className="mt-0">
                <Card className="border-2 h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      {card.icon}
                      <CardTitle className="text-xl">{card.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {card.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {card.id === 'blind-spots' && (
                        <>
                          <li className="flex items-start gap-2">
                            <span className="text-destructive">•</span>
                            <span>73% of merchants can't identify why customers abandon carts</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-destructive">•</span>
                            <span>Only 12% can accurately track the customer journey across touchpoints</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-destructive">•</span>
                            <span>Most analytics tools provide data without actionable insights</span>
                          </li>
                        </>
                      )}
                      {card.id === 'insights' && (
                        <>
                          <li className="flex items-start gap-2">
                            <span className="text-destructive">•</span>
                            <span>Data silos prevent a unified view of customer behavior</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-destructive">•</span>
                            <span>Inability to connect pre-purchase research with buying decisions</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-destructive">•</span>
                            <span>Missing the "why" behind purchase choices prevents optimization</span>
                          </li>
                        </>
                      )}
                      {card.id === 'discovery' && (
                        <>
                          <li className="flex items-start gap-2">
                            <span className="text-destructive">•</span>
                            <span>68% of shoppers leave sites when they can't find relevant products</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-destructive">•</span>
                            <span>Traditional search and navigation fail to understand customer intent</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-destructive">•</span>
                            <span>Shoppers struggle to express complex needs through keyword search</span>
                          </li>
                        </>
                      )}
                      {card.id === 'conversion' && (
                        <>
                          <li className="flex items-start gap-2">
                            <span className="text-destructive">•</span>
                            <span>Average e-commerce conversion rate is just 2.5-3%</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-destructive">•</span>
                            <span>Lack of personalized shopping experiences reduces engagement</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-destructive">•</span>
                            <span>Limited proactive assistance at critical decision points</span>
                          </li>
                        </>
                      )}
                      {card.id === 'returns' && (
                        <>
                          <li className="flex items-start gap-2">
                            <span className="text-destructive">•</span>
                            <span>Average return rate of 20-30% for online purchases</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-destructive">•</span>
                            <span>Each return costs merchants 15-30% of the purchase price</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-destructive">•</span>
                            <span>Inadequate pre-purchase guidance leads to mismatched expectations</span>
                          </li>
                        </>
                      )}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}

            <div className="relative h-72 lg:h-full rounded-xl overflow-hidden border-2 border-muted">
              <Image
                src="https://images.pexels.com/photos/7654986/pexels-photo-7654986.jpeg"
                alt="Frustrated e-commerce merchant looking at analytics"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6">
                <p className="text-white text-xl text-center font-medium">
                  "We were making decisions based on limited data, missing the full picture of what our customers really wanted."
                </p>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
}