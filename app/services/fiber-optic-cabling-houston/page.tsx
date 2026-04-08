import type { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = {
  title: 'Fiber Optic Cabling Houston TX | Houston TechSys',
  description: 'Fiber optic cabling installation in Houston TX. Single-mode and multi-mode fiber for backbone, data centers, and inter-building runs. Insured contractor.',
  alternates: { canonical: 'https://cable.houstontechsys.net/services/fiber-optic-cabling-houston/' },
}
export default function FiberOpticPage() {
  return (
    <>
      <section className="relative bg-[#0A0A0A] min-h-[560px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/4864249/pexels-photo-4864249.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Fiber optic cabling installation"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/75 to-[#0A0A0A]/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-2xl">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6">Fiber Optic Cabling in <span className="gradient-text">Houston, TX</span></h1>
            <p className="text-xl text-gray-300 mb-8">Single-mode and multi-mode fiber optic installation for high-speed backbone networks, data centers, and inter-building connectivity across Greater Houston.</p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/get-a-quote/" className="bg-[#DC2626] hover:bg-red-600 text-white font-bold px-7 py-3.5 rounded-lg transition-all">Get a Free Quote</Link>
              <a href="tel:2812312944" className="border border-gray-500 hover:border-white text-gray-300 font-semibold px-7 py-3.5 rounded-lg transition-all">Call (281) 231-2944</a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#050505]">
        <div className="max-w-3xl mx-auto px-4 space-y-5 text-gray-300 leading-relaxed">
          <p>Fiber optic cabling delivers unmatched bandwidth and signal integrity over long distances — making it the go-to solution for building backbone networks, data center interconnects, and multi-building campus installations. Houston TechSys installs, terminates, splices, and certifies single-mode (OS2) and multi-mode (OM3/OM4) fiber optic cabling systems for commercial facilities throughout Houston.</p>
          <p>Our technicians are experienced with LC, SC, and MPO/MTP connector systems, and we use OTDR and power meter testing to verify every installation. You get certified results — not just a visual inspection.</p>
        </div>
      </section>
      <section className="py-12 bg-[#DC2626] text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Need fiber optic cabling in Houston?</h2>
        <Link href="/get-a-quote/" className="inline-block bg-white text-[#DC2626] font-bold px-8 py-4 rounded-lg text-lg">Get a Free Quote</Link>
      </section>
    </>
  )
}
