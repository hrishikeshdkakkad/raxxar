"use client"

import { useState } from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Puzzle, Code, Shield } from 'lucide-react';
import Link from 'next/link';

const integrations = [
  {
    id: 'shopify',
    name: 'Shopify',
    logo: '/shopify-logo.svg',
    description: 'Seamlessly integrate Matrix with your Shopify store for powerful analytics and AI-driven insights.',
    features: [
      'One-click installation via Shopify App Store',
      'Automatic product and customer data sync',
      'Native integration with Shopify checkout',
      'Real-time analytics dashboard in Shopify admin',
      'Custom theme components for conversational AI'
    ],
    timeline: '1-2 days',
    complexity: 'Low'
  },
  {
    id: 'woocommerce',
    name: 'WooCommerce',
    logo: '/woocommerce-logo.svg',
    description: 'Transform your WooCommerce store with Matrix\'s powerful analytics and AI capabilities.',
    features: [
      'WordPress plugin for easy installation',
      'WooCommerce product and order synchronization',
      'Compatible with popular WooCommerce themes',
      'Integration with existing checkout process',
      'WordPress admin dashboard for analytics'
    ],
    timeline: '2-3 days',
    complexity: 'Medium'
  },
  {
    id: 'magento',
    name: 'Magento / Adobe Commerce',
    logo: '/magento-logo.svg',
    description: 'Enterprise-grade integration for Magento and Adobe Commerce platforms.',
    features: [
      'Magento marketplace extension',
      'Compatible with Magento 2.x and Adobe Commerce',
      'Advanced data synchronization options',
      'Custom integration with complex product catalogs',
      'Enterprise-level security and compliance'
    ],
    timeline: '3-5 days',
    complexity: 'Medium-High'
  },
  {
    id: 'custom',
    name: 'Custom Integration',
    logo: '/api-logo.svg',
    description: 'Flexible API options for custom e-commerce platforms and unique business requirements.',
    features: [
      'RESTful API with comprehensive documentation',
      'GraphQL API for efficient data operations',
      'Webhook support for real-time events',
      'SDKs for popular programming languages',
      'Dedicated integration support team'
    ],
    timeline: 'Variable',
    complexity: 'Customizable'
  }
];

export default function IntegrationSection() {
  const [activeTab, setActiveTab] = useState('shopify');

  return (
    <section id="integrations" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-chart-2/10 border border-chart-2/20 text-sm text-chart-2">
            <Puzzle className="h-4 w-4 mr-2" />
            <span className="font-medium">Seamless Integration</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-manrope">
            Connect Matrix to Your E-commerce Platform
          </h2>
          
          <p className="text-xl text-muted-foreground">
            Matrix integrates with all major e-commerce platforms, providing a unified analytics experience.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-5xl mx-auto">
          <div className="flex justify-center mb-12">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-4xl">
              {integrations.map((integration) => (
                <TabsTrigger 
                  key={integration.id} 
                  value={integration.id}
                  className="data-[state=active]:bg-chart-2 data-[state=active]:text-white"
                >
                  {integration.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {integrations.map((integration) => (
            <TabsContent key={integration.id} value={integration.id} className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <Card className="border-2">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl mb-2">{integration.name} Integration</CardTitle>
                        <CardDescription className="text-base">
                          {integration.description}
                        </CardDescription>
                      </div>
                      <div className="h-12 w-12 relative">
                        {/* This would normally be an actual image, using a placeholder div for now */}
                        <div className="h-full w-full bg-card rounded-md flex items-center justify-center border">
                          {integration.id === 'shopify' && <span className="text-green-500 font-bold">S</span>}
                          {integration.id === 'woocommerce' && <span className="text-purple-500 font-bold">W</span>}
                          {integration.id === 'magento' && <span className="text-orange-500 font-bold">M</span>}
                          {integration.id === 'custom' && <span className="text-blue-500 font-bold">API</span>}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-medium mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {integration.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-chart-2 mt-1">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-muted/40 p-4 rounded-lg">
                          <div className="text-sm text-muted-foreground mb-1">Integration Timeline</div>
                          <div className="font-medium">{integration.timeline}</div>
                        </div>
                        <div className="bg-muted/40 p-4 rounded-lg">
                          <div className="text-sm text-muted-foreground mb-1">Complexity</div>
                          <div className="font-medium">{integration.complexity}</div>
                        </div>
                      </div>
                      
                      <div className="pt-2">
                        <Button asChild>
                          <Link href="#demo">
                            View Integration Guide <ArrowRight className="ml-2 h-5 w-5" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="bg-chart-2/10 p-2 rounded-lg">
                          <Code className="h-5 w-5 text-chart-2" />
                        </div>
                        <CardTitle>Technical Requirements</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {integration.id === 'shopify' && (
                          <>
                            <li className="flex items-start gap-2">
                              <span className="text-chart-2 mt-1">•</span>
                              <span>Shopify Basic plan or higher</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-chart-2 mt-1">•</span>
                              <span>Admin API access</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-chart-2 mt-1">•</span>
                              <span>Storefront API access (for enhanced features)</span>
                            </li>
                          </>
                        )}
                        {integration.id === 'woocommerce' && (
                          <>
                            <li className="flex items-start gap-2">
                              <span className="text-chart-2 mt-1">•</span>
                              <span>WordPress 5.6+ and WooCommerce 4.0+</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-chart-2 mt-1">•</span>
                              <span>REST API enabled</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-chart-2 mt-1">•</span>
                              <span>PHP 7.3+ recommended</span>
                            </li>
                          </>
                        )}
                        {integration.id === 'magento' && (
                          <>
                            <li className="flex items-start gap-2">
                              <span className="text-chart-2 mt-1">•</span>
                              <span>Magento 2.3+ or Adobe Commerce</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-chart-2 mt-1">•</span>
                              <span>API access configuration</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-chart-2 mt-1">•</span>
                              <span>Admin privileges for extension installation</span>
                            </li>
                          </>
                        )}
                        {integration.id === 'custom' && (
                          <>
                            <li className="flex items-start gap-2">
                              <span className="text-chart-2 mt-1">•</span>
                              <span>Ability to make HTTPS requests to our API</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-chart-2 mt-1">•</span>
                              <span>Authentication via API keys or OAuth 2.0</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-chart-2 mt-1">•</span>
                              <span>Webhook endpoint capability (recommended)</span>
                            </li>
                          </>
                        )}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="bg-chart-2/10 p-2 rounded-lg">
                          <Shield className="h-5 w-5 text-chart-2" />
                        </div>
                        <CardTitle>Security & Compliance</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-chart-2 mt-1">•</span>
                          <span>SOC 2 Type II compliant</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-chart-2 mt-1">•</span>
                          <span>GDPR and CCPA ready</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-chart-2 mt-1">•</span>
                          <span>End-to-end encryption for all data</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-chart-2 mt-1">•</span>
                          <span>Regular security audits and penetration testing</span>
                        </li>
                      </ul>
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