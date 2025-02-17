
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb')] bg-cover bg-center"
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 1s ease-in-out" }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>
      
      <div className="relative container mx-auto px-4 text-center">
        <div className={`space-y-6 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Discover Your Next Adventure
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Explore handpicked destinations, luxurious stays, and unforgettable experiences around the world
          </p>
          
          <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-md p-4 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Where would you like to go?"
                className="flex-1 px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-travel-500"
              />
              <Button className="bg-travel-500 hover:bg-travel-600">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
