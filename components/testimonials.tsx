import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Alex Thompson",
    role: "Cannabis Enthusiast",
    content:
      "Herbally's Purple Haze is absolutely incredible. The quality and consistency is unmatched. You can really taste the difference in their organic growing methods.",
    rating: 5,
  },
  {
    name: "Maria Rodriguez",
    role: "Medical Patient",
    content:
      "I've been using Herbally's Blue Dream for my chronic pain, and it's been life-changing. The lab testing gives me confidence in what I'm consuming.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Dispensary Owner",
    content:
      "Our customers specifically ask for Herbally products. Their commitment to quality and sustainability aligns perfectly with our values.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What People Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from our community about their experience with Herbally's premium cannabis products.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex gap-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                <CardDescription>{testimonial.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
