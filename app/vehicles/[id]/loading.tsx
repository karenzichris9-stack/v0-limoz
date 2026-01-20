export default function VehicleDetailLoading() {
  return (
    <div className="min-h-screen bg-background">
      {/* Back button skeleton */}
      <div className="container mx-auto px-4 pt-6">
        <div className="h-10 w-24 bg-muted rounded-md" />
      </div>

      {/* Vehicle content skeleton */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image gallery skeleton */}
          <div className="space-y-4">
            <div className="aspect-video bg-muted rounded-lg animate-pulse" />
            <div className="grid grid-cols-4 gap-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="aspect-video bg-muted rounded-md animate-pulse" />
              ))}
            </div>
          </div>

          {/* Details skeleton */}
          <div className="space-y-6">
            <div className="h-10 w-3/4 bg-muted rounded-lg" />
            <div className="h-6 w-1/2 bg-muted rounded" />

            {/* Specs skeleton */}
            <div className="grid grid-cols-2 gap-4 py-6 border-y">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="space-y-2">
                  <div className="h-4 w-20 bg-muted rounded" />
                  <div className="h-6 w-24 bg-muted rounded" />
                </div>
              ))}
            </div>

            {/* Description skeleton */}
            <div className="space-y-3">
              <div className="h-4 w-full bg-muted rounded" />
              <div className="h-4 w-full bg-muted rounded" />
              <div className="h-4 w-2/3 bg-muted rounded" />
            </div>

            {/* Button skeleton */}
            <div className="h-14 w-full bg-[#f39c12]/30 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  )
}
