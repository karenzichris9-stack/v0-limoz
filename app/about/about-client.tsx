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
      {/* Full-width Hero Section */}
      <div className="relative w-full h-72 md:h-96 mt-20 overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_1.JPG-36G0tDy4DEWgLfAEmcizyNSBcMqqtX.jpeg"
          alt="Limoz Rwanda Fleet - Mercedes-Benz E-Class"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center drop-shadow-lg">
            {t("aboutPage.title")}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-6xl">

        {/* Two-Column Our Story Section with Vehicle Carousel */}
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

            {/* Image Column - Vehicle Carousel */}
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-lg w-full">
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg group h-full flex flex-col">
                {/* Carousel image */}
                <div className="relative flex-1 overflow-hidden flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-50 p-4">
                  <Image
                    src={currentVehicle.image}
                    alt={currentVehicle.name}
                    fill
                    priority={currentIndex === 0}
                    quality={80}
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    placeholder="empty"
                  />
                </div>

                {/* Navigation buttons */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-2 top-1/3 z-20 bg-white/80 hover:bg-[#f39c12] text-gray-900 hover:text-white p-2 rounded-full transition-all shadow-lg hover:shadow-xl"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-2 top-1/3 z-20 bg-white/80 hover:bg-[#f39c12] text-gray-900 hover:text-white p-2 rounded-full transition-all shadow-lg hover:shadow-xl"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Vehicle info */}
                <div className="p-4 bg-white border-t">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">{currentVehicle.name}</h3>
                  <p className="text-[#f39c12] font-semibold text-xs md:text-sm mb-3">{currentVehicle.type}</p>

                  <div className="grid grid-cols-4 gap-2 mb-3">
                    <div className="p-2 bg-[#f39c12]/5 rounded text-center">
                      <p className="text-xs text-gray-500 mb-0.5">Seats</p>
                      <p className="text-sm font-bold text-gray-900">{currentVehicle.seats}</p>
                    </div>
                    <div className="p-2 bg-[#f39c12]/5 rounded text-center">
                      <p className="text-xs text-gray-500 mb-0.5">Trans</p>
                      <p className="text-xs font-bold text-gray-900">{currentVehicle.transmission}</p>
                    </div>
                    <div className="p-2 bg-[#f39c12]/5 rounded text-center">
                      <p className="text-xs text-gray-500 mb-0.5">Fuel</p>
                      <p className="text-xs font-bold text-gray-900">{currentVehicle.fuelType}</p>
                    </div>
                    <div className="p-2 bg-[#f39c12]/5 rounded text-center">
                      <p className="text-xs text-gray-500 mb-0.5">Year</p>
                      <p className="text-xs font-bold text-gray-900">{currentVehicle.year}</p>
                    </div>
                  </div>

                  {/* Dots indicator */}
                  <div className="flex items-center justify-center gap-1.5">
                    {landCruiserVehicles.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setCurrentIndex(index)
                          setAutoPlay(false)
                        }}
                        className={`h-1.5 rounded-full transition-all ${
                          index === currentIndex
                            ? "bg-[#f39c12] w-6"
                            : "bg-gray-300 w-1.5 hover:bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
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
