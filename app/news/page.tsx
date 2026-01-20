import type { Metadata } from "next"
import NewsPageClient from "./NewsPageClient"

export const metadata: Metadata = {
  title: "Latest News & Updates - Limoz Rwanda Car Rental Kigali",
  description:
    "Stay updated with the latest news from Limoz Rwanda. New fleet additions, special offers, company achievements, and Rwanda travel updates.",
  keywords: [
    "Limoz Rwanda news",
    "car rental updates Kigali",
    "new fleet arrivals",
    "Rwanda travel news",
    "Limoz announcements",
  ],
}

export default function NewsPage() {
  return <NewsPageClient />
}
