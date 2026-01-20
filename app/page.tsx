import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { WhyChoose } from "@/components/why-choose"
import { HowItWorks } from "@/components/how-it-works"
import { Testimonials } from "@/components/testimonials"
import { AppPromo } from "@/components/app-promo"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <WhyChoose />
      <HowItWorks />
      <Testimonials />
      <AppPromo />
      <Footer />
    </div>
  )
}
