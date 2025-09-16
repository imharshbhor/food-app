import { ShopHeader } from "@/components/shop-header"
import { ShopHero } from "@/components/shop-hero"
import { ShopContent } from "@/components/shop-content"
import { ShopFooter } from "@/components/shop-footer"

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-background">
      <ShopHeader />
      <ShopHero />
      <ShopContent />
      <ShopFooter />
    </div>
  )
}
