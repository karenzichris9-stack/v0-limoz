import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Car, MapPin } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-lg">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-[#f39c12]">404</h1>
        </div>

        <h2 className="text-3xl font-bold text-foreground mb-3">Page Not Found</h2>

        <p className="text-muted-foreground mb-8 text-lg">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button asChild className="bg-[#f39c12] hover:bg-[#e67e22] text-white">
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Link>
          </Button>

          <Button asChild variant="outline">
            <Link href="/fleet">
              <Car className="w-4 h-4 mr-2" />
              View Fleet
            </Link>
          </Button>
        </div>

        <div className="border-t pt-8">
          <p className="text-sm text-muted-foreground mb-4">Popular destinations:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/booking" className="text-sm text-[#f39c12] hover:underline flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              Book a Car
            </Link>
            <Link href="/tours" className="text-sm text-[#f39c12] hover:underline flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              Safari Tours
            </Link>
            <Link href="/contact" className="text-sm text-[#f39c12] hover:underline flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
