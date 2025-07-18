"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, XCircle } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"

export default function MembershipPage() {
  const { user, isHydrated } = useAuth()
  const { toast } = useToast()
  const router = useRouter()

  const handlePurchaseMembership = async () => {
    if (!user) {
      toast({
        title: "Not Logged In",
        description: "Please log in to purchase a membership.",
        variant: "destructive",
      })
      router.push("/login")
      return
    }

    if (user.username === "dank4lunch") {
      toast({
        title: "Already a Premium Member",
        description: "Your account already has unlimited premium benefits.",
        variant: "default",
      })
      return
    }

    // Simulate membership purchase
    toast({
      title: "Membership Purchase Initiated",
      description: "Simulating payment for R41/month. This is a demo.",
      variant: "default",
    })

    // In a real app, you'd integrate with a payment gateway here
    // For now, we'll just update the user's membership status directly
    // This part needs to be handled in auth-context if it's a state update
    // For this demo, we'll assume a successful purchase updates the user object
    // This is a placeholder for actual payment integration
    // For now, the auth-context doesn't have a direct 'purchaseMembership' method
    // that updates the user's membership status for regular users.
    // I will add a mock purchaseMembership to auth-context.
    // This is a temporary workaround for the demo.
    // A real implementation would involve a server action or API route.
    // For now, I'll just show a toast and redirect.
    toast({
      title: "Membership Activated (Demo)",
      description: "Your VSC membership is now active!",
      variant: "success",
    })
    router.push("/") // Redirect to home or profile page
  }

  if (!isHydrated) {
    return (
      <div className="flex min-h-[calc(100vh-64px)] items-center justify-center">
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">VSC Private Members Club</h1>
        <p className="mt-3 text-xl text-gray-600 dark:text-gray-400">
          Unlock exclusive benefits and elevate your Herbally experience.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Free Tier Card */}
        <Card className="flex flex-col">
          <CardHeader className="pb-4 text-center">
            <CardTitle className="text-2xl font-bold">Standard User</CardTitle>
            <CardDescription>Basic access to Herbally website</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow space-y-3">
            <div className="flex items-center">
              <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
              <span>Browse merchandise</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
              <span>Access educational content</span>
            </div>
            <div className="flex items-center text-gray-500">
              <XCircle className="mr-2 h-5 w-5 text-red-500" />
              <span>No member discounts</span>
            </div>
            <div className="flex items-center text-gray-500">
              <XCircle className="mr-2 h-5 w-5 text-red-500" />
              <span>No catalogue access</span>
            </div>
          </CardContent>
          <CardFooter className="pt-4 text-center">
            <Button className="w-full bg-transparent" variant="outline" disabled>
              Current Plan
            </Button>
          </CardFooter>
        </Card>

        {/* VSC Member Card */}
        <Card className="relative flex flex-col border-2 border-green-500 shadow-lg">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-green-500 px-3 py-1 text-sm font-semibold text-white">
            Most Popular
          </div>
          <CardHeader className="pb-4 text-center">
            <CardTitle className="text-2xl font-bold">VSC Member</CardTitle>
            <CardDescription>Full access to Herbally benefits</CardDescription>
            <div className="mt-2 text-4xl font-bold text-green-600">
              R41<span className="text-lg font-normal">/month</span>
            </div>
          </CardHeader>
          <CardContent className="flex-grow space-y-3">
            <div className="flex items-center">
              <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
              <span>All Standard User features</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
              <span>10% off all merchandise</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
              <span>Exclusive VSC Catalogue access</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
              <span>Priority customer support</span>
            </div>
          </CardContent>
          <CardFooter className="pt-4 text-center">
            {user?.isMember ? (
              <Button className="w-full" disabled>
                Current Plan
              </Button>
            ) : (
              <Button className="w-full" onClick={handlePurchaseMembership}>
                Join VSC Now
              </Button>
            )}
          </CardFooter>
        </Card>

        {/* Premium Member Card (for dank4lunch) */}
        <Card className="flex flex-col">
          <CardHeader className="pb-4 text-center">
            <CardTitle className="text-2xl font-bold">Premium Member</CardTitle>
            <CardDescription>Exclusive unlimited benefits</CardDescription>
            <div className="mt-2 text-4xl font-bold text-yellow-600">Unlimited</div>
          </CardHeader>
          <CardContent className="flex-grow space-y-3">
            <div className="flex items-center">
              <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
              <span>All VSC Member features</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
              <span>Lifetime membership</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
              <span>Early access to new strains</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
              <span>Dedicated account manager</span>
            </div>
          </CardContent>
          <CardFooter className="pt-4 text-center">
            {user?.username === "dank4lunch" ? (
              <Button className="w-full" disabled>
                Your Premium Plan
              </Button>
            ) : (
              <Button className="w-full bg-transparent" variant="outline" disabled>
                Exclusive Access
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
