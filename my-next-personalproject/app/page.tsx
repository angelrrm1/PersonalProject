import Image from 'next/image'
import barberTools from './img/barberTools.jpg'
import logoWolf from './img/logowolf.png'

export default function Home() {
  return (
    <section className="relative min-h-[70vh] md:h-screen overflow-hidden bg-black">
      {/* Imagen de fondo optimizada */}
      <Image
        src={barberTools}
        alt=""
        fill
        priority
        placeholder="blur"
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Overlays para contraste */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/50 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />

      {/* Contenido */}
      <div className="relative z-10 flex items-center justify-center px-4 py-20 md:py-0 h-full">
        <div className="text-center text-yellow-300 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
            Welcome to Barberia Godfather
          </h1>

          {/* Logo debajo del título */}
          <div className="flex justify-center mb-6">
            <Image
              src={logoWolf}
              alt="Barbershop Godfather logo"
              width={160}
              height={160}
              className="object-contain drop-shadow-[0_0_8px_rgba(255,215,0,0.3)]"
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
  )
}
