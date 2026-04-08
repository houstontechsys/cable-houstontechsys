import type { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = {
  title: 'AV Network Cabling Houston TX | Conference Room & Digital Signage | Houston TechSys',
  description: 'Professional AV network cabling in Houston TX. Conference rooms, digital signage, huddle spaces, and integrated AV infrastructure. Licensed low voltage contractor.',
  alternates: { canonical: 'https://cable.houstontechsys.net/services/av-network-cabling/' },
}
export default function AVCablingPage() {
  return (
    <>
      <section className="bg-[#0A1628] dot-grid py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">AV Network Cabling in <span className="gradient-text">Houston, TX</span></h1>
            <p className="text-xl text-gray-300 mb-8">Professional audiovisual cabling for conference rooms, huddle spaces, digital signage, lobby displays, and integrated AV systems — installed right the first time.</p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/get-a-quote/" className="bg-[#F97316] hover:bg-orange-500 text-white font-bold px-7 py-3.5 rounded-lg transition-all">Get a Free Quote</Link>
              <a href="tel:7139999999" className="border border-gray-500 hover:border-white text-gray-300 font-semibold px-7 py-3.5 rounded-lg transition-all">Call (713) 999-9999</a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#060e1a]">
        <div className="max-w-3xl mx-auto px-4 space-y-5 text-gray-300 leading-relaxed">
          <p>Modern commercial spaces demand more than just network drops. Conference rooms need HDMI, DisplayPort, USB-C, and control cabling. Lobbies need digital signage infrastructure. Boardrooms need integrated AV with ceiling microphones, control panels, and video conferencing endpoints. Houston TechSys handles all of it.</p>
          <p>We work alongside your AV integrator or directly as the cabling and low voltage sub on your project. Our team installs conduit pathways, pulls AV cables to spec, terminates and labels every connection, and ensures your AV integrator has exactly what they need to complete the system.</p>
        </div>
      </section>
      <section className="py-12 bg-[#F97316] text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Ready to wire your conference rooms?</h2>
        <Link href="/get-a-quote/" className="inline-block bg-white text-[#F97316] font-bold px-8 py-4 rounded-lg text-lg">Get a Free Quote</Link>
      </section>
    </>
  )
}
