"use client"

import { Phone, MapPin, Mail, Facebook, Instagram } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Phone */}
          <div>
            <h3 className="text-[#f39c12] text-xl font-bold mb-6">{t("footer.phone")}</h3>
            <div className="space-y-3">
              <a
                href="tel:+250788309189"
                className="flex items-center gap-3 text-gray-300 hover:text-[#f39c12] transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>(+250) 788 309 189</span>
              </a>
              <a
                href="tel:+250788307829"
                className="flex items-center gap-3 text-gray-300 hover:text-[#f39c12] transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>(+250) 788 307 829</span>
              </a>
              <a
                href="https://wa.me/250782280204"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-green-500 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-[#f39c12] text-xl font-bold mb-6">{t("footer.address")}</h3>
            <div className="flex items-start gap-3 text-gray-300">
              <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
              <span>{t("footer.location1")}</span>
            </div>
          </div>

          {/* Email */}
          <div>
            <h3 className="text-[#f39c12] text-xl font-bold mb-6">{t("footer.email")}</h3>
            <div className="space-y-3">
              <a
                href="mailto:info@limozrwanda.com"
                className="flex items-center gap-3 text-gray-300 hover:text-[#f39c12] transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>info@limozrwanda.com</span>
              </a>
              <a
                href="mailto:booking@limozrwanda.com"
                className="flex items-center gap-3 text-gray-300 hover:text-[#f39c12] transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>booking@limozrwanda.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">{t("footer.copyright")}</p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/share/17bspxbw33/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#f39c12] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/limoz_rwanda?igsh=MTQ4YmtsNXc4ZTFkdA=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#f39c12] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@limoz.rwanda?_r=1&_t=ZM-918nrCM33m4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#f39c12] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a
                href="https://wa.me/250782280204"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
