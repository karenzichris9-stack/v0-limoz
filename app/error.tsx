"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertTriangle, RefreshCw, Home } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("[v0] Application error:", error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <div className="mx-auto w-16 h-16 mb-6 rounded-full bg-red-100 flex items-center justify-center">
          <AlertTriangle className="w-8 h-8 text-red-600" />
        </div>

        <h1 className="text-3xl font-bold text-foreground mb-3">Something went wrong</h1>

        <p className="text-muted-foreground mb-8">
          We apologize for the inconvenience. An unexpected error has occurred. Please try again or return to the
          homepage.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} className="bg-[#f39c12] hover:bg-[#e67e22] text-white">
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>

          <Button asChild variant="outline">
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Link>
          </Button>
        </div>

        {error.digest && <p className="mt-6 text-xs text-muted-foreground">Error ID: {error.digest}</p>}
      </div>
    </div>
  )
}
