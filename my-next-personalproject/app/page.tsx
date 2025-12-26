'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import ServicesCarousel from '@/app/components/ServicesCarousel'
import heroTop from './img/heroTop.jpg'
import barberTools from './img/barberTools.jpg'
import logoGf from './img/logoGf.png'
import c1 from './img/gallery/c1.jpg'
import c2 from './img/gallery/c2.jpg'
import c3 from './img/gallery/c3.jpg'
import c4 from './img/gallery/c4.jpg'
import c5 from './img/gallery/c5.jpg'
import c6 from './img/gallery/c6.jpg'
import c7 from './img/gallery/c7.jpg'
import c8 from './img/gallery/c8.jpg'
import c9 from './img/gallery/c9.jpg'

type ProductCardProps = {
  name: string
  brand: string
  category: string
  price: string
  description: string
  size?: string
}

const products: ProductCardProps[] = [
  {
    name: 'Deluxe Pomade',
    brand: 'Uppercut Deluxe',
    category: 'Pomade',
    price: '€18.00',
    size: '100 g',
    description:
      'Medium hold, high shine pomade for classic combed styles that stay sharp all day.'
  },
  {
    name: 'Cement Clay',
    brand: 'Layrite',
    category: 'Matte Clay',
    price: '€20.00',
    size: '120 g',
    description:
      'Strong hold, matte finish clay for textured looks with natural movement.'
  },
  {
    name: 'Firme Hold',
    brand: 'Suavecito',
    category: 'Gel Pomade',
    price: '€16.00',
    size: '113 g',
    description:
      'Iconic strong hold pomade with gel-like control and a clean, classic barbershop scent.'
  },
  {
    name: 'After Shave Lotion',
    brand: 'Proraso',
    category: 'Aftershave',
    price: '€14.00',
    size: '100 ml',
    description:
      'Refreshing eucalyptus & menthol lotion that calms the skin after a close shave.'
  },
  {
    name: 'Private Stock Beard Oil',
    brand: 'Captain Fawcett',
    category: 'Beard Oil',
    price: '€24.00',
    size: '50 ml',
    description:
      'Nourishing oil that softens the beard and leaves a subtle, elegant barbershop aroma.'
  },
  {
    name: 'Styling Powder',
    brand: 'Slick Gorilla',
    category: 'Volumizing Powder',
    price: '€19.00',
    size: '20 g',
    description:
      'Lightweight styling powder for instant volume, texture and a dry, natural finish.'
  },
  {
    name: 'Barber Talc',
    brand: 'Reuzel',
    category: 'Talc',
    price: '€12.00',
    size: '100 g',
    description:
      'Classic barber talc that keeps neck and skin fresh, dry and comfortable after the cut.'
  }
]

