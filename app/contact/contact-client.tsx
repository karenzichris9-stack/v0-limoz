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
    {
      question: t("contact.faq.q8"),
      answer: t("contact.faq.a8"),
    },
    {
      question: t("contact.faq.q9"),
      answer: t("contact.faq.a9"),
    },
    {
      question: t("contact.faq.q10"),
      answer: t("contact.faq.a10"),
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
    <div className="min-h-screen bg-white pt-24">
      <div className="container mx-auto px-4 py-12">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold mb-6">{t("contact.title")}</h2>
          <p className="text-gray-700 mb-8 leading-relaxed">{t("contact.description")}</p>

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
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-2">{t("contact.faq.title")}</h2>
          <p className="text-gray-600 mb-8">{t("contact.faq.subtitle")}</p>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-gray-800">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#f39c12] transition-transform duration-300 ${
                      openFAQ === index ? "rotate-180" : ""
                    }`}
                  />
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
        <div className="bg-gray-50 p-8 rounded-lg mt-12">
          <h2 className="text-2xl font-bold mb-2">{t("contact.rateTitle")}</h2>
          <p className="text-gray-600 mb-6">{t("contact.rateSubtitle")}</p>

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
              <label className="block text-sm font-medium mb-3">{t("contact.yourRating")} *</label>
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
              <label className="block text-sm font-medium mb-2">{t("contact.yourName")} *</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#f39c12] bg-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">{t("contact.emailAddress")}</label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#f39c12] bg-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">{t("contact.reviewText")} *</label>
              <textarea
                name="review"
                rows={5}
                required
                placeholder={t("contact.reviewPlaceholder")}
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
