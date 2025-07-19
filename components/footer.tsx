import Link from "next/link"
import Image from "next/image"
import { Leaf, Phone, Mail, MapPin, Clock } from "lucide-react"

const strains = ["White Widow", "Blue Dream", "Girl Scout Cookies", "OG Kush", "Sour Diesel", "Purple Haze"]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image 
                src="/images/herbally-vintage-logo-compact.svg" 
                alt="Herbally Vintage Logo" 
                width={140} 
                height={42} 
                className="h-auto max-h-10 w-auto herbally-logo herbally-logo-footer" 
              />
            </div>
            <p className="text-gray-300 text-sm">
              South Africa's premier cannabis community offering premium products, education, and VSC membership
              benefits.
            </p>
            <div className="bg-green-800 rounded-lg p-4">
              <h4 className="font-semibold text-green-200 mb-2">VSC Membership</h4>
              <p className="text-sm text-green-100 mb-2">Join for R41/month and get:</p>
              <ul className="text-xs text-green-100 space-y-1">
                <li>• 10% off all merchandise</li>
                <li>• Private catalogue access</li>
                <li>• Priority support</li>
              </ul>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-gray-300 hover:text-white transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/education" className="text-gray-300 hover:text-white transition-colors">
                  Education
                </Link>
              </li>
              <li>
                <Link href="/catalogue" className="text-gray-300 hover:text-white transition-colors">
                  Catalogue
                </Link>
              </li>
              <li>
                <Link href="/merchandise" className="text-gray-300 hover:text-white transition-colors">
                  Merchandise
                </Link>
              </li>
              <li>
                <Link href="/membership" className="text-gray-300 hover:text-white transition-colors">
                  Herbally Career Programs
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Strains */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Popular Strains</h3>
            <ul className="space-y-2">
              {strains.map((strain) => (
                <li key={strain}>
                  <Link href="/education" className="text-gray-300 hover:text-white transition-colors">
                    {strain}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-green-400" />
                <div>
                  <p className="text-sm text-gray-300">Cakes: 081 261 2221</p>
                  <p className="text-sm text-gray-300">Support: 063 543 2439</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-green-400" />
                <span className="text-sm text-gray-300">info@herbally.co.za</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-green-400" />
                <span className="text-sm text-gray-300">Gauteng Province, South Africa</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-green-400" />
                <span className="text-sm text-gray-300">Mon-Fri: 9AM-6PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Herbally. All rights reserved. |
            <Link href="/contact" className="hover:text-white ml-1">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
