"use client"

import { useLanguage } from "@/lib/language-context"

const steps = [
  {
    icon: "/calendar-clock-icon-orange.jpg",
    titleKey: "howItWorks.step1Title",
    descKey: "howItWorks.step1Desc",
  },
  {
    icon: "/car-selection-icon-orange.jpg",
    titleKey: "howItWorks.step2Title",
    descKey: "howItWorks.step2Desc",
  },
  {
    icon: "/checkmark-confirmation-icon-orange.jpg",
    titleKey: "howItWorks.step3Title",
    descKey: "howItWorks.step3Desc",
  },
]

export function HowItWorks() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-16">{t("howItWorks.title")}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="mb-6 flex justify-center">
                <img src={step.icon || "/placeholder.svg"} alt={t(step.titleKey)} className="w-20 h-20" />
              </div>
              <h3 className="text-lg font-bold text-black mb-3">{t(step.titleKey)}</h3>
              <p className="text-gray-600">{t(step.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
