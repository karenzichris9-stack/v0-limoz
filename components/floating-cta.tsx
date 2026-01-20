"use client"

import { useState, useEffect } from "react"
import { Phone, MessageCircle, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded options */}
      <div
        className={cn(
          "flex flex-col gap-2 transition-all duration-300",
          isExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none",
        )}
      >
        <a
          href="tel:+250788318990"
          className="flex items-center gap-3 bg-white shadow-lg rounded-full px-4 py-3 hover:shadow-xl transition-all hover:scale-105"
        >
          <div className="p-2 bg-green-500 rounded-full">
            <Phone className="w-4 h-4 text-white" />
          </div>
          <span className="text-sm font-medium text-gray-800">Call Now</span>
        </a>
        <a
          href="https://wa.me/250788318990"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-white shadow-lg rounded-full px-4 py-3 hover:shadow-xl transition-all hover:scale-105"
        >
          <div className="p-2 bg-[#25D366] rounded-full">
            <MessageCircle className="w-4 h-4 text-white" />
          </div>
          <span className="text-sm font-medium text-gray-800">WhatsApp</span>
        </a>
      </div>

      {/* Main toggle button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={cn(
          "p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110",
          isExpanded ? "bg-gray-800 rotate-45" : "bg-[#f39c12] animate-bounce-slow",
        )}
      >
        {isExpanded ? <X className="w-6 h-6 text-white" /> : <Phone className="w-6 h-6 text-white" />}
      </button>
    </div>
  )
}
