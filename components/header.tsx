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
    if (path === "/") return pathname === "/"
    return pathname.startsWith(path)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out border-b ${
        scrolled
          ? "bg-gradient-to-r from-[#0f0f23]/98 via-[#1a1a3e]/98 to-[#0f0f23]/98 backdrop-blur-md border-[#ffd700]/20 shadow-xl shadow-[#ffd700]/5"
          : "bg-gradient-to-r from-[#0f0f23]/95 via-[#1a1a3e]/95 to-[#0f0f23]/95 backdrop-blur-sm border-[#ffd700]/10"
      }`}
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ffd700] to-transparent opacity-60" />

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-110">
              <Image src="/limoz-logo.png" alt="Limoz Rwanda Logo" fill className="object-contain" priority />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm bg-gradient-to-r from-[#ffd700] via-white to-[#ffd700] bg-clip-text text-transparent animate-gold-shimmer">
                {t("header.logo")}
              </span>
              <span className="text-white/70 text-xs">{t("header.tagline")}</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {[
              { href: "/", key: "home" },
              { href: "/about", key: "about" },
              { href: "/tours", key: "tours" },
              { href: "/fleet", key: "fleet" },
              { href: "/booking", key: "booking" },
              { href: "/news", key: "news" },
              { href: "/contact", key: "contact" },
            ].map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`relative ${isActive(item.href) ? "text-[#ffd700]" : "text-white"} hover:text-[#ffd700] transition-all duration-300 text-sm font-medium hover:scale-105`}
              >
                {t(`header.${item.key}`)}
                {isActive(item.href) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ffd700] to-transparent" />
                )}
              </Link>
            ))}

            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-[#ffd700]/20">
              <Globe className="w-4 h-4 text-[#ffd700]/70" />
              <button
                onClick={() => setLanguage("en")}
                aria-label="Switch to English"
                className={`text-sm font-medium transition-all duration-300 hover:scale-110 ${language === "en" ? "text-[#ffd700]" : "text-white/70 hover:text-white"}`}
              >
                EN
              </button>
              <span className="text-[#ffd700]/30">|</span>
              <button
                onClick={() => setLanguage("fr")}
                aria-label="Switch to French"
                className={`text-sm font-medium transition-all duration-300 hover:scale-110 ${language === "fr" ? "text-[#ffd700]" : "text-white/70 hover:text-white"}`}
              >
                FR
              </button>
            </div>
          </nav>

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

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#ffd700]/20 animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col gap-4">
              {[
                { href: "/", key: "home" },
                { href: "/about", key: "about" },
                { href: "/tours", key: "tours" },
                { href: "/fleet", key: "fleet" },
                { href: "/booking", key: "booking" },
                { href: "/news", key: "news" },
                { href: "/contact", key: "contact" },
              ].map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`${isActive(item.href) ? "text-[#ffd700]" : "text-white"} hover:text-[#ffd700] transition-colors text-sm font-medium`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t(`header.${item.key}`)}
                </Link>
              ))}

              <div className="flex items-center gap-3 pt-4 border-t border-[#ffd700]/20">
                <Globe className="w-4 h-4 text-[#ffd700]/70" />
                <button
                  onClick={() => {
                    setLanguage("en")
                    setMobileMenuOpen(false)
                  }}
                  aria-label="Switch to English"
                  className={`text-sm font-medium transition-colors ${language === "en" ? "text-[#ffd700]" : "text-white/70"}`}
                >
                  EN
                </button>
                <span className="text-[#ffd700]/30">|</span>
                <button
                  onClick={() => {
                    setLanguage("fr")
                    setMobileMenuOpen(false)
                  }}
                  aria-label="Switch to French"
                  className={`text-sm font-medium transition-colors ${language === "fr" ? "text-[#ffd700]" : "text-white/70"}`}
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
