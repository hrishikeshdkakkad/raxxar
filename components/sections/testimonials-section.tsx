"use client"

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from '@/lib/framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Matrix has transformed our understanding of customer behavior. The analytics insights have helped us increase conversion rates by 87% and grow AOV by 52% in just three months.",
    author: "Sarah Chen",
    position: "E-commerce Director",
    company: "StyleHouse Retail",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    logo: "/stylehouse-logo.svg",
    rating: 5
  },
  {
    quote: "The implementation was incredibly smooth. The Matrix team had us up and running within two weeks, and we started seeing measurable results almost immediately.",
    author: "Marcus Johnson",
    position: "CTO",
    company: "OutdoorGear Co.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    logo: "/outdoorgear-logo.svg",
    rating: 5
  },
  {
    quote: "The analytics dashboards provide insights we never had before. We can now make data-driven decisions that have measurably improved our bottom line.",
    author: "Jessica Wong",
    position: "Analytics Manager",
    company: "TechGadgets Inc.",
    image: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg",
    logo: "/techgadgets-logo.svg",
    rating: 5
  },
  {
    quote: "Matrix's predictive analytics capabilities have transformed our inventory management. We've reduced overstock by 32% while ensuring we never run out of high-demand items.",
    author: "David Miller",
    position: "Operations Director",
    company: "HomeEssentials",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    logo: "/homeessentials-logo.svg",
    rating: 5
  },
  {
    quote: "The enterprise features have allowed us to roll out Matrix across all 28 of our store brands while maintaining consistent analytics and reporting.",
    author: "Emily Rodriguez",
    position: "VP of Digital",
    company: "Retail Holdings Group",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    logo: "/retailholdings-logo.svg",
    rating: 5
  }
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(nextTestimonial, 6000);
    }
    
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplay]);

  const handleManualNavigation = (callback: () => void) => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      setAutoplay(false);
    }
    callback();
  };

  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-manrope">
            Trusted by Leading E-commerce Brands
          </h2>
          
          <p className="text-xl text-muted-foreground">
            See how Matrix has transformed businesses like yours.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="border-2 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="relative h-80 md:h-auto">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent md:bg-gradient-to-r"></div>
                        
                        <div className="absolute bottom-0 left-0 w-full p-6 text-white md:hidden">
                          <div className="flex mb-2">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <div className="font-bold text-lg">{testimonial.author}</div>
                          <div className="text-white/80 text-sm">{testimonial.position}, {testimonial.company}</div>
                        </div>
                      </div>
                      
                      <div className="p-6 md:p-8 flex flex-col justify-between">
                        <div className="hidden md:flex mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        
                        <div className="text-lg md:text-xl font-medium italic mb-6">
                          "{testimonial.quote}"
                        </div>
                        
                        <div className="hidden md:block">
                          <div className="font-bold text-lg">{testimonial.author}</div>
                          <div className="text-muted-foreground">{testimonial.position}, {testimonial.company}</div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center items-center mt-8 gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleManualNavigation(prevTestimonial)}
              aria-label="Previous testimonial"
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-2.5 rounded-full ${
                    index === activeIndex 
                      ? 'w-8 bg-primary' 
                      : 'w-2.5 bg-muted hover:bg-muted-foreground/50'
                  } transition-all`}
                  onClick={() => {
                    handleManualNavigation(() => setActiveIndex(index));
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleManualNavigation(nextTestimonial)}
              aria-label="Next testimonial"
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="mt-20 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12 font-manrope">
            Case Studies from Matrix Partners
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "StyleHouse Retail",
                metric: "85% Higher Conversion",
                description: "How a fashion retailer increased conversions with Matrix analytics",
                image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg"
              },
              {
                title: "OutdoorGear Co.",
                metric: "46% Revenue Growth",
                description: "Leveraging customer insights to drive significant revenue growth",
                image: "https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg"
              },
              {
                title: "HomeEssentials",
                metric: "32% Reduced Returns",
                description: "Improving product recommendations to reduce costly returns",
                image: "https://images.pexels.com/photos/6069552/pexels-photo-6069552.jpeg"
              }
            ].map((study, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer hover:border-primary transition-colors">
                <div className="relative h-48">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full p-4 text-white">
                    <div className="font-bold">{study.metric}</div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle>{study.title}</CardTitle>
                  <CardDescription>{study.description}</CardDescription>
                </CardHeader>
                
                <CardFooter className="pt-0">
                  <Button variant="link" className="p-0 h-auto text-primary">
                    Read Case Study
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}