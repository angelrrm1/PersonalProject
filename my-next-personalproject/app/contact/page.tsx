'use client'
import React from 'react'
import { MapPin, Phone, Clock, Instagram, Send } from 'lucide-react' // Send lo uso para WhatsApp
import barberContact from '@/app/img/barberContact.jpg'

export default function ContactPage() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${barberContact.src})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Contenido */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 text-yellow-300">
        <h1 className="text-4xl font-bold text-white text-center mb-10">Contact Us</h1>

        {/* Grid 2 col — alturas iguales */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch auto-rows-fr">

          {/* Columna izquierda: Info + Form */}
          <div className="flex flex-col gap-6">
            {/* Info card */}
            <div className="rounded-lg border border-yellow-700 bg-black/70 p-6 backdrop-blur-sm">
              <h2 className="text-xl font-semibold text-white mb-4">Find us</h2>

              <div className="space-y-4 text-yellow-200">
                <div className="flex gap-3">
                  <MapPin className="h-5 w-5 text-yellow-300 mt-0.5" />
                  <p>
                    c/ Princesa 98, Intercambiador Moncloa<br />
                    Planta -2, local BARBERIA — Madrid
                  </p>
                </div>

                <div className="flex gap-3">
                  <Phone className="h-5 w-5 text-yellow-300 mt-0.5" />
                  <p>
                    <a href="tel:+34688455701" className="hover:text-white">+34 688 455 701</a>
                  </p>
                </div>

                <div className="flex gap-3">
                  <Clock className="h-5 w-5 text-yellow-300 mt-0.5" />
                  <p>
                    Mon–Fri: 10:00 – 19:30<br />
                    Sat: 09:00 – 14:00
                  </p>
                </div>

                {/* Redes */}
                <div className="flex items-center gap-4 pt-2">
                  <a
                    href="https://www.instagram.com/barberiagodfather"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-yellow-700 px-3 py-1.5 hover:bg-yellow-700/10 transition"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-4 w-4" />
                    <span className="text-sm">Instagram</span>
                  </a>
                  <a
                    href="https://wa.me/34688455701"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-yellow-700 px-3 py-1.5 hover:bg-yellow-700/10 transition"
                    aria-label="WhatsApp"
                  >
                    <Send className="h-4 w-4" />
                    <span className="text-sm">WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Form card (altura flexible para igualar con el mapa) */}
            <div className="rounded-lg border border-yellow-700 bg-black/70 p-8 shadow-xl backdrop-blur-sm h-full">
              <h2 className="text-xl font-semibold text-white mb-6 text-center">Send a Message</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm mb-1 text-yellow-300">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full p-3 bg-[#111] border border-yellow-800 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500 text-white placeholder-yellow-300/50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm mb-1 text-yellow-300">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full p-3 bg-[#111] border border-yellow-800 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500 text-white placeholder-yellow-300/50"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm mb-1 text-yellow-300">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us what you need..."
                    className="w-full p-3 bg-[#111] border border-yellow-800 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500 text-white placeholder-yellow-300/50"
                  />
                </div>
                <button
                  disabled
                  className="w-full bg-yellow-500/70 text-black font-semibold py-3 rounded-md shadow-md cursor-not-allowed"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Columna derecha: Mapa (misma altura que la columna izquierda) */}
          <div className="rounded-lg border border-yellow-700 bg-black/60 overflow-hidden h-full">
            {/* El contenedor se expande, el iframe ocupa todo */}
            <div className="h-full min-h-[720px]"> 
              <iframe
                title="Ubicación Barbería Godfather"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.323273312608!2d-3.7223456846074767!3d40.434487979362565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4229a63215d623%3A0xebb003bf7b7dcea9!2sBarberia%20GodFather!5e0!3m2!1ses!2ses!4v1721439308567!5m2!1ses!2ses"
                width="100%"
                height="100%"
                loading="lazy"
                style={{ border: 0 }}
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
