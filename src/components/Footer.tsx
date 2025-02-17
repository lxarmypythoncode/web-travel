
import { Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-travel-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Globe className="w-6 h-6 text-travel-400" />
              <span className="text-xl font-semibold">Roam&Revel</span>
            </div>
            <p className="text-gray-400">
              Discover the world with us. Your journey begins here.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#destinations" className="hover:text-white transition-colors">Destinations</a></li>
              <li><a href="#hotels" className="hover:text-white transition-colors">Hotels</a></li>
              <li><a href="#restaurants" className="hover:text-white transition-colors">Restaurants</a></li>
              <li><a href="#holidays" className="hover:text-white transition-colors">Holidays</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for travel updates and special offers.
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded bg-travel-800 text-white placeholder:text-gray-400 border border-travel-700 focus:outline-none focus:ring-2 focus:ring-travel-500"
            />
          </div>
        </div>
        
        <div className="border-t border-travel-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 travel lxarmy404. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
