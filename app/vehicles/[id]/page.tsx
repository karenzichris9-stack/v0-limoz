"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getVehicleById } from "@/lib/vehicle-data"
import { notFound } from "next/navigation"
import { Car, Users, Cog, Gauge, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { VehicleImageGallery } from "@/components/vehicle-image-gallery"
import { useLanguage } from "@/lib/language-context"
import { useParams } from "next/navigation"

export default function VehicleDetailPage() {
  const params = useParams()
  const id = params.id as string
  const vehicle = getVehicleById(id)
  const { t } = useLanguage()

  if (!vehicle) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white pt-24">
      <Header />
      <div className="container mx-auto px-4 py-12">
        {/* Vehicle Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-[#f39c12] text-white px-4 py-1 rounded-full text-sm font-semibold">
              {vehicle.class} {t("vehicleDetails.class")}
            </span>
            {vehicle.available ? (
              <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" />
                {t("vehicleDetails.availableNow")}
              </span>
            ) : (
              <span className="bg-red-100 text-red-700 px-4 py-1 rounded-full text-sm font-semibold">
                {t("vehicleDetails.currentlyBooked")}
              </span>
            )}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{vehicle.name}</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl">{vehicle.description}</p>
        </div>

        <VehicleImageGallery vehicleName={vehicle.name} mainImage={vehicle.image} images={vehicle.images} />

        {/* Video Section */}
        {vehicle.videos && vehicle.videos.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">{t("vehicleDetails.vehicleTour")}</h2>
            <div className="aspect-video bg-black rounded-2xl overflow-hidden relative">
              <video controls className="w-full h-full" poster={vehicle.image || "/placeholder.svg"}>
                <source src={vehicle.videos[0]} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Specs & Features */}
          <div className="lg:col-span-2 space-y-12">
            {/* Specifications */}
            <div>
              <h2 className="text-3xl font-bold mb-6">{t("vehicleDetails.specifications")}</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="p-3 bg-[#f39c12] rounded-lg">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-medium">{t("vehicleDetails.passengerCapacity")}</p>
                    <p className="text-xl font-bold text-gray-900">
                      {vehicle.specs.seats} {t("vehicleDetails.seats")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="p-3 bg-[#f39c12] rounded-lg">
                    <Cog className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-medium">{t("vehicleDetails.transmission")}</p>
                    <p className="text-xl font-bold text-gray-900">{vehicle.specs.transmission}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="p-3 bg-[#f39c12] rounded-lg">
                    <Gauge className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-medium">{t("vehicleDetails.fuelType")}</p>
                    <p className="text-xl font-bold text-gray-900">{vehicle.specs.fuelType}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="p-3 bg-[#f39c12] rounded-lg">
                    <Car className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-medium">{t("vehicleDetails.driveType")}</p>
                    <p className="text-xl font-bold text-gray-900">{vehicle.specs.driveType}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold mb-6">{t("vehicleDetails.premiumFeatures")}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {vehicle.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-[#f39c12] flex-shrink-0" />
                    <span className="text-gray-900 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interior Gallery */}
            {vehicle.images.interior && vehicle.images.interior.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold mb-6">{t("vehicleDetails.interiorGallery")}</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {vehicle.images.interior.map((img, idx) => (
                    <div key={idx} className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
                      <img
                        src={img || "/placeholder.svg?height=400&width=600"}
                        alt={`${vehicle.name} interior ${idx + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Booking & Contact */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Booking Card */}
              <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">{t("vehicleDetails.bookThisVehicle")}</h3>
                <p className="text-gray-300 mb-6">
                  {t("vehicleDetails.experienceLuxury")} {vehicle.name}. {t("vehicleDetails.contactForAvailability")}
                </p>
                <Link
                  href={`/booking?vehicle=${vehicle.id}`}
                  className="block w-full text-center bg-[#f39c12] text-white py-4 px-6 rounded-lg hover:bg-[#e08e0b] transition-all font-semibold text-lg"
                >
                  {t("vehicleDetails.requestBooking")}
                </Link>
              </div>

              {/* Contact Card */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4">{t("vehicleDetails.needAssistance")}</h3>
                <p className="text-gray-600 mb-6">{t("vehicleDetails.teamAvailable")}</p>
                <div className="space-y-3">
                  <a
                    href="tel:+250788385000"
                    className="block w-full text-center bg-white border-2 border-gray-200 text-gray-900 py-3 px-6 rounded-lg hover:border-[#f39c12] transition-all font-semibold"
                  >
                    {t("vehicleDetails.callUs")}
                  </a>
                  <a
                    href="https://wa.me/250782280204"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-all font-semibold"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
