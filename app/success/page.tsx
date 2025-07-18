"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  CheckCircle,
  Copy,
  Check,
  Calendar,
  Clock,
  Truck,
  Phone,
  MessageCircle,
  CreditCard,
  Building2,
} from "lucide-react"

interface Order {
  id: string
  trackingNumber: string
  status: string
  total: number
  bankReference?: string
  deliverySchedule?: {
    date: string
    timeSlot: string
    timeSlotLabel: string
    deliveryFee: number
  }
  estimatedDelivery: string
}

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const [order, setOrder] = useState<Order | null>(null)
  const [loading, setLoading] = useState(true)
  const [copied, setCopied] = useState(false)

  const orderId = searchParams.get("orderId")
  const paymentMethod = searchParams.get("paymentMethod")

  useEffect(() => {
    if (orderId) {
      fetchOrder()
    }
  }, [orderId])

  const fetchOrder = async () => {
    try {
      const response = await fetch(`/api/orders?orderId=${orderId}`)
      const data = await response.json()

      if (data.success) {
        setOrder(data.order)
      }
    } catch (error) {
      console.error("Error fetching order:", error)
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-ZA", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p>Loading order details...</p>
      </div>
    )
  }

  if (!order) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Order not found</h1>
        <Button asChild>
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {/* Success Header */}
        <div className="text-center mb-8">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-green-600 mb-2">Order Placed Successfully!</h1>
          <p className="text-muted-foreground">Thank you for your order. We'll process it shortly.</p>
        </div>

        {/* Order Details */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Order Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Order ID</p>
                <p className="font-mono font-medium">{order.id}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Tracking Number</p>
                <p className="font-mono font-medium">{order.trackingNumber}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Status</p>
                <Badge variant={order.status === "pending_payment" ? "secondary" : "default"}>
                  {order.status === "pending_payment" ? "Awaiting Payment" : "Confirmed"}
                </Badge>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Amount</p>
                <p className="font-bold text-lg">R{order.total.toFixed(2)}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Delivery Schedule */}
        {order.deliverySchedule && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="h-5 w-5" />
                Scheduled Delivery
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">{formatDate(order.deliverySchedule.date)}</p>
                  <p className="text-sm text-muted-foreground">Delivery Date</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">{order.deliverySchedule.timeSlotLabel}</p>
                  <p className="text-sm text-muted-foreground">Time Slot</p>
                </div>
              </div>

              <Alert>
                <Truck className="h-4 w-4" />
                <AlertDescription>
                  Our delivery team will contact you 30 minutes before arrival. Please ensure someone is available to
                  receive the order.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        )}

        {/* Payment Information */}
        {paymentMethod === "bank_transfer" && order.bankReference && (
          <Card className="mb-6 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900 dark:text-blue-100">
                <Building2 className="h-5 w-5" />
                Payment Instructions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <AlertDescription>
                  <strong>Important:</strong> Please complete your bank transfer using the details below. Your order
                  will be processed once payment is confirmed.
                </AlertDescription>
              </Alert>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Bank:</span>
                  <span>Standard Bank</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Account Number:</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono">63084661206</span>
                    <Button variant="ghost" size="sm" onClick={() => copyToClipboard("63084661206")}>
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Branch Code:</span>
                  <span className="font-mono">051001</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Reference:</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-blue-600 dark:text-blue-400 font-bold">{order.bankReference}</span>
                    <Button variant="ghost" size="sm" onClick={() => copyToClipboard(order.bankReference!)}>
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Amount:</span>
                  <span className="font-bold">R{order.total.toFixed(2)}</span>
                </div>
              </div>

              <Separator />

              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-3">
                  Payment confirmation usually takes 1-2 hours during business hours
                </p>
                <div className="flex justify-center gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href="tel:+27675305635">
                      <Phone className="h-4 w-4 mr-1" />
                      Call for Help
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://wa.me/27675305635">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {paymentMethod === "card" && (
          <Card className="mb-6 bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-900 dark:text-green-100">
                <CreditCard className="h-5 w-5" />
                Payment Confirmed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Alert>
                <CheckCircle className="h-4 w-4" />
                <AlertDescription>
                  Your payment has been processed successfully. Your order is now confirmed and will be prepared for
                  delivery.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild className="flex-1">
            <Link href={`/track?orderId=${order.id}`}>Track Your Order</Link>
          </Button>
          <Button variant="outline" asChild className="flex-1 bg-transparent">
            <Link href="/catalogue">Continue Shopping</Link>
          </Button>
        </div>

        {/* Contact Information */}
        <Card className="mt-6">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-3">Questions about your order? We're here to help!</p>
              <div className="flex justify-center gap-4">
                <Button variant="outline" size="sm" asChild>
                  <a href="tel:+27675305635">
                    <Phone className="h-4 w-4 mr-1" />
                    067 530 5635
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://wa.me/27675305635">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
