import type { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = {
  title: 'Certifications & Licensing | Houston TechSys Cabling Houston TX',
  description: 'Houston TechSys is a licensed Texas low voltage contractor, BICSI-trained, fully bonded and insured. View our certifications and credentials.',
  alternates: { canonical: 'https://cable.houstontechsys.net/certifications/' },
}
const certs = [
  { name: 'Texas Low Voltage Contractor License', body: 'Texas Department of Licensing and Regulation (TDLR)', desc: 'Required by Texas law for all low voltage cabling and communications installations in commercial buildings.' },
  { name: 'BICSI Installer Training', body: 'BICSI — Building Industry Consulting Service International', desc: 'BICSI is the gold standard for structured cabling installation training. Our technicians are trained to BICSI INSTC standards.' },
  { name: 'General Liability Insurance', body: 'Commercial General Liability', desc: 'Houston TechSys carries commercial general liability insurance meeting the requirements of building owners and general contractors.' },
  { name: "Workers' Compensation Insurance", body: 'State of Texas', desc: "Full workers' compensation coverage for all field technicians. Required for commercial subcontracting work in Texas." },
  { name: 'Fluke DSX Cable Certification', body: 'Fluke Networks', desc: 'All structured cabling installations are tested and certified using Fluke DSX cable analyzers. You receive actual test results, not verbal assurances.' },
]
export default function CertificationsPage() {
  return (
    <>
      <section className="bg-[#0A0A0A] dot-grid py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4"><span className="gradient-text">Licensed, Certified</span> & Insured</h1>
          <p className="text-xl text-gray-300">The credentials that back up every Houston TechSys installation.</p>
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
