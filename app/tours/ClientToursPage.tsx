"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MapPin, Clock, Users, Star, Mountain, Palmtree, Crown, Castle, TreePine } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function ClientToursPage() {
  const { t } = useLanguage()

  const tourPackages = [
    {
      name: t("tours.gorillaTrekkingName"),
      location: t("tours.gorillaTrekkingLocation"),
      duration: t("tours.fullDay"),
      groupSize: `${t("tours.upTo")} 8 ${t("tours.people")}`,
      price: t("tours.contactForPricing"),
      image: "/gorilla-trekking-volcanoes-national-park.jpg",
      description: t("tours.gorillaTrekkingDesc"),
      highlights: [
        t("tours.gorillaTrekkingHighlight1"),
        t("tours.gorillaTrekkingHighlight2"),
        t("tours.gorillaTrekkingHighlight3"),
        t("tours.gorillaTrekkingHighlight4"),
        t("tours.gorillaTrekkingHighlight5"),
      ],
      icon: Mountain,
    },
    {
      name: t("tours.nyungweCanopyName"),
      location: t("tours.nyungweCanopyLocation"),
      duration: t("tours.halfDay"),
      groupSize: `${t("tours.upTo")} 12 ${t("tours.people")}`,
      price: t("tours.contactForPricing"),
      image: "/nyungwe.jpg",
      description: t("tours.nyungweCanopyDesc"),
      highlights: [
        t("tours.nyungweCanopyHighlight1"),
        t("tours.nyungweCanopyHighlight2"),
        t("tours.nyungweCanopyHighlight3"),
        t("tours.nyungweCanopyHighlight4"),
        t("tours.nyungweCanopyHighlight5"),
      ],
      icon: TreePine,
    },
    {
      name: t("tours.akageraSafariName"),
      location: t("tours.akageraSafariLocation"),
      duration: t("tours.multiDay"),
      groupSize: `${t("tours.upTo")} 7 ${t("tours.people")}`,
      price: t("tours.contactForPricing"),
      image: "/safari-land-cruiser-with-pop-up-roof.jpg",
      description: t("tours.akageraSafariDesc"),
      highlights: [
        t("tours.akageraSafariHighlight1"),
        t("tours.akageraSafariHighlight2"),
        t("tours.akageraSafariHighlight3"),
        t("tours.akageraSafariHighlight4"),
        t("tours.akageraSafariHighlight5"),
      ],
      icon: Palmtree,
    },
    {
      name: t("tours.kingsPalaceName"),
      location: t("tours.kingsPalaceLocation"),
      duration: t("tours.halfDay"),
      groupSize: `${t("tours.upTo")} 15 ${t("tours.people")}`,
      price: t("tours.contactForPricing"),
      image: "/palace.jpg",
      description: t("tours.kingsPalaceDesc"),
      highlights: [
        t("tours.kingsPalaceHighlight1"),
        t("tours.kingsPalaceHighlight2"),
        t("tours.kingsPalaceHighlight3"),
        t("tours.kingsPalaceHighlight4"),
        t("tours.kingsPalaceHighlight5"),
      ],
      icon: Crown,
    },
    {
      name: t("tours.bigogweName"),
      location: t("tours.bigogweLocation"),
      duration: t("tours.fullDay"),
      groupSize: `${t("tours.upTo")} 10 ${t("tours.people")}`,
      price: t("tours.contactForPricing"),
      image: "/bigogwe.jpg",
      description: t("tours.bigogweDesc"),
      highlights: [
        t("tours.bigogweHighlight1"),
        t("tours.bigogweHighlight2"),
        t("tours.bigogweHighlight3"),
        t("tours.bigogweHighlight4"),
        t("tours.bigogweHighlight5"),
      ],
      icon: Castle,
    },
  ]

  return (
    <div className="min-h-screen bg-white pt-24">
      <Header />
      <div className="container mx-auto px-4 py-12">
        {/* Tour Packages */}
        <div className="space-y-12">
          {tourPackages.map((tour, index) => (
            <div
              key={index}
              className={`bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all group ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } flex flex-col lg:flex`}
            >
              {/* Image Section */}
              <div className="lg:w-2/5 relative overflow-hidden">
                <div className="aspect-video lg:aspect-square bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6 group-hover:from-[#f39c12]/5 group-hover:to-[#f39c12]/10 transition-all h-full">
                  <img
                    src={tour.image || "/placeholder.svg"}
                    alt={tour.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute top-4 left-4 bg-[#f39c12] text-white px-4 py-2 rounded-full flex items-center gap-2">
                  <tour.icon className="w-5 h-5" />
                  <span className="font-semibold text-sm">{t("tours.featuredTour")}</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">{tour.name}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{tour.description}</p>

                  {/* Tour Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-[#f39c12]/10 rounded-lg flex-shrink-0">
                        <MapPin className="w-5 h-5 text-[#f39c12]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-500 font-medium">{t("tours.location")}</p>
                        <p className="text-sm text-gray-900 font-semibold break-words">{tour.location}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-[#f39c12]/10 rounded-lg flex-shrink-0">
                        <Clock className="w-5 h-5 text-[#f39c12]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-500 font-medium">{t("tours.duration")}</p>
                        <p className="text-sm text-gray-900 font-semibold break-words">{tour.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-[#f39c12]/10 rounded-lg flex-shrink-0">
                        <Users className="w-5 h-5 text-[#f39c12]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-500 font-medium">{t("tours.groupSize")}</p>
                        <p className="text-sm text-gray-900 font-semibold break-words">{tour.groupSize}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-[#f39c12]/10 rounded-lg flex-shrink-0">
                        <Star className="w-5 h-5 text-[#f39c12]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-500 font-medium">{t("tours.price")}</p>
                        <p className="text-sm text-gray-900 font-semibold break-words">{tour.price}</p>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold mb-3 text-gray-900">{t("tours.highlights")}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {tour.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-700">
                          <div className="w-2 h-2 bg-[#f39c12] rounded-full flex-shrink-0" />
                          <span className="text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/booking"
                    className="flex items-center justify-center flex-1 text-center bg-[#f39c12] text-white py-4 px-6 rounded-lg hover:bg-[#e08e0b] transition-all font-semibold text-base shadow-md hover:shadow-lg"
                  >
                    {t("tours.bookTour")}
                  </a>
                  <a
                    href="/contact"
                    className="flex items-center justify-center flex-1 text-center border-2 border-[#f39c12] text-[#f39c12] py-4 px-6 rounded-lg hover:bg-[#f39c12] hover:text-white transition-all font-semibold text-base"
                  >
                    {t("tours.inquire")}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">{t("tours.whyChooseTitle")}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t("tours.whyChooseDesc")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#f39c12] rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t("tours.expertGuides")}</h3>
              <p className="text-gray-600">{t("tours.expertGuidesDesc")}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#f39c12] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t("tours.smallGroups")}</h3>
              <p className="text-gray-600">{t("tours.smallGroupsDesc")}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#f39c12] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t("tours.allInclusive")}</h3>
              <p className="text-gray-600">{t("tours.allInclusiveDesc")}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
