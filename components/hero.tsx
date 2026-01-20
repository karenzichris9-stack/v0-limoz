"use client"

import { useLanguage } from "@/lib/language-context"
import { AnimatedSection } from "./animated-section"
import { CTAButton } from "./cta-button"
import { Shield, Clock, Star, CheckCircle, Phone, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"

export function Hero() {
  const { t } = useLanguage()
  const [visibleBadges, setVisibleBadges] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleBadges((prev) => (prev < 3 ? prev + 1 : prev))
    }, 300)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Video background */}
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DJI_20251020_114443_765%E2%80%AFAM_video-BzcXMHtGoQifH3iXlvQJySAQPtf2GQ.MP4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f23]/80 via-[#1a1a3e]/60 to-[#0f0f23]/90" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              background: i % 3 === 0 ? "#ffd700" : i % 3 === 1 ? "#f7e7ce" : "#4fc3f7",
              opacity: 0.4 + Math.random() * 0.3,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative min-h-screen flex flex-col justify-end pb-12 md:pb-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#ffd700]/20 to-[#f7e7ce]/20 backdrop-blur-sm border border-[#ffd700]/30">
              <Sparkles className="w-4 h-4 text-[#ffd700] animate-sparkle" />
              <span className="text-[#ffd700] font-semibold text-sm">Happy New Year 2026</span>
              <Sparkles className="w-4 h-4 text-[#ffd700] animate-sparkle" style={{ animationDelay: "0.3s" }} />
            </div>
          </AnimatedSection>

          {/* Hero text */}
          <AnimatedSection animation="fade-up" className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              {t("hero.welcome")}{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#ffd700] via-[#f7e7ce] to-[#ffd700] bg-clip-text text-transparent animate-gold-shimmer">
                  {t("hero.company")}
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5.5C47.6667 2.16667 141.4 -2.1 199 5.5"
                    stroke="#ffd700"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="animate-draw-line"
                  />
                </svg>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">{t("hero.tagline")}</p>
          </AnimatedSection>

          {/* Trust badges with stagger animation */}
          <AnimatedSection
            animation="fade-up"
            delay={0.2}
            className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8"
          >
            <div
              className={`flex items-center gap-2 text-white/90 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-[#ffd700]/20 transition-all duration-500 ${visibleBadges >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <Shield className="w-4 h-4 text-[#ffd700]" />
              <span className="text-sm font-medium">Fully Insured</span>
            </div>
            <div
              className={`flex items-center gap-2 text-white/90 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-[#ffd700]/20 transition-all duration-500 ${visibleBadges >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <Clock className="w-4 h-4 text-[#ffd700]" />
              <span className="text-sm font-medium">24/7 Service</span>
            </div>
            <div
              className={`flex items-center gap-2 text-white/90 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-[#ffd700]/20 transition-all duration-500 ${visibleBadges >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <Star className="w-4 h-4 text-[#ffd700]" />
              <span className="text-sm font-medium">4.9 Rating</span>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="scale" delay={0.3}>
            <div className="relative bg-gradient-to-br from-white/95 via-[#f7e7ce]/90 to-white/95 backdrop-blur-md py-8 px-6 md:px-12 rounded-2xl max-w-3xl mx-auto shadow-2xl border border-[#ffd700]/30 overflow-hidden">
              {/* Decorative corner sparkles */}
              <div className="absolute top-3 right-3 text-[#ffd700] opacity-50 animate-sparkle">✦</div>
              <div
                className="absolute bottom-3 left-3 text-[#ffd700] opacity-50 animate-sparkle"
                style={{ animationDelay: "1s" }}
              >
                ✦
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-[#0f0f23] mb-2">{t("hero.title")}</h2>
              <p className="text-[#1a1a3e]/80 mb-6 text-base md:text-lg">{t("hero.subtitle")}</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton href="/booking" variant="primary" size="lg" showArrow pulse>
                  {t("hero.carBooking")}
                </CTAButton>
                <CTAButton href="/tours-booking" variant="outline" size="lg" showArrow>
                  {t("hero.toursBooking")}
                </CTAButton>
              </div>

              {/* Value props */}
              <div className="mt-6 pt-6 border-t border-[#ffd700]/20 grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Professional Chauffeurs", "Airport Pickup", "Flexible Bookings", "Best Rates"].map((prop, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-[#1a1a3e]/80">
                    <CheckCircle className="w-4 h-4 text-[#ffd700] flex-shrink-0" />
                    <span>{prop}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Quick contact */}
          <AnimatedSection animation="fade-up" delay={0.5} className="mt-6 flex justify-center">
            <a
              href="tel:+250788318990"
              className="flex items-center gap-2 text-white/80 hover:text-[#ffd700] transition-colors group"
            >
              <div className="p-2 bg-white/10 rounded-full group-hover:bg-[#ffd700] group-hover:text-[#0f0f23] transition-colors border border-[#ffd700]/20">
                <Phone className="w-4 h-4" />
              </div>
              <span className="text-sm">Need help? Call +250 788 318 990</span>
            </a>
          </AnimatedSection>

          {/* Scroll indicator */}
          <AnimatedSection animation="fade-up" delay={0.6} className="mt-8 flex justify-center">
            <div className="flex flex-col items-center text-white/60 cursor-pointer hover:text-[#ffd700] transition-colors">
              <span className="text-xs uppercase tracking-widest mb-2">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-[#ffd700]/40 rounded-full flex justify-center pt-2">
                <div className="w-1.5 h-3 bg-[#ffd700] rounded-full animate-bounce" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
