"use client"

import { useEffect, useState } from "react"
import { getCurrentHoliday } from "@/lib/holiday-config"

export function ChristmasDecorations() {
  const [showDecorations, setShowDecorations] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const holiday = getCurrentHoliday()
    // Show if holiday is holiday-season OR has showSnowfall decoration enabled
    const shouldShow = holiday?.id === "holiday-season" || holiday?.decorations?.showSnowfall === true
    console.log(
      "[v0] Christmas check - Holiday:",
      holiday?.id,
      "showSnowfall:",
      holiday?.decorations?.showSnowfall,
      "shouldShow:",
      shouldShow,
    )
    setShowDecorations(shouldShow)
  }, [])

  if (!mounted || !showDecorations) return null

  return (
    <>
      {/* Corner decorations */}
      <div className="fixed top-0 left-0 pointer-events-none z-40 opacity-90">
        <div className="text-4xl md:text-6xl transform -rotate-12">🎄</div>
      </div>
      <div className="fixed top-0 right-0 pointer-events-none z-40 opacity-90">
        <div className="text-4xl md:text-6xl transform rotate-12">🎄</div>
      </div>

      {/* Snowflakes falling across the page */}
      <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white/40 animate-snowfall"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-30px`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 7}s`,
              fontSize: `${14 + Math.random() * 14}px`,
            }}
          >
            ❄
          </div>
        ))}
      </div>

      {/* Holiday lights at the top */}
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none flex justify-around py-1">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="w-3 h-4 rounded-full animate-twinkle"
            style={{
              backgroundColor: ["#e74c3c", "#2ecc71", "#f39c12", "#3498db", "#9b59b6"][i % 5],
              animationDelay: `${i * 0.15}s`,
              boxShadow: `0 0 8px ${["#e74c3c", "#2ecc71", "#f39c12", "#3498db", "#9b59b6"][i % 5]}`,
            }}
          />
        ))}
      </div>
    </>
  )
}
