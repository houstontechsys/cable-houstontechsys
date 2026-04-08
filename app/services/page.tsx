import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Commercial Cabling Services Houston TX | Houston TechSys',
  description: 'Full-service commercial cabling in Houston TX. Structured cabling, fiber optic, AV networks, surveillance, WiFi, and phone systems. Fully insured.',
  alternates: { canonical: 'https://cable.houstontechsys.net/services/' },
}

const services = [
  { title: 'Structured Cabling Houston', desc: 'Cat5e, Cat6, Cat6A copper infrastructure designed to TIA-568 standards. The backbone of your network.', href: '/services/structured-cabling-houston/' },
  { title: 'Network Cabling Installation', desc: 'End-to-end network cabling for offices, data centers, and enterprise environments across Houston.', href: '/services/network-cabling-installation/' },
  { title: 'Fiber Optic Cabling Houston', desc: 'Single-mode and multi-mode fiber for high-speed backbone, inter-building runs, and data centers.', href: '/services/fiber-optic-cabling-houston/' },
  { title: 'AV Network Cabling', desc: 'Professional AV infrastructure for conference rooms, lobbies, and integrated media systems.', href: '/services/av-network-cabling/' },
  { title: 'Surveillance Camera Installation', desc: 'IP camera systems, NVR configuration, and commercial security cabling for complete site coverage.', href: '/services/surveillance-camera-installation-houston/' },
  { title: 'WiFi Infrastructure', desc: 'Enterprise access point deployment and cabling for seamless wireless coverage throughout your facility.', href: '/services/wifi-network-installation/' },
  { title: 'Phone Systems Houston', desc: 'VoIP and 3CX phone system cabling and infrastructure for modern business communication.', href: '/services/phone-systems-houston/' },
]

export default function ServicesPage() {
  return (
    <>
            <section className="relative bg-[#0A0A0A] min-h-[560px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/5480781/pexels-photo-5480781.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Server rack network data center commercial cabling"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/75 to-[#0A0A0A]/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-2xl">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-4">
              Commercial Cabling <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              End-to-end low voltage and cabling solutions for commercial buildings, offices, and industrial facilities throughout Greater Houston.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="group bg-[#141414] border border-[#222222] hover:border-[#DC2626]/50 rounded-xl p-6 transition-all">
                <h2 className="text-white font-semibold text-lg mb-2">{s.title}</h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{s.desc}</p>
                <span className="text-[#DC2626] text-sm font-medium group-hover:underline">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-[#DC2626] text-center">
        <h2 className="text-3xl font-extrabold text-white mb-4">Not sure what you need?</h2>
        <p className="text-red-100 text-lg mb-6">We&apos;ll assess your space and recommend the right solution. Free, no obligation.</p>
        <Link href="/get-a-quote/" className="inline-block bg-white text-[#DC2626] hover:bg-red-50 font-bold px-8 py-4 rounded-lg text-lg transition-all">Get a Free Assessment</Link>
      </section>
    </>
  )
}
