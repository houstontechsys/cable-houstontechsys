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
            <section className="relative bg-[#0A0A0A] min-h-[560px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/6804585/pexels-photo-6804585.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Healthcare facility network cabling professional installation"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/75 to-[#0A0A0A]/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-2xl">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6">Cabling for <span className="gradient-text">Healthcare & Education</span> in Houston</h1>
            <p className="text-xl text-gray-300 mb-8">Code-compliant structured cabling and low voltage infrastructure for medical facilities, clinics, schools, and universities throughout the Houston area.</p>
            <div className="flex gap-4 flex-wrap">
              <a href="/get-a-quote/" className="bg-[#DC2626] hover:bg-red-600 text-white font-bold px-7 py-3.5 rounded-lg transition-all">Get a Free Quote</a>
              <a href="tel:2812312944" className="border border-gray-500 text-gray-300 font-semibold px-7 py-3.5 rounded-lg">Call (281) 231-2944</a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#050505]">
        <div className="max-w-3xl mx-auto px-4 space-y-5 text-gray-300 leading-relaxed">
          <p>Healthcare and education facilities have unique cabling requirements — higher performance expectations, strict code compliance, and installations that must be completed without disrupting patients or students. Houston TechSys has extensive experience working in occupied healthcare and educational environments.</p>
          <p>For medical facilities, we install cabling for nurse call systems, patient monitoring, administrative networks, and security infrastructure — all with the infection control and quiet work practices required in clinical environments. For schools and universities, we cable classrooms, labs, auditoriums, and campus backbone networks.</p>
        </div>
      </section>
      <section className="py-12 bg-[#DC2626] text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Healthcare or education project in Houston?</h2>
        <Link href="/get-a-quote/" className="inline-block bg-white text-[#DC2626] font-bold px-8 py-4 rounded-lg text-lg">Get a Free Quote</Link>
      </section>
    </>
  )
}
