
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        </div>

        <Tabs defaultValue="restaurants" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="restaurants">Restaurants</TabsTrigger>
            <TabsTrigger value="hotels">Hotels</TabsTrigger>
            <TabsTrigger value="holidays">Holidays</TabsTrigger>
          </TabsList>

          <TabsContent value="restaurants">
            <Card className="p-6">
              <RestaurantManager />
            </Card>
          </TabsContent>
          <TabsContent value="hotels">
            <Card className="p-6">
              <HotelManager />
            </Card>
          </TabsContent>
          <TabsContent value="holidays">
            <Card className="p-6">
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
    <div>
      <h2 className="text-2xl font-semibold mb-4">Restaurant Management</h2>
      <p>Restaurant management interface coming soon</p>
    </div>
  );
};

const HotelManager = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Hotel Management</h2>
      <p>Hotel management interface coming soon</p>
    </div>
  );
};

const HolidayManager = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Holiday Management</h2>
      <p>Holiday management interface coming soon</p>
    </div>
  );
};

export default AdminDashboard;
