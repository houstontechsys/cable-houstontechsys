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
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    title: 'Structured Cabling',
    desc: 'Cat5e, Cat6, Cat6A copper infrastructure designed to TIA-568 standards for long-term reliability.',
    href: '/services/structured-cabling-houston/',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    title: 'Network Cabling',
    desc: 'End-to-end network cabling installation for offices, data centers, and enterprise environments.',
    href: '/services/network-cabling-installation/',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Fiber Optic',
    desc: 'Single-mode and multi-mode fiber optic cabling for high-speed backbone and long-distance runs.',
    href: '/services/fiber-optic-cabling-houston/',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.069A1 1 0 0121 8.82V15.18a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
      </svg>
    ),
    title: 'AV Network Cabling',
    desc: 'Professional AV infrastructure for conference rooms, digital signage, and integrated media systems.',
    href: '/services/av-network-cabling/',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: 'Surveillance Systems',
    desc: 'IP camera systems, NVR configuration, and commercial security cabling for complete coverage.',
    href: '/services/surveillance-camera-installation-houston/',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
    title: 'WiFi Infrastructure',
    desc: 'Enterprise-grade access point deployment, cabling, and network design for seamless wireless coverage.',
    href: '/services/wifi-network-installation/',
  },
]

const pillars = [
  {
    icon: '🏅',
    title: 'Licensed & Certified',
    desc: 'Texas licensed low voltage contractor. BICSI-trained technicians. Fully bonded and insured.',
  },
  {
    icon: '⏱️',
    title: 'On-Time Delivery',
    desc: 'We coordinate with your GC and stay on schedule. No delays, no excuses — just delivered on time.',
  },
  {
    icon: '✨',
    title: 'Clean, Professional Work',
    desc: 'Organized cable management, proper labeling, and documentation on every single job.',
  },
  {
    icon: '📍',
    title: 'Houston Local',
    desc: 'Houston-based team. Fast response times, local references, and a reputation built job by job.',
  },
]

const industries = [
  {
    title: 'Building Managers',
    desc: 'Reliable infrastructure installs with minimal disruption to tenants and building operations.',
    href: '/industries/commercial-buildings/',
    icon: '🏢',
  },
  {
    title: 'Building Owners',
    desc: 'Future-proof your asset. Code-compliant cabling that adds value and passes inspection.',
    href: '/industries/commercial-buildings/',
    icon: '🔑',
  },
  {
    title: 'General Contractors',
    desc: 'Low voltage subcontractor that shows up, communicates, and never delays your project.',
    href: '/industries/general-contractors/',
    icon: '🔧',
  },
  {
    title: 'Office Relocations',
    desc: 'Get your cabling done on time so your move stays on schedule. We specialize in relocation jobs.',
    href: '/industries/office-relocation-cabling/',
    icon: '📦',
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
      <section className="relative min-h-[90vh] flex items-center bg-[#0A1628] dot-grid overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0A1628]/90 to-[#1E3A5F]/40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#F97316]/10 border border-[#F97316]/30 rounded-full px-4 py-1.5 text-sm text-[#F97316] font-medium mb-6">
              <span className="w-2 h-2 bg-[#F97316] rounded-full animate-pulse" />
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
                className="bg-[#F97316] hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-lg text-lg transition-all shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40"
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
      <section className="bg-[#1E3A5F] border-y border-[#2a4f7a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { stat: '500+', label: 'Projects Completed' },
              { stat: '15+', label: 'Years Experience' },
              { stat: 'Licensed', label: '& Bonded in Texas' },
              { stat: '24/7', label: 'Support Available' },
            ].map(({ stat, label }) => (
              <div key={label}>
                <p className="text-2xl font-extrabold text-[#F97316]">{stat}</p>
                <p className="text-sm text-gray-300 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-24 bg-[#0A1628]">
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
                className="group bg-[#112240] border border-[#1E3A5F] hover:border-[#F97316]/50 rounded-xl p-6 transition-all hover:bg-[#1E3A5F]/30"
              >
                <div className="text-[#F97316] mb-4 group-hover:scale-110 transition-transform inline-block">
                  {s.icon}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{s.desc}</p>
                <span className="text-[#F97316] text-sm font-medium group-hover:underline">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE HTS ── */}
      <section className="py-24 bg-[#060e1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Why Houston TechSys?</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">The standard your project deserves — every time.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((p) => (
              <div key={p.title} className="text-center">
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="py-24 bg-[#0A1628]">
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
                className="group bg-[#112240] border border-[#1E3A5F] hover:border-[#F97316]/50 rounded-xl p-6 text-center transition-all"
              >
                <div className="text-3xl mb-3">{i.icon}</div>
                <h3 className="text-white font-semibold text-base mb-2">{i.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{i.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24 bg-[#060e1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">Simple, proven process. From first call to final handoff.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="relative">
                <div className="w-12 h-12 bg-[#F97316]/10 border border-[#F97316]/30 rounded-xl flex items-center justify-center text-[#F97316] font-bold text-lg mb-4">
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
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">Trusted by building managers, GCs, and facility teams across Houston.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.author} className="bg-[#112240] border border-[#1E3A5F] rounded-xl p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#F97316]" fill="currentColor" viewBox="0 0 20 20">
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
      <section className="py-20 bg-[#F97316]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-orange-100 text-lg mb-8">
            Get your free cabling assessment and quote. No obligation — just a clear plan and honest pricing.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/get-a-quote/"
              className="bg-white text-[#F97316] hover:bg-orange-50 font-bold px-8 py-4 rounded-lg text-lg transition-all"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:2812312944"
              className="border-2 border-white text-white hover:bg-white hover:text-[#F97316] font-bold px-8 py-4 rounded-lg text-lg transition-all"
            >
              Call (281) 231-2944
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
