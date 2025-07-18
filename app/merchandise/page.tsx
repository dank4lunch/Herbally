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

interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  sizes?: string[]
}

const products: Product[] = [
  {
    id: "athletics-shirt",
    name: "Herbally Athletics Shirt",
    description: "Comfortable and stylish athletic shirt with Herbally branding, perfect for workouts or casual wear.",
    price: 350.0,
    image: "/images/athletics-shirt-new.jpg",
    category: "Apparel",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "cap",
    name: "Herbally Branded Cap",
    description: "Classic baseball cap with embroidered Herbally logo. One size fits all with adjustable strap.",
    price: 200.0,
    image: "/images/cap-new.jpg",
    category: "Accessories",
    sizes: ["One Size"],
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
  },
  // Removed items without real pictures as per user request
  // {
  //   id: "tote-bag",
  //   name: "Herbally Tote Bag",
  //   description: "Eco-friendly canvas tote bag with Herbally logo, perfect for groceries or daily essentials.",
  //   price: 200.00,
  //   image: "/images/herbally-tote.jpg",
  //   category: "Accessories",
  //   sizes: ["One Size"],
  // },
  // {
  //   id: "sticker-pack",
  //   name: "VSC Sticker Pack",
  //   description: "Pack of 5 premium vinyl stickers with various Herbally designs, great for personalizing your gear.",
  //   price: 50.00,
  //   image: "/images/vsc-stickers.jpg",
  //   category: "Accessories",
  //   sizes: ["One Size"],
  // },
  // {
  //   id: "keychain",
  //   name: "Herbally Keychain",
  //   description: "Durable metal keychain with embossed Herbally logo, a subtle way to show your support.",
  //   price: 80.00,
  //   image: "/images/herbally-keychain.jpg",
  //   category: "Accessories",
  //   sizes: ["One Size"],
  // },
  // {
  //   id: "pin-set",
  //   name: "VSC Pin Set",
  //   description: "Set of 3 enamel pins with VSC and cannabis leaf designs, perfect for jackets or bags.",
  //   price: 120.00,
  //   image: "/images/vsc-pin-set.jpg",
  //   category: "Accessories",
  //   sizes: ["One Size"],
  // },
]

export default function MerchandisePage() {
  const { addItem } = useCart()
  const { user, isHydrated } = useAuth()
  const [selectedSizes, setSelectedSizes] = useState<{ [key: string]: string }>({})

  const handleAddToCart = (product: Product) => {
    const selectedSize = selectedSizes[product.id] || (product.sizes && product.sizes[0])
    if (!selectedSize) {
      alert("Please select a size.")
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
    <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Herbally Merchandise</h1>
        <p className="mt-3 text-xl text-gray-600 dark:text-gray-400">
          Explore our exclusive collection of Herbally branded apparel and accessories.
        </p>
        {user?.isMember && (
          <p className="mt-2 text-lg font-semibold text-green-600 dark:text-green-400">
            As a VSC Member, you get 10% off all merchandise!
          </p>
        )}
        {!user?.isMember && (
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            <Link href="/membership" className="text-primary hover:underline">
              Join VSC Membership
            </Link>{" "}
            to get 10% off all merchandise!
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => {
          const displayPrice = user?.isMember ? product.price * 0.9 : product.price
          const originalPrice = product.price

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
                <Button className="w-full" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
