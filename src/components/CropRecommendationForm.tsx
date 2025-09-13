import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { MapPin, Thermometer, Droplets, Leaf } from "lucide-react";

interface FormData {
  location: string;
  soilType: string;
  cropSeason: string;
  temperature: string;
  rainfall: string;
}

interface CropRecommendationFormProps {
  onSubmit: (data: FormData) => void;
  isLoading?: boolean;
}

export const CropRecommendationForm = ({ onSubmit, isLoading = false }: CropRecommendationFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    location: "",
    soilType: "",
    cropSeason: "",
    temperature: "",
    rainfall: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const updateField = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-lg mx-auto shadow-earth">
      <CardHeader className="bg-gradient-primary text-primary-foreground rounded-t-lg">
        <CardTitle className="flex items-center gap-2">
          <Leaf className="h-5 w-5" />
          Crop Recommendation Input
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="location" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Location
            </Label>
            <Input
              id="location"
              placeholder="Enter your district/state"
              value={formData.location}
              onChange={(e) => updateField("location", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Soil Type</Label>
            <Select value={formData.soilType} onValueChange={(value) => updateField("soilType", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select soil type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="clay">Clay Soil</SelectItem>
                <SelectItem value="sandy">Sandy Soil</SelectItem>
                <SelectItem value="loamy">Loamy Soil</SelectItem>
                <SelectItem value="black">Black Cotton Soil</SelectItem>
                <SelectItem value="red">Red Soil</SelectItem>
                <SelectItem value="alluvial">Alluvial Soil</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Crop Season</Label>
            <Select value={formData.cropSeason} onValueChange={(value) => updateField("cropSeason", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select season" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="kharif">Kharif (Monsoon)</SelectItem>
                <SelectItem value="rabi">Rabi (Winter)</SelectItem>
                <SelectItem value="zaid">Zaid (Summer)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="temperature" className="flex items-center gap-2">
                <Thermometer className="h-4 w-4" />
                Avg Temperature (°C)
              </Label>
              <Input
                id="temperature"
                type="number"
                placeholder="25"
                value={formData.temperature}
                onChange={(e) => updateField("temperature", e.target.value)}
                min="0"
                max="50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="rainfall" className="flex items-center gap-2">
                <Droplets className="h-4 w-4" />
                Rainfall (mm)
              </Label>
              <Input
                id="rainfall"
                type="number"
                placeholder="800"
                value={formData.rainfall}
                onChange={(e) => updateField("rainfall", e.target.value)}
                min="0"
              />
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
            disabled={isLoading}
          >
            {isLoading ? "Analyzing..." : "Get AI Recommendations"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};