"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/contexts/cart-context"
import { useToast } from "@/hooks/use-toast"
import { Leaf, Zap, Cookie, Droplets, ShoppingCart, Star, Info, Users } from "lucide-react"

interface Product {
  id: string
  name: string
  price: number
  category: string
  description?: string
  strength?: string
  effects?: string[]
  inStock: boolean
}

const flowerProducts: Product[] = [
  // Indoor Grams
  {
    id: "helly-belly",
    name: "Helly Belly",
    price: 100,
    category: "indoor",
    description: "Premium indoor strain",
    inStock: true,
  },
  {
    id: "pillow-talk",
    name: "Pillow Talk",
    price: 100,
    category: "indoor",
    description: "Relaxing evening strain",
    inStock: true,
  },
  {
    id: "gorilla-cookies",
    name: "Gorilla Cookies",
    price: 120,
    category: "indoor",
    description: "Potent hybrid strain",
    inStock: true,
  },
  {
    id: "king-turp",
    name: "King Turp",
    price: 120,
    category: "indoor",
    description: "High terpene profile",
    inStock: true,
  },
  {
    id: "tequila-sunrise",
    name: "Tequila Sunrise",
    price: 150,
    category: "indoor",
    description: "Energizing sativa",
    inStock: true,
  },
  {
    id: "sugar-rush",
    name: "Sugar Rush",
    price: 150,
    category: "indoor",
    description: "Sweet and potent",
    inStock: true,
  },
  {
    id: "jelly-belly",
    name: "Jelly Belly",
    price: 120,
    category: "indoor",
    description: "Fruity indica",
    inStock: true,
  },
  {
    id: "donkey-kong",
    name: "Donkey Kong",
    price: 150,
    category: "indoor",
    description: "Strong hybrid",
    inStock: true,
  },
  {
    id: "cheeky-sunset",
    name: "Cheeky Sunset",
    price: 150,
    category: "indoor",
    description: "Evening relaxation",
    inStock: true,
  },
  {
    id: "mimosa",
    name: "Mimosa",
    price: 150,
    category: "indoor",
    description: "Citrusy morning strain",
    inStock: true,
  },
  { id: "loud-cake", name: "Loud Cake", price: 150, category: "indoor", description: "Dessert strain", inStock: true },
  { id: "rlc", name: "RLC", price: 150, category: "indoor", description: "Premium quality", inStock: true },
  {
    id: "jungle-fire",
    name: "Jungle Fire",
    price: 150,
    category: "indoor",
    description: "Tropical effects",
    inStock: true,
  },
  { id: "jags", name: "JAGS", price: 180, category: "indoor", description: "Top shelf quality", inStock: true },

  // Outdoor/Specials
  {
    id: "pineapple",
    name: "Pineapple",
    price: 80,
    category: "special",
    description: "Tropical outdoor strain",
    inStock: true,
  },
  {
    id: "sugar-kush",
    name: "Sugar Kush",
    price: 100,
    category: "special",
    description: "Sweet kush variety",
    inStock: true,
  },
  { id: "glookies", name: "Glookies", price: 100, category: "special", description: "Cookies hybrid", inStock: true },
  {
    id: "sour-diesel",
    name: "Sour Diesel",
    price: 60,
    category: "special",
    description: "Classic sativa",
    inStock: true,
  },
]

const jointProducts: Product[] = [
  // Indoor Joints
  {
    id: "sour-diesel-joint",
    name: "Sour Diesel Joint",
    price: 80,
    category: "indoor",
    description: "Pre-rolled indoor joint",
    inStock: true,
  },
  {
    id: "mimosa-joint",
    name: "Mimosa Joint",
    price: 80,
    category: "indoor",
    description: "Citrusy pre-roll",
    inStock: true,
  },
  {
    id: "sherbit-joint",
    name: "Sherbit Joint",
    price: 80,
    category: "indoor",
    description: "Sweet sherbet strain",
    inStock: true,
  },
  {
    id: "fire-girl-joint",
    name: "Fire Girl Joint",
    price: 80,
    category: "indoor",
    description: "Fiery sativa blend",
    inStock: true,
  },
  { id: "mix-joint", name: "Mix Joint", price: 80, category: "indoor", description: "House blend", inStock: true },
  { id: "rlc-joint", name: "RLC Joint", price: 80, category: "indoor", description: "Premium pre-roll", inStock: true },

  // Outdoor Joints
  {
    id: "bizane-joint",
    name: "Bizane Joint",
    price: 50,
    category: "outdoor",
    description: "Outdoor grown",
    inStock: true,
  },
  {
    id: "gorilla-joint",
    name: "Gorilla Joint",
    price: 50,
    category: "outdoor",
    description: "Strong outdoor strain",
    inStock: true,
  },
]

