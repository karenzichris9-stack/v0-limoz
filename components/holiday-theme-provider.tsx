"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { getCurrentHoliday, type Holiday } from "@/lib/holiday-config"

interface HolidayThemeContextType {
  currentHoliday: Holiday | null
  isHolidaySeason: boolean
  themeColors: {
    primary: string
    secondary: string
    accent: string
  } | null
}

const HolidayThemeContext = createContext<HolidayThemeContextType>({
  currentHoliday: null,
  isHolidaySeason: false,
  themeColors: null,
})

export function useHolidayTheme() {
  return useContext(HolidayThemeContext)
}

export function HolidayThemeProvider({ children }: { children: ReactNode }) {
  const [currentHoliday, setCurrentHoliday] = useState<Holiday | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const holiday = getCurrentHoliday()
    console.log("[v0] Current date:", new Date().toDateString())
    console.log("[v0] Detected holiday:", holiday?.name || "None")
    setCurrentHoliday(holiday)

    // Apply holiday CSS custom properties if there's an active holiday
    if (holiday) {
      document.documentElement.style.setProperty("--holiday-primary", holiday.theme.primaryColor)
      document.documentElement.style.setProperty("--holiday-secondary", holiday.theme.secondaryColor)
      document.documentElement.style.setProperty("--holiday-accent", holiday.theme.accentColor)
      document.documentElement.style.setProperty("--holiday-gradient-from", holiday.theme.gradientFrom)
      document.documentElement.style.setProperty("--holiday-gradient-to", holiday.theme.gradientTo)
      document.documentElement.classList.add("holiday-theme", `holiday-${holiday.id}`)
    }

    return () => {
      document.documentElement.style.removeProperty("--holiday-primary")
      document.documentElement.style.removeProperty("--holiday-secondary")
      document.documentElement.style.removeProperty("--holiday-accent")
      document.documentElement.style.removeProperty("--holiday-gradient-from")
      document.documentElement.style.removeProperty("--holiday-gradient-to")
      document.documentElement.classList.remove("holiday-theme")
      if (holiday) {
        document.documentElement.classList.remove(`holiday-${holiday.id}`)
      }
    }
  }, [])

  const value: HolidayThemeContextType = {
    currentHoliday,
    isHolidaySeason: !!currentHoliday,
    themeColors: currentHoliday
      ? {
          primary: currentHoliday.theme.primaryColor,
          secondary: currentHoliday.theme.secondaryColor,
          accent: currentHoliday.theme.accentColor,
        }
      : null,
  }

  if (!mounted) {
    return <>{children}</>
  }

  return <HolidayThemeContext.Provider value={value}>{children}</HolidayThemeContext.Provider>
}
