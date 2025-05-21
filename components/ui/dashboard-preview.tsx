"use client"

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { MessageSquare, Search, ShoppingCart, TrendingUp, Users } from 'lucide-react';

const chatAnalytics = {
  intentDistribution: [
    { name: 'Product Search', value: 35 },
    { name: 'Support', value: 25 },
    { name: 'Price Inquiry', value: 20 },
    { name: 'Availability', value: 15 },
    { name: 'Other', value: 5 },
  ],
  sentimentTrend: [
    { date: 'Mon', positive: 75, neutral: 20, negative: 5 },
    { date: 'Tue', positive: 80, neutral: 15, negative: 5 },
    { date: 'Wed', positive: 85, neutral: 12, negative: 3 },
    { date: 'Thu', positive: 82, neutral: 15, negative: 3 },
    { date: 'Fri', positive: 88, neutral: 10, negative: 2 },
  ],
  topIntents: [
    { intent: 'Find specific product', count: 450 },
    { intent: 'Check availability', count: 380 },
    { intent: 'Price comparison', count: 320 },
    { intent: 'Product recommendations', count: 290 },
    { intent: 'Size guidance', count: 250 },
  ],
  searchJourney: [
    { stage: 'Initial Query', users: 1000 },
    { stage: 'Refined Search', users: 800 },
    { stage: 'Category Filter', users: 600 },
    { stage: 'Product View', users: 400 },
    { stage: 'Purchase', users: 200 },
  ],
};

const COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))', 'hsl(var(--chart-5))'];

export default function DashboardPreview() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="bg-background p-6">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Customer Intelligence Dashboard</h2>
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="chat">Chat Analytics</TabsTrigger>
            <TabsTrigger value="search">Search Insights</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  AI-Powered Customer Understanding
                </CardTitle>
                <BarChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-base font-semibold mb-1">Rich Customer Profiles</div>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Intent & sentiment extraction</li>
                  <li>• Preferences & product interests</li>
                  <li>• Pain points & objections</li>
                  <li>• Urgency & satisfaction signals</li>
                  <li>• Dynamic persona building</li>
                </ul>
                <p className="mt-2 text-xs text-muted-foreground">Built from AI chat session analysis</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Chat Sessions
                </CardTitle>
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,845</div>
                <p className="text-xs text-muted-foreground">
                  +15% from last week
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Avg. Resolution Time
                </CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2.5 min</div>
                <p className="text-xs text-muted-foreground">
                  -30% from last week
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Customer Satisfaction
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">94%</div>
                <p className="text-xs text-muted-foreground">
                  +5% from last week
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Conversion Rate
                </CardTitle>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12.3%</div>
                <p className="text-xs text-muted-foreground">
                  +2.1% from last week
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Customer Intent Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={chatAnalytics.intentDistribution}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {chatAnalytics.intentDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sentiment Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chatAnalytics.sentimentTrend}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="positive" stroke={COLORS[0]} />
                      <Line type="monotone" dataKey="neutral" stroke={COLORS[1]} />
                      <Line type="monotone" dataKey="negative" stroke={COLORS[2]} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="chat" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Top Customer Intents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chatAnalytics.topIntents}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="intent" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="count" fill={COLORS[0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Customer Journey Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {chatAnalytics.topIntents.map((intent, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{intent.intent}</span>
                        <span className="text-sm text-muted-foreground">{intent.count}</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full">
                        <div
                          className="h-2 rounded-full"
                          style={{
                            width: `${(intent.count / chatAnalytics.topIntents[0].count) * 100}%`,
                            backgroundColor: COLORS[index % COLORS.length],
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="search" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Search Journey Funnel</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chatAnalytics.searchJourney}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="stage" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="users" fill={COLORS[1]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Search Behavior Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Natural Language Queries</span>
                      <span className="text-sm text-muted-foreground">65%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full">
                      <div className="h-2 rounded-full bg-chart-1" style={{ width: '65%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Category Navigation</span>
                      <span className="text-sm text-muted-foreground">25%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full">
                      <div className="h-2 rounded-full bg-chart-2" style={{ width: '25%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Direct SKU/Product Code</span>
                      <span className="text-sm text-muted-foreground">10%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full">
                      <div className="h-2 rounded-full bg-chart-3" style={{ width: '10%' }} />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}