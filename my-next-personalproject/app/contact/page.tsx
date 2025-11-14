'use client'
import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactPage() {
  return (
    <section className="container mx-auto px-4 py-16 text-yellow-300">
      {/* Encabezado */}
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-white">Contact Us</h1>
        <p className="text-yellow-300">Book an appointment or find us in Moncloa, Madrid.</p>
      </div>

      {/* Grid principal */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Información */}
        <div className="rounded-2xl bg-[#0b0b0b] border border-yellow-900 p-8">
          <h2 className="text-xl font-semibold mb-6 text-white">Reach us</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-yellow-300 mt-1" />
              <p className="text-yellow-200">Calle de Moncloa, Madrid, España</p>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-yellow-300 mt-1" />
              <p className="text-yellow-200">+34 600 000 000</p>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-yellow-300 mt-1" />
              <p className="text-yellow-200">contact@godfatherbarbershop.com</p>
            </li>
          </ul>
        </div>

        {/* Formulario */}
        <div className="rounded-2xl bg-[#0b0b0b] border border-yellow-900 p-8 lg:col-span-1">
          <h2 className="text-xl font-semibold mb-6 text-white">Send a Message</h2>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <input
              placeholder="Your Name"
              className="w-full rounded-md bg-transparent border border-yellow-800 px-3 py-2 text-white focus:ring-1 focus:ring-yellow-600"
            />
            <input
              placeholder="Your Email"
              className="w-full rounded-md bg-transparent border border-yellow-800 px-3 py-2 text-white focus:ring-1 focus:ring-yellow-600"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full rounded-md bg-transparent border border-yellow-800 px-3 py-2 text-white focus:ring-1 focus:ring-yellow-600"
            />
            <button
              disabled
              className="w-full rounded-md border border-yellow-700 text-yellow-300 px-4 py-2 text-sm cursor-not-allowed"
            >
              Coming Soon
            </button>
          </form>
        </div>

        {/* Mapa */}
        <div className="rounded-2xl overflow-hidden border border-yellow-900 bg-[#0b0b0b]">
          <iframe
            title="Barbershop location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48589.397217220234!2d-3.795690536499041!3d40.434600870309524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4229a63215d623%3A0xebb003bf7b7dcea9!2sBarberia%20GodFather!5e0!3m2!1ses-419!2ses!4v1763073598439!5m2!1ses-419!2ses"
            width="100%"
            height="100%"
            loading="lazy"
            style={{ border: 0, minHeight: '400px' }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}
