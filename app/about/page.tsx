import type { Metadata } from "next"
import AboutClientPage from "./about-client"

export const metadata: Metadata = {
  title: "About Limoz Rwanda - Leading Car Rental Company in Kigali | Est. 2010",
  description:
    "Limoz Rwanda Ltd is a trusted car rental company in Kigali with over 100 vehicles. Professional drivers, 24/7 service, and competitive rates for business & leisure travel in Rwanda.",
  keywords: [
    "about Limoz Rwanda",
    "car rental company Kigali",
    "Rwanda transport services",
    "professional drivers Rwanda",
    "Kigali vehicle rental",
    "Rwanda car hire company",
  ],
}

export default function AboutPage() {
  return <AboutClientPage />
}
