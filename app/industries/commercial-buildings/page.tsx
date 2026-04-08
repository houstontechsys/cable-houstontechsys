import type { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = {
  title: 'Commercial Building Cabling Houston TX | Building Managers & Owners | Houston TechSys',
  description: 'Commercial building cabling for property managers and building owners in Houston TX. Structured cabling, fiber backbone, and low voltage infrastructure. Insured contractor.',
  alternates: { canonical: 'https://cable.houstontechsys.net/industries/commercial-buildings/' },
}
export default function CommercialBuildingsPage() {
  return (
    <>
      <section className="relative bg-[#0A0A0A] min-h-[560px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/5483051/pexels-photo-5483051.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Commercial building cabling"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/75 to-[#0A0A0A]/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-2xl">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6">Cabling for <span className="gradient-text">Commercial Buildings</span> in Houston</h1>
          <p className="text-xl text-gray-300 mb-8">Reliable, code-compliant cabling infrastructure for multi-tenant office towers, commercial buildings, and mixed-use developments. Minimal disruption. Maximum performance.</p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/get-a-quote/" className="bg-[#DC2626] hover:bg-red-600 text-white font-bold px-7 py-3.5 rounded-lg transition-all">Get a Free Quote</Link>
            <a href="tel:2812312944" className="border border-gray-500 text-gray-300 font-semibold px-7 py-3.5 rounded-lg">Call (281) 231-2944</a>
          </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#050505]">
        <div className="max-w-3xl mx-auto px-4 space-y-5 text-gray-300 leading-relaxed">
          <p>Building managers and owners have a unique set of requirements when it comes to cabling. Installations must be completed with minimal disruption to existing tenants. Work must be code-compliant and pass inspection. Documentation must be complete so future tenants and contractors can build on what&apos;s already there.</p>
          <p>Houston TechSys understands commercial building requirements. We&apos;ve cabled entire floors during tenant buildouts, upgraded building backbone infrastructure without disrupting operations, and provided complete as-built documentation that becomes part of the building record.</p>
          <p>Our team coordinates with property management, building engineers, and GCs to ensure every installation meets the building&apos;s standards and your tenants&apos; expectations. We are fully insured — meeting the insurance and compliance requirements of commercial property owners.</p>
        </div>
      </section>
      <section className="py-12 bg-[#DC2626] text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Managing a commercial building in Houston?</h2>
        <Link href="/get-a-quote/" className="inline-block bg-white text-[#DC2626] font-bold px-8 py-4 rounded-lg text-lg">Get a Free Quote</Link>
      </section>
    </>
  )
}
