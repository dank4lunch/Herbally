import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Users, Leaf, Award, Heart, Shield } from "lucide-react"
import Image from "next/image"

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">
              🌿 About Herbally
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Herbally VSC Private Members Club
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              South Africa's premier cannabis lifestyle destination, serving the Gauteng community with quality,
              compliance, and authentic South African hospitality since our founding.
            </p>
          </div>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our South African Story</h2>
                <p className="text-muted-foreground mb-4">
                  Born in the heart of Gauteng, Herbally VSC Private Members Club represents the evolution of South
                  Africa's cannabis culture. We're not just a dispensary – we're a community hub where cannabis
                  enthusiasts gather to share knowledge, experiences, and authentic South African hospitality.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our flagship location, the Hurricane Pub & Grill in Katlehong, combines traditional South African pub
                  culture with modern cannabis retail, creating a unique space where members can relax, socialize, and
                  enjoy premium cannabis products in a safe, welcoming environment.
                </p>
                <p className="text-muted-foreground">
                  From our humble beginnings to our current four locations across Gauteng, we've remained committed to
                  supporting local growers, maintaining the highest quality standards, and fostering a responsible
                  cannabis community that reflects the diversity and spirit of South Africa.
                </p>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Herbally Hurricane Pub & Grill"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-xl text-muted-foreground">
                The principles that guide everything we do in the South African cannabis community
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle>Compliance & Safety</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We operate in full compliance with South African cannabis regulations, ensuring safe, legal access
                    for our members while maintaining the highest safety standards.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle>Quality & Authenticity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Every product in our catalogue is carefully selected and tested. We work exclusively with trusted
                    South African growers who share our commitment to quality and sustainability.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle>Community & Ubuntu</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Ubuntu - "I am because we are." We believe in building a supportive cannabis community that reflects
                    South African values of togetherness, respect, and shared prosperity.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Gauteng Locations</h2>
              <p className="text-xl text-muted-foreground">
                Four convenient locations serving the greater Johannesburg area
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <MapPin className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">Hurricane Pub & Grill</CardTitle>
                  <p className="text-sm text-muted-foreground">Katlehong (Flagship)</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Our original location combining traditional pub atmosphere with premium cannabis retail
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <MapPin className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">Herbally Germiston</CardTitle>
                  <p className="text-sm text-muted-foreground">Germiston CBD</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Modern retail space in the heart of Germiston with full member services
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <MapPin className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">Herbally Boksburg</CardTitle>
                  <p className="text-sm text-muted-foreground">Vuka Darkie</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Community-focused location serving the East Rand with personalized service
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <MapPin className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">Herbally Meyerton</CardTitle>
                  <p className="text-sm text-muted-foreground">Meyerton</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Serving the Vaal Triangle area with our complete catalogue and member benefits
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">4</div>
                <p className="text-muted-foreground">Gauteng Locations</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">2000+</div>
                <p className="text-muted-foreground">Active Members</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
                <p className="text-muted-foreground">Premium Products</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
                <p className="text-muted-foreground">SA Compliant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground mb-8">
              To be South Africa's leading cannabis lifestyle destination, providing safe, legal access to premium
              cannabis products while building a responsible community that celebrates the plant's benefits and South
              African cannabis culture.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="text-lg py-2 px-4">
                <Users className="h-4 w-4 mr-2" />
                Community First
              </Badge>
              <Badge variant="outline" className="text-lg py-2 px-4">
                <Award className="h-4 w-4 mr-2" />
                Quality Assured
              </Badge>
              <Badge variant="outline" className="text-lg py-2 px-4">
                <Shield className="h-4 w-4 mr-2" />
                Fully Compliant
              </Badge>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
