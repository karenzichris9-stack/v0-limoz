"use client"

import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import { Building2, Eye, Target } from "lucide-react"
import Image from "next/image"

export default function AboutClientPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Full-width Fleet Banner with Headline Overlay */}
      <div className="relative w-full h-96 md:h-[500px] -mt-20 pt-20">
        <Image
          src="/lc300-real.jpg"
          alt="Limoz Rwanda Fleet"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f23] via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#ffd700] text-center text-shadow-lg">
            {t("aboutPage.title")}
          </h1>
        </div>
      </div>

      {/* 4-Stat Counter Row */}
      <div className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#ffd700] mb-2 drop-shadow-lg">50+</div>
              <p className="text-white text-sm md:text-base font-medium drop-shadow-lg">{t("aboutPage.statsVehicles") || "Vehicles"}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#ffd700] mb-2 drop-shadow-lg">5+</div>
              <p className="text-white text-sm md:text-base font-medium drop-shadow-lg">{t("aboutPage.statsYears") || "Years Experience"}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#ffd700] mb-2 drop-shadow-lg">1000+</div>
              <p className="text-white text-sm md:text-base font-medium drop-shadow-lg">{t("aboutPage.statsClients") || "Happy Clients"}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#ffd700] mb-2 drop-shadow-lg">24/7</div>
              <p className="text-white text-sm md:text-base font-medium drop-shadow-lg">{t("aboutPage.statsSupport") || "Support"}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-6xl">

        {/* Two-Column Our Story Section */}
        <section className="mb-20 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Column */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{t("aboutPage.excellence")}</h2>
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">{t("aboutPage.excellenceText")}</p>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t("aboutPage.whyUs")}</h3>
                  <p className="text-gray-700 leading-relaxed">{t("aboutPage.whyUsText")}</p>
                </div>
              </div>
            </div>

            {/* Image Column */}
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
              
            </div>
          </div>
        </section>

        {/* Part of MFK Group Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2c4a6e] rounded-2xl p-8 md:p-12">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Building2 className="w-8 h-8 text-white/80" />
              </div>
              <div>
                <p className="text-white/60 text-sm font-medium tracking-wider uppercase mb-2">
                  {t("aboutPage.mfkPartOf")}
                </p>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{t("aboutPage.mfkGroup")}</h3>
                <p className="text-white/80 text-lg leading-relaxed">{t("aboutPage.mfkText")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-[#f39c12]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Eye className="w-7 h-7 text-[#f39c12]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t("aboutPage.vision")}</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">{t("aboutPage.visionText")}</p>
          </div>

          <div className="bg-gradient-to-br from-[#f39c12]/5 to-white p-8 md:p-10 rounded-2xl shadow-sm border border-[#f39c12]/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-[#1e3a5f]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Target className="w-7 h-7 text-[#1e3a5f]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t("aboutPage.mission")}</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">{t("aboutPage.missionText")}</p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16 bg-gradient-to-r from-[#f39c12] to-[#e67e22] rounded-2xl shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white px-4">{t("aboutPage.cta")}</h2>
          <a
            href="/contact"
            className="inline-block bg-white text-[#f39c12] px-10 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold text-lg shadow-md hover:shadow-xl transform hover:scale-105"
          >
            {t("aboutPage.ctaButton")}
          </a>
        </section>
      </div>
      <Footer />
    </div>
  )
}
