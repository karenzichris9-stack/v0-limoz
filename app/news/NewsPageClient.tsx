"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, User, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export default function NewsPageClient() {
  const { t } = useLanguage()

  const newsArticles = [
    {
      id: 1,
      slug: "limoz-rwanda-expands-fleet-2024",
      titleKey: "article1Title",
      excerptKey: "article1Excerpt",
      date: "March 15, 2024",
      dateFr: "15 Mars 2024",
      author: "Limoz Rwanda Team",
      authorFr: "Équipe Limoz Rwanda",
      image: "/brand-new-fleet-promo.png",
      categoryKey: "fleetUpdate",
    },
    {
      id: 2,
      slug: "supporting-rwanda-tourism-growth",
      titleKey: "article2Title",
      excerptKey: "article2Excerpt",
      date: "March 10, 2024",
      dateFr: "10 Mars 2024",
      author: "Limoz Rwanda Team",
      authorFr: "Équipe Limoz Rwanda",
      image: "/safari-land-cruiser-with-pop-up-roof.jpg",
      categoryKey: "companyNews",
    },
    {
      id: 3,
      slug: "corporate-partnership-leading-hotels",
      titleKey: "article3Title",
      excerptKey: "article3Excerpt",
      date: "February 28, 2024",
      dateFr: "28 Février 2024",
      author: "Limoz Rwanda Team",
      authorFr: "Équipe Limoz Rwanda",
      image: "/corporate-partnership-hotel.jpeg",
      categoryKey: "partnership",
    },
    {
      id: 4,
      slug: "24-7-service-excellence-award",
      titleKey: "article4Title",
      excerptKey: "article4Excerpt",
      date: "February 20, 2024",
      dateFr: "20 Février 2024",
      author: "Limoz Rwanda Team",
      authorFr: "Équipe Limoz Rwanda",
      image: "/service-excellence-hilux.png",
      categoryKey: "awards",
    },
    {
      id: 5,
      slug: "new-safari-experience-packages",
      titleKey: "article5Title",
      excerptKey: "article5Excerpt",
      date: "February 15, 2024",
      dateFr: "15 Février 2024",
      author: "Limoz Rwanda Team",
      authorFr: "Équipe Limoz Rwanda",
      image: "/safari-4x4-vehicle-with-open-roof.jpg",
      categoryKey: "services",
    },
    {
      id: 6,
      slug: "community-engagement-initiative",
      titleKey: "article6Title",
      excerptKey: "article6Excerpt",
      date: "January 30, 2024",
      dateFr: "30 Janvier 2024",
      author: "Limoz Rwanda Team",
      authorFr: "Équipe Limoz Rwanda",
      image: "/community-bus.jpg",
      categoryKey: "community",
    },
  ]

  const incomingFleet = [
    {
      nameKey: "incomingVehicle1Name",
      image: "/toyota-land-cruiser-txl-luxury-suv.jpg",
      expectedArrival: "May 2024",
      expectedArrivalFr: "Mai 2024",
      descriptionKey: "incomingVehicle1Desc",
      classKey: "vvipClass",
    },
    {
      nameKey: "incomingVehicle2Name",
      image: "/toyota-land-cruiser-lc-300-series-suv.jpg",
      expectedArrival: "June 2024",
      expectedArrivalFr: "Juin 2024",
      descriptionKey: "incomingVehicle2Desc",
      classKey: "vipClass",
    },
  ]

  const { language } = useLanguage()
  const isFrench = language === "fr"

  return (
    <div className="min-h-screen bg-white pt-24">
      <Header />
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
            {t("news.title")}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t("news.subtitle")}</p>
          
        </div>

        <section className="mb-20">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            
          </div>
          <div className="text-center mt-8">
            
          </div>
        </section>

        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              
              
              
            </div>
            
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {incomingFleet.map((vehicle, index) => (
              null
            ))}
          </div>
        </section>

        {/* Featured Article */}
        <div className="mb-16">
          <Link
            href={`/news/${newsArticles[0].slug}`}
            className="block bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all group"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="aspect-video md:aspect-square relative overflow-hidden">
                <img
                  src={newsArticles[0].image || "/placeholder.svg"}
                  alt={t(`news.${newsArticles[0].titleKey}`)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#f39c12] text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {t("news.featured")}
                  </span>
                </div>
              </div>
              <div className="p-8 md:p-12 text-white">
                <span className="text-[#f39c12] font-semibold text-sm uppercase tracking-wide">
                  {t(`news.${newsArticles[0].categoryKey}`)}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 group-hover:text-[#f39c12] transition-colors">
                  {t(`news.${newsArticles[0].titleKey}`)}
                </h2>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">{t(`news.${newsArticles[0].excerptKey}`)}</p>
                <div className="flex items-center gap-6 text-sm text-gray-400 mb-8">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{isFrench ? newsArticles[0].dateFr : newsArticles[0].date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{isFrench ? newsArticles[0].authorFr : newsArticles[0].author}</span>
                  </div>
                </div>
                <div className="bg-[#f39c12] text-white px-8 py-3 rounded-lg group-hover:bg-[#e08e0b] transition-all font-semibold inline-flex items-center gap-2">
                  {t("news.readFull")}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.slice(1).map((article) => (
            <Link
              key={article.id}
              href={`/news/${article.slug}`}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all hover:scale-105 group block"
            >
              <div className="aspect-video relative overflow-hidden bg-gray-100">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={t(`news.${article.titleKey}`)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
                    {t(`news.${article.categoryKey}`)}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#f39c12] transition-colors">
                  {t(`news.${article.titleKey}`)}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{t(`news.${article.excerptKey}`)}</p>
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{isFrench ? article.dateFr : article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    <span>{isFrench ? article.authorFr : article.author}</span>
                  </div>
                </div>
                <div className="text-[#f39c12] font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  {t("news.readMore")}
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-20 bg-gradient-to-r from-[#f39c12] to-[#e08e0b] rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("news.stayUpdated")}</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">{t("news.newsletterDesc")}</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder={t("news.emailPlaceholder")}
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition-all font-semibold whitespace-nowrap">
              {t("news.subscribe")}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
