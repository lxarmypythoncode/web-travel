
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Destinations from "@/components/Destinations";
import Hotels from "@/components/Hotels";
import Restaurants from "@/components/Restaurants";
import Holidays from "@/components/Holidays";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Destinations />
      <Hotels />
      <Restaurants />
      <Holidays />
    </div>
  );
};

export default Index;
