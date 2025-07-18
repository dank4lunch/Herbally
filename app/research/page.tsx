import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Phone, Star } from "lucide-react"

export default function Locations() {
  const locations = [
    {
      name: "Herbally Hurricane Pub & Grill",
      address: "103 Nota Street, Katlehong, GP, 1431",
      phone: "+27 67 530 5635",
      hours: "Mon-Sat: 14:00-02:00, Sun: 12:00-02:00",
      rating: 4.9,
      strains: ["King Trup", "Gorilla Cookies", "Mimosa"],
    },
    {
      name: "Pacific Cannabis Co.",
      address: "456 Ocean Ave, Santa Monica, CA 90401",
      phone: "(310) 555-0456",
      hours: "Mon-Sun: 10AM-8PM",
      rating: 4.9,
      strains: ["Jelly Belly", "Sugar Rush", "Cheeky Sunset"],
    },
    {
      name: "Mountain High Dispensary",
      address: "789 Pine St, Denver, CO 80202",
      phone: "(303) 555-0789",
      hours: "Mon-Sat: 9AM-10PM, Sun: 10AM-8PM",
      rating: 4.7,
      strains: ["Runts Layer Cake", "Loud Cake", "Tequila Sunrise"],
    },
    {
      name: "Emerald City Cannabis",
      address: "321 1st Ave, Seattle, WA 98101",
      phone: "(206) 555-0321",
      hours: "Mon-Sun: 8AM-10PM",
      rating: 4.6,
      strains: ["Donkey Kong", "Jungle Fire", "King Trup"],
    },
    {
      name: "Rose City Dispensary",
      address: "654 SE Division, Portland, OR 97202",
      phone: "(503) 555-0654",
      hours: "Mon-Sun: 9AM-9PM",
      rating: 4.8,
      strains: ["Gorilla Cookies", "Mimosa", "Jelly Belly"],
    },
    {
      name: "Golden State Cannabis",
      address: "987 Sunset Blvd, Los Angeles, CA 90028",
      phone: "(323) 555-0987",
      hours: "Mon-Sun: 10AM-10PM",
      rating: 4.5,
      strains: ["Sugar Rush", "Cheeky Sunset", "Runts Layer Cake"],
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
              Find Herbally's premium cannabis products at these trusted dispensary partners across South Africa and
              internationally.
            </p>
          </div>
        </div>
      </section>

      {/* Location Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { number: "6+", label: "Partner Locations", icon: <MapPin className="h-6 w-6" /> },
              { number: "5", label: "Countries Available", icon: <Star className="h-6 w-6" /> },
              { number: "20+", label: "Cities Served", icon: <Clock className="h-6 w-6" /> },
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Partner Locations</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Visit these top-rated locations to experience Herbally's premium cannabis products.
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
              Follow these simple steps to locate Herbally cannabis products at locations near you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Find a Licensed Location",
                description: "Use our location finder or visit any of our partner locations listed above.",
              },
              {
                step: "02",
                title: "Ask for Herbally Products",
                description: "Request Herbally strains by name or look for our distinctive packaging and branding.",
              },
              {
                step: "03",
                title: "Contact Us Directly",
                description: "Call or WhatsApp us at +27 67 530 5635 for product availability and information.",
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

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us Directly</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Have questions about our products or locations? Reach out to us directly.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5 text-green-600" />
                    Call Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold mb-2">+27 67 530 5635</p>
                  <p className="text-sm text-muted-foreground">Available 7 days a week, 10AM-10PM</p>
                  <Button className="mt-4 bg-transparent" variant="outline">
                    <a href="tel:+27675305635">Call Now</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-600"
                    >
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                    WhatsApp
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold mb-2">+27 67 530 5635</p>
                  <p className="text-sm text-muted-foreground">Quick responses for product inquiries</p>
                  <Button className="mt-4 bg-transparent" variant="outline">
                    <a href="https://wa.me/27675305635" target="_blank" rel="noopener noreferrer">
                      Message Us
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Notice */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-lg font-semibold mb-4">Important Legal Information</h3>
            <p className="text-sm text-muted-foreground">
              Herbally products are available only at licensed cannabis dispensaries in jurisdictions where cannabis is
              legal for adult use. You must be 21+ years old with valid ID to purchase. Please consume responsibly and
              in accordance with all local and state laws. Do not drive or operate machinery after use.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
