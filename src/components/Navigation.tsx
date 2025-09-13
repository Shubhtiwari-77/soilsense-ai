import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Leaf, CloudSun, TrendingUp, Info, Phone, Home } from "lucide-react";

export const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/weather", label: "Weather", icon: CloudSun },
    { path: "/market", label: "Market", icon: TrendingUp },
    { path: "/about", label: "About", icon: Info },
    { path: "/contact", label: "Contact", icon: Phone },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-primary font-bold text-xl">
            <Leaf className="h-6 w-6" />
            SoilSense AI
          </Link>
          
          <div className="flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Button
                  key={item.path}
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  asChild
                >
                  <Link to={item.path} className="flex items-center gap-2">
                    <Icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{item.label}</span>
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};