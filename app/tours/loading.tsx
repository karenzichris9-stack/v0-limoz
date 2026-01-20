import { SkeletonGrid } from "@/components/skeleton-card"

export default function ToursLoading() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero skeleton */}
      <div className="relative h-[50vh] bg-muted animate-pulse">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="h-12 w-72 mx-auto bg-muted-foreground/20 rounded-lg mb-4" />
            <div className="h-6 w-56 mx-auto bg-muted-foreground/20 rounded-lg" />
          </div>
        </div>
      </div>

      {/* Tours grid skeleton */}
      <div className="container mx-auto px-4 py-12">
        <div className="h-8 w-56 bg-muted rounded-lg mb-8" />
        <SkeletonGrid count={4} columns="md:grid-cols-2" />
      </div>
    </div>
  )
}
