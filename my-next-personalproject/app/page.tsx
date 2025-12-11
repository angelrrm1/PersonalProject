'use client'

import Image from 'next/image'
import ServicesCarousel from '@/app/components/ServicesCarousel'
import barberTools from './img/barberTools.jpg'
import logoGf from './img/logoGf.png'

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
  return (
    <>
      {/* HERO SUPERIOR */}
      <section className="relative min-h-[70vh] md:h-screen overflow-hidden bg-black">
        {/* Imagen de fondo optimizada */}
        <Image
          src={barberTools}
          alt="Barber tools background"
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
        <div className="relative z-10 flex items-center justify-center px-4 py-20 md:py-0 h-full">
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
<section className="relative z-20 -mt-10 md:-mt-16 mb-12">
  <div className="container mx-auto px-2 pt-5 pb-1 md:pt-16 md:pb-20">
    <div className="text-center mt-10 mb-8">
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


      {/* HERO INFERIOR — espejo visual */}
      <section className="relative min-h-[70vh] md:h-screen overflow-hidden bg-black">
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
