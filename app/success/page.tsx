"use client"

import { useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Package, Truck, Phone } from "lucide-react"
import Link from "next/link"

export default function SuccessPage() {
  useEffect(() => {
    // You could add analytics or tracking here
    console.log("Order completed successfully")
  }, [])

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="bg-green-100 dark:bg-green-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
            <p className="text-muted-foreground">
              Thank you for your order. We've received your payment and will start processing your order shortly.
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>What happens next?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg">
                  <Package className="h-5 w-5 text-blue-600" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold">Order Processing</h3>
                  <p className="text-sm text-muted-foreground">
                    We'll prepare your order and send you a confirmation email with tracking information.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 dark:bg-yellow-900 p-2 rounded-lg">
                  <Truck className="h-5 w-5 text-yellow-600" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold">Shipping</h3>
                  <p className="text-sm text-muted-foreground">
                    Your order will be shipped within 1-2 business days and delivered in 3-5 business days.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 dark:bg-green-900 p-2 rounded-lg">
                  <Phone className="h-5 w-5 text-green-600" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold">Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Questions? Contact us at +27 67 530 5635 or WhatsApp for instant support.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/merchandise">Continue Shopping</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>

            <div className="flex justify-center gap-2">
              <Badge variant="outline">Free Shipping</Badge>
              <Badge variant="outline">30-Day Returns</Badge>
              <Badge variant="outline">Premium Quality</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
