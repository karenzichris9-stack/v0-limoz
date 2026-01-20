"use client"

import { useLanguage } from "@/lib/language-context"
import { AnimatedSection } from "./animated-section"
import { CTAButton } from "./cta-button"
import { Smartphone, Bell, MapPin, CreditCard, Check } from "lucide-react"

export function AppPromo() {
  const { t } = useLanguage()

  const features = [
    { icon: Bell, text: "Real-time notifications" },
    { icon: MapPin, text: "Live tracking" },
    { icon: CreditCard, text: "Secure payments" },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Phone mockup */}
          <AnimatedSection animation="fade-right" className="flex justify-center">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-[#f39c12]/20 blur-3xl rounded-full" />

              {/* Phone */}
              <div className="relative">
                <img
                  src="/mobile-phone-app-mockup.jpg"
                  alt="Limoz App"
                  className="w-64 h-auto relative z-10 drop-shadow-2xl"
                />

                {/* Floating feature cards */}
                <div className="absolute -right-8 top-1/4 bg-white text-gray-900 p-3 rounded-lg shadow-xl animate-bounce-slow">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-medium">Booking Confirmed</span>
                  </div>
                </div>

                <div
                  className="absolute -left-8 bottom-1/3 bg-white text-gray-900 p-3 rounded-lg shadow-xl animate-bounce-slow"
                  style={{ animationDelay: "0.5s" }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#f39c12] rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-medium">Driver nearby</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection animation="fade-left">
            <span className="inline-block px-4 py-1.5 bg-[#f39c12]/20 text-[#f39c12] text-sm font-semibold rounded-full mb-4">
              {t("appPromo.downloadApp")}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{t("appPromo.title")}</h2>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-[#f39c12]/20 rounded-xl flex items-center justify-center group-hover:bg-[#f39c12] transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-[#f39c12] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-lg text-white/90">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* App store buttons placeholder */}
            <div className="flex flex-wrap gap-4">
              <CTAButton variant="primary" size="lg" disabled>
                {t("appPromo.comingSoon")}
              </CTAButton>
            </div>

            {/* Coming soon badge */}
            <p className="mt-4 text-white/60 text-sm flex items-center gap-2">
              <Smartphone className="w-4 h-4" />
              Available soon on iOS and Android
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
