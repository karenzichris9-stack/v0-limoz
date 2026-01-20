"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { type ReactNode, useState } from "react"
import { ArrowRight, Loader2 } from "lucide-react"

interface CTAButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "default" | "lg" | "xl"
  showArrow?: boolean
  pulse?: boolean
  loading?: boolean
  className?: string
  disabled?: boolean
}

export function CTAButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "default",
  showArrow = false,
  pulse = false,
  loading = false,
  className,
  disabled = false,
}: CTAButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const sizeClasses = {
    default: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
    xl: "px-10 py-5 text-lg",
  }

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-[#ffd700] to-[#f7e7ce] hover:from-[#f7e7ce] hover:to-[#ffd700] text-[#0f0f23] shadow-lg hover:shadow-xl hover:shadow-[#ffd700]/30",
    secondary:
      "bg-gradient-to-r from-[#0f0f23] to-[#1a1a3e] hover:from-[#1a1a3e] hover:to-[#0f0f23] text-white shadow-lg hover:shadow-xl border border-[#ffd700]/20",
    outline: "border-2 border-[#ffd700] text-[#ffd700] hover:bg-[#ffd700] hover:text-[#0f0f23] bg-transparent",
    ghost: "text-[#ffd700] hover:bg-[#ffd700]/10",
  }

  const buttonContent = (
    <Button
      onClick={onClick}
      disabled={disabled || loading}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative overflow-hidden font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]",
        sizeClasses[size],
        variantClasses[variant],
        pulse && "animate-pulse-glow",
        className,
      )}
    >
      {/* Shimmer effect overlay */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000" />

      {/* Content */}
      <span className="relative flex items-center gap-2">
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <>
            {children}
            {showArrow && (
              <ArrowRight className={cn("w-4 h-4 transition-transform duration-300", isHovered && "translate-x-1")} />
            )}
          </>
        )}
      </span>
    </Button>
  )

  if (href) {
    return <Link href={href}>{buttonContent}</Link>
  }

  return buttonContent
}
