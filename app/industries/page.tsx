import type { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = {
  title: 'Industries We Serve | Commercial Cabling Houston | Houston TechSys',
  description: 'Houston TechSys serves building managers, building owners, general contractors, and office relocation companies with professional commercial cabling in Houston TX.',
  alternates: { canonical: 'https://cable.houstontechsys.net/industries/' },
}
const industries = [
  { title: 'Commercial Buildings', desc: 'Reliable cabling infrastructure for multi-tenant office towers, retail centers, and mixed-use developments.', href: '/industries/commercial-buildings/', icon: '🏢' },
  { title: 'Office Relocations', desc: 'Relocation cabling that keeps your move on schedule. We coordinate with GCs, movers, and ISPs.', href: '/industries/office-relocation-cabling/', icon: '📦' },
  { title: 'General Contractors', desc: 'The low voltage sub that shows up, communicates, and delivers. No delays, no surprises.', href: '/industries/general-contractors/', icon: '🔧' },
  { title: 'Healthcare & Education', desc: 'Compliant cabling infrastructure for medical facilities, clinics, schools, and universities.', href: '/industries/healthcare-education/', icon: '🏥' },
]
export default function IndustriesPage() {
  return (
    <>
      <section className="bg-[#0A0A0A] dot-grid py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Industries <span className="gradient-text">We Serve</span></h1>
          <p className="text-xl text-gray-300">Commercial cabling expertise for the buyers who need it most.</p>
        </div>
      </section>
      <section className="py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {industries.map((i) => (
            <Link key={i.href} href={i.href} className="group bg-[#141414] border border-[#222222] hover:border-[#DC2626]/50 rounded-xl p-8 transition-all">
              <div className="text-4xl mb-4">{i.icon}</div>
              <h2 className="text-white font-bold text-xl mb-3">{i.title}</h2>
              <p className="text-gray-400 leading-relaxed mb-4">{i.desc}</p>
              <span className="text-[#DC2626] font-medium group-hover:underline">Learn more →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
