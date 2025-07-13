import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin } from "lucide-react"
import Link from "next/link"

export function CTA() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience Herbally</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Discover our premium cannabis strains at authorized dispensaries near you. Quality you can trust, effects
            you'll love.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="text-lg px-8" asChild>
              <Link href="/products">
                Browse Our Strains
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
              <MapPin className="mr-2 h-5 w-5" />
              Find Dispensaries
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Available at licensed dispensaries • 21+ only • Please consume responsibly
          </p>
        </div>
      </div>
    </section>
  )
}
