import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Share2, Truck, Shield, RefreshCw, Star, Plus, Minus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock product data - in real app, fetch by ID
  const product = {
    id: parseInt(id || "1"),
    name: "Embroidered Lawn Suit - Spring Collection",
    price: 3499,
    originalPrice: 4299,
    rating: 4.5,
    reviews: 128,
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    category: "Women's Pret",
    brand: "LuxeStyle",
    sku: "LS-2024-001",
    inStock: true,
    stockCount: 15,
    description: "Elegant embroidered lawn suit perfect for spring season. Features intricate handwork and premium quality fabric.",
    details: {
      fabric: "100% Cotton Lawn",
      care: "Machine wash cold, hang dry",
      origin: "Made in Pakistan",
      fit: "Regular fit"
    },
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Blue", "Pink", "White", "Green"]
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`
    });
  };

  const handleBuyNow = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        variant: "destructive"
      });
      return;
    }
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-muted-foreground">
          <a href="/" className="hover:text-primary">Home</a>
          <span className="mx-2">/</span>
          <a href="/women" className="hover:text-primary">Women</a>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-muted rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">{product.category}</Badge>
                <Badge variant="outline">{product.brand}</Badge>
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-2">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} 
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-primary">Rs. {product.price.toLocaleString()}</span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  Rs. {product.originalPrice.toLocaleString()}
                </span>
              )}
              <Badge variant="destructive">
                {Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)}% OFF
              </Badge>
            </div>

            {/* Size Selection */}
            <div>
              <label className="block text-sm font-medium mb-2">Size</label>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <label className="block text-sm font-medium mb-2">Color</label>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <Button
                    key={color}
                    variant={selectedColor === color ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </Button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-medium mb-2">Quantity</label>
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <span className="text-sm">
                {product.inStock ? `In Stock (${product.stockCount} left)` : 'Out of Stock'}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button 
                className="w-full" 
                size="lg"
                onClick={handleBuyNow}
                disabled={!product.inStock}
              >
                Buy Now
              </Button>
              <Button 
                variant="outline" 
                className="w-full" 
                size="lg"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                Add to Cart
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="flex-1">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="flex-1">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t">
              <div className="text-center">
                <Truck className="h-6 w-6 mx-auto mb-2 text-primary" />
                <div className="text-xs">Free Shipping</div>
              </div>
              <div className="text-center">
                <Shield className="h-6 w-6 mx-auto mb-2 text-primary" />
                <div className="text-xs">Secure Payment</div>
              </div>
              <div className="text-center">
                <RefreshCw className="h-6 w-6 mx-auto mb-2 text-primary" />
                <div className="text-xs">Easy Returns</div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="details" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <dl className="space-y-4">
                    <div className="flex justify-between">
                      <dt className="font-medium">SKU:</dt>
                      <dd className="text-muted-foreground">{product.sku}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="font-medium">Fabric:</dt>
                      <dd className="text-muted-foreground">{product.details.fabric}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="font-medium">Care:</dt>
                      <dd className="text-muted-foreground">{product.details.care}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="font-medium">Origin:</dt>
                      <dd className="text-muted-foreground">{product.details.origin}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="font-medium">Fit:</dt>
                      <dd className="text-muted-foreground">{product.details.fit}</dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center text-muted-foreground">
                    Reviews coming soon...
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="shipping" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Shipping Information</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Free shipping on orders over Rs. 2500</li>
                        <li>• Standard delivery: 3-5 business days</li>
                        <li>• Express delivery: 1-2 business days (additional charges apply)</li>
                        <li>• Cash on Delivery available</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Return Policy</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• 7 days return policy</li>
                        <li>• Items must be in original condition</li>
                        <li>• Return shipping costs may apply</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;