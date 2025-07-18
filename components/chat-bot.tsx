"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, X, User, Bot } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")

  const membershipResponses = {
    benefits:
      "Our membership includes: 20% discount on all products, early access to new strains, exclusive member events, free delivery on orders over R300, and priority customer support.",
    pricing: "Membership costs R150 per year or R15 per month. Students get 50% off with valid student ID.",
    discount:
      "Members get 20% off all products, free delivery on orders over R300, and exclusive access to member-only sales and events.",
    card: "Lost your membership card? No problem! Contact us at +27 67 530 5635 or visit any of our locations with your ID to get a replacement card for R20.",
    signup:
      "You can sign up for membership at any of our locations or call us at +27 67 530 5635. Bring a valid ID and you'll be set up in minutes!",
  }

  const customerResponses = {
    hours:
      "Our main location (Herbally Hurricane Pub & Grill) is open Mon-Sat: 14:00-02:00, Sun: 12:00-02:00. Other locations have varying hours - check our locations page for details.",
    delivery:
      "We offer delivery within 20km of our locations. Free delivery for orders over R300 (members) or R500 (non-members). Delivery takes 1-3 hours.",
    products:
      "We carry premium cannabis strains including King Trup, Gorilla Cookies, Mimosa, and many more. All products are lab-tested and locally sourced.",
    payment: "We accept cash, card, and EFT payments. Members get additional payment options and priority processing.",
    age: "You must be 21+ with valid South African ID or passport. We strictly verify age and ID for all purchases.",
    contact:
      "Call us at +27 67 530 5635 or WhatsApp the same number. You can also visit any of our locations during business hours.",
  }

  const getResponse = (message: string, type: "membership" | "customer"): string => {
    const lowerMessage = message.toLowerCase()
    const responses = type === "membership" ? membershipResponses : customerResponses

    if (lowerMessage.includes("benefit") || lowerMessage.includes("perk"))
      return responses.benefits || responses.products
    if (lowerMessage.includes("price") || lowerMessage.includes("cost")) return responses.pricing || responses.payment
    if (lowerMessage.includes("discount") || lowerMessage.includes("sale"))
      return responses.discount || responses.products
    if (lowerMessage.includes("card") || lowerMessage.includes("lost") || lowerMessage.includes("replace"))
      return responses.card || responses.contact
    if (lowerMessage.includes("sign up") || lowerMessage.includes("join")) return responses.signup || responses.contact
    if (lowerMessage.includes("hour") || lowerMessage.includes("open") || lowerMessage.includes("close"))
      return responses.hours || responses.hours
    if (lowerMessage.includes("deliver") || lowerMessage.includes("shipping"))
      return responses.delivery || responses.delivery
    if (lowerMessage.includes("product") || lowerMessage.includes("strain") || lowerMessage.includes("weed"))
      return responses.products || responses.products
    if (lowerMessage.includes("pay") || lowerMessage.includes("money") || lowerMessage.includes("cash"))
      return responses.payment || responses.payment
    if (lowerMessage.includes("age") || lowerMessage.includes("id") || lowerMessage.includes("old"))
      return responses.age || responses.age
    if (lowerMessage.includes("contact") || lowerMessage.includes("phone") || lowerMessage.includes("call"))
      return responses.contact || responses.contact

    return type === "membership"
      ? "I can help with membership benefits, pricing, discounts, card replacement, and signup. What would you like to know?"
      : "I can help with store hours, delivery, products, payment methods, age requirements, and contact info. How can I assist you?"
  }

  const handleSendMessage = (type: "membership" | "customer") => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    }

    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      text: getResponse(input, type),
      sender: "bot",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage, botResponse])
    setInput("")
  }

  const clearMessages = () => {
    setMessages([])
  }

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="h-14 w-14 rounded-full bg-green-600 hover:bg-green-700 shadow-lg"
          size="icon"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-96 max-w-[calc(100vw-2rem)] z-50">
          <Card className="shadow-2xl border-2">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Herbally Support</CardTitle>
                <Button variant="ghost" size="sm" onClick={clearMessages}>
                  Clear
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="membership" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="membership">Membership</TabsTrigger>
                  <TabsTrigger value="customer">Customer Support</TabsTrigger>
                </TabsList>

                <TabsContent value="membership" className="space-y-4">
                  <div className="h-64 overflow-y-auto space-y-3 p-2 border rounded-lg bg-muted/20">
                    {messages.length === 0 && (
                      <div className="text-center text-muted-foreground text-sm py-8">
                        Ask me about membership benefits, pricing, or how to sign up!
                      </div>
                    )}
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex items-start gap-2 ${
                          message.sender === "user" ? "justify-end" : "justify-start"
                        }`}
                      >
                        {message.sender === "bot" && (
                          <div className="bg-green-100 dark:bg-green-900 p-1 rounded-full">
                            <Bot className="h-4 w-4 text-green-600" />
                          </div>
                        )}
                        <div
                          className={`max-w-[80%] p-3 rounded-lg text-sm ${
                            message.sender === "user" ? "bg-green-600 text-white" : "bg-background border"
                          }`}
                        >
                          {message.text}
                        </div>
                        {message.sender === "user" && (
                          <div className="bg-blue-100 dark:bg-blue-900 p-1 rounded-full">
                            <User className="h-4 w-4 text-blue-600" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage("membership")}
                      placeholder="Ask about membership..."
                      className="flex-1 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <Button onClick={() => handleSendMessage("membership")} size="sm">
                      Send
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="customer" className="space-y-4">
                  <div className="h-64 overflow-y-auto space-y-3 p-2 border rounded-lg bg-muted/20">
                    {messages.length === 0 && (
                      <div className="text-center text-muted-foreground text-sm py-8">
                        Ask me about store hours, delivery, products, or anything else!
                      </div>
                    )}
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex items-start gap-2 ${
                          message.sender === "user" ? "justify-end" : "justify-start"
                        }`}
                      >
                        {message.sender === "bot" && (
                          <div className="bg-green-100 dark:bg-green-900 p-1 rounded-full">
                            <Bot className="h-4 w-4 text-green-600" />
                          </div>
                        )}
                        <div
                          className={`max-w-[80%] p-3 rounded-lg text-sm ${
                            message.sender === "user" ? "bg-green-600 text-white" : "bg-background border"
                          }`}
                        >
                          {message.text}
                        </div>
                        {message.sender === "user" && (
                          <div className="bg-blue-100 dark:bg-blue-900 p-1 rounded-full">
                            <User className="h-4 w-4 text-blue-600" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage("customer")}
                      placeholder="Ask about our services..."
                      className="flex-1 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <Button onClick={() => handleSendMessage("customer")} size="sm">
                      Send
                    </Button>
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
