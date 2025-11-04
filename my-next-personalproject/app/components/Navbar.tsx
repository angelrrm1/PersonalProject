import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-[#000000] text-yellow-300">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Left: logo */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            <Link className="flex items-center gap-3" href="/">
            <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold">G</div>
            <div className="leading-tight">
              <div className="text-white font-semibold text-sm">Godfather</div>
              <div className="text-yellow-300 text-xs tracking-wider">BARBERSHOP MONCLOA</div>
            </div>
            </Link>
          </div>
        </div>

        {/* Center: nav links */}
        <nav className="hidden md:flex gap-6 text-yellow-300 font-medium">
          <Link href="#" className="hover:text-white">Booking</Link>
          <Link href="/pricing" className="hover:text-white">Products</Link>
          <Link href="#" className="hover:text-white">Contact</Link>
          <Link href="#" className="hover:text-white">About Us</Link>
        </nav>

        {/* Right: cart + login */}
        <div className="flex items-center gap-6">
          <button aria-label="cart" className="text-yellow-300 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
              <circle cx="10" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
            </svg>
          </button>
          <Link href="#" className="hidden md:inline-block text-yellow-300 hover:text-white">Login</Link>
        </div>
      </div>
    </header>
  );
}
