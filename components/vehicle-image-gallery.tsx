"use client"

import { useState } from "react"
import Image from "next/image"

interface VehicleImageGalleryProps {
  vehicleName: string
  mainImage: string
  mainImageFit?: "contain" | "cover"
  images: {
    exterior: string[]
    interior: string[]
  }
}

export function VehicleImageGallery({ vehicleName, mainImage, mainImageFit = "contain", images }: VehicleImageGalleryProps) {
  const [currentImage, setCurrentImage] = useState(mainImage)

  const allImages = [mainImage, ...images.exterior, ...images.interior].filter(Boolean)

  return (
    <div className="grid md:grid-cols-2 gap-6 mb-12">
      {/* Main Display Image */}
      <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden flex items-center justify-center relative">
        <Image
          src={currentImage || "/placeholder.svg"}
          alt={vehicleName}
          fill
          priority
          quality={85}
          className={mainImageFit === "cover" ? "object-cover" : "object-contain"}
          sizes="(max-width: 768px) 100vw, 50vw"
          placeholder="empty"
        />
      </div>
      {/* Thumbnail Grid */}
      <div className="grid grid-cols-2 gap-4">
        {allImages.slice(1, 5).map((img, idx) => (
          <div
            key={idx}
            className="aspect-video bg-gray-100 rounded-xl overflow-hidden cursor-pointer border-2 border-transparent hover:border-[#f39c12] transition-all relative"
            onMouseEnter={() => setCurrentImage(img)}
          >
            <Image
              src={img || "/placeholder.svg?height=300&width=400"}
              alt={`${vehicleName} view ${idx + 1}`}
              fill
              quality={75}
              loading="lazy"
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
              placeholder="empty"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
