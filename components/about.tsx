"use client"

import { useLanguage } from "@/lib/language-context"

export function About() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">{t("about.title")}</h2>
            <div className="w-24 h-1 bg-[#f39c12] mb-8" />
            <p className="text-gray-700 leading-relaxed mb-4">{t("about.paragraph1")}</p>
            <p className="text-gray-700 leading-relaxed">{t("about.paragraph2")}</p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#f39c12] rounded-lg transform translate-x-4 translate-y-4" />
            <div className="relative bg-white p-4 rounded-lg">
              <img
                src="/black-toyota-land-cruiser-suv-front-three-quarter-.jpg"
                alt="Toyota Land Cruiser"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
