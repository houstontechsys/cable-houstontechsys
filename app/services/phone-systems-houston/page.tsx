import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '3CX Phone Systems Houston TX | The Only 3CX Partner in South Texas | Houston TechSys',
  description: 'Houston TechSys is the only 3CX partner in South Texas. 200+ clients on phone systems. We sell phones, handle all cabling, and support your entire 3CX system.',
  alternates: { canonical: 'https://cable.houstontechsys.net/services/phone-systems-houston/' },
  openGraph: {
    title: '3CX Phone Systems Houston TX | Houston TechSys',
    description: 'The only 3CX partner in South Texas. End-to-end phone system sales, cabling, installation, and support.',
    url: 'https://cable.houstontechsys.net/services/phone-systems-houston/',
  },
}

const faqs = [
  {
    q: 'What is 3CX and why is it better than traditional phone systems?',
    a: '3CX is a modern software-based PBX that runs on-premise or in the cloud. It delivers enterprise-grade features — call queues, mobile apps, video conferencing, and CRM integration — at a fraction of the cost of legacy hardware systems. Houston TechSys is the only 3CX partner in South Texas, meaning we have certified expertise no other local provider can match.',
  },
  {
    q: 'What does Houston TechSys sell for 3CX?',
    a: 'We sell everything: 3CX licenses, IP phones, headsets, gateways, and SIP trunks. We also handle all cabling infrastructure — every desk needs a properly run Cat6 cable for reliable VoIP. We are your single point of contact from the cable pull to the dial tone.',
  },
  {
    q: 'How many clients do you support on 3CX?',
    a: 'Houston TechSys manages 200+ clients on 3CX phone systems across the Greater Houston area and South Texas. From small businesses to multi-location enterprises, we design, install, and support 3CX deployments of every size.',
  },
  {
    q: 'Do you handle the cabling for phone system installations?',
    a: 'Absolutely. Every VoIP phone needs a clean Cat6 cable run. We handle the complete infrastructure — cable pulls, patch panels, PoE switch placement, and documentation — so your phone system performs reliably from day one.',
  },
  {
    q: 'Can you support an existing 3CX system we already have?',
    a: 'Yes. We provide ongoing support, upgrades, and expansion for existing 3CX systems. Whether you need to add extensions, set up a new location, or migrate from an older version, our certified 3CX team handles it.',
  },
]

export default function PhoneSystemsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0A0A0A] py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/17636234/pexels-photo-17636234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1080&w=1920"
            alt="3CX VoIP phone system office"
            className="w-full h-full object-cover opacity-25"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/95 via-[#0A0A0A]/80 to-transparent pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-[#DC2626] text-white text-xs font-bold px-3 py-1 rounded mb-5 uppercase tracking-wider">
              The Only 3CX Partner in South Texas
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              3CX Phone Systems<br />
              <span className="gradient-text">Houston, TX</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Houston TechSys is South Texas&apos;s exclusive 3CX partner. We sell phones, handle all cabling infrastructure, install complete systems, and support 200+ clients across the region. One partner. End to end.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/get-a-quote/" className="bg-[#DC2626] hover:bg-red-700 text-white font-bold px-7 py-3.5 rounded-lg transition-all">
                Get a Phone System Quote
              </Link>
              <a href="tel:2812312944" className="border border-gray-500 hover:border-white text-gray-300 hover:text-white font-semibold px-7 py-3.5 rounded-lg transition-all">
                Call (281) 231-2944
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#DC2626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { stat: '200+', label: 'Clients on 3CX' },
              { stat: 'Only', label: '3CX Partner in South TX' },
              { stat: 'End-to-End', label: 'Sales, Install & Support' },
              { stat: '3CX', label: 'Certified Partner' },
            ].map(({ stat, label }) => (
              <div key={label}>
                <p className="text-2xl font-extrabold text-white">{stat}</p>
                <p className="text-sm text-red-100 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-5 text-gray-300 leading-relaxed">
              <h2 className="text-white font-bold text-2xl">South Texas&apos;s Exclusive 3CX Partner</h2>
              <p>
                When it comes to 3CX phone systems in the Greater Houston area and South Texas, Houston TechSys stands alone. We are the only certified 3CX partner in the region — meaning no other local provider has our depth of expertise, our certified training, or our track record with the platform.
              </p>
              <p>
                3CX is a modern, software-based phone system that replaces legacy PBX hardware with a flexible, scalable platform that runs on your own server or in the cloud. It delivers enterprise-grade features — call queues, ring groups, mobile apps, video conferencing, voicemail to email, and CRM integration — at a cost that makes sense for businesses of every size.
              </p>
              <p>
                Houston TechSys manages the complete 3CX experience for our clients. We sell 3CX licenses. We sell IP phones, headsets, and gateways. We handle all low voltage cabling infrastructure — because every VoIP phone needs a properly installed Cat6 cable run to perform reliably. We configure your system, train your team, and provide ongoing support. You get one partner who owns the entire project from the cable pull to the dial tone.
              </p>
              <p>
                With 200+ clients on 3CX across the region, we have deployed systems in law firms, medical offices, commercial buildings, retail chains, and multi-location enterprises. We understand how businesses use their phone systems, and we design deployments that work the way your team works.
              </p>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="bg-[#141414] border border-[#222222] rounded-xl p-6">
                <h3 className="text-white font-bold text-base mb-4">What We Provide</h3>
                <ul className="space-y-2">
                  {[
                    '3CX licenses (all tiers)',
                    'IP phones & headsets',
                    'SIP trunks & gateways',
                    'Complete cabling infrastructure',
                    'System design & configuration',
                    'User training & onboarding',
                    'Ongoing support & maintenance',
                    'Multi-location deployments',
                    'System expansion & upgrades',
                    'Mobile & remote work setup',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                      <svg className="w-4 h-4 text-[#DC2626] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#DC2626] rounded-xl p-6 text-center">
                <p className="text-white font-bold text-lg mb-1">The Only 3CX Partner</p>
                <p className="text-red-100 text-sm mb-4">in South Texas</p>
                <Link href="/get-a-quote/" className="block bg-white text-[#DC2626] hover:bg-red-50 font-bold px-5 py-3 rounded-lg transition-all text-sm">
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">3CX Phone System FAQs</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#141414] border border-[#222222] rounded-xl p-6">
                <h3 className="text-white font-semibold text-base mb-3">{faq.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#DC2626]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Ready to Upgrade Your Phone System?</h2>
          <p className="text-red-100 text-lg mb-8">Talk to South Texas&apos;s only 3CX partner. We handle everything — phones, cabling, and support.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/get-a-quote/" className="bg-white text-[#DC2626] hover:bg-red-50 font-bold px-8 py-4 rounded-lg text-lg transition-all">
              Get a Quote
            </Link>
            <a href="tel:2812312944" className="border-2 border-white text-white hover:bg-white hover:text-[#DC2626] font-bold px-8 py-4 rounded-lg text-lg transition-all">
              Call (281) 231-2944
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
