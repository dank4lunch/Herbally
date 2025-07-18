"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useCart } from "@/contexts/cart-context"
import { useAuth } from "@/contexts/auth-context"
import { ShoppingCart, Star, Users, Crown } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const merchandiseItems = [
  {
    id: "og-hoodie",
    name: "OG Logo Hoodie",
    price: 500,
    image: "/images/og-hoodie-new.jpg",
    description:
      "Premium black hoodie with ornate Herbally Very Special Chronic design featuring decorative cannabis leaf border",
    category: "Apparel",
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    featured: true,
  },
  {
    id: "athletics-shirt",
    name: "Athletics Department T-Shirt",
    price: 520,
    image: "/images/athletics-shirt-new.jpg",
    description: "Front and back design featuring Herbally Athletic Department with Very Special Chronic branding",
    category: "Apparel",
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    featured: true,
  },
  {
    id: "dog-in-em-shirt",
    name: "Dog In Em T-Shirt",
    price: 520,
    image: "/images/dog-in-em-new.jpg",
    description: "Bold design with three fierce dogs and 'Respect the Plug' message - front and back print",
    category: "Apparel",
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    featured: true,
  },
  {
    id: "vsc-trucker-cap",
    name: "VSC Trucker Cap",
    price: 150,
    image: "/images/cap-new.jpg",
    description: "Black and white trucker cap with Very Special Chronic logo and cannabis leaf designs",
    category: "Accessories",
    sizes: ["One Size"],
    inStock: true,
    featured: false,
  },
  {
    id: "herbally-tote",
    name: "Herbally Tote Bag",
    price: 200,
    image: "/images/herbally-tote.jpg",
    description: "Eco-friendly canvas tote bag with Herbally logo",
    category: "Accessories",
    sizes: ["One Size"],
    inStock: true,
    featured: false,
  },
  {
    id: "vsc-stickers",
    name: "VSC Sticker Pack",
    price: 50,
    image: "/images/vsc-stickers.jpg",
    description: "Pack of 5 premium vinyl stickers with various Herbally designs",
    category: "Accessories",
    sizes: ["One Size"],
    inStock: true,
    featured: false,
  },
  {
    id: "herbally-keychain",
    name: "Herbally Keychain",
    price: 80,
    image: "/images/herbally-keychain.jpg",
    description: "Metal keychain with embossed Herbally logo",
    category: "Accessories",
    sizes: ["One Size"],
    inStock: true,
    featured: false,
  },
  {
    id: "vsc-pin-set",
    name: "VSC Pin Set",
    price: 120,
    image: "/images/vsc-pin-set.jpg",
    description: "Set of 3 enamel pins with VSC and cannabis leaf designs",
    category: "Accessories",
    sizes: ["One Size"],
    inStock: true,
    featured: false,
  },
]

