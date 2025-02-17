
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const restaurants = [
  {
    id: 1,
    name: "Le Petit Bistro",
    cuisine: "French",
    location: "Paris",
    price: "€€€",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c",
  },
  {
    id: 2,
    name: "Sakura Sushi",
    cuisine: "Japanese",
    location: "Tokyo",
    price: "€€",
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b",
  },
  {
    id: 3,
    name: "Trattoria Roma",
    cuisine: "Italian",
    location: "Rome",
    price: "€€",
    rating: "4.7",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
  },
  {
    id: 4,
    name: "Spice Garden",
    cuisine: "Indian",
    location: "Mumbai",
    price: "€",
    rating: "4.6",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
  },
];

const Restaurants = () => {
  return (
    <section id="restaurants" className="py-20 bg-travel-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-travel-900">Fine Dining</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Discover culinary excellence around the world
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button variant="outline">All Cuisines</Button>
          <Button variant="outline">French</Button>
          <Button variant="outline">Japanese</Button>
          <Button variant="outline">Italian</Button>
          <Button variant="outline">Indian</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {restaurants.map((restaurant) => (
            <Card key={restaurant.id} className="overflow-hidden group">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-travel-900">{restaurant.name}</h3>
                <p className="text-gray-600">{restaurant.cuisine} • {restaurant.location}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-travel-500">{restaurant.price}</span>
                  <div className="flex items-center">
                    <span className="text-yellow-500">★</span>
                    <span className="ml-1 text-sm text-gray-600">{restaurant.rating}</span>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-travel-500 hover:bg-travel-600">
                  Reserve Table
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Restaurants;
