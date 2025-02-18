
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Destinations from "@/components/Destinations";
import Flights from "@/components/Flights";
import Hotels from "@/components/Hotels";
import Restaurants from "@/components/Restaurants";
import Holidays from "@/components/Holidays";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <div className="animate-fadeIn">
        <Destinations />
        <Flights />
        <Hotels />
        <Restaurants />
        <Holidays />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
