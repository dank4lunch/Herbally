"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useAuth } from "@/contexts/auth-context"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, Crown, Leaf, Truck, MessageCircleQuestionIcon as QuestionCircleIcon } from "lucide-react" // Added QuestionCircleIcon

export default function HomePage() {
  const { user, isHydrated } = useAuth()

  if (!isHydrated) {
    return (
      <div className="flex min-h-[calc(100vh-64px)] items-center justify-center">
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-green-50 to-emerald-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    {user ? (
                      <>
                        Welcome back, {user.username}!
                        {user.isMember && (
                          <span className="ml-2 inline-flex items-center rounded-full bg-yellow-100 px-3 py-0.5 text-sm font-medium text-yellow-800">
                            <Crown className="mr-1 h-4 w-4" /> VSC Member
                          </span>
                        )}
                      </>
                    ) : (
                      "Discover Premium Cannabis Products"
                    )}
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    {user && user.isMember ? (
                      <>
                        Your unlimited membership is active. Enjoy exclusive benefits and discounts on all products!
                        <br />
                        <Link href="/catalogue" className="text-emerald-600 hover:underline">
                          Shop now and save!
                        </Link>
                      </>
                    ) : (
                      "Herbally offers a curated selection of high-quality cannabis products, from premium strains to essential accessories. Join our community for exclusive benefits."
                    )}
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <Link href="/catalogue">Explore Catalogue</Link>
                  </Button>
                  {!user && (
                    <Button asChild variant="outline">
                      <Link href="/signup">Join VSC Membership</Link>
                    </Button>
                  )}
                  {user && !user.isMember && (
                    <Button asChild variant="outline">
                      <Link href="/membership">Upgrade Membership</Link>
                    </Button>
                  )}
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                width={500}
                height={400}
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800 dark:bg-green-900/20 dark:text-green-400">
                  Why Choose Herbally?
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Quality, Trust, and Community</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We are committed to providing the finest cannabis products and fostering a supportive community.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 text-center">
                <Leaf className="mx-auto h-12 w-12 text-green-600" />
                <h3 className="text-xl font-bold">Premium Quality</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Sourced from the best growers, our products meet the highest standards.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-green-600" />
                <h3 className="text-xl font-bold">Verified & Safe</h3>
                <p className="text-gray-500 dark:text-gray-400">All products are lab-tested for purity and potency.</p>
              </div>
              <div className="flex flex-col justify-center space-y-4 text-center">
                <Truck className="mx-auto h-12 w-12 text-green-600" />
                <h3 className="text-xl font-bold">Discreet Delivery</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Fast, reliable, and discreet delivery right to your door.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Acquire Cannabis Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 text-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900/20 dark:text-blue-400">
                Acquisition Guide
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How to Acquire Our Cannabis</h2>
              <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
                Here are some common questions about purchasing cannabis from Herbally.
              </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-3xl gap-8 text-left">
              <div className="space-y-2">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <QuestionCircleIcon className="h-6 w-6 text-blue-600" />
                  Do I need a medical card?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  No, a medical card is not required to access our VSC Catalogue. However, you must be a registered VSC
                  Member to view prices and make purchases.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <QuestionCircleIcon className="h-6 w-6 text-blue-600" />
                  What are the age requirements?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  You must be 18 years or older to become a VSC Member and purchase cannabis products. Age verification
                  is required.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <QuestionCircleIcon className="h-6 w-6 text-blue-600" />
                  How does delivery work?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We offer discreet and secure delivery within our specified service areas. Once your order is placed
                  and payment confirmed, we will arrange a convenient delivery time.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <QuestionCircleIcon className="h-6 w-6 text-blue-600" />
                  Is my personal information safe?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Yes, we prioritize your privacy and security. All personal and legal details collected during the
                  purchase process are handled with the utmost confidentiality and in compliance with data protection
                  regulations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join the VSC Community</h2>
              <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
                Become a VSC member for R41/month and unlock exclusive discounts, early access to new products, and
                more.
              </p>
              <Button asChild size="lg">
                <Link href="/membership">Learn More & Join</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800 dark:bg-green-900/20 dark:text-green-400">
                  Our Selection
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Merchandise</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Check out some of our popular merchandise items.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 xl:grid-cols-2">
              <Card>
                <CardHeader>
                  <Image
                    src="/images/athletics-shirt-new.jpg"
                    width={400}
                    height={300}
                    alt="Athletics Shirt"
                    className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  />
                </CardHeader>
                <CardContent className="space-y-2">
                  <CardTitle>Herbally Athletics Shirt</CardTitle>
                  <CardDescription>Comfortable and stylish athletic shirt with Herbally branding.</CardDescription>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">R350.00</span>
                    <Button size="sm" asChild>
                      <Link href="/merchandise">View Product</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Image
                    src="/images/og-hoodie-new.jpg"
                    width={400}
                    height={300}
                    alt="OG Hoodie"
                    className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  />
                </CardHeader>
                <CardContent className="space-y-2">
                  <CardTitle>Herbally OG Hoodie</CardTitle>
                  <CardDescription>Classic hoodie for ultimate comfort and style.</CardDescription>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">R600.00</span>
                    <Button size="sm" asChild>
                      <Link href="/merchandise">View Product</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
