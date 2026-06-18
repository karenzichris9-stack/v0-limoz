import { Metadata } from "next"
import { Users, MapPin, Clock, Zap, CheckCircle2, Volume2 } from "lucide-react"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Conference & Event Transport | Limoz Rwanda | Group Transportation",
  description:
    "Professional group transport for conferences, seminars, events, and delegations. Coordinated timing, multiple vehicles, registration support. Book your conference fleet now.",
  keywords: [
    "conference transport Rwanda",
    "event transportation",
    "group transport Kigali",
    "delegation transport",
    "seminar vehicle rental",
    "conference fleet",
    "coordinated transport",
  ],
}

export default function ConferenceTransport() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Conference & Event Transport</h1>
            <p className="text-xl text-gray-300 mb-2">Seamless coordination for large groups and delegations</p>
            <p className="text-lg text-[#f39c12]">Synchronized timing • Multiple vehicles • Professional logistics</p>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Why Limoz for Conference Transport</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <Clock className="w-8 h-8 text-[#f39c12] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Synchronized Timing</h3>
                <p className="text-gray-600">
                  All vehicles arrive and depart precisely on schedule. Real-time coordination ensures no participants are left behind or delayed.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Users className="w-8 h-8 text-[#f39c12] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Large Group Management</h3>
                <p className="text-gray-600">
                  Experience coordinating groups of 50+ passengers across multiple vehicles. Central point of contact for all transport logistics.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Zap className="w-8 h-8 text-[#f39c12] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Quick Coordination</h3>
                <p className="text-gray-600">
                  Custom briefing meetings for your team, detailed driver instructions, contingency planning for last-minute changes.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPin className="w-8 h-8 text-[#f39c12] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Route Optimization</h3>
                <p className="text-gray-600">
                  We plan efficient routes to reduce travel time and ensure all vehicles take identical paths to avoid confusion.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Volume2 className="w-8 h-8 text-[#f39c12] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Communication Systems</h3>
                <p className="text-gray-600">
                  Radio coordination between drivers, single point of contact for your event team, real-time status updates.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="w-8 h-8 text-[#f39c12] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Professional Standards</h3>
                <p className="text-gray-600">
                  Vetted drivers, maintained vehicles, insurance coverage, and full backup options for any situation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Conference Transport Services</h2>
          <div className="space-y-8">
            {[
              {
                title: "Airport Reception & Transport",
                desc: "Meet international delegates at the airport and transport to hotel or venue. Coordination with flight schedules.",
                includes: [
                  "Meet & greet with nameplate",
                  "Luggage assistance",
                  "Hotel check-in transport",
                  "Welcome briefing en route",
                ],
              },
              {
                title: "Venue to Venue Transport",
                desc: "Move entire conference groups between multiple venues, breakfast locations, field visits, and social events.",
                includes: [
                  "Synchronized departure from accommodations",
                  "Coordinated arrival at venues",
                  "Return transport",
                  "Wait-time management",
                ],
              },
              {
                title: "Delegation Tours & Site Visits",
                desc: "Organized transport for technical visits, cultural tours, and business site inspections with narrated routes.",
                includes: [
                  "Professional tour routing",
                  "Multi-stop coordination",
                  "Extended trip logistics",
                  "Photo stop planning",
                ],
              },
              {
                title: "Gala & Social Event Transport",
                desc: "Luxury transport for conference dinners, cocktail events, and social functions with timing precision.",
                includes: [
                  "Premium vehicle selection",
                  "Dressed drivers",
                  "Arrival coordination",
                  "Return service at day's end",
                ],
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.desc}</p>
                <div className="grid md:grid-cols-4 gap-4">
                  {service.includes.map((item, i) => (
                    <div key={i} className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#f39c12] flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Options */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Available Fleet Configurations</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                config: "Small Groups",
                size: "5-15 passengers",
                vehicles: "1-2 vehicles",
                example: "Board meetings, small delegations",
              },
              {
                config: "Medium Events",
                size: "15-50 passengers",
                vehicles: "3-6 vehicles",
                example: "Workshops, seminars, team events",
              },
              {
                config: "Large Conferences",
                size: "50-200+ passengers",
                vehicles: "7-20+ vehicles",
                example: "International conferences, multi-day events",
              },
            ].map((option, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-lg p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{option.config}</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600 uppercase font-semibold">Group Size</p>
                    <p className="text-lg font-bold text-gray-900">{option.size}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 uppercase font-semibold">Vehicles</p>
                    <p className="text-lg font-bold text-gray-900">{option.vehicles}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 uppercase font-semibold">Typical Use</p>
                    <p className="text-sm text-gray-700">{option.example}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Our Coordination Process</h2>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Initial Consultation",
                desc: "We understand your conference schedule, number of participants, venues, and special requirements.",
              },
              {
                step: "2",
                title: "Route Planning",
                desc: "Detailed planning of all transport routes, timing windows, and contingency options.",
              },
              {
                step: "3",
                title: "Driver Briefing",
                desc: "All drivers receive detailed briefing on routes, schedules, and passenger management.",
              },
              {
                step: "4",
                title: "Execution & Coordination",
                desc: "Real-time coordination with radio-linked drivers and single point of contact for your team.",
              },
              {
                step: "5",
                title: "Post-Event Summary",
                desc: "Detailed summary of all trips, mileage, costs, and feedback for future events.",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#f39c12] text-white font-bold">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Conference Transport Pricing</h2>
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 space-y-4">
            <p className="text-gray-600 mb-6">
              <strong>All-inclusive pricing includes:</strong> Vehicle rental, professional driver, fuel, tolls, insurance, and coordination
            </p>
            <div className="flex justify-between py-3 border-b">
              <span className="font-semibold text-gray-900">Small Groups (up to 15 pax, 1-2 vehicles)</span>
              <span className="text-gray-600">RWF 60,000/vehicle/day</span>
            </div>
            <div className="flex justify-between py-3 border-b">
              <span className="font-semibold text-gray-900">Medium Events (15-50 pax, 3-6 vehicles)</span>
              <span className="text-gray-600">RWF 50,000/vehicle/day</span>
            </div>
            <div className="flex justify-between py-3">
              <span className="font-semibold text-gray-900">Large Conferences (50+ pax, 7+ vehicles)</span>
              <span className="text-gray-600">Custom bulk rate</span>
            </div>
            <p className="text-sm text-gray-600 mt-6">
              Multi-day events receive additional volume discounts. Contact us for a custom quote based on your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Planning Your Next Conference?</h2>
          <p className="text-lg text-gray-300 mb-8">Let us handle the transport logistics so you can focus on content</p>
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
