"use client"

import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import { useState } from "react"
import { ChevronDown, ChevronUp, User, Building2 } from "lucide-react"

const mfkBoardMembers = [
  {
    id: 1,
    name: "Mbundu Faustin",
    role: "Chairman of MFK Group",
    department: "MFK Group Board",
    email: "chairman@mfkgroup.rw",
  },
]

const executiveLeadership = [
  {
    id: 2,
    name: "Kamanzi James",
    role: "Executive Director",
    department: "Executive Leadership",
    email: "director@limozrwanda.com",
  },
  {
    id: 3,
    name: "Kansiime Julius",
    role: "Chief Operating Officer",
    department: "Executive Leadership",
    email: "coo@limozrwanda.com",
  },
]

const operationalLeadership = [
  {
    id: 4,
    name: "Cassa",
    role: "Managing Director",
    department: "Operational Leadership",
    email: "md@limozrwanda.com",
  },
  {
    id: 5,
    name: "Mugisha",
    role: "Fleet and Logistics Officer",
    department: "Operational Leadership",
    email: "fleet@limozrwanda.com",
  },
  {
    id: 6,
    name: "Lisa",
    role: "Sales Manager",
    department: "Operational Leadership",
    email: "sales@limozrwanda.com",
  },
]

type FilterType = "all" | "board" | "executive" | "operational"

