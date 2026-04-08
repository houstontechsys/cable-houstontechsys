import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Restaurant & Hospitality Cabling Houston TX | Houston TechSys',
  description: 'Commercial cabling for restaurants and hospitality in Houston TX. We know where every drop goes — kitchens, dining rooms, patios, TVs, POS systems, and audio. Fully insured.',
  alternates: { canonical: 'https://cable.houstontechsys.net/industries/hospitality-restaurants/' },
  openGraph: {
    title: 'Restaurant & Hospitality Cabling Houston TX | Houston TechSys',
    description: 'We understand restaurants. Every drop, every AV run, every POS connection — done right the first time.',
    url: 'https://cable.houstontechsys.net/industries/hospitality-restaurants/',
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cable.houstontechsys.net/' },
    { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://cable.houstontechsys.net/industries/' },
    { '@type': 'ListItem', position: 3, name: 'Hospitality & Restaurants', item: 'https://cable.houstontechsys.net/industries/hospitality-restaurants/' },
  ],
}

const expertise = [
  {
    title: 'Kitchen Infrastructure',
    desc: 'We know exactly where data drops belong in commercial kitchens — POS terminals, KDS screens, order displays, and management systems. Clean runs, proper conduit, no interference with health code requirements.',
  },
  {
    title: 'Dining Room & Patio AV',
    desc: 'TV placement, speaker zones, and AV cabling for dining rooms and outdoor patios. We design audio coverage that enhances the guest experience — music in the right spaces, silence where it belongs.',
  },
  {
    title: 'Point of Sale Coordination',
    desc: 'We work directly with your POS vendor to ensure every terminal, printer, and payment device has the infrastructure it needs. No last-minute surprises when your POS team shows up.',
  },
  {
    title: 'GC Coordination',
    desc: 'We work seamlessly with general contractors on restaurant buildouts and renovations. We understand construction schedules — cable before drywall, finished before your GC needs the ceiling closed.',
  },
  {
    title: 'Network Infrastructure',
    desc: 'Structured cabling, WiFi access points, and network equipment for front-of-house and back-of-house. Separate networks for POS, guest WiFi, and management systems.',
  },
  {
    title: 'Surveillance Systems',
    desc: 'IP camera coverage for dining rooms, parking areas, kitchens, and entry points. We handle all cabling and NVR infrastructure for complete site security.',
  },
]

export default function HospitalityRestaurantsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Breadcrumb */}
      <div className="bg-[#050505] border-b border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex text-sm text-gray-500 gap-2">
            <Link href="/" className="hover:text-[#DC2626]">Home</Link>
            <span>/</span>
            <Link href="/industries/" className="hover:text-[#DC2626]">Industries</Link>
            <span>/</span>
            <span className="text-gray-300">Hospitality & Restaurants</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-[#0A0A0A] py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/32568165/pexels-photo-32568165.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1080&w=1920"
            alt="Restaurant dining room"
            className="w-full h-full object-cover opacity-25"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/95 via-[#0A0A0A]/80 to-transparent pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-[#DC2626] text-white text-xs font-bold px-3 py-1 rounded mb-5 uppercase tracking-wider">
              Hospitality & Restaurant Specialists
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              Restaurant & Hospitality<br />
              <span className="gradient-text">Cabling in Houston, TX</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              We understand restaurants. We know where every data drop goes in the kitchen, where speakers belong in the dining room, how to route TV cabling for the best coverage, and how to coordinate with your POS vendor so everything works on opening day.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/get-a-quote/" className="bg-[#DC2626] hover:bg-red-700 text-white font-bold px-7 py-3.5 rounded-lg transition-all">
                Get a Free Quote
              </Link>
              <a href="tel:2812312944" className="border border-gray-500 hover:border-white text-gray-300 hover:text-white font-semibold px-7 py-3.5 rounded-lg transition-all">
                Call (281) 231-2944
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* We Understand Restaurants */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">We Understand Restaurants</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Restaurants are one of the most complex cabling environments a contractor can work in. You have kitchens with health code requirements, dining rooms with specific AV needs, outdoor patios with weather considerations, and a point of sale system that has to work flawlessly from the moment the doors open.
                </p>
                <p>
                  Houston TechSys has done enough restaurant buildouts and renovations to understand the nuances that general contractors miss. We know where the data drops go in the kitchen — near the KDS, at the expeditor station, at the manager terminal. We know that audio belongs in the dining room and patio, not the kitchen. We know that TV placement affects the guest experience and has to be planned with the room layout in mind.
                </p>
                <p>
                  We also know that restaurants run on tight timelines. We work with your GC to ensure cabling is complete before drywall goes up and before your equipment vendors arrive. We coordinate directly with your POS team so every terminal, receipt printer, and payment device has exactly the infrastructure it needs — no delays, no surprises on opening day.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl">
              <img
                src="https://images.pexels.com/photos/33986701/pexels-photo-33986701.png?auto=compress&cs=tinysrgb&dpr=2&h=800&w=1200"
                alt="Commercial kitchen technology installation"
                className="w-full h-72 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">What We Handle</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">From the kitchen to the patio — every cable, every connection, every system.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item) => (
              <div key={item.title} className="bg-[#141414] border border-[#222222] rounded-xl p-6">
                <div className="w-1 h-8 bg-[#DC2626] rounded mb-4" />
                <h3 className="text-white font-semibold text-lg mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="py-16 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Related Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              ['Structured Cabling', '/services/structured-cabling-houston/'],
              ['AV Network Cabling', '/services/av-network-cabling/'],
              ['Surveillance Systems', '/services/surveillance-camera-installation-houston/'],
              ['WiFi Infrastructure', '/services/wifi-network-installation/'],
              ['Network Cabling', '/services/network-cabling-installation/'],
              ['Phone Systems (3CX)', '/services/phone-systems-houston/'],
            ].map(([label, href]) => (
              <Link key={href} href={href} className="bg-[#141414] border border-[#222222] hover:border-[#DC2626]/50 rounded-lg p-4 text-sm text-gray-300 hover:text-white transition-all text-center">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#DC2626]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Building or Renovating a Restaurant in Houston?</h2>
          <p className="text-red-100 text-lg mb-8">Get your cabling done right the first time. We coordinate with your GC and POS team so opening day goes smoothly.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/get-a-quote/" className="bg-white text-[#DC2626] hover:bg-red-50 font-bold px-8 py-4 rounded-lg text-lg transition-all">
              Get a Free Quote
            </Link>
            <a href="tel:2812312944" className="border-2 border-white text-white hover:bg-white hover:text-[#DC2626] font-bold px-8 py-4 rounded-lg text-lg transition-all">
              Call (281) 231-2944
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
