import { ShopHeader } from "@/components/shop-header"
import { ShopFooter } from "@/components/shop-footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Heart, ShoppingCart, Star, Minus, Plus, Truck, Shield, RotateCcw } from "lucide-react"
import { notFound } from "next/navigation"

// Mock product data - in a real app, this would come from a database
const products = [
  {
    id: 1,
    name: "KESAR | KESAR TOPIA RAK (400GM)",
    price: 550.0,
    originalPrice: 600.0,
    discount: "-9%",
    image: "/kesar-mohanthal-indian-sweet.png",
    sku: "GUJARATFOOD_KESAR_001",
    description:
      "Premium quality Kesar Topia Rak made with finest saffron and traditional recipes. A delightful sweet that melts in your mouth with rich flavors of cardamom and pistachios.",
    ingredients: ["Milk Solids", "Sugar", "Saffron", "Cardamom", "Pistachios", "Ghee"],
    nutritionFacts: {
      calories: "450 per 100g",
      protein: "8g",
      carbs: "65g",
      fat: "18g",
      fiber: "2g",
    },
    weight: "400g",
    shelfLife: "15 days",
    category: "Traditional Sweets",
  },
  {
    id: 2,
    name: "ALOO BHUJIA (200GM)",
    price: 180.0,
    originalPrice: 200.0,
    discount: "-10%",
    image: "/aloo-bhujia-crispy-snack.png",
    sku: "GUJARATFOOD_BHUJIA_002",
    description:
      "Crispy and spicy Aloo Bhujia made from premium potatoes and aromatic spices. Perfect tea-time snack with authentic taste.",
    ingredients: ["Potato", "Gram Flour", "Spices", "Salt", "Oil"],
    nutritionFacts: {
      calories: "520 per 100g",
      protein: "12g",
      carbs: "45g",
      fat: "32g",
      fiber: "4g",
    },
    weight: "200g",
    shelfLife: "30 days",
    category: "Namkeen",
  },
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const productId = Number.parseInt(params.id)
  const product = products.find((p) => p.id === productId)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <ShopHeader />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-8">
          <span>Home</span> / <span>Shop</span> / <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-96 object-cover rounded-xl border border-border"
              />
              {product.discount && (
                <Badge className="absolute top-4 left-4 bg-destructive text-destructive-foreground font-semibold px-3 py-2 rounded-full">
                  {product.discount}
                </Badge>
              )}
              <Button
                size="sm"
                variant="outline"
                className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm border-border hover:bg-accent hover:text-accent-foreground rounded-full w-12 h-12 p-0"
              >
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            {/* Thumbnail images */}
            <div className="flex space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`${product.image}&variant=${i}`}
                  alt={`${product.name} view ${i}`}
                  className="w-20 h-20 object-cover rounded-lg border border-border cursor-pointer hover:border-primary"
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-serif font-bold text-foreground mb-2">{product.name}</h1>
              <p className="text-muted-foreground mb-4">SKU: {product.sku}</p>

              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">(4.8) 124 reviews</span>
              </div>

              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl font-bold text-primary">₹{product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    ₹{product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center space-x-4">
              <span className="font-semibold">Quantity:</span>
              <div className="flex items-center border border-border rounded-lg">
                <Button variant="ghost" size="sm" className="h-10 w-10 p-0">
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="px-4 py-2 font-semibold">1</span>
                <Button variant="ghost" size="sm" className="h-10 w-10 p-0">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex space-x-4">
              <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-lg">
                <ShoppingCart className="h-5 w-5 mr-2" />
                ADD TO CART
              </Button>
              <Button variant="outline" className="px-6 py-3 rounded-lg bg-transparent">
                Buy Now
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <Truck className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">Free Delivery</p>
                <p className="text-xs text-muted-foreground">Above ₹500</p>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">Secure Payment</p>
                <p className="text-xs text-muted-foreground">SSL Protected</p>
              </div>
              <div className="text-center">
                <RotateCcw className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">Easy Returns</p>
                <p className="text-xs text-muted-foreground">7 Day Policy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Information Tabs */}
        <div className="mt-16">
          <div className="border-b border-border">
            <nav className="flex space-x-8">
              <button className="py-4 px-1 border-b-2 border-primary text-primary font-medium">Product Details</button>
              <button className="py-4 px-1 text-muted-foreground hover:text-foreground">Ingredients</button>
              <button className="py-4 px-1 text-muted-foreground hover:text-foreground">Nutrition Facts</button>
              <button className="py-4 px-1 text-muted-foreground hover:text-foreground">Reviews</button>
            </nav>
          </div>

          <div className="py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Product Information</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Weight:</span>
                    <span>{product.weight}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shelf Life:</span>
                    <span>{product.shelfLife}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Category:</span>
                    <span>{product.category}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Ingredients</h3>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ingredient, index) => (
                    <Badge key={index} variant="secondary" className="px-3 py-1">
                      {ingredient}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ShopFooter />
    </div>
  )
}
