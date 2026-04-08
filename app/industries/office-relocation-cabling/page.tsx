import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Office Relocation Cabling Houston | Keep Your Move on Schedule | Houston TechSys',
  description: 'Office relocation cabling in Houston TX. We coordinate with your movers and GC to get your cabling done on time so your team is up and running day one in the new space.',
  alternates: { canonical: 'https://cable.houstontechsys.net/industries/office-relocation-cabling/' },
  openGraph: {
    title: 'Office Relocation Cabling Houston | Houston TechSys',
    description: 'Don\'t let cabling delay your office move. Houston TechSys specializes in relocation cabling — fast, coordinated, done right.',
    url: 'https://cable.houstontechsys.net/industries/office-relocation-cabling/',
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cable.houstontechsys.net/' },
    { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://cable.houstontechsys.net/industries/' },
    { '@type': 'ListItem', position: 3, name: 'Office Relocation Cabling', item: 'https://cable.houstontechsys.net/industries/office-relocation-cabling/' },
  ],
}

const checklist = [
  { step: '1', item: 'Engage cabling contractor 8–12 weeks before move date', note: 'Technology infrastructure takes 2–4 weeks minimum — book early.' },
  { step: '2', item: 'Obtain building floor plans and confirm port count', note: 'Every workstation, conference room, and printer needs a drop.' },
  { step: '3', item: 'Confirm MDF/IDF room locations with building management', note: 'Know where your telecom rooms are before design begins.' },
  { step: '4', item: 'Coordinate cabling schedule with your GC and electrician', note: 'Cable before drywall and ceiling tiles are installed if possible.' },
  { step: '5', item: 'Confirm ISP circuit delivery timeline', note: 'ISPs often take 4–8 weeks — order your circuit early.' },
  { step: '6', item: 'Plan for AV and conference room infrastructure', note: 'HDMI, display ports, and control cabling need separate runs.' },
  { step: '7', item: 'Schedule surveillance and access control cabling', note: 'IP cameras and door controllers require low voltage runs.' },
  { step: '8', item: 'Request testing and certification on all cable runs', note: 'Demand Fluke-certified results — not just a visual inspection.' },
  { step: '9', item: 'Obtain as-built documentation before move-in', note: 'Port mapping and panel schedules save hours during setup.' },
  { step: '10', item: 'Confirm WiFi access point locations and cabling', note: 'Dead zones on day one will destroy productivity. Plan AP placement now.' },
]

const painPoints = [
  {
    pain: 'Cabling delays kill your move timeline',
    solution: 'We prioritize relocation projects and commit to your go-live date in writing.',
  },
  {
    pain: 'Multiple vendors don\'t communicate',
    solution: 'We coordinate directly with your GC, electrician, ISP, and furniture vendor.',
  },
  {
    pain: 'Poor cabling = network problems on day one',
    solution: 'Every run is Fluke-tested. You get certified results, not promises.',
  },
  {
    pain: 'No documentation after the job',
    solution: 'Complete as-built drawings, port mapping, and panel schedules — every time.',
  },
]

