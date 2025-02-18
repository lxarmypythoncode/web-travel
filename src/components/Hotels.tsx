
import { useState } from "react";
import { Card } from "./ui/card";
import { Calendar } from "./ui/calendar";
import { Button } from "./ui/button";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import BookingDialog from "./BookingDialog";

const hotels = [
  {
    id: 1,
    name: "Grand Plaza Resort",
    location: "Maldives",
    price: "$350",
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
    perNight: true,
  },
  {
    id: 2,
    name: "Mountain View Lodge",
    location: "Swiss Alps",
    price: "$280",
    rating: "4.7",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
    perNight: true,
  },
  {
    id: 3,
    name: "Beachfront Paradise",
    location: "Bali",
    price: "$220",
    rating: "4.6",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9",
    perNight: true,
  },
  {
    id: 4,
    name: "City Lights Hotel",
    location: "Tokyo",
    price: "$400",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    perNight: true,
  },
];

const Hotels = () => {
  const [date, setDate] = useState<Date>();
  const [selectedHotel, setSelectedHotel] = useState<string | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBookNow = (hotelName: string) => {
    setSelectedHotel(hotelName);
    setIsBookingOpen(true);
  };

  return (
    <section id="hotels" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-travel-900">Luxury Hotels</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Experience world-class hospitality in stunning locations
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
          <input
            type="text"
            placeholder="Search location..."
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-travel-500"
          />
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <Button className="bg-travel-500 hover:bg-travel-600 text-white">
            Search Hotels
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hotels.map((hotel) => (
            <Card key={hotel.id} className="overflow-hidden group">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-travel-900">{hotel.name}</h3>
                <p className="text-gray-600">{hotel.location}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <span className="text-travel-500 font-semibold">{hotel.price}</span>
                    <span className="text-sm text-gray-500"> /night</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-500">★</span>
                    <span className="ml-1 text-sm text-gray-600">{hotel.rating}</span>
                  </div>
                </div>
                <Button 
                  className="w-full mt-4 bg-travel-500 hover:bg-travel-600"
                  onClick={() => handleBookNow(hotel.name)}
                >
                  Book Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {selectedHotel && (
        <BookingDialog
          isOpen={isBookingOpen}
          onClose={() => {
            setIsBookingOpen(false);
            setSelectedHotel(null);
          }}
          type="hotel"
          itemName={selectedHotel}
        />
      )}
    </section>
  );
};

export default Hotels;
