"use client"

import { Check } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function WhyChoose() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="order-2 md:order-1">
            <img
              src="/car-trunk-open-with-luggage-aerial-view.jpg"
              alt="Car with luggage"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>

          {/* Text Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">{t("whyChoose.title")}</h2>
            <ul className="space-y-4">
              {t("whyChoose.reasons")
                .split(",")
                .map((reason: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#f39c12] flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 text-lg">{reason.trim()}</span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
