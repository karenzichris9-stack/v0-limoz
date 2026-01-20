import { SkeletonGrid } from "@/components/skeleton-card"

export default function NewsLoading() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero skeleton */}
      <div className="relative h-[35vh] bg-muted animate-pulse">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="h-10 w-48 mx-auto bg-muted-foreground/20 rounded-lg mb-4" />
            <div className="h-5 w-64 mx-auto bg-muted-foreground/20 rounded-lg" />
          </div>
        </div>
      </div>

      {/* News grid skeleton */}
      <div className="container mx-auto px-4 py-12">
        <SkeletonGrid count={6} columns="md:grid-cols-2 lg:grid-cols-3" />
      </div>
    </div>
  )
}
