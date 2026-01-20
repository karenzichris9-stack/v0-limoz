"use client"

import Image, { type ImageProps } from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface OptimizedImageProps extends Omit<ImageProps, "onLoad"> {
  fallbackSrc?: string
  showSkeleton?: boolean
  skeletonClassName?: string
}

export function OptimizedImage({
  src,
  alt,
  className,
  fallbackSrc = "/placeholder.svg",
  showSkeleton = true,
  skeletonClassName,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Skeleton loader */}
      {showSkeleton && isLoading && (
        <div className={cn("absolute inset-0 bg-muted animate-pulse", skeletonClassName)} />
      )}

      <Image
        src={error ? fallbackSrc : src}
        alt={alt}
        className={cn("transition-opacity duration-500", isLoading ? "opacity-0" : "opacity-100", className)}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setError(true)
          setIsLoading(false)
        }}
        {...props}
      />
    </div>
  )
}
