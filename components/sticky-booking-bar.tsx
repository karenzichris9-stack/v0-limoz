"use client"

import { useState, useEffect } from "react"
import { Calendar, MapPin, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function StickyBookingBar() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero section
      setIsVisible(window.scrollY > 800)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] transition-all duration-500",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0",
      )}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Left side - Quick info */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-4 h-4 text-[#f39c12]" />
              <span className="text-sm">Kigali, Rwanda</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-4 h-4 text-[#f39c12]" />
              <span className="text-sm">Available 24/7</span>
            </div>
          </div>

          {/* Center - Value prop */}
          <div className="flex-1 md:flex-none text-center">
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-900">Professional chauffeurs</span>
              <span className="hidden sm:inline"> • Luxury vehicles • Best rates</span>
            </p>
          </div>

          {/* Right side - CTA */}
          <Link
            href="/booking"
            className="flex items-center gap-2 bg-[#f39c12] hover:bg-[#e67e22] text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#f39c12]/25 group"
          >
            <span>{t("hero.carBooking")}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  )
}
