import barberTools from './img/barberTools.jpg'

export default function Home() {
  return (
    <div
      className="relative flex h-screen items-center justify-center bg-black "
      style={{
        backgroundImage: `url(${barberTools.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Capa oscura para contraste */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Contenido centrado */}
      <div className="relative z-10 text-center text-yellow-300 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to Barberia Godfather
        </h1>
        <p className="text-lg md:text-xl mb-8 text-yellow-200">
          Premium barbershop experience in every detail
        </p>
        <a href="https://booksy.com/es-es/40504_barberia-godfather_barberia_53009_madrid#ba_s=seo"
          className="rounded-md border border-yellow-500 text-yellow-300 px-8 py-3 text-sm md:text-base font-medium hover:bg-yellow-500 hover:text-black transition inline-block"
        >
          Book Now
        </a>
      </div>
    </div>
  )
}
