import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock, Star } from "lucide-react"

export default function Contact() {
  const locations = [
    {
      name: "Herbally Hurricane Pub & Grill",
      address: "103 Nota Street, Katlehong, GP, 1431",
      phone: "+27 67 530 5635",
      hours: "Mon-Sat: 14:00-02:00, Sun: 12:00-02:00",
      rating: 4.9,
      strains: ["King Trup", "Gorilla Cookies", "Mimosa"],
      mapUrl:
        "https://maps.google.com/maps?width=100%25&height=600&hl=en&q=103%20Nota%20Street,%20Katlehong,%20GP,%201431&t=&z=14&ie=UTF8&iwloc=B&output=embed",
    },
    {
      name: "Herbally Germiston",
      address: "180 Spilsbury Road, Germiston, GP, 1401",
      hours: "Mon-Sat: 14:00-02:00, Sun: 12:00-02:00",
      rating: 4.9,
      strains: ["Sugar Rush", "Cheeky Sunset", "Runts Layer Cake"],
      phone: "+27 73 923 3855",
      mapUrl:
        "https://maps.google.com/maps?width=100%25&height=600&hl=en&q=180%20Spilsbury%20Road,%20Germiston,%20GP,%201401&t=&z=14&ie=UTF8&iwloc=B&output=embed",
    },
    {
      name: "Herbally Vuka Darkie",
      address: "Dawn Park R554 & R21 Road, 85 N Boundary Rd Klippoortje, Klippoortjie, Dawn Park, Boksburg, 1459",
      phone: "+27 73 923 3855",
      hours: "Mon-Sun: 9:00-17:00",
      rating: 4.7,
      strains: ["Loud Cake", "Tequila Sunrise", "Donkey Kong"],
      mapUrl:
        "https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Dawn%20Park%20R554%20&%20R21%20Road,%2085%20N%20Boundary%20Rd%20Klippoortje,%20Klippoortjie,%20Dawn%20Park,%20Boksburg,%201459&t=&z=14&ie=UTF8&iwloc=B&output=embed",
    },
    {
      name: "Herbally Meyerton",
      address: "50 Station Road, Meyerton, Gauteng, 1961, South Africa",
      hours: "Mon-Sun: 10AM-10PM",
      rating: 4.5,
      strains: ["Jelly Belly", "Jungle Fire", "King Trup"],
      phone: "+27 73 923 3855",
      mapUrl:
        "https://maps.google.com/maps?width=100%25&height=600&hl=en&q=50%20Station%20Road,%20Meyerton,%20Gauteng,%201961,%20South%20Africa&t=&z=14&ie=UTF8&iwloc=B&output=embed",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-950 dark:to-teal-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">
              Get in Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Contact Herbally
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Have questions about our products or want to visit one of our locations? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input placeholder="How can we help you?" />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea placeholder="Tell us more about your question or inquiry..." className="min-h-[120px]" />
                </div>

                <Button className="w-full">Send Message</Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                  <CardDescription>Multiple ways to reach our team.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-muted-foreground">+27 67 530 5635</p>
                      <p className="text-muted-foreground">+27 73 923 3855</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-emerald-600"
                      >
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">WhatsApp</h3>
                      <p className="text-muted-foreground">+27 67 530 5635</p>
                      <Button variant="outline" size="sm" className="mt-2 bg-transparent">
                        <a href="https://wa.me/27675305635" target="_blank" rel="noopener noreferrer">
                          Message Us
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-muted-foreground">info@herbally.co.za</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Store Locations */}
      <section id="locations" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Store Locations</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Visit our stores across Gauteng to experience our premium cannabis products.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {locations.map((location, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline">Official Store</Badge>
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

                  {location.phone && (
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{location.phone}</span>
                    </div>
                  )}

                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{location.hours}</span>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Featured Strains</h4>
                    <div className="flex flex-wrap gap-2">
                      {location.strains.map((strain, strainIndex) => (
                        <Badge key={strainIndex} variant="secondary" className="text-xs">
                          {strain}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Google Maps Embed */}
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      width="100%"
                      height="100%"
                      src={location.mapUrl}
                      frameBorder="0"
                      scrolling="no"
                      marginHeight={0}
                      marginWidth={0}
                      className="border-0"
                    />
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1 bg-transparent">
                      <a
                        href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        Get Directions
                      </a>
                    </Button>
                    {location.phone && (
                      <Button variant="outline" className="flex-1 bg-transparent">
                        <a href={`tel:${location.phone}`}>Call Store</a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { number: "4+", label: "Store Locations", icon: <MapPin className="h-6 w-6" /> },
              { number: "1", label: "Province", icon: <Star className="h-6 w-6" /> },
              { number: "6+", label: "Cities Served", icon: <Clock className="h-6 w-6" /> },
              { number: "4.8", label: "Average Rating", icon: <Star className="h-6 w-6" /> },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-emerald-100 dark:bg-emerald-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-emerald-600">{stat.icon}</div>
                </div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
