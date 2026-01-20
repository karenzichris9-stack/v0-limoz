export default function ContactLoading() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero skeleton */}
      <div className="relative h-[30vh] bg-muted animate-pulse">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="h-10 w-48 mx-auto bg-muted-foreground/20 rounded-lg mb-4" />
            <div className="h-5 w-64 mx-auto bg-muted-foreground/20 rounded-lg" />
          </div>
        </div>
      </div>

      {/* Contact content skeleton */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info skeleton */}
          <div className="space-y-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-12 h-12 bg-muted rounded-full" />
                <div className="flex-1 space-y-2">
                  <div className="h-5 w-24 bg-muted rounded" />
                  <div className="h-4 w-48 bg-muted rounded" />
                </div>
              </div>
            ))}
          </div>
          {/* Form skeleton */}
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <div className="space-y-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-12 w-full bg-muted rounded-md" />
              ))}
              <div className="h-32 w-full bg-muted rounded-md" />
              <div className="h-12 w-full bg-[#f39c12]/30 rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
