import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Commercial Cabling Contractor Houston TX | Houston TechSys',
  description: 'Houston\'s most trusted commercial cabling contractor. Structured cabling, fiber optic, AV networks, surveillance & WiFi for commercial buildings, GCs & office relocations.',
  alternates: { canonical: 'https://cable.houstontechsys.net/' },
  openGraph: {
    title: 'Commercial Cabling Contractor Houston TX | Houston TechSys',
    description: 'Structured cabling, fiber optic, AV networks, surveillance & WiFi. Licensed & bonded in Houston, TX.',
    url: 'https://cable.houstontechsys.net/',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Houston TechSys Cabling & Infrastructure',
  description: 'Commercial cabling contractor in Houston TX specializing in structured cabling, fiber optic, AV networks, surveillance systems, and WiFi infrastructure.',
  url: 'https://cable.houstontechsys.net',
  telephone: '+12812312944',
  email: 'info@houstontechsys.net',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Houston',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 29.7604,
    longitude: -95.3698,
  },
  areaServed: 'Greater Houston Area',
  openingHours: 'Mo-Fr 07:00-18:00',
  priceRange: '$$',
}

const services = [
  {
    img: 'https://images.pexels.com/photos/19166565/pexels-photo-19166565.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=600',
    title: 'Structured Cabling',
    desc: 'Cat5e, Cat6, Cat6A copper infrastructure designed to TIA-568 standards for long-term reliability.',
    href: '/services/structured-cabling-houston/',
  },
  {
    img: 'https://images.pexels.com/photos/442154/pexels-photo-442154.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=600',
    title: 'Network Cabling',
    desc: 'End-to-end network cabling installation for offices, data centers, and enterprise environments.',
    href: '/services/network-cabling-installation/',
  },
  {
    img: 'https://images.pexels.com/photos/4280696/pexels-photo-4280696.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=600',
    title: 'Fiber Optic',
    desc: 'Single-mode and multi-mode fiber optic cabling for high-speed backbone and long-distance runs.',
    href: '/services/fiber-optic-cabling-houston/',
  },
  {
    img: 'https://images.pexels.com/photos/6949384/pexels-photo-6949384.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=600',
    title: 'AV Network Cabling',
    desc: 'Professional AV infrastructure for conference rooms, digital signage, and integrated media systems.',
    href: '/services/av-network-cabling/',
  },
  {
    img: 'https://images.pexels.com/photos/7364948/pexels-photo-7364948.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=600',
    title: 'Surveillance Systems',
    desc: 'IP camera systems, NVR configuration, and commercial security cabling for complete coverage.',
    href: '/services/surveillance-camera-installation-houston/',
  },
  {
    img: 'https://images.pexels.com/photos/29711663/pexels-photo-29711663.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=600',
    title: 'WiFi Infrastructure',
    desc: 'Enterprise-grade access point deployment, cabling, and network design for seamless wireless coverage.',
    href: '/services/wifi-network-installation/',
  },
]

const pillars = [
  {
    title: 'Licensed & Certified',
    desc: 'Texas licensed low voltage contractor. BICSI-trained technicians. Fully bonded and insured.',
  },
  {
    title: 'On-Time Delivery',
    desc: 'We coordinate with your GC and stay on schedule. No delays, no excuses — just delivered on time.',
  },
  {
    title: 'Clean, Professional Work',
    desc: 'Organized cable management, proper labeling, and documentation on every single job.',
  },
  {
    title: 'Houston Local',
    desc: 'Houston-based team. Fast response times, local references, and a reputation built job by job.',
  },
]

const industries = [
  {
    title: 'Building Managers',
    desc: 'Reliable infrastructure installs with minimal disruption to tenants and building operations.',
    href: '/industries/commercial-buildings/',
    img: 'https://images.pexels.com/photos/1486861/pexels-photo-1486861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=600',
  },
  {
    title: 'Building Owners',
    desc: 'Future-proof your asset. Code-compliant cabling that adds value and passes inspection.',
    href: '/industries/commercial-buildings/',
    img: 'https://images.pexels.com/photos/273209/pexels-photo-273209.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=600',
  },
  {
    title: 'General Contractors',
    desc: 'Low voltage subcontractor that shows up, communicates, and never delays your project.',
    href: '/industries/general-contractors/',
    img: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=600',
  },
  {
    title: 'Office Relocations',
    desc: 'Get your cabling done on time so your move stays on schedule. We specialize in relocation jobs.',
    href: '/industries/office-relocation-cabling/',
    img: 'https://images.pexels.com/photos/7581042/pexels-photo-7581042.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=600',
  },
]

