import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Structured Cabling Contractor Houston TX | Houston TechSys',
  description: 'Insured structured cabling contractor in Houston TX. Cat6, Cat6A, fiber backbone, patch panels, and certification. Free quote for commercial & office projects.',
  alternates: { canonical: 'https://cable.houstontechsys.net/services/structured-cabling-houston/' },
  openGraph: {
    title: 'Structured Cabling Contractor Houston TX | Houston TechSys',
    description: 'Professional structured cabling installation for commercial buildings, offices, and data centers in Houston. Fully insured.',
    url: 'https://cable.houstontechsys.net/services/structured-cabling-houston/',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Structured Cabling Installation Houston TX',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Houston TechSys',
    url: 'https://cable.houstontechsys.net',
    telephone: '+12812312944',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Houston',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
  },
  description: 'Professional structured cabling installation in Houston TX for commercial buildings, offices, and industrial facilities.',
  areaServed: 'Houston, TX',
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cable.houstontechsys.net/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://cable.houstontechsys.net/services/' },
    { '@type': 'ListItem', position: 3, name: 'Structured Cabling Houston', item: 'https://cable.houstontechsys.net/services/structured-cabling-houston/' },
  ],
}

const faqs = [
  {
    q: 'How much does structured cabling cost in Houston?',
    a: 'Structured cabling costs in Houston typically range from $150–$350 per drop for Cat6 installations, depending on building complexity, cable run lengths, and required panel work. We provide itemized free quotes after a site survey — no surprises.',
  },
  {
    q: 'How long does a structured cabling installation take?',
    a: 'A typical office installation of 50–100 drops takes 2–4 days. Larger commercial projects are scoped individually. We provide a detailed project timeline before work begins and coordinate with your GC to hit your deadlines.',
  },
  {
    q: 'Are your technicians certified?',
    a: 'Yes. Our technicians are BICSI-trained and we operate as a insured cabling contractor. All installations meet or exceed TIA-568 standards. You receive complete testing reports and certification documentation at project completion.',
  },
  {
    q: 'When should I choose Cat6A over Cat6?',
    a: 'Cat6A supports 10-Gigabit Ethernet up to 100 meters and is ideal for data centers, high-density environments, and future-proofing. For standard office environments with 1GbE needs, Cat6 is typically sufficient. We\'ll recommend the right solution during your site survey.',
  },
  {
    q: 'Do I need a insured contractor for structured cabling in Texas?',
    a: 'Yes. In Texas, structured cabling and low voltage work requires a insured contractor. Hiring unlicensed installers can result in failed inspections, voided warranties, and insurance issues. Houston TechSys is fully fully insured.',
  },
]

