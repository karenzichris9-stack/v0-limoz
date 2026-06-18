import { Metadata } from "next"
import { Award, Shield, Clock, MapPin, Users, Briefcase } from "lucide-react"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Professional Chauffeur Service | Limoz Rwanda | Executive Transport",
  description:
    "Premium chauffeur-driven service for executives, diplomats, and VIP clients. Protocol-trained drivers, luxury vehicles, discretion guaranteed. Available 24/7 in Kigali, Rwanda.",
  keywords: [
    "chauffeur service Rwanda",
    "professional driver Kigali",
    "executive chauffeur",
    "VIP driver service",
    "diplomatic transport",
    "corporate chauffeur",
    "luxury driver service",
  ],
}

export default function ChauffeurService() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Chauffeur Service</h1>
            <p className="text-xl text-gray-300 mb-2">Discreet, reliable executive transport</p>
            <p className="text-lg text-[#f39c12]">Protocol-trained drivers • Luxury vehicles • Absolute discretion</p>
          </div>
        </div>
      </section>

      {/* About Our Chauffeurs */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Our Chauffeur Standards</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Selection & Training</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <Checkmark />
                  <span className="text-gray-700"><strong>Rigorous vetting:</strong> Background checks, license verification, driving record review</span>
                </li>
                <li className="flex gap-3">
                  <Checkmark />
                  <span className="text-gray-700"><strong>Protocol training:</strong> Diplomatic protocols, VIP etiquette, confidentiality</span>
                </li>
                <li className="flex gap-3">
                  <Checkmark />
                  <span className="text-gray-700"><strong>Route expertise:</strong> Comprehensive knowledge of Kigali and national routes</span>
                </li>
                <li className="flex gap-3">
                  <Checkmark />
                  <span className="text-gray-700"><strong>Professional appearance:</strong> Smart dress code, grooming standards</span>
                </li>
                <li className="flex gap-3">
                  <Checkmark />
                  <span className="text-gray-700"><strong>Vehicle expertise:</strong> Complete knowledge of all vehicle systems and comfort features</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">On-Duty Excellence</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <Checkmark />
                  <span className="text-gray-700"><strong>Discretion:</strong> Absolute confidentiality in all matters</span>
                </li>
                <li className="flex gap-3">
                  <Checkmark />
                  <span className="text-gray-700"><strong>Professionalism:</strong> Courteous, polite, never intrusive</span>
                </li>
                <li className="flex gap-3">
                  <Checkmark />
                  <span className="text-gray-700"><strong>Punctuality:</strong> Always on-time, anticipates traffic patterns</span>
                </li>
                <li className="flex gap-3">
                  <Checkmark />
                  <span className="text-gray-700"><strong>Reliability:</strong> Fully insured, maintained vehicles</span>
                </li>
                <li className="flex gap-3">
                  <Checkmark />
                  <span className="text-gray-700"><strong>Communication:</strong> Clear, professional phone manner</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Chauffeur Service Types</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Hourly Chauffeur",
                desc: "Flexible hourly rates for business meetings, shopping, city tours, or event attendance. Minimum 3 hours.",
              },
              {
                icon: Briefcase,
                title: "Business Transport",
                desc: "Daily chauffeur for corporate executives, board members, and business travelers. Weekday or full-time arrangements.",
              },
              {
                icon: MapPin,
                title: "Event Transport",
                desc: "Dedicated driver for conferences, diplomatic events, weddings, and special occasions with VIP coordination.",
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <service.icon className="w-10 h-10 text-[#f39c12] mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Fleet for Chauffeur */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Available Chauffeur Vehicles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Executive Sedan",
                vehicle: "Mercedes-Benz E-Class",
                passengers: "4-5",
                features: "Climate control, premium sound, WiFi",
              },
              {
                name: "Premium SUV",
                vehicle: "Land Cruiser LC 300 V6",
                passengers: "5-7",
                features: "Spacious, climate zones, JBL sound, WiFi",
              },
              {
                name: "Luxury SUV",
                vehicle: "Mercedes-Benz S-Class",
                passengers: "5",
                features: "Presidential standards, 4-zone climate, massage seats",
              },
            ].map((vehicle, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-[#f39c12] text-sm uppercase tracking-wide mb-2">{vehicle.name}</h3>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{vehicle.vehicle}</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Passengers:</span>
                    <span className="font-semibold text-gray-900">{vehicle.passengers}</span>
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs uppercase font-semibold mb-1">Features</p>
                    <p className="text-gray-700">{vehicle.features}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Chauffeur Service Rates</h2>
          <div className="bg-white rounded-lg p-8 border border-gray-200 space-y-4">
            <div className="flex justify-between py-3 border-b">
              <span className="font-semibold text-gray-900">Hourly Chauffeur (3-hour minimum)</span>
              <span className="text-gray-600">RWF 60,000/hour</span>
            </div>
            <div className="flex justify-between py-3 border-b">
              <span className="font-semibold text-gray-900">Daily Chauffeur (8 hours)</span>
              <span className="text-gray-600">RWF 400,000</span>
            </div>
            <div className="flex justify-between py-3 border-b">
              <span className="font-semibold text-gray-900">Full-Time Chauffeur (Monthly)</span>
              <span className="text-gray-600">Custom quote</span>
            </div>
            <div className="flex justify-between py-3">
              <span className="font-semibold text-gray-900">Weekend/Holiday Rates</span>
              <span className="text-gray-600">+25% surcharge</span>
            </div>
            <p className="text-sm text-gray-600 mt-6">
              <strong>All-inclusive rates:</strong> Vehicle, fuel, tolls, insurance, professional driver, discretion guarantee.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Reserve Your Professional Chauffeur</h2>
          <p className="text-lg text-gray-300 mb-8">Contact our concierge team for immediate availability</p>
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

function CheckMark() {
  return (
    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#f39c12] flex items-center justify-center">
      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    </div>
  )
}
