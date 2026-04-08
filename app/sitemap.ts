import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const BASE_URL = 'https://cable.houstontechsys.net'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { url: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/services/', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/services/structured-cabling-houston/', priority: 0.95, changeFrequency: 'monthly' as const },
    { url: '/services/network-cabling-installation/', priority: 0.85, changeFrequency: 'monthly' as const },
    { url: '/services/fiber-optic-cabling-houston/', priority: 0.85, changeFrequency: 'monthly' as const },
    { url: '/services/av-network-cabling/', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/services/surveillance-camera-installation-houston/', priority: 0.85, changeFrequency: 'monthly' as const },
    { url: '/services/wifi-network-installation/', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/services/phone-systems-houston/', priority: 0.75, changeFrequency: 'monthly' as const },
    { url: '/industries/', priority: 0.85, changeFrequency: 'monthly' as const },
    { url: '/industries/commercial-buildings/', priority: 0.85, changeFrequency: 'monthly' as const },
    { url: '/industries/office-relocation-cabling/', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/industries/general-contractors/', priority: 0.85, changeFrequency: 'monthly' as const },
    { url: '/industries/healthcare-education/', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/industries/hospitality-restaurants/', priority: 0.85, changeFrequency: 'monthly' as const },
    { url: '/industries/co-working-spaces/', priority: 0.85, changeFrequency: 'monthly' as const },
    { url: '/projects/', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/about/', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/certifications/', priority: 0.75, changeFrequency: 'yearly' as const },
    { url: '/blog/', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/contact/', priority: 0.8, changeFrequency: 'yearly' as const },
    { url: '/get-a-quote/', priority: 0.95, changeFrequency: 'monthly' as const },
  ]

  return pages.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE_URL}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
}
