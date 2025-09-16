import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, Filter } from "lucide-react"

export function ShopSidebar() {
  return (
    <div className="w-80 space-y-6">
      <div className="bg-card p-6 border border-border rounded-xl shadow-sm">
        <h3 className="font-serif font-semibold text-lg mb-4 text-card-foreground">Product by Merchant</h3>
        <div className="relative mb-4">
          <Input placeholder="Search merchants..." className="pl-10 bg-muted border-border" />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between items-center hover:bg-muted/50 p-2 rounded-lg transition-colors">
            <span className="text-card-foreground">Jagdish Farshan</span>
            <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">86</span>
          </div>
          <div className="flex justify-between items-center hover:bg-muted/50 p-2 rounded-lg transition-colors">
            <span className="text-card-foreground">Paritosh Misthan</span>
            <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">8</span>
          </div>
          <div className="flex justify-between items-center hover:bg-muted/50 p-2 rounded-lg transition-colors">
            <span className="text-card-foreground">Das Panchawala Foods</span>
            <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">8</span>
          </div>
          <div className="flex justify-between items-center hover:bg-muted/50 p-2 rounded-lg transition-colors">
            <span className="text-card-foreground">Gujarati Panchkuta</span>
            <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">1</span>
          </div>
          <div className="flex justify-between items-center hover:bg-muted/50 p-2 rounded-lg transition-colors">
            <span className="text-card-foreground">Vipul Dudhiya Sweets</span>
            <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">67</span>
          </div>
        </div>
      </div>

      <div className="bg-card p-6 border border-border rounded-xl shadow-sm">
        <h3 className="font-serif font-semibold text-lg mb-4 text-card-foreground">Product by City</h3>
        <div className="relative mb-4">
          <Input placeholder="Search cities..." className="pl-10 bg-muted border-border" />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between items-center hover:bg-muted/50 p-2 rounded-lg transition-colors">
            <span className="text-card-foreground">Vadodara</span>
            <span className="bg-secondary/10 text-secondary px-2 py-1 rounded-full text-xs font-medium">126</span>
          </div>
          <div className="flex justify-between items-center hover:bg-muted/50 p-2 rounded-lg transition-colors">
            <span className="text-card-foreground">Ahmedabad</span>
            <span className="bg-secondary/10 text-secondary px-2 py-1 rounded-full text-xs font-medium">51</span>
          </div>
          <div className="flex justify-between items-center hover:bg-muted/50 p-2 rounded-lg transition-colors">
            <span className="text-card-foreground">Surat</span>
            <span className="bg-secondary/10 text-secondary px-2 py-1 rounded-full text-xs font-medium">5</span>
          </div>
          <div className="flex justify-between items-center hover:bg-muted/50 p-2 rounded-lg transition-colors">
            <span className="text-card-foreground">Bardoli</span>
            <span className="bg-secondary/10 text-secondary px-2 py-1 rounded-full text-xs font-medium">1</span>
          </div>
          <div className="flex justify-between items-center hover:bg-muted/50 p-2 rounded-lg transition-colors">
            <span className="text-card-foreground">Bharuch</span>
            <span className="bg-secondary/10 text-secondary px-2 py-1 rounded-full text-xs font-medium">2</span>
          </div>
        </div>
        <Button variant="ghost" className="text-primary hover:text-primary/80 text-sm mt-3 p-0 h-auto font-medium">
          See more
        </Button>
      </div>

      <div className="bg-card p-6 border border-border rounded-xl shadow-sm">
        <h3 className="font-serif font-semibold text-lg mb-4 text-card-foreground flex items-center">
          <Filter className="h-5 w-5 mr-2 text-primary" />
          Filter by Price
        </h3>
        <div className="mb-4">
          <Slider defaultValue={[40, 830]} max={1000} step={10} className="mb-6" />
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Price: ₹40.00 — ₹830.00</span>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              FILTER
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-card p-6 border border-border rounded-xl shadow-sm">
        <h3 className="font-serif font-semibold text-lg mb-4 text-card-foreground">Stock Status</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Checkbox
              id="on-sale"
              className="border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />
            <label htmlFor="on-sale" className="text-sm text-card-foreground font-medium cursor-pointer">
              On sale
            </label>
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox
              id="in-stock"
              className="border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />
            <label htmlFor="in-stock" className="text-sm text-card-foreground font-medium cursor-pointer">
              In stock
            </label>
          </div>
        </div>
      </div>

      <div className="bg-card p-6 border border-border rounded-xl shadow-sm">
        <h3 className="font-serif font-semibold text-lg mb-4 text-card-foreground">Top Rated Products</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-3 p-3 hover:bg-muted/50 rounded-lg transition-colors">
            <div className="w-14 h-14 bg-muted rounded-lg flex items-center justify-center">
              <span className="text-xs text-muted-foreground">IMG</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-card-foreground line-clamp-2">Jagdish Sabudana Khichdi Red</p>
              <p className="text-sm font-semibold text-primary mt-1">₹85.00</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 hover:bg-muted/50 rounded-lg transition-colors">
            <div className="w-14 h-14 bg-muted rounded-lg flex items-center justify-center">
              <span className="text-xs text-muted-foreground">IMG</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-card-foreground line-clamp-2">Jagdish Mathri Sev</p>
              <p className="text-sm font-semibold text-primary mt-1">₹90.00</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 hover:bg-muted/50 rounded-lg transition-colors">
            <div className="w-14 h-14 bg-muted rounded-lg flex items-center justify-center">
              <span className="text-xs text-muted-foreground">IMG</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-card-foreground line-clamp-2">Sing Bhujiya (200gm)</p>
              <p className="text-sm font-semibold text-primary mt-1">₹60.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
