import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Microscope, Shield, Users, Award, TrendingUp } from "lucide-react"

const features = [
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: "Comprehensive Education",
    description: "From basics to advanced topics, learn everything about cannabis science, effects, and applications.",
  },
  {
    icon: <Microscope className="h-8 w-8" />,
    title: "Latest Research",
    description: "Stay updated with cutting-edge research and clinical studies from leading institutions worldwide.",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Safety First",
    description: "Evidence-based safety guidelines and harm reduction strategies for responsible use.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Expert Community",
    description: "Learn from researchers, doctors, and educators who are leaders in cannabis science.",
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Certified Content",
    description: "All content is reviewed by medical professionals and cannabis research experts.",
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Policy Updates",
    description: "Track cannabis legislation and policy changes across different jurisdictions.",
  },
]

export function Features() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Herbally?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We provide the most comprehensive and reliable cannabis education platform, backed by science and trusted by
            professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-2">
              <CardHeader>
                <div className="text-green-600 mb-2">{feature.icon}</div>
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
  )
}
