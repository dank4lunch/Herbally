"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Leaf, Clock, Zap, Brain, Heart, Moon } from "lucide-react"
import Image from "next/image"

interface Strain {
  id: string
  name: string
  type: "Sativa" | "Indica" | "Hybrid"
  thc: string
  cbd: string
  effects: string[]
  terpenes: string[]
  floweringTime: string
  description: string
  image: string // Added image property
  medicalBenefits?: string[]
}

const strains: Strain[] = [
  // Sativa Strains
  {
    id: "tequila-sunrise",
    name: "Tequila Sunrise",
    type: "Sativa",
    thc: "22-26%",
    cbd: "0.1-0.5%",
    effects: ["Energizing", "Creative", "Uplifting", "Focus"],
    terpenes: ["Limonene", "Pinene", "Myrcene"],
    floweringTime: "9-10 weeks",
    description:
      "A vibrant sativa strain that delivers an energizing sunrise experience with citrusy flavors and creative enhancement.",
    image: "/placeholder.svg?height=300&width=300", // Placeholder image
    medicalBenefits: ["Depression", "Fatigue", "Stress", "ADHD"],
  },
  {
    id: "pineapple",
    name: "Pineapple",
    type: "Sativa",
    thc: "18-22%",
    cbd: "0.2-0.8%",
    effects: ["Tropical High", "Energetic", "Happy", "Social"],
    terpenes: ["Myrcene", "Pinene", "Caryophyllene"],
    floweringTime: "8-9 weeks",
    description:
      "Sweet tropical sativa with distinct pineapple flavors that provide an uplifting and social high perfect for daytime use.",
    image: "/images/strains/pineapple.jpeg", // Added image
    medicalBenefits: ["Anxiety", "Depression", "Chronic Pain", "Loss of Appetite"],
  },
  {
    id: "sour-diesel",
    name: "Sour Diesel",
    type: "Sativa",
    thc: "20-25%",
    cbd: "0.1-0.3%",
    effects: ["Energizing", "Cerebral", "Creative", "Motivating"],
    terpenes: ["Limonene", "Caryophyllene", "Myrcene"],
    floweringTime: "10-11 weeks",
    description:
      "Classic energizing sativa with diesel-like aroma and fast-acting cerebral effects that boost creativity and motivation.",
    image: "/placeholder.svg?height=300&width=300", // Placeholder image
    medicalBenefits: ["Depression", "Chronic Fatigue", "Stress", "PTSD"],
  },
  {
    id: "sugar-rush",
    name: "Sugar Rush",
    type: "Sativa",
    thc: "24-28%",
    cbd: "0.1-0.4%",
    effects: ["Sweet High", "Energetic", "Euphoric", "Creative"],
    terpenes: ["Limonene", "Linalool", "Pinene"],
    floweringTime: "9-10 weeks",
    description:
      "High-potency sativa with sweet candy-like flavors that deliver a rush of energy and euphoric creativity.",
    image: "/images/strains/sugar-rush.jpeg", // Added image
    medicalBenefits: ["Depression", "Chronic Pain", "Fatigue", "Mood Disorders"],
  },
  {
    id: "jungle-fire",
    name: "Jungle Fire",
    type: "Sativa",
    thc: "21-25%",
    cbd: "0.2-0.6%",
    effects: ["Tropical Effects", "Energizing", "Focus", "Adventure"],
    terpenes: ["Myrcene", "Pinene", "Ocimene"],
    floweringTime: "9-11 weeks",
    description:
      "Exotic sativa with tropical fire that ignites adventure and focus, perfect for outdoor activities and exploration.",
    image: "/images/strains/jungle-fire.jpeg", // Added image
    medicalBenefits: ["ADHD", "Depression", "Chronic Fatigue", "Stress"],
  },
  {
    id: "jags",
    name: "JAGS",
    type: "Sativa",
    thc: "26-30%",
    cbd: "0.1-0.3%",
    effects: ["Top Shelf Quality", "Intense Cerebral", "Creative", "Energetic"],
    terpenes: ["Limonene", "Caryophyllene", "Terpinolene"],
    floweringTime: "10-12 weeks",
    description:
      "Premium top-shelf sativa with exceptional potency and complex terpene profile delivering intense cerebral effects.",
    image: "/images/strains/jags.jpeg", // Added image
    medicalBenefits: ["Severe Depression", "Chronic Pain", "PTSD", "Eating Disorders"],
  },

  // Indica Strains
  {
    id: "helly-belly",
    name: "Helly Belly",
    type: "Indica",
    thc: "20-24%",
    cbd: "0.5-1.2%",
    effects: ["Premium Relaxation", "Sweet Dreams", "Body High", "Appetite"],
    terpenes: ["Myrcene", "Linalool", "Caryophyllene"],
    floweringTime: "8-9 weeks",
    description:
      "Premium indica-dominant strain with sweet, fruity flavors that provide deep relaxation and peaceful sleep.",
    image: "/placeholder.svg?height=300&width=300", // Placeholder image
    medicalBenefits: ["Insomnia", "Chronic Pain", "Anxiety", "Loss of Appetite"],
  },
  {
    id: "pillow-talk",
    name: "Pillow Talk",
    type: "Indica",
    thc: "18-22%",
    cbd: "0.8-1.5%",
    effects: ["Relaxing Evening", "Peaceful Sleep", "Stress Relief", "Calm"],
    terpenes: ["Linalool", "Myrcene", "Pinene"],
    floweringTime: "7-8 weeks",
    description:
      "Perfect evening strain for relaxation and peaceful conversations, leading to restful sleep and stress relief.",
    image: "/images/strains/pillow-talk.jpeg", // Added image
    medicalBenefits: ["Insomnia", "Anxiety", "Chronic Stress", "Muscle Tension"],
  },
  {
    id: "jelly-belly",
    name: "Jelly Belly",
    type: "Indica",
    thc: "19-23%",
    cbd: "0.4-0.9%",
    effects: ["Fruity Relaxation", "Body High", "Sweet Dreams", "Appetite"],
    terpenes: ["Myrcene", "Limonene", "Linalool"],
    floweringTime: "8-9 weeks",
    description: "Sweet fruity indica with jelly-like flavors that provide full-body relaxation and enhanced appetite.",
    image: "/images/strains/jelly-belly.jpeg", // Added image
    medicalBenefits: ["Chronic Pain", "Insomnia", "Loss of Appetite", "Nausea"],
  },
  {
    id: "cheeky-sunset",
    name: "Cheeky Sunset",
    type: "Indica",
    thc: "21-25%",
    cbd: "0.3-0.7%",
    effects: ["Evening Relaxation", "Sunset Vibes", "Body High", "Sleep"],
    terpenes: ["Myrcene", "Caryophyllene", "Linalool"],
    floweringTime: "8-10 weeks",
    description: "Perfect sunset strain with cheeky effects that transition from relaxation to peaceful evening sleep.",
    image: "/images/strains/cheeky-sunset.jpeg", // Added image
    medicalBenefits: ["Insomnia", "Chronic Pain", "Anxiety", "Muscle Spasms"],
  },
  {
    id: "loud-cake",
    name: "Loud Cake",
    type: "Indica",
    thc: "23-27%",
    cbd: "0.2-0.6%",
    effects: ["Dessert High", "Heavy Relaxation", "Couch Lock", "Sweet Dreams"],
    terpenes: ["Caryophyllene", "Limonene", "Myrcene"],
    floweringTime: "9-10 weeks",
    description:
      "Potent dessert strain with cake-like flavors that deliver heavy relaxation and strong sedative effects.",
    image: "/images/strains/loud-cake.jpeg", // Added image
    medicalBenefits: ["Severe Insomnia", "Chronic Pain", "Anxiety", "PTSD"],
  },
  {
    id: "sugar-kush",
    name: "Sugar Kush",
    type: "Indica",
    thc: "20-24%",
    cbd: "0.5-1.0%",
    effects: ["Sweet Kush", "Relaxation", "Body High", "Peaceful"],
    terpenes: ["Myrcene", "Linalool", "Pinene"],
    floweringTime: "8-9 weeks",
    description:
      "Classic kush variety with sweet candy-like flavors providing traditional indica relaxation and peace.",
    image: "/images/strains/sugar-kush.jpeg", // Added image
    medicalBenefits: ["Chronic Pain", "Insomnia", "Stress", "Muscle Tension"],
  },

  // Hybrid Strains
  {
    id: "gorilla-cookies",
    name: "Gorilla Cookies",
    type: "Hybrid",
    thc: "24-28%",
    cbd: "0.2-0.8%",
    effects: ["Potent Hybrid", "Balanced High", "Creative Relaxation", "Focus"],
    terpenes: ["Caryophyllene", "Limonene", "Myrcene"],
    floweringTime: "9-10 weeks",
    description:
      "Powerful hybrid combining the best of both worlds with potent effects that balance creativity and relaxation.",
    image: "/images/strains/gorilla-cookies.jpeg", // Added image
    medicalBenefits: ["Chronic Pain", "Depression", "Anxiety", "ADHD"],
  },
  {
    id: "king-turp",
    name: "King Turp",
    type: "Hybrid",
    thc: "22-26%",
    cbd: "0.3-0.9%",
    effects: ["High Terpenes", "Balanced Effects", "Flavorful", "Therapeutic"],
    terpenes: ["Limonene", "Pinene", "Caryophyllene", "Linalool"],
    floweringTime: "9-11 weeks",
    description:
      "Terpene-rich hybrid with exceptional flavor profile and balanced effects perfect for both day and evening use.",
    image: "/images/strains/king-turp.jpeg", // Added image
    medicalBenefits: ["Chronic Pain", "Inflammation", "Anxiety", "Depression"],
  },
  {
    id: "donkey-kong",
    name: "Donkey Kong",
    type: "Hybrid",
    thc: "25-29%",
    cbd: "0.1-0.5%",
    effects: ["Strong Hybrid", "Powerful Effects", "Balanced High", "Long-lasting"],
    terpenes: ["Myrcene", "Caryophyllene", "Limonene"],
    floweringTime: "10-11 weeks",
    description:
      "Powerful hybrid strain with strong, long-lasting effects that provide the perfect balance of mental and physical benefits.",
    image: "/images/strains/donkey-kong.jpeg", // Added image
    medicalBenefits: ["Severe Chronic Pain", "Depression", "PTSD", "Eating Disorders"],
  },
  {
    id: "mimosa",
    name: "Mimosa",
    type: "Hybrid",
    thc: "21-25%",
    cbd: "0.2-0.7%",
    effects: ["Citrusy Morning", "Uplifting", "Balanced", "Social"],
    terpenes: ["Limonene", "Pinene", "Ocimene"],
    floweringTime: "9-10 weeks",
    description:
      "Bright citrusy hybrid perfect for morning use, providing uplifting effects with balanced relaxation for social activities.",
    image: "/images/strains/mimosa.jpeg", // Added image
    medicalBenefits: ["Depression", "Anxiety", "Chronic Fatigue", "Stress"],
  },
  {
    id: "rlc",
    name: "RLC (Runts Layer Cake)",
    type: "Hybrid",
    thc: "23-27%",
    cbd: "0.3-0.8%",
    effects: ["Premium Quality", "Dessert High", "Balanced Effects", "Flavorful"],
    terpenes: ["Caryophyllene", "Limonene", "Linalool"],
    floweringTime: "9-10 weeks",
    description:
      "Premium hybrid with complex dessert flavors and perfectly balanced effects combining the best of indica and sativa.",
    image: "/images/strains/rlc.jpeg", // Added image
    medicalBenefits: ["Chronic Pain", "Anxiety", "Depression", "Insomnia"],
  },
  {
    id: "glookies",
    name: "Glookies",
    type: "Hybrid",
    thc: "20-24%",
    cbd: "0.4-1.0%",
    effects: ["Cookies Hybrid", "Balanced High", "Sweet Effects", "Relaxing"],
    terpenes: ["Caryophyllene", "Myrcene", "Limonene"],
    floweringTime: "8-9 weeks",
    description:
      "Balanced cookies hybrid with sweet flavors and perfectly balanced effects suitable for any time of day.",
    image: "/placeholder.svg?height=300&width=300", // Placeholder image
    medicalBenefits: ["Anxiety", "Chronic Pain", "Depression", "Stress"],
  },
]

