"use client"

import { useState } from "react"

interface VehicleImageGalleryProps {
  vehicleName: string
  mainImage: string
  images: {
    exterior: string[]
    interior: string[]
  }
}

export function VehicleImageGallery({ vehicleName, mainImage, images }: VehicleImageGalleryProps) {
  const [currentImage, setCurrentImage] = useState(mainImage)

  const allImages = [mainImage, ...images.exterior, ...images.interior].filter(Boolean)

  return (
    <div className="grid md:grid-cols-2 gap-6 mb-12">
      {/* Main Display Image */}
      <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden flex items-center justify-center">
        
      </div>
      {/* Thumbnail Grid */}
      <div className="grid grid-cols-2 gap-4">
        {allImages.slice(1, 5).map((img, idx) => (
          <div
            key={idx}
            className="aspect-video bg-gray-100 rounded-xl overflow-hidden cursor-pointer border-2 border-transparent hover:border-[#f39c12] transition-all"
            onMouseEnter={() => setCurrentImage(img)}
          >
            
          </div>
        ))}
      </div>
    </div>
  )
}
