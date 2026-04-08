import type { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = {
  title: 'WiFi Network Installation Houston TX | Enterprise Wireless | Houston TechSys',
  description: 'Enterprise WiFi infrastructure and access point cabling in Houston TX. No dead zones. Professional AP deployment for offices, warehouses, and commercial buildings.',
  alternates: { canonical: 'https://cable.houstontechsys.net/services/wifi-network-installation/' },
}
export default function WiFiPage() {
  return (
    <>
      <section className="bg-[#0A1628] dot-grid py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">WiFi Network Installation in <span className="gradient-text">Houston, TX</span></h1>
            <p className="text-xl text-gray-300 mb-8">Enterprise-grade wireless infrastructure with proper access point placement and cabling. No dead zones, no weak spots — full coverage from day one.</p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/get-a-quote/" className="bg-[#F97316] hover:bg-orange-500 text-white font-bold px-7 py-3.5 rounded-lg transition-all">Get a Free Quote</Link>
              <a href="tel:7139999999" className="border border-gray-500 hover:border-white text-gray-300 font-semibold px-7 py-3.5 rounded-lg transition-all">Call (713) 999-9999</a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#060e1a]">
        <div className="max-w-3xl mx-auto px-4 space-y-5 text-gray-300 leading-relaxed">
          <p>Enterprise WiFi is not plug-and-play. Proper wireless coverage requires thoughtful access point placement based on your floor plan, building materials, and user density — and every AP needs a clean Cat6 cable run back to your network closet. Houston TechSys handles the cabling and rough-in infrastructure that makes your wireless deployment succeed.</p>
          <p>We work with all major AP brands (Cisco/Meraki, Ubiquiti UniFi, Aruba, Ruckus) and coordinate with your IT team or network integrator on placement. We pull the cable, mount the AP bracket, and ensure every run is certified and labeled before the APs are installed.</p>
        </div>
      </section>
      <section className="py-12 bg-[#F97316] text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Planning a wireless deployment?</h2>
        <Link href="/get-a-quote/" className="inline-block bg-white text-[#F97316] font-bold px-8 py-4 rounded-lg text-lg">Get a Free Quote</Link>
      </section>
    </>
  )
}
