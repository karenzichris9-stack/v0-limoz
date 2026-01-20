"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"
import { getCurrentHoliday, type Holiday } from "@/lib/holiday-config"

export function HolidayBanner() {
  const [holiday, setHoliday] = useState<Holiday | null>(null)
  const [dismissed, setDismissed] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const currentHoliday = getCurrentHoliday()
    setHoliday(currentHoliday)

    // Check if user dismissed this holiday's banner TODAY only
    if (currentHoliday) {
      const dismissedData = localStorage.getItem("dismissedHolidayBanner")
      if (dismissedData) {
        try {
          const { holidayId, date } = JSON.parse(dismissedData)
          const today = new Date().toDateString()
          // Only keep dismissed if same holiday AND same day
          if (holidayId === currentHoliday.id && date === today) {
            setDismissed(true)
          } else {
            // Different day or different holiday, clear it
            localStorage.removeItem("dismissedHolidayBanner")
          }
        } catch {
          // Old format, clear it
          localStorage.removeItem("dismissedHolidayBanner")
        }
      }
    }
  }, [])

  const handleDismiss = () => {
    if (holiday) {
      // Store with date so it resets each day
      localStorage.setItem(
        "dismissedHolidayBanner",
        JSON.stringify({
          holidayId: holiday.id,
          date: new Date().toDateString(),
        }),
      )
    }
    setDismissed(true)
  }

  if (!mounted || !holiday || dismissed) return null

  return (
    <div
      className="relative overflow-hidden py-3 px-4 text-center font-medium transition-all duration-500"
      style={{
        background: `linear-gradient(135deg, ${holiday.theme.gradientFrom}, ${holiday.theme.gradientTo})`,
        color: holiday.theme.primaryColor,
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">{holiday.decorations?.showLights && <HolidayLights />}</div>

      <div className="container mx-auto flex items-center justify-center gap-3 relative z-10">
        <span className="text-2xl" role="img" aria-label={holiday.name}>
          {holiday.theme.icon}
        </span>
        <span className="text-base md:text-lg font-semibold">{holiday.theme.bannerMessage}</span>
        <span className="text-2xl" role="img" aria-label={holiday.name}>
          {holiday.theme.icon}
        </span>
      </div>

      <button
        onClick={handleDismiss}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-black/10 transition-colors"
        aria-label="Dismiss banner"
      >
        <X className="h-4 w-4" />
      </button>

      {/* Animated decorations */}
      {holiday.decorations?.showSnowfall && <Snowfall />}
      {holiday.decorations?.showHearts && <FloatingHearts />}
      {holiday.decorations?.showConfetti && <Confetti />}
    </div>
  )
}

function Snowfall() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute text-white animate-snowfall"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-20px`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
            fontSize: `${12 + Math.random() * 12}px`,
            opacity: 0.8,
          }}
        >
          ❄
        </div>
      ))}
    </div>
  )
}

// Floating hearts for Valentine's Day
function FloatingHearts() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute text-red-400/50 animate-float-up"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${4 + Math.random() * 3}s`,
            fontSize: `${10 + Math.random() * 10}px`,
          }}
        >
          ❤
        </div>
      ))}
    </div>
  )
}

// Confetti for celebrations
function Confetti() {
  const colors = ["#f39c12", "#e74c3c", "#3498db", "#2ecc71", "#9b59b6"]
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-sm animate-confetti"
          style={{
            left: `${Math.random() * 100}%`,
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  )
}

// Holiday lights decoration
function HolidayLights() {
  const colors = ["#e74c3c", "#f39c12", "#2ecc71", "#3498db", "#9b59b6"]
  return (
    <div className="absolute top-0 left-0 right-0 flex justify-around">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="w-2 h-3 rounded-full animate-twinkle"
          style={{
            backgroundColor: colors[i % colors.length],
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
    </div>
  )
}