export default function OfficeRelocationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Breadcrumb */}
      <div className="bg-[#060e1a] border-b border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex text-sm text-gray-500 gap-2">
            <Link href="/" className="hover:text-[#F97316]">Home</Link>
            <span>/</span>
            <Link href="/industries/" className="hover:text-[#F97316]">Industries</Link>
            <span>/</span>
            <span className="text-gray-300">Office Relocation Cabling</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[#0A1628] dot-grid py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#F97316]/10 border border-[#F97316]/30 rounded-full px-4 py-1.5 text-sm text-[#F97316] font-medium mb-6">
              📦 Office Relocation Specialists
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              Office Relocation Cabling<br />
              <span className="gradient-text">That Keeps Houston Moves on Schedule</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Cabling is the single biggest cause of office move delays. Technology infrastructure takes 2–4 weeks minimum — and if you wait too long to book your cabling contractor, your entire move timeline slips. Houston TechSys keeps your relocation on track.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/get-a-quote/" className="bg-[#F97316] hover:bg-orange-500 text-white font-bold px-7 py-3.5 rounded-lg transition-all">
                Get a Relocation Quote
              </Link>
              <a href="tel:7139999999" className="border border-gray-500 hover:border-white text-gray-300 hover:text-white font-semibold px-7 py-3.5 rounded-lg transition-all">
                Call (713) 999-9999
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points → Solutions */}
      <section className="py-20 bg-[#060e1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">We Know What Kills Office Moves</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Here&apos;s what goes wrong — and how Houston TechSys prevents every single one.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {painPoints.map((p) => (
              <div key={p.pain} className="bg-[#112240] border border-[#1E3A5F] rounded-xl p-6">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-red-400 text-lg mt-0.5">⚠️</span>
                  <p className="text-white font-semibold">{p.pain}</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 text-lg mt-0.5">✅</span>
                  <p className="text-gray-300 text-sm">{p.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keep Your Move on Schedule Section */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">We Keep Your Move on Schedule</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Office moves involve a complex web of overlapping vendors — general contractors, electricians, low voltage installers, ISPs, furniture companies, and movers all with overlapping responsibilities and tight timelines. When one vendor slips, everyone slips.
                </p>
                <p>
                  Houston TechSys is the cabling contractor that doesn&apos;t slip. We book your move into our schedule, commit to your go-live date, and coordinate directly with every other vendor on your project. We know your GC needs pathways clear, your electrician needs us out of the ceiling before final inspection, and your ISP needs termination points ready before they arrive.
                </p>
                <p>
                  We&apos;ve handled emergency relocations — 80 drops in 5 days. We&apos;ve done phased moves where we&apos;re cabling floors while the business keeps running on the floor below. We understand the stakes of an office move, and we treat your deadline like it&apos;s our deadline.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="bg-[#112240] border border-[#1E3A5F] rounded-lg px-4 py-3 text-sm text-center">
                  <p className="text-[#F97316] font-bold text-xl">8–12 wks</p>
                  <p className="text-gray-400">Book this early</p>
                </div>
                <div className="bg-[#112240] border border-[#1E3A5F] rounded-lg px-4 py-3 text-sm text-center">
                  <p className="text-[#F97316] font-bold text-xl">Day 1</p>
                  <p className="text-gray-400">Team up and running</p>
                </div>
                <div className="bg-[#112240] border border-[#1E3A5F] rounded-lg px-4 py-3 text-sm text-center">
                  <p className="text-[#F97316] font-bold text-xl">100%</p>
                  <p className="text-gray-400">Runs tested & certified</p>
                </div>
              </div>
            </div>
            <div className="bg-[#112240] border border-[#F97316]/30 rounded-xl p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-[#F97316]/10 border border-[#F97316]/30 rounded-xl flex items-center justify-center text-[#F97316] text-lg">
                  ⏱️
                </div>
                <h3 className="text-white font-bold text-lg">Timeline Guarantee</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                When we commit to your go-live date, we back it up. If we miss a milestone that&apos;s within our control, we&apos;ll work nights and weekends to make it right at no additional cost.
              </p>
              <p className="text-gray-400 text-sm italic">
                &ldquo;We brought them in for an emergency relocation — 80 drops in 5 days. They pulled it off. Our team was up and running on day one.&rdquo;
              </p>
              <p className="text-[#F97316] text-sm font-medium mt-2">— IT Director, Houston Law Firm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Relocation Cabling Checklist */}
      <section className="py-20 bg-[#060e1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">Office Relocation Cabling Checklist</h2>
            <p className="text-gray-400 text-lg">Use this checklist to stay on track. Miss any of these and your move risks delays.</p>
          </div>
          <div className="space-y-3">
            {checklist.map((item) => (
              <div key={item.step} className="bg-[#112240] border border-[#1E3A5F] rounded-xl p-5 flex gap-4">
                <div className="w-8 h-8 bg-[#F97316] rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-1">{item.item}</p>
                  <p className="text-gray-400 text-xs">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/get-a-quote/" className="inline-block bg-[#F97316] hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-lg text-lg transition-all">
              Talk to a Relocation Specialist
            </Link>
          </div>
        </div>
      </section>

      {/* Services for Relocation */}
      <section className="py-16 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">What We Install for Office Relocations</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              ['Structured Cabling (Cat6/Cat6A)', '/services/structured-cabling-houston/'],
              ['Fiber Optic Backbone', '/services/fiber-optic-cabling-houston/'],
              ['Conference Room AV Cabling', '/services/av-network-cabling/'],
              ['Surveillance Camera Wiring', '/services/surveillance-camera-installation-houston/'],
              ['WiFi Access Point Cabling', '/services/wifi-network-installation/'],
              ['Phone System Cabling', '/services/phone-systems-houston/'],
            ].map(([label, href]) => (
              <Link key={href} href={href} className="bg-[#112240] border border-[#1E3A5F] hover:border-[#F97316]/50 rounded-lg p-4 text-sm text-gray-300 hover:text-white transition-all text-center">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#F97316]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Planning an Office Move in Houston?</h2>
          <p className="text-orange-100 text-lg mb-8">
            Book your cabling contractor now — not after your GC is already on site. The earlier you engage us, the smoother your move.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/get-a-quote/" className="bg-white text-[#F97316] hover:bg-orange-50 font-bold px-8 py-4 rounded-lg text-lg transition-all">
              Get a Free Quote
            </Link>
            <a href="tel:7139999999" className="border-2 border-white text-white hover:bg-white hover:text-[#F97316] font-bold px-8 py-4 rounded-lg text-lg transition-all">
              Call (713) 999-9999
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
