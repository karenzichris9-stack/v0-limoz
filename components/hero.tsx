"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Replaced parallax image with video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DJI_20251020_114443_765%E2%80%AFAM_video-BzcXMHtGoQifH3iXlvQJySAQPtf2GQ.MP4" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />

      <div className="absolute inset-0 flex items-end justify-center pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            {t("hero.welcome")} <span className="text-[#f39c12]">{t("hero.company")}</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12">{t("hero.tagline")}</p>

          <div className="bg-white/95 backdrop-blur-sm py-8 px-6 md:px-12 rounded-lg max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">{t("hero.title")}</h2>
            <p className="text-gray-600 mb-6 text-base md:text-lg">{t("hero.subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-[#f39c12] hover:bg-[#e67e22] text-white px-8 py-5 text-base font-semibold rounded-md"
              >
                <Link href="/booking">{t("hero.carBooking")}</Link>
              </Button>
              <Button
                asChild
                className="bg-[#f39c12] hover:bg-[#e67e22] text-white px-8 py-5 text-base font-semibold rounded-md"
              >
                <Link href="/tours-booking">{t("hero.toursBooking")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
