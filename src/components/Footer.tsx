import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">LUXESTYLE</h3>
            <p className="text-sm opacity-90">
              Pakistan's premier fashion destination, offering the finest collection of traditional and contemporary clothing for men and women.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 cursor-pointer hover:opacity-70" />
              <Instagram className="h-5 w-5 cursor-pointer hover:opacity-70" />
              <Twitter className="h-5 w-5 cursor-pointer hover:opacity-70" />
              <Youtube className="h-5 w-5 cursor-pointer hover:opacity-70" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:opacity-70">About Us</a></li>
              <li><a href="#" className="hover:opacity-70">Size Guide</a></li>
              <li><a href="#" className="hover:opacity-70">Fabric Care</a></li>
              <li><a href="#" className="hover:opacity-70">Store Locator</a></li>
              <li><a href="#" className="hover:opacity-70">Track Order</a></li>
              <li><a href="#" className="hover:opacity-70">Gift Cards</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:opacity-70">Contact Us</a></li>
              <li><a href="#" className="hover:opacity-70">Shipping Info</a></li>
              <li><a href="#" className="hover:opacity-70">Returns & Exchange</a></li>
              <li><a href="#" className="hover:opacity-70">Privacy Policy</a></li>
              <li><a href="#" className="hover:opacity-70">Terms & Conditions</a></li>
              <li><a href="#" className="hover:opacity-70">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Get in Touch</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+92 300 1234567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@luxestyle.pk</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>123 Fashion Street, Karachi, Pakistan</span>
              </div>
            </div>
            
            <div className="pt-4">
              <h5 className="font-medium mb-2">Payment Methods</h5>
              <div className="flex space-x-2 text-xs">
                <span className="border border-background/20 px-2 py-1 rounded">Easypaisa</span>
                <span className="border border-background/20 px-2 py-1 rounded">JazzCash</span>
                <span className="border border-background/20 px-2 py-1 rounded">COD</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-90">
          <p>&copy; 2024 LuxeStyle. All rights reserved. | Designed for Pakistani Fashion Excellence</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;