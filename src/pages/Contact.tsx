import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, MessageSquare, HelpCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Support",
      details: "+91 9876543210",
      subtitle: "Mon-Fri, 9 AM - 6 PM"
    },
    {
      icon: Mail,
      title: "Email Support",
      details: "support@soilsense.ai",
      subtitle: "24/7 Email Response"
    },
    {
      icon: MapPin,
      title: "Office Address",
      details: "Department of Agriculture, Ranchi",
      subtitle: "Jharkhand, India - 834001"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Monday - Friday",
      subtitle: "9:00 AM - 6:00 PM IST"
    }
  ];

  const faqItems = [
    {
      question: "How accurate are the crop recommendations?",
      answer: "Our AI system has a 95% accuracy rate based on extensive testing with real farm data from Jharkhand."
    },
    {
      question: "Is this service free for farmers?",
      answer: "Yes, SoilSense AI is completely free for all farmers as part of the Government of Jharkhand's digital agriculture initiative."
    },
    {
      question: "Can I use this offline?",
      answer: "The mobile app works offline for basic features, though real-time data updates require internet connectivity."
    },
    {
      question: "What languages are supported?",
      answer: "Currently available in Hindi and English, with plans to add more regional languages soon."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground">
            We're here to help you succeed in your farming journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Contact Form */}
          <Card className="shadow-earth">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Subject</Label>
                  <Select value={formData.subject} onValueChange={(value) => setFormData({...formData, subject: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technical">Technical Support</SelectItem>
                      <SelectItem value="recommendations">Crop Recommendations</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-earth">
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{item.title}</h3>
                          <p className="text-primary">{item.details}</p>
                          <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-earth">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-accent" />
                  Frequently Asked Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {faqItems.map((faq, index) => (
                    <div key={index} className="border-b pb-4 last:border-b-0">
                      <h4 className="font-semibold mb-2">{faq.question}</h4>
                      <p className="text-sm text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}