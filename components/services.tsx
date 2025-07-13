import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building, FileCheck, TrendingUp, Users, Shield, Lightbulb } from "lucide-react"

const services = [
  {
    icon: <Building className="h-8 w-8" />,
    title: "Business Setup & Licensing",
    description: "Complete cannabis business setup, licensing assistance, and regulatory compliance guidance.",
    features: ["License Applications", "Business Plans", "Regulatory Compliance", "Permit Assistance"],
  },
  {
    icon: <FileCheck className="h-8 w-8" />,
    title: "Compliance & Legal",
    description: "Stay compliant with ever-changing cannabis regulations and avoid costly penalties.",
    features: ["Compliance Audits", "Legal Documentation", "Policy Development", "Risk Assessment"],
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Business Growth",
    description: "Scale your cannabis business with proven strategies and market insights.",
    features: ["Market Analysis", "Growth Strategies", "Operational Optimization", "Financial Planning"],
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Staff Training",
    description: "Professional training programs for your cannabis business team and management.",
    features: ["Employee Training", "Management Coaching", "Safety Protocols", "Customer Service"],
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Security & Safety",
    description: "Comprehensive security solutions and safety protocols for cannabis operations.",
    features: ["Security Systems", "Safety Protocols", "Inventory Tracking", "Loss Prevention"],
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Product Development",
    description: "Innovation consulting for cannabis products, formulations, and market positioning.",
    features: ["Product Strategy", "Market Research", "Brand Development", "Quality Control"],
  },
]

export function Services() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Cannabis Business Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From startup to scale-up, we provide comprehensive cannabis business solutions tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-2 group">
              <CardHeader>
                <div className="text-green-600 mb-2 group-hover:scale-110 transition-transform">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
