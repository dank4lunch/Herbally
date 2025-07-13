import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Leaf, Star } from "lucide-react"

const strains = [
  {
    name: "Purple Haze",
    type: "Sativa",
    thc: "22%",
    cbd: "0.8%",
    description: "A legendary sativa strain with uplifting effects and sweet berry flavors.",
    effects: ["Euphoric", "Creative", "Energetic"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "OG Kush",
    type: "Hybrid",
    thc: "24%",
    cbd: "0.5%",
    description: "Classic hybrid with earthy pine flavors and balanced relaxing effects.",
    effects: ["Relaxed", "Happy", "Sleepy"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Blue Dream",
    type: "Hybrid",
    thc: "18%",
    cbd: "2%",
    description: "Popular hybrid offering gentle cerebral invigoration with full-body relaxation.",
    effects: ["Calm", "Happy", "Focused"],
    image: "/placeholder.svg?height=300&width=400",
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Strains</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our premium cannabis strains, carefully cultivated and lab-tested for quality and potency.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {strains.map((strain, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-2 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-green-100 to-emerald-200 dark:from-green-900 dark:to-emerald-800 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Leaf className="h-16 w-16 text-green-600 opacity-50" />
                </div>
                <Badge className="absolute top-4 left-4" variant={strain.type === "Sativa" ? "default" : "secondary"}>
                  {strain.type}
                </Badge>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{strain.name}</CardTitle>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
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

                <Button variant="outline" className="w-full bg-transparent">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/products">View All Strains</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
