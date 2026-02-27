"use client"

import { useEffect } from "react"

const localBusiness = {
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
  geo: { "@type": "GeoCoordinates", latitude: -1.9403, longitude: 30.0574 },
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
    { "@type": "City", name: "Kigali" },
    { "@type": "Country", name: "Rwanda" },
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
          description: "Premium vehicles including Land Cruiser, Mercedes-Benz, Toyota Prado for rent in Kigali",
          brand: ["Toyota", "Mercedes-Benz", "BYD"],
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Rwanda Safari Tours",
          description: "Gorilla trekking in Volcanoes NP, Akagera game drives, Nyungwe canopy walks",
          areaServed: "Rwanda",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Kigali Airport Transfers",
          description: "24/7 airport pickup and drop-off at Kigali International Airport",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Executive Chauffeur Service",
          description: "Professional chauffeur-driven luxury transport for business executives and VIP clients",
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
}

const breadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://limozrwanda.com/" },
    { "@type": "ListItem", position: 2, name: "Our Fleet", item: "https://limozrwanda.com/fleet" },
    { "@type": "ListItem", position: 3, name: "Tours & Safaris", item: "https://limozrwanda.com/tours" },
    { "@type": "ListItem", position: 4, name: "Booking", item: "https://limozrwanda.com/booking" },
  ],
}

const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does car rental cost in Kigali, Rwanda?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Car rental prices in Kigali vary by vehicle type. Standard cars start from $40/day, SUVs like Toyota Prado from $80/day, Land Cruiser from $120/day, and luxury sedans from $100/day.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a driver for car rental in Rwanda?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer both self-drive and chauffeur-driven options. Many clients prefer our professional drivers who know Rwanda's roads and speak English/French/Kinyarwanda.",
      },
    },
    {
      "@type": "Question",
      name: "Can I rent a car for gorilla trekking in Rwanda?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We provide 4x4 safari vehicles perfect for gorilla trekking to Volcanoes National Park.",
      },
    },
    {
      "@type": "Question",
      name: "How do I book a car rental in Kigali?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Book online 24/7 through our website with instant confirmation. You can also call/WhatsApp +250 782 280 204 or email info@limozrwanda.com.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide airport transfers in Kigali?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer 24/7 Kigali International Airport transfer services. Our drivers meet you at arrivals with name boards.",
      },
    },
    {
      "@type": "Question",
      name: "What vehicles do you have for safari in Rwanda?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our safari fleet includes Toyota Land Cruiser 4x4s, Land Cruiser Prado, and modified safari vehicles with pop-up roofs.",
      },
    },
    {
      "@type": "Question",
      name: "What documents do I need to rent a car in Rwanda?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For self-drive: valid driver's license (international if not from Rwanda), passport copy, and deposit. For chauffeur-driven: just your passport.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer long-term car rental in Kigali?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We offer weekly, monthly, and long-term rental packages at discounted rates for expats, NGOs, businesses, and extended tourists.",
      },
    },
  ],
}

function injectJsonLd(id: string, data: object) {
  if (document.getElementById(id)) return
  const script = document.createElement("script")
  script.id = id
  script.type = "application/ld+json"
  script.textContent = JSON.stringify(data)
  document.head.appendChild(script)
}

export function JsonLd() {
  useEffect(() => {
    injectJsonLd("ld-local-business", localBusiness)
    injectJsonLd("ld-breadcrumbs", breadcrumbs)
    injectJsonLd("ld-faq", faq)
  }, [])

  return null
}
