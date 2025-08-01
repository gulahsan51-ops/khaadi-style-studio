import { useState } from "react";
import { Search, ShoppingBag, User, Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-background border-b">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm text-muted-foreground border-b">
          <div className="flex space-x-4">
            <span>Free shipping on orders over Rs. 2500</span>
            <span>•</span>
            <span>Call: +92 300 1234567</span>
          </div>
          <div className="flex space-x-4">
            <button>Track Order</button>
            <span>•</span>
            <button>Store Locator</button>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">LUXESTYLE</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <div className="relative group">
              <button className="font-medium hover:text-primary transition-colors">
                WOMEN
              </button>
              <div className="absolute top-full left-0 w-64 bg-background border shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-4 space-y-2">
                  <a href="#" className="block hover:text-primary">Pret Wear</a>
                  <a href="#" className="block hover:text-primary">Unstitched</a>
                  <a href="#" className="block hover:text-primary">Formals</a>
                  <a href="#" className="block hover:text-primary">Luxury Wear</a>
                  <a href="#" className="block hover:text-primary">Casuals</a>
                  <a href="#" className="block hover:text-primary">Bottoms</a>
                  <a href="#" className="block hover:text-primary">Dupattas</a>
                  <a href="#" className="block hover:text-primary">Accessories</a>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <button className="font-medium hover:text-primary transition-colors">
                MEN
              </button>
              <div className="absolute top-full left-0 w-64 bg-background border shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-4 space-y-2">
                  <a href="#" className="block hover:text-primary">Kurtas</a>
                  <a href="#" className="block hover:text-primary">Waistcoats</a>
                  <a href="#" className="block hover:text-primary">Shalwar Kameez</a>
                  <a href="#" className="block hover:text-primary">Casual Shirts</a>
                  <a href="#" className="block hover:text-primary">Formal Shirts</a>
                  <a href="#" className="block hover:text-primary">Trousers</a>
                  <a href="#" className="block hover:text-primary">Unstitched</a>
                  <a href="#" className="block hover:text-primary">Accessories</a>
                </div>
              </div>
            </div>
            
            <button className="font-medium hover:text-primary transition-colors">NEW ARRIVALS</button>
            <button className="font-medium hover:text-primary transition-colors">SALE</button>
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:flex items-center relative">
              <Input 
                placeholder="Search products..." 
                className="w-64 pr-10"
              />
              <Search className="absolute right-3 h-4 w-4 text-muted-foreground" />
            </div>

            {/* Action Buttons */}
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Input placeholder="Search products..." className="pr-10" />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <div>
              <h3 className="font-semibold mb-2">WOMEN</h3>
              <div className="pl-4 space-y-1 text-sm">
                <a href="#" className="block">Pret Wear</a>
                <a href="#" className="block">Unstitched</a>
                <a href="#" className="block">Formals</a>
                <a href="#" className="block">Luxury Wear</a>
                <a href="#" className="block">Casuals</a>
                <a href="#" className="block">Bottoms</a>
                <a href="#" className="block">Dupattas</a>
                <a href="#" className="block">Accessories</a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">MEN</h3>
              <div className="pl-4 space-y-1 text-sm">
                <a href="#" className="block">Kurtas</a>
                <a href="#" className="block">Waistcoats</a>
                <a href="#" className="block">Shalwar Kameez</a>
                <a href="#" className="block">Casual Shirts</a>
                <a href="#" className="block">Formal Shirts</a>
                <a href="#" className="block">Trousers</a>
                <a href="#" className="block">Unstitched</a>
                <a href="#" className="block">Accessories</a>
              </div>
            </div>
            
            <div className="pt-2 border-t">
              <a href="#" className="block font-medium">NEW ARRIVALS</a>
              <a href="#" className="block font-medium">SALE</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;