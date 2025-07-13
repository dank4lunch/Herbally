import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Leaf, Star, Award } from "lucide-react"

export default function Products() {
  const strains = [
    {
      name: "Purple Haze",
      type: "Sativa",
      thc: "22%",
      cbd: "0.8%",
      description: "A legendary sativa strain with uplifting effects and sweet berry flavors.",
      effects: ["Euphoric", "Creative", "Energetic"],
      terpenes: ["Myrcene", "Pinene", "Caryophyllene"],
      flowering: "9-10 weeks",
    },
    {
      name: "OG Kush",
      type: "Hybrid",
      thc: "24%",
      cbd: "0.5%",
      description: "Classic hybrid with earthy pine flavors and balanced relaxing effects.",
      effects: ["Relaxed", "Happy", "Sleepy"],
      terpenes: ["Limonene", "Myrcene", "Caryophyllene"],
      flowering: "8-9 weeks",
    },
    {
      name: "Blue Dream",
      type: "Hybrid",
      thc: "18%",
      cbd: "2%",
      description: "Popular hybrid offering gentle cerebral invigoration with full-body relaxation.",
      effects: ["Calm", "Happy", "Focused"],
      terpenes: ["Myrcene", "Pinene", "Caryophyllene"],
      flowering: "9-10 weeks",
    },
    {
      name: "Granddaddy Purple",
      type: "Indica",
      thc: "20%",
      cbd: "0.6%",
      description: "Deep purple buds with grape and berry flavors, perfect for evening relaxation.",
      effects: ["Relaxed", "Sleepy", "Happy"],
      terpenes: ["Myrcene", "Pinene", "Linalool"],
      flowering: "8-9 weeks",
    },
    {
      name: "Green Crack",
      type: "Sativa",
      thc: "21%",
      cbd: "0.4%",
      description: "Energizing sativa with citrus flavors and sharp mental focus.",
      effects: ["Energetic", "Focused", "Uplifted"],
      terpenes: ["Limonene", "Caryophyllene", "Myrcene"],
      flowering: "7-9 weeks",
    },
    {
      name: "Wedding Cake",
      type: "Hybrid",
      thc: "25%",
      cbd: "0.7%",
      description: "Sweet and tangy hybrid with relaxing effects and vanilla undertones.",
      effects: ["Relaxed", "Euphoric", "Creative"],
      terpenes: ["Caryophyllene", "Limonene", "Linalool"],
      flowering: "8-9 weeks",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">
              Our Cannabis Strains
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Premium Cannabis Collection
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover our carefully curated selection of premium cannabis strains, each grown with organic practices
              and tested for quality and potency.
            </p>
          </div>
        </div>
      </section>

      {/* Strain Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Strain Collection</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From energizing sativas to relaxing indicas, find the perfect strain for your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {strains.map((strain, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-2 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-emerald-200 dark:from-green-900 dark:to-emerald-800 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Leaf className="h-16 w-16 text-green-600 opacity-50" />
                  </div>
                  <Badge
                    className="absolute top-4 left-4"
                    variant={
                      strain.type === "Sativa" ? "default" : strain.type === "Indica" ? "destructive" : "secondary"
                    }
                  >
                    {strain.type}
                  </Badge>
                  <div className="absolute top-4 right-4 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{strain.name}</CardTitle>
                  <CardDescription>{strain.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-muted rounded-lg">
                      <div className="text-2xl font-bold text-green-600">{strain.thc}</div>
                      <div className="text-sm text-muted-foreground">THC</div>
                    </div>
                    <div className="text-center p-3 bg-muted rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{strain.cbd}</div>
                      <div className="text-sm text-muted-foreground">CBD</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Effects</h4>
                    <div className="flex flex-wrap gap-2">
                      {strain.effects.map((effect, effectIndex) => (
                        <Badge key={effectIndex} variant="outline">
                          {effect}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Dominant Terpenes</h4>
                    <div className="flex flex-wrap gap-2">
                      {strain.terpenes.map((terpene, terpeneIndex) => (
                        <Badge key={terpeneIndex} variant="secondary">
                          {terpene}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="text-sm text-muted-foreground">
                    <strong>Flowering Time:</strong> {strain.flowering}
                  </div>

                  <Button variant="outline" className="w-full bg-transparent">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Quality Promise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every Herbally product meets our strict quality standards for potency, purity, and consistency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Award className="h-8 w-8" />,
                title: "Lab Tested",
                description:
                  "All products undergo comprehensive testing for potency, pesticides, heavy metals, and microbials.",
              },
              {
                icon: <Leaf className="h-8 w-8" />,
                title: "Organic Grown",
                description: "Cultivated using only organic nutrients and sustainable farming practices.",
              },
              {
                icon: <Star className="h-8 w-8" />,
                title: "Premium Quality",
                description:
                  "Hand-selected genetics and careful cultivation ensure exceptional quality in every batch.",
              },
            ].map((feature, index) => (
              <Card key={index} className="text-center border-2">
                <CardHeader>
                  <div className="text-green-600 mb-2 mx-auto">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-muted-foreground">
              <strong>Important:</strong> This website is for informational purposes only. Herbally products are
              available only at licensed dispensaries in legal jurisdictions. Must be 21+ years old. Please consume
              responsibly and in accordance with local laws.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
