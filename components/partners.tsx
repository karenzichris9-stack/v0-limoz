'use client'

export function Partners() {
  const partners = [
    {
      name: "Garden Fresh Rwanda",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/garden%20fresh%20logo-qZpgbXPveAMlY5Qupq94WuUXXEDDVt.png",
      alt: "Garden Fresh Rwanda"
    },
    {
      name: "Goritech Garage Services",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gori-SytMdLNp0eSlOSt0h5def2u4skMHmg.png",
      alt: "Goritech Garage Services"
    },
    {
      name: "Anko Properties Limited",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ANKO%20PROPERTIES-CeO4shZ2XRnzDBrcuGfYVEsiuxWMGG.png",
      alt: "Anko Properties Limited"
    },
    {
      name: "Gorilland Safaris Ltd",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gorilland-NcfExEM2sdJjlhV5nGnVkfEyUrFFJ3.png",
      alt: "Gorilland Safaris Ltd"
    }
  ]

  return (
    <section className="py-16 md:py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Partners</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted by leading businesses in Rwanda for reliable transportation and logistics solutions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 h-40 w-full"
            >
              <img
                src={partner.logo}
                alt={partner.alt}
                className="h-24 w-auto object-contain mb-3"
                loading="lazy"
              />
              <p className="text-sm text-gray-700 font-medium text-center">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
