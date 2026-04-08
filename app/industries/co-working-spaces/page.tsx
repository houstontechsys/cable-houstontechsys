import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Co-Working Space Cabling Houston TX | VLANs & Segregated Networks | Houston TechSys',
  description: 'Cabling and network infrastructure for co-working spaces in Houston TX. VLAN segregation, multi-tenancy, conference room AV, and failover — 30+ co-working spaces in Texas.',
  alternates: { canonical: 'https://cable.houstontechsys.net/industries/co-working-spaces/' },
  openGraph: {
    title: 'Co-Working Space Cabling Houston TX | Houston TechSys',
    description: '30+ co-working spaces in Texas trust Houston TechSys for VLAN segregation, multi-tenant networks, AV infrastructure, and failover.',
    url: 'https://cable.houstontechsys.net/industries/co-working-spaces/',
  },
}

const features = [
  {
    title: 'VLAN Segmentation',
    desc: 'Every tenant gets their own isolated VLAN — completely segregated from neighboring businesses. Your clients\' data stays private and your network stays clean.',
  },
  {
    title: 'Multi-Tenant Network Design',
    desc: 'We design cabling infrastructure built for multi-tenancy from the ground up. Shared backbone, isolated tenant networks, centralized management. Built to scale as you add members.',
  },
  {
    title: 'Segregated Networks',
    desc: 'Separate logical networks for members, staff, guest WiFi, building management, and AV systems. Each segment is isolated and independently manageable.',
  },
  {
    title: 'Failover Capabilities',
    desc: 'Your members depend on uptime. We design redundant network paths and failover configurations that keep your space online even when a primary connection goes down.',
  },
  {
    title: 'Conference Room AV',
    desc: 'We handle all AV cabling for conference rooms, phone booths, and event spaces. Display cabling, speaker runs, control wiring — done right for a professional member experience.',
  },
  {
    title: 'Enterprise WiFi Coverage',
    desc: 'Dense access point deployment with proper cabling to cover every desk, lounge, and conference room. No dead zones. High-density WiFi designed for a building full of connected devices.',
  },
]

export default function CoWorkingPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-[#050505] border-b border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex text-sm text-gray-500 gap-2">
            <Link href="/" className="hover:text-[#DC2626]">Home</Link>
            <span>/</span>
            <Link href="/industries/" className="hover:text-[#DC2626]">Industries</Link>
            <span>/</span>
            <span className="text-gray-300">Co-Working Spaces</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-[#0A0A0A] min-h-[560px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/9497770/pexels-photo-9497770.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Co-working space office network"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/75 to-[#0A0A0A]/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-2xl">
            <div className="inline-block bg-[#DC2626] text-white text-xs font-bold px-3 py-1 rounded mb-5 uppercase tracking-wider">
              30+ Co-Working Spaces in Texas
            </div>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6">
              Co-Working Space Cabling<br />
              <span className="gradient-text">in Houston, TX</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Co-working spaces demand more from their network than a standard office. Multiple tenants, segregated VLANs, high-density WiFi, conference room AV, and failover infrastructure — Houston TechSys handles it all. We currently support 30+ co-working spaces across Texas.
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

      {/* Stats bar */}
      <section className="bg-[#DC2626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { stat: '30+', label: 'Co-Working Spaces in Texas' },
              { stat: 'VLAN', label: 'Segregated Networks' },
              { stat: 'Failover', label: 'Redundancy Built-In' },
              { stat: 'AV', label: 'Conference Room Ready' },
            ].map(({ stat, label }) => (
              <div key={label}>
                <p className="text-2xl font-extrabold text-white">{stat}</p>
                <p className="text-sm text-red-100 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <h2 className="text-white font-bold text-2xl">Built for Multi-Tenancy from the Ground Up</h2>
              <p>
                Running a co-working space means providing professional-grade network infrastructure to dozens of different businesses — each with their own security requirements, bandwidth needs, and connected devices. A consumer-grade network won&apos;t cut it, and neither will a standard office cabling approach.
              </p>
              <p>
                Houston TechSys designs and installs cabling infrastructure purpose-built for co-working environments. We implement VLAN segmentation from the start, so each tenant operates on their own isolated network — completely separate from every other member in the building. Tenant A cannot see Tenant B&apos;s traffic. Your staff network is separate from member WiFi. Guest access is isolated from your management systems.
              </p>
              <p>
                We also build in failover capabilities — redundant network paths and automatic failover configurations that keep your members connected even when a primary circuit goes down. Downtime in a co-working space means unhappy members and lost revenue. We engineer against it from day one.
              </p>
              <p>
                With 30+ co-working spaces across Texas in our portfolio, we understand the operational demands of shared office environments better than any other cabling contractor in the Houston market.
              </p>
            </div>
            <div className="overflow-hidden rounded-xl">
              <img
                src="https://images.pexels.com/photos/4043789/pexels-photo-4043789.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=1200"
                alt="Co-working space with enterprise network infrastructure"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-[#141414] border border-[#222222] rounded-xl p-6">
                <div className="w-1 h-8 bg-[#DC2626] rounded mb-4" />
                <h3 className="text-white font-semibold text-lg mb-3">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Services for Co-Working Spaces</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              ['Structured Cabling', '/services/structured-cabling-houston/'],
              ['WiFi Infrastructure', '/services/wifi-network-installation/'],
              ['AV Network Cabling', '/services/av-network-cabling/'],
              ['Fiber Optic Backbone', '/services/fiber-optic-cabling-houston/'],
              ['Surveillance Systems', '/services/surveillance-camera-installation-houston/'],
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
          <h2 className="text-3xl font-extrabold text-white mb-4">Opening or Expanding a Co-Working Space?</h2>
          <p className="text-red-100 text-lg mb-8">
            Get infrastructure built for multi-tenancy from day one. VLAN segregation, failover, AV — we handle it all.
          </p>
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