export default function EducationPage() {
  const [selectedType, setSelectedType] = useState<"All" | "Sativa" | "Indica" | "Hybrid">("All")

  const filteredStrains = selectedType === "All" ? strains : strains.filter((strain) => strain.type === selectedType)

  const sativaStrains = strains.filter((strain) => strain.type === "Sativa")
  const indicaStrains = strains.filter((strain) => strain.type === "Indica")
  const hybridStrains = strains.filter((strain) => strain.type === "Hybrid")

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Sativa":
        return <Zap className="h-4 w-4" />
      case "Indica":
        return <Moon className="h-4 w-4" />
      case "Hybrid":
        return <Brain className="h-4 w-4" />
      default:
        return <Leaf className="h-4 w-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Sativa":
        return "bg-orange-500"
      case "Indica":
        return "bg-purple-500"
      case "Hybrid":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  const StrainCard = ({ strain }: { strain: Strain }) => (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={strain.image || "/placeholder.svg"}
            alt={strain.name}
            fill
            className="object-cover rounded-t-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <Badge className={`absolute top-2 right-2 ${getTypeColor(strain.type)} text-white`}>
            {getTypeIcon(strain.type)}
            <span className="ml-1">{strain.type}</span>
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 space-y-4">
        <CardTitle className="text-lg">{strain.name}</CardTitle>
        <p className="text-gray-600 text-sm">{strain.description}</p>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-sm mb-1">THC Content</h4>
            <p className="text-green-600 font-bold">{strain.thc}</p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-1">CBD Content</h4>
            <p className="text-blue-600 font-bold">{strain.cbd}</p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-2 flex items-center">
            <Heart className="h-4 w-4 mr-1" />
            Effects
          </h4>
          <div className="flex flex-wrap gap-1">
            {strain.effects.map((effect, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {effect}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-2 flex items-center">
            <Leaf className="h-4 w-4 mr-1" />
            Terpenes
          </h4>
          <div className="flex flex-wrap gap-1">
            {strain.terpenes.map((terpene, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {terpene}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-1 flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            Flowering Time
          </h4>
          <p className="text-gray-600 text-sm">{strain.floweringTime}</p>
        </div>

        {strain.medicalBenefits && (
          <div>
            <h4 className="font-semibold text-sm mb-2">Medical Benefits</h4>
            <div className="flex flex-wrap gap-1">
              {strain.medicalBenefits.map((benefit, index) => (
                <Badge key={index} variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                  {benefit}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Cannabis Education & Strain Library</h1>
        <p className="text-xl text-gray-600 mb-6">
          Learn about different cannabis strains, their effects, and therapeutic benefits
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto">
          <p className="text-blue-800 text-sm">
            <strong>Educational Content Only:</strong> This information is provided for educational purposes. Strains
            are not available for purchase - visit our VSC Catalogue for available products.
          </p>
        </div>
      </div>

      {/* Cannabis Science Info */}
      <section className="mb-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Understanding Cannabis</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <Zap className="h-12 w-12 text-orange-500 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Sativa</h3>
            <p className="text-sm text-gray-600">
              Energizing, uplifting effects. Great for daytime use, creativity, and social activities.
            </p>
          </div>
          <div className="text-center">
            <Moon className="h-12 w-12 text-purple-500 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Indica</h3>
            <p className="text-sm text-gray-600">
              Relaxing, sedating effects. Perfect for evening use, sleep, and pain relief.
            </p>
          </div>
          <div className="text-center">
            <Brain className="h-12 w-12 text-green-500 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Hybrid</h3>
            <p className="text-sm text-gray-600">Balanced effects combining both sativa and indica characteristics.</p>
          </div>
        </div>
      </section>

      {/* Strain Library */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Strain Library</h2>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All Strains ({strains.length})</TabsTrigger>
            <TabsTrigger value="sativa">Sativa ({sativaStrains.length})</TabsTrigger>
            <TabsTrigger value="indica">Indica ({indicaStrains.length})</TabsTrigger>
            <TabsTrigger value="hybrid">Hybrid ({hybridStrains.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {strains.map((strain) => (
                <StrainCard key={strain.id} strain={strain} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sativa" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sativaStrains.map((strain) => (
                <StrainCard key={strain.id} strain={strain} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="indica" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {indicaStrains.map((strain) => (
                <StrainCard key={strain.id} strain={strain} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="hybrid" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hybridStrains.map((strain) => (
                <StrainCard key={strain.id} strain={strain} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Educational Footer */}
      <section className="mt-12 bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-3">Important Information</h3>
        <div className="text-sm text-gray-600 space-y-2">
          <p>• This information is for educational purposes only and should not be considered medical advice.</p>
          <p>• Effects may vary between individuals based on tolerance, consumption method, and personal biology.</p>
          <p>• Always consult with a healthcare professional before using cannabis for medical purposes.</p>
          <p>• Cannabis laws vary by location - please ensure compliance with local regulations.</p>
        </div>
      </section>
    </div>
  )
}
