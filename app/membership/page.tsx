"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Crown } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function MembershipPage() {
  const { user, isHydrated } = useAuth()
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handlePurchaseMembership = async () => {
    if (!user) {
      router.push("/login")
      return
    }
    setLoading(true)
    // Simulate membership purchase
    await new Promise((resolve) => setTimeout(resolve, 1500))
    // In a real app, you'd update the user's membership status in your backend
    // For this demo, we'll just redirect and assume success
    alert("Membership purchased successfully! (Demo)")
    router.push("/") // Redirect to home or profile page
    setLoading(false)
  }

  if (!isHydrated) {
    return (
      <div className="flex min-h-[calc(100vh-64px)] items-center justify-center">
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center bg-gray-100 py-12 dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">VSC Membership</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Unlock exclusive benefits and elevate your Herbally experience.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {/* Free Tier Card */}
          <Card className="flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Free Tier</CardTitle>
              <CardDescription>Access to basic features.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-4xl font-bold">
                R0<span className="text-lg font-normal text-gray-500">/month</span>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  Browse full catalogue
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  Order tracking
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  Standard support
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              {user && !user.isMember ? (
                <Button variant="outline" className="w-full bg-transparent" disabled>
                  Current Plan
                </Button>
              ) : (
                <Button variant="outline" className="w-full bg-transparent" disabled={user?.isMember}>
                  {user?.isMember ? "Already a Member" : "Get Started"}
                </Button>
              )}
            </CardFooter>
          </Card>

          {/* Premium Membership Card */}
          <Card className="flex flex-col justify-between border-2 border-green-500 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-green-600">
                <Crown className="inline-block h-6 w-6 mr-2 text-yellow-500 fill-yellow-500" />
                VSC Premium
              </CardTitle>
              <CardDescription>Unlock all exclusive benefits.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-4xl font-bold">
                R41<span className="text-lg font-normal text-gray-500">/month</span>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  All Free Tier benefits
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  10% discount on all merchandise
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  Early access to new products
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  Priority customer support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  Exclusive member-only content
                </li>
                {user?.username === "dank4lucnch" && user.isMember && (
                  <li className="flex items-center gap-2 text-purple-600 font-semibold">
                    <CheckCircle2 className="h-5 w-5 text-purple-500" />
                    Unlimited Lifetime Membership
                  </li>
                )}
              </ul>
            </CardContent>
            <CardFooter>
              {user?.isMember ? (
                user.username === "dank4lucnch" ? (
                  <Button className="w-full" disabled>
                    Unlimited Member
                  </Button>
                ) : (
                  <Button className="w-full" disabled>
                    Current Plan
                  </Button>
                )
              ) : (
                <Button className="w-full" onClick={handlePurchaseMembership} disabled={loading}>
                  {loading ? "Processing..." : "Get Premium"}
                </Button>
              )}
            </CardFooter>
          </Card>
        </div>

        {user && (
          <div className="mt-12 text-center text-gray-600 dark:text-gray-400">
            {user.isMember ? (
              user.membershipExpiry === "unlimited" ? (
                <p>You have an **unlimited lifetime VSC membership**. Enjoy all benefits!</p>
              ) : (
                <p>Your current VSC membership is active. It expires on: **{user.membershipExpiry || "N/A"}**.</p>
              )
            ) : (
              <p>You are currently on the Free Tier. Upgrade to VSC Premium to unlock more benefits!</p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
