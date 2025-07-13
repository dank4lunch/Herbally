import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Award, Shield, Heart } from "lucide-react"

const values = [
  {
    icon: <Leaf className="h-8 w-8" />,
    title: "Sustainable Growing",
    description:
      "We use organic, sustainable farming practices that respect the environment and produce the highest quality cannabis.",
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Premium Quality",
    description:
      "Every batch is carefully cultivated, harvested, and cured to ensure consistent potency and exceptional flavor profiles.",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Lab Tested",
    description:
      "All our products undergo rigorous third-party testing for potency, pesticides, and contaminants to ensure safety.",
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Community Focused",
    description: "We're committed to supporting our local community and promoting responsible cannabis consumption.",
  },
]

export function AboutCompany() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Commitment</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            At Herbally, we're passionate about cultivating premium cannabis with integrity, sustainability, and care
            for our community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-2 text-center">
              <CardHeader>
                <div className="text-green-600 mb-2 mx-auto">{value.icon}</div>
                <CardTitle>{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{value.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
