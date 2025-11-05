'use client'
import React, { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type ServicesCarouselProps = {
  children: React.ReactNode
}

export default function ServicesCarousel({ children }: ServicesCarouselProps) {
  const trackRef = useRef<HTMLDivElement | null>(null)

  const scrollByAmount = (dir: 'left' | 'right') => {
    const el = trackRef.current
    if (!el) return
    const amount = el.clientWidth * 0.95
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  return (
    <div className="relative">
      {/* Gradientes laterales para hint (no cubren los cards) */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-[#0b0b0b] to-transparent z-10 rounded-l-lg" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-[#0b0b0b] to-transparent z-10 rounded-r-lg" />

      {/* Track con scroll horizontal y overflow vertical visible (para que no corte el badge) */}
      <div
        ref={trackRef}
        className="
          relative flex
          overflow-x-auto overflow-y-visible
          scroll-smooth
          snap-x snap-mandatory
          gap-8
          px-2 py-1 md:px-4
          scroll-dark
          pb-5
        "
      >
        {React.Children.map(children, (child, i) => (
          <div
            key={i}
            className="
              snap-start shrink-0
              w-[88%] sm:w-[75%]
              /* Ajuste para que entren 3 cards completos con gap en desktop */
              md:w-[calc(33.333%-1rem)]
              lg:w-[calc(33.333%-1.25rem)]
            "
          >
            {child}
          </div>
        ))}
      </div>

      {/* Controles ABAJO (no superpuestos) */}
      <div className="mt-4 flex items-center justify-between">
        <button
          aria-label="Scroll left"
          onClick={() => scrollByAmount('left')}
          className="absolute left-[-2rem] top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-[#111111]/90 border border-yellow-900 flex items-center justify-center hover:bg-[#111111] transition shadow-lg"
        >
          <ChevronLeft className="h-5 w-5 text-yellow-300" />
        </button>

        <span className="text-xs text-yellow-300/80 select-none hidden md:block text-center ml-20">
          Swipe or use arrows to explore
        </span>

        <button
          aria-label="Scroll right"
          onClick={() => scrollByAmount('right')}
          className="absolute right-[-2rem] top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-[#111111]/90 border border-yellow-900 flex items-center justify-center hover:bg-[#111111] transition shadow-lg"
        >
          <ChevronRight className="h-5 w-5 text-yellow-300" />
        </button>
      </div>

      {/* Hint móvil */}
      <div className="mt-2 text-center md:hidden">
        <span className="text-xs text-yellow-300/80">Swipe to explore →</span>
      </div>
    </div>
  )
}
