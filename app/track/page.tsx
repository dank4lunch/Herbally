"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { Search, Package, Truck, CheckCircle, Clock, Calendar, Phone, MessageCircle, MapPin } from "lucide-react"

interface OrderStatus {
  status: string
  timestamp: string
  description: string
}

interface Order {
  id: string
  trackingNumber: string
  status: string
  statusHistory: OrderStatus[]
  customer: {
    firstName: string
    lastName: string
    email: string
    phone: string
    address: string
    city: string
  }
  items: Array<{
    id: string
    name: string
    price: number
    quantity: number
  }>
  total: number
  paymentMethod: string
  deliverySchedule?: {
    date: string
    timeSlot: string
    timeSlotLabel: string
    deliveryFee: number
  }
  createdAt: string
  estimatedDelivery: string
}

const statusConfig = {
  pending_payment: { label: "Awaiting Payment", color: "secondary", icon: Clock },
  confirmed: { label: "Order Confirmed", color: "default", icon: CheckCircle },
  processing: { label: "Processing", color: "default", icon: Package },
  shipped: { label: "Out for Delivery", color: "default", icon: Truck },
  delivered: { label: "Delivered", color: "default", icon: CheckCircle },
}

export default function TrackOrderPage() {
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState("")
  const [order, setOrder] = useState<Order | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const orderId = searchParams.get("orderId")
    const trackingNumber = searchParams.get("trackingNumber")

    if (orderId || trackingNumber) {
      setSearchQuery(orderId || trackingNumber || "")
      handleSearch(orderId || trackingNumber || "")
    }
  }, [searchParams])

  const handleSearch = async (query?: string) => {
    const searchTerm = query || searchQuery
    if (!searchTerm.trim()) {
      setError("Please enter an order ID or tracking number")
      return
    }

    setLoading(true)
    setError(null)

    try {
      const isOrderId = searchTerm.startsWith("ORD-")
      const params = new URLSearchParams()

      if (isOrderId) {
        params.append("orderId", searchTerm)
      } else {
        params.append("trackingNumber", searchTerm)
      }

      const response = await fetch(`/api/orders?${params.toString()}`)
      const data = await response.json()

      if (data.success) {
        setOrder(data.order)
      } else {
        setError(data.error || "Order not found")
        setOrder(null)
      }
    } catch (err) {
      setError("Failed to fetch order details")
      setOrder(null)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-ZA", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const formatDeliveryDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-ZA", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getStatusConfig = (status: string) => {
    return (
      statusConfig[status as keyof typeof statusConfig] || {
        label: status,
        color: "secondary" as const,
        icon: Package,
      }
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Track Your Order</h1>

        {/* Search Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Order Lookup
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <div className="flex-1">
                <Label htmlFor="search">Order ID or Tracking Number</Label>
                <Input
                  id="search"
                  placeholder="Enter ORD-... or TRK-..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                />
              </div>
              <div className="flex items-end">
                <Button onClick={() => handleSearch()} disabled={loading}>
                  {loading ? "Searching..." : "Track Order"}
                </Button>
              </div>
            </div>
            {error && (
              <Alert variant="destructive" className="mt-4">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>

        {/* Order Details */}
        {order && (
          <div className="space-y-6">
            {/* Order Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Order ID</p>
                    <p className="font-mono font-medium">{order.id}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Tracking Number</p>
                    <p className="font-mono font-medium">{order.trackingNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Status</p>
                    <Badge variant={getStatusConfig(order.status).color}>{getStatusConfig(order.status).label}</Badge>
                  </div>
                </div>

                <Separator />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Customer</p>
                    <p className="font-medium">
                      {order.customer.firstName} {order.customer.lastName}
                    </p>
                    <p className="text-sm text-muted-foreground">{order.customer.email}</p>
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
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Truck className="h-5 w-5" />
                    Scheduled Delivery
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center gap-4">
                      <Calendar className="h-8 w-8 text-primary" />
                      <div>
                        <p className="font-medium text-lg">{formatDeliveryDate(order.deliverySchedule.date)}</p>
                        <p className="text-sm text-muted-foreground">Delivery Date</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <Clock className="h-8 w-8 text-primary" />
                      <div>
                        <p className="font-medium text-lg">{order.deliverySchedule.timeSlotLabel}</p>
                        <p className="text-sm text-muted-foreground">Time Window</p>
                      </div>
                    </div>
                  </div>

                  <Alert>
                    <MapPin className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Delivery Address:</strong>
                      <br />
                      {order.customer.address}, {order.customer.city}
                    </AlertDescription>
                  </Alert>

                  {order.status === "shipped" && (
                    <Alert>
                      <Truck className="h-4 w-4" />
                      <AlertDescription>
                        Your order is out for delivery! Our driver will contact you 30 minutes before arrival.
                      </AlertDescription>
                    </Alert>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Order Status Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>Order Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {order.statusHistory.map((status, index) => {
                    const StatusIcon = getStatusConfig(status.status).icon
                    const isLatest = index === order.statusHistory.length - 1

                    return (
                      <div key={index} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div
                            className={`p-2 rounded-full ${isLatest ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                          >
                            <StatusIcon className="h-4 w-4" />
                          </div>
                          {index < order.statusHistory.length - 1 && <div className="w-px h-8 bg-border mt-2" />}
                        </div>
                        <div className="flex-1 pb-4">
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-medium">{getStatusConfig(status.status).label}</p>
                            {isLatest && <Badge variant="default">Current</Badge>}
                          </div>
                          <p className="text-sm text-muted-foreground mb-1">{status.description}</p>
                          <p className="text-xs text-muted-foreground">{formatDate(status.timestamp)}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Order Items */}
            <Card>
              <CardHeader>
                <CardTitle>Order Items</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">
                          Qty: {item.quantity} × R{item.price.toFixed(2)}
                        </p>
                      </div>
                      <p className="font-medium">R{(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                  {order.deliverySchedule && (
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Delivery Fee</p>
                        <p className="text-sm text-muted-foreground">
                          {order.deliverySchedule.timeSlot === "express"
                            ? "Express Delivery"
                            : order.deliverySchedule.timeSlot === "evening"
                              ? "Evening Delivery"
                              : "Standard Delivery"}
                        </p>
                      </div>
                      <p className="font-medium">R{order.deliverySchedule.deliveryFee.toFixed(2)}</p>
                    </div>
                  )}
                  <Separator />
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total</span>
                    <span>R{order.total.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Support */}
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Need help with your order? Contact our support team
                  </p>
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
        )}
      </div>
    </div>
  )
}
