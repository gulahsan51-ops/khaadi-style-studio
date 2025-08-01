import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoryGrid from "@/components/CategoryGrid";
import ProductSection from "@/components/ProductSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  // Sample product data
  const newArrivals = [
    {
      id: 1,
      name: "Embroidered Lawn Suit - Spring Collection",
      price: 3499,
      image: "/placeholder.svg",
      category: "Women's Pret",
      isNew: true
    },
    {
      id: 2,
      name: "Premium Cotton Kurta with Waistcoat",
      price: 2899,
      image: "/placeholder.svg", 
      category: "Men's Formal",
      isNew: true
    },
    {
      id: 3,
      name: "Silk Dupatta - Luxury Edition",
      price: 1299,
      image: "/placeholder.svg",
      category: "Accessories",
      isNew: true
    },
    {
      id: 4,
      name: "Block Print Unstitched Suit",
      price: 2199,
      image: "/placeholder.svg",
      category: "Unstitched",
      isNew: true
    }
  ];

  const bestSellers = [
    {
      id: 5,
      name: "Classic Black Shalwar Kameez",
      price: 2699,
      originalPrice: 3199,
      image: "/placeholder.svg",
      category: "Men's Traditional",
      isSale: true
    },
    {
      id: 6,
      name: "Floral Print Maxi Dress",
      price: 3899,
      image: "/placeholder.svg",
      category: "Women's Casual"
    },
    {
      id: 7,
      name: "Formal Office Shirt - Slim Fit",
      price: 1899,
      originalPrice: 2299,
      image: "/placeholder.svg", 
      category: "Men's Formal",
      isSale: true
    },
    {
      id: 8,
      name: "Chiffon Party Wear Dress",
      price: 4999,
      image: "/placeholder.svg",
      category: "Women's Luxury"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CategoryGrid />
      <ProductSection 
        title="New Arrivals" 
        subtitle="Fresh styles just in - don't miss out!"
        products={newArrivals}
      />
      <ProductSection 
        title="Best Sellers" 
        subtitle="Customer favorites you'll love"
        products={bestSellers}
      />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
