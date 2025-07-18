"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { useCart } from "@/contexts/cart-context"
import { useToast } from "@/hooks/use-toast"
import { DeliveryScheduler } from "@/components/delivery-scheduler"
import { CreditCard, Building2, MapPin, Phone, Mail, User, Copy, Check } from "lucide-react"

interface CustomerInfo {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  postalCode: string
  specialInstructions: string
}

interface DeliverySchedule {
  date: Date | undefined
  timeSlot: string
  deliveryFee: number
}

export default function CheckoutPage() {
  const router = useRouter()
  const { state, dispatch } = useCart()
  const { toast } = useToast()
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("bank_transfer")
  const [copied, setCopied] = useState(false)
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    specialInstructions: "",
  })
  const [deliverySchedule, setDeliverySchedule] = useState<DeliverySchedule>({
    date: undefined,
    timeSlot: "",
    deliveryFee: 50,
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleInputChange = (field: keyof CustomerInfo, value: string) => {
    setCustomerInfo((prev) => ({ ...prev, [field]: value }))
  }

  const handleDeliveryScheduleChange = (schedule: DeliverySchedule) => {
    setDeliverySchedule(schedule)
  }

  const validateForm = () => {
    const required = ["firstName", "lastName", "email", "phone", "address", "city"]
    for (const field of required) {
      if (!customerInfo[field as keyof CustomerInfo].trim()) {
        toast({
          title: "Missing Information",
          description: `Please fill in your ${field.replace(/([A-Z])/g, " $1").toLowerCase()}`,
          variant: "destructive",
        })
        return false
      }
    }

    if (!customerInfo.email.includes("@")) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive",
      })
      return false
    }

    if (customerInfo.phone.length < 10) {
      toast({
        title: "Invalid Phone",
        description: "Please enter a valid phone number",
        variant: "destructive",
      })
      return false
    }

    if (!deliverySchedule.date || !deliverySchedule.timeSlot) {
      toast({
        title: "Delivery Schedule Required",
        description: "Please select a delivery date and time slot",
        variant: "destructive",
      })
      return false
    }

    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return
    if (state.items.length === 0) {
      toast({
        title: "Empty Cart",
        description: "Please add items to your cart before checkout",
        variant: "destructive",
      })
      return
    }

    setLoading(true)

    try {
      const orderData = {
        items: state.items,
        total: state.total,
        customer: customerInfo,
        paymentMethod,
        deliverySchedule: {
          date: deliverySchedule.date?.toISOString(),
          timeSlot: deliverySchedule.timeSlot,
          deliveryFee: deliverySchedule.deliveryFee,
        },
      }

      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      })

      const data = await response.json()

      if (!data.success) {
        throw new Error(data.error || "Failed to create order")
      }

      // Clear cart
      dispatch({ type: "CLEAR_CART" })

      // Redirect to success page with order details
      const params = new URLSearchParams({
        orderId: data.order.id,
        paymentMethod,
      })

      if (data.order.bankReference) {
        params.append("reference", data.order.bankReference)
      }

      router.push(`/success?${params.toString()}`)
    } catch (error) {
      console.error("Checkout error:", error)
      toast({
        title: "Order Failed",
        description: error instanceof Error ? error.message : "Failed to process order",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Checkout</h1>
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  if (state.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
          <p className="text-muted-foreground mb-8">Add some items to your cart before checkout</p>
          <Button onClick={() => router.push("/catalogue")}>Browse Catalogue</Button>
        </div>
      </div>
    )
  }

  const subtotal = state.total
  const deliveryFee = deliverySchedule.deliveryFee
  const total = subtotal + deliveryFee

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Customer Information & Delivery */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Customer Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={customerInfo.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={customerInfo.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={customerInfo.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+27 XX XXX XXXX"
                    value={customerInfo.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Delivery Address
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="address">Street Address *</Label>
                  <Input
                    id="address"
                    value={customerInfo.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      value={customerInfo.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="postalCode">Postal Code</Label>
                    <Input
                      id="postalCode"
                      value={customerInfo.postalCode}
                      onChange={(e) => handleInputChange("postalCode", e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="specialInstructions">Special Delivery Instructions</Label>
                  <Textarea
                    id="specialInstructions"
                    value={customerInfo.specialInstructions}
                    onChange={(e) => handleInputChange("specialInstructions", e.target.value)}
                    placeholder="Gate code, building number, preferred entrance, etc."
                    rows={3}
                  />
                </div>

                <Alert>
                  <AlertDescription>
                    We deliver within Gauteng Province: Katlehong, Germiston, Boksburg, Meyerton and surrounding areas.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* Delivery Scheduling */}
            <DeliveryScheduler onScheduleChange={handleDeliveryScheduleChange} selectedSchedule={deliverySchedule} />

            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg">
                    <RadioGroupItem value="bank_transfer" id="bank_transfer" />
                    <Label htmlFor="bank_transfer" className="flex items-center gap-2 cursor-pointer flex-1">
                      <Building2 className="h-4 w-4" />
                      <div>
                        <div className="font-medium">Bank Transfer (Recommended)</div>
                        <div className="text-sm text-muted-foreground">Direct bank transfer - most secure</div>
                      </div>
                    </Label>
                    <Badge variant="secondary">Popular</Badge>
                  </div>

                  <div className="flex items-center space-x-2 p-4 border rounded-lg opacity-75">
                    <RadioGroupItem value="card" id="card" disabled />
                    <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer flex-1">
                      <CreditCard className="h-4 w-4" />
                      <div>
                        <div className="font-medium">Card Payment</div>
                        <div className="text-sm text-muted-foreground">Credit/Debit card (Coming soon)</div>
                      </div>
                    </Label>
                    <Badge variant="outline">Soon</Badge>
                  </div>
                </RadioGroup>

                {paymentMethod === "bank_transfer" && (
                  <Card className="mt-4 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                    <CardHeader>
                      <CardTitle className="text-blue-900 dark:text-blue-100 text-lg">Bank Transfer Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Bank:</span>
                        <span>Standard Bank</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Account Number:</span>
                        <div className="flex items-center gap-2">
                          <span className="font-mono">63084661206</span>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard("63084661206")}
                          >
                            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                          </Button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Branch Code:</span>
                        <span className="font-mono">051001</span>
                      </div>
                      <Alert>
                        <AlertDescription>
                          After placing your order, you'll receive a unique reference number for your payment.
                        </AlertDescription>
                      </Alert>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {state.items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div className="flex-1">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">
                        Qty: {item.quantity} × R{item.price.toFixed(2)}
                      </p>
                    </div>
                    <p className="font-medium">R{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>R{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span>R{deliveryFee.toFixed(2)}</span>
                  </div>
                  {deliverySchedule.timeSlot && (
                    <div className="text-sm text-muted-foreground">
                      {deliverySchedule.timeSlot === "express"
                        ? "Express Delivery"
                        : deliverySchedule.timeSlot === "evening"
                          ? "Evening Delivery"
                          : "Standard Delivery"}
                    </div>
                  )}
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>R{total.toFixed(2)}</span>
                  </div>
                </div>

                {deliverySchedule.date && deliverySchedule.timeSlot && (
                  <Alert>
                    <AlertDescription>
                      <strong>Scheduled for:</strong>
                      <br />
                      {deliverySchedule.date.toLocaleDateString("en-ZA", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                      })}
                      <br />
                      {deliverySchedule.timeSlot === "morning" && "9:00 AM - 12:00 PM"}
                      {deliverySchedule.timeSlot === "afternoon" && "12:00 PM - 5:00 PM"}
                      {deliverySchedule.timeSlot === "evening" && "5:00 PM - 8:00 PM"}
                      {deliverySchedule.timeSlot === "express" && "Within 2 hours"}
                    </AlertDescription>
                  </Alert>
                )}

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Processing..." : `Place Order - R${total.toFixed(2)}`}
                </Button>

                <div className="text-center space-y-2">
                  <p className="text-sm text-muted-foreground">Need help?</p>
                  <div className="flex justify-center gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href="tel:+27675305635">
                        <Phone className="h-4 w-4 mr-1" />
                        Call
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://wa.me/27675305635">
                        <Mail className="h-4 w-4 mr-1" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </form>
      </div>
    </div>
  )
}
