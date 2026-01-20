"use client"

import Link from "next/link"
import { Car, Users, Cog, Wind, Shield, Radio, Wifi, Zap, Package } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"

export default function FleetClientPage() {
  const { t } = useLanguage()

  const vvipFleet = [
    {
      id: "land-cruiser-txl-2023",
      name: "LANDCRUISER 200 SERIES", // Updated name from "Land Cruiser TXL 2023" to "LANDCRUISER 200 SERIES"
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
      id: "land-cruiser-lc300-v6",
      name: "Land Cruiser LC 300 V6",
      image: "/land-cruiser-lc300-v6.jpg",
      features: [
        { icon: Wind, labelKey: "climate", valueKey: "triZoneClimate" },
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
      id: "mercedes-s-class",
      name: "Mercedes-Benz S-Class",
      image: "/mercedes-s-class.jpg",
      features: [
        { icon: Wind, labelKey: "climate", valueKey: "fourZoneClimate" },
        { icon: Users, labelKey: "capacity", valueKey: "fiveSeater" },
        { icon: Cog, labelKey: "transmission", valueKey: "automatic" },
        { icon: Radio, labelKey: "entertainment", valueKey: "burmesterSound" },
        { icon: Shield, labelKey: "safety", valueKey: "executiveSafety" },
      ],
    },
    {
      id: "executive-van",
      name: "Executive Van",
      image: "/executive-van-hiace.jpg",
      isExecutiveVan: true,
      features: [
        { icon: Wind, labelKey: "climate", valueKey: "rearClimateControl" },
        { icon: Users, labelKey: "capacity", valueKey: "fourteenSeater" },
        { icon: Cog, labelKey: "transmission", valueKey: "automatic" },
        { icon: Radio, labelKey: "entertainment", valueKey: "bluetoothAudio" },
        { icon: Wifi, labelKey: "connectivity", valueKey: "usbCharging" },
        { icon: Shield, labelKey: "safety", valueKey: "passengerSafety" },
      ],
    },
    {
      id: "land-cruiser-gx-2023",
      name: "Land Cruiser GX 2023",
      image: "/land-cruiser-gx.jpg", // Updated to use new Land Cruiser GX image
      features: [
        { icon: Wind, labelKey: "climate", valueKey: "dualZoneClimate" },
        { icon: Users, labelKey: "capacity", valueKey: "sevenSeater" },
        { icon: Cog, labelKey: "transmission", valueKey: "automatic" },
        { icon: Radio, labelKey: "entertainment", valueKey: "advancedAudio" },
        { icon: Shield, labelKey: "safety", valueKey: "comprehensiveSafety" },
      ],
    },
    {
      id: "byd-atto-3",
      name: "BYD Atto 3",
      image: "/byd-atto-3.jpg",
      features: [
        { icon: Wind, labelKey: "climate", valueKey: "dualZoneClimate" },
        { icon: Users, labelKey: "capacity", valueKey: "fiveSeater" },
        { icon: Zap, labelKey: "range", valueKey: "range420km" },
        { icon: Cog, labelKey: "transmission", valueKey: "automatic" },
        { icon: Wifi, labelKey: "connectivity", valueKey: "smartConnect" },
        { icon: Shield, labelKey: "safety", valueKey: "evSafety" },
      ],
    },
  ]

  const vipVehicles = [
    {
      id: "mercedes-e-class",
      name: "Mercedes-Benz E-Class",
      image: "/merc-e-class.jpg",
      features: [
        { icon: Wind, labelKey: "climate", valueKey: "climate" },
        { icon: Users, labelKey: "capacity", valueKey: "fiveSeater" },
        { icon: Cog, labelKey: "transmission", valueKey: "automatic" },
        { icon: Radio, labelKey: "entertainment", valueKey: "infotainment" },
        { icon: Shield, labelKey: "safety", valueKey: "advancedSafety" },
      ],
    },
    {
      id: "byd-atto-3",
      name: "BYD ATTO 3",
      image: "/byd-atto3.jpg",
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
      features: [
        { icon: Users, labelKey: "capacity", valueKey: "thirtyThreeSeater" },
        { icon: Wind, labelKey: "climate", valueKey: "airConditioning" },
        { icon: Cog, labelKey: "transmission", valueKey: "manual" },
        { icon: Package, labelKey: "cargo", valueKey: "doubleCabPickup" },
        { icon: Shield, labelKey: "safety", valueKey: "passengerSafety" },
        { icon: Wifi, labelKey: "type", valueKey: "groupTransport" },
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
                  className={`aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4 group-hover:from-[#f39c12]/5 group-hover:to-[#f39c12]/10 transition-all ${vehicle.isExecutiveVan ? "executive-van-image" : ""}`}
                >
                  <img
                    src={vehicle.image || "/placeholder.svg"}
                    alt={vehicle.name}
                    className={`w-full h-full rounded-lg object-cover`}
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
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4 group-hover:from-[#f39c12]/5 group-hover:to-[#f39c12]/10 transition-all">
                  <img
                    src={vehicle.image || "/placeholder.svg"}
                    alt={vehicle.name}
                    className="w-full h-full rounded-lg object-cover"
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
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4 group-hover:from-[#f39c12]/5 group-hover:to-[#f39c12]/10 transition-all">
                  <img
                    src={vehicle.image || "/placeholder.svg"}
                    alt={vehicle.name}
                    className="w-full h-full object-cover rounded-lg"
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
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4 group-hover:from-[#f39c12]/5 group-hover:to-[#f39c12]/10 transition-all">
                <img
                  src="/safari-land-cruiser-with-pop-up-roof.jpg"
                  alt="Safari Land Cruiser"
                  className="w-full h-full object-cover rounded-lg"
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
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4 group-hover:from-[#f39c12]/5 group-hover:to-[#f39c12]/10 transition-all">
                <img
                  src="/safari-4x4-vehicle-with-open-roof.jpg"
                  alt="Safari 4x4"
                  className="w-full h-full object-cover rounded-lg"
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
