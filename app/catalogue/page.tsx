"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useCart } from "@/contexts/cart-context"
import { useAuth } from "@/contexts/auth-context"
import { toast } from "react-hot-toast"
import { ShoppingCart, Lock, Zap, Moon, Brain, Leaf } from "lucide-react"
import Link from "next/link"

interface Product {
  id: string
  name: string
  type: "Sativa" | "Indica" | "Hybrid" | "Edible"
  thc?: string
  cbd?: string
  price: number
  image: string
  description: string
  sizes?: string[] // For strains, this could be weight (e.g., "1g", "3.5g")
  inStock: boolean
}

const catalogueProducts: Product[] = [
  // Sativa Strains (with prices)
  {
    id: "tequila-sunrise",
    name: "Tequila Sunrise",
    type: "Sativa",
    thc: "22-26%",
    cbd: "0.1-0.5%",
    price: 150.0, // Price per gram (example)
    image: "/placeholder.svg?height=300&width=300",
    description: "A vibrant sativa strain that delivers an energizing sunrise experience with citrusy flavors.",
    sizes: ["1g", "3.5g", "7g"],
    inStock: true,
  },
  {
    id: "pineapple",
    name: "Pineapple",
    type: "Sativa",
    thc: "18-22%",
    cbd: "0.2-0.8%",
    price: 140.0,
    image: "/placeholder.svg?height=300&width=300",
    description: "Sweet tropical sativa with distinct pineapple flavors for an uplifting and social high.",
    sizes: ["1g", "3.5g", "7g"],
    inStock: true,
  },
  {
    id: "jungle-fire",
    name: "Jungle Fire",
    type: "Sativa",
    thc: "21-25%",
    cbd: "0.2-0.6%",
    price: 160.0,
    image: "/images/strains/jungle-fire.jpeg",
    description: "Exotic sativa with tropical fire that ignites adventure and focus.",
    sizes: ["1g", "3.5g", "7g"],
    inStock: true,
  },
  {
    id: "jags",
    name: "JAGS",
    type: "Sativa",
    thc: "26-30%",
    cbd: "0.1-0.3%",
    price: 180.0,
    image: "/images/strains/jags.jpeg",
    description: "Premium top-shelf sativa with exceptional potency and complex terpene profile.",
    sizes: ["1g", "3.5g", "7g"],
    inStock: true,
  },

  // Indica Strains (with prices)
  {
    id: "helly-belly",
    name: "Helly Belly",
    type: "Indica",
    thc: "20-24%",
    cbd: "0.5-1.2%",
    price: 155.0,
    image: "/placeholder.svg?height=300&width=300",
    description: "Premium indica-dominant strain with sweet, fruity flavors for deep relaxation.",
    sizes: ["1g", "3.5g", "7g"],
    inStock: true,
  },
  {
    id: "pillow-talk",
    name: "Pillow Talk",
    type: "Indica",
    thc: "18-22%",
    cbd: "0.8-1.5%",
    price: 145.0,
    image: "/images/strains/pillow-talk.jpeg",
    description: "Perfect evening strain for relaxation and peaceful sleep.",
    sizes: ["1g", "3.5g", "7g"],
    inStock: true,
  },
  {
    id: "jelly-belly",
    name: "Jelly Belly",
    type: "Indica",
    thc: "19-23%",
    cbd: "0.4-0.9%",
    price: 150.0,
    image: "/images/strains/jelly-belly.jpeg",
    description: "Sweet fruity indica with jelly-like flavors that provide full-body relaxation.",
    sizes: ["1g", "3.5g", "7g"],
    inStock: true,
  },
  {
    id: "cheeky-sunset",
    name: "Cheeky Sunset",
    type: "Indica",
    thc: "21-25%",
    cbd: "0.3-0.7%",
    price: 165.0,
    image: "/images/strains/cheeky-sunset.jpeg",
    description: "Perfect sunset strain with cheeky effects that transition from relaxation to peaceful evening sleep.",
    sizes: ["1g", "3.5g", "7g"],
    inStock: true,
  },
  {
    id: "loud-cake",
    name: "Loud Cake",
    type: "Indica",
    thc: "23-27%",
    cbd: "0.2-0.6%",
    price: 170.0,
    image: "/images/strains/loud-cake.jpeg",
    description: "Potent dessert strain with cake-like flavors that deliver heavy relaxation.",
    sizes: ["1g", "3.5g", "7g"],
    inStock: true,
  },

  // Hybrid Strains (with prices)
  {
    id: "gorilla-cookies",
    name: "Gorilla Cookies",
    type: "Hybrid",
    thc: "24-28%",
    cbd: "0.2-0.8%",
    price: 175.0,
    image: "/images/strains/gorilla-cookies.jpeg",
    description: "Powerful hybrid combining the best of both worlds with potent effects.",
    sizes: ["1g", "3.5g", "7g"],
    inStock: true,
  },
  {
    id: "king-turp",
    name: "King Turp",
    type: "Hybrid",
    thc: "22-26%",
    cbd: "0.3-0.9%",
    price: 160.0,
    image: "/images/strains/king-turp.jpeg",
    description: "Terpene-rich hybrid with exceptional flavor profile and balanced effects.",
    sizes: ["1g", "3.5g", "7g"],
    inStock: true,
  },
  {
    id: "donkey-kong",
    name: "Donkey Kong",
    type: "Hybrid",
    thc: "25-29%",
    cbd: "0.1-0.5%",
    price: 185.0,
    image: "/images/strains/donkey-kong.jpeg",
    description: "Powerful hybrid strain with strong, long-lasting effects.",
    sizes: ["1g", "3.5g", "7g"],
    inStock: true,
  },
  {
    id: "mimosa",
    name: "Mimosa",
    type: "Hybrid",
    thc: "21-25%",
    cbd: "0.2-0.7%",
    price: 150.0,
    image: "/images/strains/mimosa.jpeg",
    description: "Bright citrusy hybrid perfect for morning use, providing uplifting effects.",
    sizes: ["1g", "3.5g", "7g"],
    inStock: true,
  },
  // Example Edible
  {
    id: "gummy-bears",
    name: "Assorted Gummy Bears",
    type: "Edible",
    price: 250.0,
    image: "/placeholder.svg?height=300&width=300",
    description: "Delicious assorted gummy bears infused with premium cannabis extract. 100mg THC per pack.",
    sizes: ["1 Pack", "3 Packs"],
    inStock: true,
  },
  {
    id: "chocolate-bar",
    name: "Dark Chocolate Bar",
    type: "Edible",
    price: 300.0,
    image: "/placeholder.svg?height=300&width=300",
    description: "Rich dark chocolate bar infused with high-quality cannabis. 200mg THC per bar.",
    sizes: ["1 Bar", "2 Bars"],
    inStock: true,
  },
]

