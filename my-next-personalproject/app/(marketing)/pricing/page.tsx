'use client'
import React from 'react'
import { CheckCircle2, XCircle } from 'lucide-react'
import ServicesCarousel from '@/app/components/ServicesCarousel'

type ServiceSpec = string

interface ServiceCardProps {
  title: string
  price: string
  duration?: string
  description: string
  includes: ServiceSpec[]
  extras?: ServiceSpec[]
  highlighted?: boolean
  badge?: string
}

export default function ServicesPage() {
  const services: ServiceCardProps[] = [
    {
      title: "Men's Haircut",
      price: '€22.00',
      duration: '30 min',
      description:
        'Machine and scissor cut with style consultation and precise finish.',
      includes: [
        'Hair cleanse & prep',
        'Machine + scissor work',
        'Neckline & contour tidy with razor',
        'Dry & basic styling'
      ],
      extras: ['Eyebrows +€5', 'Black mask +€8']
    },
    {
      title: "Men's Haircut + Beard Trim",
      price: '€35.00',
      duration: '1 h',
      description:
        'Complete look: tailored cut plus beard shaping/trim with hot towel finish.',
      includes: [
        'Full haircut (machine & scissors)',
        'Beard trim & shape',
        'Hot towel for comfort',
        'Beard oil/balm application',
        'Finish with styling product'
      ],
      highlighted: true,
      badge: 'Popular'
    },
    {
      title: "Men's Haircut + Exfoliant + Detox",
      price: '€37.00',
      duration: '1 h 15 min',
      description:
        'Scalp exfoliation and detox treatment for dandruff/oily scalp with a sharp cut.',
      includes: [
        'Scalp exfoliant + detox shampoo',
        'Cut (machine & scissors)',
        'Razor detailing',
        'Blow dry & style',
        'Aftercare tips'
      ]
    },
    {
      title: 'Kids Cut (under 12)',
      price: '€15.00',
      duration: '30 min',
      description:
        'Gentle, patient service tailored for kids. Clean and neat finish.',
      includes: [
        'Consultation with parent',
        'Machine/scissor cut',
        'Quick tidy & dry',
        'Light styling product (optional)'
      ]
    },
    {
      title: 'Shaving Ritual',
      price: '€18.00',
      duration: '30 min',
      description:
        'Traditional hot towel shave for an extra-close, comfortable finish.',
      includes: [
        'Hot towel prep',
        'Pre-shave oil/cream',
        'Razor shave',
        'Cold towel + aftershave',
        'Moisturizer application'
      ]
    },
    {
      title: 'Beard Color',
      price: '€15.00',
      duration: '30 min',
      description:
        'Targeted beard dye for even tone and natural-looking coverage.',
      includes: [
        'Shade selection',
        'Color application',
        'Rinse & conditioning',
        'Beard oil finish'
      ]
    },
    {
      title: 'Full Hair Coloring',
      price: '€90.00+',
      duration: '3 h',
      description:
        'Complete hair color service. Final price depends on length, technique and product.',
      includes: [
        'Color consultation',
        'Professional color application',
        'Rinse & treatment',
        'Blow dry & style'
      ],
      extras: ['Toner/Gloss +€', 'Color correction +€']
    }
  ]

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-white">Services</h1>
        <p className="text-xl text-yellow-300">Premium barbershop experience</p>
      </div>

      {/* Carrusel con los servicios */}
      <ServicesCarousel>
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        ))}
      </ServicesCarousel>

      <div className="max-w-3xl mx-auto mt-16 text-center bg-[#0b0b0b] rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4 text-white">Need something custom?</h2>
        <p className="text-lg text-yellow-300 mb-8">
          Tell us what you need and we’ll craft the perfect combo for you.
        </p>
        <button
          disabled
          className="inline-flex h-10 items-center justify-center rounded-md bg-yellow-500/60 px-8 py-2 text-sm font-medium text-black shadow cursor-not-allowed"
        >
          Contact Us
        </button>
      </div>
    </section>
  )
}

function ServiceCard({
  title,
  price,
  duration,
  description,
  includes,
  extras,
  highlighted = false,
  badge
}: ServiceCardProps) {
  return (
    <div
      className={`rounded-lg p-6 relative h-full ${
        highlighted
          ? 'bg-[#111111] border-2 border-yellow-600 shadow-md'
          : 'bg-[#0b0b0b] border border-yellow-900 shadow-sm'
      }`}
    >
      {badge && (
        <div className="absolute -top-3 -right-3 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
          {badge}
        </div>
      )}

      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>

      <div className="mb-2">
        <span className="text-3xl font-bold text-yellow-300">{price}</span>
        {duration && <span className="ml-2 text-yellow-300"> • {duration}</span>}
      </div>

      <p className="text-yellow-300 mb-6">{description}</p>

      <ul className="space-y-2 mb-4">
        {includes.map((item, i) => (
          <li key={i} className="flex items-start">
            <CheckCircle2 className="h-5 w-5 text-green-300 mr-2 flex-shrink-0" />
            <span className="text-white">{item}</span>
          </li>
        ))}
      </ul>

      {extras && extras.length > 0 && (
        <div className="mb-6">
          <p className="text-sm text-yellow-300 mb-2">Extras</p>
          <ul className="space-y-1">
            {extras.map((ex, i) => (
              <li key={i} className="flex items-start">
                <XCircle className="h-4 w-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-yellow-300">{ex}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <button
        disabled
        className={`w-full inline-flex h-10 items-center justify-center rounded-md px-8 py-2 text-sm font-medium shadow cursor-not-allowed ${
          highlighted
            ? 'bg-yellow-500/60 text-black'
            : 'bg-transparent border border-yellow-700 text-yellow-300'
        }`}
      >
        Book Now
      </button>
    </div>
  )
}