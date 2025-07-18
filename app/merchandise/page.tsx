"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ShoppingCart, Plus, Minus } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"

interface MerchItem {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  image: string
  category: string
  sizes?: string[]
  inStock: boolean
}

const merchandise: MerchItem[] = [
  {
    id: "1",
    name: "OG Logo Hoodie",
    description:
      "Premium black hoodie with classic Herbally branding and cannabis leaf border design. Perfect for those chronic vibes.",
    price: 500,
    originalPrice: 650,
    image: "/images/OG-hoodie.jpg",
    category: "Hoodies",
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
  },
  {
    id: "2",
    name: "Dog In Em T-Shirt",
    description:
      "Bold graphic tee featuring three fierce dogs and 'Respect the Plug' message. Front and back design included.",
    price: 520,
    image: "/images/dog-in-em.jpg",
    category: "T-Shirts",
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
  },
  {
    id: "3",
    name: "Athletics Department T-Shirt",
    description: "Classic athletic department style tee with Herbally branding. Comfortable fit for everyday wear.",
    price: 520,
    image: "/images/Athletics-shirt.jpg",
    category: "T-Shirts",
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
  },
  {
    id: "4",
    name: "OG Logo Trucker Cap",
    description:
      "Black and white trucker cap with 'Very Special Chronic' logo and cannabis leaf designs. Adjustable fit.",
    price: 150,
    originalPrice: 200,
    image: "/images/cap.jpg",
    category: "Accessories",
    inStock: true,
  },
]

export default function MerchandisePage() {
  const { dispatch } = useCart()
  const { toast } = useToast()
  const [selectedSizes, setSelectedSizes] = useState<{ [key: string]: string }>({})
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({})

  const handleAddToCart = (item: MerchItem) => {
    const quantity = quantities[item.id] || 1
    const size = selectedSizes[item.id]

    if (item.sizes && !size) {
      toast({
        title: "Please select a size",
        description: "Choose a size before adding to cart",
        variant: "destructive",
      })
      return
    }

    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        size: size,
      },
    })

    toast({
      title: "Added to cart!",
      description: `${item.name} ${size ? `(${size})` : ""} x${quantity} added to your cart`,
    })

    setQuantities((prev) => ({ ...prev, [item.id]: 1 }))
  }

  const updateQuantity = (itemId: string, change: number) => {
    setQuantities((prev) => ({
      ...prev,
      [itemId]: Math.max(1, (prev[itemId] || 1) + change),
    }))
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">
              🔥 Official Merchandise
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Herbally Merch Store
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Premium cannabis lifestyle apparel and accessories. Rep the brand with authentic Herbally gear.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {merchandise.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow border-2 overflow-hidden group">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {item.originalPrice && (
                    <Badge className="absolute top-2 left-2 bg-red-500">Save R{item.originalPrice - item.price}</Badge>
                  )}
                  {!item.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <Badge variant="destructive">Out of Stock</Badge>
                    </div>
                  )}
                </div>

                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg line-clamp-2">{item.name}</CardTitle>
                    <Badge variant="outline">{item.category}</Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-3">{item.description}</p>

                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-green-600">R{item.price.toFixed(2)}</span>
                    {item.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        R{item.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>

                  {item.sizes && (
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Size:</label>
                      <Select
                        value={selectedSizes[item.id] || ""}
                        onValueChange={(value) => setSelectedSizes((prev) => ({ ...prev, [item.id]: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          {item.sizes.map((size) => (
                            <SelectItem key={size} value={size}>
                              {size}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 bg-transparent"
                        onClick={() => updateQuantity(item.id, -1)}
                        disabled={!item.inStock}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center font-medium">{quantities[item.id] || 1}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 bg-transparent"
                        onClick={() => updateQuantity(item.id, 1)}
                        disabled={!item.inStock}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <Button onClick={() => handleAddToCart(item)} disabled={!item.inStock} className="w-full" size="lg">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-muted-foreground">Free delivery on orders over R500</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Badge className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-muted-foreground">High-quality materials and printing</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
              <p className="text-muted-foreground">30-day return policy</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
