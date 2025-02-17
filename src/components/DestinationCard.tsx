
import { useState } from "react";
import { Card } from "./ui/card";
import { Link } from "react-router-dom";

interface DestinationCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  id?: string;
}

const DestinationCard = ({ image, title, description, price, id }: DestinationCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Card className="group overflow-hidden rounded-lg transition-all duration-300 hover:shadow-lg">
      <div className="aspect-[4/3] relative overflow-hidden">
        <div
          className={`absolute inset-0 bg-gray-200 ${
            imageLoaded ? "opacity-0" : "opacity-100"
          } transition-opacity duration-300`}
        />
        <img
          src={image}
          alt={title}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-travel-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-travel-500 font-semibold">{price}</span>
          <Link 
            to={`/destination/${id || 'swiss-alps'}`}
            className="text-sm text-travel-600 hover:text-travel-500 transition-colors"
          >
            Learn more →
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default DestinationCard;
