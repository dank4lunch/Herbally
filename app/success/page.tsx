"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Copy, MapPin, Mail, Phone, User, Building2, Calendar, Clock, Truck } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface OrderDetails {
  orderId: string
  paymentMethod: string
  reference?: string
  customerInfo?: {
    firstName: string
    lastName: string
    email: string
    phone: string
    address: string
    city: string
    postalCode: string
    specialInstructions: string
  }
  deliverySchedule?: {
    date: string
    timeSlot: string
    deliveryFee: number
  }
}

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const { toast } = useToast()
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const orderId = searchParams.get("orderId")
    const paymentMethod = searchParams.get("paymentMethod")
    const reference = searchParams.get("reference")

    if (orderId && paymentMethod) {
      // In a real application, you would fetch the full order details from your backend
      // using the orderId to ensure data integrity and security.
      // For this demo, we'll retrieve from session storage or a mock API.
      const storedOrder = JSON.parse(sessionStorage.getItem(`order_${orderId}`) || "{}")

      setOrderDetails({
        orderId,
        paymentMethod,
        reference: reference || undefined,
        customerInfo: storedOrder.customer,
        deliverySchedule: storedOrder.deliverySchedule,
      })

      // Clear the specific order from session storage after displaying
      sessionStorage.removeItem(`order_${orderId}`)
    }
  }, [searchParams])

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
    toast({
      title: "Copied!",
      description: "Reference number copied to clipboard.",
    })
  }

  if (!orderDetails) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Order Not Found</h1>
        <p className="text-muted-foreground mb-8">It looks like there was an issue retrieving your order details.</p>
        <Button asChild>
          <Link href="/">Go to Home</Link>
        </Button>
      </div>
    )
  }

  const deliveryDate = orderDetails.deliverySchedule?.date
    ? new Date(orderDetails.deliverySchedule.date).toLocaleDateString("en-ZA", {
        weekday: "long",
        month: "long",
        day: "numeric",
      })
    : "N/A"

  const deliveryTimeSlot = orderDetails.deliverySchedule?.timeSlot
    ? (orderDetails.deliverySchedule.timeSlot === "morning" && "9:00 AM - 12:00 PM") ||
      (orderDetails.deliverySchedule.timeSlot === "afternoon" && "12:00 PM - 5:00 PM") ||
      (orderDetails.deliverySchedule.timeSlot === "evening" && "5:00 PM - 8:00 PM") ||
      (orderDetails.deliverySchedule.timeSlot === "express" && "Within 2 hours") ||
      orderDetails.deliverySchedule.timeSlot
    : "N/A"

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto text-center">
        <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
        <h1 className="text-4xl font-bold mb-4">Order Placed Successfully!</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Thank you for your purchase. Your order has been received and is being processed.
        </p>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
            <CardDescription>Details of your recent order.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-left">
            <div className="flex justify-between">
              <span className="font-medium">Order ID:</span>
              <span>{orderDetails.orderId}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Payment Method:</span>
              <span className="capitalize">{orderDetails.paymentMethod.replace("_", " ")}</span>
            </div>
            {orderDetails.paymentMethod === "bank_transfer" && orderDetails.reference && (
              <div className="flex justify-between items-center">
                <span className="font-medium">Your Payment Reference:</span>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-lg font-semibold text-blue-600">{orderDetails.reference}</span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(orderDetails.reference || "")}
                  >
                    {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {orderDetails.customerInfo && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Customer Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-left">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-gray-500" />
                <span>
                  {orderDetails.customerInfo.firstName} {orderDetails.customerInfo.lastName}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gray-500" />
                <span>{orderDetails.customerInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gray-500" />
                <span>{orderDetails.customerInfo.phone}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-gray-500 mt-1" />
                <span>
                  {orderDetails.customerInfo.address}, {orderDetails.customerInfo.city}
                  {orderDetails.customerInfo.postalCode && `, ${orderDetails.customerInfo.postalCode}`}
                </span>
              </div>
              {orderDetails.customerInfo.specialInstructions && (
                <div className="flex items-start gap-2">
                  <Building2 className="h-4 w-4 text-gray-500 mt-1" />
                  <span>Special Instructions: {orderDetails.customerInfo.specialInstructions}</span>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {orderDetails.deliverySchedule && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="h-5 w-5" />
                Delivery Schedule
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-left">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-gray-500" />
                <span>Scheduled Date: {deliveryDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gray-500" />
                <span>Time Slot: {deliveryTimeSlot}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Delivery Fee:</span>
                <span>R{orderDetails.deliverySchedule.deliveryFee.toFixed(2)}</span>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild>
            <Link href="/track">Track Your Order</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/catalogue">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
