"use client"

import { useState, useEffect } from "react"
import { X, Clock, Zap } from "lucide-react"
import Link from "next/link"

export function UrgencyBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return { hours: 23, minutes: 59, seconds: 59 }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="bg-gradient-to-r from-[#f39c12] via-[#e67e22] to-[#f39c12] text-white py-2.5 px-4 relative overflow-hidden">
      {/* Animated shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />

      <div className="container mx-auto flex items-center justify-center gap-4 relative">
        <Zap className="w-4 h-4 animate-pulse" />
        <p className="text-sm font-medium text-center">
          <span className="hidden sm:inline">Limited Time Offer: </span>
          <span className="font-bold">10% OFF</span> on all bookings
        </p>

        {/* Countdown */}
        <div className="flex items-center gap-1 bg-black/20 rounded-lg px-3 py-1">
          <Clock className="w-3.5 h-3.5" />
          <span className="font-mono text-sm font-bold">
            {String(timeLeft.hours).padStart(2, "0")}:{String(timeLeft.minutes).padStart(2, "0")}:
            {String(timeLeft.seconds).padStart(2, "0")}
          </span>
        </div>

        <Link
          href="/booking"
          className="hidden sm:inline-flex items-center gap-1 bg-white text-[#f39c12] px-3 py-1 rounded-full text-xs font-bold hover:bg-gray-100 transition-colors"
        >
          Book Now
        </Link>

        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 p-1 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Close banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
