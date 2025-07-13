import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Target } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">
              Our Story
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Cultivating Excellence
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Founded in 2014, Herbally has been dedicated to growing the finest cannabis using sustainable, organic
              practices that honor both the plant and the environment.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Journey</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Herbally began as a small family farm in Northern California, where our founders recognized the
                incredible potential of cannabis as both medicine and recreation. What started with a few plants in a
                greenhouse has grown into one of the most respected cannabis cultivation operations on the West Coast.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Our commitment to organic, sustainable growing practices has never wavered. We believe that the best
                cannabis comes from healthy soil, clean water, and careful attention to each plant throughout its
                lifecycle. Every strain we cultivate is a testament to our dedication to quality and environmental
                stewardship.
              </p>
              <p className="text-lg leading-relaxed">
                Today, Herbally products are available in over 500 licensed dispensaries across California, Oregon, and
                Washington. We're proud to be a trusted name in premium cannabis, known for our consistent quality,
                innovative strains, and commitment to the cannabis community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <Target className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To cultivate the highest quality cannabis using sustainable practices while building a stronger, more
                  inclusive cannabis community. We're committed to providing safe, consistent, and exceptional products
                  that enhance people's lives.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <Leaf className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle className="text-2xl">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Quality, sustainability, and community are at the heart of everything we do. We believe in transparent
                  practices, environmental responsibility, and supporting the communities where we operate.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Growing Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Growing Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From seed to harvest, every step is carefully managed to ensure the highest quality cannabis.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Seed Selection",
                description: "We carefully select premium genetics from trusted breeders worldwide.",
              },
              {
                step: "02",
                title: "Organic Growing",
                description: "Plants are grown in living soil with organic nutrients and natural pest management.",
              },
              {
                step: "03",
                title: "Hand Harvesting",
                description: "Each plant is hand-harvested at peak ripeness for maximum potency and flavor.",
              },
              {
                step: "04",
                title: "Careful Curing",
                description: "Slow curing process preserves terpenes and ensures smooth, flavorful cannabis.",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold text-lg">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate cultivators and cannabis experts dedicated to growing the finest products.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Sarah Martinez",
                role: "Head Cultivator",
                bio: "20+ years of cannabis cultivation experience with expertise in organic growing methods.",
              },
              {
                name: "Mike Johnson",
                role: "Master Grower",
                bio: "Former agricultural scientist specializing in sustainable farming and plant genetics.",
              },
              {
                name: "Lisa Chen",
                role: "Quality Director",
                bio: "Ensures every batch meets our strict quality standards through rigorous testing protocols.",
              },
            ].map((member, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full mx-auto mb-4"></div>
                  <CardTitle className="text-center">{member.name}</CardTitle>
                  <CardDescription className="text-center font-medium text-green-600">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
