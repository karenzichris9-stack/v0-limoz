import { Hero } from "@/components/hero"
import { TrustIndicators } from "@/components/trust-indicators"
import { About } from "@/components/about"
import { Fleet } from "@/components/fleet"
import { WhyChoose } from "@/components/why-choose"
import { HowItWorks } from "@/components/how-it-works"
import { Testimonials } from "@/components/testimonials"
import { AppPromo } from "@/components/app-promo"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"
import { StickyBookingBar } from "@/components/sticky-booking-bar"
import { NewYearHeroBanner } from "@/components/new-year-hero-banner"
import { FestiveSectionDivider } from "@/components/festive-section-divider"

export default function Home() {
  return (
    <div className="min-h-screen">
      <NewYearHeroBanner />
      <Hero />
      <TrustIndicators />
      <About />
      <FestiveSectionDivider icon="🎆" />
      <Fleet />
      <FestiveSectionDivider icon="✨" />
      <WhyChoose />
      <HowItWorks />
      <FestiveSectionDivider icon="🎉" />
      <Testimonials />
      <AppPromo />
      <Footer />
      <FloatingCTA />
      <StickyBookingBar />
    </div>
  )
}
