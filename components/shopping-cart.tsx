"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Minus, Plus, Trash2 } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import Image from "next/image"
import Link from "next/link"

interface ShoppingCartProps {
  isOpen: boolean
  onClose: () => void
}

export function ShoppingCart({ isOpen, onClose }: ShoppingCartProps) {
  // Changed from ShoppingCartComponent to ShoppingCart
  const { state, dispatch } = useCart()

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })
  }

  const removeItem = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>

        {state.items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center space-y-1">
            <div className="text-xl font-semibold">Your cart is empty</div>
            <div className="text-sm text-muted-foreground">Add some items to get started</div>
            <Button asChild className="mt-4">
              <Link href="/merchandise" onClick={onClose}>
                Browse Merchandise
              </Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex flex-1 flex-col gap-5 overflow-hidden pr-6">
              <div className="space-y-3">
                {state.items.map((item) => (
                  <div key={item.id} className="space-y-3">
                    <div className="flex items-center space-x-4">
                      <div className="relative h-16 w-16 overflow-hidden rounded">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <h3 className="text-sm font-medium leading-none">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">R{item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 bg-transparent"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <Badge variant="secondary" className="px-2 py-1">
                          {item.quantity}
                        </Badge>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 bg-transparent"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 bg-transparent"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <Separator />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 pr-6">
              <Separator />
              <div className="space-y-1.5">
                <div className="flex">
                  <span className="flex-1">Total</span>
                  <span className="font-semibold">R{state.total.toFixed(2)}</span>
                </div>
              </div>
              <Button asChild className="w-full">
                <Link href="/checkout" onClick={onClose}>
                  Proceed to Checkout
                </Link>
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
