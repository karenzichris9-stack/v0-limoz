"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { AnimatedSection } from "./animated-section"
import { useState, useEffect } from "react"

const testimonials = [
  {
    quote: "testimonials.quote",
    author: "testimonials.author",
    role: "Business Executive",
    rating: 5,
    location: "Kigali",
  },
  {
    quote:
      "Exceptional service from start to finish. The driver was punctual and professional. Highly recommend for business travel.",
    author: "Marie Claire",
    role: "Hotel Manager",
    rating: 5,
    location: "Musanze",
  },
  {
    quote: "Perfect for our safari trip! The Land Cruiser was comfortable and our guide knew all the best spots.",
    author: "James Wilson",
    role: "Tourist",
    rating: 5,
    location: "Akagera",
  },
]

export function Testimonials() {
  const { t } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrev = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-[#f39c12]/10 text-[#f39c12] text-sm font-semibold rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t("testimonials.title")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">See what our customers say about their experience with us</p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto relative">
          {/* Navigation arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          {/* Main testimonial */}
          <AnimatedSection animation="scale">
            <Card className="border-none shadow-2xl bg-white relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#f39c12]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#f39c12]/5 rounded-full translate-y-1/2 -translate-x-1/2" />

              <CardContent className="p-8 md:p-12 relative">
                <Quote className="w-12 h-12 text-[#f39c12]/20 absolute top-6 left-6" />

                {/* Rating */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 fill-[#f39c12] text-[#f39c12] transition-transform hover:scale-110"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>

                <p className="text-gray-700 text-xl md:text-2xl leading-relaxed mb-8 text-center italic transition-all duration-500">
                  "{activeIndex === 0 ? t("testimonials.quote") : testimonials[activeIndex].quote}"
                </p>

                <div className="flex items-center justify-center gap-4">
                  <Avatar className="w-14 h-14 bg-gradient-to-br from-[#f39c12] to-[#e67e22] ring-4 ring-[#f39c12]/20">
                    <AvatarFallback className="bg-transparent text-white font-bold">
                      {(activeIndex === 0 ? t("testimonials.author") : testimonials[activeIndex].author).charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <p className="font-bold text-gray-900 text-lg">
                      {activeIndex === 0 ? t("testimonials.author") : testimonials[activeIndex].author}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonials[activeIndex].role} • {testimonials[activeIndex].location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Testimonial dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false)
                  setActiveIndex(index)
                }}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-[#f39c12] w-8" : "bg-gray-300 hover:bg-gray-400 w-3"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Trust badge */}
          <AnimatedSection animation="fade-up" delay={0.3} className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-600"
                  >
                    {["JK", "MC", "JW", "PN"][i]}
                  </div>
                ))}
              </div>
              <span className="text-gray-600 text-sm font-medium">Trusted by 5,000+ customers</span>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
