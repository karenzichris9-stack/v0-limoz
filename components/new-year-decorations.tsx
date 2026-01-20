"use client"

import { useEffect, useState } from "react"
import { getCurrentHoliday } from "@/lib/holiday-config"

interface Firework {
  id: number
  x: number
  y: number
  color: string
  size: number
  delay: number
}

export function NewYearDecorations() {
  const [showDecorations, setShowDecorations] = useState(false)
  const [fireworks, setFireworks] = useState<Firework[]>([])
  const [showBanner, setShowBanner] = useState(true)

  useEffect(() => {
    const holiday = getCurrentHoliday()
    // Show if holiday is holiday-season OR has showFireworks decoration enabled
    const shouldShow = holiday?.id === "holiday-season" || holiday?.decorations?.showFireworks === true
    console.log(
      "[v0] NewYear check - Holiday:",
      holiday?.id,
      "showFireworks:",
      holiday?.decorations?.showFireworks,
      "shouldShow:",
      shouldShow,
    )
    setShowDecorations(shouldShow)
  }, [])

  useEffect(() => {
    if (!showDecorations) return

    // Create initial fireworks
    const initialFireworks: Firework[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 60 + 10,
      color: ["#f39c12", "#e74c3c", "#3498db", "#9b59b6", "#2ecc71", "#e91e63", "#00bcd4", "#ff5722"][i % 8],
      size: Math.random() * 150 + 100,
      delay: Math.random() * 3,
    }))
    setFireworks(initialFireworks)

    // Continuously add new fireworks
    const interval = setInterval(() => {
      setFireworks((prev) => {
        const newFirework: Firework = {
          id: Date.now(),
          x: Math.random() * 100,
          y: Math.random() * 50 + 10,
          color: ["#f39c12", "#e74c3c", "#3498db", "#9b59b6", "#2ecc71", "#e91e63", "#00bcd4", "#ff5722"][
            Math.floor(Math.random() * 8)
          ],
          size: Math.random() * 150 + 100,
          delay: 0,
        }
        return [...prev.slice(-15), newFirework]
      })
    }, 800)

    return () => clearInterval(interval)
  }, [showDecorations])

  if (!showDecorations) return null

  return (
    <>
      {/* Fireworks Container */}
      <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
        {fireworks.map((firework) => (
          <div
            key={firework.id}
            className="absolute animate-firework"
            style={{
              left: `${firework.x}%`,
              top: `${firework.y}%`,
              animationDelay: `${firework.delay}s`,
            }}
          >
            {/* Firework burst */}
            <div className="relative">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-firework-particle"
                  style={{
                    width: "4px",
                    height: "4px",
                    backgroundColor: firework.color,
                    borderRadius: "50%",
                    boxShadow: `0 0 6px ${firework.color}, 0 0 12px ${firework.color}`,
                    transform: `rotate(${i * 30}deg) translateY(-${firework.size / 2}px)`,
                    animationDelay: `${firework.delay}s`,
                  }}
                />
              ))}
              {/* Inner particles */}
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={`inner-${i}`}
                  className="absolute animate-firework-particle-inner"
                  style={{
                    width: "3px",
                    height: "3px",
                    backgroundColor: "#fff",
                    borderRadius: "50%",
                    boxShadow: `0 0 4px #fff`,
                    transform: `rotate(${i * 45 + 22.5}deg) translateY(-${firework.size / 3}px)`,
                    animationDelay: `${firework.delay + 0.1}s`,
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Sparkle stars in background */}
      <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-twinkle-star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              backgroundColor: "#fff",
              borderRadius: "50%",
              boxShadow: "0 0 4px #fff, 0 0 8px #f39c12",
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 1}s`,
            }}
          />
        ))}
      </div>

      {/* Happy New Year 2026 Floating Text */}
      {showBanner && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
          <div className="relative">
            <button
              onClick={() => setShowBanner(false)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              aria-label="Close banner"
            >
              ×
            </button>
            <div className="px-8 py-4 bg-gradient-to-r from-[#1a1a2e]/90 via-[#16213e]/90 to-[#1a1a2e]/90 backdrop-blur-md rounded-2xl border border-[#f39c12]/30 shadow-2xl animate-float-banner">
              <div className="flex items-center gap-4">
                <span className="text-4xl animate-bounce-slow">🎆</span>
                <div className="text-center">
                  <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#f39c12] via-[#e74c3c] to-[#9b59b6] bg-clip-text text-transparent animate-shimmer">
                    Happy New Year 2026!
                  </h2>
                  <p className="text-white/80 text-sm mt-1">Wishing you safe travels from Limoz Rwanda</p>
                </div>
                <span className="text-4xl animate-bounce-slow" style={{ animationDelay: "0.5s" }}>
                  🎇
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Golden confetti */}
      <div className="fixed inset-0 pointer-events-none z-35 overflow-hidden">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-confetti-fall"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-20px`,
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              backgroundColor: ["#f39c12", "#ffd700", "#ffec8b", "#e74c3c", "#9b59b6"][Math.floor(Math.random() * 5)],
              borderRadius: Math.random() > 0.5 ? "50%" : "2px",
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 4}s`,
            }}
          />
        ))}
      </div>
    </>
  )
}
