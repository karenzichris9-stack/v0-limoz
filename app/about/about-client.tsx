"use client"

import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"

export default function AboutClientPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
            {t("aboutPage.title")}
          </h1>
          <div className="w-24 h-1 bg-[#f39c12] mx-auto"></div>
        </div>

        {/* About Us Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-1 h-16 bg-[#f39c12] rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t("aboutPage.excellence")}</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">{t("aboutPage.excellenceText")}</p>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-[#f39c12]/5 to-white p-8 md:p-12 rounded-2xl shadow-sm border border-[#f39c12]/10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-1 h-16 bg-[#f39c12] rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t("aboutPage.whyUs")}</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">{t("aboutPage.whyUsText")}</p>
          </div>
        </section>

        {/* Reliability Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-1 h-16 bg-[#f39c12] rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t("aboutPage.reliability")}</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">{t("aboutPage.reliabilityText")}</p>
          </div>
        </section>

        {/* Our Service Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-[#f39c12]/5 to-white p-8 md:p-12 rounded-2xl shadow-sm border border-[#f39c12]/10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-1 h-16 bg-[#f39c12] rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t("aboutPage.service")}</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">{t("aboutPage.serviceText")}</p>
          </div>
        </section>

        {/* Our Fleet Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-1 h-16 bg-[#f39c12] rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t("aboutPage.fleet")}</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">{t("aboutPage.fleetText")}</p>
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
