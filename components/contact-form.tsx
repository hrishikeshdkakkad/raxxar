"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";
import { useState } from "react";

const formSchema = z.object({
  // Business Profile
  role: z.string({
    required_error: "Please select your role",
  }).min(1, "Please select your role"),
  roleOther: z.string().optional(),
  businessSize: z.string({
    required_error: "Please select your business size",
  }).min(1, "Please select your business size"),
  platform: z.array(z.string()).min(1, "Please select at least one platform"),
  platformOther: z.string().optional(),
  salesVolume: z.string({
    required_error: "Please select your sales volume",
  }).min(1, "Please select your sales volume"),
  
  // Current Challenges
  challenges: z.array(z.object({
    id: z.string(),
    rating: z.number({ required_error: "Please rate this challenge" }).min(1, "Please rate this challenge").max(5, "Please rate this challenge"),
  })).refine(arr => arr.every(c => c.rating), { message: "Please rate all challenges" }),
  currentTools: z.array(z.string()).min(1, "Please select at least one tool"),
  currentToolsOther: z.string().optional(),
  personalization: z.string().min(10, "Please provide more detail about your current personalization approach"),
  
  // Contact Information
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  
  // Additional Information
  betaTester: z.boolean().refine(val => val === true || val === false, { message: "Please indicate if you want to be a beta tester" }),
  additionalInfo: z.string().optional(),
});

const roles = [
  "Owner/CEO",
  "Marketing Director/Manager",
  "E-commerce Manager",
  "Digital Transformation Lead",
  "IT/Technology Manager",
  "Other"
];

const businessSizes = [
  "Small (1-10 employees)",
  "Medium (11-50 employees)",
  "Large (51-200 employees)",
  "Enterprise (201+ employees)"
];

const platforms = [
  "Shopify",
  "WooCommerce",
  "Magento",
  "BigCommerce",
  "Custom-built solution",
  "Other"
];

const salesVolumes = [
  "Under $10,000",
  "$10,000 - $50,000",
  "$50,001 - $200,000",
  "$200,001 - $1,000,000",
  "Over $1,000,000"
];

const challenges = [
  "Understanding customer search behavior",
  "Personalizing product recommendations",
  "Converting browsers to buyers",
  "Reducing cart abandonment",
  "Getting actionable insights from customer data",
  "Managing customer support inquiries",
  "Cross-selling and upselling effectively",
  "Optimizing product catalog discoverability"
];

const tools = [
  "Google Analytics",
  "Heatmap tools (e.g., Hotjar)",
  "Customer surveys",
  "A/B testing tools",
  "Session recording tools",
  "None",
  "Other"
];

// Add scale labels for challenge ratings
const challengeScaleLabels = [
  { value: 1, label: "Not a challenge" },
  { value: 2, label: "Slight challenge" },
  { value: 3, label: "Moderate challenge" },
  { value: 4, label: "Significant challenge" },
  { value: 5, label: "Major challenge" },
];

