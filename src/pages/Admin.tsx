
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold animate-fade-in">Admin Dashboard</h1>
        </div>

        <Tabs defaultValue="restaurants" className="w-full">
          <TabsList className="mb-4 animate-slide-in-right">
            <TabsTrigger 
              value="restaurants"
              className="transition-all duration-300 hover:scale-105 hover:bg-travel-100"
            >
              Restaurants
            </TabsTrigger>
            <TabsTrigger 
              value="hotels"
              className="transition-all duration-300 hover:scale-105 hover:bg-travel-100"
            >
              Hotels
            </TabsTrigger>
            <TabsTrigger 
              value="holidays"
              className="transition-all duration-300 hover:scale-105 hover:bg-travel-100"
            >
              Holidays
            </TabsTrigger>
          </TabsList>

          <TabsContent 
            value="restaurants" 
            className="transition-all duration-300 data-[state=inactive]:opacity-0 data-[state=active]:animate-fade-in"
          >
            <Card className="p-6 transition-all duration-300 hover:shadow-xl">
              <RestaurantManager />
            </Card>
          </TabsContent>
          <TabsContent 
            value="hotels"
            className="transition-all duration-300 data-[state=inactive]:opacity-0 data-[state=active]:animate-fade-in"
          >
            <Card className="p-6 transition-all duration-300 hover:shadow-xl">
              <HotelManager />
            </Card>
          </TabsContent>
          <TabsContent 
            value="holidays"
            className="transition-all duration-300 data-[state=inactive]:opacity-0 data-[state=active]:animate-fade-in"
          >
            <Card className="p-6 transition-all duration-300 hover:shadow-xl">
              <HolidayManager />
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

const RestaurantManager = () => {
  return (
    <div className="space-y-4 animate-fade-in">
      <h2 className="text-2xl font-semibold mb-4 transition-all duration-300 hover:text-travel-500">
        Restaurant Management
      </h2>
      <p className="transition-all duration-300 hover:text-travel-700">
        Restaurant management interface coming soon
      </p>
    </div>
  );
};

const HotelManager = () => {
  return (
    <div className="space-y-4 animate-fade-in">
      <h2 className="text-2xl font-semibold mb-4 transition-all duration-300 hover:text-travel-500">
        Hotel Management
      </h2>
      <p className="transition-all duration-300 hover:text-travel-700">
        Hotel management interface coming soon
      </p>
    </div>
  );
};

const HolidayManager = () => {
  return (
    <div className="space-y-4 animate-fade-in">
      <h2 className="text-2xl font-semibold mb-4 transition-all duration-300 hover:text-travel-500">
        Holiday Management
      </h2>
      <p className="transition-all duration-300 hover:text-travel-700">
        Holiday management interface coming soon
      </p>
    </div>
  );
};

export default AdminDashboard;
