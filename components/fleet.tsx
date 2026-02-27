"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Link from "next/link"
import Image from "next/image"
import { Users, Cog, ArrowRight, Star } from "lucide-react"
import { AnimatedSection } from "./animated-section"
import { useLanguage } from "@/lib/language-context"

const vehicles = [
  {
    name: "Toyota RAV4 2024",
    type: "VVIP Class",
    image: "/toyota-rav4-2024.jpg",
    seats: 5,
    transmission: "Automatic",
    fuelType: "Petrol",
    driveType: "AWD",
    rating: 4.9,
    features: ["Air Conditioning", "GPS Navigation", "Bluetooth", "Leather Seats", "AWD", "Cruise Control"],
  },
  {
    name: "Land Cruiser LC 300 V6",
    type: "VVIP Class",
    image: "/lc300-interior-front-cabin.jpg",
    seats: 7,
    transmission: "Automatic",
    fuelType: "Petrol",
    driveType: "4WD",
    rating: 5.0,
    features: ["Air Conditioning", "GPS Navigation", "Bluetooth", "Premium Sound", "Sunroof", "Heated Seats"],
  },
  {
    name: "Land Cruiser 250 Series",
    type: "VVIP Class",
    image: "/land-cruiser-250-series.jpg",
    seats: 7,
    transmission: "Automatic",
    fuelType: "Diesel",
    driveType: "4WD",
    rating: 5.0,
    features: ["Air Conditioning", "GPS Navigation", "Bluetooth", "Premium Sound", "Panoramic Sunroof", "Entertainment Screens"],
  },
]

export function Fleet() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-[#f39c12]/10 text-[#f39c12] text-sm font-semibold rounded-full mb-4">
            {t("fleet.sectionLabel")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">{t("fleet.homeTitle")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            {t("fleet.homeSubtitle")}
          </p>
          <Button
            asChild
            variant="outline"
            className="border-[#f39c12] text-[#f39c12] hover:bg-[#f39c12] hover:text-white bg-transparent group"
          >
            <Link href="/fleet" className="flex items-center gap-2">
              {t("fleet.browseAll")}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {vehicles.map((vehicle, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 0.1}>
              <Dialog>
                <DialogTrigger asChild>
                  <div className="cursor-pointer group">
                    <Card className="overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#f39c12]/10 border-0 bg-white">
                      {/* Image container */}
                      <div className="relative overflow-hidden">
                        {/* Rating badge */}
                        <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full shadow-sm z-10">
                          <Star className="w-3.5 h-3.5 fill-[#f39c12] text-[#f39c12]" />
                          <span className="text-xs font-bold text-gray-900">{vehicle.rating}</span>
                        </div>

                        <div className="relative w-full aspect-[16/10]">
                          <Image
                            src={vehicle.image || "/placeholder.svg"}
                            alt={vehicle.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        </div>
                      </div>

                      <CardContent className="p-4 md:p-6">
                        <div className="mb-2">
                          <h3 className="text-lg md:text-xl font-bold text-black group-hover:text-[#f39c12] transition-colors">
                            {vehicle.name}
                          </h3>
                          <p className="text-[#f39c12] font-medium text-sm">{vehicle.type}</p>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-gray-600 mt-3 md:mt-4">
                          <div className="flex items-center gap-1.5">
                            <Users className="w-4 h-4 text-[#f39c12]" />
                            <span>{vehicle.seats} {t("fleet.seats")}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Cog className="w-4 h-4 text-[#f39c12]" />
                            <span>{vehicle.transmission}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-xs text-gray-400">
                            {vehicle.driveType}
                          </div>
                        </div>

                        {/* Always-visible CTA */}
                        <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-gray-100 flex items-center justify-between">
                          <span className="text-sm text-gray-500">{t("fleet.viewDetails")}</span>
                          <ArrowRight className="w-4 h-4 text-[#f39c12] group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">{vehicle.name}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6">
                    <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden">
                      <Image
                        src={vehicle.image || "/placeholder.svg"}
                        alt={vehicle.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 640px"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3">{t("fleet.vehicleFeatures")}</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {vehicle.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-gray-700">
                            <div className="w-2 h-2 bg-[#f39c12] rounded-full" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="w-5 h-5" />
                      <span className="font-semibold">{vehicle.seats} {t("fleet.passengerCapacity")}</span>
                    </div>
                    <Button asChild className="w-full bg-[#f39c12] hover:bg-[#e67e22] text-white">
                      <Link href="/booking">{t("fleet.bookThisVehicle")}</Link>
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
