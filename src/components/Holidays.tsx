
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Plane, Ship, Clock } from "lucide-react";

const holidays = [
  {
    id: 1,
    title: "Mediterranean Cruise",
    duration: "7 days",
    transport: "cruise",
    price: "$1,299",
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19",
    destinations: ["Barcelona", "Rome", "Athens"],
  },
  {
    id: 2,
    title: "Asian Adventure",
    duration: "10 days",
    transport: "plane",
    price: "$1,799",
    rating: "4.7",
    image: "https://images.unsplash.com/photo-1464817739973-0128fe77aaa1",
    destinations: ["Tokyo", "Seoul", "Hong Kong"],
  },
  {
    id: 3,
    title: "Caribbean Paradise",
    duration: "5 days",
    transport: "cruise",
    price: "$999",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1544558635-667480601430",
    destinations: ["Jamaica", "Bahamas", "Virgin Islands"],
  },
  {
    id: 4,
    title: "European Explorer",
    duration: "14 days",
    transport: "plane",
    price: "$2,499",
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
    destinations: ["Paris", "London", "Amsterdam"],
  },
];

const Holidays = () => {
  return (
    <section id="holidays" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-travel-900">Holiday Packages</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Unforgettable experiences with perfectly planned itineraries
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button variant="outline" className="gap-2">
            <Plane className="w-4 h-4" /> Flight Packages
          </Button>
          <Button variant="outline" className="gap-2">
            <Ship className="w-4 h-4" /> Cruise Packages
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {holidays.map((holiday) => (
            <Card key={holiday.id} className="overflow-hidden group">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={holiday.image}
                  alt={holiday.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {holiday.transport === "cruise" ? (
                  <div className="absolute top-4 right-4 bg-blue-500 text-white p-2 rounded-full">
                    <Ship className="w-4 h-4" />
                  </div>
                ) : (
                  <div className="absolute top-4 right-4 bg-travel-500 text-white p-2 rounded-full">
                    <Plane className="w-4 h-4" />
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-travel-900">{holiday.title}</h3>
                <div className="flex items-center mt-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-1" />
                  {holiday.duration}
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  {holiday.destinations.join(" • ")}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <span className="text-travel-500 font-semibold">{holiday.price}</span>
                    <span className="text-sm text-gray-500"> /person</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-500">★</span>
                    <span className="ml-1 text-sm text-gray-600">{holiday.rating}</span>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-travel-500 hover:bg-travel-600">
                  Book Package
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Holidays;
