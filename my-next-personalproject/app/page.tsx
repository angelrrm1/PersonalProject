import Image from 'next/image'
import barberTools from './img/barberTools.jpg'
import logoGf from './img/logoGf.png'

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
          style={{ transform: "scaleX(-1)" }}
          sizes="100vw"
        />

        {/* Overlays (idénticos para coherencia visual) */}
        <div className="absolute inset-0 bg-black/55" />
        
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Espaciador o texto opcional */}
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
