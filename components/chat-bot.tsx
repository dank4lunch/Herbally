"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageCircle, X, User, Bot, Phone, MessageSquare } from "lucide-react"

interface Message {
  id: string
  text: string
  isBot: boolean
  timestamp: Date
}

interface QuickResponse {
  id: string
  text: string
  response: string
}

const membershipResponses: QuickResponse[] = [
  {
    id: "benefits",
    text: "What are membership benefits?",
    response:
      "VSC Private Members enjoy exclusive access to premium strains, member-only pricing, priority service, special events, and our complete catalogue including edibles, concentrates, and accessories. Members also get loyalty points and birthday specials!",
  },
  {
    id: "pricing",
    text: "How much does membership cost?",
    response:
      "Membership is R500 annually with incredible value! You'll save more than the membership fee with member pricing on your first few purchases. Plus you get a welcome gift package worth R300!",
  },
  {
    id: "signup",
    text: "How do I sign up?",
    response:
      "Visit any of our Gauteng locations with valid SA ID. Our staff will help you complete the membership application. You can also WhatsApp us at +27 67 530 5635 to start the process!",
  },
  {
    id: "locations",
    text: "Where are your locations?",
    response:
      "We have 4 locations in Gauteng: Hurricane Pub & Grill (Katlehong), Herbally Germiston, Herbally Boksburg, and Herbally Meyerton. All locations offer full member services and our complete catalogue.",
  },
  {
    id: "card",
    text: "Lost my membership card?",
    response:
      "No worries! Visit any location with your ID for a replacement card (R50 fee). Your membership status and points are linked to your ID number, so you won't lose any benefits.",
  },
  {
    id: "discounts",
    text: "What discounts do I get?",
    response:
      "Members get 10-20% off regular pricing, exclusive strain access, bulk discounts, and special promotions. Plus earn loyalty points on every purchase for additional savings!",
  },
]

