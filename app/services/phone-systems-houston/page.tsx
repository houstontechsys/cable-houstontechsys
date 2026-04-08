import type { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = {
  title: 'Phone Systems Houston TX | VoIP & Business Phone Cabling | Houston TechSys',
  description: 'Business phone system cabling and VoIP infrastructure in Houston TX. We handle the low voltage cabling for your phone system installation. Licensed contractor.',
  alternates: { canonical: 'https://cable.houstontechsys.net/services/phone-systems-houston/' },
}
export default function PhoneSystemsPage() {
  return (
    <>
      <section className="bg-[#0A1628] dot-grid py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">Business Phone Systems in <span className="gradient-text">Houston, TX</span></h1>
            <p className="text-xl text-gray-300 mb-8">VoIP phone system cabling and infrastructure for Houston businesses. We provide the low voltage foundation your phone system needs to work reliably.</p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/get-a-quote/" className="bg-[#F97316] hover:bg-orange-500 text-white font-bold px-7 py-3.5 rounded-lg transition-all">Get a Free Quote</Link>
              <a href="tel:7139999999" className="border border-gray-500 hover:border-white text-gray-300 font-semibold px-7 py-3.5 rounded-lg transition-all">Call (713) 999-9999</a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#060e1a]">
        <div className="max-w-3xl mx-auto px-4 space-y-5 text-gray-300 leading-relaxed">
          <p>Modern VoIP and business phone systems — including 3CX, RingCentral, Microsoft Teams Phone, and others — rely on proper network infrastructure to deliver reliable voice quality. Houston TechSys provides the cabling and low voltage infrastructure that keeps your phones working.</p>
          <p>Whether you&apos;re installing a new phone system in a new office space or upgrading legacy voice cabling in an existing facility, we handle the Cat6 runs to every desk, the patch panel terminations, and the documentation your phone system vendor needs to complete the installation.</p>
          <p>We also assist with cabling for analog phone lines, overhead paging systems, and intercom infrastructure in commercial and industrial environments.</p>
        </div>
      </section>
      <section className="py-12 bg-[#F97316] text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Installing or upgrading a phone system?</h2>
        <Link href="/get-a-quote/" className="inline-block bg-white text-[#F97316] font-bold px-8 py-4 rounded-lg text-lg">Get a Free Quote</Link>
      </section>
    </>
  )
}