export default function Home() {
  const clientPhotos = [c1, c2, c3, c4, c5, c6, c7, c8, c9]
  const [activeClient, setActiveClient] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActiveClient((prev: number) => (prev + 1) % clientPhotos.length)
    }, 2000)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      {/* HERO SUPERIOR */}
      <section className="relative min-h-[70vh] md:h-screen overflow-hidden bg-black">
        {/* Imagen de fondo optimizada */}
        <Image
          src={heroTop}
          alt="Barber model background"
          fill
          priority
          placeholder="blur"
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Overlays para contraste */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/50 to-transparent" />

        {/* Contenido */}
        <div className="relative z-10 flex items-center justify-end px-4 py-20 md:py-0 h-full">
          <div className="text-center text-yellow-300 max-w-3xl">
            <div className="flex justify-center mb-6 -mt-10">
              <Image
                src={logoGf}
                alt="Barbershop Godfather logo"
                width={160}
                height={160}
                className="object-contain drop-shadow-[0_0_8px_rgba(255,215,0,0.3)] w-72 md:w-md"
              />
            </div>

            <p className="text-lg md:text-xl mb-8 text-yellow-200/95">
              Premium barbershop experience in every detail
            </p>

            <a
              href="https://booksy.com/es-es/40504_barberia-godfather_barberia_53009_madrid#ba_s=seo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open booking in Booksy (new tab)"
              className="inline-block rounded-md border border-yellow-500 text-yellow-300 px-8 py-3 text-sm md:text-base font-medium transition focus:outline-none focus:ring-2 focus:ring-yellow-500/70 hover:bg-yellow-500 hover:text-black"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* CARRUSEL DE PRODUCTOS — entre los dos heroes */}
      <section className="relative z-20 -mt-10 md:-mt-16 bg-black">
        <div className="container mx-auto px-2 pt-5 pb-1 md:pt-16 md:pb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Premium Products</h2>
            <p className="text-yellow-300 text-sm md:text-base">
              Keep your Godfather finish sharp at home
            </p>
          </div>

          <ServicesCarousel>
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </ServicesCarousel>
        </div>
      </section>

      {/* HERO MEDIO — carrusel automático de clientes */}
      <section className="relative min-h-[70vh] md:h-screen overflow-hidden bg-black">
        {/* Fondo */}
        <Image
          src={barberTools}
          alt="Barber tools background"
          fill
          priority
          placeholder="blur"
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/70 to-transparent" />

        {/* Contenido */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 py-14 md:py-0">
            {/* Header “Godfather style” */}
            <div className="max-w-xl mx-auto md:mx-0 text-center md:text-left mb-8 md:mb-10">
              <p className="text-xs uppercase tracking-[0.35em] text-yellow-400/80 mb-3">
                The Godfather Experience
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                Our Clients
              </h2>

              <p className="text-yellow-300/90 text-sm md:text-base leading-relaxed">
                Real people. Real cuts. Crafted with precision and character.
              </p>
            </div>

            {/* Carrusel autoplay */}
            <ClientsAutoCarousel photos={clientPhotos} />
          </div>
        </div>
      </section>

      {/* CONTACT SOCIAL MEDIA */}
      <section className="relative z-20 -mt-10 md:-mt-16 bg-black">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.35em] text-yellow-400/80 mb-3">
              Stay Connected
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Contact & Social
            </h2>
            <p className="text-yellow-300/90 text-sm md:text-base">
              Book, ask, or follow the Godfather experience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* LEFT: Info + Social */}
            <div className="rounded-lg border border-yellow-700/60 bg-[#0b0b0b]/95 p-6 md:p-8 shadow-md">
              <h3 className="text-xl font-bold text-white mb-6">Barbershop Moncloa</h3>

              <div className="space-y-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-yellow-300/70 mb-2">
                    Address
                  </p>
                  <p className="text-yellow-200/95 leading-relaxed">
                    c/ Princesa 98, Intercambiador Moncloa <br />
                    Floor -2, Local BARBERIA, Madrid
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-yellow-300/70 mb-2">
                      Phone
                    </p>
                    <a
                      href="tel:+34688455701"
                      className="text-yellow-300 hover:text-white transition"
                    >
                      +34 688 455 701
                    </a>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-yellow-300/70 mb-2">
                      Booking
                    </p>
                    <a
                      href="https://booksy.com/es-es/40504_barberia-godfather_barberia_53009_madrid#ba_s=seo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-300 hover:text-white transition"
                    >
                      Open Booksy →
                    </a>
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-yellow-300/70 mb-2">
                    Hours
                  </p>
                  <p className="text-yellow-200/95 leading-relaxed">
                    Mon–Fri: 10:00 – 19:30 <br />
                    Sat: 09:00 – 14:00
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-yellow-300/70 mb-3">
                    Follow us
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a
                      href="https://www.instagram.com/barberiagodfather"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md border border-yellow-700/70 bg-black/30 px-4 py-3 text-yellow-300 hover:bg-yellow-500 hover:text-black transition"
                    >
                      Instagram
                    </a>

                    <a
                      href="https://wa.me/34688455701"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md border border-yellow-700/70 bg-black/30 px-4 py-3 text-yellow-300 hover:bg-yellow-500 hover:text-black transition"
                    >
                      WhatsApp
                    </a>
                  </div>

                  <p className="mt-4 text-xs text-yellow-300/60">
                    Quick tip: on mobile, WhatsApp opens instantly.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT: Map */}
            <div className="rounded-lg border border-yellow-700/60 bg-[#0b0b0b]/95 shadow-md overflow-hidden">
              <div className="p-4 md:p-5 border-b border-yellow-700/40">
                <p className="text-xs uppercase tracking-[0.25em] text-yellow-300/70">
                  Find us on the map
                </p>
              </div>

              <div className="relative w-full h-[320px] md:h-[420px]">
                <iframe
                  title="Ubicación Barbería Godfather"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.323273312608!2d-3.7223456846074767!3d40.434487979362565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4229a63215d623%3A0xebb003bf7b7dcea9!2sBarberia%20GodFather!5e0!3m2!1ses!2ses!4v1721439308567!5m2!1ses!2ses"
                  width="100%"
                  height="90%"
                  loading="lazy"
                  style={{ border: 0 }}
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
                {/* Overlay sutil para que combine con tu estética */}
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-yellow-700/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HERO INFERIOR — espejo visual */}
      <section className="relative min-h-[70vh] md:h-screen overflow-hidden bg-black">
        <div className="container mx-auto px-2 pt-5 pb-1 md:pt-16 md:pb-20">

        </div>
        {/* Imagen rotada pero mismo fill */}
        <Image
          src={barberTools}
          alt="Barber tools background inverted"
          fill
          priority
          placeholder="blur"
          className="object-cover object-center rotate-180"
          style={{ transform: 'scaleX(-1)' }}
          sizes="100vw"
        />

        {/* Overlays (idénticos para coherencia visual) */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Texto inferior */}
        <div className="relative z-10 flex items-center justify-center px-4 py-20 md:py-0 h-full">
          <div className="text-center text-yellow-300 max-w-3xl">
            <p className="text-lg md:text-xl mb-8 text-yellow-200/95">
              Crafting style from every angle
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

