import { cn } from "@/lib/utils"

interface SkeletonCardProps {
  className?: string
  imageHeight?: string
  showBadge?: boolean
  lines?: number
}

export function SkeletonCard({ className, imageHeight = "h-48", showBadge = false, lines = 3 }: SkeletonCardProps) {
  return (
    <div className={cn("bg-card rounded-lg overflow-hidden shadow-sm animate-pulse", className)}>
      {/* Image skeleton */}
      <div className={cn("bg-muted relative", imageHeight)}>
        {showBadge && <div className="absolute top-3 left-3 h-6 w-16 bg-muted-foreground/20 rounded" />}
      </div>

      {/* Content skeleton */}
      <div className="p-4 space-y-3">
        <div className="h-5 bg-muted rounded w-3/4" />
        {Array.from({ length: lines }).map((_, i) => (
          <div key={i} className={cn("h-4 bg-muted rounded", i === lines - 1 ? "w-1/2" : "w-full")} />
        ))}
        <div className="pt-2">
          <div className="h-10 bg-muted rounded w-full" />
        </div>
      </div>
    </div>
  )
}

export function SkeletonGrid({
  count = 6,
  columns = "md:grid-cols-2 lg:grid-cols-3",
}: {
  count?: number
  columns?: string
}) {
  return (
    <div className={cn("grid grid-cols-1 gap-6", columns)}>
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  )
}
