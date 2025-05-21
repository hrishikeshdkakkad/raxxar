import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ImplementationSection() {
  const implementationSteps = [
    {
      number: '01',
      title: 'Discovery & Planning',
      description: 'We start with a thorough assessment of your e-commerce business, goals, and technical environment.',
      activities: [
        'Business requirements gathering',
        'Technical environment assessment',
        'Project scope definition',
        'Implementation roadmap creation'
      ],
      duration: '1-2 weeks'
    },
    {
      number: '02',
      title: 'Integration & Setup',
      description: 'Our team handles the technical integration with your e-commerce platform and data sources.',
      activities: [
        'Platform connector installation',
        'Data synchronization setup',
        'Analytics configuration',
        'Security implementation'
      ],
      duration: '1-3 weeks'
    },
    {
      number: '03',
      title: 'Configuration & Customization',
      description: 'Matrix is tailored to your specific business needs and customer experience requirements.',
      activities: [
        'Dashboard customization',
        'Conversational AI training',
        'User roles and permissions setup',
        'Integration with existing workflows'
      ],
      duration: '2-4 weeks'
    },
    {
      number: '04',
      title: 'Training & Adoption',
      description: 'We ensure your team is fully equipped to leverage Matrix effectively across your organization.',
      activities: [
        'Admin and user training sessions',
        'Documentation and resources',
        'Best practices workshops',
        'Change management support'
      ],
      duration: '1-2 weeks'
    }
  ];

  return (
    <section id="implementation" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-manrope">
            Smooth Implementation Process
          </h2>
          
          <p className="text-xl text-muted-foreground">
            Our structured approach ensures a seamless transition to Matrix with minimal disruption.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {implementationSteps.map((step, index) => (
            <Card key={index} className="relative border-2 h-full overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -mt-10 -mr-10"></div>
              
              <CardHeader>
                <div className="text-4xl font-bold text-primary/30 mb-4">
                  {step.number}
                </div>
                <CardTitle className="text-xl">{step.title}</CardTitle>
                <CardDescription className="text-base">
                  {step.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {step.activities.map((activity, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <div className="w-full p-3 bg-muted/40 rounded-lg text-center">
                  <span className="font-medium">Typical Duration:</span> {step.duration}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-80 rounded-xl overflow-hidden border">
              <Image
                src="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg"
                alt="Matrix implementation team at work"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6">
                <p className="text-white text-xl text-center font-medium">
                  "The implementation was much faster than we expected. We were up and running in just three weeks."
                </p>
              </div>
            </div>
            
            <div className="bg-card border-2 rounded-xl p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-4 font-manrope">Implementation Support</h3>
              <p className="text-muted-foreground mb-6">
                Our dedicated implementation team ensures a smooth transition to Matrix with comprehensive support at every step.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Dedicated Implementation Manager</p>
                    <p className="text-sm text-muted-foreground">Your single point of contact throughout the process</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Technical Integration Team</p>
                    <p className="text-sm text-muted-foreground">Experts in your specific e-commerce platform</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Analytics Configuration Support</p>
                    <p className="text-sm text-muted-foreground">Customized setup for your business needs</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Training and Documentation</p>
                    <p className="text-sm text-muted-foreground">Comprehensive resources for your team</p>
                  </div>
                </div>
              </div>
              
              <Button asChild>
                <Link href="#demo">
                  Schedule Implementation Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}