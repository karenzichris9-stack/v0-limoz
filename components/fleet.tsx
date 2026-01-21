"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Link from "next/link"
import { Users, Gauge, Cog, Wind, ArrowRight, Star } from "lucide-react"
import { useState } from "react"
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
    image: "/land-cruiser-lc300-v6.jpg",
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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-[#f39c12]/10 text-[#f39c12] text-sm font-semibold rounded-full mb-4">
            Premium Fleet
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Our Fleet.</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Choose from our collection of premium vehicles, each maintained to the highest standards
          </p>
          <Button
            asChild
            variant="outline"
            className="border-[#f39c12] text-[#f39c12] hover:bg-[#f39c12] hover:text-white bg-transparent group"
          >
            <Link href="/fleet" className="flex items-center gap-2">
              Browse All Cars
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {vehicles.map((vehicle, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 0.1}>
              <Dialog>
                <DialogTrigger asChild>
                  <div
                    className="relative cursor-pointer group"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <Card className="overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#f39c12]/10 border-0 bg-white">
                      {/* Image container */}
                      <div className="bg-gradient-to-b from-gray-50 to-white p-6 relative overflow-hidden">
                        {/* Rating badge */}
                        <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full shadow-sm z-10">
                          <Star className="w-3.5 h-3.5 fill-[#f39c12] text-[#f39c12]" />
                          <span className="text-xs font-bold text-gray-900">{vehicle.rating}</span>
                        </div>

                        <img
                          src={vehicle.image || "/placeholder.svg"}
                          alt={vehicle.name}
                          className="w-full h-48 object-contain transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>

                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-xl font-bold text-black group-hover:text-[#f39c12] transition-colors">
                              {vehicle.name}
                            </h3>
                            <p className="text-[#f39c12] font-medium text-sm">{vehicle.type}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-gray-600 mt-4">
                          <div className="flex items-center gap-1.5">
                            <Users className="w-4 h-4 text-[#f39c12]" />
                            <span>{vehicle.seats} Seats</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Cog className="w-4 h-4 text-[#f39c12]" />
                            <span>{vehicle.transmission}</span>
                          </div>
                        </div>

                        {/* Hover CTA */}
                        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-sm text-gray-500">Click to view details</span>
                          <ArrowRight className="w-4 h-4 text-[#f39c12] transform translate-x-0 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>

                    {/* Feature overlay on hover */}
                    {hoveredIndex === index && (
                      <div className="absolute inset-0 bg-gradient-to-br from-black/95 to-black/90 rounded-lg flex items-end justify-center p-6 animate-in slide-in-from-bottom-8 fade-in duration-300 pointer-events-none">
                        <div className="text-white space-y-4 w-full pb-4">
                          <div className="flex items-center gap-4 animate-in slide-in-from-bottom-4 fade-in duration-500 delay-100">
                            <div className="p-3 bg-[#f39c12] rounded-lg">
                              <Wind className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <p className="text-xs text-gray-400 uppercase tracking-wide">Climate</p>
                              <p className="font-bold text-lg">Air Conditioning</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 animate-in slide-in-from-bottom-4 fade-in duration-500 delay-300">
                            <div className="p-3 bg-[#f39c12] rounded-lg">
                              <Gauge className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <p className="text-xs text-gray-400 uppercase tracking-wide">Drive</p>
                              <p className="font-bold text-lg">{vehicle.driveType}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 animate-in slide-in-from-bottom-4 fade-in duration-500 delay-500">
                            <div className="p-3 bg-[#f39c12] rounded-lg">
                              <Cog className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <p className="text-xs text-gray-400 uppercase tracking-wide">Transmission</p>
                              <p className="font-bold text-lg">{vehicle.transmission}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">{vehicle.name}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6">
                    <img
                      src={vehicle.image || "/placeholder.svg"}
                      alt={vehicle.name}
                      className="w-full h-64 object-contain"
                    />
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Vehicle Features:</h4>
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
                      <span className="font-semibold">{vehicle.seats} Passenger Capacity</span>
                    </div>
                    <Button asChild className="w-full bg-[#f39c12] hover:bg-[#e67e22] text-white">
                      <Link href="/booking">Book This Vehicle</Link>
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