function ClientsAutoCarousel({ photos }: { photos: StaticImageData[] }) {
  const trackRef = useRef<HTMLDivElement | null>(null)
  const [active, setActive] = useState(0)

  // autoplay cada 2s
  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % photos.length)
    }, 2500)
    return () => clearInterval(id)
  }, [photos.length])

  // al cambiar active, scroll al card correspondiente (sin “bajar la página”)
  useEffect(() => {
    const el = trackRef.current
    if (!el) return

    const card = el.querySelector<HTMLElement>(`[data-idx="${active}"]`)
    if (!card) return

    const target =
      card.offsetLeft - (el.clientWidth / 2 - card.clientWidth / 2)

    el.scrollTo({ left: Math.max(0, target), behavior: 'smooth' })
  }, [active])

  return (
    <div className="relative">
      {/* Fade laterales premium */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-10 md:w-16 bg-gradient-to-r from-black/60 to-transparent z-10 rounded-l-lg" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-10 md:w-16 bg-gradient-to-l from-black/60 to-transparent z-10 rounded-r-lg" />

      <div
        ref={trackRef}
        className="
          flex gap-6 md:gap-8
          overflow-x-auto scroll-smooth snap-x snap-mandatory
          px-2 md:px-4
          [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar:hidden]
        "
      >
        {photos.map((photo, i) => (
          <div
            key={i}
            data-idx={i}
            className="
              snap-center shrink-0
              w-[260px] sm:w-[300px]
              md:w-[340px] lg:w-[360px]
            "
          >
            <div
              className="
                h-full rounded-lg border border-yellow-700
                bg-[#0b0b0b]/90 shadow-md
                p-4 md:p-5
              "
            >
              {/* Imagen 9:16 */}
              <div className="relative w-full aspect-[1/1] rounded-md overflow-hidden border border-yellow-700/40">
                <Image
                  src={photo}
                  alt={`Client ${i + 1}`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 260px, (max-width: 1024px) 340px, 360px"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              </div>

              <div className="mt-4 flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.25em] text-yellow-300/80">
                  Client Cut
                </p>
                <span className="text-xs text-yellow-300/70">
                  {i + 1}/{photos.length}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Hint móvil */}
      <div className="mt-5 text-center md:text-left">
        <span className="text-xs text-yellow-300/70 select-none ml-20 md:ml-0">
          Auto showcase • Swipe to explore →
        </span>
      </div>
    </div>
  )
}

function ProductCard({
  name,
  brand,
  category,
  price,
  description,
  size
}: ProductCardProps) {
  return (
    <div className="h-full rounded-lg border border-yellow-700 bg-[#0b0b0b]/95 
                p-6 md:p-8 flex flex-col shadow-md 
                md:min-h-[420px]">
      {/* Placeholder para imagen del producto */}
      <div className="mb-4 h-54 rounded-md border border-yellow-700/40 bg-gradient-to-br from-yellow-500/10 via-yellow-700/5 to-yellow-900/15 flex items-center justify-center text-[0.65rem] uppercase tracking-[0.2em] text-yellow-300/70">
        Product image
      </div>

      <div className="mb-2 flex items-baseline justify-between gap-2">
        <div>
          <h3 className="text-lg font-semibold text-white">{name}</h3>
          <p className="text-xs text-yellow-300/80 uppercase tracking-[0.18em]">
            {brand}
          </p>
        </div>
        <span className="text-sm font-semibold text-yellow-300">{price}</span>
      </div>

      <p className="text-xs text-yellow-300/80 mb-2">{category}{size ? ` • ${size}` : ''}</p>

      <p className="text-sm text-yellow-100/90 mb-4 flex-1">{description}</p>

      <button
        disabled
        className="mt-auto w-full inline-flex h-9 items-center justify-center rounded-md border border-yellow-700 text-xs font-medium text-yellow-300 hover:bg-yellow-500/10 cursor-not-allowed"
      >
        Ask your barber
      </button>
    </div>
  )
}
