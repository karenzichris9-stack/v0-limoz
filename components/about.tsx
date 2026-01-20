"use client"

import { useLanguage } from "@/lib/language-context"
import { AnimatedSection } from "./animated-section"
import { CTAButton } from "./cta-button"
import { CheckCircle, Sparkles } from "lucide-react"

export function About() {
  const { t } = useLanguage()

  const highlights = ["Professional chauffeurs", "Luxury fleet", "24/7 availability", "Competitive rates"]

  return (
    <section className="py-20 bg-gradient-to-b from-[#f7e7ce]/20 via-white to-white overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 text-[#ffd700]/20 text-6xl animate-sparkle pointer-events-none">✦</div>
      <div
        className="absolute bottom-20 left-10 text-[#ffd700]/20 text-4xl animate-sparkle pointer-events-none"
        style={{ animationDelay: "1s" }}
      >
        ✦
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <AnimatedSection animation="fade-right">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#ffd700]/10 to-[#f7e7ce]/20 text-[#0f0f23] text-sm font-semibold rounded-full mb-4 border border-[#ffd700]/20">
                <Sparkles className="w-4 h-4 text-[#ffd700]" />
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0f0f23] mb-6 leading-tight">{t("about.title")}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#ffd700] to-[#f7e7ce] mb-8 rounded-full" />
              <p className="text-gray-600 leading-relaxed mb-4 text-lg">{t("about.paragraph1")}</p>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">{t("about.paragraph2")}</p>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-700 group">
                    <CheckCircle className="w-5 h-5 text-[#ffd700] flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <CTAButton href="/about" variant="primary" showArrow>
                Learn More About Us
              </CTAButton>
            </div>
          </AnimatedSection>

          {/* Image */}
          <AnimatedSection animation="fade-left" delay={0.2}>
            <div className="relative group">
              {/* Background decoration with New Year gold theme */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#ffd700] to-[#f7e7ce] rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
              <div className="absolute -inset-4 bg-gradient-to-br from-[#ffd700]/20 to-[#f7e7ce]/20 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500" />

              {/* Image container */}
              <div className="relative bg-white p-3 rounded-xl shadow-2xl overflow-hidden border border-[#ffd700]/20">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="/about-rav4-hero.jpg"
                    alt="Toyota RAV4 2024"
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Stats overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-[#ffd700]/20">
                  <div className="flex justify-between items-center">
                    <div className="text-center">
                      <p className="text-2xl font-bold bg-gradient-to-r from-[#ffd700] to-[#f7e7ce] bg-clip-text text-transparent">
                        10+
                      </p>
                      <p className="text-xs text-gray-500">Years</p>
                    </div>
                    <div className="w-px h-10 bg-[#ffd700]/30" />
                    <div className="text-center">
                      <p className="text-2xl font-bold bg-gradient-to-r from-[#ffd700] to-[#f7e7ce] bg-clip-text text-transparent">
                        50+
                      </p>
                      <p className="text-xs text-gray-500">Vehicles</p>
                    </div>
                    <div className="w-px h-10 bg-[#ffd700]/30" />
                    <div className="text-center">
                      <p className="text-2xl font-bold bg-gradient-to-r from-[#ffd700] to-[#f7e7ce] bg-clip-text text-transparent">
                        5K+
                      </p>
                      <p className="text-xs text-gray-500">Clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
