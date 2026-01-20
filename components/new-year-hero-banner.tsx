"use client"

import { useState, useEffect } from "react"
import { X, Sparkles, PartyPopper } from "lucide-react"

export function NewYearHeroBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const dismissed = sessionStorage.getItem("ny-banner-dismissed")
    if (dismissed) setIsVisible(false)
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    sessionStorage.setItem("ny-banner-dismissed", "true")
  }

  if (!mounted || !isVisible) return null

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#0f0f23] via-[#1a1a3e] to-[#0f0f23] text-white">
      {/* Animated stars background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle-star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Gold accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ffd700] to-transparent" />

      <div className="container mx-auto px-4 py-3 relative">
        <div className="flex items-center justify-center gap-3 text-center">
          <PartyPopper className="w-5 h-5 text-[#ffd700] animate-bounce-slow hidden sm:block" />

          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#ffd700] animate-sparkle" />
            <span className="text-sm md:text-base font-medium">
              <span className="text-[#ffd700] font-bold">Happy New Year 2026!</span>
              <span className="hidden sm:inline text-white/80 ml-2">
                Start the year with premium car rentals in Rwanda
              </span>
            </span>
            <Sparkles className="w-4 h-4 text-[#ffd700] animate-sparkle" style={{ animationDelay: "0.5s" }} />
          </div>

          <PartyPopper
            className="w-5 h-5 text-[#ffd700] animate-bounce-slow hidden sm:block"
            style={{ animationDelay: "0.3s" }}
          />

          <button
            onClick={handleDismiss}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4 text-white/60 hover:text-white" />
          </button>
        </div>
      </div>

      {/* Gold accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#ffd700]/50 to-transparent" />
    </div>
  )
}