export default function MerchandisePage() {
  const [selectedSizes, setSelectedSizes] = useState<{ [key: string]: string }>({})
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({})
  const { addItem } = useCart()
  const { user } = useAuth()
  const { toast } = useToast()

  const handleSizeChange = (itemId: string, size: string) => {
    setSelectedSizes((prev) => ({ ...prev, [itemId]: size }))
  }

  const handleQuantityChange = (itemId: string, quantity: number) => {
    setQuantities((prev) => ({ ...prev, [itemId]: quantity }))
  }

  const getMemberPrice = (price: number) => {
    return user?.hasMembership ? price * 0.9 : price
  }

  const handleAddToCart = (item: any) => {
    const size = selectedSizes[item.id] || item.sizes[0]
    const quantity = quantities[item.id] || 1
    const finalPrice = getMemberPrice(item.price)

    addItem({
      id: `${item.id}-${size}`,
      name: `${item.name} (${size})`,
      price: finalPrice,
      image: item.image,
      size: size,
    })

    toast({
      title: "Added to cart",
      description: `${item.name} (${size}) x${quantity} added to your cart.${user?.hasMembership ? " Member discount applied!" : ""}`,
    })
  }

  const featuredItems = merchandiseItems.filter((item) => item.featured)
  const otherItems = merchandiseItems.filter((item) => !item.featured)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Herbally Merchandise</h1>
        <p className="text-xl text-gray-600 mb-6">Premium apparel and accessories for the cannabis community</p>

        {user?.hasMembership ? (
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-4 max-w-md mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Crown className="h-5 w-5 text-yellow-600" />
              <span className="font-semibold text-yellow-800">VSC Member Active</span>
            </div>
            <p className="text-yellow-700 text-sm">
              You're getting <strong>10% off</strong> all merchandise!
            </p>
          </div>
        ) : (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 max-w-md mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Users className="h-5 w-5 text-green-600" />
              <span className="font-semibold text-green-800">Join VSC for Benefits</span>
            </div>
            <p className="text-green-700 text-sm">
              Join for R41/month and get <strong>10% off</strong> all merchandise
            </p>
            <Button size="sm" className="mt-2" asChild>
              <a href="/membership">Join Now</a>
            </Button>
          </div>
        )}
      </div>

      {/* Featured Products */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Star className="h-6 w-6 text-yellow-500 mr-2" />
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="relative">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={400}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                  {item.featured && <Badge className="absolute top-2 left-2 bg-yellow-500 text-black">Featured</Badge>}
                  {user?.hasMembership && <Badge className="absolute top-2 right-2 bg-green-500">10% Off</Badge>}
                  {item.inStock ? (
                    <Badge className="absolute bottom-2 right-2 bg-green-500">In Stock</Badge>
                  ) : (
                    <Badge className="absolute bottom-2 right-2 bg-red-500">Out of Stock</Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg mb-2">{item.name}</CardTitle>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <div className="flex justify-between items-center mb-3">
                  <div className="flex flex-col">
                    {user?.hasMembership ? (
                      <>
                        <span className="text-2xl font-bold text-green-600">
                          R{getMemberPrice(item.price).toFixed(2)}
                        </span>
                        <span className="text-sm text-gray-500 line-through">R{item.price.toFixed(2)}</span>
                      </>
                    ) : (
                      <span className="text-2xl font-bold text-green-600">R{item.price.toFixed(2)}</span>
                    )}
                  </div>
                  <Badge variant="outline">{item.category}</Badge>
                </div>

                <div className="space-y-3">
                  {/* Size Selection */}
                  <div>
                    <label className="text-sm font-medium mb-1 block">Size:</label>
                    <Select
                      value={selectedSizes[item.id] || item.sizes[0]}
                      onValueChange={(value) => handleSizeChange(item.id, value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
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

                  {/* Quantity Selection */}
                  <div>
                    <label className="text-sm font-medium mb-1 block">Quantity:</label>
                    <Select
                      value={(quantities[item.id] || 1).toString()}
                      onValueChange={(value) => handleQuantityChange(item.id, Number.parseInt(value))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button onClick={() => handleAddToCart(item)} disabled={!item.inStock} className="w-full">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {item.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Other Products */}
      <section>
        <h2 className="text-2xl font-bold mb-6">All Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="relative">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  {user?.hasMembership && <Badge className="absolute top-2 left-2 bg-green-500">10% Off</Badge>}
                  {item.inStock ? (
                    <Badge className="absolute top-2 right-2 bg-green-500">In Stock</Badge>
                  ) : (
                    <Badge className="absolute top-2 right-2 bg-red-500">Out of Stock</Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="p-3">
                <CardTitle className="text-base mb-2">{item.name}</CardTitle>
                <p className="text-gray-600 text-xs mb-2 line-clamp-2">{item.description}</p>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex flex-col">
                    {user?.hasMembership ? (
                      <>
                        <span className="text-lg font-bold text-green-600">
                          R{getMemberPrice(item.price).toFixed(2)}
                        </span>
                        <span className="text-xs text-gray-500 line-through">R{item.price.toFixed(2)}</span>
                      </>
                    ) : (
                      <span className="text-lg font-bold text-green-600">R{item.price.toFixed(2)}</span>
                    )}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {item.category}
                  </Badge>
                </div>

                <div className="space-y-2">
                  {/* Size Selection */}
                  <Select
                    value={selectedSizes[item.id] || item.sizes[0]}
                    onValueChange={(value) => handleSizeChange(item.id, value)}
                  >
                    <SelectTrigger className="h-8">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {item.sizes.map((size) => (
                        <SelectItem key={size} value={size}>
                          {size}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  {/* Quantity Selection */}
                  <Select
                    value={(quantities[item.id] || 1).toString()}
                    onValueChange={(value) => handleQuantityChange(item.id, Number.parseInt(value))}
                  >
                    <SelectTrigger className="h-8">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter className="p-3 pt-0">
                <Button onClick={() => handleAddToCart(item)} disabled={!item.inStock} className="w-full h-8 text-xs">
                  <ShoppingCart className="h-3 w-3 mr-1" />
                  {item.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* VSC Membership CTA */}
      {!user?.hasMembership && (
        <section className="mt-12 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Join VSC Private Members Club</h2>
          <p className="text-lg mb-6">
            Get 10% off all merchandise, exclusive catalogue access, and member-only benefits
          </p>
          <div className="flex items-center justify-center space-x-4">
            <span className="text-3xl font-bold">R41/month</span>
            <Button size="lg" variant="secondary" asChild>
              <a href="/membership">Join Now</a>
            </Button>
          </div>
        </section>
      )}
    </div>
  )
}
