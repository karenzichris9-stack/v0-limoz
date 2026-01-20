import type { Metadata } from "next"
import ClientToursPage from "./ClientToursPage"

export const metadata: Metadata = {
  title: "Rwanda Tours & Safaris 2025 - Gorilla Trekking, Akagera Safari, Nyungwe | Limoz Rwanda",
  description:
    "Best Rwanda safari tours: Gorilla trekking Volcanoes NP ($1500), Akagera wildlife safari, Nyungwe canopy walk, Lake Kivu tours, Kigali city tours. Professional guides, 4x4 transport, all-inclusive packages. Book your Rwanda adventure today!",
  keywords: [
    "Rwanda tours 2025",
    "gorilla trekking Rwanda",
    "Volcanoes National Park tours",
    "Akagera safari Rwanda",
    "Nyungwe canopy walk",
    "Rwanda safari packages",
    "Kigali tour operator",
    "Rwanda wildlife safari",
    "gorilla trekking permits Rwanda",
    "mountain gorilla tours",
    "Rwanda cultural tours",
    "Lake Kivu tour",
    "Kigali city tour",
    "Rwanda holiday packages",
    "East Africa safari",
  ],
  openGraph: {
    title: "Rwanda Tours & Safaris - Gorillas, Wildlife, Culture | Limoz Rwanda",
    description:
      "Experience mountain gorillas, big five safari, rainforest adventures. Expert guides, comfortable 4x4s, all-inclusive.",
    url: "https://limozrwanda.com/tours",
    images: [
      {
        url: "/gorilla-trekking-volcanoes-national-park.jpg",
        width: 1200,
        height: 630,
        alt: "Gorilla trekking tour in Volcanoes National Park, Rwanda",
      },
    ],
  },
  alternates: {
    canonical: "https://limozrwanda.com/tours",
  },
}

export default function ToursPage() {
  return <ClientToursPage />
}
