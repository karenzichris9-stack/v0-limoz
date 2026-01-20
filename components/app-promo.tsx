"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function AppPromo() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="flex justify-center">
            <img src="/mobile-phone-app-mockup.jpg" alt="Limoz App" className="w-64 h-auto" />
          </div>

          {/* Content */}
          <div>
            <p className="text-[#f39c12] font-semibold mb-2">{t("appPromo.downloadApp")}</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t("appPromo.title")}</h2>
            <ul className="space-y-3 mb-8">
              {t("appPromo.features")
                .split(",")
                .map((feature: string, index: number) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#f39c12] rounded-full" />
                    <span className="text-lg">{feature.trim()}</span>
                  </li>
                ))}
            </ul>
            <div className="flex gap-4">
              <Button className="bg-[#f39c12] hover:bg-[#e67e22] text-white px-8 py-6" disabled>
                {t("appPromo.comingSoon")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
