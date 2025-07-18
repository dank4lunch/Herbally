"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface GalleryItem {
  id: number
  title: string
  description: string
  imageUrl: string
  category: string
}

// Template gallery items - replace with your actual data
const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Herbal Collection 1",
    description: "Premium quality herbs and natural products",
    imageUrl: "/images/gallery/herb1.jpg",
    category: "Herbs"
  },
  {
    id: 2,
    title: "Herbal Collection 2",
    description: "Organic medicinal plants and extracts",
    imageUrl: "/images/gallery/herb2.jpg",
    category: "Herbs"
  },
  {
    id: 3,
    title: "Workshop Session",
    description: "Educational workshop on herbal medicine",
    imageUrl: "/images/gallery/workshop1.jpg",
    category: "Education"
  },
  {
    id: 4,
    title: "Product Showcase",
    description: "Featured herbal products and supplements",
    imageUrl: "/images/gallery/products1.jpg",
    category: "Products"
  },
  {
    id: 5,
    title: "Garden Tour",
    description: "Guided tour of our herbal garden",
    imageUrl: "/images/gallery/garden1.jpg",
    category: "Nature"
  },
  {
    id: 6,
    title: "Research Lab",
    description: "Our state-of-the-art research facility",
    imageUrl: "/images/gallery/lab1.jpg",
    category: "Research"
  }
]

interface GalleryProps {
  isOpen: boolean
  onClose: () => void
}

export function Gallery({ isOpen, onClose }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  const categories = ["All", ...Array.from(new Set(galleryItems.map(item => item.category)))]
  
  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  const openLightbox = (item: GalleryItem) => {
    setSelectedImage(item)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage) {
      const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id)
      const nextIndex = (currentIndex + 1) % filteredItems.length
      setSelectedImage(filteredItems[nextIndex])
    }
  }

  const prevImage = () => {
    if (selectedImage) {
      const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id)
      const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length
      setSelectedImage(filteredItems[prevIndex])
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Gallery</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>

        {/* Category Filter */}
        <div className="p-6 border-b">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="p-6">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">No images found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredItems.map((item) => (
                <Card 
                  key={item.id} 
                  className="cursor-pointer hover:shadow-lg transition-shadow duration-200"
                  onClick={() => openLightbox(item)}
                >
                  <CardContent className="p-0">
                    <div className="relative aspect-square">
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        fill
                        className="object-cover rounded-t-lg"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="font-semibold text-sm mb-1 truncate">{item.title}</h3>
                      <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2">
                        {item.description}
                      </p>
                      <span className="inline-block mt-2 px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded">
                        {item.category}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-60 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white hover:bg-opacity-70"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white hover:bg-opacity-70"
              onClick={prevImage}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white hover:bg-opacity-70"
              onClick={nextImage}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src={selectedImage.imageUrl}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 80vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{selectedImage.description}</p>
                <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded">
                  {selectedImage.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}