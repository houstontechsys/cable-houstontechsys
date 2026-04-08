'use client'
import { useState } from 'react'
import Link from 'next/link'

const services = [
  { label: 'Structured Cabling', href: '/services/structured-cabling-houston/' },
  { label: 'Network Cabling', href: '/services/network-cabling-installation/' },
  { label: 'Fiber Optic', href: '/services/fiber-optic-cabling-houston/' },
  { label: 'AV Networks', href: '/services/av-network-cabling/' },
  { label: 'Surveillance Systems', href: '/services/surveillance-camera-installation-houston/' },
  { label: 'WiFi Infrastructure', href: '/services/wifi-network-installation/' },
  { label: 'Phone Systems', href: '/services/phone-systems-houston/' },
]

const industries = [
  { label: 'Commercial Buildings', href: '/industries/commercial-buildings/' },
  { label: 'Office Relocations', href: '/industries/office-relocation-cabling/' },
  { label: 'General Contractors', href: '/industries/general-contractors/' },
  { label: 'Healthcare & Education', href: '/industries/healthcare-education/' },
]

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [industriesOpen, setIndustriesOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A1628]/95 backdrop-blur-sm border-b border-[#1E3A5F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#F97316] rounded flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <span className="text-white font-bold text-sm leading-tight block">Houston TechSys</span>
              <span className="text-[#F97316] text-xs font-medium">Cabling & Infrastructure</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="text-gray-300 hover:text-white text-sm font-medium flex items-center gap-1 py-2"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div
                  className="absolute top-full left-0 bg-[#112240] border border-[#1E3A5F] rounded-lg shadow-xl py-2 w-56 z-50"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  {services.map((s) => (
                    <Link key={s.href} href={s.href} className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-[#1E3A5F] transition-colors">
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div className="relative group">
              <button
                className="text-gray-300 hover:text-white text-sm font-medium flex items-center gap-1 py-2"
                onMouseEnter={() => setIndustriesOpen(true)}
                onMouseLeave={() => setIndustriesOpen(false)}
              >
                Industries
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {industriesOpen && (
                <div
                  className="absolute top-full left-0 bg-[#112240] border border-[#1E3A5F] rounded-lg shadow-xl py-2 w-56 z-50"
                  onMouseEnter={() => setIndustriesOpen(true)}
                  onMouseLeave={() => setIndustriesOpen(false)}
                >
                  {industries.map((i) => (
                    <Link key={i.href} href={i.href} className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-[#1E3A5F] transition-colors">
                      {i.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/projects/" className="text-gray-300 hover:text-white text-sm font-medium">Projects</Link>
            <Link href="/about/" className="text-gray-300 hover:text-white text-sm font-medium">About</Link>
            <Link href="/blog/" className="text-gray-300 hover:text-white text-sm font-medium">Blog</Link>
            <a href="tel:2812312944" className="text-gray-300 hover:text-white text-sm font-medium">(281) 231-2944</a>
            <Link href="/get-a-quote/" className="bg-[#F97316] hover:bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
              Get a Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden text-gray-300 hover:text-white p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#112240] border-t border-[#1E3A5F] px-4 py-4 space-y-3">
          <p className="text-xs font-semibold text-[#F97316] uppercase tracking-wider">Services</p>
          {services.map((s) => (
            <Link key={s.href} href={s.href} className="block text-sm text-gray-300 hover:text-white py-1" onClick={() => setMobileOpen(false)}>
              {s.label}
            </Link>
          ))}
          <p className="text-xs font-semibold text-[#F97316] uppercase tracking-wider pt-2">Industries</p>
          {industries.map((i) => (
            <Link key={i.href} href={i.href} className="block text-sm text-gray-300 hover:text-white py-1" onClick={() => setMobileOpen(false)}>
              {i.label}
            </Link>
          ))}
          <div className="border-t border-[#1E3A5F] pt-3 space-y-2">
            <Link href="/projects/" className="block text-sm text-gray-300 hover:text-white" onClick={() => setMobileOpen(false)}>Projects</Link>
            <Link href="/about/" className="block text-sm text-gray-300 hover:text-white" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/blog/" className="block text-sm text-gray-300 hover:text-white" onClick={() => setMobileOpen(false)}>Blog</Link>
            <a href="tel:2812312944" className="block text-sm text-[#F97316] font-semibold">(281) 231-2944</a>
            <Link href="/get-a-quote/" className="block bg-[#F97316] text-white text-sm font-semibold px-4 py-2 rounded-lg text-center" onClick={() => setMobileOpen(false)}>
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
