"use client"

import Link from "next/link"
import { Car, Users, Cog, Wind, Shield, Radio, Wifi, Zap, Package } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"

export default function FleetClientPage() {
  const { t } = useLanguage()

  const vvipFleet = [
    {
      id: "land-cruiser-lc300-v6",
      name: "Land Cruiser LC 300 V6",
      image: "/land-cruiser-lc300-v6.jpg",
      imagePosition: "object-center",
      useContain: true,
      features: [
        { icon: Wind, labelKey: "climate", valueKey: "triZoneClimate" },
        { icon: Users, labelKey: "capacity", valueKey: "sevenSeater" },
        { icon: Cog, labelKey: "transmission", valueKey: "automatic" },
        { icon: Radio, labelKey: "entertainment", valueKey: "premiumAudio" },
        { icon: Shield, labelKey: "safety", valueKey: "advancedSafety" },
      ],
    },
    {
      id: "land-cruiser-250-series",
      name: "Land Cruiser 250 Series",
      image: "/land-cruiser-250-series.jpg",
      imagePosition: "object-bottom",
      features: [
        { icon: Wind, labelKey: "climate", valueKey: "dualClimateControl" },
        { icon: Users, labelKey: "capacity", valueKey: "sevenSeater" },
        { icon: Cog, labelKey: "transmission", valueKey: "automatic" },
        { icon: Radio, labelKey: "entertainment", valueKey: "premiumAudio" },
        { icon: Shield, labelKey: "safety", valueKey: "advancedSafety" },
      ],
    },
    {
      id: "mercedes-e-class",
      name: "Mercedes-Benz E-Class",
      image: "/mercedes-e-class-black.jpg",
      features: [
        { icon: Wind, labelKey: "climate", valueKey: "autoClimateControl" },
        { icon: Users, labelKey: "capacity", valueKey: "fiveSeater" },
        { icon: Cog, labelKey: "transmission", valueKey: "automatic" },
        { icon: Wifi, labelKey: "connectivity", valueKey: "bluetoothWifi" },
        { icon: Shield, labelKey: "safety", valueKey: "premiumSafety" },
      ],
    },
    
    {
      id: "toyota-rav4-2024",
      name: "Toyota RAV4 2024",
      image: "/toyota-rav4-2024.jpg",
      features: [
        { icon: Wind, labelKey: "climate", valueKey: "dualClimateControl" },
        { icon: Users, labelKey: "capacity", valueKey: "fiveSeater" },
        { icon: Cog, labelKey: "transmission", valueKey: "automatic" },
        { icon: Radio, labelKey: "entertainment", valueKey: "premiumAudio" },
        { icon: Shield, labelKey: "safety", valueKey: "advancedSafety" },
      ],
    },
    {
      id: "executive-van",
      name: "Executive Van",
      image: "/executive-van-hiace.jpg",
      isExecutiveVan: true,
      imagePosition: "object-bottom",
      features: [
        { icon: Wind, labelKey: "climate", valueKey: "rearClimateControl" },
        { icon: Users, labelKey: "capacity", valueKey: "fourteenSeater" },
        { icon: Cog, labelKey: "transmission", valueKey: "automatic" },
        { icon: Radio, labelKey: "entertainment", valueKey: "bluetoothAudio" },
        { icon: Wifi, labelKey: "connectivity", valueKey: "usbCharging" },
        { icon: Shield, labelKey: "safety", valueKey: "passengerSafety" },
      ],
    },
  ]

  const vipVehicles = [
    {
      id: "land-cruiser-200-series",
      name: "Land Cruiser 200 Series",
      image: "/land-cruiser-exterior-side-angle.jpg",
      features: [
        { icon: Wind, labelKey: "climate", valueKey: "dualClimateControl" },
        { icon: Users, labelKey: "capacity", valueKey: "sevenSeater" },
        { icon: Cog, labelKey: "transmission", valueKey: "automatic" },
        { icon: Radio, labelKey: "entertainment", valueKey: "premiumSound" },
        { icon: Shield, labelKey: "safety", valueKey: "advancedSafety" },
      ],
    },
    {
      id: "byd-atto-3",
      name: "BYD ATTO 3",
      image: "/byd-atto3.jpg",
      imagePosition: "object-bottom",
      features: [
        { icon: Zap, labelKey: "power", valueKey: "electric" },
        { icon: Wind, labelKey: "climate", valueKey: "climate" },
        { icon: Users, labelKey: "capacity", valueKey: "fiveSeater" },
        { icon: Radio, labelKey: "entertainment", valueKey: "premium" },
        { icon: Shield, labelKey: "safety", valueKey: "advancedSafety" },
      ],
    },
  ]

  const utilityVehicles = [
    {
      id: "toyota-hilux-2012",
      name: "Toyota Hilux 2012",
      image: "/toyota-hilux-double-cab.png",
      features: [
        { icon: Wind, labelKey: "climate", valueKey: "manualAC" },
        { icon: Users, labelKey: "capacity", valueKey: "fiveSeater" },
        { icon: Cog, labelKey: "transmission", valueKey: "manual" },
        { icon: Package, labelKey: "cargo", valueKey: "doubleCabPickup" },
        { icon: Shield, labelKey: "safety", valueKey: "durabilitySafety" },
      ],
    },
    {
      id: "coaster-bus",
      name: "Coaster Bus",
      image: "/coaster-bus.jpg",
      imagePosition: "object-center",
      useContain: true,
      features: [
        { icon: Users, labelKey: "capacity", valueKey: "thirtyThreeSeater" },
        { icon: Wind, labelKey: "climate", valueKey: "airConditioning" },
        { icon: Cog, labelKey: "transmission", valueKey: "manual" },
        { icon: Package, labelKey: "cargo", valueKey: "doubleCabPickup" },
        { icon: Shield, labelKey: "safety", valueKey: "passengerSafety" },
        { icon: Wifi, labelKey: "type", valueKey: "groupTransport" },
      ],
    },
    {
      id: "tunland-foton",
      name: "Tunland Foton",
      image: "/tunland-foton.jpg",
      imagePosition: "object-bottom",
      features: [
        { icon: Wind, labelKey: "climate", valueKey: "airConditioning" },
        { icon: Users, labelKey: "capacity", valueKey: "fiveSeater" },
        { icon: Cog, labelKey: "transmission", valueKey: "manual" },
        { icon: Package, labelKey: "cargo", valueKey: "doubleCabPickup" },
        { icon: Shield, labelKey: "safety", valueKey: "durabilitySafety" },
      ],
    },
  ]

  const getFeatureLabel = (labelKey: string) => {
    return t(`fleet.${labelKey}`) || labelKey
  }

  const getFeatureValue = (feature: { valueKey?: string; value?: string }) => {
    if (feature.value) return feature.value
    if (feature.valueKey) return t(`fleet.${feature.valueKey}`) || feature.valueKey
    return ""
  }

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
            {t("fleet.title")}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t("fleet.subtitle")}</p>
          <div className="w-24 h-1 bg-[#f39c12] mx-auto mt-6"></div>
        </div>

        {/* VVIP Class */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-2">{t("fleet.vvipClass")}</h2>
            <p className="text-gray-600">{t("fleet.vvipDesc")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vvipFleet.map((vehicle, index) => (
              <Link
                key={index}
                href={`/vehicles/${vehicle.id}`}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all hover:scale-105 group block"
              >
                <div
                  className={`aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden flex items-center justify-center ${vehicle.isExecutiveVan ? "executive-van-image" : ""}`}
                >
                  <img
                    src={vehicle.image || "/placeholder.svg"}
                    alt={vehicle.name}
                    className={`w-full h-full ${vehicle.useContain ? "object-contain p-2" : "object-cover"} ${vehicle.imagePosition || "object-center"} ${vehicle.useContain ? "group-hover:scale-100" : "group-hover:scale-105"} transition-transform duration-300`}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">{vehicle.name}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    {vehicle.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="p-2 bg-[#f39c12]/10 rounded-lg flex-shrink-0">
                          <feature.icon className="w-4 h-4 text-[#f39c12]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-gray-500 font-medium">{getFeatureLabel(feature.labelKey)}</p>
                          <p className="text-sm text-gray-900 font-semibold break-words">{getFeatureValue(feature)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-[#f39c12] hover:bg-[#e67e22] text-white">
                    {t("fleet.viewDetails")}
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* VIP Class */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-2">{t("fleet.vipClass")}</h2>
            <p className="text-gray-600">{t("fleet.vipDesc")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vipVehicles.map((vehicle, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all hover:scale-105 group"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden flex items-center justify-center">
                  <img
                    src={vehicle.image || "/placeholder.svg"}
                    alt={vehicle.name}
                    className={`w-full h-full object-cover ${vehicle.imagePosition || "object-center"} group-hover:scale-105 transition-transform duration-300`}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">{vehicle.name}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    {vehicle.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="p-2 bg-[#f39c12]/10 rounded-lg flex-shrink-0">
                          <feature.icon className="w-4 h-4 text-[#f39c12]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-gray-500 font-medium">{getFeatureLabel(feature.labelKey)}</p>
                          <p className="text-sm text-gray-900 font-semibold break-words">{getFeatureValue(feature)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link href="/booking">
                    <Button className="w-full bg-[#f39c12] hover:bg-[#e67e22] text-white">{t("fleet.bookNow")}</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Utility Vehicles */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-2">{t("fleet.utilityVehicles")}</h2>
            <p className="text-gray-600">{t("fleet.utilityDesc")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {utilityVehicles.map((vehicle, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all hover:scale-105 group"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden flex items-center justify-center">
                  <img
                    src={vehicle.image || "/placeholder.svg"}
                    alt={vehicle.name}
                    className={`w-full h-full object-cover ${vehicle.imagePosition || "object-center"} group-hover:scale-105 transition-transform duration-300`}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">{vehicle.name}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    {vehicle.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="p-2 bg-[#f39c12]/10 rounded-lg flex-shrink-0">
                          <feature.icon className="w-4 h-4 text-[#f39c12]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-gray-500 font-medium">{getFeatureLabel(feature.labelKey)}</p>
                          <p className="text-sm text-gray-900 font-semibold break-words">{getFeatureValue(feature)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link href="/booking">
                    <Button className="w-full bg-[#f39c12] hover:bg-[#e67e22] text-white">{t("fleet.bookNow")}</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Safari Cars */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-2">{t("fleet.safariCars")}</h2>
            <p className="text-gray-600">{t("fleet.safariDesc")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all hover:scale-105 group">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden flex items-center justify-center">
                <img
                  src="/safari-land-cruiser-with-pop-up-roof.jpg"
                  alt="Safari Land Cruiser"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Safari Land Cruiser</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-[#f39c12]/10 rounded-lg flex-shrink-0">
                      <Car className="w-4 h-4 text-[#f39c12]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-500 font-medium">{t("fleet.type")}</p>
                      <p className="text-sm text-gray-900 font-semibold break-words">{t("fleet.popUpRoof")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-[#f39c12]/10 rounded-lg flex-shrink-0">
                      <Users className="w-4 h-4 text-[#f39c12]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-500 font-medium">{t("fleet.capacity")}</p>
                      <p className="text-sm text-gray-900 font-semibold break-words">{t("fleet.sevenSeater")}</p>
                    </div>
                  </div>
                </div>
                <Link href="/booking">
                  <Button className="w-full bg-[#f39c12] hover:bg-[#e67e22] text-white">{t("fleet.bookSafari")}</Button>
                </Link>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all hover:scale-105 group">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden flex items-center justify-center">
                <img
                  src="/safari-4x4-vehicle-with-open-roof.jpg"
                  alt="Safari 4x4"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Safari 4x4</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-[#f39c12]/10 rounded-lg flex-shrink-0">
                      <Car className="w-4 h-4 text-[#f39c12]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-500 font-medium">{t("fleet.type")}</p>
                      <p className="text-sm text-gray-900 font-semibold break-words">{t("fleet.openRoof")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-[#f39c12]/10 rounded-lg flex-shrink-0">
                      <Users className="w-4 h-4 text-[#f39c12]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-500 font-medium">{t("fleet.capacity")}</p>
                      <p className="text-sm text-gray-900 font-semibold break-words">{t("fleet.sevenSeater")}</p>
                    </div>
                  </div>
                </div>
                <Link href="/booking">
                  <Button className="w-full bg-[#f39c12] hover:bg-[#e67e22] text-white">{t("fleet.bookSafari")}</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