export default function StructuredCablingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Breadcrumb */}
      <div className="bg-[#050505] border-b border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex text-sm text-gray-500 gap-2">
            <Link href="/" className="hover:text-[#DC2626]">Home</Link>
            <span>/</span>
            <Link href="/services/" className="hover:text-[#DC2626]">Services</Link>
            <span>/</span>
            <span className="text-gray-300">Structured Cabling Houston</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[#0A0A0A] dot-grid py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#DC2626]/10 border border-[#DC2626]/30 rounded-full px-4 py-1.5 text-sm text-[#DC2626] font-medium mb-6">
              Fully Insured Cabling Contractor
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              Structured Cabling Contractor<br />
              <span className="gradient-text">in Houston, TX</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Professional Cat6, Cat6A, and fiber backbone installations for commercial buildings, offices, and data centers across Greater Houston. TIA-568 compliant. Fully tested and certified.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/get-a-quote/" className="bg-[#DC2626] hover:bg-red-600 text-white font-bold px-7 py-3.5 rounded-lg transition-all">
                Get a Free Quote
              </Link>
              <a href="tel:2812312944" className="border border-gray-500 hover:border-white text-gray-300 hover:text-white font-semibold px-7 py-3.5 rounded-lg transition-all">
                Call (281) 231-2944
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Body Content */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-5 text-gray-300 leading-relaxed">
              <p>
                When your commercial building, office complex, or industrial facility needs reliable, high-performance network infrastructure, the quality of your structured cabling system determines everything. Houston TechSys is Greater Houston&apos;s trusted structured cabling contractor — delivering professional Cat6, Cat6A, and fiber optic installations that meet TIA-568 standards and stand up to years of heavy commercial use.
              </p>
              <p>
                Structured cabling is the physical foundation of your entire network. It carries voice, data, video, and building automation signals through a unified, organized system of cables, patch panels, and outlets. Unlike point-to-point wiring, a properly installed structured cabling system is designed for scalability — adding workstations, upgrading speeds, or expanding to new floors becomes straightforward rather than a costly rewiring project.
              </p>
              <p>
                Our team serves building owners, property managers, general contractors, and facility managers throughout Houston, the Galleria corridor, Downtown, the Medical Center, and surrounding suburbs. We&apos;ve installed structured cabling in multi-tenant office towers, retail centers, healthcare facilities, law firms, financial institutions, and manufacturing plants. No project is too large or too complex.
              </p>
              <p>
                Every Houston TechSys installation follows a proven process: site survey and design, pathway planning, installation, thorough testing with a Fluke DSX cable analyzer, and complete as-built documentation handed off at job completion. You know exactly what you have, where every cable runs, and what every port connects to. That documentation is invaluable for future moves, adds, and changes.
              </p>
              <p>
                We are BICSI-trained and fully insured. Houston TechSys carries commercial general liability and workers' compensation insurance, meeting the requirements of commercial building owners and general contractors.
              </p>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-[#141414] border border-[#222222] rounded-xl p-6">
                <h3 className="text-white font-bold text-lg mb-4">What&apos;s Included</h3>
                <ul className="space-y-2">
                  {[
                    'Site survey & cable pathway design',
                    'Cat5e / Cat6 / Cat6A copper installation',
                    'Fiber backbone (single & multi-mode)',
                    'Patch panel termination & labeling',
                    'Cable management & consolidation',
                    'Fluke DSX performance testing',
                    'TIA-568 certification documentation',
                    'As-built drawings & port mapping',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                      <svg className="w-4 h-4 text-[#DC2626] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#141414] border border-[#222222] rounded-xl p-6">
                <h3 className="text-white font-bold text-lg mb-4">Who It&apos;s For</h3>
                <ul className="space-y-2">
                  {[
                    'Commercial building owners',
                    'Property & facility managers',
                    'General contractors (as sub)',
                    'Offices undergoing relocation',
                    'Data centers & server rooms',
                    'Healthcare & medical facilities',
                    'Educational institutions',
                    'Retail & hospitality',
                  ].map((item) => (
                    <li key={item} className="text-sm text-gray-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#DC2626] rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#DC2626] rounded-xl p-6 text-center">
                <p className="text-white font-bold text-lg mb-2">Free Site Survey</p>
                <p className="text-red-100 text-sm mb-4">Get a detailed quote with no obligation.</p>
                <Link href="/get-a-quote/" className="block bg-white text-[#DC2626] hover:bg-red-50 font-bold px-5 py-3 rounded-lg transition-all text-sm">
                  Request Your Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#141414] border border-[#222222] rounded-xl p-6">
                <h3 className="text-white font-semibold text-base mb-3">{faq.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Related Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              ['Fiber Optic Cabling', '/services/fiber-optic-cabling-houston/'],
              ['Network Cabling', '/services/network-cabling-installation/'],
              ['AV Network Cabling', '/services/av-network-cabling/'],
              ['Surveillance Systems', '/services/surveillance-camera-installation-houston/'],
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
          <h2 className="text-3xl font-extrabold text-white mb-4">Ready to Build Your Cabling Infrastructure?</h2>
          <p className="text-red-100 text-lg mb-8">Free site survey, honest pricing, certified installation. Let&apos;s talk.</p>
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
