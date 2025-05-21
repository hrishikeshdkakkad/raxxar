"use client"

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart2, 
  Zap, 
  Lock, 
  Globe, 
  Users, 
  Layers, 
  MessageSquare, 
  Database,
  Shield,
  Search
} from 'lucide-react';

const featureCategories = [
  {
    id: 'analytics',
    name: 'Analytics',
    icon: <BarChart2 className="h-4 w-4" />,
    features: [
      {
        title: 'Customer Journey Mapping',
        description: 'Visualize the complete path from first touch to purchase and identify optimization opportunities',
        badge: 'Enterprise'
      },
      {
        title: 'Conversion Funnel Analysis',
        description: 'Track where customers drop off and implement targeted interventions',
        badge: 'Core'
      },
      {
        title: 'Product Performance Metrics',
        description: 'Detailed analytics on product views, conversions, and revenue contribution',
        badge: 'Core'
      },
      {
        title: 'Cohort Analysis',
        description: 'Compare performance across different customer segments and time periods',
        badge: 'Enterprise'
      },
      {
        title: 'Custom Reports & Dashboards',
        description: 'Build tailored analytics views for different stakeholders in your organization',
        badge: 'Enterprise'
      },
      {
        title: 'Predictive Analytics',
        description: 'AI-powered forecasting for inventory, sales, and customer behavior',
        badge: 'Premium'
      }
    ]
  },
  {
    id: 'ai',
    name: 'AI Capabilities',
    icon: <Zap className="h-4 w-4" />,
    features: [
      {
        title: 'Conversational Shopping Assistant',
        description: 'AI-powered product discovery and recommendation engine',
        badge: 'Core'
      },
      {
        title: 'Natural Language Product Search',
        description: 'Let customers describe what they want in natural language',
        badge: 'Core'
      },
      {
        title: 'Personalized Recommendations',
        description: 'Dynamic product suggestions based on browsing behavior and preferences',
        badge: 'Core'
      },
      {
        title: 'Visual Search Integration',
        description: 'Allow customers to find products using images',
        badge: 'Premium'
      },
      {
        title: 'AI-Generated Product Descriptions',
        description: 'Create compelling product content automatically',
        badge: 'Premium'
      },
      {
        title: 'Sentiment Analysis',
        description: 'Understand customer feelings and intent from interactions',
        badge: 'Enterprise'
      }
    ]
  },
  {
    id: 'integration',
    name: 'Integration',
    icon: <Layers className="h-4 w-4" />,
    features: [
      {
        title: 'E-commerce Platform Connectors',
        description: 'Pre-built integrations for Shopify, WooCommerce, Magento, and more',
        badge: 'Core'
      },
      {
        title: 'API Access',
        description: 'RESTful and GraphQL APIs for custom integrations',
        badge: 'Core'
      },
      {
        title: 'Webhook Support',
        description: 'Real-time event notifications for system integrations',
        badge: 'Core'
      },
      {
        title: 'Single Sign-On',
        description: 'Enterprise SSO with SAML, OAuth, and OIDC support',
        badge: 'Enterprise'
      },
      {
        title: 'Data Warehouse Connections',
        description: 'Export data to Snowflake, BigQuery, or Redshift',
        badge: 'Enterprise'
      },
      {
        title: 'Custom Development Services',
        description: 'Tailored integration solutions for unique business requirements',
        badge: 'Premium'
      }
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise Features',
    icon: <Shield className="h-4 w-4" />,
    features: [
      {
        title: 'Multi-Store Management',
        description: 'Unified analytics and management across multiple storefronts',
        badge: 'Enterprise'
      },
      {
        title: 'Role-Based Access Control',
        description: 'Granular permissions for team members and departments',
        badge: 'Enterprise'
      },
      {
        title: 'White-Label Capabilities',
        description: 'Brand the Matrix experience with your company identity',
        badge: 'Enterprise'
      },
      {
        title: 'SLA & Priority Support',
        description: 'Guaranteed response times and dedicated support team',
        badge: 'Enterprise'
      },
      {
        title: 'Compliance Management',
        description: 'Tools to ensure GDPR, CCPA, and other regulatory compliance',
        badge: 'Enterprise'
      },
      {
        title: 'Advanced Security Features',
        description: 'SSO, MFA, audit logs, and security controls',
        badge: 'Enterprise'
      }
    ]
  }
];

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState('analytics');

  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-manrope">
            Comprehensive Features for E-commerce Success
          </h2>
          
          <p className="text-xl text-muted-foreground">
            Matrix provides a complete suite of tools to transform your e-commerce business.
          </p>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-5xl mx-auto">
          <div className="flex justify-center mb-12">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-4xl">
              {featureCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <div className="flex items-center gap-2">
                    {category.icon}
                    <span className="hidden md:inline">{category.name}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {featureCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.features.map((feature, index) => (
                  <Card key={index} className="h-full">
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between gap-4">
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                        <Badge 
                          variant={
                            feature.badge === 'Core' 
                              ? 'outline' 
                              : feature.badge === 'Premium' 
                                ? 'secondary' 
                                : 'default'
                          }
                        >
                          {feature.badge}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <p className="text-muted-foreground mb-2">
                  The {category.name} module is available in all plans with varying feature sets.
                </p>
                <div className="flex justify-center gap-4 mt-4">
                  <Badge variant="outline">Core</Badge>
                  <Badge variant="secondary">Premium</Badge>
                  <Badge variant="default">Enterprise</Badge>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}