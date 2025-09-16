import { ShopHeader } from "@/components/shop-header"
import { ShopFooter } from "@/components/shop-footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Truck, Shield, Heart } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <ShopHeader />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-secondary py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-primary-foreground">
              <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
                Fresh Food,
                <span className="block text-secondary-foreground">Modern Experience</span>
              </h1>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Discover authentic flavors with a contemporary twist. From traditional sweets to modern snacks, we bring
                you the finest quality food products with exceptional service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-4 rounded-xl"
                >
                  <Link href="/shop">
                    Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 py-4 rounded-xl bg-transparent"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-8 border border-primary-foreground/20">
                <img
                  src="/modern-food-platter-with-sweets-and-snacks.png"
                  alt="Fresh food products"
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Why Choose ModernFood?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine traditional quality with modern convenience to deliver the best food experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Star className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-4">Premium Quality</h3>
              <p className="text-muted-foreground leading-relaxed">
                Hand-selected ingredients and traditional recipes ensure authentic taste and superior quality in every
                product.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/20 transition-colors">
                <Truck className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-4">Fast Delivery</h3>
              <p className="text-muted-foreground leading-relaxed">
                Quick and reliable delivery across India with special care to maintain freshness and quality.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Shield className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-4">Secure Shopping</h3>
              <p className="text-muted-foreground leading-relaxed">
                Safe and secure payment options with SSL encryption to protect your personal information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Featured Products</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our most popular items loved by customers across the country
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { name: "Traditional Sweets", image: "traditional sweets assortment", price: "₹299" },
              { name: "Premium Namkeen", image: "premium namkeen mix", price: "₹199" },
              { name: "Healthy Snacks", image: "healthy snack varieties", price: "₹149" },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={`/abstract-geometric-shapes.png?height=250&width=350&query=${product.image}`}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-background/90 backdrop-blur-sm rounded-full w-10 h-10 p-0"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">Premium quality, authentic taste</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button className="bg-primary hover:bg-primary/90">Add to Cart</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-4 rounded-xl bg-transparent"
            >
              <Link href="/shop">
                View All Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold text-primary-foreground mb-6">
            Ready to Experience Fresh Food?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Join thousands of satisfied customers who trust us for authentic, quality food products
          </p>
          <Button
            asChild
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-10 py-4 rounded-xl"
          >
            <Link href="/shop">
              Start Shopping <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <ShopFooter />
    </div>
  )
}
