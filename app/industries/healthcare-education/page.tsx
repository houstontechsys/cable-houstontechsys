import type { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = {
  title: 'Healthcare & Education Cabling Houston TX | Houston TechSys',
  description: 'Structured cabling for hospitals, clinics, schools, and universities in Houston TX. Code-compliant low voltage installation for healthcare and education facilities.',
  alternates: { canonical: 'https://cable.houstontechsys.net/industries/healthcare-education/' },
}
export default function HealthcareEducationPage() {
  return (
    <>
      <section className="bg-[#0A1628] dot-grid py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">Cabling for <span className="gradient-text">Healthcare & Education</span> in Houston</h1>
          <p className="text-xl text-gray-300 mb-8">Code-compliant structured cabling and low voltage infrastructure for medical facilities, clinics, schools, and universities throughout the Houston area.</p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/get-a-quote/" className="bg-[#F97316] hover:bg-orange-500 text-white font-bold px-7 py-3.5 rounded-lg transition-all">Get a Free Quote</Link>
            <a href="tel:7139999999" className="border border-gray-500 text-gray-300 font-semibold px-7 py-3.5 rounded-lg">Call (713) 999-9999</a>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#060e1a]">
        <div className="max-w-3xl mx-auto px-4 space-y-5 text-gray-300 leading-relaxed">
          <p>Healthcare and education facilities have unique cabling requirements — higher performance expectations, strict code compliance, and installations that must be completed without disrupting patients or students. Houston TechSys has extensive experience working in occupied healthcare and educational environments.</p>
          <p>For medical facilities, we install cabling for nurse call systems, patient monitoring, administrative networks, and security infrastructure — all with the infection control and quiet work practices required in clinical environments. For schools and universities, we cable classrooms, labs, auditoriums, and campus backbone networks.</p>
        </div>
      </section>
      <section className="py-12 bg-[#F97316] text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Healthcare or education project in Houston?</h2>
        <Link href="/get-a-quote/" className="inline-block bg-white text-[#F97316] font-bold px-8 py-4 rounded-lg text-lg">Get a Free Quote</Link>
      </section>
    </>
  )
}
