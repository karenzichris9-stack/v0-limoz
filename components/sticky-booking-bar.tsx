"use client"

import { useState, useEffect } from "react"
import { Phone, MessageCircle } from "lucide-react"
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
    <>
      {/* Mobile version - Full width bar */}
      <div
        className={cn(
          "fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] transition-all duration-500 md:hidden",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0",
        )}
      >
        <div className="flex gap-2 p-3">
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/250788318990"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm">{t("contact.whatsappUs") || "WhatsApp Us"}</span>
          </a>

          {/* Call Button */}
          <a
            href="tel:+250788318990"
            className="flex-1 flex items-center justify-center gap-2 bg-[#f39c12] hover:bg-[#e67e22] text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#f39c12]/25"
          >
            <Phone className="w-5 h-5" />
            <span className="text-sm">{t("contact.callNow") || "Call Now"}</span>
          </a>
        </div>
      </div>

      {/* Desktop version - Floating pill in bottom-right */}
      <div
        className={cn(
          "fixed bottom-8 right-8 z-40 transition-all duration-500 hidden md:flex gap-3",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0",
        )}
      >
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/250788318990"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/30"
        >
          <MessageCircle className="w-5 h-5" />
          <span>{t("contact.whatsappUs") || "WhatsApp Us"}</span>
        </a>

        {/* Call Button */}
        <a
          href="tel:+250788318990"
          className="flex items-center gap-2 bg-[#f39c12] hover:bg-[#e67e22] text-white px-5 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#f39c12]/30"
        >
          <Phone className="w-5 h-5" />
          <span>{t("contact.callNow") || "Call Now"}</span>
        </a>
      </div>
    </>
  )
}
