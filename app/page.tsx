import { Hero } from "@/components/hero"
import { FeaturedProducts } from "@/components/featured-products"
import { AboutCompany } from "@/components/about-company"
import { Stats } from "@/components/stats"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <AboutCompany />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  )
}
