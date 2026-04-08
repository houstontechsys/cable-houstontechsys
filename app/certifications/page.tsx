import type { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = {
  title: 'Insurance & Credentials | Houston TechSys Cabling Houston TX',
  description: 'Houston TechSys is a fully insured commercial cabling contractor in Houston TX — BICSI-trained, carrying GL and workers compensation coverage.',
  alternates: { canonical: 'https://cable.houstontechsys.net/certifications/' },
}
const certs = [
  { name: 'Commercial General Liability Insurance', body: 'Commercial General Liability', desc: 'Houston TechSys carries commercial general liability insurance meeting the requirements of building owners and general contractors. Coverage details available upon request.' },
  { name: "Workers' Compensation Insurance", body: 'State of Texas', desc: "Full workers' compensation coverage for all field technicians on every job site. Required for commercial subcontracting work and protects building owners and GCs from liability." },
  { name: 'BICSI Installer Training', body: 'BICSI — Building Industry Consulting Service International', desc: 'BICSI is the gold standard for structured cabling installation training. Our technicians are trained to BICSI INSTC standards for quality and best practices.' },
  { name: 'Fluke DSX Cable Certification', body: 'Fluke Networks', desc: 'All structured cabling installations are tested and certified using Fluke DSX cable analyzers. You receive actual certified test results — not verbal assurances.' },
  { name: 'TIA-568 Standards Compliance', body: 'Telecommunications Industry Association', desc: 'All cabling installations follow TIA-568 structured cabling standards. Every project is documented with as-built drawings and port mapping at completion.' },
]
export default function CertificationsPage() {
  return (
    <>
            <section className="relative bg-[#0A0A0A] min-h-[560px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/8470035/pexels-photo-8470035.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Professional contractor team on commercial job site"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/75 to-[#0A0A0A]/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-2xl">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-4"><span className="gradient-text">Insured & Professional</span></h1>
            <p className="text-xl text-gray-300">The credentials and coverage that back up every Houston TechSys installation.</p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#050505]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          {certs.map((c) => (
            <div key={c.name} className="bg-[#141414] border border-[#222222] rounded-xl p-6">
              <h2 className="text-white font-bold text-lg mb-1">{c.name}</h2>
              <p className="text-[#DC2626] text-sm font-medium mb-3">{c.body}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-12 bg-[#DC2626] text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Hire a contractor you can trust</h2>
        <Link href="/get-a-quote/" className="inline-block bg-white text-[#DC2626] font-bold px-8 py-4 rounded-lg text-lg">Get a Free Quote</Link>
      </section>
    </>
  )
}
