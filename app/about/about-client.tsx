"use client"

import { Footer } from "@/components/footer"
import { Building2, Eye, Target, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { useState, useEffect } from "react"

const landCruiserVehicles = [
  {
    name: "Land Cruiser LC 300 V6",
    type: "VVIP Class",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-WrxsMDFksxi3P5qPvkrPk7pmDqVrIe.jpg",
    seats: 5,
    transmission: "Automatic",
    fuelType: "Petrol",
    year: 2024,
  },
  {
    name: "Land Cruiser 250 Series",
    type: "VVIP Class",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_1.JPG-Zi80ljBntElUSKTW4XNceq6YEPJuti.jpeg",
    seats: 5,
    transmission: "Automatic",
    fuelType: "Diesel",
    year: 2024,
  },
  {
    name: "Land Cruiser 200 Series",
    type: "VIP Class",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_1.JPG-egc8KI38IiKSztE6aQiaGG6g6sgRhS.jpeg",
    seats: 5,
    transmission: "Automatic",
    fuelType: "Diesel",
    year: 2023,
  },
]

export default function AboutClientPage() {
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % landCruiserVehicles.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoPlay])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + landCruiserVehicles.length) % landCruiserVehicles.length)
    setAutoPlay(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % landCruiserVehicles.length)
    setAutoPlay(false)
  }

  const currentVehicle = landCruiserVehicles[currentIndex]

  return (
    <div className="min-h-screen bg-white">
      {/* Full-width Hero Section with Vehicle Carousel */}
      <div className="relative w-full h-96 md:h-[600px] mt-20 overflow-hidden shadow-lg">
        {/* Carousel background image */}
        <Image
          src={currentVehicle.image}
          alt={currentVehicle.name}
          fill
          className="object-cover bg-gradient-to-br from-gray-100 to-gray-50"
          priority
          quality={85}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/25" />
        
        {/* Title */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center drop-shadow-lg">
            {t("aboutPage.title")}
          </h1>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-[#f39c12] text-gray-900 hover:text-white p-3 rounded-full transition-all shadow-lg hover:shadow-xl"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-[#f39c12] text-gray-900 hover:text-white p-3 rounded-full transition-all shadow-lg hover:shadow-xl"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Vehicle Info and Navigation */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:p-6 z-10">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg md:text-2xl font-bold text-white">{currentVehicle.name}</h3>
              <p className="text-[#f39c12] font-semibold text-sm">{currentVehicle.type}</p>
            </div>
            <div className="flex items-center gap-2">
              {landCruiserVehicles.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setAutoPlay(false)
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-[#f39c12] w-6"
                      : "bg-white/40 w-2 hover:bg-white/60"
                  }`}
                  aria-label={`Go to vehicle ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-6xl">

        {/* Two-Column Our Story Section */}
        <section className="mb-20 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Column */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{t("aboutPage.excellence")}</h2>
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">{t("aboutPage.excellenceText")}</p>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t("aboutPage.whyUs")}</h3>
                  <p className="text-gray-700 leading-relaxed">{t("aboutPage.whyUsText")}</p>
                </div>
              </div>
            </div>

            {/* Image Column */}
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-lg w-full">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_1.JPG-egc8KI38IiKSztE6aQiaGG6g6sgRhS.jpeg"
                alt="Limoz Rwanda Fleet - Land Cruiser 200 Series"
                fill
                className="object-cover object-center"
                priority
                quality={85}
              />
            </div>
          </div>
        </section>

        {/* Part of MFK Group Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2c4a6e] rounded-2xl p-8 md:p-12">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Building2 className="w-8 h-8 text-white/80" />
              </div>
              <div>
                <p className="text-white/60 text-sm font-medium tracking-wider uppercase mb-2">
                  {t("aboutPage.mfkPartOf")}
                </p>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{t("aboutPage.mfkGroup")}</h3>
                <p className="text-white/80 text-lg leading-relaxed">{t("aboutPage.mfkText")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-[#E8A020]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Eye className="w-7 h-7 text-[#E8A020]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t("aboutPage.vision")}</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">{t("aboutPage.visionText")}</p>
          </div>

          <div className="bg-gradient-to-br from-[#E8A020]/5 to-white p-8 md:p-10 rounded-2xl shadow-sm border border-[#E8A020]/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-[#1e3a5f]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Target className="w-7 h-7 text-[#1e3a5f]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t("aboutPage.mission")}</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">{t("aboutPage.missionText")}</p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16 bg-gradient-to-r from-[#E8A020] to-[#d89817] rounded-2xl shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white px-4">{t("aboutPage.cta")}</h2>
          <a
            href="/booking"
            className="inline-block bg-white text-[#E8A020] px-10 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold text-lg shadow-md hover:shadow-xl transform hover:scale-105"
          >
            {t("aboutPage.ctaButton")}
          </a>
        </section>
      </div>
      <Footer />
    </div>
  )
}
