import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Phone, Star } from "lucide-react"

export default function Locations() {
  const locations = [
    {
      name: "Green Valley Dispensary",
      address: "123 Main St, San Francisco, CA 94102",
      phone: "(415) 555-0123",
      hours: "Mon-Sun: 9AM-9PM",
      rating: 4.8,
      strains: ["Purple Haze", "OG Kush", "Blue Dream"],
    },
    {
      name: "Pacific Cannabis Co.",
      address: "456 Ocean Ave, Santa Monica, CA 90401",
      phone: "(310) 555-0456",
      hours: "Mon-Sun: 10AM-8PM",
      rating: 4.9,
      strains: ["Wedding Cake", "Green Crack", "Granddaddy Purple"],
    },
    {
      name: "Mountain High Dispensary",
      address: "789 Pine St, Denver, CO 80202",
      phone: "(303) 555-0789",
      hours: "Mon-Sat: 9AM-10PM, Sun: 10AM-8PM",
      rating: 4.7,
      strains: ["Blue Dream", "OG Kush", "Purple Haze"],
    },
    {
      name: "Emerald City Cannabis",
      address: "321 1st Ave, Seattle, WA 98101",
      phone: "(206) 555-0321",
      hours: "Mon-Sun: 8AM-10PM",
      rating: 4.6,
      strains: ["Green Crack", "Wedding Cake", "Blue Dream"],
    },
    {
      name: "Rose City Dispensary",
      address: "654 SE Division, Portland, OR 97202",
      phone: "(503) 555-0654",
      hours: "Mon-Sun: 9AM-9PM",
      rating: 4.8,
      strains: ["Granddaddy Purple", "Purple Haze", "OG Kush"],
    },
    {
      name: "Golden State Cannabis",
      address: "987 Sunset Blvd, Los Angeles, CA 90028",
      phone: "(323) 555-0987",
      hours: "Mon-Sun: 10AM-10PM",
      rating: 4.5,
      strains: ["Wedding Cake", "Blue Dream", "Green Crack"],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-950 dark:to-pink-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">
              Find Herbally Products
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Dispensary Locations
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Find Herbally's premium cannabis products at these trusted dispensary partners across California, Oregon,
              Washington, and Colorado.
            </p>
          </div>
        </div>
      </section>

      {/* Location Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { number: "500+", label: "Partner Dispensaries", icon: <MapPin className="h-6 w-6" /> },
              { number: "4", label: "States Available", icon: <Star className="h-6 w-6" /> },
              { number: "50+", label: "Cities Served", icon: <Clock className="h-6 w-6" /> },
              { number: "4.8", label: "Average Rating", icon: <Star className="h-6 w-6" /> },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-purple-600">{stat.icon}</div>
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Locations */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Partner Dispensaries</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Visit these top-rated dispensaries to experience Herbally's premium cannabis products.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {locations.map((location, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline">Partner Store</Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{location.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{location.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{location.address}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{location.phone}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{location.hours}</span>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Available Herbally Strains</h4>
                    <div className="flex flex-wrap gap-2">
                      {location.strains.map((strain, strainIndex) => (
                        <Badge key={strainIndex} variant="secondary" className="text-xs">
                          {strain}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button variant="outline" className="w-full bg-transparent">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Find Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Find Herbally Products</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Follow these simple steps to locate Herbally cannabis products at dispensaries near you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Find a Licensed Dispensary",
                description: "Use our dispensary locator or visit any of our partner locations listed above.",
              },
              {
                step: "02",
                title: "Ask for Herbally Products",
                description: "Request Herbally strains by name or look for our distinctive packaging and branding.",
              },
              {
                step: "03",
                title: "Verify Lab Testing",
                description: "Check the lab testing results on each package to ensure quality and potency.",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Notice */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-lg font-semibold mb-4">Important Legal Information</h3>
            <p className="text-sm text-muted-foreground">
              Herbally products are available only at licensed cannabis dispensaries in states where cannabis is legal
              for adult use. You must be 21+ years old with valid ID to purchase. Please consume responsibly and in
              accordance with all local and state laws. Do not drive or operate machinery after use.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
