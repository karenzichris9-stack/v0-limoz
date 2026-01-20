export default function AboutLoading() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero skeleton */}
      <div className="relative h-[40vh] bg-muted animate-pulse">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="h-12 w-56 mx-auto bg-muted-foreground/20 rounded-lg mb-4" />
            <div className="h-6 w-72 mx-auto bg-muted-foreground/20 rounded-lg" />
          </div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-4">
            <div className="h-8 w-48 bg-muted rounded-lg" />
            <div className="h-4 w-full bg-muted rounded" />
            <div className="h-4 w-full bg-muted rounded" />
            <div className="h-4 w-3/4 bg-muted rounded" />
          </div>
          <div className="h-64 bg-muted rounded-lg" />
        </div>

        {/* Stats skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="text-center p-6 bg-card rounded-lg">
              <div className="h-10 w-20 mx-auto bg-muted rounded mb-2" />
              <div className="h-4 w-24 mx-auto bg-muted rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
