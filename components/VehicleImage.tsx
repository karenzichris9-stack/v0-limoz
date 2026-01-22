"use client"

import Image from "next/image"

interface VehicleImageProps {
  src: string
  alt: string
  cropY?: number // negative = move image up (hide top), positive = move down
  zoom?: number // default 1.1 for slight zoom
  className?: string
}

export default function VehicleImage({
  src,
  alt,
  cropY = -6,
  zoom = 1.1,
  className = "",
}: VehicleImageProps) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <div
        className="relative w-full h-full"
        style={{
          ["--crop-y" as string]: `${cropY}%`,
          ["--zoom" as string]: zoom,
        }}
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          className="object-contain transition-transform duration-300"
          style={{
            transform: `translateY(var(--crop-y)) scale(var(--zoom))`,
          }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  )
}
