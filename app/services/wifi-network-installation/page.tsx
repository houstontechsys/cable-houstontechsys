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
      <section className="relative bg-[#0A0A0A] min-h-[560px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2881224/pexels-photo-2881224.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="WiFi network access point installation"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/75 to-[#0A0A0A]/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-2xl">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6">WiFi Network Installation in <span className="gradient-text">Houston, TX</span></h1>
            <p className="text-xl text-gray-300 mb-8">Enterprise-grade wireless infrastructure with proper access point placement and cabling. No dead zones, no weak spots — full coverage from day one.</p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/get-a-quote/" className="bg-[#DC2626] hover:bg-red-600 text-white font-bold px-7 py-3.5 rounded-lg transition-all">Get a Free Quote</Link>
              <a href="tel:2812312944" className="border border-gray-500 hover:border-white text-gray-300 font-semibold px-7 py-3.5 rounded-lg transition-all">Call (281) 231-2944</a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#050505]">
        <div className="max-w-3xl mx-auto px-4 space-y-5 text-gray-300 leading-relaxed">
          <p>Enterprise WiFi is not plug-and-play. Proper wireless coverage requires thoughtful access point placement based on your floor plan, building materials, and user density — and every AP needs a clean Cat6 cable run back to your network closet. Houston TechSys handles the cabling and rough-in infrastructure that makes your wireless deployment succeed.</p>
          <p>We work with all major AP brands (Cisco/Meraki, Ubiquiti UniFi, Aruba, Ruckus) and coordinate with your IT team or network integrator on placement. We pull the cable, mount the AP bracket, and ensure every run is certified and labeled before the APs are installed.</p>
        </div>
      </section>
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-white mb-4">What Full Coverage <span className="gradient-text">Looks Like</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">A proper wireless survey maps signal strength across every zone — ensuring no dead spots before a single AP goes in. This is how we plan every deployment.</p>
          </div>
          <div className="rounded-xl overflow-hidden border border-[#222222]">
            <img
              src="/images/wifi-heatmap.png"
              alt="WiFi heat map showing full office wireless coverage from multiple access points"
              className="w-full h-auto"
            />
          </div>
          <p className="text-center text-gray-500 text-sm mt-4">Sample heat map — generic office layout. Green = strong signal, red = weak signal at perimeter.</p>
        </div>
      </section>
      <section className="py-12 bg-[#DC2626] text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Planning a wireless deployment?</h2>
        <Link href="/get-a-quote/" className="inline-block bg-white text-[#DC2626] font-bold px-8 py-4 rounded-lg text-lg">Get a Free Quote</Link>
      </section>
    </>
  )
}
