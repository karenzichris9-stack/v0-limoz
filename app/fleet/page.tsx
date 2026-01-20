import type { Metadata } from "next"
import FleetClientPage from "./FleetClientPage"

export const metadata: Metadata = {
  title: "Car Rental Fleet Kigali - 100+ Vehicles | Land Cruiser, Mercedes, SUVs | Limoz Rwanda",
  description:
    "Rent from Rwanda's largest fleet: Land Cruiser 4x4, Mercedes-Benz, Toyota Prado, safari vehicles, executive vans. VVIP, VIP, standard cars. Daily, weekly, monthly rates. Self-drive or with driver. Kigali airport delivery available.",
  keywords: [
    "car rental fleet Kigali",
    "Land Cruiser rental Rwanda",
    "Toyota Prado hire Kigali",
    "Mercedes-Benz rental Rwanda",
    "safari vehicle hire Rwanda",
    "4x4 rental Kigali",
    "luxury car fleet Rwanda",
    "executive van rental Kigali",
    "SUV rental Rwanda",
    "BYD electric car Rwanda",
    "self drive cars Kigali",
    "monthly car rental Kigali",
  ],
  openGraph: {
    title: "100+ Vehicles Available - Car Rental Fleet in Kigali, Rwanda",
    description: "From economy to luxury: Land Cruiser, Mercedes, Prado, safari 4x4s. Best rates in Rwanda.",
    url: "https://limozrwanda.com/fleet",
    images: [
      {
        url: "/land-cruiser-exterior-side-angle.jpg",
        width: 1200,
        height: 630,
        alt: "Limoz Rwanda car rental fleet - Land Cruiser and luxury vehicles",
      },
    ],
  },
  alternates: {
    canonical: "https://limozrwanda.com/fleet",
  },
}

export default function FleetPage() {
  return <FleetClientPage />
}
