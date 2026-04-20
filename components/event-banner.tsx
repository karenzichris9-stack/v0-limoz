"use client"

export function EventBanner() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
            Events in Kigali
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Happening near you
          </p>
        </div>

        {/* Event Card */}
        <div className="flex justify-center">
          <div className="w-full max-w-sm relative">
            {/* "2 Days Left" Badge */}
            <div className="absolute top-4 right-4 z-10 bg-red-500 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-bold shadow-lg">
              2 Days Left
            </div>

            {/* Poster Card */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
              {/* Poster Image */}
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img
                  src="/cavb-poster.jpg"
                  alt="47th CAVB Men's Club Championship Rwanda 2026"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Card Content */}
              <div className="p-4 sm:p-6 text-center">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  47th CAVB Men's Championship
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-4">
                  <span className="block font-semibold">April 22 - May 2, 2026</span>
                  <span className="block">BK Arena & Petit Stade, Kigali</span>
                </p>

                {/* CTA Button */}
                <a
                  href="https://ticqet.rw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2.5 sm:py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:shadow-lg mb-3"
                >
                  Get Tickets
                </a>

                {/* Alternative Link Note */}
                <p className="text-xs sm:text-sm text-gray-600">
                  Also available on{" "}
                  <a
                    href="https://sportspass.rw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-semibold underline"
                  >
                    Sportspass.rw
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
