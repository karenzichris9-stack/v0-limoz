import type { Metadata } from "next"
import ContactPageClient from "./contact-client"

export const metadata: Metadata = {
  title: "Contact Limoz Rwanda - Kigali Car Rental | +250 782 280 204",
  description:
    "Contact Limoz Rwanda for car rental inquiries. Located in Kacyiru, Kigali near Police Headquarters. Available 24/7. Call, WhatsApp, or email us for bookings and questions.",
  keywords: [
    "contact Limoz Rwanda",
    "Kigali car rental contact",
    "Kacyiru car hire",
    "Rwanda transport contact",
    "Limoz phone number",
    "car rental Gasabo district",
  ],
}

export default function ContactPage() {
  return <ContactPageClient />
}
