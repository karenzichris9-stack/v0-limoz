"use client"

import { useEffect, useState, useCallback } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export function RouteProgress() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const startProgress = useCallback(() => {
    setIsVisible(true)
    setProgress(0)

    // Simulate progress
    const timer1 = setTimeout(() => setProgress(30), 100)
    const timer2 = setTimeout(() => setProgress(60), 300)
    const timer3 = setTimeout(() => setProgress(80), 600)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])

  const completeProgress = useCallback(() => {
    setProgress(100)
    const timer = setTimeout(() => {
      setIsVisible(false)
      setProgress(0)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    completeProgress()
  }, [pathname, searchParams, completeProgress])

  // Listen for route change start
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest("a")
      if (link && link.href && link.href.startsWith(window.location.origin)) {
        const url = new URL(link.href)
        if (url.pathname !== pathname) {
          startProgress()
        }
      }
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [pathname, startProgress])

  if (!isVisible) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-transparent">
      <div
        className="h-full bg-[#f39c12] transition-all duration-300 ease-out shadow-[0_0_10px_rgba(243,156,18,0.7)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
