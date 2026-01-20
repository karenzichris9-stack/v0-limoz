export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top loading bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-muted overflow-hidden">
        <div className="h-full w-1/3 bg-[#f39c12] animate-[loading-bar_1s_ease-in-out_infinite]" />
      </div>

      {/* Hero skeleton */}
      <div className="relative h-screen bg-muted animate-pulse">
        <div className="absolute inset-0 flex items-end justify-center pb-16">
          <div className="container mx-auto px-4 text-center">
            <div className="h-16 w-3/4 mx-auto bg-muted-foreground/20 rounded-lg mb-6" />
            <div className="h-8 w-1/2 mx-auto bg-muted-foreground/20 rounded-lg mb-12" />
            <div className="bg-white/95 py-8 px-6 md:px-12 rounded-lg max-w-3xl mx-auto">
              <div className="h-10 w-2/3 mx-auto bg-muted-foreground/20 rounded-lg mb-3" />
              <div className="h-6 w-1/2 mx-auto bg-muted-foreground/20 rounded-lg mb-6" />
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="h-12 w-40 bg-[#f39c12]/30 rounded-md" />
                <div className="h-12 w-40 bg-[#f39c12]/30 rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
