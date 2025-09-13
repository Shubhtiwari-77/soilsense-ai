import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Minus, MapPin, Calendar } from "lucide-react";

export default function Market() {
  const marketData = [
    {
      crop: "Rice",
      hindiName: "चावल",
      currentPrice: 2250,
      previousPrice: 2180,
      change: +70,
      unit: "quintal",
      market: "Ranchi Mandi",
      lastUpdated: "Today, 2:30 PM"
    },
    {
      crop: "Wheat",
      hindiName: "गेहूं",
      currentPrice: 2100,
      previousPrice: 2150,
      change: -50,
      unit: "quintal",
      market: "Jamshedpur Market",
      lastUpdated: "Today, 1:45 PM"
    },
    {
      crop: "Maize",
      hindiName: "मक्का",
      currentPrice: 1850,
      previousPrice: 1850,
      change: 0,
      unit: "quintal",
      market: "Dhanbad Mandi",
      lastUpdated: "Today, 12:15 PM"
    },
    {
      crop: "Sugarcane",
      hindiName: "गन्ना",
      currentPrice: 350,
      previousPrice: 340,
      change: +10,
      unit: "quintal",
      market: "Bokaro Market",
      lastUpdated: "Today, 11:30 AM"
    },
    {
      crop: "Soybean",
      hindiName: "सोयाबीन",
      currentPrice: 4200,
      previousPrice: 4100,
      change: +100,
      unit: "quintal",
      market: "Ranchi Mandi",
      lastUpdated: "Today, 10:00 AM"
    },
    {
      crop: "Cotton",
      hindiName: "कपास",
      currentPrice: 6800,
      previousPrice: 6950,
      change: -150,
      unit: "quintal",
      market: "Deoghar Market",
      lastUpdated: "Today, 9:15 AM"
    }
  ];

  const getTrendIcon = (change: number) => {
    if (change > 0) return <TrendingUp className="h-4 w-4 text-accent" />;
    if (change < 0) return <TrendingDown className="h-4 w-4 text-destructive" />;
    return <Minus className="h-4 w-4 text-muted-foreground" />;
  };

  const getTrendColor = (change: number) => {
    if (change > 0) return "text-accent";
    if (change < 0) return "text-destructive";
    return "text-muted-foreground";
  };

  const getTrendBadge = (change: number) => {
    if (change > 0) return "bg-accent/10 text-accent";
    if (change < 0) return "bg-destructive/10 text-destructive";
    return "bg-muted text-muted-foreground";
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">Market Prices</h1>
          <p className="text-lg text-muted-foreground">
            Live agricultural commodity prices from Jharkhand markets
          </p>
        </div>

        <div className="grid gap-4 mb-8">
          {marketData.map((item) => (
            <Card key={item.crop} className="shadow-earth hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
                  <div className="md:col-span-2">
                    <h3 className="text-lg font-semibold">{item.crop}</h3>
                    <p className="text-sm text-muted-foreground">{item.hindiName}</p>
                  </div>

                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">₹{item.currentPrice}</p>
                    <p className="text-sm text-muted-foreground">per {item.unit}</p>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2">
                      {getTrendIcon(item.change)}
                      <span className={`font-semibold ${getTrendColor(item.change)}`}>
                        ₹{Math.abs(item.change)}
                      </span>
                    </div>
                    <Badge className={getTrendBadge(item.change)}>
                      {item.change > 0 && "+"}₹{item.change}
                    </Badge>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      <span>{item.market}</span>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{item.lastUpdated}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-earth">
            <CardHeader>
              <CardTitle className="text-accent">Market Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <TrendingUp className="h-4 w-4 text-accent mt-0.5" />
                  <span>Rice and Soybean prices showing upward trend</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingDown className="h-4 w-4 text-destructive mt-0.5" />
                  <span>Cotton prices down due to increased supply</span>
                </li>
                <li className="flex items-start gap-2">
                  <Minus className="h-4 w-4 text-muted-foreground mt-0.5" />
                  <span>Maize prices stable with steady demand</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-earth">
            <CardHeader>
              <CardTitle className="text-primary">Trading Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Best time to sell Rice - prices expected to rise further</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Hold Wheat stocks - market may recover next week</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Sugarcane showing consistent growth - good investment</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}