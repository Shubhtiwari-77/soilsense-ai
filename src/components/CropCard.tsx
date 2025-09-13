import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, DollarSign, Leaf, Calendar } from "lucide-react";

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

interface CropCardProps {
  crop: CropRecommendation;
  rank: number;
}

export const CropCard = ({ crop, rank }: CropCardProps) => {
  const getDemandColor = (demand: string) => {
    switch (demand) {
      case "High": return "bg-accent text-accent-foreground";
      case "Medium": return "bg-secondary text-secondary-foreground";
      case "Low": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getSuitabilityColor = (score: number) => {
    if (score >= 80) return "text-accent";
    if (score >= 60) return "text-primary";
    return "text-muted-foreground";
  };

  return (
    <Card className="hover:shadow-earth transition-all duration-300 border-l-4 border-l-primary">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg flex items-center gap-2">
              <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                {rank}
              </span>
              {crop.name}
            </CardTitle>
            {crop.hindi_name && (
              <p className="text-sm text-muted-foreground mt-1">{crop.hindi_name}</p>
            )}
          </div>
          <Badge className={getDemandColor(crop.market_demand)}>
            {crop.market_demand} Demand
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{crop.description}</p>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Leaf className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Suitability</span>
            </div>
            <div className="flex items-center gap-2">
              <Progress value={crop.suitability_score} className="flex-1" />
              <span className={`text-sm font-bold ${getSuitabilityColor(crop.suitability_score)}`}>
                {crop.suitability_score}%
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Leaf className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">Sustainability</span>
            </div>
            <div className="flex items-center gap-2">
              <Progress value={crop.sustainability_score} className="flex-1" />
              <span className="text-sm font-bold text-accent">
                {crop.sustainability_score}%
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-2 border-t">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Expected Yield</p>
              <p className="text-sm font-semibold">{crop.expected_yield}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-accent" />
            <div>
              <p className="text-xs text-muted-foreground">Profit Margin</p>
              <p className="text-sm font-semibold text-accent">{crop.profit_margin}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 pt-2 border-t">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Growing Period: {crop.growing_period}</span>
        </div>
      </CardContent>
    </Card>
  );
};