export default function ContactForm({ onSuccess }: { onSuccess?: () => void }) {
  const [step, setStep] = useState(0);
  const steps = [
    {
      title: "Business Profile",
      emoji: "🏢",
    },
    {
      title: "Current Challenges",
      emoji: "🧩",
    },
    {
      title: "Contact Info",
      emoji: "📇",
    },
  ];

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      challenges: challenges.map(c => ({ id: c, rating: undefined })),
      currentTools: [],
      platform: [],
      betaTester: false,
    },
    mode: "onTouched",
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Thanks for your interest!",
      description: "We'll be in touch soon about early access to Raxxar.",
    });
    if (onSuccess) {
      onSuccess();
    }
  }

  // Step validation helpers
  const validateStep = async () => {
    let fields: string[] = [];
    if (step === 0) fields = ["role", "businessSize", "platform", "salesVolume"];
    if (step === 1) fields = ["challenges", "currentTools", "personalization"];
    if (step === 2) fields = ["name", "email", "company"];
    const result = await form.trigger(fields as any);
    return result;
  };

  // Progress bar width
  const progress = ((step + 1) / steps.length) * 100;

  return (
    <div className="max-w-2xl w-full mx-auto px-2 sm:px-4 md:px-8 py-4 max-h-screen overflow-y-auto">
      <div className="flex flex-col items-center mb-6">
        <span className="text-4xl mb-2">📝</span>
        <h2 className="text-2xl font-bold mb-1 text-center">Tell us about your business</h2>
        <p className="text-gray-500 text-center max-w-md">We'd love to learn more about you and your e-commerce journey. This helps us tailor Raxxar to your needs. The form takes just 2-3 minutes!</p>
      </div>
      {/* Stepper */}
      <div className="flex items-center justify-between mb-6">
        {steps.map((s, i) => (
          <div key={s.title} className="flex-1 flex flex-col items-center">
            <div className={`rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold border-2 transition-colors duration-200 ${i === step ? 'bg-primary text-white border-primary' : 'bg-gray-100 text-gray-400 border-gray-300'}`}>{s.emoji}</div>
            <span className={`text-xs mt-1 ${i === step ? 'text-primary font-semibold' : 'text-gray-400'}`}>{s.title}</span>
          </div>
        ))}
      </div>
      <div className="w-full h-2 bg-gray-200 rounded mb-8 overflow-hidden">
        <div className="h-full bg-primary transition-all duration-300" style={{ width: `${progress}%` }} />
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Step 1: Business Profile */}
          {step === 0 && (
            <Card className="p-6 mb-4 animate-fade-in">
              <h3 className="text-lg font-semibold mb-1 flex items-center gap-2">🏢 Business Profile</h3>
              <p className="text-gray-500 mb-4 text-sm">Help us understand your business background.</p>
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What is your role?</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your role (e.g. Owner, Manager...)" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {roles.map((role) => (
                            <SelectItem key={role} value={role}>
                              {role}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormDescription>Choose the option that best describes your position.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="businessSize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business size</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select business size" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {businessSizes.map((size) => (
                            <SelectItem key={size} value={size}>
                              {size}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormDescription>How many people work at your company?</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="platform"
                  render={() => (
                    <FormItem>
                      <FormLabel>E-commerce platform(s)</FormLabel>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {platforms.map((platform) => (
                          <FormField
                            key={platform}
                            control={form.control}
                            name="platform"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={platform}
                                  className="flex flex-row items-start space-x-3 space-y-0 hover:bg-gray-50 rounded-md px-2 py-1 transition-colors"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(platform)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, platform])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== platform
                                              )
                                            )
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    {platform}
                                  </FormLabel>
                                </FormItem>
                              )
                            }}
                          />
                        ))}
                      </div>
                      <FormDescription>Select all that apply.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="salesVolume"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Monthly online sales volume</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select sales volume" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {salesVolumes.map((volume) => (
                            <SelectItem key={volume} value={volume}>
                              {volume}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormDescription>Approximate monthly online sales.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </Card>
          )}
          {/* Step 2: Current Challenges */}
          {step === 1 && (
            <Card className="p-6 mb-4 animate-fade-in">
              <h3 className="text-lg font-semibold mb-1 flex items-center gap-2">🧩 Current Challenges</h3>
              <p className="text-gray-500 mb-4 text-sm">Tell us about your current e-commerce pain points and tools.</p>
              <div className="space-y-4">
                <div>
                  <FormLabel className="mb-4 block">Rate the following challenges in your current e-commerce operations:</FormLabel>
                  {challenges.map((challenge) => (
                    <FormField
                      key={challenge}
                      control={form.control}
                      name={`challenges`}
                      render={({ field }) => (
                        <FormItem className="mb-4">
                          <FormLabel className="font-normal">{challenge}</FormLabel>
                          {/* Scale labels */}
                          <div className="flex justify-between text-xs mb-1 px-1">
                            {challengeScaleLabels.map((s, idx) => (
                              <span
                                key={s.value}
                                className={
                                  idx === 0
                                    ? "text-muted-foreground font-semibold"
                                    : idx === challengeScaleLabels.length - 1
                                    ? "text-primary font-semibold"
                                    : "text-gray-500"
                                }
                                style={{ width: '20%', textAlign: 'center' }}
                              >
                                {s.label}
                              </span>
                            ))}
                          </div>
                          <FormControl>
                            <RadioGroup
                              onValueChange={(value) => {
                                const updatedChallenges = field.value.map(c => 
                                  c.id === challenge ? { ...c, rating: parseInt(value) } : c
                                );
                                field.onChange(updatedChallenges);
                              }}
                              value={
                                field.value.find(c => c.id === challenge)?.rating
                                  ? String(field.value.find(c => c.id === challenge)?.rating)
                                  : undefined
                              }
                              className="flex flex-row justify-between gap-2 px-1"
                            >
                              {challengeScaleLabels.map((s) => (
                                <FormItem key={s.value} className="flex flex-col items-center flex-1">
                                  <FormControl>
                                    <RadioGroupItem value={s.value.toString()} />
                                  </FormControl>
                                  <span className="sr-only">{s.label}</span>
                                </FormItem>
                              ))}
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ))}
                </div>
                <FormField
                  control={form.control}
                  name="currentTools"
                  render={() => (
                    <FormItem>
                      <FormLabel>What tools do you currently use to understand customer behavior?</FormLabel>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {tools.map((tool) => (
                          <FormField
                            key={tool}
                            control={form.control}
                            name="currentTools"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={tool}
                                  className="flex flex-row items-start space-x-3 space-y-0 hover:bg-gray-50 rounded-md px-2 py-1 transition-colors"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(tool)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, tool])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== tool
                                              )
                                            )
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    {tool}
                                  </FormLabel>
                                </FormItem>
                              )
                            }}
                          />
                        ))}
                      </div>
                      <FormDescription>Select all that you use regularly.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="personalization"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>How do you currently personalize the shopping experience?</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="E.g. Personalized emails, product recommendations, dynamic content..."
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>Share your approach, even if it's basic!</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </Card>
          )}
          {/* Step 3: Contact Info & Additional */}
          {step === 2 && (
            <Card className="p-6 mb-4 animate-fade-in">
              <h3 className="text-lg font-semibold mb-1 flex items-center gap-2">📇 Contact Information</h3>
              <p className="text-gray-500 mb-4 text-sm">So we can get in touch with you about Raxxar.</p>
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="you@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your company name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="betaTester"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          I'm interested in being a beta tester
                        </FormLabel>
                        <FormDescription>
                          Get early access and help shape the future of Raxxar
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="additionalInfo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Information</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Anything else you'd like to share? (Optional)"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </Card>
          )}
          {/* Navigation Buttons */}
          <div className="flex justify-between gap-4 mt-4">
            {step > 0 && (
              <Button type="button" variant="outline" onClick={() => setStep(step - 1)}>
                ← Back
              </Button>
            )}
            <div className="flex-1" />
            {step < steps.length - 1 && (
              <Button
                type="button"
                onClick={async () => {
                  const valid = await validateStep();
                  if (valid) setStep(step + 1);
                }}
                className="transition-transform duration-150 hover:scale-105 hover:bg-primary/90"
              >
                Next →
              </Button>
            )}
            {step === steps.length - 1 && (
              <Button type="submit" className="transition-transform duration-150 hover:scale-105 hover:bg-primary/90">
                Submit 🚀
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
}