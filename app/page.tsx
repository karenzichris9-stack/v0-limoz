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


export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <TrustIndicators />
      <About />
      <Fleet />
      <WhyChoose />
      <HowItWorks />
      <Testimonials />
      <AppPromo />
      <Footer />
      <FloatingCTA />
      <StickyBookingBar />
    </div>
  )
}
