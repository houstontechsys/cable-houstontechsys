import type { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = {
  title: 'Low Voltage Subcontractor for General Contractors Houston TX | Houston TechSys',
  description: 'Reliable low voltage sub for general contractors in Houston. Structured cabling, AV, surveillance, and WiFi — on schedule, and fully documented. Call today.',
  alternates: { canonical: 'https://cable.houstontechsys.net/industries/general-contractors/' },
}
export default function GeneralContractorsPage() {
  return (
    <>
      <section className="relative bg-[#0A0A0A] min-h-[560px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/8470035/pexels-photo-8470035.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="General contractor construction site"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/75 to-[#0A0A0A]/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-2xl">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6">The Low Voltage Sub <span className="gradient-text">GCs Trust in Houston</span></h1>
          <p className="text-xl text-gray-300 mb-8">We show up, communicate, and never delay your project. Houston TechSys is the low voltage subcontractor that makes your job easier — not harder.</p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/get-a-quote/" className="bg-[#DC2626] hover:bg-red-600 text-white font-bold px-7 py-3.5 rounded-lg transition-all">Get a Subcontractor Quote</Link>
            <a href="tel:2812312944" className="border border-gray-500 text-gray-300 font-semibold px-7 py-3.5 rounded-lg">Call (281) 231-2944</a>
          </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#050505]">
        <div className="max-w-3xl mx-auto px-4 space-y-5 text-gray-300 leading-relaxed">
          <p>General contractors need a low voltage sub who operates like a professional: shows up on schedule, communicates proactively, coordinates with other trades, and delivers clean documentation at job completion. Houston TechSys is that sub.</p>
          <p>We understand construction schedules. We know that pulling cable before drywall saves time and money. We know that GCs need us out of the ceiling before the electrician&apos;s final inspection. We know that a missed milestone on our end delays your entire project and damages your relationship with the owner.</p>
          <p>Houston TechSys is fully insured to the levels required for commercial subcontracting in Texas. We carry proper liability and workers&apos; comp coverage. Our superintendents communicate directly with your PM. And at job completion, you receive complete as-built documentation — not a pile of cable with no map.</p>
        </div>
      </section>
      <section className="py-12 bg-[#DC2626] text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Looking for a reliable low voltage sub?</h2>
        <Link href="/get-a-quote/" className="inline-block bg-white text-[#DC2626] font-bold px-8 py-4 rounded-lg text-lg">Get a Subcontractor Quote</Link>
      </section>
    </>
  )
}
