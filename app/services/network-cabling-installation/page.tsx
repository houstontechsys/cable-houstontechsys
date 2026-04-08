import type { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = {
  title: 'Network Cabling Installation Houston TX | Houston TechSys',
  description: 'Professional network cabling installation in Houston TX for offices, data centers, and commercial buildings. Insured cabling contractor. Free quote.',
  alternates: { canonical: 'https://cable.houstontechsys.net/services/network-cabling-installation/' },
}
export default function NetworkCablingPage() {
  return (
    <>
      <section className="relative bg-[#0A0A0A] min-h-[560px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/4682187/pexels-photo-4682187.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Network cabling installation"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/75 to-[#0A0A0A]/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-2xl">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6">Network Cabling Installation in <span className="gradient-text">Houston, TX</span></h1>
            <p className="text-xl text-gray-300 mb-8">End-to-end network cabling for commercial offices, data centers, warehouses, and enterprise environments. Reliable, certified, and built to last.</p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/get-a-quote/" className="bg-[#DC2626] hover:bg-red-600 text-white font-bold px-7 py-3.5 rounded-lg transition-all">Get a Free Quote</Link>
              <a href="tel:2812312944" className="border border-gray-500 hover:border-white text-gray-300 font-semibold px-7 py-3.5 rounded-lg transition-all">Call (281) 231-2944</a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 text-gray-300 leading-relaxed max-w-3xl">
          <p>A properly installed network cabling system is the foundation of your business technology. Houston TechSys provides complete network cabling installation services for commercial facilities throughout Greater Houston — from single-floor office buildouts to multi-building enterprise campus installations.</p>
          <p>Our certified technicians install Cat6 and Cat6A copper cabling, fiber optic backbone, patch panels, cable management systems, and all associated hardware. Every installation is tested with Fluke DSX certification equipment and documented with complete as-built records.</p>
          <p>Whether you need 20 drops for a small office or 500+ drops for a multi-floor tenant buildout, Houston TechSys delivers on time and to spec. We coordinate with your GC, electrician, and ISP to keep your project on schedule.</p>
        </div>
      </section>
      <section className="py-12 bg-[#DC2626] text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Ready to get started?</h2>
        <Link href="/get-a-quote/" className="inline-block bg-white text-[#DC2626] font-bold px-8 py-4 rounded-lg text-lg">Get a Free Quote</Link>
      </section>
    </>
  )
}
