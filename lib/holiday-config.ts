// Holiday configuration with dates and theme settings
export interface Holiday {
  id: string
  name: string
  nameKey: string // translation key
  startDate: { month: number; day: number }
  endDate: { month: number; day: number }
  priority?: number // Higher priority wins during overlaps
  theme: {
    primaryColor: string
    secondaryColor: string
    accentColor: string
    gradientFrom: string
    gradientTo: string
    icon: string
    bannerMessage: string
    bannerMessageKey: string // translation key
  }
  decorations?: {
    showSnowfall?: boolean
    showFireworks?: boolean
    showHearts?: boolean
    showConfetti?: boolean
    showLights?: boolean
  }
}

// Calculate Easter date (Western) for a given year
function getEasterDate(year: number): Date {
  const f = Math.floor
  const G = year % 19
  const C = f(year / 100)
  const H = (C - f(C / 4) - f((8 * C + 13) / 25) + 19 * G + 15) % 30
  const I = H - f(H / 28) * (1 - f(29 / (H + 1)) * f((21 - G) / 11))
  const J = (year + f(year / 4) + I + 2 - C + f(C / 4)) % 7
  const L = I - J
  const month = 3 + f((L + 40) / 44)
  const day = L + 28 - 31 * f(month / 4)
  return new Date(year, month - 1, day)
}

// Get dynamic holidays that change yearly
export function getDynamicHolidays(year: number): Holiday[] {
  const easter = getEasterDate(year)
  const easterMonth = easter.getMonth() + 1
  const easterDay = easter.getDate()

  return [
    {
      id: "easter",
      name: "Easter",
      nameKey: "holidays.easter",
      startDate: { month: easterMonth, day: easterDay - 2 }, // Good Friday
      endDate: { month: easterMonth, day: easterDay + 1 }, // Easter Monday
      theme: {
        primaryColor: "#9b59b6",
        secondaryColor: "#f1c40f",
        accentColor: "#2ecc71",
        gradientFrom: "#e8daef",
        gradientTo: "#fdebd0",
        icon: "🐣",
        bannerMessage: "Happy Easter from Limoz Rwanda!",
        bannerMessageKey: "holidays.easterMessage",
      },
      decorations: {
        showConfetti: true,
      },
    },
  ]
}

