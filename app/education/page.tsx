import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Leaf, Clock, Zap, Flower } from "lucide-react"

const strains = [
  {
    name: "King Turp",
    type: "Hybrid",
    thc: "22-26%",
    cbd: "0.5-1%",
    effects: ["Euphoric", "Creative", "Relaxed", "Happy"],
    terpenes: ["Myrcene", "Limonene", "Caryophyllene"],
    flowering: "8-9 weeks",
    description:
      "A potent hybrid with royal genetics, delivering a balanced high perfect for creative endeavors and relaxation.",
  },
  {
    name: "Gorilla Cookies",
    type: "Hybrid",
    thc: "25-28%",
    cbd: "0.3-0.8%",
    effects: ["Powerful", "Euphoric", "Relaxed", "Sleepy"],
    terpenes: ["Caryophyllene", "Myrcene", "Limonene"],
    flowering: "8-10 weeks",
    description:
      "A cross between Gorilla Glue and Girl Scout Cookies, offering intense potency with sweet, earthy flavors.",
  },
  {
    name: "Mimosa",
    type: "Sativa Dominant",
    thc: "19-27%",
    cbd: "0.1-0.5%",
    effects: ["Energetic", "Uplifting", "Creative", "Happy"],
    terpenes: ["Limonene", "Pinene", "Ocimene"],
    flowering: "9-10 weeks",
    description: "A citrusy sativa-dominant strain perfect for daytime use, providing energy and mental clarity.",
  },
  {
    name: "Jelly Belly",
    type: "Indica Dominant",
    thc: "20-24%",
    cbd: "0.5-1.2%",
    effects: ["Relaxed", "Happy", "Sleepy", "Euphoric"],
    terpenes: ["Myrcene", "Caryophyllene", "Linalool"],
    flowering: "7-8 weeks",
    description: "Sweet and fruity indica-dominant strain with candy-like flavors and deeply relaxing effects.",
  },
  {
    name: "Sugar Rush",
    type: "Hybrid",
    thc: "23-27%",
    cbd: "0.2-0.7%",
    effects: ["Energetic", "Euphoric", "Creative", "Focused"],
    terpenes: ["Limonene", "Pinene", "Caryophyllene"],
    flowering: "8-9 weeks",
    description: "High-energy hybrid with sweet flavors and an uplifting cerebral high that enhances creativity.",
  },
  {
    name: "Cheeky Sunset",
    type: "Indica Dominant",
    thc: "21-25%",
    cbd: "0.8-1.5%",
    effects: ["Relaxed", "Sleepy", "Happy", "Peaceful"],
    terpenes: ["Myrcene", "Linalool", "Caryophyllene"],
    flowering: "8-9 weeks",
    description: "Perfect evening strain with beautiful sunset colors and deeply relaxing, sedative effects.",
  },
  {
    name: "Runts Layer Cake (RLC)",
    type: "Hybrid",
    thc: "24-28%",
    cbd: "0.3-0.9%",
    effects: ["Balanced", "Euphoric", "Creative", "Relaxed"],
    terpenes: ["Caryophyllene", "Limonene", "Myrcene"],
    flowering: "9-10 weeks",
    description: "Premium hybrid with complex flavors reminiscent of fruity candy and vanilla cake.",
  },
  {
    name: "Loud Cake",
    type: "Indica Dominant",
    thc: "26-30%",
    cbd: "0.2-0.6%",
    effects: ["Potent", "Relaxed", "Euphoric", "Sleepy"],
    terpenes: ["Myrcene", "Caryophyllene", "Limonene"],
    flowering: "8-9 weeks",
    description: "Extremely potent indica-dominant strain with cake-like flavors and powerful sedative effects.",
  },
  {
    name: "Tequila Sunrise",
    type: "Sativa Dominant",
    thc: "22-26%",
    cbd: "0.4-1%",
    effects: ["Uplifting", "Energetic", "Creative", "Social"],
    terpenes: ["Limonene", "Pinene", "Terpinolene"],
    flowering: "9-11 weeks",
    description: "Vibrant sativa-dominant strain with citrusy flavors and an energizing, social high.",
  },
  {
    name: "Donkey Kong",
    type: "Indica Dominant",
    thc: "25-29%",
    cbd: "0.5-1.2%",
    effects: ["Powerful", "Relaxed", "Euphoric", "Sleepy"],
    terpenes: ["Myrcene", "Caryophyllene", "Pinene"],
    flowering: "8-9 weeks",
    description: "Mighty indica-dominant strain with gorilla-strength potency and deeply relaxing body effects.",
  },
  {
    name: "Jungle Fire",
    type: "Sativa Dominant",
    thc: "24-28%",
    cbd: "0.3-0.8%",
    effects: ["Energetic", "Euphoric", "Creative", "Focused"],
    terpenes: ["Limonene", "Pinene", "Caryophyllene"],
    flowering: "10-12 weeks",
    description: "Fiery sativa-dominant strain with tropical flavors and an intense, long-lasting cerebral high.",
  },
]

