"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Menu, ShoppingCart, MapPin } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { ShoppingCartComponent } from "./shopping-cart"
import { useCart } from "@/contexts/cart-context"

export function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { state } = useCart()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Strains", href: "/education" },
    { name: "Catalogue", href: "/catalogue" },
    { name: "Merchandise", href: "/merchandise" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <>
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-green-600 text-white p-2 rounded-lg">
                <span className="font-bold text-lg">H</span>
              </div>
              <span className="font-bold text-xl">Herbally</span>
              <Badge variant="outline" className="hidden sm:inline-flex">
                VSC
              </Badge>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex bg-transparent">
                <Link href="/contact#locations">
                  <MapPin className="h-4 w-4 mr-2" />
                  Find Our Stores
                </Link>
              </Button>

              <Button variant="outline" size="sm" onClick={() => setIsCartOpen(true)} className="relative">
                <ShoppingCart className="h-4 w-4" />
                {state.items.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {state.items.reduce((sum, item) => sum + item.quantity, 0)}
                  </Badge>
                )}
              </Button>

              <ThemeToggle />

              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild className="md:hidden">
                  <Button variant="outline" size="sm">
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <div className="flex flex-col space-y-4 mt-8">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-lg font-medium transition-colors hover:text-primary py-2"
                      >
                        {item.name}
                      </Link>
                    ))}
                    <div className="pt-4 border-t">
                      <Button asChild variant="outline" className="w-full mb-4 bg-transparent">
                        <Link href="/contact#locations">
                          <MapPin className="h-4 w-4 mr-2" />
                          Find Our Stores
                        </Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      <ShoppingCartComponent isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}