// Static holidays with fixed dates
export const staticHolidays: Holiday[] = [
  {
    id: "holiday-season",
    name: "Happy New Year 2026",
    nameKey: "holidays.holidaySeason",
    startDate: { month: 12, day: 20 },
    endDate: { month: 1, day: 3 },
    priority: 100, // Highest priority
    theme: {
      primaryColor: "#f39c12",
      secondaryColor: "#c0392b",
      accentColor: "#27ae60",
      gradientFrom: "#1a1a2e",
      gradientTo: "#16213e",
      icon: "🎆",
      bannerMessage: "Happy New Year 2026 from Limoz Rwanda!",
      bannerMessageKey: "holidays.newYearMessage",
    },
    decorations: {
      showSnowfall: true,
      showFireworks: true,
      showHearts: true,
      showConfetti: true,
      showLights: true,
    },
  },
  // Valentine's Day
  {
    id: "valentines",
    name: "Valentine's Day",
    nameKey: "holidays.valentines",
    startDate: { month: 2, day: 13 },
    endDate: { month: 2, day: 15 },
    priority: 50,
    theme: {
      primaryColor: "#e74c3c",
      secondaryColor: "#ff6b81",
      accentColor: "#fff",
      gradientFrom: "#ffe6e6",
      gradientTo: "#fff0f3",
      icon: "❤️",
      bannerMessage: "Happy Valentine's Day! Travel with love.",
      bannerMessageKey: "holidays.valentinesMessage",
    },
    decorations: {
      showHearts: true,
    },
  },
  // International Women's Day
  {
    id: "womens-day",
    name: "International Women's Day",
    nameKey: "holidays.womensDay",
    startDate: { month: 3, day: 8 },
    endDate: { month: 3, day: 8 },
    priority: 50,
    theme: {
      primaryColor: "#9b59b6",
      secondaryColor: "#e91e63",
      accentColor: "#fff",
      gradientFrom: "#f3e5f5",
      gradientTo: "#fce4ec",
      icon: "💜",
      bannerMessage: "Celebrating International Women's Day!",
      bannerMessageKey: "holidays.womensDayMessage",
    },
  },
  // Rwanda Independence Day
  {
    id: "rwanda-independence",
    name: "Rwanda Independence Day",
    nameKey: "holidays.rwandaIndependence",
    startDate: { month: 7, day: 1 },
    endDate: { month: 7, day: 1 },
    priority: 80,
    theme: {
      primaryColor: "#00a0d2", // Rwanda blue
      secondaryColor: "#fad201", // Rwanda yellow
      accentColor: "#20603d", // Rwanda green
      gradientFrom: "#e3f2fd",
      gradientTo: "#fffde7",
      icon: "🇷🇼",
      bannerMessage: "Happy Independence Day Rwanda! Celebrating our nation.",
      bannerMessageKey: "holidays.rwandaIndependenceMessage",
    },
    decorations: {
      showConfetti: true,
    },
  },
  // Liberation Day (Rwanda)
  {
    id: "liberation-day",
    name: "Liberation Day",
    nameKey: "holidays.liberationDay",
    startDate: { month: 7, day: 4 },
    endDate: { month: 7, day: 4 },
    priority: 80,
    theme: {
      primaryColor: "#00a0d2",
      secondaryColor: "#fad201",
      accentColor: "#20603d",
      gradientFrom: "#e8f5e9",
      gradientTo: "#e3f2fd",
      icon: "🇷🇼",
      bannerMessage: "Commemorating Liberation Day - Kwibuka!",
      bannerMessageKey: "holidays.liberationDayMessage",
    },
  },
  // Africa Day
  {
    id: "africa-day",
    name: "Africa Day",
    nameKey: "holidays.africaDay",
    startDate: { month: 5, day: 25 },
    endDate: { month: 5, day: 25 },
    priority: 50,
    theme: {
      primaryColor: "#2e7d32",
      secondaryColor: "#ffc107",
      accentColor: "#d32f2f",
      gradientFrom: "#e8f5e9",
      gradientTo: "#fff8e1",
      icon: "🌍",
      bannerMessage: "Happy Africa Day! Celebrating our continent.",
      bannerMessageKey: "holidays.africaDayMessage",
    },
  },
  // International Workers' Day / Labour Day
  {
    id: "labour-day",
    name: "Labour Day",
    nameKey: "holidays.labourDay",
    startDate: { month: 5, day: 1 },
    endDate: { month: 5, day: 1 },
    priority: 50,
    theme: {
      primaryColor: "#d32f2f",
      secondaryColor: "#1976d2",
      accentColor: "#fff",
      gradientFrom: "#ffebee",
      gradientTo: "#e3f2fd",
      icon: "👷",
      bannerMessage: "Happy Labour Day! Honoring all workers.",
      bannerMessageKey: "holidays.labourDayMessage",
    },
  },
  // Halloween
  {
    id: "halloween",
    name: "Halloween",
    nameKey: "holidays.halloween",
    startDate: { month: 10, day: 30 },
    endDate: { month: 11, day: 1 },
    priority: 50,
    theme: {
      primaryColor: "#f39c12",
      secondaryColor: "#8e44ad",
      accentColor: "#2c3e50",
      gradientFrom: "#2c3e50",
      gradientTo: "#1a1a2e",
      icon: "🎃",
      bannerMessage: "Happy Halloween! Spooky travels await.",
      bannerMessageKey: "holidays.halloweenMessage",
    },
  },
  // World Tourism Day
  {
    id: "tourism-day",
    name: "World Tourism Day",
    nameKey: "holidays.tourismDay",
    startDate: { month: 9, day: 27 },
    endDate: { month: 9, day: 27 },
    priority: 50,
    theme: {
      primaryColor: "#3498db",
      secondaryColor: "#2ecc71",
      accentColor: "#f39c12",
      gradientFrom: "#e3f2fd",
      gradientTo: "#e8f5e9",
      icon: "✈️",
      bannerMessage: "Happy World Tourism Day! Explore Rwanda with us.",
      bannerMessageKey: "holidays.tourismDayMessage",
    },
  },
  // Earth Day
  {
    id: "earth-day",
    name: "Earth Day",
    nameKey: "holidays.earthDay",
    startDate: { month: 4, day: 22 },
    endDate: { month: 4, day: 22 },
    priority: 50,
    theme: {
      primaryColor: "#27ae60",
      secondaryColor: "#3498db",
      accentColor: "#8bc34a",
      gradientFrom: "#e8f5e9",
      gradientTo: "#e3f2fd",
      icon: "🌍",
      bannerMessage: "Happy Earth Day! Travel responsibly with Limoz.",
      bannerMessageKey: "holidays.earthDayMessage",
    },
  },
]

