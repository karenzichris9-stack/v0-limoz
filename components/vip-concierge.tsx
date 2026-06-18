"use client"

import { Phone, Clock, Users, Zap, Shield, Sparkles } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"

export function VIPConcierge() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "On-demand availability around the clock for your urgent transport needs",
    },
    {
      icon: Users,
      title: "Dedicated Concierge",
      description: "Personal concierge team dedicated to your account and preferences",
    },
    {
      icon: Sparkles,
      title: "Premium Amenities",
      description: "Complimentary refreshments, Wi-Fi, and bespoke comfort features",
    },
    {
      icon: Shield,
      title: "Absolute Discretion",
      description: "Confidentiality and privacy guaranteed for all VIP clients",
    },
    {
      icon: Zap,
      title: "Instant Confirmation",
      description: "Immediate booking confirmation with priority dispatch",
    },
    {
      icon: Phone,
      title: "Direct Line Support",
      description: "Direct contact to dedicated account manager and support team",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            VIP/VVIP Concierge Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience premium executive transport with our dedicated concierge service. Designed exclusively for discerning clients who demand excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#f39c12]/10 to-transparent border border-[#f39c12]/30 rounded-xl p-8 hover:border-[#f39c12]/60 transition-all hover:shadow-lg hover:shadow-[#f39c12]/20"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#f39c12]/20 rounded-lg flex-shrink-0">
                  <service.icon className="w-6 h-6 text-[#f39c12]" />
                </div>
                <h3 className="text-lg font-semibold text-white">{service.title}</h3>
              </div>
              <p className="text-gray-300 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Concierge Benefits */}
        <div className="bg-gradient-to-r from-[#f39c12]/5 to-[#e67e22]/5 border border-[#f39c12]/20 rounded-2xl p-8 md:p-12 mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Premium Concierge Benefits</h3>
              <ul className="space-y-3">
                {[
                  "Priority booking and instant confirmation",
                  "Customized vehicle selection based on preferences",
                  "Direct communication with dedicated team",
                  "Flexible cancellation policies",
                  "Exclusive corporate rates available",
                  "Complimentary trip notifications",
                  "Personal preference profiles stored",
                  "Emergency support 24/7",
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#f39c12] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-200">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center">
              <div className="bg-gradient-to-br from-[#f39c12]/20 to-[#e67e22]/20 rounded-xl p-8 border border-[#f39c12]/30">
                <h4 className="text-xl font-semibold text-white mb-4">Ready for VIP Service?</h4>
                <p className="text-gray-300 mb-6">
                  Contact our concierge team to activate your VIP experience and receive exclusive benefits.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-[#f39c12]" />
                    <a href="tel:+250788380013" className="text-[#f39c12] font-semibold hover:text-[#e67e22]">
                      +250 788 380 013
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#f39c12]" />
                    <a href="https://wa.me/250788318990" target="_blank" rel="noopener noreferrer" className="text-[#f39c12] font-semibold hover:text-[#e67e22]">
                      WhatsApp for Concierge Support
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/services/chauffeur-service"
            className="inline-block bg-gradient-to-r from-[#f39c12] to-[#e67e22] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#f39c12]/50 transition-all hover:scale-105"
          >
            Explore Our Premium Services
          </Link>
        </div>
      </div>
    </section>
  )
}