export default function AboutClientPage() {
  const { t } = useLanguage()
  const [activeFilter, setActiveFilter] = useState<FilterType>("all")
  const [boardExpanded, setBoardExpanded] = useState(true)
  const [executiveExpanded, setExecutiveExpanded] = useState(true)
  const [operationalExpanded, setOperationalExpanded] = useState(true)

  const showBoard = activeFilter === "all" || activeFilter === "board"
  const showExecutive = activeFilter === "all" || activeFilter === "executive"
  const showOperational = activeFilter === "all" || activeFilter === "operational"

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
            {t("aboutPage.title")}
          </h1>
          <div className="w-24 h-1 bg-[#f39c12] mx-auto"></div>
        </div>

        {/* About Us Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-1 h-16 bg-[#f39c12] rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t("aboutPage.excellence")}</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">{t("aboutPage.excellenceText")}</p>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-[#f39c12]/5 to-white p-8 md:p-12 rounded-2xl shadow-sm border border-[#f39c12]/10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-1 h-16 bg-[#f39c12] rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t("aboutPage.whyUs")}</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">{t("aboutPage.whyUsText")}</p>
          </div>
        </section>

        {/* Reliability Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-1 h-16 bg-[#f39c12] rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t("aboutPage.reliability")}</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">{t("aboutPage.reliabilityText")}</p>
          </div>
        </section>

        {/* Our Service Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-[#f39c12]/5 to-white p-8 md:p-12 rounded-2xl shadow-sm border border-[#f39c12]/10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-1 h-16 bg-[#f39c12] rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t("aboutPage.service")}</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">{t("aboutPage.serviceText")}</p>
          </div>
        </section>

        {/* Our Fleet Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-1 h-16 bg-[#f39c12] rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t("aboutPage.fleet")}</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">{t("aboutPage.fleetText")}</p>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2c4a6e] rounded-2xl p-8 md:p-12">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Building2 className="w-8 h-8 text-white/80" />
              </div>
              <div>
                <p className="text-white/60 text-sm font-medium tracking-wider uppercase mb-2">Part of</p>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">The MFK Group</h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  Limoz Rwanda Ltd operates under the MFK Group, a diversified conglomerate committed to excellence
                  across multiple industries. This partnership strengthens our capacity to deliver world-class
                  transportation and car rental services throughout Rwanda and the East African region.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("aboutPage.management")}</h2>
            <p className="text-gray-600">{t("aboutPage.managementSubtitle")}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeFilter === "all" ? "bg-[#f39c12] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveFilter("board")}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeFilter === "board" ? "bg-[#f39c12] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              MFK Group Board
            </button>
            <button
              onClick={() => setActiveFilter("executive")}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeFilter === "executive" ? "bg-[#f39c12] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Executive Leadership
            </button>
            <button
              onClick={() => setActiveFilter("operational")}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeFilter === "operational"
                  ? "bg-[#f39c12] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Operational Leadership
            </button>
          </div>

          {showBoard && (
            <div className="mb-6 bg-gradient-to-r from-[#1e3a5f]/5 to-[#2c4a6e]/5 rounded-xl border border-[#1e3a5f]/20 overflow-hidden">
              <button
                onClick={() => setBoardExpanded(!boardExpanded)}
                className="w-full flex items-center justify-between p-5 hover:bg-[#1e3a5f]/5 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-[#f39c12]" />
                  <h3 className="text-lg font-semibold text-gray-900">MFK Group Board</h3>
                  <span className="bg-[#1e3a5f]/10 text-[#1e3a5f] text-sm px-3 py-1 rounded-full font-medium">
                    {mfkBoardMembers.length} member
                  </span>
                </div>
                {boardExpanded ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>

              {boardExpanded && (
                <div className="p-5 pt-0">
                  {mfkBoardMembers.map((member) => (
                    <div key={member.id} className="bg-white rounded-xl p-6 border border-[#f39c12]/30 shadow-sm">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#1e3a5f] to-[#2c4a6e] rounded-full flex items-center justify-center flex-shrink-0">
                          <User className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-bold text-xl text-gray-900">{member.name}</h4>
                              <p className="text-[#f39c12] font-semibold">{member.role}</p>
                            </div>
                          </div>
                          <p className="text-gray-500 text-sm mt-2">{member.department}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Executive Leadership Accordion */}
          {showExecutive && (
            <div className="mb-6 bg-white rounded-xl border border-gray-200 overflow-hidden">
              <button
                onClick={() => setExecutiveExpanded(!executiveExpanded)}
                className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-semibold text-gray-900">Executive / Senior Leadership</h3>
                  <span className="bg-[#f39c12]/10 text-[#f39c12] text-sm px-3 py-1 rounded-full font-medium">
                    {executiveLeadership.length} members
                  </span>
                </div>
                {executiveExpanded ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>

              {executiveExpanded && (
                <div className="p-5 pt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {executiveLeadership.map((member) => (
                    <div
                      key={member.id}
                      className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-gray-200 transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                          <User className="w-7 h-7 text-gray-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-semibold text-gray-900">{member.name}</h4>
                              <p className="text-[#f39c12] text-sm font-medium">{member.role}</p>
                            </div>
                            <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          </div>
                          <p className="text-gray-500 text-sm mt-1">{member.department}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Operational Leadership Accordion */}
          {showOperational && (
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <button
                onClick={() => setOperationalExpanded(!operationalExpanded)}
                className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-semibold text-gray-900">Operational Leadership</h3>
                  <span className="bg-[#f39c12]/10 text-[#f39c12] text-sm px-3 py-1 rounded-full font-medium">
                    {operationalLeadership.length} members
                  </span>
                </div>
                {operationalExpanded ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>

              {operationalExpanded && (
                <div className="p-5 pt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {operationalLeadership.map((member) => (
                    <div
                      key={member.id}
                      className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-gray-200 transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                          <User className="w-7 h-7 text-gray-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-semibold text-gray-900">{member.name}</h4>
                              <p className="text-[#f39c12] text-sm font-medium">{member.role}</p>
                            </div>
                            <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          </div>
                          <p className="text-gray-500 text-sm mt-1">{member.department}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="text-center py-16 bg-gradient-to-r from-[#f39c12] to-[#e67e22] rounded-2xl shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white px-4">{t("aboutPage.cta")}</h2>
          <a
            href="/contact"
            className="inline-block bg-white text-[#f39c12] px-10 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold text-lg shadow-md hover:shadow-xl transform hover:scale-105"
          >
            {t("aboutPage.ctaButton")}
          </a>
        </section>
      </div>
      <Footer />
    </div>
  )
}
