"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ShoppingCart, User, Crown, LogOut, Home, BookOpen, Store, Package, Phone, Truck, Images } from "lucide-react"
import { ShoppingCart as ShoppingCartComponent } from "@/components/shopping-cart" // Renamed import
import { Gallery } from "@/components/gallery"
import { useCart } from "@/contexts/cart-context"
import { useAuth } from "@/contexts/auth-context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const { state: cartState } = useCart()
  const { user, logout, isHydrated } = useAuth()

  const cartItemCount = cartState.items.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/90">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
          <Image 
            src="/images/herbally-vintage-logo-compact.svg" 
            alt="Herbally Vintage Logo" 
            width={180} 
            height={60} 
            className="h-auto max-h-14 w-auto herbally-logo herbally-logo-navbar" 
          />
          <span className="sr-only">Herbally</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link href="/" className="hover:text-green-600 dark:hover:text-green-400" prefetch={false}>
            Home
          </Link>
          <Link href="/catalogue" className="hover:text-green-600 dark:hover:text-green-400" prefetch={false}>
            VSC Catalogue
          </Link>
          <Link href="/merchandise" className="hover:text-green-600 dark:hover:text-green-400" prefetch={false}>
            Merchandise
          </Link>
          <Link href="/education" className="hover:text-green-600 dark:hover:text-green-400" prefetch={false}>
            Education
          </Link>
          <button
            onClick={() => setIsGalleryOpen(true)}
            className="hover:text-green-600 dark:hover:text-green-400 font-medium text-sm"
          >
            Gallery
          </button>
          <Link href="/track" className="hover:text-green-600 dark:hover:text-green-400" prefetch={false}>
            Track Order
          </Link>
          <Link href="/contact" className="hover:text-green-600 dark:hover:text-green-400" prefetch={false}>
            Contact
          </Link>
          <Link href="/career-programs" className="hover:text-green-600 dark:hover:text-green-400" prefetch={false}>
            Career Programs
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          {isHydrated && user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-user.jpg" alt={user.username} />
                    <AvatarFallback>{user.username.charAt(0).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <span className="sr-only">User menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>
                  {user.username}
                  {user.isMember && (
                    <Badge className="ml-2 bg-yellow-500 text-black">
                      <Crown className="h-3 w-3 mr-1" />
                      {user.membershipExpiry === "unlimited" ? "Premium Member" : "VSC Member"}
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
                {!user.isMember && (
                  <DropdownMenuItem asChild>
                    <Link href="/membership">Become a Member</Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            isHydrated && (
              <Button asChild variant="ghost" size="sm">
                <Link href="/login">Login</Link>
              </Button>
            )
          )}
          <Button variant="ghost" size="icon" onClick={() => setIsCartOpen(true)}>
            <ShoppingCart className="h-5 w-5" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {cartItemCount}
              </span>
            )}
            <span className="sr-only">Shopping Cart</span>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col gap-6 p-6">
                <Link href="/" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
                  <Image
                    src="/images/herbally-vintage-logo-compact.svg"
                    alt="Herbally Vintage Logo"
                    width={140}
                    height={47}
                    className="h-auto max-h-10"
                  />
                  <span className="sr-only">Herbally</span>
                </Link>
                <nav className="grid gap-4 text-sm font-medium">
                  <Link href="/" className="flex items-center gap-2 hover:text-green-600" prefetch={false}>
                    <Home className="h-4 w-4" />
                    Home
                  </Link>
                  <Link href="/catalogue" className="flex items-center gap-2 hover:text-green-600" prefetch={false}>
                    <Package className="h-4 w-4" />
                    VSC Catalogue
                  </Link>
                  <Link href="/merchandise" className="flex items-center gap-2 hover:text-green-600" prefetch={false}>
                    <Store className="h-4 w-4" />
                    Merchandise
                  </Link>
                  <Link href="/education" className="flex items-center gap-2 hover:text-green-600" prefetch={false}>
                    <BookOpen className="h-4 w-4" />
                    Education
                  </Link>
                  <button
                    onClick={() => setIsGalleryOpen(true)}
                    className="flex items-center gap-2 hover:text-green-600 font-medium text-sm text-left"
                  >
                    <Images className="h-4 w-4" />
                    Gallery
                  </button>
                  <Link href="/track" className="flex items-center gap-2 hover:text-green-600" prefetch={false}>
                    <Truck className="h-4 w-4" />
                    Track Order
                  </Link>
                  <Link href="/contact" className="flex items-center gap-2 hover:text-green-600" prefetch={false}>
                    <Phone className="h-4 w-4" />
                    Contact
                  </Link>
                  <Link
                    href="/career-programs"
                    className="flex items-center gap-2 hover:text-green-600"
                    prefetch={false}
                  >
                    <User className="h-4 w-4" />
                    Career Programs
                  </Link>
                  {isHydrated && !user && (
                    <Link href="/login" className="flex items-center gap-2 hover:text-green-600" prefetch={false}>
                      <User className="h-4 w-4" />
                      Login
                    </Link>
                  )}
                  {isHydrated && user && (
                    <Button variant="ghost" onClick={logout} className="flex items-center justify-start gap-2 pl-0">
                      <LogOut className="h-4 w-4" />
                      Logout
                    </Button>
                  )}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <ShoppingCartComponent isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <Gallery isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} />
    </header>
  )
}
