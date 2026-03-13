"use client"

import { useLanguage } from "@/lib/language-context"
import { AnimatedSection } from "./animated-section"
import { CTAButton } from "./cta-button"
import { Calendar, Car, CheckCircle, ArrowRight } from "lucide-react"

const steps = [
  {
    number: 1,
    titleKey: "howItWorks.chooseVehicle",
    descKey: "howItWorks.chooseVehicleDesc",
  },
  {
    number: 2,
    titleKey: "howItWorks.makeBooking",
    descKey: "howItWorks.makeBookingDesc",
  },
  {
    number: 3,
    titleKey: "howItWorks.confirmDeliver",
    descKey: "howItWorks.confirmDeliverDesc",
  },
]

export function HowItWorks() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#f39c12]/10 text-[#f39c12] text-sm font-semibold rounded-full mb-4">
            {t("howItWorks.sectionLabel")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t("howItWorks.title")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">{t("howItWorks.subtitle")}</p>
        </AnimatedSection>

        <div className="max-w-5xl mx-auto">
          {/* Desktop: Horizontal layout with dashed connector */}
          <div className="hidden md:block">
            <div className="grid grid-cols-3 gap-8 relative">
              {/* Dashed connector line */}
              <div className="absolute top-16 left-[20%] right-[20%] h-1 border-t-2 border-dashed border-[#f39c12]/40" />

              {steps.map((step, index) => (
                <AnimatedSection key={index} animation="fade-up" delay={index * 0.15}>
                  <div className="relative text-center">
                    {/* Large gold step number */}
                    <div className="text-8xl font-bold text-[#f39c12] opacity-20 mb-4">{step.number}</div>

                    {/* Content */}
                    <div className="relative -mt-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{t(step.titleKey)}</h3>
                      <p className="text-gray-600 leading-relaxed">{t(step.descKey)}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Mobile: Vertical layout with vertical connector */}
          <div className="md:hidden space-y-12">
            <div className="relative pl-12">
              {/* Vertical dashed connector line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-[#f39c12]/40" />

              {steps.map((step, index) => (
                <AnimatedSection key={index} animation="fade-up" delay={index * 0.15}>
                  <div className="relative">
                    {/* Step number circle */}
                    <div className="absolute -left-10 -top-2 w-8 h-8 rounded-full bg-[#f39c12] flex items-center justify-center text-white font-bold text-lg z-10">
                      {step.number}
                    </div>

                    {/* Content */}
                    <div className="pt-2">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{t(step.titleKey)}</h3>
                      <p className="text-gray-600 leading-relaxed">{t(step.descKey)}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <AnimatedSection animation="fade-up" delay={0.5} className="text-center mt-12">
          <CTAButton href="/booking" variant="primary" size="lg" showArrow>
            {t("howItWorks.startBooking")}
          </CTAButton>
        </AnimatedSection>
      </div>
    </section>
  )
}