const supportResponses: QuickResponse[] = [
  {
    id: "hours",
    text: "What are your operating hours?",
    response:
      "Monday-Thursday: 10AM-10PM, Friday-Saturday: 10AM-12AM, Sunday: 12PM-8PM. Hurricane Pub & Grill has extended hours until 2AM on weekends!",
  },
  {
    id: "delivery",
    text: "Do you offer delivery?",
    response:
      "Yes! We deliver within 15km of our locations in Gauteng. Minimum order R300, delivery fee R50. Same-day delivery available for orders placed before 6PM. WhatsApp +27 67 530 5635 to order!",
  },
  {
    id: "products",
    text: "What products do you have?",
    response:
      "Our full catalogue includes premium indoor/outdoor flower, pre-rolled joints, edibles (gummies, chocolates, cookies), concentrates (dab hits, moon sticks), and accessories. Members get access to exclusive strains!",
  },
  {
    id: "payment",
    text: "What payment methods do you accept?",
    response:
      "We accept cash, card payments, EFT, and SnapScan. Online orders can be paid via secure card payment or EFT. All transactions are discreet and secure.",
  },
  {
    id: "age",
    text: "What's the minimum age?",
    response:
      "You must be 18+ with valid South African ID. We strictly verify age and ID for all purchases. No exceptions - it's the law and we take compliance seriously.",
  },
  {
    id: "contact",
    text: "How can I contact you?",
    response:
      "WhatsApp: +27 67 530 5635, Phone: +27 67 530 5635, Email: info@herbally.co.za. You can also visit any of our 4 Gauteng locations. We're here to help!",
  },
]

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [mounted, setMounted] = useState(false)
  const [messageCounter, setMessageCounter] = useState(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  const addMessage = (text: string, isBot = false) => {
    const newMessage: Message = {
      id: `msg-${messageCounter}-${isBot ? "bot" : "user"}`,
      text,
      isBot,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, newMessage])
    setMessageCounter((prev) => prev + 1)
  }

  const handleQuickResponse = (response: QuickResponse) => {
    addMessage(response.text, false)
    setTimeout(() => {
      addMessage(response.response, true)
    }, 500)
  }

  const resetChat = () => {
    setMessages([])
    setMessageCounter(0)
  }

  if (!mounted) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button size="lg" className="rounded-full h-14 w-14 bg-green-600 hover:bg-green-700 shadow-lg" disabled>
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    )
  }

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="rounded-full h-14 w-14 bg-green-600 hover:bg-green-700 shadow-lg"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-2rem)]">
          <Card className="shadow-2xl border-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg">Herbally Support</CardTitle>
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              <Tabs defaultValue="membership" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mx-4 mt-2">
                  <TabsTrigger value="membership">Membership</TabsTrigger>
                  <TabsTrigger value="support">Support</TabsTrigger>
                </TabsList>

                <TabsContent value="membership" className="mt-4">
                  <div className="px-4">
                    <Badge className="mb-4 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      VSC Private Members Club
                    </Badge>

                    {messages.length > 0 && (
                      <ScrollArea className="h-48 mb-4 border rounded p-2">
                        {messages.map((message) => (
                          <div key={message.id} className={`flex gap-2 mb-3 ${message.isBot ? "" : "justify-end"}`}>
                            {message.isBot && <Bot className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />}
                            <div
                              className={`max-w-[80%] p-2 rounded-lg text-sm ${
                                message.isBot
                                  ? "bg-green-100 text-green-900 dark:bg-green-900 dark:text-green-100"
                                  : "bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100"
                              }`}
                            >
                              {message.text}
                            </div>
                            {!message.isBot && <User className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />}
                          </div>
                        ))}
                      </ScrollArea>
                    )}

                    <div className="space-y-2 mb-4">
                      {membershipResponses.map((response) => (
                        <Button
                          key={response.id}
                          variant="outline"
                          size="sm"
                          className="w-full text-left justify-start h-auto py-2 px-3 bg-transparent"
                          onClick={() => handleQuickResponse(response)}
                        >
                          {response.text}
                        </Button>
                      ))}
                    </div>

                    <div className="flex gap-2 pb-4">
                      <Button onClick={resetChat} variant="outline" size="sm" className="flex-1 bg-transparent">
                        Clear Chat
                      </Button>
                      <Button asChild size="sm" className="flex-1 bg-green-600 hover:bg-green-700">
                        <a href="https://wa.me/27675305635" target="_blank" rel="noopener noreferrer">
                          <MessageSquare className="h-4 w-4 mr-1" />
                          WhatsApp
                        </a>
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="support" className="mt-4">
                  <div className="px-4">
                    <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      Customer Support
                    </Badge>

                    {messages.length > 0 && (
                      <ScrollArea className="h-48 mb-4 border rounded p-2">
                        {messages.map((message) => (
                          <div key={message.id} className={`flex gap-2 mb-3 ${message.isBot ? "" : "justify-end"}`}>
                            {message.isBot && <Bot className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />}
                            <div
                              className={`max-w-[80%] p-2 rounded-lg text-sm ${
                                message.isBot
                                  ? "bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100"
                                  : "bg-green-100 text-green-900 dark:bg-green-900 dark:text-green-100"
                              }`}
                            >
                              {message.text}
                            </div>
                            {!message.isBot && <User className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />}
                          </div>
                        ))}
                      </ScrollArea>
                    )}

                    <div className="space-y-2 mb-4">
                      {supportResponses.map((response) => (
                        <Button
                          key={response.id}
                          variant="outline"
                          size="sm"
                          className="w-full text-left justify-start h-auto py-2 px-3 bg-transparent"
                          onClick={() => handleQuickResponse(response)}
                        >
                          {response.text}
                        </Button>
                      ))}
                    </div>

                    <div className="flex gap-2 pb-4">
                      <Button onClick={resetChat} variant="outline" size="sm" className="flex-1 bg-transparent">
                        Clear Chat
                      </Button>
                      <Button asChild size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                        <a href="tel:+27675305635">
                          <Phone className="h-4 w-4 mr-1" />
                          Call Us
                        </a>
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
