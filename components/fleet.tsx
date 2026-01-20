"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Link from "next/link"
import { Users, Gauge, Cog, Wind } from "lucide-react"
import { useState } from "react"

const vehicles = [
  {
    name: "Land Cruiser TXL 2023",
    type: "VVIP Class",
    image: "/land-cruiser-txl-2023.jpg",
    seats: 7,
    transmission: "Automatic",
    fuelType: "Diesel",
    driveType: "4WD",
    features: ["Air Conditioning", "GPS Navigation", "Bluetooth", "Leather Seats", "4WD", "Cruise Control"],
  },
  {
    name: "Land Cruiser LC 300 V6",
    type: "VVIP Class",
    image: "/land-cruiser-lc300-v6.jpg",
    seats: 7,
    transmission: "Automatic",
    fuelType: "Petrol",
    driveType: "4WD",
    features: ["Air Conditioning", "GPS Navigation", "Bluetooth", "Premium Sound", "Sunroof", "Heated Seats"],
  },
  {
    name: "Mercedes E-Class",
    type: "VVIP Class",
    image: "https://limozrwanda.com/wp-content/uploads/2016/06/Eclass.png",
    seats: 4,
    transmission: "Automatic",
    fuelType: "Petrol",
    driveType: "RWD",
    features: ["Air Conditioning", "GPS Navigation", "Bluetooth", "Premium Sound", "Sunroof", "Heated Seats"],
  },
]

export function Fleet() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Our Fleet.</h2>
          <Button
            asChild
            variant="outline"
            className="border-[#f39c12] text-[#f39c12] hover:bg-[#f39c12] hover:text-white bg-transparent"
          >
            <Link href="/fleet">Browse All Cars</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {vehicles.map((vehicle, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div
                  className="relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all cursor-pointer hover:scale-105">
                    <div className="bg-white p-6">
                      <img
                        src={vehicle.image || "/placeholder.svg"}
                        alt={vehicle.name}
                        className="w-full h-48 object-contain mb-4"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-black mb-2">{vehicle.name}</h3>
                      <p className="text-gray-600 mb-4">{vehicle.type}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="w-4 h-4" />
                        <span>{vehicle.seats} Seats</span>
                      </div>
                    </CardContent>
                  </Card>

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
                  <Button className="w-full bg-[#f39c12] hover:bg-[#e67e22] text-white">Book This Vehicle</Button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  )
}
