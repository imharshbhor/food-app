"use client"

import { Heart, ShoppingCart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/lib/cart-context"
import Link from "next/link"

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number | null
  discount?: string | null
  image: string
  sku: string
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product)
  }

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
      <div className="relative">
        <Link href={`/product/${product.id}`}>
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-52 object-cover cursor-pointer"
          />
        </Link>
        {product.discount && (
          <Badge className="absolute top-3 left-3 bg-destructive text-destructive-foreground font-semibold px-3 py-1 rounded-full">
            {product.discount}
          </Badge>
        )}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Button
            size="sm"
            variant="outline"
            className="bg-background/90 backdrop-blur-sm border-border hover:bg-accent hover:text-accent-foreground rounded-full w-10 h-10 p-0"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>

        <div className="absolute bottom-3 left-3 flex items-center space-x-1 bg-background/90 backdrop-blur-sm rounded-full px-2 py-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="text-xs font-medium ml-1">4.8</span>
        </div>
      </div>

      <div className="p-5">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-serif font-semibold text-base mb-2 line-clamp-2 text-card-foreground group-hover:text-primary transition-colors cursor-pointer">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-muted-foreground mb-3 font-medium">SKU: {product.sku}</p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">₹{product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice.toFixed(2)}</span>
            )}
          </div>
        </div>

        <Button
          onClick={handleAddToCart}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          ADD TO CART
        </Button>
      </div>
    </div>
  )
}
