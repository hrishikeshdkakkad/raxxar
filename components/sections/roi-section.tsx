"use client"

import { useState } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  Legend 
} from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, DollarSign, ShoppingBag, ArrowDownRight } from 'lucide-react';
import Link from 'next/link';

const conversionData = [
  { name: 'Pre-Matrix', value: 2.8 },
  { name: 'Month 1', value: 3.4 },
  { name: 'Month 2', value: 4.2 },
  { name: 'Month 3', value: 5.1 },
  { name: 'Month 4', value: 6.3 },
  { name: 'Month 5', value: 7.8 },
];

const aovData = [
  { name: 'Pre-Matrix', value: 45 },
  { name: 'Month 1', value: 48 },
  { name: 'Month 2', value: 52 },
  { name: 'Month 3', value: 57 },
  { name: 'Month 4', value: 63 },
  { name: 'Month 5', value: 68 },
];

const monthlyRevenueData = [
  { name: 'Pre-Matrix', value: 100000, projected: 100000 },
  { name: 'Month 1', value: 125000, projected: 105000 },
  { name: 'Month 2', value: 152000, projected: 110000 },
  { name: 'Month 3', value: 186000, projected: 115000 },
  { name: 'Month 4', value: 225000, projected: 120000 },
  { name: 'Month 5', value: 275000, projected: 125000 },
];

const returnsData = [
  { name: 'Pre-Matrix', value: 24 },
  { name: 'Month 1', value: 22 },
  { name: 'Month 2', value: 19 },
  { name: 'Month 3', value: 17 },
  { name: 'Month 4', value: 15 },
  { name: 'Month 5', value: 12 },
];

export default function ROISection() {
  return (
    <section id="roi" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-chart-1/10 border border-chart-1/20 text-sm text-chart-1">
            <TrendingUp className="h-4 w-4 mr-2" />
            <span className="font-medium">Business Impact</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-manrope">
            Measurable ROI for Your Business
          </h2>
          
          <p className="text-xl text-muted-foreground">
            Matrix delivers tangible business results with clear and consistent return on investment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-medium">Conversion Rate</CardTitle>
                <div className="bg-chart-1/10 p-1.5 rounded-full">
                  <TrendingUp className="h-5 w-5 text-chart-1" />
                </div>
              </div>
              <CardDescription>Average increase after Matrix implementation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-1">
                <div className="text-4xl font-bold">178%</div>
                <div className="text-chart-1 font-medium">↑</div>
              </div>
              <div className="mt-4 h-[120px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={conversionData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} strokeOpacity={0.4} />
                    <XAxis dataKey="name" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
                    <YAxis hide domain={[0, 10]} />
                    <Tooltip
                      formatter={(value) => [`${value}%`, 'Conversion Rate']}
                      contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}
                    />
                    <Bar dataKey="value" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-medium">Average Order Value</CardTitle>
                <div className="bg-chart-2/10 p-1.5 rounded-full">
                  <DollarSign className="h-5 w-5 text-chart-2" />
                </div>
              </div>
              <CardDescription>Growth in customer spend per order</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-1">
                <div className="text-4xl font-bold">51%</div>
                <div className="text-chart-2 font-medium">↑</div>
              </div>
              <div className="mt-4 h-[120px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={aovData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} strokeOpacity={0.4} />
                    <XAxis dataKey="name" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
                    <YAxis hide domain={[0, 80]} />
                    <Tooltip
                      formatter={(value) => [`$${value}`, 'AOV']}
                      contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}
                    />
                    <Bar dataKey="value" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-medium">Revenue Growth</CardTitle>
                <div className="bg-chart-3/10 p-1.5 rounded-full">
                  <ShoppingBag className="h-5 w-5 text-chart-3" />
                </div>
              </div>
              <CardDescription>Incremental revenue generated</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-1">
                <div className="text-4xl font-bold">175%</div>
                <div className="text-chart-3 font-medium">↑</div>
              </div>
              <div className="mt-4 h-[120px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyRevenueData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} strokeOpacity={0.4} />
                    <XAxis dataKey="name" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
                    <YAxis hide domain={[90000, 300000]} />
                    <Tooltip
                      formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']}
                      contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="hsl(var(--chart-3))" 
                      strokeWidth={2} 
                      dot={{ r: 3 }}
                      activeDot={{ r: 5 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="projected" 
                      stroke="hsl(var(--muted-foreground))" 
                      strokeDasharray="5 5" 
                      strokeWidth={2} 
                      dot={{ r: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-medium">Return Rate</CardTitle>
                <div className="bg-chart-4/10 p-1.5 rounded-full">
                  <ArrowDownRight className="h-5 w-5 text-chart-4" />
                </div>
              </div>
              <CardDescription>Reduction in costly product returns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-1">
                <div className="text-4xl font-bold">50%</div>
                <div className="text-chart-4 font-medium">↓</div>
              </div>
              <div className="mt-4 h-[120px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={returnsData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} strokeOpacity={0.4} />
                    <XAxis dataKey="name" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
                    <YAxis hide domain={[0, 30]} />
                    <Tooltip
                      formatter={(value) => [`${value}%`, 'Return Rate']}
                      contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}
                    />
                    <Bar dataKey="value" fill="hsl(var(--chart-4))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto bg-card border rounded-xl p-6 md:p-8">
          <h3 className="text-2xl font-bold mb-4 font-manrope">ROI Calculator</h3>
          <p className="text-muted-foreground mb-6">
            Based on industry averages, Matrix delivers the following for a store with $1M annual revenue:
          </p>

          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-muted/40 rounded-lg">
              <div>
                <div className="font-medium">Conversion Rate Increase</div>
                <div className="text-muted-foreground text-sm">From 2.8% to 7.8%</div>
              </div>
              <div className="font-bold text-chart-1">178% ↑</div>
            </div>

            <div className="flex justify-between items-center p-4 bg-muted/40 rounded-lg">
              <div>
                <div className="font-medium">Average Order Value Increase</div>
                <div className="text-muted-foreground text-sm">From $45 to $68</div>
              </div>
              <div className="font-bold text-chart-2">51% ↑</div>
            </div>

            <div className="flex justify-between items-center p-4 bg-muted/40 rounded-lg">
              <div>
                <div className="font-medium">Annual Revenue Growth</div>
                <div className="text-muted-foreground text-sm">First year impact</div>
              </div>
              <div className="font-bold text-chart-3">$1,750,000</div>
            </div>

            <div className="flex justify-between items-center p-4 bg-muted/40 rounded-lg">
              <div>
                <div className="font-medium">Return on Investment</div>
                <div className="text-muted-foreground text-sm">Average ROI across merchants</div>
              </div>
              <div className="font-bold text-chart-1">350% ↑</div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button asChild size="lg">
              <Link href="#demo">
                Calculate Your Specific ROI <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}