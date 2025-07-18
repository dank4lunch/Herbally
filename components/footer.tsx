import Link from "next/link"
import { Leaf, Phone, Mail, MapPin, Users } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            <p className="text-sm text-muted-foreground">
              Premium cannabis experience with expert guidance and exceptional service in South Africa.
            </p>
            <div className="bg-green-50 dark:bg-green-900 p-3 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Users className="h-4 w-4 text-green-600" />
                <span className="font-semibold text-green-800 dark:text-green-200">VSC Membership</span>
              </div>
              <p className="text-sm text-green-700 dark:text-green-300">
                Join for <strong>R41/month</strong> and unlock exclusive benefits
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-green-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-green-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/education"
                  className="text-sm text-muted-foreground hover:text-green-600 transition-colors"
                >
                  Education & Strains
                </Link>
              </li>
              <li>
                <Link
                  href="/catalogue"
                  className="text-sm text-muted-foreground hover:text-green-600 transition-colors"
                >
                  VSC Catalogue
                </Link>
              </li>
              <li>
                <Link
                  href="/merchandise"
                  className="text-sm text-muted-foreground hover:text-green-600 transition-colors"
                >
                  Merchandise
                </Link>
              </li>
              <li>
                <Link href="/track" className="text-sm text-muted-foreground hover:text-green-600 transition-colors">
                  Track Order
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-green-600 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/membership"
                  className="text-sm text-muted-foreground hover:text-green-600 transition-colors"
                >
                  Herbally Career Programs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-green-600 flex-shrink-0" />
                <div className="text-sm">
                  <div className="text-muted-foreground">081 261 2221 (Cakes)</div>
                  <div className="text-muted-foreground">063 543 2439</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-green-600 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">info@herbally.co.za</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-green-600 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Gauteng Province, South Africa</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Premium Cannabis Products</li>
              <li className="text-sm text-muted-foreground">Expert Consultations</li>
              <li className="text-sm text-muted-foreground">Educational Resources</li>
              <li className="text-sm text-muted-foreground">VSC Private Members Club</li>
              <li className="text-sm text-muted-foreground">Delivery Services</li>
              <li className="text-sm text-muted-foreground">Quality Assurance</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Herbally. All rights reserved. | South African Cannabis Company
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-green-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-green-600 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
