import type { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = {
  title: 'Surveillance Camera Installation Houston TX | Commercial CCTV | Houston TechSys',
  description: 'Commercial surveillance camera installation in Houston TX. IP camera systems, NVR configuration, and security cabling for buildings, offices, and industrial sites.',
  alternates: { canonical: 'https://cable.houstontechsys.net/services/surveillance-camera-installation-houston/' },
}
export default function SurveillancePage() {
  return (
    <>
      <section className="bg-[#0A1628] dot-grid py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">Surveillance Camera Installation in <span className="gradient-text">Houston, TX</span></h1>
            <p className="text-xl text-gray-300 mb-8">Commercial IP camera systems with professional cabling, NVR configuration, and complete documentation. Protect your building, parking areas, and assets.</p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/get-a-quote/" className="bg-[#F97316] hover:bg-orange-500 text-white font-bold px-7 py-3.5 rounded-lg transition-all">Get a Free Quote</Link>
              <a href="tel:7139999999" className="border border-gray-500 hover:border-white text-gray-300 font-semibold px-7 py-3.5 rounded-lg transition-all">Call (713) 999-9999</a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#060e1a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 text-gray-300 leading-relaxed">
          <p>A surveillance system is only as good as its cabling infrastructure. Poor quality cable runs, untested connections, and improper NVR placement result in dropped feeds, poor image quality, and gaps in coverage when you need it most. Houston TechSys installs commercial surveillance systems with the same professional standards we apply to every cabling project.</p>
          <p>We install Cat6 PoE cabling for IP cameras, pull conduit in commercial environments, configure NVR/DVR systems, and test every camera for full image coverage. We also provide complete wiring documentation so your security integrator or IT team knows exactly how the system is built.</p>
          <p>Services include: IP camera cabling (Cat6 PoE), NVR rack mounting and connections, cable pathways and conduit, camera mounting plate rough-in, and as-built documentation.</p>
        </div>
      </section>
      <section className="py-12 bg-[#F97316] text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Need surveillance cabling in Houston?</h2>
        <Link href="/get-a-quote/" className="inline-block bg-white text-[#F97316] font-bold px-8 py-4 rounded-lg text-lg">Get a Free Quote</Link>
      </section>
    </>
  )
}
