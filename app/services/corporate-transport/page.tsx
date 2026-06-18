import { Metadata } from "next"
import { Building2, Users, TrendingUp, Lock, Zap, BarChart3 } from "lucide-react"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Corporate Transport Solutions | Limoz Rwanda | Business Fleet Services",
  description:
    "Corporate fleet management and group transport for businesses, NGOs, and international organizations. Volume discounts, invoicing, dedicated accounts. Professional service with full accountability.",
  keywords: [
    "corporate transport Rwanda",
    "business fleet rental",
    "NGO transport",
    "group transport Kigali",
    "corporate vehicle rental",
    "business travel Rwanda",
    "fleet management services",
  ],
}

export default function CorporateTransport() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Corporate Transport Solutions</h1>
            <p className="text-xl text-gray-300 mb-2">Dedicated fleet management for businesses and organizations</p>
            <p className="text-lg text-[#f39c12]">Volume discounts • Invoicing • Dedicated account management • Full transparency</p>
          </div>
        </div>
      </section>

      {/* Why Choose Corporate */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Why Partner with Limoz for Corporate Transport</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <Building2 className="w-8 h-8 text-[#f39c12] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Scalable Solutions</h3>
                <p className="text-gray-600">
                  From a single vehicle for weekly executive transport to a full fleet for departmental use. Scale up or down as needed.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <BarChart3 className="w-8 h-8 text-[#f39c12] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Volume Discounts</h3>
                <p className="text-gray-600">
                  Tiered pricing for committed volumes. Higher discounts for monthly commitments or long-term partnerships.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <TrendingUp className="w-8 h-8 text-[#f39c12] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Cost Transparency</h3>
                <p className="text-gray-600">
                  Detailed invoicing with trip summaries, mileage logs, and costs. Monthly reconciliation and reporting.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Lock className="w-8 h-8 text-[#f39c12] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Security & Compliance</h3>
                <p className="text-gray-600">
                  Background-checked drivers, vehicle tracking, full insurance, and documented maintenance. Meet audit requirements.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Users className="w-8 h-8 text-[#f39c12] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Dedicated Account Management</h3>
                <p className="text-gray-600">
                  Your own account manager for faster bookings, priority support, and custom scheduling arrangements.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Zap className="w-8 h-8 text-[#f39c12] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Quick Deployment</h3>
                <p className="text-gray-600">
                  Minimal paperwork, fast onboarding. Start transport within days of agreement. All logistics handled.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Models */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Corporate Fleet Models</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Ad-Hoc Transportation",
                desc: "Flexible bookings with no commitment. Ideal for occasional transport needs.",
                features: [
                  "Pay-per-trip pricing",
                  "No monthly minimum",
                  "Perfect for occasional needs",
                  "Full invoice after each trip",
                ],
              },
              {
                title: "Monthly Quota",
                desc: "Committed monthly trip budget with discounted rates and priority access.",
                features: [
                  "Pre-negotiated per-trip rates",
                  "Monthly invoicing",
                  "Unused trips roll over",
                  "10-20% volume discount",
                ],
              },
              {
                title: "Dedicated Fleet",
                desc: "Reserved vehicles exclusively for your organization with managed driver rotation.",
                features: [
                  "Reserved vehicles 24/7",
                  "Dedicated drivers",
                  "Unlimited trips",
                  "25-40% volume discount",
                ],
              },
            ].map((model, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{model.title}</h3>
                <p className="text-gray-600 mb-6">{model.desc}</p>
                <ul className="space-y-3">
                  {model.features.map((feature, i) => (
                    <li key={i} className="flex gap-2 text-sm">
                      <span className="text-[#f39c12] font-bold">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Ideal for These Organizations</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "International Organizations",
              "NGOs & Development Agencies",
              "Corporate Head Offices",
              "Government Ministries",
              "Hotels & Resorts",
              "Event Management Companies",
              "Research Institutions",
              "UN Agencies & Embassies",
            ].map((org, idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#f39c12]/10 to-transparent rounded-lg p-6 border border-[#f39c12]/20">
                <p className="font-semibold text-gray-900">{org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Corporate Pricing Tiers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                tier: "Starter",
                trips: "10-20 trips/month",
                discount: "10%",
                rate: "Standard rates",
              },
              {
                tier: "Growth",
                trips: "20-50 trips/month",
                discount: "15-20%",
                rate: "Negotiated rates",
              },
              {
                tier: "Enterprise",
                trips: "50+ trips/month",
                discount: "25-40%",
                rate: "Custom package",
              },
            ].map((tier, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 border-2 border-gray-200">
                <h3 className="text-2xl font-bold text-[#f39c12] mb-4">{tier.tier}</h3>
                <div className="space-y-3 mb-6">
                  <div>
                    <p className="text-sm text-gray-600">Monthly Volume</p>
                    <p className="font-semibold text-gray-900">{tier.trips}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Volume Discount</p>
                    <p className="font-semibold text-gray-900">{tier.discount}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Pricing Model</p>
                    <p className="font-semibold text-gray-900">{tier.rate}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Discuss Your Corporate Needs?</h2>
          <p className="text-lg text-gray-300 mb-8">Schedule a consultation with our corporate account team</p>
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
