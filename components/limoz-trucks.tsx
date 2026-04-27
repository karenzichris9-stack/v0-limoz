'use client'

export function LimozTrucks() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Limoz Logistics Fleet</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive commercial transportation solutions for your business needs
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
              <h3 className="text-2xl font-semibold text-foreground mb-3">Specialized Transportation Solutions</h3>
              <p className="text-muted-foreground leading-relaxed">
                Limoz Logistics operates a modern commercial fleet designed to meet diverse transportation needs across Rwanda and beyond. Our dedicated logistics division specializes in reliable, efficient cargo movement for businesses of all sizes.
              </p>
            </div>

            {/* Service Cards */}
            <div className="space-y-4">
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-foreground mb-1">Tanker Transportation</h4>
                <p className="text-sm text-muted-foreground">
                  Professional liquid logistics with specialized tanker trucks for fuel, water, chemicals, and other liquid commodities. Equipped with safety systems and compliance certifications.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-foreground mb-1">Flatbed & General Cargo</h4>
                <p className="text-sm text-muted-foreground">
                  Versatile flatbed trucks for construction materials, machinery, heavy equipment, and general cargo. Capable of handling diverse load configurations.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-foreground mb-1">Professional Fleet Management</h4>
                <p className="text-sm text-muted-foreground">
                  Well-maintained, modern Mercedes trucks with experienced drivers ensuring timely, safe delivery of your cargo.
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="pt-4">
              <h4 className="font-semibold text-foreground mb-3">Fleet Capabilities</h4>
              <ul className="grid grid-cols-2 gap-2">
                <li className="text-sm text-muted-foreground flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Liquid bulk transport
                </li>
                <li className="text-sm text-muted-foreground flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Heavy cargo handling
                </li>
                <li className="text-sm text-muted-foreground flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Professional drivers
                </li>
                <li className="text-sm text-muted-foreground flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Route optimization
                </li>
                <li className="text-sm text-muted-foreground flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Real-time tracking
                </li>
                <li className="text-sm text-muted-foreground flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Safety compliance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
