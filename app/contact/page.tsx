import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-950 dark:to-teal-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">
              Contact Us
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Have questions about cannabis education or research? We're here to help with evidence-based information
              and expert guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input placeholder="How can we help you?" />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea placeholder="Tell us more about your question or inquiry..." className="min-h-[120px]" />
                </div>

                <Button className="w-full">Send Message</Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                  <CardDescription>Multiple ways to reach our team of cannabis education experts.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-muted-foreground">info@herbally.com</p>
                      <p className="text-muted-foreground">research@herbally.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      <p className="text-sm text-muted-foreground">Mon-Fri, 9AM-5PM PST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-muted-foreground">
                        123 Cannabis Research Blvd
                        <br />
                        Suite 456
                        <br />
                        San Francisco, CA 94102
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 5:00 PM
                        <br />
                        Saturday: 10:00 AM - 2:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Media Inquiries</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    For press inquiries, interviews, or media requests, please contact our media team.
                  </p>
                  <Button variant="outline">
                    <Mail className="h-4 w-4 mr-2" />
                    media@herbally.com
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Common questions about cannabis education and our services
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Is the information on your site medically reviewed?",
                answer:
                  "Yes, all our educational content is reviewed by licensed medical professionals and cannabis researchers before publication.",
              },
              {
                question: "Do you provide medical advice?",
                answer:
                  "No, we provide educational information only. Always consult with a healthcare provider for medical advice regarding cannabis use.",
              },
              {
                question: "How often is your research updated?",
                answer:
                  "We continuously monitor new research and update our content monthly to reflect the latest scientific findings.",
              },
              {
                question: "Can I use your content for educational purposes?",
                answer:
                  "Yes, our educational materials can be used for non-commercial educational purposes with proper attribution.",
              },
              {
                question: "Do you offer consulting services?",
                answer:
                  "We offer educational consulting for healthcare providers, researchers, and educational institutions. Contact us for more information.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
