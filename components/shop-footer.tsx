import { Truck, CreditCard, Shield, MessageCircle, Facebook, Instagram, Twitter } from "lucide-react"

export function ShopFooter() {
  return (
    <>
      <div className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex items-center space-x-4 group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-lg text-foreground">Fast Delivery</h3>
                <p className="text-sm text-muted-foreground">Above Rs. 499/- All Over India</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 group">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                <CreditCard className="h-8 w-8 text-secondary" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-lg text-foreground">Secure Payment</h3>
                <p className="text-sm text-muted-foreground">Multiple Payment Options</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-lg text-foreground">Secure Account</h3>
                <p className="text-sm text-muted-foreground">SSL Encryption</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 group">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                <MessageCircle className="h-8 w-8 text-secondary" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-lg text-foreground">WhatsApp Support</h3>
                <p className="text-sm text-muted-foreground">24*7 message allowed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Contact Details */}
            <div>
              <h3 className="font-serif font-semibold text-xl mb-6">Contact Details</h3>
              <div className="space-y-3 text-sm opacity-90">
                <p className="font-medium">ModernFood.com</p>
                <p>Shop No. 4, Gala No. 4, Opp Gala</p>
                <p>Tower, Sayajigunj, Vadodara, Gujarat</p>
                <p>390005</p>
                <div className="pt-4 space-y-2">
                  <p className="flex items-center">
                    <span className="mr-2">📞</span>
                    +91 72278 93067
                  </p>
                  <p className="flex items-center">
                    <span className="mr-2">✉️</span>
                    order@modernfoodstore.com
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-serif font-semibold text-xl mb-6">Quick Links</h3>
              <div className="space-y-3 text-sm opacity-90">
                <p className="hover:opacity-100 cursor-pointer transition-opacity">Become a merchant</p>
                <p className="hover:opacity-100 cursor-pointer transition-opacity">Become an agent/retailer</p>
                <p className="hover:opacity-100 cursor-pointer transition-opacity">About us</p>
                <p className="hover:opacity-100 cursor-pointer transition-opacity">Contact us</p>
                <p className="hover:opacity-100 cursor-pointer transition-opacity">Shipping links</p>
                <p className="hover:opacity-100 cursor-pointer transition-opacity">FAQ</p>
              </div>
            </div>

            {/* Download App */}
            <div>
              <h3 className="font-serif font-semibold text-xl mb-6">Download App on Mobile</h3>
              <div className="space-y-4">
                <div className="bg-black rounded-xl p-4 w-48 hover:bg-gray-800 transition-colors cursor-pointer">
                  <div className="text-xs opacity-80">Get it on</div>
                  <div className="font-semibold text-lg">Google Play</div>
                </div>
                <div className="bg-black rounded-xl p-4 w-48 hover:bg-gray-800 transition-colors cursor-pointer">
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="font-semibold text-lg">App Store</div>
                </div>
              </div>
            </div>

            {/* Shipping Provider */}
            <div>
              <h3 className="font-serif font-semibold text-xl mb-6">Shipping Provider:</h3>
              <div className="flex flex-wrap gap-3">
                <div className="bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-shadow">
                  DTDC
                </div>
                <div className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
                  FedEx
                </div>
                <div className="bg-yellow-500 text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-400 transition-colors">
                  DHL
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-6 mb-6 md:mb-0">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-2xl font-serif">M</span>
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-xl">We're On Social Platform</h3>
                  <p className="text-sm opacity-80">modernfoodstore.com</p>
                  <div className="flex space-x-3 mt-2">
                    <Facebook className="h-5 w-5 opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
                    <Instagram className="h-5 w-5 opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
                    <Twitter className="h-5 w-5 opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
                  </div>
                </div>
              </div>

              <div className="text-sm text-center opacity-80">
                <p>WILL BE USED IN ACCORDANCE WITH</p>
                <p>OUR PRIVACY POLICY</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
