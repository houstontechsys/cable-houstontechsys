import type { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = {
  title: 'About Houston TechSys | Commercial Cabling Contractor Houston TX',
  description: 'Learn about Houston TechSys — Houston\'s licensed commercial cabling contractor with 15+ years of experience serving buildings, offices, and GCs across Greater Houston.',
  alternates: { canonical: 'https://cable.houstontechsys.net/about/' },
}
export default function AboutPage() {
  return (
    <>
      <section className="bg-[#0A1628] dot-grid py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">About <span className="gradient-text">Houston TechSys</span></h1>
          <p className="text-xl text-gray-300">Houston&apos;s trusted commercial cabling and infrastructure partner. 15+ years. 500+ projects. Licensed, bonded, and proud to be local.</p>
        </div>
      </section>
      <section className="py-20 bg-[#060e1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-gray-300 leading-relaxed">
          <p>Houston TechSys was founded with one mission: to bring professional-grade commercial cabling and infrastructure services to the Greater Houston market. We built our reputation project by project — showing up on time, doing clean work, and handing off complete documentation that our clients could count on for years to come.</p>
          <p>Today, we serve building managers, building owners, general contractors, office relocation teams, healthcare facilities, and educational institutions across Houston and the surrounding suburbs. Every technician on our team is trained to our standards for quality, documentation, and client communication.</p>
          <p>We are a licensed Texas low voltage contractor, BICSI-trained, fully bonded and insured. We take pride in the quality of our installations and stand behind our work.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
            {[['500+', 'Projects'], ['15+', 'Years'], ['Licensed', 'TX Low Voltage'], ['24/7', 'Support']].map(([stat, label]) => (
              <div key={label} className="bg-[#112240] border border-[#1E3A5F] rounded-xl p-5 text-center">
                <p className="text-[#F97316] text-2xl font-bold">{stat}</p>
                <p className="text-gray-400 text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 bg-[#F97316] text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Ready to work together?</h2>
        <Link href="/get-a-quote/" className="inline-block bg-white text-[#F97316] font-bold px-8 py-4 rounded-lg text-lg">Get a Free Quote</Link>
      </section>
    </>
  )
}
