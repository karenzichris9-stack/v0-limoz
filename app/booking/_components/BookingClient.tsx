"use client"

import type React from "react"
import { Calendar, Clock, Car, User, Mail, Phone, MessageSquare, CheckCircle2 } from "lucide-react"
import { useState } from "react"
import { submitBooking } from "@/app/actions/booking"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"

export default function BookingClient() {
  const { t } = useLanguage()
  const [dateError, setDateError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const today = new Date().toISOString().split("T")[0]

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value
    if (selectedDate < today) {
      setDateError(t("booking.dateError"))
    } else {
      setDateError("")
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    const form = e.currentTarget
    const formData = new FormData(form)
    const pickupDate = formData.get("pickupDate") as string

    // Validate date before submission
    if (pickupDate < today) {
      setSubmitStatus({
        type: "error",
        message: t("booking.dateError"),
      })
      setIsSubmitting(false)
      return
    }

    try {
      const result = await submitBooking(formData)

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: result.message,
        })
        form.reset()
      } else {
        setSubmitStatus({
          type: "error",
          message: result.message,
        })
      }
    } catch (error) {
      console.error("[v0] Booking submission error:", error)
      setSubmitStatus({
        type: "error",
        message: t("booking.errorMessage"),
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-24">
      <div className="container mx-auto px-4 py-12">
        {/* Booking Terms Cards */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">{t("booking.terms")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all hover:scale-105">
              <div className="w-12 h-12 bg-[#f39c12]/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-[#f39c12]" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">{t("booking.quickResponse")}</h3>
              <p className="text-gray-600 text-sm">{t("booking.quickResponseText")}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all hover:scale-105">
              <div className="w-12 h-12 bg-[#f39c12]/10 rounded-full flex items-center justify-center mb-4">
                <Car className="w-6 h-6 text-[#f39c12]" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">{t("booking.allInclusive")}</h3>
              <p className="text-gray-600 text-sm">{t("booking.allInclusiveText")}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all hover:scale-105">
              <div className="w-12 h-12 bg-[#f39c12]/10 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-[#f39c12]" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">{t("booking.flexibleDuration")}</h3>
              <p className="text-gray-600 text-sm">{t("booking.flexibleDurationText")}</p>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <h2 className="text-3xl font-bold mb-8 text-center">{t("booking.title")}</h2>

            {submitStatus.type && (
              <div
                className={`mb-6 p-4 rounded-lg ${
                  submitStatus.type === "success"
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                <div className="flex items-center gap-2">
                  {submitStatus.type === "success" ? (
                    <CheckCircle2 className="w-5 h-5" />
                  ) : (
                    <MessageSquare className="w-5 h-5" />
                  )}
                  <p className="font-medium">{submitStatus.message}</p>
                </div>
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-700 flex items-center gap-2">
                    <User className="w-4 h-4 text-[#f39c12]" />
                    {t("booking.fullName")}
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f39c12] focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-700 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#f39c12]" />
                    {t("booking.email")}
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f39c12] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-700 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#f39c12]" />
                    {t("booking.phone")}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+250 XXX XXX XXX"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f39c12] focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-700 flex items-center gap-2">
                    <Car className="w-4 h-4 text-[#f39c12]" />
                    {t("booking.vehicleType")}
                  </label>
                  <select
                    name="vehicleType"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f39c12] focus:border-transparent transition-all bg-white"
                  >
                    <option value="">{t("booking.selectVehicle")}</option>
                    <option>Toyota Land Cruiser V8</option>
                    <option>Mercedes-Benz E-Class</option>
                    <option>Toyota Prado GX</option>
                    <option>Toyota Hilux</option>
                    <option>Bus</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-700 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#f39c12]" />
                    {t("booking.pickupDate")}
                  </label>
                  <input
                    type="date"
                    name="pickupDate"
                    min={today}
                    onChange={handleDateChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f39c12] focus:border-transparent transition-all"
                  />
                  {dateError && <p className="text-red-500 text-sm mt-2">{dateError}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-700 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#f39c12]" />
                    {t("booking.duration")}
                  </label>
                  <select
                    name="duration"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f39c12] focus:border-transparent transition-all bg-white"
                  >
                    <option>{t("booking.halfDay")}</option>
                    <option>{t("booking.fullDay")}</option>
                    <option>{t("booking.multipleDays")}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 text-gray-700 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#f39c12]" />
                  {t("booking.notes")}
                </label>
                <textarea
                  name="notes"
                  rows={4}
                  placeholder={t("booking.notesPlaceholder")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f39c12] focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !!dateError}
                className="w-full bg-gradient-to-r from-[#f39c12] to-[#e67e22] text-white py-4 rounded-lg hover:from-[#e08e0b] hover:to-[#d35400] transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    {t("booking.submitting")}
                  </>
                ) : (
                  t("booking.submit")
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
