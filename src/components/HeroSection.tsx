import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-[600px] bg-gradient-to-r from-accent to-background flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-6xl font-bold text-foreground mb-6">
            New Collection
            <span className="block text-primary">SPRING 2024</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Discover our latest collection of premium Pakistani fashion. From traditional elegance to contemporary style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg px-8">
              Shop Women
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Shop Men
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent"></div>
      <div className="absolute right-8 bottom-8 text-right">
        <div className="text-sm text-muted-foreground">Free Shipping</div>
        <div className="text-sm text-muted-foreground">on orders over Rs. 2500</div>
      </div>
    </section>
  );
};

export default HeroSection;