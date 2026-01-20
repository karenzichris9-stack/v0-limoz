import type { Metadata } from "next"
import BookingClient from "./_components/BookingClient"

export const metadata: Metadata = {
  title: "Book Car Rental Online Kigali Rwanda | Instant Confirmation | Limoz Rwanda",
  description:
    "Book your car rental in Kigali online - instant confirmation, best prices guaranteed. Rent Land Cruiser, Mercedes, Prado, safari vehicles. Airport delivery available. Pay by card, bank transfer, or mobile money. Call +250 782 280 204 for assistance.",
  keywords: [
    "book car rental Kigali online",
    "instant car hire confirmation Rwanda",
    "online vehicle booking Kigali",
    "airport transfer booking Rwanda",
    "cheap car rental booking Kigali",
    "book Land Cruiser Rwanda",
    "reserve safari vehicle online",
    "car rental payment Rwanda",
    "mobile money car rental",
  ],
  openGraph: {
    title: "Book Your Rwanda Car Rental - Instant Confirmation | Limoz Rwanda",
    description: "Easy online booking. Best rates. Instant confirmation. 24/7 support.",
    url: "https://limozrwanda.com/booking",
  },
  alternates: {
    canonical: "https://limozrwanda.com/booking",
  },
}

export default function BookingPage() {
  return <BookingClient />
}
