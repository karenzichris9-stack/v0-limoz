"use client"

import { Shield, Award, Users, Star } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { AnimatedSection } from "./animated-section"

export function TrustIndicators() {
  const { t } = useLanguage()

  const indicators = [
    { icon: Shield, label: "Licensed & Insured", value: "100%" },
    { icon: Award, label: "Years Experience", value: "10+" },
    { icon: Users, label: "Happy Clients", value: "5000+" },
    { icon: Star, label: "Average Rating", value: "4.9" },
  ]

  return (
    <div className="relative bg-gradient-to-r from-[#0f0f23] via-[#1a1a3e] to-[#0f0f23] py-8 overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#ffd700] rounded-full animate-twinkle-star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: 0.5,
            }}
          />
        ))}
      </div>

      {/* Top gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#ffd700]/50 to-transparent" />

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {indicators.map((item, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 0.1}>
              <div className="flex items-center gap-3 text-white group cursor-default">
                <div className="p-3 bg-[#ffd700]/10 rounded-xl border border-[#ffd700]/20 group-hover:bg-[#ffd700]/20 group-hover:border-[#ffd700]/40 transition-all duration-300">
                  <item.icon className="w-5 h-5 text-[#ffd700]" />
                </div>
                <div>
                  <p className="text-2xl font-bold bg-gradient-to-r from-[#ffd700] to-[#f7e7ce] bg-clip-text text-transparent">
                    {item.value}
                  </p>
                  <p className="text-xs text-gray-400">{item.label}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Bottom gold accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#ffd700]/50 to-transparent" />
    </div>
  )
}
