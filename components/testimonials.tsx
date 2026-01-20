"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { User } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Testimonials() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-16">{t("testimonials.title")}</h2>

        <div className="max-w-3xl mx-auto">
          <Card className="border-none shadow-xl">
            <CardContent className="p-8">
              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">"{t("testimonials.quote")}"</p>
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12 bg-gray-200">
                  <AvatarFallback className="bg-gray-200">
                    <User className="w-6 h-6 text-gray-600" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold text-black">{t("testimonials.author")}</p>
                  <p className="text-sm text-gray-600">{t("testimonials.verified")}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
