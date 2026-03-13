import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { LanguageProvider } from "@/lib/language-context"
import { PageTransition } from "@/components/page-transition"
import { RouteProgress } from "@/components/route-progress"
import { JsonLd } from "@/components/json-ld"

import { Suspense } from "react"


const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Limoz Rwanda - Car Rental Kigali | Safari Tours Rwanda | 24/7 Airport Transfers",
  description:
    "Best car rental company in Kigali, Rwanda. Rent luxury vehicles, 4x4 safari cars, Land Cruiser, Mercedes-Benz. Gorilla trekking tours, Akagera safari, airport transfers. Professional drivers, competitive prices. Book online 24/7 or call +250 782 280 204.",
  keywords: [
    "car rental Kigali Rwanda",
    "rent a car Kigali",
    "car hire Kigali",
    "Rwanda car rental",
    "Kigali airport car rental",
    "cheap car rental Kigali",
    "4x4 rental Rwanda",
    "safari car rental Rwanda",
    "Land Cruiser rental Kigali",
    "Toyota Prado hire Rwanda",
    "Mercedes rental Kigali Rwanda",
    "luxury car rental Kigali",
    "executive car hire Rwanda",
    "Rwanda safari tours",
    "gorilla trekking transport Rwanda",
    "Volcanoes National Park car rental",
    "Akagera safari vehicle",
    "Nyungwe forest car hire",
    "Rwanda tour operator",
    "Kigali city tour",
    "airport transfer Kigali",
    "Rwanda ground transportation",
    "self drive car rental Rwanda",
    "chauffeur driven car Rwanda",
    "wedding car rental Kigali",
    "business car rental Rwanda",
    "long term car rental Kigali",
    "monthly car rental Kigali",
  ],
  authors: [{ name: "Limoz Rwanda Ltd" }],
  creator: "Limoz Rwanda Ltd",
  publisher: "Limoz Rwanda Ltd",
  applicationName: "Limoz Rwanda",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  metadataBase: new URL("https://limozrwanda.com"),
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/limoz-logo.png", type: "image/png", sizes: "512x512" }],
    apple: [{ url: "/limoz-logo.png", sizes: "180x180", type: "image/png" }],
  },
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      fr: "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["fr_FR"],
    url: "https://limozrwanda.com",
    siteName: "Limoz Rwanda - Car Rental & Safari Tours",
    title: "Limoz Rwanda - #1 Car Rental in Kigali | Safari Tours | Airport Transfers",
    description:
      "Rwanda's leading car rental company with 100+ vehicles. Luxury sedans, safari 4x4s, airport transfers, gorilla trekking tours. Professional service, competitive rates. Book now!",
    images: [
      {
        url: "/land-cruiser-exterior-side-angle.jpg",
        width: 1200,
        height: 630,
        alt: "Limoz Rwanda - Premium Toyota Land Cruiser car rental service in Kigali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Limoz Rwanda - Premium Car Rental & Tours in Kigali",
    description: "Leading car rental company in Rwanda. Luxury vehicles, safari tours, and professional service 24/7.",
    images: ["/land-cruiser-exterior-side-angle.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code-here",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preload hero poster image for faster LCP */}
        <link rel="preload" as="image" href="/luxury-car-on-scenic-road-in-rwanda.jpg" />
      </head>
      <body className={`font-sans antialiased`}>
        <JsonLd />
        <LanguageProvider>
          <Suspense fallback={null}>
            <RouteProgress />
          </Suspense>
          <Header />
          <main>
            <PageTransition>{children}</PageTransition>
          </main>
        </LanguageProvider>
      </body>
    </html>
  )
}
