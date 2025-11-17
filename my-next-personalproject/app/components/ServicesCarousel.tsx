'use client'
import React, { useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type ServicesCarouselProps = { children: React.ReactNode }

export default function ServicesCarousel({ children }: ServicesCarouselProps) {
  const trackRef = useRef<HTMLDivElement | null>(null)
  const firstItemRef = useRef<HTMLDivElement | null>(null)

  const scrollByAmount = (dir: 'left' | 'right') => {
    const el = trackRef.current
    if (!el) return
    const amount = el.clientWidth * 0.95
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  // 👉 Centrar el primer card en móviles
  useEffect(() => {
    const el = trackRef.current
    const item = firstItemRef.current
    if (!el || !item) return
    if (window.innerWidth < 768) {
      const target = item.offsetLeft + item.offsetWidth / 2 - el.clientWidth / 2
      el.scrollTo({ left: Math.max(0, target) })
    }
  }, [])

  return (
    <div className="relative">
      {/* gradientes sutiles */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-[#0b0b0b] to-transparent z-10 rounded-l-lg" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-[#0b0b0b] to-transparent z-10 rounded-r-lg" />

      {/* Botones: ocultos en móvil, visibles en md+ */}
      <button
        aria-label="Scroll left"
        onClick={() => scrollByAmount('left')}
        className="hidden md:flex absolute left-[-2rem] top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-[#111111]/90 border border-yellow-900 items-center justify-center hover:bg-[#111111] transition shadow-lg -ml-4"
      >
        <ChevronLeft className="h-5 w-5 text-yellow-300" />
      </button>

      <button
        aria-label="Scroll right"
        onClick={() => scrollByAmount('right')}
        className="hidden md:flex absolute right-[-2rem] top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-[#111111]/90 border border-yellow-900 items-center justify-center hover:bg-[#111111] transition shadow-lg -mr-4"
      >
        <ChevronRight className="h-5 w-5 text-yellow-300" />
      </button>

      {/* Track */}
      <div
        ref={trackRef}
        className="
            relative flex overflow-x-auto overflow-y-visible scroll-smooth snap-x snap-mandatory
            gap-8 md:gap-8 px-4 md:px-4 justify-center md:justify-start
            [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
        "
      >
        {React.Children.map(children, (child, i) => (
          <div
            ref={i === 0 ? firstItemRef : null}
            key={i}
            className="
              shrink-0
              snap-center md:snap-start
              w-[90%] sm:w-[80%]
              md:w-[calc(33.333%-1rem)]
              lg:w-[calc(33.333%-1.25rem)]
            "
          >
            {child}
          </div>
        ))}
      </div>

      {/* Hint móvil */}
      <div className="mt-3 text-center md:hidden">
        <span className="text-xs text-yellow-300/80">Swipe to explore →</span>
      </div>
    </div>
  )
}
