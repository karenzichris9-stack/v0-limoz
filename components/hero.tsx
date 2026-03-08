"use client"

import { useLanguage } from "@/lib/language-context"
import { CTAButton } from "./cta-button"
import { Shield, Clock, Star, CheckCircle, Phone } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function Hero() {
  const { t } = useLanguage()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    // Lazy-load video after page paint
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.src =
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DJI_20251020_114443_765%E2%80%AFAM_video-BzcXMHtGoQifH3iXlvQJySAQPtf2GQ.MP4"
        videoRef.current.load()
      }
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative overflow-hidden">
      {/* Poster image shown immediately for fast LCP */}
      <div className="absolute inset-0">
        <Image
          src="/luxury-car-on-scenic-road-in-rwanda.jpg"
          alt="Luxury car on scenic road in Rwanda"
          fill
          priority
          className={`object-cover transition-opacity duration-700 ${videoLoaded ? "opacity-0" : "opacity-100"}`}
          sizes="100vw"
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

        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f23]/80 via-[#1a1a3e]/60 to-[#0f0f23]/90" />
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

          {/* CTA card */}
          <div className="relative bg-white/95 backdrop-blur-md py-6 px-4 md:py-8 md:px-12 rounded-2xl max-w-3xl mx-auto shadow-2xl border border-[#ffd700]/30 overflow-hidden">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0f0f23] mb-2">{t("hero.title")}</h2>
            <p className="text-[#1a1a3e]/80 mb-5 md:mb-6 text-sm md:text-lg">{t("hero.subtitle")}</p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <CTAButton href="/booking" variant="primary" size="lg" showArrow pulse className="w-full sm:w-auto">
                {t("hero.carBooking")}
              </CTAButton>
              <CTAButton href="/tours-booking" variant="outline" size="lg" showArrow className="w-full sm:w-auto">
                {t("hero.toursBooking")}
              </CTAButton>
            </div>

            {/* Value props */}
            <div className="mt-5 md:mt-6 pt-5 md:pt-6 border-t border-[#ffd700]/20 grid grid-cols-2 gap-3 md:gap-4">
              {[t("hero.professionalChauffeurs"), t("hero.airportPickup"), t("hero.flexibleBookings"), t("hero.bestRates")].map((prop, i) => (
                <div key={i} className="flex items-center gap-2 text-xs md:text-sm text-[#1a1a3e]/80">
                  <CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#ffd700] flex-shrink-0" />
                  <span>{prop}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick contact */}
          <div className="mt-5 md:mt-6 flex justify-center">
            <a
              href="tel:+250788318990"
              className="flex items-center gap-2 text-white/80 hover:text-[#ffd700] transition-colors group"
            >
              <div className="p-2 bg-white/10 rounded-full group-hover:bg-[#ffd700] group-hover:text-[#0f0f23] transition-colors border border-[#ffd700]/20">
                <Phone className="w-4 h-4" />
              </div>
              <span className="text-xs md:text-sm">{t("hero.needHelp")}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
