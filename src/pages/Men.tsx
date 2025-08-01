import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductSection from "@/components/ProductSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";

const Men = () => {
  const [priceRange, setPriceRange] = useState([0, 8000]);

  const menProducts = [
    {
      id: 9,
      name: "Premium Cotton Kurta with Waistcoat",
      price: 2899,
      image: "/placeholder.svg", 
      category: "Kurtas",
      isNew: true
    },
    {
      id: 10,
      name: "Classic Black Shalwar Kameez",
      price: 2699,
      originalPrice: 3199,
      image: "/placeholder.svg",
      category: "Shalwar Kameez",
      isSale: true
    },
    {
      id: 11,
      name: "Formal Office Shirt - Slim Fit",
      price: 1899,
      originalPrice: 2299,
      image: "/placeholder.svg", 
      category: "Formal Shirts",
      isSale: true
    },
    {
      id: 12,
      name: "Embroidered Waistcoat",
      price: 1599,
      image: "/placeholder.svg",
      category: "Waistcoats"
    },
    {
      id: 13,
      name: "Casual Denim Shirt",
      price: 1299,
      image: "/placeholder.svg",
      category: "Casual Shirts"
    },
    {
      id: 14,
      name: "Formal Trouser - Regular Fit",
      price: 1799,
      image: "/placeholder.svg",
      category: "Trousers"
    },
    {
      id: 15,
      name: "Unstitched Khaddar Suit",
      price: 2499,
      image: "/placeholder.svg",
      category: "Unstitched"
    },
    {
      id: 16,
      name: "Leather Belt & Wallet Set",
      price: 999,
      image: "/placeholder.svg",
      category: "Accessories"
    }
  ];

  const categories = ["All", "Kurtas", "Waistcoats", "Shalwar Kameez", "Casual Shirts", "Formal Shirts", "Trousers", "Unstitched", "Accessories"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-luxury/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-4">Men's Collection</h1>
          <p className="text-xl text-muted-foreground">Traditional meets contemporary</p>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {["Kurtas", "Formal Wear", "Casual Shirts", "Accessories"].map((category, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 bg-muted rounded-t-lg">
                  <img 
                    src="/placeholder.svg" 
                    alt={category}
                    className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 rounded-t-lg"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">{category}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Filters Sidebar */}
          <aside className="lg:w-1/4">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Filters</h3>
                
                {/* Sort By */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Sort By</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="popular">Most Popular</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Categories</label>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox id={category} />
                        <label htmlFor={category} className="text-sm">{category}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">
                    Price Range: Rs. {priceRange[0]} - Rs. {priceRange[1]}
                  </label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={8000}
                    min={0}
                    step={100}
                    className="w-full"
                  />
                </div>

                <Button className="w-full" variant="outline">Clear All Filters</Button>
              </CardContent>
            </Card>
          </aside>

          {/* Products Grid */}
          <main className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">Showing {menProducts.length} products</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Grid</Button>
                <Button variant="ghost" size="sm">List</Button>
              </div>
            </div>
            
            <ProductSection 
              title=""
              products={menProducts}
            />
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Men;