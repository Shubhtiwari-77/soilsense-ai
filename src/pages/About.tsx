import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Target, Users, Award, Brain, Shield } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Recommendations",
      description: "Advanced machine learning algorithms analyze soil, weather, and market data to provide personalized crop suggestions."
    },
    {
      icon: Shield,
      title: "Sustainable Farming",
      description: "Our recommendations prioritize environmental sustainability and soil health for long-term agricultural success."
    },
    {
      icon: Target,
      title: "Data-Driven Insights",
      description: "Real-time integration with satellite data, weather forecasts, and market prices for accurate recommendations."
    },
    {
      icon: Users,
      title: "Farmer-Centric Design",
      description: "Built with farmers in mind, featuring multilingual support and simple, intuitive interfaces."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Farmers Helped" },
    { number: "95%", label: "Accuracy Rate" },
    { number: "50+", label: "Crop Varieties" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Leaf className="h-12 w-12 text-primary" />
            <h1 className="text-4xl font-bold text-primary">SoilSense AI</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering farmers with AI-driven crop recommendations for sustainable and profitable agriculture
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="shadow-earth mb-12">
          <CardHeader>
            <CardTitle className="text-center text-2xl text-primary">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-center text-muted-foreground max-w-4xl mx-auto">
              To revolutionize agriculture through intelligent technology that helps farmers make informed decisions, 
              increase productivity, and adopt sustainable farming practices while maximizing their income potential.
            </p>
          </CardContent>
        </Card>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-earth text-center">
              <CardContent className="p-6">
                <p className="text-3xl font-bold text-primary mb-2">{stat.number}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="shadow-earth">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon className="h-6 w-6 text-accent" />
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* About the Technology */}
        <Card className="shadow-earth mb-12">
          <CardHeader>
            <CardTitle className="text-center text-2xl text-primary">How It Works</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="bg-primary/10 rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold mb-2">Data Collection</h3>
                <p className="text-sm text-muted-foreground">
                  We gather soil data, weather patterns, and market information from multiple reliable sources.
                </p>
              </div>
              
              <div>
                <div className="bg-accent/10 rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">2</span>
                </div>
                <h3 className="font-semibold mb-2">AI Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Our advanced algorithms analyze the data to identify the most suitable crops for your conditions.
                </p>
              </div>
              
              <div>
                <div className="bg-primary/10 rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-semibold mb-2">Recommendations</h3>
                <p className="text-sm text-muted-foreground">
                  Receive personalized crop suggestions with yield forecasts and profit projections.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team/Company Info */}
        <Card className="shadow-earth">
          <CardHeader>
            <CardTitle className="text-center text-2xl text-primary">Built for Jharkhand Farmers</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto">
              Developed in collaboration with the Government of Jharkhand, Department of Higher and Technical Education, 
              this platform is specifically designed to address the unique agricultural challenges and opportunities 
              in Jharkhand's diverse farming landscape.
            </p>
            <div className="flex items-center justify-center mt-6">
              <Award className="h-6 w-6 text-accent mr-2" />
              <span className="text-accent font-semibold">Government of Jharkhand Initiative</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}