import type { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = {
  title: 'Commercial Cabling Blog | Houston TX Resources | Houston TechSys',
  description: 'Structured cabling tips, guides, and resources from Houston TechSys. Learn about Cat6 vs fiber, office relocation cabling, cabling costs, and more.',
  alternates: { canonical: 'https://cable.houstontechsys.net/blog/' },
}
const posts = [
  { title: 'How Much Does Structured Cabling Cost in Houston?', slug: 'structured-cabling-cost-houston', excerpt: 'A breakdown of what structured cabling actually costs in the Houston commercial market — per drop, per project, and what factors affect your quote.', date: 'April 2026' },
  { title: 'Office Relocation Cabling Checklist: 10 Things to Do Before Your Move', slug: 'office-relocation-cabling-checklist', excerpt: 'Most office moves hit cabling delays because the contractor was booked too late. Here\'s the checklist that keeps your move on schedule.', date: 'April 2026' },
  { title: 'Cat6 vs Fiber Optic: Which is Right for Your Houston Office?', slug: 'cat6-vs-fiber-optic-houston-office', excerpt: 'When do you need fiber and when is Cat6 enough? A practical guide for building owners and IT managers in the Houston commercial market.', date: 'March 2026' },
  { title: 'Why You Need an Insured Cabling Contractor in Texas', slug: 'licensed-low-voltage-contractor-texas', excerpt: 'Texas requires a license for low voltage work. Here\'s what happens when you hire unlicensed — and what to look for when vetting contractors.', date: 'March 2026' },
]
export default function BlogPage() {
  return (
    <>
      <section className="bg-[#0A0A0A] dot-grid py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Cabling <span className="gradient-text">Resources & Guides</span></h1>
          <p className="text-xl text-gray-300">Practical info for building owners, GCs, and facility managers in Houston.</p>
        </div>
      </section>
      <section className="py-20 bg-[#050505]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {posts.map((p) => (
            <div key={p.slug} className="bg-[#141414] border border-[#222222] rounded-xl p-6 hover:border-[#DC2626]/50 transition-all">
              <p className="text-gray-500 text-xs mb-2">{p.date}</p>
              <h2 className="text-white font-bold text-lg mb-3">{p.title}</h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.excerpt}</p>
              <span className="text-[#DC2626] text-sm font-medium">Read more →</span>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
