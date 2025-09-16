import { ShopSidebar } from "./shop-sidebar"
import { ProductGrid } from "./product-grid"

export function ShopContent() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
        <span>Home</span>
        <span>/</span>
        <span>Shop</span>
      </div>

      <div className="flex gap-8">
        <ShopSidebar />
        <ProductGrid />
      </div>
    </div>
  )
}
