import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, MapPin, Clock, Users } from "lucide-react";
import Footer from "@/components/Footer";

const destinations = [
  {
    id: "swiss-alps",
    title: "Swiss Alps",
    location: "Switzerland",
    duration: "5-7 days recommended",
    groupSize: "2-8 people",
    description: "Experience the majestic mountains and pristine lakes of the Swiss Alps. Nestled in the heart of Europe, this destination offers breathtaking views, world-class skiing, and charming mountain villages. Whether you're an adventure seeker or looking for peaceful retreats, the Swiss Alps provide year-round attractions including hiking, skiing, and cultural experiences.",
    activities: [
      "Mountain hiking trails",
      "Ski resorts",
      "Cable car rides",
      "Traditional Swiss villages",
      "Alpine lakes",
      "Mountain biking"
    ],
    bestTime: "June to September for hiking, December to March for skiing",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    price: "From $1,299",
  },
  {
    id: "bali-paradise",
    title: "Bali Paradise",
    location: "Indonesia",
    duration: "7-10 days recommended",
    groupSize: "4-10 people",
    description: "Discover the tropical beaches and cultural wonders of Bali. Known as the 'Island of Gods', Bali offers a unique blend of natural beauty, spiritual experiences, and vibrant nightlife. Explore ancient temples, lush rice terraces, and world-class surf breaks. Whether you're seeking relaxation or adventure, Bali has something for everyone.",
    activities: [
      "Temple visits",
      "Rice terrace tours",
      "Surfing lessons",
      "Yoga retreats",
      "Beach relaxation",
      "Traditional dance performances"
    ],
    bestTime: "April to October (dry season)",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    price: "From $899",
  },
  {
    id: "scottish-highlands",
    title: "Scottish Highlands",
    location: "Scotland",
    duration: "4-6 days recommended",
    groupSize: "2-6 people",
    description: "Explore the ancient castles and breathtaking landscapes of the Scottish Highlands. This rugged and beautiful region offers a rich history, stunning natural scenery, and a warm, welcoming culture. Hike through dramatic glens, visit historic castles, and sample world-renowned Scotch whisky. The Scottish Highlands are perfect for those seeking adventure and tranquility.",
    activities: [
      "Castle tours",
      "Hiking in Glencoe",
      "Loch Ness exploration",
      "Whisky distillery visits",
      "Scenic drives",
      "Wildlife spotting"
    ],
    bestTime: "May to September",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    price: "From $1,099",
  },
  {
    id: "tokyo-nights",
    title: "Tokyo Nights",
    location: "Japan",
    duration: "5-7 days recommended",
    groupSize: "2-5 people",
    description: "Immerse yourself in the vibrant city life of Tokyo. This bustling metropolis offers a unique blend of traditional culture and modern innovation. Explore historic temples, trendy shopping districts, and world-class dining. Whether you're interested in technology, fashion, or cuisine, Tokyo is a city that never sleeps.",
    activities: [
      "Shibuya Crossing",
      "Senso-ji Temple",
      "Tokyo Skytree",
      "Harajuku fashion district",
      "Sushi making classes",
      "Robot Restaurant"
    ],
    bestTime: "March to May (spring) and September to November (autumn)",
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
    price: "From $1,499",
  },
];

const DestinationDetail = () => {
  const { id } = useParams();
  const destination = destinations.find(d => d.id === id) || destinations[0];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="relative h-[60vh] overflow-hidden">
          <img
            src={destination.image}
            alt={destination.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-4">{destination.title}</h1>
              <p className="text-xl opacity-90 flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5" />
                {destination.location}
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <Link to="/">
            <Button variant="ghost" className="mb-8">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Destinations
            </Button>
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {destination.description}
              </p>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Activities</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {destination.activities.map((activity, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-travel-500 rounded-full" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg h-fit space-y-6">
              <div className="text-2xl font-bold text-travel-500">
                {destination.price}
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <Clock className="w-5 h-5" />
                  <span>{destination.duration}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Users className="w-5 h-5" />
                  <span>{destination.groupSize}</span>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h3 className="font-semibold mb-2">Best Time to Visit</h3>
                <p className="text-gray-600">{destination.bestTime}</p>
              </div>

              <Button className="w-full bg-travel-500 hover:bg-travel-600">
                Book This Trip
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DestinationDetail;
