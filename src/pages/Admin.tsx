
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL || "",
  import.meta.env.VITE_SUPABASE_ANON_KEY || ""
);

const AdminDashboard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      if (data) {
        setIsAuthenticated(true);
        toast.success("Successfully logged in!");
      }
    } catch (error) {
      toast.error("Error logging in. Please check your credentials.");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <Button
            variant="outline"
            onClick={() => {
              supabase.auth.signOut();
              setIsAuthenticated(false);
            }}
          >
            Logout
          </Button>
        </div>

        <Tabs defaultValue="restaurants" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="restaurants">Restaurants</TabsTrigger>
            <TabsTrigger value="hotels">Hotels</TabsTrigger>
            <TabsTrigger value="holidays">Holidays</TabsTrigger>
          </TabsList>

          <TabsContent value="restaurants">
            <RestaurantManager />
          </TabsContent>
          <TabsContent value="hotels">
            <HotelManager />
          </TabsContent>
          <TabsContent value="holidays">
            <HolidayManager />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

const RestaurantManager = () => {
  // Restaurant management component
  return (
    <div>Restaurant management coming soon</div>
  );
};

const HotelManager = () => {
  // Hotel management component
  return (
    <div>Hotel management coming soon</div>
  );
};

const HolidayManager = () => {
  // Holiday management component
  return (
    <div>Holiday management coming soon</div>
  );
};

export default AdminDashboard;
