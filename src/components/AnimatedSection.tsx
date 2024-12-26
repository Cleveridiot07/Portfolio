import { useRef, ReactNode } from 'react'
import { useIntersectionObserver } from '../hooks/useInteractionOberver'

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedSection({ children, className = '' }: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isIntersecting = useIntersectionObserver(ref, { threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={`${className} ${
        isIntersecting ? 'animate-slide-in' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  )
}