const steps = [
  { step: '01', title: 'Free Site Survey', desc: 'We visit your site, assess your needs, and identify the best cabling solution for your space and budget.' },
  { step: '02', title: 'Custom Design', desc: 'Our team designs a complete cabling plan — pathway routing, panel layout, port counts, and documentation.' },
  { step: '03', title: 'Expert Installation', desc: 'Licensed technicians install your cabling to TIA standards. Clean runs, proper labels, no shortcuts.' },
  { step: '04', title: 'Testing & Handoff', desc: 'Every run is tested and certified. You receive complete as-built documentation before we leave.' },
]

const testimonials = [
  {
    quote: "Houston TechSys cabled our entire 12-story office tower during renovation. They coordinated flawlessly with our GC and were done 3 days ahead of schedule. The work was immaculate.",
    author: "Marcus T.",
    role: "Property Manager, Greenway Plaza",
  },
  {
    quote: "We brought them in for an emergency office relocation — 80 drops needed in 5 days. They pulled it off. Our team was up and running on day one in the new space.",
    author: "Sandra K.",
    role: "IT Director, Houston Law Firm",
  },
  {
    quote: "Best low voltage contractor we've used in 15 years of construction. Licensed, professional, and the documentation they hand off is better than anything else I've seen.",
    author: "David R.",
    role: "Project Manager, Texas Commercial Builders",
  },
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-center bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/4716292/pexels-photo-4716292.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1080&w=1920" alt="Commercial network cabling installation" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A]/95 via-[#0A0A0A]/80 to-[#222222]/60 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#DC2626]/10 border border-[#DC2626]/30 rounded-full px-4 py-1.5 text-sm text-[#DC2626] font-medium mb-6">
              <span className="w-2 h-2 bg-[#DC2626] rounded-full animate-pulse" />
              Licensed & Bonded in Texas
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Houston&apos;s Most Trusted<br />
              <span className="gradient-text">Commercial Cabling</span><br />
              Contractor
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
              Structured cabling, fiber optic, AV networks, surveillance systems, and enterprise WiFi — professionally installed, documented, and guaranteed. Serving commercial buildings, GCs, and office relocations across Greater Houston.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/get-a-quote/"
                className="bg-[#DC2626] hover:bg-red-600 text-white font-bold px-8 py-4 rounded-lg text-lg transition-all shadow-lg shadow-red-600/20 hover:shadow-red-600/40"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/services/"
                className="border border-gray-500 hover:border-white text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-[#222222] border-y border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { stat: '500+', label: 'Projects Completed' },
              { stat: '15+', label: 'Years Experience' },
              { stat: 'Licensed', label: '& Bonded in Texas' },
              { stat: '24/7', label: 'Support Available' },
            ].map(({ stat, label }) => (
              <div key={label}>
                <p className="text-2xl font-extrabold text-[#DC2626]">{stat}</p>
                <p className="text-sm text-gray-300 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Commercial Cabling Services</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              End-to-end low voltage and cabling solutions for commercial properties of every size.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group bg-[#141414] border border-[#222222] hover:border-[#DC2626]/50 rounded-xl overflow-hidden transition-all"
              >
                <div className="h-44 overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-white font-semibold text-lg mb-2">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <span className="text-[#DC2626] text-sm font-medium group-hover:underline">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE HTS ── */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Why Houston TechSys?</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">The standard your project deserves — every time.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((p) => (
              <div key={p.title} className="border-l-2 border-[#DC2626] pl-5">
                <h3 className="text-white font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Who We Work With</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">Serving the commercial stakeholders who need it done right.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className="group bg-[#141414] border border-[#222222] hover:border-[#DC2626]/50 rounded-xl overflow-hidden transition-all"
              >
                <div className="h-40 overflow-hidden">
                  <img src={i.img} alt={i.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="text-white font-semibold text-base mb-2">{i.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{i.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">Simple, proven process. From first call to final handoff.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="relative">
                <div className="w-12 h-12 bg-[#DC2626]/10 border border-[#DC2626]/30 rounded-xl flex items-center justify-center text-[#DC2626] font-bold text-lg mb-4">
                  {s.step}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">Trusted by building managers, GCs, and facility teams across Houston.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.author} className="bg-[#141414] border border-[#222222] rounded-xl p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#DC2626]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-5 italic">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="text-white font-semibold text-sm">{t.author}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20 bg-[#DC2626]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-red-100 text-lg mb-8">
            Get your free cabling assessment and quote. No obligation — just a clear plan and honest pricing.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/get-a-quote/"
              className="bg-white text-[#DC2626] hover:bg-red-50 font-bold px-8 py-4 rounded-lg text-lg transition-all"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:2812312944"
              className="border-2 border-white text-white hover:bg-white hover:text-[#DC2626] font-bold px-8 py-4 rounded-lg text-lg transition-all"
            >
              Call (281) 231-2944
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
