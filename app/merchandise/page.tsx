"use client"

import Link from "next/link"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useCart } from "@/contexts/cart-context"
import { useAuth } from "@/contexts/auth-context"
import { toast } from "@/hooks/use-toast"
import { ShoppingCart, Crown } from "lucide-react"

interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  sizes?: string[]
  inStock: boolean
}

const products: Product[] = [
  {
    id: "athletics-shirt",
    name: "Herbally Athletics Shirt",
    description: "Premium cotton athletics shirt with Herbally branding",
    price: 350.0,
    image: "/images/athletics-shirt-new.jpg",
    category: "Apparel",
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
  },
  {
    id: "cap",
    name: "Herbally Branded Cap",
    description: "Classic baseball cap with embroidered Herbally logo. One size fits all with adjustable strap.",
    price: 200.0,
    image: "/images/cap-new.jpg",
    category: "Accessories",
    sizes: ["One Size"],
    inStock: true,
  },
  {
    id: "og-hoodie",
    name: "Herbally OG Hoodie",
    description:
      "Premium quality hoodie with a soft fleece lining and classic Herbally OG design. Ideal for warmth and style.",
    price: 600.0,
    image: "/images/og-hoodie-new.jpg",
    category: "Apparel",
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
  },
  {
    id: "dog-in-em",
    name: "Herbally Dog in 'Em Tee",
    description:
      "Unique graphic tee featuring a playful 'Dog in 'Em' design, made from breathable cotton for everyday comfort.",
    price: 300.0,
    image: "/images/dog-in-em-new.jpg",
    category: "Apparel",
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
  },
]

export default function MerchandisePage() {
  const { addItem } = useCart()
  const { user, isHydrated } = useAuth()
  const [selectedSizes, setSelectedSizes] = useState<{ [key: string]: string }>({})

  const handleAddToCart = (product: Product) => {
    const selectedSize = selectedSizes[product.id] || (product.sizes && product.sizes[0])
    if (!selectedSize) {
      toast({
        title: "Size Required",
        description: "Please select a size for the item.",
        variant: "destructive",
      })
      return
    }

    const itemToAdd = {
      id: `${product.id}-${selectedSize}`, // Unique ID for item + size
      name: `${product.name} (${selectedSize})`,
      price: user?.isMember ? product.price * 0.9 : product.price,
      image: product.image,
      quantity: 1,
    }
    addItem(itemToAdd)

    toast({
      title: "Added to cart",
      description: `${product.name} (${selectedSize}) has been added to your cart.`,
    })
  }

  const handleSizeChange = (productId: string, size: string) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }))
  }

  if (!isHydrated) {
    return (
      <div className="flex min-h-[calc(100vh-64px)] items-center justify-center">
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Herbally Merchandise</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Premium apparel and accessories representing the Herbally lifestyle
          </p>
          {user?.isMember && (
            <div className="mt-4">
              <Badge className="bg-yellow-500 text-black">
                <Crown className="h-4 w-4 mr-2" />
                VSC Member - 10% Off All Items
              </Badge>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => {
            const displayPrice = user?.isMember ? product.price * 0.9 : product.price
            const originalPrice = product.price
            const selectedSize = selectedSizes[product.id] || (product.sizes && product.sizes[0])

            return (
              <Card key={product.id} className="flex flex-col overflow-hidden">
                <div className="relative h-60 w-full">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <Badge className="absolute top-2 left-2 text-xs">{product.category}</Badge>
                </div>
                <CardContent className="flex flex-grow flex-col p-4">
                  <CardTitle className="text-lg font-semibold">{product.name}</CardTitle>
                  <CardDescription className="mt-1 text-sm text-gray-500 dark:text-gray-400 flex-grow">
                    {product.description}
                  </CardDescription>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex flex-col">
                      {user?.isMember && (
                        <span className="text-sm text-gray-500 line-through">R{originalPrice.toFixed(2)}</span>
                      )}
                      <span className="text-xl font-bold text-gray-900 dark:text-gray-50">
                        R{displayPrice.toFixed(2)}
                      </span>
                    </div>
                    {product.sizes && product.sizes.length > 0 && (
                      <Select
                        onValueChange={(value) => handleSizeChange(product.id, value)}
                        defaultValue={product.sizes[0]}
                      >
                        <SelectTrigger className="w-[100px]">
                          <SelectValue placeholder="Size" />
                        </SelectTrigger>
                        <SelectContent>
                          {product.sizes.map((size) => (
                            <SelectItem key={size} value={size}>
                              {size}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full" onClick={() => handleAddToCart(product)} disabled={!product.inStock}>
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>

        {!user?.isMember && (
          <div className="mt-12 text-center bg-green-50 p-8 rounded-lg">
            <Crown className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-green-800 mb-2">Join VSC for Member Benefits</h3>
            <p className="text-gray-600 mb-4">
              Sign up for VSC membership and get 10% off all merchandise plus exclusive catalogue access
            </p>
            <Button asChild>
              <Link href="/membership">
                <Crown className="h-4 w-4 mr-2" />
                Join VSC - R41/month
              </Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
