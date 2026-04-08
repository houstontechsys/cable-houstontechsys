import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Commercial Cabling Contractor Houston TX | Houston TechSys',
    template: '%s | Houston TechSys Cabling',
  },
  description: 'Houston TechSys is Houston\'s premier commercial cabling contractor — structured cabling, fiber optic, AV networks, surveillance, and WiFi infrastructure. Fully insured.',
  metadataBase: new URL('https://cable.houstontechsys.net'),
  openGraph: {
    siteName: 'Houston TechSys Cabling',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0A0A0A] text-white antialiased">
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
