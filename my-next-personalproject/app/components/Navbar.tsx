'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import logoGf from '../img/logoGf.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth >= 768 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  // Bloquea scroll del body cuando el panel está abierto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      {/* NAV FIJO */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/75 text-yellow-300 border-b border-yellow-900/40">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo + nombre (siempre visible) */}
          <Link className="flex items-center gap-3" href="/">
            <div className="w-12 h-12 relative">
              <Image
                src={logoGf}
                alt="Godfather Barbershop logo"
                fill
                className="object-contain"
                sizes="48px"
                priority
              />
            </div>
            <div className="leading-tight">
              <div className="text-white font-semibold text-m">Godfather</div>
              <div className="text-yellow-300 text-xs tracking-wider">BARBERSHOP MONCLOA</div>
            </div>
          </Link>

          {/* Links desktop */}
          <nav className="hidden md:flex gap-6 text-yellow-300 font-2xl">
            <Link href="https://booksy.com/es-es/40504_barberia-godfather_barberia_53009_madrid#ba_s=seo" className="hover:text-white">Booking</Link>
            <Link href="/pricing" className="hover:text-white">Services</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
            <Link href="#" className="hover:text-white">About Us</Link>
          </nav>

          {/* Acciones desktop */}
          <div className="hidden md:flex items-center gap-6">
            <button aria-label="cart" className="text-yellow-300 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
                <circle cx="10" cy="20" r="1" />
                <circle cx="18" cy="20" r="1" />
              </svg>
            </button>
            <Link href="#" className="text-yellow-300 hover:text-white">Login</Link>
          </div>

          {/* Hamburguesa móvil */}
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(v => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-yellow-700 hover:bg-yellow-700/10 transition"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none">
              {open ? (
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* OVERLAY Y PANEL FUERA DEL HEADER */}
      {/* Overlay oscuro (tapa el fondo completo) */}
      <div
        className={`md:hidden ${open ? 'fixed inset-0 z-40 bg-black/70 backdrop-blur-sm' : 'hidden'}`}
        onClick={() => setOpen(false)}
      />

      {/* Panel lateral (viewport completo, por encima del overlay) */}
      <aside
        id="mobile-menu"
        className={`
          md:hidden fixed top-0 right-0 z-50 h-dvh w-72
          bg-[#0b0b0b]/98 border-l border-yellow-900 shadow-2xl
          transform transition-transform duration-200
          ${open ? 'translate-x-0' : 'translate-x-full'}
          overflow-y-auto
        `}
      >
        <div className="px-6 py-5 flex items-center justify-between border-b border-yellow-900/50 sticky top-0 bg-[#0b0b0b]/98">
          <span className="text-white font-semibold">Menu</span>
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-yellow-700 hover:bg-yellow-700/10"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" fill="none">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="p-6 flex flex-col gap-4 text-yellow-300">
          <Link onClick={() => setOpen(false)} href="https://booksy.com/es-es/40504_barberia-godfather_barberia_53009_madrid#ba_s=seo" className="hover:text-white">Booking</Link>
          <Link onClick={() => setOpen(false)} href="/pricing" className="hover:text-white">Services</Link>
          <Link onClick={() => setOpen(false)} href="/contact" className="hover:text-white">Contact</Link>
          <Link onClick={() => setOpen(false)} href="#" className="hover:text-white">About Us</Link>

          <div className="mt-4 border-t border-yellow-900/50 pt-4">
            <Link onClick={() => setOpen(false)} href="#" className="hover:text-white">Login</Link>
          </div>
        </nav>
      </aside>

      {/* Spacer para que el contenido no quede debajo del nav fijo */}
      <div className="h-[72px] md:h-[72px]" />
    </>
  )
}
