import { Card } from "@/components/ui/card";

const CategoryGrid = () => {
  const categories = [
    {
      title: "Women's Pret",
      description: "Ready to wear collection",
      image: "/placeholder.svg",
      link: "/women/pret"
    },
    {
      title: "Men's Kurta",
      description: "Traditional & modern styles",
      image: "/placeholder.svg", 
      link: "/men/kurta"
    },
    {
      title: "Luxury Wear",
      description: "Premium formal collection",
      image: "/placeholder.svg",
      link: "/women/luxury"
    },
    {
      title: "Unstitched",
      description: "Fabric & lawn collection",
      image: "/placeholder.svg",
      link: "/unstitched"
    },
    {
      title: "Accessories",
      description: "Bags, shoes & jewelry",
      image: "/placeholder.svg",
      link: "/accessories"
    },
    {
      title: "Sale Items",
      description: "Up to 50% off",
      image: "/placeholder.svg",
      link: "/sale"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Shop by Category</h2>
          <p className="text-lg text-muted-foreground">Explore our curated collections</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={index}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-64 bg-muted">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold mb-1">{category.title}</h3>
                  <p className="text-sm opacity-90">{category.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;