const concentrateProducts: Product[] = [
  // Moon Sticks
  {
    id: "moonstick-2pack",
    name: "Moon Stick 2-Pack",
    price: 80,
    category: "moonstick",
    description: "Concentrated cannabis sticks",
    inStock: true,
  },
  {
    id: "moonstick-5pack",
    name: "Moon Stick 5-Pack",
    price: 200,
    category: "moonstick",
    description: "Value pack",
    inStock: true,
  },
  {
    id: "space-stick",
    name: "Space Stick",
    price: 150,
    category: "moonstick",
    description: "Premium concentrate",
    inStock: true,
  },
  {
    id: "galaxy-stick",
    name: "Galaxy Stick",
    price: 300,
    category: "moonstick",
    description: "Ultra premium",
    inStock: true,
  },

  // Dab Hits
  {
    id: "dab-1hit",
    name: "1 Dab Hit",
    price: 60,
    category: "dab",
    description: "Single concentrate dose",
    inStock: true,
  },
  { id: "dab-2hits", name: "2 Dab Hits", price: 100, category: "dab", description: "Double dose", inStock: true },
]

const edibleProducts: Product[] = [
  // Lollipops & Drinks
  {
    id: "lollipop-50mg",
    name: "Lollipop (50mg)",
    price: 80,
    category: "candy",
    description: "50mg THC lollipop",
    strength: "50mg",
    inStock: true,
  },
  {
    id: "lollipop-100mg",
    name: "Lollipop (100mg)",
    price: 100,
    category: "candy",
    description: "100mg THC lollipop",
    strength: "100mg",
    inStock: true,
  },
  {
    id: "smoothies",
    name: "Smoothies",
    price: 125,
    category: "drink",
    description: "Cannabis-infused smoothie",
    inStock: true,
  },
  {
    id: "sodaze-drink",
    name: "Sodaze Drink",
    price: 80,
    category: "drink",
    description: "Assorted flavours",
    inStock: true,
  },

  // Gummies
  {
    id: "sweet-gummy-big",
    name: "Sweet Gummy Bears (Big Pack)",
    price: 280,
    category: "gummy",
    description: "Large pack of gummies",
    inStock: true,
  },
  {
    id: "sweet-gummy-10",
    name: "Sweet Gummy Bears 10-Pack",
    price: 100,
    category: "gummy",
    description: "10 piece pack",
    inStock: true,
  },
  {
    id: "sour-gummy-10",
    name: "Sour Gummy Bears 10-Pack",
    price: 100,
    category: "gummy",
    description: "Sour variety",
    inStock: true,
  },
  {
    id: "sour-gummy-big",
    name: "Sour Bears (Big Pack)",
    price: 280,
    category: "gummy",
    description: "Large sour pack",
    inStock: true,
  },
  { id: "worms", name: "Worms", price: 150, category: "gummy", description: "Gummy worms", inStock: true },

  // Baked Goods
  { id: "rockets", name: "Rockets", price: 100, category: "baked", description: "Cannabis rockets", inStock: true },
  {
    id: "cookies-premium",
    name: "Premium Cookies",
    price: 150,
    category: "baked",
    description: "High-quality cookies",
    inStock: true,
  },
  {
    id: "cookies-regular",
    name: "Regular Cookies",
    price: 40,
    category: "baked",
    description: "Standard cookies",
    inStock: true,
  },
  {
    id: "chocolate",
    name: "Chocolate",
    price: 100,
    category: "baked",
    description: "Cannabis chocolate",
    inStock: true,
  },
  { id: "crunchy", name: "Crunchy", price: 100, category: "baked", description: "Crunchy treats", inStock: true },
  {
    id: "brownie-premium",
    name: "Premium Brownie",
    price: 150,
    category: "baked",
    description: "High-quality brownie",
    inStock: true,
  },
  {
    id: "brownie-regular",
    name: "Regular Brownie",
    price: 80,
    category: "baked",
    description: "Standard brownie",
    inStock: true,
  },

  // Specialty Items
  {
    id: "shroom-jubes",
    name: "Shroom Jubes",
    price: 250,
    category: "specialty",
    description: "Mushroom-infused",
    inStock: true,
  },
  {
    id: "shroom-chocolate",
    name: "Shroom Chocolate",
    price: 300,
    category: "specialty",
    description: "Premium mushroom chocolate",
    inStock: true,
  },
]

