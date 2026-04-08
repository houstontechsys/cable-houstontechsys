import type { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = {
  title: 'About Houston TechSys | Commercial Cabling Contractor Houston TX',
  description: 'Learn about Houston TechSys — Houston\'s insured commercial cabling contractor with 15+ years of experience serving buildings, offices, and GCs across Greater Houston.',
  alternates: { canonical: 'https://cable.houstontechsys.net/about/' },
}
export default function AboutPage() {
  return (
    <>
      <section className="relative bg-[#0A0A0A] min-h-[560px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/8482645/pexels-photo-8482645.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Houston TechSys team at work"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/75 to-[#0A0A0A]/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-2xl">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6">About <span className="gradient-text">Houston TechSys</span></h1>
          <p className="text-xl text-gray-300">Houston&apos;s trusted commercial cabling and infrastructure partner. 15+ years. 500+ projects. Insured and proud to be local.</p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#050505]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-gray-300 leading-relaxed">
          <p>Houston TechSys was founded with one mission: to bring professional-grade commercial cabling and infrastructure services to the Greater Houston market. We built our reputation project by project — showing up on time, doing clean work, and handing off complete documentation that our clients could count on for years to come.</p>
          <p>Today, we serve building managers, building owners, general contractors, office relocation teams, healthcare facilities, and educational institutions across Houston and the surrounding suburbs. Every technician on our team is trained to our standards for quality, documentation, and client communication.</p>
          <p>We are BICSI-trained and fully insured, carrying commercial general liability and workers's compensation coverage. We take pride in the quality of our installations and stand behind our work.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
            {[['500+', 'Projects'], ['15+', 'Years'], ['Insured', '& Professional'], ['24/7', 'Support']].map(([stat, label]) => (
              <div key={label} className="bg-[#141414] border border-[#222222] rounded-xl p-5 text-center">
                <p className="text-[#DC2626] text-2xl font-bold">{stat}</p>
                <p className="text-gray-400 text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 bg-[#DC2626] text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Ready to work together?</h2>
        <Link href="/get-a-quote/" className="inline-block bg-white text-[#DC2626] font-bold px-8 py-4 rounded-lg text-lg">Get a Free Quote</Link>
      </section>
    </>
  )
}
