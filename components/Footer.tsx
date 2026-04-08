import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#DC2626] rounded flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <span className="text-white font-bold text-sm block">Houston TechSys</span>
                <span className="text-[#DC2626] text-xs">Cabling & Infrastructure</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Houston&apos;s premier commercial cabling contractor. Licensed, bonded, and trusted by building owners, GCs, and facility managers across the Greater Houston area.
            </p>
            <div className="mt-4 space-y-1">
              <p className="text-sm text-gray-400"><span className="text-white">Phone:</span> <a href="tel:2812312944" className="hover:text-[#DC2626]">(281) 231-2944</a></p>
              <p className="text-sm text-gray-400"><span className="text-white">Email:</span> <a href="mailto:info@houstontechsys.net" className="hover:text-[#DC2626]">info@houstontechsys.net</a></p>
              <p className="text-sm text-gray-400"><span className="text-white">Location:</span> Houston, TX</p>
              <p className="text-sm text-gray-400"><span className="text-white">License:</span> TX Low Voltage #[LICENSE]</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                ['Structured Cabling Houston', '/services/structured-cabling-houston/'],
                ['Network Cabling Installation', '/services/network-cabling-installation/'],
                ['Fiber Optic Cabling', '/services/fiber-optic-cabling-houston/'],
                ['AV Network Cabling', '/services/av-network-cabling/'],
                ['Surveillance Installation', '/services/surveillance-camera-installation-houston/'],
                ['WiFi Infrastructure', '/services/wifi-network-installation/'],
                ['Phone Systems', '/services/phone-systems-houston/'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-gray-400 hover:text-[#DC2626] transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Industries</h3>
            <ul className="space-y-2">
              {[
                ['Commercial Buildings', '/industries/commercial-buildings/'],
                ['Office Relocations', '/industries/office-relocation-cabling/'],
                ['General Contractors', '/industries/general-contractors/'],
                ['Healthcare & Education', '/industries/healthcare-education/'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-gray-400 hover:text-[#DC2626] transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 mt-6">Company</h3>
            <ul className="space-y-2">
              {[
                ['About Us', '/about/'],
                ['Projects', '/projects/'],
                ['Certifications', '/certifications/'],
                ['Blog', '/blog/'],
                ['Contact', '/contact/'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-gray-400 hover:text-[#DC2626] transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas + CTA */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Service Areas</h3>
            <ul className="space-y-1 mb-6">
              {['Houston', 'The Woodlands', 'Sugar Land', 'Katy', 'Pearland', 'Pasadena', 'Clear Lake', 'Galleria', 'Downtown Houston', 'Medical Center'].map((city) => (
                <li key={city} className="text-sm text-gray-400">{city}</li>
              ))}
            </ul>
            <Link
              href="/get-a-quote/"
              className="inline-block bg-[#DC2626] hover:bg-red-600 text-white text-sm font-semibold px-5 py-3 rounded-lg transition-colors w-full text-center"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>

        <div className="border-t border-[#222222] mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Houston TechSys. All rights reserved. Licensed & Bonded in Texas.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <Link href="/privacy/" className="hover:text-gray-300">Privacy Policy</Link>
            <Link href="/sitemap.xml" className="hover:text-gray-300">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
