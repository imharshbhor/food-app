import { ShopHeader } from "@/components/shop-header"
import { ShopFooter } from "@/components/shop-footer"
import { Button } from "@/components/ui/button"
import { Heart, Users, Award, Leaf, Clock, Globe } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <ShopHeader />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif font-bold text-primary-foreground mb-6">About ModernFood</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Bridging tradition and innovation to bring you the finest food experience with authentic flavors and modern
            convenience
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded with a passion for authentic flavors and quality ingredients, ModernFood began as a small
                  family business dedicated to preserving traditional recipes while embracing modern food safety and
                  delivery standards.
                </p>
                <p>
                  What started in a small kitchen in Gujarat has grown into a trusted name across India, serving
                  thousands of customers who appreciate the perfect blend of tradition and innovation in every bite.
                </p>
                <p>
                  Today, we continue to honor our heritage while constantly evolving to meet the changing needs of our
                  customers, ensuring that every product we deliver maintains the highest standards of quality and
                  freshness.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-muted rounded-3xl p-8">
                <img
                  src="/traditional-indian-kitchen-with-modern-equipment.png"
                  alt="Our kitchen and preparation area"
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do, from sourcing ingredients to serving our customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-4">Quality First</h3>
              <p className="text-muted-foreground leading-relaxed">
                We never compromise on quality. Every ingredient is carefully selected and every product is crafted with
                attention to detail.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-4">Customer Centric</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our customers are at the heart of everything we do. We listen, adapt, and continuously improve based on
                your feedback.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-4">Excellence</h3>
              <p className="text-muted-foreground leading-relaxed">
                We strive for excellence in every aspect of our business, from product quality to customer service.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                <Leaf className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-4">Sustainability</h3>
              <p className="text-muted-foreground leading-relaxed">
                We are committed to sustainable practices, from eco-friendly packaging to supporting local farmers and
                suppliers.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-4">Reliability</h3>
              <p className="text-muted-foreground leading-relaxed">
                Count on us for consistent quality, timely delivery, and dependable service that you can trust every
                time.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-4">Innovation</h3>
              <p className="text-muted-foreground leading-relaxed">
                We embrace technology and innovation to enhance your shopping experience while preserving traditional
                flavors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The passionate people behind ModernFood who work tirelessly to bring you the best food experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Patel",
                role: "Founder & CEO",
                image: "professional indian businessman in modern office",
              },
              { name: "Priya Sharma", role: "Head of Quality", image: "professional indian woman in food laboratory" },
              {
                name: "Amit Kumar",
                role: "Operations Director",
                image: "professional indian man in warehouse setting",
              },
            ].map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <img
                    src={`/abstract-geometric-shapes.png?height=300&width=300&query=${member.image}`}
                    alt={member.name}
                    className="w-48 h-48 object-cover rounded-2xl mx-auto group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Dedicated to maintaining the highest standards of quality and customer satisfaction in everything we
                  do.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="text-primary-foreground">
              <div className="text-4xl font-bold font-serif mb-2">10K+</div>
              <div className="text-primary-foreground/80">Happy Customers</div>
            </div>
            <div className="text-primary-foreground">
              <div className="text-4xl font-bold font-serif mb-2">500+</div>
              <div className="text-primary-foreground/80">Products</div>
            </div>
            <div className="text-primary-foreground">
              <div className="text-4xl font-bold font-serif mb-2">50+</div>
              <div className="text-primary-foreground/80">Cities Served</div>
            </div>
            <div className="text-primary-foreground">
              <div className="text-4xl font-bold font-serif mb-2">5</div>
              <div className="text-primary-foreground/80">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-6">Ready to Experience Our Quality?</h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Join our community of satisfied customers and discover why quality matters
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-xl"
            >
              <Link href="/shop">Shop Now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-4 rounded-xl bg-transparent"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <ShopFooter />
    </div>
  )
}
