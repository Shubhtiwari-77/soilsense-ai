import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CropRecommendationForm } from "@/components/CropRecommendationForm";
import { CropCard } from "@/components/CropCard";
import { useToast } from "@/hooks/use-toast";
import { Sprout, Brain, Users, TrendingUp, Smartphone, Globe } from "lucide-react";
import heroImage from "@/assets/hero-agriculture.jpg";

interface FormData {
  location: string;
  soilType: string;
  cropSeason: string;
  temperature: string;
  rainfall: string;
}

interface CropRecommendation {
  name: string;
  hindi_name?: string;
  suitability_score: number;
  expected_yield: string;
  profit_margin: string;
  sustainability_score: number;
  growing_period: string;
  description: string;
  market_demand: "High" | "Medium" | "Low";
}

const Index = () => {
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<CropRecommendation[]>([]);
  const { toast } = useToast();

  // Mock crop recommendations for demonstration
  const mockRecommendations: CropRecommendation[] = [
    {
      name: "Rice",
      hindi_name: "चावल",
      suitability_score: 95,
      expected_yield: "4.5 tons/hectare",
      profit_margin: "₹45,000/hectare",
      sustainability_score: 88,
      growing_period: "120-150 days",
      description: "High-yielding variety suitable for monsoon season with excellent water management.",
      market_demand: "High"
    },
    {
      name: "Wheat",
      hindi_name: "गेहूं", 
      suitability_score: 87,
      expected_yield: "3.8 tons/hectare",
      profit_margin: "₹38,000/hectare",
      sustainability_score: 92,
      growing_period: "110-130 days",
      description: "Winter crop with strong market demand and good soil compatibility.",
      market_demand: "High"
    },
    {
      name: "Sugarcane",
      hindi_name: "गन्ना",
      suitability_score: 82,
      expected_yield: "80 tons/hectare",
      profit_margin: "₹65,000/hectare",
      sustainability_score: 75,
      growing_period: "12-18 months",
      description: "Long-term cash crop with high profit potential and steady market.",
      market_demand: "Medium"
    }
  ];

  const handleFormSubmit = async (data: FormData) => {
    setIsLoading(true);
    
    // Simulate AI processing
    setTimeout(() => {
      setRecommendations(mockRecommendations);
      setShowRecommendations(true);
      setIsLoading(false);
      
      toast({
        title: "Recommendations Generated!",
        description: `Found ${mockRecommendations.length} suitable crops for ${data.location}`,
      });
    }, 2000);
  };

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning models analyze soil, weather, and market data"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Works perfectly on smartphones with offline capabilities"
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Available in Hindi, English, and local languages"
    },
    {
      icon: TrendingUp,
      title: "Profit Optimization",
      description: "Maximize your income with data-driven crop recommendations"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-earth">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4 -mt-16 pt-16">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto text-white">
          <Badge className="mb-6 bg-accent/20 text-accent border-accent/30">
            <Sprout className="w-4 h-4 mr-2" />
            AI-Powered Agriculture
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Smart Crop Recommendations for
            <span className="bg-gradient-harvest bg-clip-text text-transparent"> Every Farmer</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Get personalized crop suggestions based on your soil, weather, and market conditions. 
            Increase your yield and profit with AI-driven agricultural intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-6"
              onClick={() => document.getElementById('recommendation-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Analysis
            </Button>
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 text-lg px-8 py-6"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Empowering Farmers with Technology
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our AI system combines satellite data, weather forecasts, and market trends 
              to provide you with the most accurate crop recommendations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-card shadow-earth hover:shadow-glow transition-all duration-300">
                <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommendation Form Section */}
      <section id="recommendation-form" className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get Your Personalized Recommendations
            </h2>
            <p className="text-lg text-muted-foreground">
              Enter your location and soil details to receive AI-powered crop suggestions
            </p>
          </div>
          
          <CropRecommendationForm onSubmit={handleFormSubmit} isLoading={isLoading} />
        </div>
      </section>

      {/* Recommendations Display */}
      {showRecommendations && (
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Your AI-Generated Recommendations
              </h2>
              <p className="text-lg text-muted-foreground">
                Top crop suggestions ranked by suitability and profitability
              </p>
            </div>
            
            <div className="space-y-6">
              {recommendations.map((crop, index) => (
                <CropCard key={crop.name} crop={crop} rank={index + 1} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button 
                variant="secondary" 
                onClick={() => setShowRecommendations(false)}
                className="px-8"
              >
                Try Another Analysis
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Stats Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-primary-foreground/80">Farmers Helped</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25%</div>
              <div className="text-primary-foreground/80">Average Yield Increase</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">₹50,000</div>
              <div className="text-primary-foreground/80">Average Additional Income</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sprout className="w-8 h-8 text-accent" />
            <span className="text-2xl font-bold">AgriAI</span>
          </div>
          <p className="text-background/80">
            Empowering farmers across India with AI-driven agricultural intelligence
          </p>
          <p className="text-background/60 text-sm mt-4">
            © 2025 Government of Jharkhand - Department of Higher and Technical Education
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;