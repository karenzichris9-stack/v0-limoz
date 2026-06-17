"use client"

import type React from "react"
import { Phone, MapPin, Clock } from "lucide-react"
import { useState } from "react"
import { Footer } from "@/components/footer"
import { submitContactForm } from "@/app/actions/contact"
import { useLanguage } from "@/lib/language-context"

interface FAQItem {
  question: string
  answer: string
}

export default function ContactPageClient() {
  const { t } = useLanguage()
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqItems: FAQItem[] = [
    {
      question: t("contact.faq.q1"),
      answer: t("contact.faq.a1"),
    },
    {
      question: t("contact.faq.q2"),
      answer: t("contact.faq.a2"),
    },
    {
      question: t("contact.faq.q3"),
      answer: t("contact.faq.a3"),
    },
    {
      question: t("contact.faq.q4"),
      answer: t("contact.faq.a4"),
    },
    {
      question: t("contact.faq.q5"),
      answer: t("contact.faq.a5"),
    },
    {
      question: t("contact.faq.q6"),
      answer: t("contact.faq.a6"),
    },
    {
      question: t("contact.faq.q7"),
      answer: t("contact.faq.a7"),
    },
  ]

  async function handleContactSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const formData = new FormData(e.currentTarget)
      const result = await submitContactForm(formData)

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: result.message || t("contact.successMessage") || "Your message has been sent successfully!",
        })
        e.currentTarget.reset()
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || t("contact.errorMessage") || "Failed to send message. Please try again.",
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: t("contact.tryAgainMessage") || "Failed to send message. Please try again or contact us directly at +250 788 380 013.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
      <div className="flex-1 container mx-auto px-4 max-w-6xl py-12">
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">{t("contact.title")}</h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">{t("contact.subtitle")}</p>
        </div>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-8 text-gray-900">{t("contact.getInTouch")}</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#f39c12] rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t("contact.address")}</h3>
                  <p className="text-gray-700">
                    Kacyiru plot 20, Gasabo district
                    <br />
                    Near Police Headquarters
                    <br />
                    Kigali, Rwanda
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#f39c12] rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t("contact.phone")}</h3>
                  <p className="text-gray-700">
                    +250788380013
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">WhatsApp</h3>
                  <a
                    href="https://wa.me/250788380013"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 transition-colors"
                  >
                    +250 788 380 013
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#f39c12] rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t("contact.hours")}</h3>
                  <p className="text-gray-700 whitespace-pre-line">
                    {t("contact.operatingHours")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-gray-900">{t("contact.sendMessage")}</h2>
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">{t("contact.name")} *</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f39c12]"
                  placeholder={t("contact.name") || "Your name"}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">{t("contact.emailField")} *</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f39c12]"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">{t("contact.phoneField")}</label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f39c12]"
                  placeholder="+250 788 380 013"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">{t("contact.subject")}</label>
                <input
                  type="text"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f39c12]"
                  placeholder={t("contact.subject") || "What is this about?"}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">{t("contact.message")} *</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f39c12] resize-none"
                  placeholder={t("contact.message") || "Tell us how we can help..."}
                />
              </div>

              {submitStatus.type && (
                <div className={`p-4 rounded-lg ${submitStatus.type === "success" ? "bg-green-100 text-green-700 border border-green-300" : "bg-red-100 text-red-700 border border-red-300"}`}>
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#f39c12] text-white font-semibold py-3 rounded-lg hover:bg-[#e08e0b] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t("contact.sending") || "Sending..." : t("contact.send")}
              </button>
            </form>
          </div>
        </div>

        <hr className="my-16" />

        <div className="mt-12 mb-16">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">{t("contact.faq.title")}</h2>
          <p className="text-gray-600 mb-8 text-lg">{t("contact.faq.subtitle")}</p>

          <div className="space-y-3 max-w-4xl">
            {faqItems.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                  className="w-full bg-[#f39c12] hover:bg-[#e88a0e] text-white font-semibold py-4 px-4 text-left flex items-center justify-between transition-colors duration-200"
                >
                  <span>{item.question}</span>
                  <span className={`transform transition-transform ${openFAQ === index ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFAQ === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="p-4 text-gray-700 bg-white leading-relaxed">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
