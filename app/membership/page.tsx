"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, Crown, Loader2, Star, Users } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { useToast } from "@/hooks/use-toast"

export default function MembershipPage() {
  const [isProcessing, setIsProcessing] = useState(false)
  const { user, purchaseMembership } = useAuth()
  const { toast } = useToast()

  const handlePurchaseMembership = async () => {
    setIsProcessing(true)
    const success = await purchaseMembership()

    if (success) {
      toast({
        title: "Welcome to VSC!",
        description: "Your membership is now active. Enjoy your benefits!",
      })
    } else {
      toast({
        title: "Payment failed",
        description: "There was an issue processing your payment. Please try again.",
        variant: "destructive",
      })
    }
    setIsProcessing(false)
  }

  const membershipBenefits = [
    "10% discount on all merchandise",
    "Exclusive access to VSC catalogue",
    "Priority customer support",
    "Early access to new products",
    "Member-only educational content",
    "Special event invitations",
    "Monthly strain recommendations",
    "Free delivery on orders over R300",
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-br from-yellow-500 to-orange-600 p-4 rounded-full">
              <Crown className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">VSC Private Members Club</h1>
          <p className="text-xl text-muted-foreground">Join our exclusive community and unlock premium benefits</p>
        </div>

        {/* Current Status */}
        {user && (
          <div className="mb-8">
            <Alert className={user.hasMembership ? "border-green-200 bg-green-50" : "border-yellow-200 bg-yellow-50"}>
              <Users className="h-4 w-4" />
              <AlertDescription className="flex items-center justify-between">
                <span>
                  {user.hasMembership
                    ? `Welcome back, ${user.name}! Your VSC membership is active.`
                    : `Hi ${user.name}, you're not currently a VSC member.`}
                </span>
                {user.hasMembership && (
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Active Member
                  </Badge>
                )}
              </AlertDescription>
            </Alert>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {/* Membership Card */}
          <Card className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full -translate-y-16 translate-x-16 opacity-10" />
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">VSC Membership</CardTitle>
                <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                  <Star className="h-3 w-3 mr-1" />
                  Premium
                </Badge>
              </div>
              <CardDescription>Unlock exclusive benefits and join our premium community</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-green-600 mb-2">R41</div>
                <div className="text-muted-foreground">per month</div>
              </div>

              <div className="space-y-3">
                {membershipBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              {!user ? (
                <div className="w-full text-center">
                  <p className="text-sm text-muted-foreground mb-4">Please sign in to purchase membership</p>
                  <Button asChild className="w-full">
                    <a href="/login">Sign In</a>
                  </Button>
                </div>
              ) : user.hasMembership ? (
                <div className="w-full text-center">
                  <Badge variant="secondary" className="bg-green-100 text-green-800 mb-4">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Active Membership
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    {user.membershipExpiry && `Expires: ${new Date(user.membershipExpiry).toLocaleDateString()}`}
                  </p>
                </div>
              ) : (
                <Button
                  onClick={handlePurchaseMembership}
                  disabled={isProcessing}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Crown className="mr-2 h-4 w-4" />
                      Join VSC - R41/month
                    </>
                  )}
                </Button>
              )}
            </CardFooter>
          </Card>

          {/* Why Join Section */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-green-600" />
                  Exclusive Community
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Join a community of cannabis enthusiasts and gain access to exclusive content, events, and educational
                  resources.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="h-5 w-5 mr-2 text-yellow-500" />
                  Premium Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Save money with member discounts, get priority support, and enjoy exclusive access to our premium
                  catalogue.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                  Quality Guarantee
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  All VSC members receive our quality guarantee and can cancel their membership at any time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
