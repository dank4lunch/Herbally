import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Leaf, Candy, Zap, Cigarette } from "lucide-react"

export default function Catalogue() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">
              🌿 VSC Private Members Club
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Complete Catalogue
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Premium cannabis products for VSC Private Members. All prices in South African Rand (ZAR).
            </p>
            <Badge className="bg-red-500 text-white text-lg py-2 px-4">Members Only - 18+ ID Required</Badge>
          </div>
        </div>
      </section>

      {/* Catalogue */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="flower" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="flower" className="flex items-center gap-2">
                  <Leaf className="h-4 w-4" />
                  Flower & Joints
                </TabsTrigger>
                <TabsTrigger value="concentrates" className="flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  Concentrates
                </TabsTrigger>
                <TabsTrigger value="edibles" className="flex items-center gap-2">
                  <Candy className="h-4 w-4" />
                  Edibles
                </TabsTrigger>
                <TabsTrigger value="accessories" className="flex items-center gap-2">
                  <Cigarette className="h-4 w-4" />
                  Accessories
                </TabsTrigger>
              </TabsList>

              <TabsContent value="flower">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Indoor Flower */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Leaf className="h-5 w-5 text-green-600" />
                        Premium Indoor Flower (Per Gram)
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span>Helly Belly</span>
                          <Badge variant="outline">R100</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Pillow Talk</span>
                          <Badge variant="outline">R100</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Gorilla Cookies</span>
                          <Badge variant="outline">R120</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>King Turp</span>
                          <Badge variant="outline">R120</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Jelly Belly</span>
                          <Badge variant="outline">R120</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Tequila Sunrise</span>
                          <Badge variant="outline">R150</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Sugar Rush</span>
                          <Badge variant="outline">R150</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Donkey Kong</span>
                          <Badge variant="outline">R150</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Cheeky Sunset</span>
                          <Badge variant="outline">R150</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Mimosa</span>
                          <Badge variant="outline">R150</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Loud Cake</span>
                          <Badge variant="outline">R150</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>RLC (Runts Layer Cake)</span>
                          <Badge variant="outline">R150</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Jungle Fire</span>
                          <Badge variant="outline">R150</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>JAGS</span>
                          <Badge variant="outline" className="bg-yellow-100 text-yellow-800">
                            R180
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Outdoor & Specials */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Leaf className="h-5 w-5 text-green-600" />
                        Outdoor & Specials
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-green-600">Bud on Special</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span>Pineapple</span>
                            <Badge variant="outline" className="bg-red-100 text-red-800">
                              R80
                            </Badge>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Sugar Kush</span>
                            <Badge variant="outline">R100</Badge>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Glookies</span>
                            <Badge variant="outline">R100</Badge>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h4 className="font-semibold mb-2 text-green-600">Outdoor Bags</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span>Outdoor Bag 2g</span>
                            <Badge variant="outline">R60</Badge>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Outdoor Bag 5g</span>
                            <Badge variant="outline">R200</Badge>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Sour Diesel</span>
                            <Badge variant="outline">R60</Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Indoor Joints */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Cigarette className="h-5 w-5 text-green-600" />
                        Premium Indoor Joints
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>Sour Diesel</span>
                        <Badge variant="outline">R80</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Mimosa</span>
                        <Badge variant="outline">R80</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Sherbit</span>
                        <Badge variant="outline">R80</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Fire Girl</span>
                        <Badge variant="outline">R80</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Mix</span>
                        <Badge variant="outline">R80</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>RLC</span>
                        <Badge variant="outline">R80</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Outdoor Joints */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Cigarette className="h-5 w-5 text-green-600" />
                        Outdoor/Greenhouse Joints
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>Bizane</span>
                        <Badge variant="outline">R50</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Gorilla</span>
                        <Badge variant="outline">R50</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="concentrates">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Moon Sticks */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Zap className="h-5 w-5 text-purple-600" />
                        Moon Sticks
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>2 Pack</span>
                        <Badge variant="outline">R80</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>5 Pack</span>
                        <Badge variant="outline">R200</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Space Stick</span>
                        <Badge variant="outline">R150</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Galaxy Stick</span>
                        <Badge variant="outline" className="bg-yellow-100 text-yellow-800">
                          R300
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Dab Hits */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Zap className="h-5 w-5 text-purple-600" />
                        Dab Hits
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>1 Hit</span>
                        <Badge variant="outline">R60</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>2 Hits</span>
                        <Badge variant="outline">R100</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="edibles">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Sweet Treats */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Candy className="h-5 w-5 text-pink-600" />
                        Sweet Treats
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>Lollipop (50mg)</span>
                        <Badge variant="outline">R80</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Lollipop (100mg)</span>
                        <Badge variant="outline">R100</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Cookies (Large)</span>
                        <Badge variant="outline">R150</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Cookies (Small)</span>
                        <Badge variant="outline">R40</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Brownie (Large)</span>
                        <Badge variant="outline">R150</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Brownie (Small)</span>
                        <Badge variant="outline">R80</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Gummies */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Candy className="h-5 w-5 text-pink-600" />
                        Gummy Collection
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>Sweet Gummy Bears (Big Pack)</span>
                        <Badge variant="outline" className="bg-yellow-100 text-yellow-800">
                          R280
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Sweet Gummy Bears (10 Pack)</span>
                        <Badge variant="outline">R100</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Sour Gummy Bears (10 Pack)</span>
                        <Badge variant="outline">R100</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Sour Bears (Big Pack)</span>
                        <Badge variant="outline" className="bg-yellow-100 text-yellow-800">
                          R280
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Worms</span>
                        <Badge variant="outline">R150</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Specialty Items */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Candy className="h-5 w-5 text-pink-600" />
                        Specialty & Drinks
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>Smoothies</span>
                        <Badge variant="outline">R125</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Rockets</span>
                        <Badge variant="outline">R100</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Chocolate</span>
                        <Badge variant="outline">R100</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Crunchy</span>
                        <Badge variant="outline">R100</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Sodaze Drink (Assorted)</span>
                        <Badge variant="outline">R80</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Shroom Jubes</span>
                        <Badge variant="outline" className="bg-purple-100 text-purple-800">
                          R250
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Shroom Chocolate</span>
                        <Badge variant="outline" className="bg-purple-100 text-purple-800">
                          R300
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="accessories">
                <div className="text-center py-20">
                  <h3 className="text-2xl font-bold mb-4">Accessories Coming Soon</h3>
                  <p className="text-muted-foreground mb-8">
                    We're expanding our catalogue to include premium smoking accessories, storage solutions, and
                    cannabis lifestyle products.
                  </p>
                  <Badge variant="outline" className="text-lg py-2 px-4">
                    Check back soon for updates!
                  </Badge>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Membership CTA */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Become a VSC Private Member</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Access our complete catalogue with member pricing, exclusive strains, and priority service.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="outline" className="text-lg py-2 px-4">
                Member-Only Pricing
              </Badge>
              <Badge variant="outline" className="text-lg py-2 px-4">
                Exclusive Strains
              </Badge>
              <Badge variant="outline" className="text-lg py-2 px-4">
                Priority Service
              </Badge>
              <Badge variant="outline" className="text-lg py-2 px-4">
                Special Events
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Membership: R500/year • Must be 18+ with valid SA ID • Visit any location to apply
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
