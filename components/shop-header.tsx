"use client"

import { Search, ShoppingCart, Menu, User, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useCart } from "@/lib/cart-context"
import { useAuth } from "@/lib/auth-context"
import { CartDrawer } from "./cart-drawer"
import { useState } from "react"

export function ShopHeader() {
  const pathname = usePathname()
  const { state } = useCart()
  const { state: authState, logout } = useAuth()
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <>
      <div className="bg-primary text-primary-foreground text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="font-medium">+91 72278 93067</span>
          <span className="font-medium">order@modernfoodstore.com</span>
        </div>
      </div>

      <header className="bg-background shadow-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
                <span className="text-primary-foreground font-bold text-xl font-serif">M</span>
              </div>
            </div>

            <nav className="hidden lg:flex items-center space-x-4">
              <Link
                href="/"
                className={`text-foreground hover:text-primary transition-colors font-medium ${pathname === "/" ? "text-primary font-semibold border-b-2 border-primary pb-1" : ""}`}
              >
                Home
              </Link>
              <Link
                href="/shop"
                className={`text-foreground hover:text-primary transition-colors font-medium ${pathname === "/shop" ? "text-primary font-semibold border-b-2 border-primary pb-1" : ""}`}
              >
                Shop
              </Link>
              <Link
                href="/about"
                className={`text-foreground hover:text-primary transition-colors font-medium ${pathname === "/about" ? "text-primary font-semibold border-b-2 border-primary pb-1" : ""}`}
              >
                About us
              </Link>
              <Link
                href="/contact"
                className={`text-foreground hover:text-primary transition-colors font-medium ${pathname === "/contact" ? "text-primary font-semibold border-b-2 border-primary pb-1" : ""}`}
              >
                Contact us
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2">
                <div className="relative">
                  <Input
                    placeholder="Search for products"
                    className="w-64 h-10 pl-4 pr-10 bg-muted border-border focus:border-primary"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
                <Select>
                  <SelectTrigger className="w-40 h-10 bg-muted border-border">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sweets">Sweets</SelectItem>
                    <SelectItem value="snacks">Snacks</SelectItem>
                    <SelectItem value="namkeen">Namkeen</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center space-x-2 h-10 bg-transparent relative"
                  onClick={() => setIsCartOpen(true)}
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span className="hidden sm:inline">₹{state.total.toFixed(2)}</span>
                  {state.itemCount > 0 && (
                    <span className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full min-w-[20px] h-5 flex items-center justify-center">
                      {state.itemCount}
                    </span>
                  )}
                  {state.itemCount === 0 && (
                    <span className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded-full">0</span>
                  )}
                </Button>

                <div className="hidden md:flex items-center space-x-2 text-sm">
                  <Button variant="ghost" size="sm" className="h-8 px-3 bg-muted">
                    USD
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 px-3 bg-muted">
                    EN
                  </Button>
                </div>

                {authState.user ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="text-sm font-medium flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{authState.user.name}</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        My Profile
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        My Orders
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={logout} className="text-destructive">
                        <LogOut className="mr-2 h-4 w-4" />
                        Logout
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/login">Login</Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/signup">Register</Link>
                    </Button>
                  </div>
                )}

                <Button variant="ghost" size="sm" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}
