import type { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = {
  title: 'Commercial Cabling Projects Houston TX | Portfolio | Houston TechSys',
  description: 'View Houston TechSys commercial cabling projects in Houston TX. Office buildouts, building infrastructure, surveillance systems, and fiber optic installations.',
  alternates: { canonical: 'https://cable.houstontechsys.net/projects/' },
}
const projects = [
  {
    title: '12-Story Office Tower — Greenway Plaza',
    category: 'Structured Cabling & Fiber Backbone',
    summary: 'Full structured cabling infrastructure for a 12-story commercial office tower. 800+ data drops, Cat6A horizontal cabling, OS2 fiber backbone between all IDF closets, and complete as-built documentation.',
    highlights: ['800+ Cat6A data drops', 'OS2 fiber backbone — 12 floors', 'Coordinated with GC during active renovation', 'Completed 3 days ahead of schedule'],
  },
  {
    title: 'Law Firm Office Relocation — Downtown Houston',
    category: 'Office Relocation Cabling',
    summary: 'Emergency office relocation for an 80-person law firm. 100 data drops installed in 5 days to meet a hard move-in deadline, including conference room AV cabling and IP surveillance rough-in.',
    highlights: ['100 drops in 5 days', 'Conference room AV cabling', 'IP surveillance rough-in', 'Team operational on day one'],
  },
  {
    title: 'Medical Office Campus — Houston Medical Center',
    category: 'Healthcare Structured Cabling',
    summary: 'Structured cabling across a 3-building medical office campus. Cat6 workstation drops, fiber backbone interconnects, and IP camera cabling — installed in a fully occupied clinical environment.',
    highlights: ['3-building campus', 'Occupied clinical environment', 'Cat6 + fiber inter-building', 'Full documentation package'],
  },
]
export default function ProjectsPage() {
  return (
    <>
      <section className="bg-[#0A0A0A] dot-grid py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Our <span className="gradient-text">Projects</span></h1>
          <p className="text-xl text-gray-300">Real work. Real results. A sample of what Houston TechSys delivers.</p>
        </div>
      </section>
      <section className="py-20 bg-[#050505]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {projects.map((p) => (
            <div key={p.title} className="bg-[#141414] border border-[#222222] rounded-xl p-8">
              <p className="text-[#DC2626] text-sm font-semibold uppercase tracking-wider mb-2">{p.category}</p>
              <h2 className="text-white font-bold text-xl mb-4">{p.title}</h2>
              <p className="text-gray-300 leading-relaxed mb-5">{p.summary}</p>
              <ul className="grid grid-cols-2 gap-2">
                {p.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-[#DC2626] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className="py-12 bg-[#DC2626] text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Want results like these?</h2>
        <Link href="/get-a-quote/" className="inline-block bg-white text-[#DC2626] font-bold px-8 py-4 rounded-lg text-lg">Get a Free Quote</Link>
      </section>
    </>
  )
}
