"use client"

import { Check, Shield, Clock, Award, Headphones } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { AnimatedSection } from "./animated-section"

export function WhyChoose() {
  const { t } = useLanguage()

  const features = [
    { icon: Shield, title: "Fully Insured", desc: "Complete coverage for peace of mind" },
    { icon: Clock, title: "24/7 Service", desc: "Available whenever you need us" },
    { icon: Award, title: "Premium Fleet", desc: "Well-maintained luxury vehicles" },
    { icon: Headphones, title: "Expert Support", desc: "Professional assistance always" },
  ]

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <AnimatedSection animation="fade-right" className="order-2 md:order-1">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#ffd700]/20">
                <img
                  src="/car-trunk-open-with-luggage-aerial-view.jpg"
                  alt="Car with luggage"
                  className="w-full h-auto"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f23]/60 to-transparent" />
              </div>

              {/* Floating card - New Year gold theme */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#ffd700] to-[#f7e7ce] text-[#0f0f23] p-6 rounded-xl shadow-xl border border-[#ffd700]/30">
                <p className="text-4xl font-bold">4.9</p>
                <div className="flex gap-1 my-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current text-[#0f0f23]" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm opacity-80">Customer Rating</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Text Content */}
          <AnimatedSection animation="fade-left" className="order-1 md:order-2">
            <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#ffd700]/10 to-[#f7e7ce]/20 text-[#0f0f23] text-sm font-semibold rounded-full mb-4 border border-[#ffd700]/20">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f0f23] mb-8 leading-tight">{t("whyChoose.title")}</h2>

            {/* Feature grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <AnimatedSection key={index} animation="fade-up" delay={index * 0.1}>
                  <div className="group p-4 rounded-xl bg-gradient-to-br from-[#f7e7ce]/10 to-white border border-[#ffd700]/10 hover:border-[#ffd700]/30 hover:shadow-lg hover:shadow-[#ffd700]/10 transition-all duration-300 cursor-default">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#ffd700]/10 to-[#f7e7ce]/20 rounded-lg flex items-center justify-center mb-3 group-hover:from-[#ffd700] group-hover:to-[#f7e7ce] transition-all duration-300 border border-[#ffd700]/20">
                      <feature.icon className="w-6 h-6 text-[#ffd700] group-hover:text-[#0f0f23] transition-colors duration-300" />
                    </div>
                    <h3 className="font-semibold text-[#0f0f23] mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-500">{feature.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Reasons list */}
            <ul className="space-y-3">
              {t("whyChoose.reasons")
                .split(",")
                .slice(0, 4)
                .map((reason: string, index: number) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#ffd700] to-[#f7e7ce] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform shadow-sm">
                      <Check className="w-4 h-4 text-[#0f0f23]" />
                    </div>
                    <span className="text-gray-700">{reason.trim()}</span>
                  </li>
                ))}
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
