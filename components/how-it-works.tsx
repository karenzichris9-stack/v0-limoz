"use client"

import { useLanguage } from "@/lib/language-context"
import { AnimatedSection } from "./animated-section"
import { CTAButton } from "./cta-button"
import { Calendar, Car, CheckCircle, ArrowRight } from "lucide-react"

const steps = [
  {
    icon: Calendar,
    titleKey: "howItWorks.step1Title",
    descKey: "howItWorks.step1Desc",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Car,
    titleKey: "howItWorks.step2Title",
    descKey: "howItWorks.step2Desc",
    color: "from-[#f39c12] to-[#e67e22]",
  },
  {
    icon: CheckCircle,
    titleKey: "howItWorks.step3Title",
    descKey: "howItWorks.step3Desc",
    color: "from-green-500 to-green-600",
  },
]

export function HowItWorks() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#f39c12]/10 text-[#f39c12] text-sm font-semibold rounded-full mb-4">
            Simple Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t("howItWorks.title")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Book your premium ride in just 3 simple steps</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-blue-500 via-[#f39c12] to-green-500" />

          {steps.map((step, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 0.15}>
              <div className="relative text-center group">
                {/* Step number */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center text-sm font-bold text-gray-500 z-10 group-hover:border-[#f39c12] group-hover:text-[#f39c12] transition-colors">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="mb-6 flex justify-center pt-6">
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}
                  >
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t(step.titleKey)}</h3>
                <p className="text-gray-600 leading-relaxed">{t(step.descKey)}</p>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-6">
                    <ArrowRight className="w-6 h-6 text-gray-300 rotate-90" />
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection animation="fade-up" delay={0.5} className="text-center mt-12">
          <CTAButton href="/booking" variant="primary" size="lg" showArrow>
            Start Booking Now
          </CTAButton>
        </AnimatedSection>
      </div>
    </section>
  )
}
