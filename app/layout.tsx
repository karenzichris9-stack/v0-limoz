import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { LanguageProvider } from "@/lib/language-context"
import { PageTransition } from "@/components/page-transition"
import { RouteProgress } from "@/components/route-progress"

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
        <link rel="preload" href="/images/dji-20251020-114443-765-e2-80-afam-video.MP4" as="video" type="video/mp4" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "TravelAgency", "AutoRental"],
              "@id": "https://limozrwanda.com",
              name: "Limoz Rwanda Ltd",
              alternateName: ["Limoz Rwanda", "Limoz Car Rental", "Limoz Tours"],
              image: "https://limozrwanda.com/land-cruiser-exterior-side-angle.jpg",
              logo: "https://limozrwanda.com/limoz-logo.png",
              url: "https://limozrwanda.com",
              telephone: "+250782280204",
              email: "info@limozrwanda.com",
              priceRange: "$$-$$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Kacyiru plot 20, Gasabo district, Near Police Headquarters",
                addressLocality: "Kigali",
                addressRegion: "Kigali City",
                postalCode: "KG 9 Ave",
                addressCountry: "RW",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -1.9403,
                longitude: 30.0574,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "00:00",
                closes: "23:59",
              },
              sameAs: [
                "https://www.facebook.com/share/17bspxbw33/?mibextid=wwXIfr",
                "https://www.instagram.com/limoz_rwanda?igsh=MTQ4YmtsNXc4ZTFkdA==",
                "https://www.tiktok.com/@limoz.rwanda?_r=1&_t=ZM-918nrCM33m4",
              ],
              description:
                "Leading car rental and tour company in Kigali, Rwanda offering luxury vehicles, safari tours, airport transfers, and professional drivers. Available 24/7 with competitive rates.",
              areaServed: [
                {
                  "@type": "City",
                  name: "Kigali",
                },
                {
                  "@type": "Country",
                  name: "Rwanda",
                },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Car Rental & Tour Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Luxury Car Rental",
                      description:
                        "Premium vehicles including Land Cruiser, Mercedes-Benz, Toyota Prado, and executive sedans for rent in Kigali",
                      brand: ["Toyota", "Mercedes-Benz", "BYD"],
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Rwanda Safari Tours",
                      description:
                        "Gorilla trekking in Volcanoes NP, Akagera game drives, Nyungwe canopy walks, and cultural tours",
                      areaServed: "Rwanda",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Kigali Airport Transfers",
                      description:
                        "24/7 airport pickup and drop-off service at Kigali International Airport with professional drivers",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Executive Chauffeur Service",
                      description:
                        "Professional chauffeur-driven luxury transport for business executives and VIP clients in Rwanda",
                    },
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                bestRating: "5",
                worstRating: "1",
                reviewCount: "150",
              },
              paymentAccepted: "Cash, Credit Card, Bank Transfer, Mobile Money",
              currenciesAccepted: "RWF, USD",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://limozrwanda.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Our Fleet",
                  item: "https://limozrwanda.com/fleet",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Tours & Safaris",
                  item: "https://limozrwanda.com/tours",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Booking",
                  item: "https://limozrwanda.com/booking",
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How much does car rental cost in Kigali, Rwanda?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Car rental prices in Kigali vary by vehicle type. Standard cars start from $40/day, SUVs like Toyota Prado from $80/day, Land Cruiser from $120/day, and luxury sedans from $100/day. Long-term and monthly rentals receive discounted rates. Contact us for exact pricing.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do I need a driver for car rental in Rwanda?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We offer both self-drive and chauffeur-driven options. Many clients prefer our professional drivers who know Rwanda's roads, speak English/French/Kinyarwanda, and can serve as tour guides. Driver services include fuel, accommodation if overnight trips.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I rent a car for gorilla trekking in Rwanda?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! We provide 4x4 safari vehicles perfect for gorilla trekking to Volcanoes National Park. Our Land Cruisers and Prados handle mountain roads excellently. We can arrange complete packages including permits, accommodation, and experienced driver-guides.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do I book a car rental in Kigali?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Book online 24/7 through our website with instant confirmation. You can also call/WhatsApp +250 782 280 204 or email info@limozrwanda.com. We accept bookings via mobile money, bank transfer, or credit card with flexible payment options.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you provide airport transfers in Kigali?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we offer 24/7 Kigali International Airport transfer services. Our drivers meet you at arrivals with name boards, assist with luggage, and ensure comfortable transport to your hotel. Book in advance or call upon arrival.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What vehicles do you have for safari in Rwanda?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our safari fleet includes Toyota Land Cruiser 4x4s, Land Cruiser Prado, and modified safari vehicles with pop-up roofs for game viewing. All vehicles are regularly serviced, GPS-equipped, and driven by experienced safari guides familiar with Akagera, Volcanoes, and Nyungwe parks.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What documents do I need to rent a car in Rwanda?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "For self-drive rentals: valid driver's license (international license if not from Rwanda), passport copy, and deposit. For chauffeur-driven services: just your passport for identification. We handle all vehicle documentation and insurance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you offer long-term car rental in Kigali?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! We offer weekly, monthly, and long-term rental packages at discounted rates for expats, NGOs, businesses, and extended tourists. Includes regular maintenance, 24/7 roadside assistance, and flexible contract terms. Contact us for corporate rates.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
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
