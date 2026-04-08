import type { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = {
  title: 'Fiber Optic Cabling Houston TX | Houston TechSys',
  description: 'Fiber optic cabling installation in Houston TX. Single-mode and multi-mode fiber for backbone, data centers, and inter-building runs. Licensed contractor.',
  alternates: { canonical: 'https://cable.houstontechsys.net/services/fiber-optic-cabling-houston/' },
}
export default function FiberOpticPage() {
  return (
    <>
      <section className="bg-[#0A1628] dot-grid py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">Fiber Optic Cabling in <span className="gradient-text">Houston, TX</span></h1>
            <p className="text-xl text-gray-300 mb-8">Single-mode and multi-mode fiber optic installation for high-speed backbone networks, data centers, and inter-building connectivity across Greater Houston.</p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/get-a-quote/" className="bg-[#F97316] hover:bg-orange-500 text-white font-bold px-7 py-3.5 rounded-lg transition-all">Get a Free Quote</Link>
              <a href="tel:2812312944" className="border border-gray-500 hover:border-white text-gray-300 font-semibold px-7 py-3.5 rounded-lg transition-all">Call (281) 231-2944</a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#060e1a]">
        <div className="max-w-3xl mx-auto px-4 space-y-5 text-gray-300 leading-relaxed">
          <p>Fiber optic cabling delivers unmatched bandwidth and signal integrity over long distances — making it the go-to solution for building backbone networks, data center interconnects, and multi-building campus installations. Houston TechSys installs, terminates, splices, and certifies single-mode (OS2) and multi-mode (OM3/OM4) fiber optic cabling systems for commercial facilities throughout Houston.</p>
          <p>Our technicians are experienced with LC, SC, and MPO/MTP connector systems, and we use OTDR and power meter testing to verify every installation. You get certified results — not just a visual inspection.</p>
        </div>
      </section>
      <section className="py-12 bg-[#F97316] text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Need fiber optic cabling in Houston?</h2>
        <Link href="/get-a-quote/" className="inline-block bg-white text-[#F97316] font-bold px-8 py-4 rounded-lg text-lg">Get a Free Quote</Link>
      </section>
    </>
  )
}
