"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Globe } from "lucide-react"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(path)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out border-b ${
        scrolled
          ? "bg-black/98 backdrop-blur-md border-white/20 shadow-xl"
          : "bg-black/95 backdrop-blur-sm border-white/10"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-110">
              <Image src="/limoz-logo.png" alt="Limoz Rwanda Logo" fill className="object-contain" priority />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-sm">{t("header.logo")}</span>
              <span className="text-white/70 text-xs">{t("header.tagline")}</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={`${isActive("/") ? "text-[#f39c12]" : "text-white"} hover:text-[#f39c12] transition-all duration-300 text-sm font-medium hover:scale-105`}
            >
              {t("header.home")}
            </Link>
            <Link
              href="/about"
              className={`${isActive("/about") ? "text-[#f39c12]" : "text-white"} hover:text-[#f39c12] transition-all duration-300 text-sm font-medium hover:scale-105`}
            >
              {t("header.about")}
            </Link>
            <Link
              href="/tours"
              className={`${isActive("/tours") ? "text-[#f39c12]" : "text-white"} hover:text-[#f39c12] transition-all duration-300 text-sm font-medium hover:scale-105`}
            >
              {t("header.tours")}
            </Link>
            <Link
              href="/fleet"
              className={`${isActive("/fleet") ? "text-[#f39c12]" : "text-white"} hover:text-[#f39c12] transition-all duration-300 text-sm font-medium hover:scale-105`}
            >
              {t("header.fleet")}
            </Link>
            <Link
              href="/booking"
              className={`${isActive("/booking") ? "text-[#f39c12]" : "text-white"} hover:text-[#f39c12] transition-all duration-300 text-sm font-medium hover:scale-105`}
            >
              {t("header.booking")}
            </Link>
            <Link
              href="/news"
              className={`${isActive("/news") ? "text-[#f39c12]" : "text-white"} hover:text-[#f39c12] transition-all duration-300 text-sm font-medium hover:scale-105`}
            >
              {t("header.news")}
            </Link>
            <Link
              href="/contact"
              className={`${isActive("/contact") ? "text-[#f39c12]" : "text-white"} hover:text-[#f39c12] transition-all duration-300 text-sm font-medium hover:scale-105`}
            >
              {t("header.contact")}
            </Link>

            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-white/20">
              <Globe className="w-4 h-4 text-white/70" />
              <button
                onClick={() => setLanguage("en")}
                aria-label="Switch to English"
                className={`text-sm font-medium transition-all duration-300 hover:scale-110 ${language === "en" ? "text-[#f39c12]" : "text-white/70 hover:text-white"}`}
              >
                EN
              </button>
              <span className="text-white/30">|</span>
              <button
                onClick={() => setLanguage("fr")}
                aria-label="Switch to French"
                className={`text-sm font-medium transition-all duration-300 hover:scale-110 ${language === "fr" ? "text-[#f39c12]" : "text-white/70 hover:text-white"}`}
              >
                FR
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white transition-transform duration-300 hover:scale-110"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 rotate-90 transition-transform duration-300" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10 animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className={`${isActive("/") ? "text-[#f39c12]" : "text-white"} hover:text-[#f39c12] transition-colors text-sm font-medium`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("header.home")}
              </Link>
              <Link
                href="/about"
                className={`${isActive("/about") ? "text-[#f39c12]" : "text-white"} hover:text-[#f39c12] transition-colors text-sm font-medium`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("header.about")}
              </Link>
              <Link
                href="/tours"
                className={`${isActive("/tours") ? "text-[#f39c12]" : "text-white"} hover:text-[#f39c12] transition-colors text-sm font-medium`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("header.tours")}
              </Link>
              <Link
                href="/fleet"
                className={`${isActive("/fleet") ? "text-[#f39c12]" : "text-white"} hover:text-[#f39c12] transition-colors text-sm font-medium`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("header.fleet")}
              </Link>
              <Link
                href="/booking"
                className={`${isActive("/booking") ? "text-[#f39c12]" : "text-white"} hover:text-[#f39c12] transition-colors text-sm font-medium`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("header.booking")}
              </Link>
              <Link
                href="/news"
                className={`${isActive("/news") ? "text-[#f39c12]" : "text-white"} hover:text-[#f39c12] transition-colors text-sm font-medium`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("header.news")}
              </Link>
              <Link
                href="/contact"
                className={`${isActive("/contact") ? "text-[#f39c12]" : "text-white"} hover:text-[#f39c12] transition-colors text-sm font-medium`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("header.contact")}
              </Link>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <Globe className="w-4 h-4 text-white/70" />
                <button
                  onClick={() => {
                    setLanguage("en")
                    setMobileMenuOpen(false)
                  }}
                  aria-label="Switch to English"
                  className={`text-sm font-medium transition-colors ${language === "en" ? "text-[#f39c12]" : "text-white/70"}`}
                >
                  EN
                </button>
                <span className="text-white/30">|</span>
                <button
                  onClick={() => {
                    setLanguage("fr")
                    setMobileMenuOpen(false)
                  }}
                  aria-label="Switch to French"
                  className={`text-sm font-medium transition-colors ${language === "fr" ? "text-[#f39c12]" : "text-white/70"}`}
                >
                  FR
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
