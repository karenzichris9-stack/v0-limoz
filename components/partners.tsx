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
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ANKO%20PROPERTIES-4IK1Sa2GGSQorwTg7ds5P0GCvIjrnn.png",
      alt: "Anko Properties Limited"
    },
    {
      name: "Gorilland Safaris Ltd",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gorilland-NcfExEM2sdJjlhV5nGnVkfEyUrFFJ3.png",
      alt: "Gorilland Safaris Ltd"
    }
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900">Our Partners</h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-2">
            Trusted by leading businesses in Rwanda for reliable transportation and logistics solutions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 sm:p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 bg-gray-50 hover:bg-gray-100 w-full h-32 sm:h-40"
            >
              <img
                src={partner.logo}
                alt={partner.alt}
                className="h-16 sm:h-20 md:h-24 w-auto object-contain mb-2 sm:mb-3"
                loading="lazy"
              />
              <p className="text-xs sm:text-sm md:text-base text-gray-700 font-medium text-center line-clamp-2">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