export function getCurrentHoliday(): Holiday | null {
  const now = new Date()
  const currentMonth = now.getMonth() + 1 // 1-12
  const currentDay = now.getDate()
  const currentYear = now.getFullYear()

  // Check dynamic holidays first
  const dynamicHolidays = getDynamicHolidays(currentYear)
  const allHolidays = [...staticHolidays, ...dynamicHolidays]

  // Find all matching holidays
  const matchingHolidays: Holiday[] = []

  for (const holiday of allHolidays) {
    const { startDate, endDate } = holiday
    let isMatch = false

    // Handle holidays that span across year boundary (e.g., Dec 20 - Jan 3)
    if (startDate.month > endDate.month) {
      // We're in December after start OR in January before end
      if (
        (currentMonth === startDate.month && currentDay >= startDate.day) ||
        currentMonth > startDate.month ||
        (currentMonth === endDate.month && currentDay <= endDate.day) ||
        currentMonth < endDate.month
      ) {
        isMatch = true
      }
    } else if (startDate.month === endDate.month) {
      // Same month holiday
      if (currentMonth === startDate.month && currentDay >= startDate.day && currentDay <= endDate.day) {
        isMatch = true
      }
    } else {
      // Holiday spans multiple months within same year
      if (
        (currentMonth === startDate.month && currentDay >= startDate.day) ||
        (currentMonth > startDate.month && currentMonth < endDate.month) ||
        (currentMonth === endDate.month && currentDay <= endDate.day)
      ) {
        isMatch = true
      }
    }

    if (isMatch) {
      matchingHolidays.push(holiday)
    }
  }

  // Return the highest priority holiday
  if (matchingHolidays.length > 0) {
    return matchingHolidays.sort((a, b) => (b.priority || 0) - (a.priority || 0))[0]
  }

  return null
}

// Get upcoming holidays (next 3)
export function getUpcomingHolidays(count = 3): Holiday[] {
  const now = new Date()
  const currentMonth = now.getMonth() + 1
  const currentDay = now.getDate()
  const currentYear = now.getFullYear()

  const dynamicHolidays = getDynamicHolidays(currentYear)
  const allHolidays = [...staticHolidays, ...dynamicHolidays]

  // Sort holidays by their start date relative to current date
  const sortedHolidays = allHolidays
    .map((holiday) => {
      let daysUntil = 0
      const startMonth = holiday.startDate.month
      const startDay = holiday.startDate.day

      if (startMonth > currentMonth || (startMonth === currentMonth && startDay > currentDay)) {
        // Holiday is later this year
        const holidayDate = new Date(currentYear, startMonth - 1, startDay)
        daysUntil = Math.floor((holidayDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
      } else {
        // Holiday is next year
        const holidayDate = new Date(currentYear + 1, startMonth - 1, startDay)
        daysUntil = Math.floor((holidayDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
      }

      return { holiday, daysUntil }
    })
    .filter((item) => item.daysUntil > 0)
    .sort((a, b) => a.daysUntil - b.daysUntil)
    .slice(0, count)
    .map((item) => item.holiday)

  return sortedHolidays
}
