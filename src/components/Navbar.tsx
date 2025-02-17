
import { Globe, Menu, User, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useState } from "react";

const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
  { code: "de", name: "Deutsch" },
  { code: "it", name: "Italiano" },
  { code: "zh", name: "中文" },
  { code: "ja", name: "日本語" },
  { code: "ko", name: "한국어" },
];

const Navbar = () => {
  const [currentLang, setCurrentLang] = useState("en");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b animate-slideIn">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Globe className="w-6 h-6 text-travel-500" />
            <span className="text-xl font-semibold text-travel-900">Roam&Revel</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#destinations" className="text-travel-700 hover:text-travel-500 transition-colors">
              Destinations
            </a>
            <a href="#hotels" className="text-travel-700 hover:text-travel-500 transition-colors">
              Hotels
            </a>
            <a href="#restaurants" className="text-travel-700 hover:text-travel-500 transition-colors">
              Restaurants
            </a>
            <a href="#holidays" className="text-travel-700 hover:text-travel-500 transition-colors">
              Holidays
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  {languages.find(l => l.code === currentLang)?.name}
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setCurrentLang(lang.code)}
                    className="cursor-pointer"
                  >
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
