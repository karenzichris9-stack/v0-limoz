"use client"

import type React from "react"
import { Phone, Mail, MapPin, Clock, Star, ChevronDown } from "lucide-react"
import { useState } from "react"
import { Footer } from "@/components/footer"
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
      question: "How do I make a booking with Limoz Rwanda?",
      answer: "You can book directly through our website on the Booking page, send us an email at bookings@limozrwanda.com, or reach us instantly via WhatsApp at +250 788 318 990.",
    },
    {
      question: "Do you offer airport pickup and drop-off services?",
      answer: "Yes! We provide reliable airport transfers to and from Kigali International Airport (RwandAir Hub). Simply share your flight details when booking and our driver will be there on time.",
    },
    {
      question: "Can I hire a car with a driver?",
      answer: "Absolutely. All our vehicles come with professional, English-speaking drivers who know Kigali and Rwanda well. Self-drive options may also be available — contact us to discuss your needs.",
    },
    {
      question: "What types of vehicles do you have available?",
      answer: "Our fleet includes sedans, SUVs, minivans, and safari-ready 4x4 vehicles. Visit our Fleet page to see the full range and choose the right vehicle for your trip.",
    },
    {
      question: "Do you organize safaris and tours outside Kigali?",
      answer: "Yes, we offer guided tours and safaris across Rwanda, including Volcanoes National Park (gorilla trekking), Akagera National Park, and Nyungwe Forest. See our Tours & Safaris page for details.",
    },
    {
      question: "What are your operating hours?",
      answer: "We are available 7 days a week. For urgent bookings or last-minute requests, you can reach us via WhatsApp at any time.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept Mobile Money (MTN & Airtel), bank transfers, and cash payments in Rwandan Francs (RWF) or USD. Please confirm your preferred method when making a booking.",
    },
  ]

  async function handleReviewSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    // Simulate submission - in production, you'd send this to your backend
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setSubmitStatus({
      type: "success",
      message: t("contact.reviewSuccess"),
    })

    // Reset form
    e.currentTarget.reset()
    setRating(0)
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
      <div className="container mx-auto px-4 max-w-6xl py-12">
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">{t("contact.title")}</h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">{t("contact.description")}</p>
        </div>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-8 text-gray-900">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#f39c12] rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t("contact.address")}</h3>
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
                    +250 788 123 456
                    <br />
                    +250 788 654 321
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
                  <h3 className="font-semibold mb-1">{t("contact.whatsapp")}</h3>
                  <a
                    href="https://wa.me/250788318990"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 transition-colors"
                  >
                    +250 788 318 990
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#f39c12] rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t("contact.email")}</h3>
                  <p className="text-gray-700">
                    info@limozrwanda.com
                    <br />
                    bookings@limozrwanda.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#f39c12] rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t("contact.hours")}</h3>
                  <p
                    className="text-gray-700"
                    dangerouslySetInnerHTML={{ __html: t("contact.hoursValue").replace(/\n/g, "<br />") }}
                  />
                </div>
              </div>
            </div>

          {/* Image Column */}
          <div className="relative hidden md:block">
            <div className="bg-gradient-to-br from-[#f39c12]/10 to-[#1e3a5f]/5 rounded-2xl p-8 h-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📞</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">We're Here to Help</h3>
                <p className="text-gray-600 leading-relaxed">Contact us anytime. Our team is ready to assist you with all your transportation needs in Rwanda.</p>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-16" />

        <div className="mt-12 mb-16">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">Frequently Asked Questions</h2>
          <p className="text-gray-600 mb-8 text-lg">Find answers to common questions about our services, fleet, and booking process.</p>

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

        {/* Rate Our Services Section */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-12 rounded-2xl mt-16 border border-gray-200 max-w-2xl">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">Rate Our Services</h2>
          <p className="text-gray-600 mb-8">Tell us about your experience with Limoz Rwanda. Your feedback helps us improve!</p>

          {submitStatus.type && (
            <div
              className={`mb-6 p-4 rounded ${
                submitStatus.type === "success"
                  ? "bg-green-100 text-green-800 border border-green-200"
                  : "bg-red-100 text-red-800 border border-red-200"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleReviewSubmit}>
            {/* Star Rating */}
            <div>
              <label className="block text-sm font-medium mb-3">Your Rating *</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="transition-transform hover:scale-110 focus:outline-none"
                  >
                    <Star
                      className={`w-10 h-10 ${
                        star <= (hoverRating || rating) ? "fill-[#f39c12] text-[#f39c12]" : "text-gray-300"
                      } transition-colors`}
                    />
                  </button>
                ))}
              </div>
              {rating > 0 && (
                <p className="text-sm text-gray-600 mt-2">
                  {rating === 1 && t("contact.rating1")}
                  {rating === 2 && t("contact.rating2")}
                  {rating === 3 && t("contact.rating3")}
                  {rating === 4 && t("contact.rating4")}
                  {rating === 5 && t("contact.rating5")}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Your Name *</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#f39c12] bg-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#f39c12] bg-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Your Review *</label>
              <textarea
                name="review"
                required
                placeholder="Share your experience with Limoz Rwanda..."
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#f39c12] bg-white"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || rating === 0}
              className="w-full bg-[#f39c12] text-white py-3 rounded hover:bg-[#e08e0b] transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? t("contact.submitting") : t("contact.submitReview")}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}
