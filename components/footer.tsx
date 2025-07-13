import Link from "next/link"
import { Leaf, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-2 rounded-lg">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Herbally
              </span>
            </Link>
            <p className="text-muted-foreground">
              Premium cannabis cultivated with organic practices and sustainable farming methods. Quality you can trust,
              effects you'll love.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-green-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-green-600">
                  About
                </Link>
              </li>
              <li>
                <Link href="/education" className="text-muted-foreground hover:text-green-600">
                  Strains
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-muted-foreground hover:text-green-600">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-green-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Our Strains</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-green-600">
                  Sativa Strains
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-green-600">
                  Indica Strains
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-green-600">
                  Hybrid Strains
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-green-600">
                  CBD Products
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-green-600">
                  New Releases
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@herbally.com</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Northern California</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">© 2024 Herbally. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="text-muted-foreground hover:text-green-600 text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-green-600 text-sm">
              Terms of Service
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-green-600 text-sm">
              Age Verification
            </Link>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t">
          <p className="text-xs text-muted-foreground text-center">
            <strong>Legal Notice:</strong> This website is for informational purposes only. Cannabis products have not
            been evaluated by the FDA. Must be 21+ years old. Please consume responsibly and in accordance with local
            laws. Do not drive or operate machinery after use.
          </p>
        </div>
      </div>
    </footer>
  )
}
