
import DestinationCard from "./DestinationCard";

const destinations = [
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    title: "Swiss Alps",
    description: "Experience the majestic mountains and pristine lakes",
    price: "From $1,299",
  },
  {
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    title: "Bali Paradise",
    description: "Tropical beaches and cultural wonders await",
    price: "From $899",
  },
  {
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    title: "Scottish Highlands",
    description: "Discover ancient castles and breathtaking landscapes",
    price: "From $1,099",
  },
  {
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
    title: "Tokyo Nights",
    description: "Immerse yourself in the vibrant city life",
    price: "From $1,499",
  },
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-20 bg-travel-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-travel-900">Popular Destinations</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore our handpicked selection of stunning locations around the world
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <DestinationCard key={index} {...destination} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
