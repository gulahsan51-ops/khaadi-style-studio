import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductSection from "@/components/ProductSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";

const Women = () => {
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const womenProducts = [
    {
      id: 1,
      name: "Embroidered Lawn Suit - Spring Collection",
      price: 3499,
      image: "/placeholder.svg",
      category: "Pret Wear",
      isNew: true
    },
    {
      id: 2,
      name: "Silk Dupatta - Luxury Edition",
      price: 1299,
      image: "/placeholder.svg",
      category: "Accessories"
    },
    {
      id: 3,
      name: "Block Print Unstitched Suit",
      price: 2199,
      image: "/placeholder.svg",
      category: "Unstitched"
    },
    {
      id: 4,
      name: "Chiffon Party Wear Dress",
      price: 4999,
      image: "/placeholder.svg",
      category: "Luxury Wear"
    },
    {
      id: 5,
      name: "Cotton Casual Kurta",
      price: 1899,
      originalPrice: 2299,
      image: "/placeholder.svg",
      category: "Casuals",
      isSale: true
    },
    {
      id: 6,
      name: "Formal Office Wear",
      price: 3299,
      image: "/placeholder.svg",
      category: "Formals"
    },
    {
      id: 7,
      name: "Embellished Evening Gown",
      price: 8999,
      image: "/placeholder.svg",
      category: "Luxury Wear"
    },
    {
      id: 8,
      name: "Printed Palazzo Set",
      price: 2499,
      image: "/placeholder.svg",
      category: "Bottoms"
    }
  ];

  const categories = ["All", "Pret Wear", "Unstitched", "Formals", "Luxury Wear", "Casuals", "Bottoms", "Dupattas", "Accessories"];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const colors = ["Black", "White", "Red", "Blue", "Green", "Pink", "Brown", "Navy"];

  const handleSizeChange = (size: string, checked: boolean) => {
    if (checked) {
      setSelectedSizes([...selectedSizes, size]);
    } else {
      setSelectedSizes(selectedSizes.filter(s => s !== size));
    }
  };

  const handleColorChange = (color: string, checked: boolean) => {
    if (checked) {
      setSelectedColors([...selectedColors, color]);
    } else {
      setSelectedColors(selectedColors.filter(c => c !== color));
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-luxury/10 to-elegant/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-4">Women's Collection</h1>
          <p className="text-xl text-muted-foreground">Discover elegance in every thread</p>
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
                    max={10000}
                    min={0}
                    step={100}
                    className="w-full"
                  />
                </div>

                {/* Sizes */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Sizes</label>
                  <div className="grid grid-cols-3 gap-2">
                    {sizes.map((size) => (
                      <div key={size} className="flex items-center space-x-2">
                        <Checkbox 
                          id={size} 
                          checked={selectedSizes.includes(size)}
                          onCheckedChange={(checked) => handleSizeChange(size, checked as boolean)}
                        />
                        <label htmlFor={size} className="text-sm">{size}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Colors */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Colors</label>
                  <div className="space-y-2">
                    {colors.map((color) => (
                      <div key={color} className="flex items-center space-x-2">
                        <Checkbox 
                          id={color}
                          checked={selectedColors.includes(color)}
                          onCheckedChange={(checked) => handleColorChange(color, checked as boolean)}
                        />
                        <label htmlFor={color} className="text-sm">{color}</label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full" variant="outline">Clear All Filters</Button>
              </CardContent>
            </Card>
          </aside>

          {/* Products Grid */}
          <main className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">Showing {womenProducts.length} products</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Grid</Button>
                <Button variant="ghost" size="sm">List</Button>
              </div>
            </div>
            
            <ProductSection 
              title=""
              products={womenProducts}
            />
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Women;