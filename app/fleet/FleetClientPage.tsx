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
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-WrxsMDFksxi3P5qPvkrPk7pmDqVrIe.jpg",
      imagePosition: "object-center",
      features: [
        { icon: Wind, labelKey: "climate", valueKey: "dualClimateControl" },
        { icon: Users, labelKey: "capacity", valueKey: "fiveSeater" },
        { icon: Cog, labelKey: "transmission", valueKey: "automatic" },
        { icon: Radio, labelKey: "entertainment", valueKey: "premiumAudio" },
        { icon: Shield, labelKey: "safety", valueKey: "advancedSafety" },
        { icon: Wifi, labelKey: "connectivity", valueKey: "wifi" },
      ],
    },
    {
      id: "land-cruiser-250-series",
      name: "Land Cruiser 250 Series",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_1.JPG-Zi80ljBntElUSKTW4XNceq6YEPJuti.jpeg",
      imagePosition: "object-center",
      features: [
        { icon: Wind, labelKey: "climate", valueKey: "dualClimateControl" },
        { icon: Users, labelKey: "capacity", valueKey: "fiveSeater" },
        { icon: Cog, labelKey: "transmission", valueKey: "automatic" },
        { icon: Radio, labelKey: "entertainment", valueKey: "premiumAudio" },
        { icon: Shield, labelKey: "safety", valueKey: "advancedSafety" },
      ],
    },
    {
      id: "mercedes-e-class",
      name: "Mercedes-Benz E-Class",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_1.JPG-36G0tDy4DEWgLfAEmcizyNSBcMqqtX.jpeg",
      features: [
        { icon: Wind, labelKey: "climate", valueKey: "autoClimateControl" },
        { icon: Users, labelKey: "capacity", valueKey: "fiveSeater" },
        { icon: Cog, labelKey: "transmission", valueKey: "automatic" },
        { icon: Wifi, labelKey: "connectivity", valueKey: "bluetoothWifi" },
        { icon: Shield, labelKey: "safety", valueKey: "premiumSafety" },
        { icon: Wifi, labelKey: "connectivity", valueKey: "wifi" },
      ],
    },
    
    {
      id: "toyota-rav4-2024",
      name: "Toyota RAV4 2024",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_7.JPG-nZrGmqN07Kuhj9qDVHmgE4oowUjDvD.jpeg",
      features: [
        { icon: Wind, labelKey: "climate", valueKey: "dualClimateControl" },
        { icon: Users, labelKey: "capacity", valueKey: "fiveSeater" },
        { icon: Cog, labelKey: "transmission", valueKey: "automatic" },
        { icon: Radio, labelKey: "entertainment", valueKey: "premiumAudio" },
        { icon: Shield, labelKey: "safety", valueKey: "advancedSafety" },
        { icon: Wifi, labelKey: "connectivity", valueKey: "wifi" },
      ],
    },
    {
      id: "executive-van",
      name: "Executive Van",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.JPG-Ni0AiKCM6DsxBU8Yp0QDxbVOSEEWcv.jpeg",
      isExecutiveVan: true,
      imagePosition: "object-center",
      features: [
        { icon: Wind, labelKey: "climate", valueKey: "rearClimateControl" },
        { icon: Users, labelKey: "capacity", valueKey: "twelveSeater" },
        { icon: Cog, labelKey: "transmission", valueKey: "automatic" },
        { icon: Radio, labelKey: "entertainment", valueKey: "bluetoothAudio" },
        { icon: Wifi, labelKey: "connectivity", valueKey: "usbCharging" },
        { icon: Shield, labelKey: "safety", valueKey: "passengerSafety" },
        { icon: Wifi, labelKey: "connectivity", valueKey: "wifi" },
      ],
    },
  ]

  const vipVehicles = [
    {
      id: "land-cruiser-txl-2023",
      name: "Land Cruiser 200 Series",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_1.JPG-egc8KI38IiKSztE6aQiaGG6g6sgRhS.jpeg",
      imagePosition: "object-center",
      features: [
        { icon: Wind, labelKey: "climate", valueKey: "dualClimateControl" },
        { icon: Users, labelKey: "capacity", valueKey: "fiveSeater" },
        { icon: Cog, labelKey: "transmission", valueKey: "automatic" },
        { icon: Radio, labelKey: "entertainment", valueKey: "premiumSound" },
        { icon: Shield, labelKey: "safety", valueKey: "advancedSafety" },
        { icon: Wifi, labelKey: "connectivity", valueKey: "wifi" },
      ],
    },
    {
      id: "byd-atto-3",
      name: "BYD ATTO 3",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-RrbGvsNwRaf1If4M9dIausD5EngzFg.jpg",
      imagePosition: "object-center",
      features: [
        { icon: Zap, labelKey: "power", valueKey: "electric" },
        { icon: Wind, labelKey: "climate", valueKey: "climate" },
        { icon: Users, labelKey: "capacity", valueKey: "fiveSeater" },
        { icon: Radio, labelKey: "entertainment", valueKey: "premium" },
        { icon: Shield, labelKey: "safety", valueKey: "advancedSafety" },
        { icon: Wifi, labelKey: "connectivity", valueKey: "wifi" },
      ],
    },
    {
      id: "byd-dolphin",
      name: "BYD Dolphin",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_1.JPG-WZKPPE161FNsLy0SHrcuxpY19ZEoLJ.jpeg",
      features: [
        { icon: Zap, labelKey: "power", valueKey: "electric" },
        { icon: Wind, labelKey: "climate", valueKey: "dualClimateControl" },
        { icon: Users, labelKey: "capacity", valueKey: "fiveSeater" },
        { icon: Radio, labelKey: "entertainment", valueKey: "premium" },
        { icon: Shield, labelKey: "safety", valueKey: "advancedSafety" },
        { icon: Wifi, labelKey: "connectivity", valueKey: "wifi" },
      ],
    },
  ]

  const utilityVehicles = [
    {
      id: "coaster-bus",
      name: "Coaster Bus",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.JPG-7CQAadPk36u5ZkCBP7V5TTthzmc1ce.jpeg",
      imagePosition: "object-center",
      useContain: true,
      features: [
        { icon: Users, labelKey: "capacity", valueKey: "thirtyTwoSeater" },
        { icon: Wind, labelKey: "climate", valueKey: "airConditioning" },
        { icon: Cog, labelKey: "transmission", valueKey: "manual" },
        { icon: Package, labelKey: "cargo", valueKey: "doubleCabPickup" },
        { icon: Shield, labelKey: "safety", valueKey: "passengerSafety" },
        { icon: Wifi, labelKey: "connectivity", valueKey: "wifi" },
      ],
    },
    {
      id: "tunland-foton",
      name: "Tunland Foton",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ICONNECTSOLUTIONS_132.JPG-VueGBiFJ0vw1jeVjHyPUP8x9hZFUPd.jpeg",
      imagePosition: "object-center",
      features: [
        { icon: Wind, labelKey: "climate", valueKey: "airConditioning" },
        { icon: Users, labelKey: "capacity", valueKey: "fiveSeater" },
        { icon: Cog, labelKey: "transmission", valueKey: "manual" },
        { icon: Package, labelKey: "cargo", valueKey: "doubleCabPickup" },
        { icon: Shield, labelKey: "safety", valueKey: "durabilitySafety" },
        { icon: Wifi, labelKey: "connectivity", valueKey: "wifi" },
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
        <section className="mb-32">
          <div className="mb-16 pl-6 border-l-4 border-[#E8A020]">
            <h2 className="text-4xl font-bold mb-2 text-gray-900">{t("fleet.vvipClass")}</h2>
            <p className="text-gray-600 text-lg">{t("fleet.vvipDesc")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vvipFleet.map((vehicle, index) => (
              <Link
                key={index}
                href={`/vehicles/${vehicle.id}`}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all hover:scale-105 group block h-full flex flex-col"
              >
                <div className="h-72 w-full overflow-hidden flex items-center justify-center flex-shrink-0">
                  <img
                    src={vehicle.image || "/placeholder.svg"}
                    alt={vehicle.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{vehicle.name}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 flex-grow">
                    {vehicle.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
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
                  <Button className="w-full bg-[#f39c12] hover:bg-[#e67e22] text-white mt-auto">
                    {t("fleet.viewDetails")}
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* VIP Class */}
        <section className="mb-32">
          <div className="mb-16 pl-6 border-l-4 border-[#E8A020]">
            <h2 className="text-4xl font-bold mb-2 text-gray-900">{t("fleet.vipClass")}</h2>
            <p className="text-gray-600 text-lg">{t("fleet.vipDesc")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vipVehicles.map((vehicle, index) => (
              <Link
                key={index}
                href={`/vehicles/${vehicle.id}`}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all hover:scale-105 group block h-full flex flex-col"
              >
                <div className="h-72 w-full overflow-hidden flex items-center justify-center flex-shrink-0">
                  <img
                    src={vehicle.image || "/placeholder.svg"}
                    alt={vehicle.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{vehicle.name}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 flex-grow">
                    {vehicle.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
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
                  <Button className="w-full bg-[#f39c12] hover:bg-[#e67e22] text-white mt-auto">
                    {t("fleet.viewDetails")}
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Utility Vehicles */}
        <section className="mb-32">
          <div className="mb-16 pl-6 border-l-4 border-[#E8A020]">
            <h2 className="text-4xl font-bold mb-2 text-gray-900">{t("fleet.utilityVehicles")}</h2>
            <p className="text-gray-600 text-lg">{t("fleet.utilityDesc")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {utilityVehicles.map((vehicle, index) => (
              <Link
                key={index}
                href={`/vehicles/${vehicle.id}`}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all hover:scale-105 group block h-full flex flex-col"
              >
                <div className="h-72 w-full overflow-hidden flex items-center justify-center flex-shrink-0">
                  <img
                    src={vehicle.image || "/placeholder.svg"}
                    alt={vehicle.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{vehicle.name}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 flex-grow">
                    {vehicle.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
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
                  <Button className="w-full bg-[#f39c12] hover:bg-[#e67e22] text-white mt-auto">
                    {t("fleet.viewDetails")}
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Safari Cars */}
        <section>
          <div className="mb-16 pl-6 border-l-4 border-[#E8A020]">
            <h2 className="text-4xl font-bold mb-2 text-gray-900">{t("fleet.safariCars")}</h2>
            <p className="text-gray-600 text-lg">{t("fleet.safariDesc")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link
              href="/booking"
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all hover:scale-105 group h-full flex flex-col"
            >
              <div className="h-72 w-full overflow-hidden flex items-center justify-center flex-shrink-0">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-15%20at%2016.16.31%20%281%29-80K5JdDdAmWhM27uGDcN4eqvJHM9S9.jpeg"
                  alt="Land Cruiser 70 Series Safari"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Land Cruiser 70 Series</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 flex-grow">
                  <div className="flex items-start gap-2">
                    <div className="p-2 bg-[#f39c12]/10 rounded-lg flex-shrink-0">
                      <Users className="w-4 h-4 text-[#f39c12]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-500 font-medium">{t("fleet.capacity")}</p>
                      <p className="text-sm text-gray-900 font-semibold break-words">4 Seater</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="p-2 bg-[#f39c12]/10 rounded-lg flex-shrink-0">
                      <Wind className="w-4 h-4 text-[#f39c12]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-500 font-medium">{t("fleet.climate")}</p>
                      <p className="text-sm text-gray-900 font-semibold break-words">Air Conditioning</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="p-2 bg-[#f39c12]/10 rounded-lg flex-shrink-0">
                      <Cog className="w-4 h-4 text-[#f39c12]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-500 font-medium">{t("fleet.transmission")}</p>
                      <p className="text-sm text-gray-900 font-semibold break-words">Manual</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="p-2 bg-[#f39c12]/10 rounded-lg flex-shrink-0">
                      <Wifi className="w-4 h-4 text-[#f39c12]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-500 font-medium">{t("fleet.connectivity")}</p>
                      <p className="text-sm text-gray-900 font-semibold break-words">WiFi & Bluetooth</p>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-[#f39c12] hover:bg-[#e67e22] text-white mt-auto">{t("fleet.bookSafari")}</Button>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
