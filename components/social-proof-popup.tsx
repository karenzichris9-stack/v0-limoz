"use client"

import { useState, useEffect } from "react"
import { MapPin, X } from "lucide-react"
import { cn } from "@/lib/utils"

const recentBookings = [
  { name: "Jean-Pierre", location: "Kigali", vehicle: "Land Cruiser", time: "2 mins ago" },
  { name: "Sarah M.", location: "Musanze", vehicle: "Mercedes E-Class", time: "5 mins ago" },
  { name: "David K.", location: "Rubavu", vehicle: "Toyota Prado", time: "8 mins ago" },
  { name: "Marie C.", location: "Huye", vehicle: "Coaster Bus", time: "12 mins ago" },
  { name: "Emmanuel", location: "Kigali", vehicle: "BYD Atto 3", time: "15 mins ago" },
]

export function SocialProofPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentBooking, setCurrentBooking] = useState(0)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    if (isDismissed) return

    // Show first popup after 5 seconds
    const initialTimer = setTimeout(() => {
      setIsVisible(true)
    }, 5000)

    return () => clearTimeout(initialTimer)
  }, [isDismissed])

  useEffect(() => {
    if (isDismissed) return

    // Rotate through bookings
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentBooking((prev) => (prev + 1) % recentBookings.length)
        setIsVisible(true)
      }, 500)
    }, 8000)

    return () => clearInterval(interval)
  }, [isDismissed])

  useEffect(() => {
    if (!isVisible) return

    // Auto-hide after 5 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false)
    }, 5000)

    return () => clearTimeout(hideTimer)
  }, [isVisible, currentBooking])

  if (isDismissed) return null

  const booking = recentBookings[currentBooking]

  return (
    null
  )
}
