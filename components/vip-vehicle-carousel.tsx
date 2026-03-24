"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { AnimatedSection } from "./animated-section"
import { useLanguage } from "@/lib/language-context"

const vipVehicles = [
  {
    name: "Toyota RAV4 2024",
    type: "VVIP Class",
    image: "/toyota-rav4-2024.jpg",
    seats: 5,
    transmission: "Automatic",
    fuelType: "Petrol",
  },
  {
    name: "Land Cruiser LC 300 V6",
    type: "VVIP Class",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-17%20at%2013.19.43-NNzu8LWFmY5AmEL2iMfIBW268YOIGQ.png",
    seats: 7,
    transmission: "Automatic",
    fuelType: "Petrol",
  },
  {
    name: "Land Cruiser 250 Series",
    type: "VVIP Class",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-17%20at%2013.33.39-RtUQJqAFHRwXKrYfmex38gsD3XzX2b.png",
    seats: 7,
    transmission: "Automatic",
    fuelType: "Diesel",
  },
  {
    name: "Mercedes-Benz E-Class",
    type: "VVIP Class",
    image: "/mercedes-e-class-black.jpg",
    seats: 5,
    transmission: "Automatic",
    fuelType: "Petrol",
  },
  {
    name: "Mercedes-Benz S-Class",
    type: "VVIP Class",
    image: "/mercedes-e-benz-uk-plate-1.jpg",
    seats: 5,
    transmission: "Automatic",
    fuelType: "Petrol",
  },
]

export function VIPVehicleCarousel() {
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % vipVehicles.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoPlay])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + vipVehicles.length) % vipVehicles.length)
    setAutoPlay(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % vipVehicles.length)
    setAutoPlay(false)
  }

  const currentVehicle = vipVehicles[currentIndex]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-[#f39c12]/10 text-[#f39c12] text-sm font-semibold rounded-full mb-4">
            {t("fleet.sectionLabel")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">{t("fleet.homeTitle")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("fleet.homeSubtitle")}
          </p>
        </AnimatedSection>

        <div className="max-w-5xl mx-auto">
          <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl group">
            {/* Main carousel image */}
            <div className="relative w-full h-96 md:h-[500px] overflow-hidden flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-50">
              <img
                src={currentVehicle.image}
                alt={currentVehicle.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
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

            {/* Vehicle info */}
            <div className="p-6 md:p-8 bg-white">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{currentVehicle.name}</h3>
                  <p className="text-[#f39c12] font-semibold text-sm md:text-base">{currentVehicle.type}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 font-medium">{currentIndex + 1} of {vipVehicles.length}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="p-3 bg-[#f39c12]/5 rounded-lg text-center">
                  <p className="text-xs text-gray-500 mb-1">Seats</p>
                  <p className="text-lg font-bold text-gray-900">{currentVehicle.seats}</p>
                </div>
                <div className="p-3 bg-[#f39c12]/5 rounded-lg text-center">
                  <p className="text-xs text-gray-500 mb-1">Transmission</p>
                  <p className="text-sm font-bold text-gray-900">{currentVehicle.transmission}</p>
                </div>
                <div className="p-3 bg-[#f39c12]/5 rounded-lg text-center">
                  <p className="text-xs text-gray-500 mb-1">Fuel Type</p>
                  <p className="text-sm font-bold text-gray-900">{currentVehicle.fuelType}</p>
                </div>
              </div>

              {/* Dots indicator */}
              <div className="flex items-center justify-center gap-2">
                {vipVehicles.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index)
                      setAutoPlay(false)
                    }}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-[#f39c12] w-8"
                        : "bg-gray-300 w-2 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
