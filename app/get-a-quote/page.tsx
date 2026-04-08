import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Get a Free Cabling Quote | Houston TechSys',
  description: 'Request a free commercial cabling quote from Houston TechSys. Structured cabling, fiber, AV, surveillance, and WiFi. Fast response, honest pricing.',
  alternates: { canonical: 'https://cable.houstontechsys.net/get-a-quote/' },
}

export default function GetAQuotePage() {
  return (
    <>
      {/* Header */}
            <section className="relative bg-[#0A0A0A] min-h-[560px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/20752572/pexels-photo-20752572.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Business consultation meeting professional office"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/75 to-[#0A0A0A]/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-2xl">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-4">
              Get Your <span className="gradient-text">Free Cabling Quote</span>
            </h1>
            <p className="text-xl text-gray-300">
              Tell us about your project. We'll respond within 4 business hours with a clear, itemized quote.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Trust Signals */}
      <section className="py-16 bg-[#050505]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-[#141414] border border-[#222222] rounded-2xl p-8">
                <h2 className="text-white font-bold text-xl mb-6">Project Details</h2>
                <form action="https://formspree.io/f/PLACEHOLDER" method="POST" className="space-y-5">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="John Smith"
                        className="w-full bg-[#0A0A0A] border border-[#222222] focus:border-[#DC2626] text-white placeholder-gray-600 rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">Company *</label>
                      <input
                        type="text"
                        name="company"
                        required
                        placeholder="ABC Properties LLC"
                        className="w-full bg-[#0A0A0A] border border-[#222222] focus:border-[#DC2626] text-white placeholder-gray-600 rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="(713) 000-0000"
                        className="w-full bg-[#0A0A0A] border border-[#222222] focus:border-[#DC2626] text-white placeholder-gray-600 rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="john@company.com"
                        className="w-full bg-[#0A0A0A] border border-[#222222] focus:border-[#DC2626] text-white placeholder-gray-600 rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Service Needed *</label>
                    <select
                      name="service"
                      required
                      className="w-full bg-[#0A0A0A] border border-[#222222] focus:border-[#DC2626] text-white rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                    >
                      <option value="" disabled>Select a service...</option>
                      <option value="structured-cabling">Structured Cabling (Cat6/Cat6A)</option>
                      <option value="fiber-optic">Fiber Optic Cabling</option>
                      <option value="network-cabling">Network Cabling Installation</option>
                      <option value="av-cabling">AV Network Cabling</option>
                      <option value="surveillance">Surveillance Camera Installation</option>
                      <option value="wifi">WiFi Infrastructure</option>
                      <option value="phone-systems">Phone Systems</option>
                      <option value="office-relocation">Office Relocation Cabling</option>
                      <option value="multiple">Multiple Services</option>
                      <option value="unsure">Not Sure — Need Assessment</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Project Description *</label>
                    <textarea
                      name="description"
                      required
                      rows={4}
                      placeholder="Tell us about your project — building size, number of drops needed, timeline, special requirements, etc."
                      className="w-full bg-[#0A0A0A] border border-[#222222] focus:border-[#DC2626] text-white placeholder-gray-600 rounded-lg px-4 py-3 text-sm outline-none transition-colors resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Project Timeline</label>
                    <select
                      name="timeline"
                      className="w-full bg-[#0A0A0A] border border-[#222222] focus:border-[#DC2626] text-white rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                    >
                      <option value="">Select timeline...</option>
                      <option value="asap">ASAP / Emergency</option>
                      <option value="2-weeks">Within 2 weeks</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="3-months">Within 3 months</option>
                      <option value="planning">Still planning / flexible</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#DC2626] hover:bg-red-600 text-white font-bold py-4 rounded-lg text-lg transition-all shadow-lg shadow-red-600/20"
                  >
                    Submit Quote Request
                  </button>
                  <p className="text-xs text-gray-500 text-center">We respond within 4 business hours. No spam, no pressure.</p>
                </form>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="space-y-5">
              <div className="bg-[#141414] border border-[#222222] rounded-xl p-5">
                <h3 className="text-white font-bold text-base mb-4">Why Choose Houston TechSys</h3>
                <ul className="space-y-3">
                  {[
                    ['Fully Insured', 'GL & Workers Comp'],
                    ['🔒', 'Fully Bonded & Insured'],
                    ['📋', 'BICSI-Trained Technicians'],
                    ['⚡', 'Response Within 4 Business Hours'],
                    ['📄', 'Fluke-Certified Testing & Documentation'],
                    ['📍', 'Houston-Based — Fast Dispatch'],
                    ['🤝', '500+ Commercial Projects Completed'],
                    ['⏱️', 'On-Time Delivery Commitment'],
                  ].map(([icon, text]) => (
                    <li key={text} className="flex items-center gap-3 text-sm text-gray-300">
                      <span className="text-base">{icon}</span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#DC2626]/10 border border-[#DC2626]/30 rounded-xl p-5">
                <p className="text-white font-bold text-base mb-1">Prefer to call?</p>
                <p className="text-gray-400 text-sm mb-3">Speak directly with a cabling specialist.</p>
                <a href="tel:2812312944" className="block bg-[#DC2626] hover:bg-red-600 text-white font-bold px-5 py-3 rounded-lg text-center transition-all text-sm">
                  Call (281) 231-2944
                </a>
              </div>

              <div className="bg-[#141414] border border-[#222222] rounded-xl p-5">
                <p className="text-gray-400 text-sm italic leading-relaxed">
                  &ldquo;They responded within the hour, had a quote to me by end of day, and finished the job two days early. Best low voltage contractor we&apos;ve used.&rdquo;
                </p>
                <p className="text-white text-sm font-semibold mt-3">David R.</p>
                <p className="text-gray-500 text-xs">Project Manager, Texas Commercial Builders</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
