import type { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = {
  title: 'Industries We Serve | Commercial Cabling Houston | Houston TechSys',
  description: 'Houston TechSys serves building managers, building owners, general contractors, and office relocation companies with professional commercial cabling in Houston TX.',
  alternates: { canonical: 'https://cable.houstontechsys.net/industries/' },
}
const industries = [
  { title: 'Commercial Buildings', desc: 'Reliable cabling infrastructure for multi-tenant office towers, retail centers, and mixed-use developments.', href: '/industries/commercial-buildings/' },
  { title: 'Office Relocations', desc: 'Relocation cabling that keeps your move on schedule. We coordinate with GCs, movers, and ISPs.', href: '/industries/office-relocation-cabling/' },
  { title: 'General Contractors', desc: 'The low voltage sub that shows up, communicates, and delivers. No delays, no surprises.', href: '/industries/general-contractors/' },
  { title: 'Healthcare & Education', desc: 'Compliant cabling infrastructure for medical facilities, clinics, schools, and universities.', href: '/industries/healthcare-education/' },
  { title: 'Hospitality & Restaurants', desc: 'Restaurant and hospitality buildouts — kitchen drops, dining room AV, POS coordination, and GC collaboration.', href: '/industries/hospitality-restaurants/' },
  { title: 'Co-Working Spaces', desc: 'VLAN segregation, multi-tenancy networks, conference room AV, and failover for 30+ co-working spaces in Texas.', href: '/industries/co-working-spaces/' },
]
export default function IndustriesPage() {
  return (
    <>
            <section className="relative bg-[#0A0A0A] min-h-[560px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/5483051/pexels-photo-5483051.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Modern commercial office building interior Houston"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/75 to-[#0A0A0A]/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-2xl">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-4">Industries <span className="gradient-text">We Serve</span></h1>
            <p className="text-xl text-gray-300">Commercial cabling expertise for the buyers who need it most.</p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {industries.map((i) => (
            <Link key={i.href} href={i.href} className="group bg-[#141414] border border-[#222222] hover:border-[#DC2626]/50 rounded-xl p-8 transition-all">
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
