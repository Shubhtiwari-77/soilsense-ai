import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CloudSun, Droplets, Wind, Thermometer, Eye, Gauge } from "lucide-react";

export default function Weather() {
  const weatherData = {
    current: {
      temperature: 28,
      condition: "Partly Cloudy",
      humidity: 65,
      windSpeed: 12,
      visibility: 10,
      pressure: 1013
    },
    forecast: [
      { day: "Today", high: 32, low: 24, condition: "Sunny", rainfall: 0 },
      { day: "Tomorrow", high: 29, low: 22, condition: "Cloudy", rainfall: 5 },
      { day: "Friday", high: 26, low: 20, condition: "Rainy", rainfall: 25 },
      { day: "Saturday", high: 27, low: 21, condition: "Partly Cloudy", rainfall: 10 },
      { day: "Sunday", high: 30, low: 23, condition: "Sunny", rainfall: 0 }
    ]
  };

  const getConditionIcon = (condition: string) => {
    if (condition.includes("Sunny")) return "☀️";
    if (condition.includes("Cloudy")) return "⛅";
    if (condition.includes("Rainy")) return "🌧️";
    return "🌤️";
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">Weather Forecast</h1>
          <p className="text-lg text-muted-foreground">
            Stay informed about weather conditions for better farming decisions
          </p>
        </div>

        <div className="grid gap-6 mb-8">
          {/* Current Weather */}
          <Card className="shadow-earth">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CloudSun className="h-6 w-6 text-primary" />
                Current Weather
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                <div className="flex items-center gap-2">
                  <Thermometer className="h-5 w-5 text-accent" />
                  <div>
                    <p className="text-2xl font-bold">{weatherData.current.temperature}°C</p>
                    <p className="text-sm text-muted-foreground">Temperature</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Droplets className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xl font-bold">{weatherData.current.humidity}%</p>
                    <p className="text-sm text-muted-foreground">Humidity</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Wind className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-xl font-bold">{weatherData.current.windSpeed}</p>
                    <p className="text-sm text-muted-foreground">Wind (km/h)</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-xl font-bold">{weatherData.current.visibility}</p>
                    <p className="text-sm text-muted-foreground">Visibility (km)</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Gauge className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-xl font-bold">{weatherData.current.pressure}</p>
                    <p className="text-sm text-muted-foreground">Pressure (hPa)</p>
                  </div>
                </div>

                <div className="col-span-2 md:col-span-1">
                  <Badge variant="secondary" className="text-lg px-4 py-2">
                    {weatherData.current.condition}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 5-Day Forecast */}
          <Card className="shadow-earth">
            <CardHeader>
              <CardTitle>5-Day Forecast</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {weatherData.forecast.map((day) => (
                  <div key={day.day} className="text-center p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">{day.day}</h3>
                    <div className="text-3xl mb-2">{getConditionIcon(day.condition)}</div>
                    <p className="text-sm text-muted-foreground mb-2">{day.condition}</p>
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold">{day.high}°</span>
                      <span className="text-muted-foreground">{day.low}°</span>
                    </div>
                    <div className="flex items-center justify-center gap-1 mt-2">
                      <Droplets className="h-3 w-3 text-primary" />
                      <span className="text-xs">{day.rainfall}mm</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-earth">
            <CardHeader>
              <CardTitle className="text-accent">Farming Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Good weather for field preparation and sowing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Monitor soil moisture levels before irrigation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Expected rain on Friday - delay fertilizer application</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-earth">
            <CardHeader>
              <CardTitle className="text-primary">Weather Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2 p-3 bg-accent/10 rounded-lg">
                  <span className="text-lg">⚠️</span>
                  <div>
                    <p className="font-semibold text-accent">Moderate Rain Expected</p>
                    <p className="text-sm text-muted-foreground">Friday: 25mm rainfall predicted</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}