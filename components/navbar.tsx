"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Menu, ShoppingCartIcon, User, Crown } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { ShoppingCart } from "@/components/shopping-cart" // Corrected import name
import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAuth } from "@/contexts/auth-context"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function Navbar() {
  const { state: cartState } = useCart()
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { user, logout, isHydrated } = useAuth()

  const handleCartClose = () => setIsCartOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-gray-950/95 dark:supports-[backdrop-filter]:bg-gray-950/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold" prefetch={false}>
          <Image src="/placeholder-logo.svg" alt="Herbally Logo" width={32} height={32} />
          <span className="sr-only">Herbally</span>
          Herbally
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link href="/catalogue" className="hover:text-primary" prefetch={false}>
            Catalogue
          </Link>
          <Link href="/merchandise" className="hover:text-primary" prefetch={false}>
            Merchandise
          </Link>
          <Link href="/education" className="hover:text-primary" prefetch={false}>
            Education
          </Link>
          <Link href="/research" className="hover:text-primary" prefetch={false}>
            Research
          </Link>
          <Link href="/about" className="hover:text-primary" prefetch={false}>
            About Us
          </Link>
          <Link href="/contact" className="hover:text-primary" prefetch={false}>
            Contact
          </Link>
          <Link href="/track" className="hover:text-primary" prefetch={false}>
            Track Order
          </Link>
          <Link href="/membership" className="hover:text-primary" prefetch={false}>
            VSC Membership
          </Link>
          <Link href="/careers" className="hover:text-primary" prefetch={false}>
            Career Programs
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => setIsCartOpen(true)}>
            <ShoppingCartIcon className="h-5 w-5" />
            {cartState.items.length > 0 && (
              <Badge className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs">
                {cartState.items.length}
              </Badge>
            )}
            <span className="sr-only">View cart</span>
          </Button>
          {isHydrated &&
            (user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <User className="h-5 w-5" />
                    {user.isMember && (
                      <Crown className="absolute -top-1 -right-1 h-4 w-4 text-yellow-500 fill-yellow-500" />
                    )}
                    <span className="sr-only">User menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>
                    {user.username}
                    {user.isMember && (
                      <Badge variant="secondary" className="ml-2">
                        VSC Member
                      </Badge>
                    )}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/orders">My Orders</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button asChild variant="ghost">
                <Link href="/login">Login</Link>
              </Button>
            ))}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 p-6">
                <Link href="/catalogue" className="font-medium hover:text-primary" prefetch={false}>
                  Catalogue
                </Link>
                <Link href="/merchandise" className="font-medium hover:text-primary" prefetch={false}>
                  Merchandise
                </Link>
                <Link href="/education" className="font-medium hover:text-primary" prefetch={false}>
                  Education
                </Link>
                <Link href="/research" className="font-medium hover:text-primary" prefetch={false}>
                  Research
                </Link>
                <Link href="/about" className="font-medium hover:text-primary" prefetch={false}>
                  About Us
                </Link>
                <Link href="/contact" className="font-medium hover:text-primary" prefetch={false}>
                  Contact
                </Link>
                <Link href="/track" className="font-medium hover:text-primary" prefetch={false}>
                  Track Order
                </Link>
                <Link href="/membership" className="font-medium hover:text-primary" prefetch={false}>
                  VSC Membership
                </Link>
                <Link href="/careers" className="font-medium hover:text-primary" prefetch={false}>
                  Career Programs
                </Link>
                {isHydrated &&
                  (user ? (
                    <Button onClick={logout} variant="outline">
                      Logout
                    </Button>
                  ) : (
                    <Button asChild>
                      <Link href="/login">Login</Link>
                    </Button>
                  ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <ShoppingCart isOpen={isCartOpen} onClose={handleCartClose} />
    </header>
  )
}
