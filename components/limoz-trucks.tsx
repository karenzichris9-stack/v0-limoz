'use client'

import { useLanguage } from '@/lib/language-context'

export function LimozTrucks() {
  const { t } = useLanguage()
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t('logistics.title')}</h2>
          <p className="text-lg text-muted-foreground">
            {t('logistics.subtitle')}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Images */}
          <div className="space-y-6">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/limoz-tanker-trucks.jpg"
                alt="Limoz Tanker Trucks - Liquid Logistics Fleet"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/limoz-flatbed-trucks.jpg"
                alt="Limoz Flatbed and Cargo Trucks - General Logistics Fleet"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">{t('logistics.specializedSolutions')}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('logistics.description')}
              </p>
            </div>

            {/* Service Cards */}
            <div className="space-y-4">
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-foreground mb-1">{t('logistics.tankerTitle')}</h4>
                <p className="text-sm text-muted-foreground">
                  {t('logistics.tankerDesc')}
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-foreground mb-1">{t('logistics.flatbedTitle')}</h4>
                <p className="text-sm text-muted-foreground">
                  {t('logistics.flatbedDesc')}
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-foreground mb-1">{t('logistics.fleetMgmtTitle')}</h4>
                <p className="text-sm text-muted-foreground">
                  {t('logistics.fleetMgmtDesc')}
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="pt-4">
              <h4 className="font-semibold text-foreground mb-3">{t('logistics.capabilitiesTitle')}</h4>
              <ul className="grid grid-cols-2 gap-2">
                <li className="text-sm text-muted-foreground flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  {t('logistics.liquidBulk')}
                </li>
                <li className="text-sm text-muted-foreground flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  {t('logistics.heavyCargo')}
                </li>
                <li className="text-sm text-muted-foreground flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  {t('logistics.drivers')}
                </li>
                <li className="text-sm text-muted-foreground flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  {t('logistics.routeOpt')}
                </li>
                <li className="text-sm text-muted-foreground flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  {t('logistics.tracking')}
                </li>
                <li className="text-sm text-muted-foreground flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  {t('logistics.safety')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
