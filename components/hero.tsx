"use client"

import { useLanguage } from "@/lib/language-context"
import { Shield, Clock, Star } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function Hero() {
  const { t } = useLanguage()
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [parallaxOffset, setParallaxOffset] = useState(0)

  useEffect(() => {
    // Lazy-load video after page paint
    const timer = setTimeout(() => {
      if (videoRef.current) {
        // Rotate between three videos for variety
        const videos = [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lc300%20%281%29%20%281%29-JhJ9zjfc5i2yeiYMcbaNZQzn91LMuo.mp4",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6th%202-ZFbNGj7tPXOp9RVvlm9joRV3ebRkmu.mp4",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lc300%20%281%29%20%281%29-z6wOYGG00Mdd8rrqmg23xqrM3HgK2v.mp4"
        ]
        const randomVideo = videos[Math.floor(Math.random() * videos.length)]
        videoRef.current.src = randomVideo
        videoRef.current.load()
      }
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollY = window.scrollY
        // Parallax effect: move at 40% of scroll speed
        setParallaxOffset(scrollY * 0.4)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative overflow-hidden" ref={containerRef}>
      {/* Background with parallax effect */}
      <div className="absolute inset-0" style={{ transform: `translateY(${parallaxOffset}px)` }}>
        {/* Poster image shown immediately for fast LCP */}
        <Image
          src="/luxury-car-on-scenic-road-in-rwanda.jpg"
          alt="Luxury car on scenic road in Rwanda"
          fill
          priority
          className={`object-cover transition-opacity duration-700 ${videoLoaded ? "opacity-0" : "opacity-100"}`}
          sizes="100vw"
          quality={85}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8VAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k"
        />

        {/* Video loads lazily after first paint */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onCanPlay={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${videoLoaded ? "opacity-100" : "opacity-0"}`}
        />

        {/* 50% opacity dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Main content */}
      <div className="relative min-h-[100svh] flex flex-col justify-end pb-8 md:pb-20">
        <div className="container mx-auto px-4">
          {/* Hero text */}
          <div className="text-center mb-6 md:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-3 md:mb-4 leading-tight text-balance">
              {t("hero.welcome")}{" "}
              <span className="bg-gradient-to-r from-[#ffd700] via-[#f7e7ce] to-[#ffd700] bg-clip-text text-transparent">
                {t("hero.company")}
              </span>
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto text-pretty">
              {t("hero.tagline")}
            </p>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-6 md:mb-8">
            <div className="flex items-center gap-2 text-white/90 bg-white/10 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-[#ffd700]/20">
              <Shield className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#ffd700]" />
              <span className="text-xs md:text-sm font-medium">{t("hero.fullyInsured")}</span>
            </div>
            <div className="flex items-center gap-2 text-white/90 bg-white/10 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-[#ffd700]/20">
              <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#ffd700]" />
              <span className="text-xs md:text-sm font-medium">{t("hero.service247")}</span>
            </div>
            <div className="flex items-center gap-2 text-white/90 bg-white/10 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-[#ffd700]/20">
              <Star className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#ffd700]" />
              <span className="text-xs md:text-sm font-medium">{t("hero.rating49")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
