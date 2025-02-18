
import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { format } from "date-fns";
import { Plane, ArrowRight } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import BookingDialog from "./BookingDialog";

const destinations = [
  "New York", "London", "Paris", "Tokyo", "Dubai",
  "Singapore", "Sydney", "Rome", "Barcelona", "Hong Kong"
];

const Flights = () => {
  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState<string>("");
  const [departDate, setDepartDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [showResults, setShowResults] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState<string | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleSearch = () => {
    if (from && to && departDate) {
      setShowResults(true);
    }
  };

  const handleBookFlight = (flightDetails: string) => {
    setSelectedFlight(flightDetails);
    setIsBookingOpen(true);
  };

  return (
    <section id="flights" className="py-20 bg-travel-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-travel-900">Flight Search</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Find the best flights to your dream destination
          </p>
        </div>

        <Card className="p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">From</label>
              <Select value={from} onValueChange={setFrom}>
                <SelectTrigger>
                  <SelectValue placeholder="Select origin" />
                </SelectTrigger>
                <SelectContent>
                  {destinations.map((dest) => (
                    <SelectItem key={dest} value={dest}>
                      {dest}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">To</label>
              <Select value={to} onValueChange={setTo}>
                <SelectTrigger>
                  <SelectValue placeholder="Select destination" />
                </SelectTrigger>
                <SelectContent>
                  {destinations.map((dest) => (
                    <SelectItem key={dest} value={dest}>
                      {dest}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Departure</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left">
                    {departDate ? format(departDate, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={departDate}
                    onSelect={setDepartDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Return (Optional)</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left">
                    {returnDate ? format(returnDate, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={returnDate}
                    onSelect={setReturnDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <Button 
            className="w-full mt-6 bg-travel-500 hover:bg-travel-600"
            onClick={handleSearch}
          >
            Search Flights
          </Button>
        </Card>

        {showResults && (
          <div className="grid grid-cols-1 gap-4">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="p-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="flex items-center gap-8 mb-4 md:mb-0">
                    <div className="text-center">
                      <p className="font-semibold">{from}</p>
                      <p className="text-sm text-gray-500">
                        {format(departDate!, "HH:mm")}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Plane className="w-4 h-4 text-travel-500" />
                      <ArrowRight className="w-4 h-4" />
                    </div>
                    <div className="text-center">
                      <p className="font-semibold">{to}</p>
                      <p className="text-sm text-gray-500">
                        {format(new Date(departDate!.getTime() + 3600000 * (3 + i)), "HH:mm")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="font-bold text-travel-500">${399 + i * 50}</p>
                      <p className="text-sm text-gray-500">per person</p>
                    </div>
                    <Button 
                      onClick={() => handleBookFlight(`${from} to ${to} - Flight ${i}`)}
                      className="bg-travel-500 hover:bg-travel-600"
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      {selectedFlight && (
        <BookingDialog
          isOpen={isBookingOpen}
          onClose={() => {
            setIsBookingOpen(false);
            setSelectedFlight(null);
          }}
          type="flight"
          itemName={selectedFlight}
        />
      )}
    </section>
  );
};

export default Flights;
