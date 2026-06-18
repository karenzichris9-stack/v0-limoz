import { Metadata } from "next"
import { MapPin, Clock, CheckCircle2, Users, Smartphone, Shield } from "lucide-react"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Airport Transfers Kigali | Limoz Rwanda | Reliable 24/7 Service",
  description:
    "Professional airport transfer service from Kigali International Airport. Meet & greet, flight monitoring, luggage assistance. Luxury vehicles, professional drivers. Book now +250 788 380 013.",
  keywords: [
    "airport transfer Kigali",
    "Kigali International Airport transport",
    "airport pickup Kigali",
    "airport shuttle Rwanda",
    "meet and greet airport",
    "flight monitoring service",
    "airport transfer 24/7",
    "luxury airport transport",
  ],
}

export default function AirportTransfers() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Airport Transfers</h1>
            <p className="text-xl text-gray-300 mb-2">Seamless arrival and departure transport from Kigali International Airport</p>
            <p className="text-lg text-[#f39c12]">Professional drivers • Real-time flight monitoring • Meet & greet service</p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Why Choose Limoz for Airport Transfers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <MapPin className="w-8 h-8 text-[#f39c12] mt-1" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Meet & Greet Service</h3>
                <p className="text-gray-600">
                  Our driver meets you at arrivals with a nameplate. Assistance with luggage and a smooth transfer to your destination.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Smartphone className="w-8 h-8 text-[#f39c12] mt-1" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Real-Time Flight Monitoring</h3>
                <p className="text-gray-600">
                  We track your flight in real-time. If you&apos;re delayed, your driver adjusts automatically. No waiting charges.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Clock className="w-8 h-8 text-[#f39c12] mt-1" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">24/7 Availability</h3>
                <p className="text-gray-600">
                  Early morning or late-night flights? We&apos;re available round-the-clock. No surcharges for off-hours bookings.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Users className="w-8 h-8 text-[#f39c12] mt-1" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Group Transfers</h3>
                <p className="text-gray-600">
                  Corporate teams, delegations, tour groups — we manage transfers for any size group with coordinated timing.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Shield className="w-8 h-8 text-[#f39c12] mt-1" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Professional Drivers</h3>
                <p className="text-gray-600">
                  Vetted, licensed chauffeurs with extensive local knowledge. Discretion and professionalism guaranteed.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle2 className="w-8 h-8 text-[#f39c12] mt-1" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Fixed Pricing</h3>
                <p className="text-gray-600">
                  Transparent, all-inclusive rates. No hidden charges. Price confirmed before booking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: 1, title: "Request Transfer", desc: "Select your arrival/departure date and flight details" },
              { number: 2, title: "Confirm Flight", desc: "We monitor your flight in real-time" },
              { number: 3, title: "Meet Your Driver", desc: "Your dedicated driver greets you with nameplate" },
              { number: 4, title: "Arrive Safely", desc: "Relax while we handle your transport" },
            ].map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-12 h-12 bg-[#f39c12] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {step.number}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Info */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Airport Transfer Pricing</h2>
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b">
                <span className="font-semibold text-gray-900">Standard Sedan (RAV4, Toyota)</span>
                <span className="text-gray-600">From RWF 50,000</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="font-semibold text-gray-900">Executive SUV (Mercedes E-Class, LC 300)</span>
                <span className="text-gray-600">From RWF 80,000</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="font-semibold text-gray-900">VIP Class (Mercedes S-Class, LC 250)</span>
                <span className="text-gray-600">From RWF 120,000</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="font-semibold text-gray-900">Group Transfer (8+ passengers)</span>
                <span className="text-gray-600">Custom quote</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-6">
              <strong>All prices are all-inclusive:</strong> Vehicle, driver, fuel, tolls, meet & greet, flight monitoring. No hidden charges.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your Airport Transfer?</h2>
          <p className="text-lg text-gray-300 mb-8">Contact us directly for fastest confirmation</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+250788380013"
              className="bg-[#f39c12] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e8931a] transition-colors"
            >
              Call +250 788 380 013
            </a>
            <a
              href="https://wa.me/250788380013"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