export default function Education() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">
              🌿 Cannabis Education
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Premium Strain Library
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover our carefully curated collection of premium cannabis strains. Each strain is selected for
              quality, potency, and unique characteristics.
            </p>
          </div>
        </div>
      </section>

      {/* Strain Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="all">All Strains</TabsTrigger>
                <TabsTrigger value="sativa">Sativa</TabsTrigger>
                <TabsTrigger value="indica">Indica</TabsTrigger>
                <TabsTrigger value="hybrid">Hybrid</TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {strains.map((strain, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-xl">{strain.name}</CardTitle>
                          <Badge
                            variant={
                              strain.type.includes("Sativa")
                                ? "default"
                                : strain.type.includes("Indica")
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {strain.type}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">{strain.description}</p>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex items-center gap-2">
                            <Zap className="h-4 w-4 text-orange-500" />
                            <span className="text-sm">THC: {strain.thc}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Leaf className="h-4 w-4 text-green-500" />
                            <span className="text-sm">CBD: {strain.cbd}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-blue-500" />
                          <span className="text-sm">Flowering: {strain.flowering}</span>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold mb-2">Effects:</h4>
                          <div className="flex flex-wrap gap-1">
                            {strain.effects.map((effect, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {effect}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold mb-2">Dominant Terpenes:</h4>
                          <div className="flex flex-wrap gap-1">
                            {strain.terpenes.map((terpene, i) => (
                              <Badge key={i} variant="secondary" className="text-xs">
                                {terpene}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="sativa">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {strains
                    .filter((strain) => strain.type.includes("Sativa"))
                    .map((strain, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex justify-between items-start mb-2">
                            <CardTitle className="text-xl">{strain.name}</CardTitle>
                            <Badge variant="default">{strain.type}</Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-sm text-muted-foreground">{strain.description}</p>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-2">
                              <Zap className="h-4 w-4 text-orange-500" />
                              <span className="text-sm">THC: {strain.thc}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Leaf className="h-4 w-4 text-green-500" />
                              <span className="text-sm">CBD: {strain.cbd}</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-blue-500" />
                            <span className="text-sm">Flowering: {strain.flowering}</span>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold mb-2">Effects:</h4>
                            <div className="flex flex-wrap gap-1">
                              {strain.effects.map((effect, i) => (
                                <Badge key={i} variant="outline" className="text-xs">
                                  {effect}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold mb-2">Dominant Terpenes:</h4>
                            <div className="flex flex-wrap gap-1">
                              {strain.terpenes.map((terpene, i) => (
                                <Badge key={i} variant="secondary" className="text-xs">
                                  {terpene}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="indica">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {strains
                    .filter((strain) => strain.type.includes("Indica"))
                    .map((strain, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex justify-between items-start mb-2">
                            <CardTitle className="text-xl">{strain.name}</CardTitle>
                            <Badge variant="secondary">{strain.type}</Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-sm text-muted-foreground">{strain.description}</p>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-2">
                              <Zap className="h-4 w-4 text-orange-500" />
                              <span className="text-sm">THC: {strain.thc}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Leaf className="h-4 w-4 text-green-500" />
                              <span className="text-sm">CBD: {strain.cbd}</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-blue-500" />
                            <span className="text-sm">Flowering: {strain.flowering}</span>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold mb-2">Effects:</h4>
                            <div className="flex flex-wrap gap-1">
                              {strain.effects.map((effect, i) => (
                                <Badge key={i} variant="outline" className="text-xs">
                                  {effect}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold mb-2">Dominant Terpenes:</h4>
                            <div className="flex flex-wrap gap-1">
                              {strain.terpenes.map((terpene, i) => (
                                <Badge key={i} variant="secondary" className="text-xs">
                                  {terpene}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="hybrid">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {strains
                    .filter((strain) => strain.type === "Hybrid")
                    .map((strain, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex justify-between items-start mb-2">
                            <CardTitle className="text-xl">{strain.name}</CardTitle>
                            <Badge variant="outline">{strain.type}</Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-sm text-muted-foreground">{strain.description}</p>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-2">
                              <Zap className="h-4 w-4 text-orange-500" />
                              <span className="text-sm">THC: {strain.thc}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Leaf className="h-4 w-4 text-green-500" />
                              <span className="text-sm">CBD: {strain.cbd}</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-blue-500" />
                            <span className="text-sm">Flowering: {strain.flowering}</span>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold mb-2">Effects:</h4>
                            <div className="flex flex-wrap gap-1">
                              {strain.effects.map((effect, i) => (
                                <Badge key={i} variant="outline" className="text-xs">
                                  {effect}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold mb-2">Dominant Terpenes:</h4>
                            <div className="flex flex-wrap gap-1">
                              {strain.terpenes.map((terpene, i) => (
                                <Badge key={i} variant="secondary" className="text-xs">
                                  {terpene}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Educational Content */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Understanding Cannabis</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle>Sativa</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Energizing and uplifting effects. Perfect for daytime use, creativity, and social activities.
                    Typically higher in THC with citrusy, fruity terpenes.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Flower className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle>Indica</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Relaxing and sedating effects. Ideal for evening use, pain relief, and sleep. Often higher in CBD
                    with earthy, musky terpenes.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle>Hybrid</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Balanced effects combining both sativa and indica characteristics. Can be sativa or indica dominant,
                    offering versatile experiences.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Terpenes Education */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Understanding Terpenes</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Myrcene</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Aroma:</strong> Earthy, musky, herbal
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Effects:</strong> Relaxing, sedating, muscle relaxant
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Limonene</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Aroma:</strong> Citrus, lemon, orange
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Effects:</strong> Uplifting, mood enhancement, stress relief
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Caryophyllene</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Aroma:</strong> Spicy, peppery, woody
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Effects:</strong> Anti-inflammatory, pain relief, anxiety reduction
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Pinene</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Aroma:</strong> Pine, fresh, woody
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Effects:</strong> Alertness, memory retention, focus
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Responsible Use */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Responsible Cannabis Use</h2>
            <p className="text-xl text-muted-foreground mb-8">
              At Herbally VSC, we promote safe, responsible cannabis consumption and education.
            </p>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-4">Safety Guidelines</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Start low, go slow - especially with edibles</li>
                  <li>• Never drive under the influence</li>
                  <li>• Keep products away from children and pets</li>
                  <li>• Store in original packaging in cool, dry place</li>
                  <li>• Don't mix with alcohol or other substances</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Legal Compliance</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Must be 18+ with valid South African ID</li>
                  <li>• Private consumption only - not in public</li>
                  <li>• Respect workplace and property policies</li>
                  <li>• Follow all local and national regulations</li>
                  <li>• Support legal, regulated cannabis market</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
