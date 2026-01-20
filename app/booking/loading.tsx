export default function BookingLoading() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero skeleton */}
      <div className="relative h-[30vh] bg-muted animate-pulse">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="h-10 w-64 mx-auto bg-muted-foreground/20 rounded-lg mb-4" />
            <div className="h-5 w-48 mx-auto bg-muted-foreground/20 rounded-lg" />
          </div>
        </div>
      </div>

      {/* Form skeleton */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-card rounded-lg p-8 shadow-sm">
          <div className="space-y-6">
            {/* Form fields skeleton */}
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="h-4 w-24 bg-muted rounded" />
                <div className="h-12 w-full bg-muted rounded-md" />
              </div>
            ))}
            {/* Submit button skeleton */}
            <div className="h-12 w-full bg-[#f39c12]/30 rounded-md mt-8" />
          </div>
        </div>
      </div>
    </div>
  )
}
