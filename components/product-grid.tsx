import { Grid, List, LayoutGrid } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ProductCard } from "./product-card"

const products = [
  {
    id: 1,
    name: "KESAR | KESAR TOPIA PAK (400GM)",
    price: 550.0,
    originalPrice: null,
    discount: "-7%",
    image: "/kesar-mohanthal-indian-sweet.png",
    sku: "GUJARATI_KESAR_TOPIA",
  },
  {
    id: 2,
    name: "KESAR MOHANTHAL (400GM)",
    price: 256.0,
    originalPrice: null,
    discount: null,
    image: "/kesar-mohanthal-gujarati-sweet.png",
    sku: "GUJARATI_KESAR_MOHANTHAL",
  },
  {
    id: 3,
    name: "ALOO BHUJIA (200GM)",
    price: 190.0,
    originalPrice: null,
    discount: "-21%",
    image: "/aloo-bhujia-indian-snack.png",
    sku: "GUJARATI_ALOO_BHUJIA",
  },
  {
    id: 4,
    name: "ALSI MUKHWAS (100gm)",
    price: 57.0,
    originalPrice: null,
    discount: "-15%",
    image: "/alsi-mukhwas-mouth-freshener.png",
    sku: "GUJARATI_ALSI_MUKHWAS",
  },
  {
    id: 5,
    name: "ANJEER NUTTY BUDDY SUGAR FREE (400GM)",
    price: 440.0,
    originalPrice: null,
    discount: "-12%",
    image: "/anjeer-nutty-buddy-sugar-free.png",
    sku: "GUJARATI_ANJEER_NUTTY",
  },
  {
    id: 6,
    name: "ASSORTED BITES(400gm)",
    price: 440.0,
    originalPrice: null,
    discount: "-1%",
    image: "/assorted-indian-sweets-bites.png",
    sku: "GUJARATI_ASSORTED_BITES",
  },
  {
    id: 7,
    name: "BADAM MAGAS(400gm)",
    price: 245.0,
    originalPrice: null,
    discount: "-8%",
    image: "/badam-magas-almond-sweet.png",
    sku: "GUJARATI_BADAM_MAGAS",
  },
  {
    id: 8,
    name: "Badam Pista Ghari 500gm pack",
    price: 400.0,
    originalPrice: null,
    discount: "-4%",
    image: "/badam-pista-ghari-indian-sweet.png",
    sku: "GUJARATI_BADAM_PISTA",
  },
  {
    id: 9,
    name: "BADAM PORI (400GM)",
    price: 456.0,
    originalPrice: null,
    discount: "-3%",
    image: "/badam-pori-almond-snack.png",
    sku: "GUJARATI_BADAM_PORI",
  },
  {
    id: 10,
    name: "Barbeque Roasted Peanuts",
    price: 75.0,
    originalPrice: null,
    discount: "-17%",
    image: "/barbeque-roasted-peanuts.png",
    sku: "GUJARATI_BBQ_PEANUTS",
  },
  {
    id: 11,
    name: "BHADARAM MUNG (200GM)",
    price: 60.0,
    originalPrice: null,
    discount: "-8%",
    image: "/bhadaram-mung-dal-snack.png",
    sku: "GUJARATI_BHADARAM_MUNG",
  },
  {
    id: 12,
    name: "Bharuch Khari Sing Bhajias 400GM",
    price: 200.0,
    originalPrice: null,
    discount: "-16%",
    image: "/bharuch-khari-sing-bhajias.png",
    sku: "GUJARATI_KHARI_SING",
  },
]

export function ProductGrid() {
  return (
    <div className="flex-1">
      {/* Toolbar */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Grid className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm">
            <LayoutGrid className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm">
            <List className="h-4 w-4" />
          </Button>
        </div>

        <Select defaultValue="default">
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Default sorting" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default sorting</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="name">Name: A to Z</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center space-x-2">
        <Button variant="destructive" size="sm">
          1
        </Button>
        <Button variant="outline" size="sm">
          2
        </Button>
        <Button variant="outline" size="sm">
          3
        </Button>
        <Button variant="outline" size="sm">
          4
        </Button>
        <span className="px-2">...</span>
        <Button variant="outline" size="sm">
          16
        </Button>
        <Button variant="outline" size="sm">
          17
        </Button>
        <Button variant="outline" size="sm">
          18
        </Button>
      </div>
    </div>
  )
}
