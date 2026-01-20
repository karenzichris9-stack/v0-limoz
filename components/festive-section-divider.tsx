"use client"

interface FestiveSectionDividerProps {
  icon?: string
  className?: string
}

export function FestiveSectionDivider({ icon = "✦", className = "" }: FestiveSectionDividerProps) {
  return (
    <div className={`relative py-8 ${className}`}>
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#ffd700]/40 to-transparent" />
      <div className="relative flex justify-center">
        <span className="bg-background px-4 text-2xl text-[#ffd700] animate-sparkle">{icon}</span>
      </div>
      {/* Decorative dots */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center gap-32 pointer-events-none">
        <div className="w-2 h-2 rounded-full bg-[#ffd700]/30 animate-pulse" />
        <div className="w-2 h-2 rounded-full bg-[#ffd700]/30 animate-pulse" style={{ animationDelay: "0.5s" }} />
      </div>
    </div>
  )
}
