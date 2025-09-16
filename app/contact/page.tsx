import { ShopHeader } from "@/components/shop-header"
import { ShopFooter } from "@/components/shop-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <ShopHeader />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif font-bold text-primary-foreground mb-6">Contact Us</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you. Get in touch with us for any questions, feedback, or support you need
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow border-border">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-serif text-lg">Visit Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Shop No. 4, Gala No. 4, Opp Gala Tower, Sayajigunj, Vadodara, Gujarat 390005
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-border">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="font-serif text-lg">Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-2">+91 72278 93067</p>
                <p className="text-xs text-muted-foreground">Mon-Sat: 9AM-8PM</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-border">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-serif text-lg">Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-2">order@modernfoodstore.com</p>
                <p className="text-xs text-muted-foreground">We reply within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-border">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="font-serif text-lg">WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-2">+91 72278 93067</p>
                <p className="text-xs text-muted-foreground">24/7 Support Available</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form and Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Send us a Message</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Have a question or feedback? Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <Input
                      id="firstName"
                      placeholder="Enter your first name"
                      className="bg-muted border-border focus:border-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <Input
                      id="lastName"
                      placeholder="Enter your last name"
                      className="bg-muted border-border focus:border-primary"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="bg-muted border-border focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="bg-muted border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    placeholder="What is this regarding?"
                    className="bg-muted border-border focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    className="bg-muted border-border focus:border-primary resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-xl"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Additional Information */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We're here to help and answer any questions you might have. We look forward to hearing from you.
              </p>

              {/* Business Hours */}
              <Card className="mb-8 border-border">
                <CardHeader>
                  <CardTitle className="font-serif text-xl flex items-center">
                    <Clock className="h-6 w-6 text-primary mr-3" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">Monday - Friday</span>
                    <span className="text-muted-foreground">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">Saturday</span>
                    <span className="text-muted-foreground">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">Sunday</span>
                    <span className="text-muted-foreground">10:00 AM - 4:00 PM</span>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Section */}
              <div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-medium text-foreground mb-2">What are your delivery areas?</h4>
                    <p className="text-sm text-muted-foreground">
                      We deliver across India with free shipping on orders above ₹499.
                    </p>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-medium text-foreground mb-2">How long does delivery take?</h4>
                    <p className="text-sm text-muted-foreground">
                      Standard delivery takes 3-5 business days. Express delivery is available in select cities.
                    </p>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-medium text-foreground mb-2">Do you offer bulk orders?</h4>
                    <p className="text-sm text-muted-foreground">
                      Yes, we offer special pricing for bulk orders. Contact us for custom quotes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Find Our Store</h2>
            <p className="text-lg text-muted-foreground">
              Visit our physical store in Vadodara for a hands-on shopping experience
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="aspect-video bg-muted rounded-xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">Store Location</h3>
                <p className="text-muted-foreground">
                  Shop No. 4, Gala No. 4, Opp Gala Tower
                  <br />
                  Sayajigunj, Vadodara, Gujarat 390005
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ShopFooter />
    </div>
  )
}
