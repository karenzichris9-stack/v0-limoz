"use client"

import type { ReactNode } from "react"
import { useScrollAnimation } from "@/lib/use-scroll-animation"
import { cn } from "@/lib/utils"
import type { JSX } from "react/jsx-runtime"

type AnimationType = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale" | "none"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: AnimationType
  delay?: number
  duration?: number
  threshold?: number
  as?: keyof JSX.IntrinsicElements
}

export function AnimatedSection({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  as: Component = "div",
}: AnimatedSectionProps) {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold })

  const animationStyles: Record<AnimationType, string> = {
    "fade-up": "translate-y-8 opacity-0",
    "fade-down": "-translate-y-8 opacity-0",
    "fade-left": "translate-x-8 opacity-0",
    "fade-right": "-translate-x-8 opacity-0",
    scale: "scale-95 opacity-0",
    none: "",
  }

  return (
    <Component
      ref={ref}
      className={cn(
        "transition-all ease-out",
        !isVisible && animationStyles[animation],
        isVisible && "translate-x-0 translate-y-0 scale-100 opacity-100",
        className,
      )}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </Component>
  )
}
