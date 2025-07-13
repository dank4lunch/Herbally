import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Clock, Users, Target, Shield, TrendingUp } from "lucide-react"

const reasons = [
  {
    icon: <Award className="h-8 w-8" />,
    title: "Industry Expertise",
    description: "Over 10 years of cannabis industry experience with proven track record of success.",
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Fast Results",
    description: "Quick turnaround times on licensing, compliance, and business setup services.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Expert Team",
    description: "Licensed professionals, attorneys, and cannabis industry veterans on your side.",
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Proven Success",
    description: "500+ successful cannabis business launches and compliance projects completed.",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Full Compliance",
    description: "Stay 100% compliant with all local, state, and federal cannabis regulations.",
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Growth Focused",
    description: "Strategies designed to maximize your cannabis business growth and profitability.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Herbally?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're the trusted cannabis business partner that delivers results. Here's what sets us apart from the
            competition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-2 text-center">
              <CardHeader>
                <div className="text-green-600 mb-2 mx-auto">{reason.icon}</div>
                <CardTitle>{reason.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{reason.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