export default function CataloguePage() {
  const { addItem } = useCart()
  const { user, isHydrated } = useAuth()
  const [selectedSizes, setSelectedSizes] = useState<{ [key: string]: string }>({})

  const handleAddToCart = (product: Product) => {
    const selectedSize = selectedSizes[product.id] || (product.sizes && product.sizes[0])
    if (!selectedSize) {
      toast({
        title: "Selection Required",
        description: `Please select a ${product.type === "Edible" ? "quantity" : "weight"} for the ${product.name}.`,
        variant: "destructive",
      })
      return
    }

    const itemToAdd = {
      id: `${product.id}-${selectedSize}`,
      name: `${product.name} (${selectedSize})`,
      price: product.price, // Prices are already member-only if shown
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

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Sativa":
        return "bg-orange-500"
      case "Indica":
        return "bg-purple-500"
      case "Hybrid":
        return "bg-green-500"
      case "Edible":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Sativa":
        return <Zap className="h-4 w-4" />
      case "Indica":
        return <Moon className="h-4 w-4" />
      case "Hybrid":
        return <Brain className="h-4 w-4" />
      case "Edible":
        return <Leaf className="h-4 w-4" /> // Using Leaf for edibles for now
      default:
        return <Leaf className="h-4 w-4" />
    }
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
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">VSC Private Catalogue</h1>
        <p className="mt-3 text-xl text-gray-600 dark:text-gray-400">
          Exclusive selection of premium cannabis strains and edibles for VSC Members.
        </p>
      </div>

      {!user?.isMember ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <Lock className="h-16 w-16 text-gray-400 mb-6" />
          <h2 className="text-3xl font-bold mb-4">Catalogue Access Restricted</h2>
          <p className="text-lg text-gray-600 mb-6 max-w-md">
            This catalogue is exclusive to VSC Members. Please log in and become a member to view prices and make
            purchases.
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/membership">Join VSC Membership</Link>
            </Button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {catalogueProducts.map((product) => {
            const selectedSize = selectedSizes[product.id] || (product.sizes && product.sizes[0])

            return (
              <Card key={product.id} className="flex flex-col overflow-hidden">
                <div className="relative h-60 w-full">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <Badge className={`absolute top-2 left-2 text-xs ${getTypeColor(product.type)} text-white`}>
                    {getTypeIcon(product.type)}
                    <span className="ml-1">{product.type}</span>
                  </Badge>
                </div>
                <CardContent className="flex flex-grow flex-col p-4">
                  <CardTitle className="text-lg font-semibold">{product.name}</CardTitle>
                  <CardDescription className="mt-1 text-sm text-gray-500 dark:text-gray-400 flex-grow">
                    {product.description}
                  </CardDescription>
                  {product.thc && product.type !== "Edible" && (
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">THC: {product.thc}</p>
                  )}
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900 dark:text-gray-50">
                      R{product.price.toFixed(2)}
                    </span>
                    {product.sizes && product.sizes.length > 0 && (
                      <Select
                        onValueChange={(value) => handleSizeChange(product.id, value)}
                        defaultValue={product.sizes[0]}
                      >
                        <SelectTrigger className="w-[100px]">
                          <SelectValue placeholder={product.type === "Edible" ? "Quantity" : "Weight"} />
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
      )}
    </div>
  )
}