const baggedProducts: Product[] = [
  {
    id: "outdoor-2g",
    name: "Outdoor Bag 2g",
    price: 60,
    category: "bagged",
    description: "2 gram outdoor bag",
    inStock: true,
  },
  {
    id: "outdoor-5g",
    name: "Outdoor Bag 5g",
    price: 200,
    category: "bagged",
    description: "5 gram outdoor bag",
    inStock: true,
  },
]

export default function CataloguePage() {
  const [activeTab, setActiveTab] = useState("flower")
  const { dispatch } = useCart()
  const { toast } = useToast()

  const addToCart = (product: Product) => {
    if (!product.inStock) {
      toast({
        title: "Out of Stock",
        description: `${product.name} is currently out of stock`,
        variant: "destructive",
      })
      return
    }

    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
      },
    })

    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart`,
    })
  }

  const ProductCard = ({ product }: { product: Product }) => (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{product.name}</CardTitle>
          <Badge variant={product.inStock ? "default" : "secondary"}>
            {product.inStock ? "In Stock" : "Out of Stock"}
          </Badge>
        </div>
        {product.strength && (
          <Badge variant="outline" className="w-fit">
            {product.strength}
          </Badge>
        )}
      </CardHeader>
      <CardContent className="space-y-4">
        {product.description && <p className="text-sm text-muted-foreground">{product.description}</p>}

        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-green-600">R{product.price.toFixed(2)}</span>
          <Button onClick={() => addToCart(product)} disabled={!product.inStock} size="sm">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">VSC Private Members Club Catalogue</h1>
          <p className="text-muted-foreground text-lg">Exclusive access to premium cannabis products for VSC members</p>
          <Badge className="mt-4 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            <Users className="h-4 w-4 mr-2" />
            Members Only
          </Badge>
        </div>

        {/* Important Notice */}
        <Alert className="mb-8">
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Members Only:</strong> This catalogue is exclusively for VSC Private Members Club members. All
            products comply with South African cannabis regulations. Must be 18+ with valid ID.
          </AlertDescription>
        </Alert>

        {/* Product Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="flower" className="flex items-center gap-2">
              <Leaf className="h-4 w-4" />
              Flower & Bud
            </TabsTrigger>
            <TabsTrigger value="joints" className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              Pre-Rolls
            </TabsTrigger>
            <TabsTrigger value="concentrates" className="flex items-center gap-2">
              <Droplets className="h-4 w-4" />
              Concentrates
            </TabsTrigger>
            <TabsTrigger value="edibles" className="flex items-center gap-2">
              <Cookie className="h-4 w-4" />
              Edibles
            </TabsTrigger>
            <TabsTrigger value="bagged" className="flex items-center gap-2">
              <Star className="h-4 w-4" />
              Bagged
            </TabsTrigger>
          </TabsList>

          {/* Flower & Bud Tab */}
          <TabsContent value="flower" className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Premium Indoor Strains</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {flowerProducts
                  .filter((p) => p.category === "indoor")
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-bold mb-4">Specials & Outdoor</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {flowerProducts
                  .filter((p) => p.category === "special")
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            </div>
          </TabsContent>

          {/* Pre-Rolls Tab */}
          <TabsContent value="joints" className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Indoor Pre-Rolls</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {jointProducts
                  .filter((p) => p.category === "indoor")
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-bold mb-4">Outdoor Pre-Rolls</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {jointProducts
                  .filter((p) => p.category === "outdoor")
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            </div>
          </TabsContent>

          {/* Concentrates Tab */}
          <TabsContent value="concentrates" className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Moon Sticks</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {concentrateProducts
                  .filter((p) => p.category === "moonstick")
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-bold mb-4">Dab Hits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {concentrateProducts
                  .filter((p) => p.category === "dab")
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            </div>
          </TabsContent>

          {/* Edibles Tab */}
          <TabsContent value="edibles" className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Candies & Drinks</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {edibleProducts
                  .filter((p) => p.category === "candy" || p.category === "drink")
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-bold mb-4">Gummies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {edibleProducts
                  .filter((p) => p.category === "gummy")
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-bold mb-4">Baked Goods</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {edibleProducts
                  .filter((p) => p.category === "baked")
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-bold mb-4">Specialty Items</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {edibleProducts
                  .filter((p) => p.category === "specialty")
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            </div>
          </TabsContent>

          {/* Bagged Tab */}
          <TabsContent value="bagged" className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Pre-Bagged Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {baggedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Footer Notice */}
        <Alert className="mt-12">
          <AlertDescription>
            <strong>Delivery Information:</strong> We deliver within Gauteng Province. Minimum order R300, delivery fee
            R50. Same-day delivery available for orders placed before 6PM. Contact us at +27 67 530 5635 for more
            information.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  )
}
