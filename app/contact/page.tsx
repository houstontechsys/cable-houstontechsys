import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact Houston TechSys Cabling | Houston, TX',
  description: 'Contact Houston TechSys for commercial cabling services in Houston TX. Call, email, or fill out our contact form. Licensed low voltage contractor.',
  alternates: { canonical: 'https://cable.houstontechsys.net/contact/' },
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#0A1628] dot-grid py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold text-white mb-4">Contact <span className="gradient-text">Houston TechSys</span></h1>
          <p className="text-xl text-gray-300">Ready to talk? We respond fast.</p>
        </div>
      </section>

      <section className="py-16 bg-[#060e1a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-[#112240] border border-[#1E3A5F] rounded-xl p-6 space-y-4">
                <h2 className="text-white font-bold text-lg">Get In Touch</h2>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F97316]/10 rounded-lg flex items-center justify-center text-[#F97316]">📞</div>
                  <div>
                    <p className="text-gray-400 text-xs">Phone</p>
                    <a href="tel:7139999999" className="text-white font-semibold hover:text-[#F97316]">(713) 999-9999</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F97316]/10 rounded-lg flex items-center justify-center text-[#F97316]">✉️</div>
                  <div>
                    <p className="text-gray-400 text-xs">Email</p>
                    <a href="mailto:info@houstontechsys.net" className="text-white font-semibold hover:text-[#F97316]">info@houstontechsys.net</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F97316]/10 rounded-lg flex items-center justify-center text-[#F97316]">📍</div>
                  <div>
                    <p className="text-gray-400 text-xs">Location</p>
                    <p className="text-white font-semibold">Houston, TX</p>
                    <p className="text-gray-400 text-xs">Serving Greater Houston Area</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F97316]/10 rounded-lg flex items-center justify-center text-[#F97316]">🕐</div>
                  <div>
                    <p className="text-gray-400 text-xs">Hours</p>
                    <p className="text-white font-semibold">Mon–Fri: 7:00 AM – 6:00 PM</p>
                    <p className="text-gray-400 text-xs">Emergency support available 24/7</p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-[#112240] border border-[#1E3A5F] rounded-xl overflow-hidden h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221927.61506!2d-95.5699!3d29.7604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Houston TechSys Service Area"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#112240] border border-[#1E3A5F] rounded-xl p-6">
              <h2 className="text-white font-bold text-lg mb-5">Send Us a Message</h2>
              <form action="https://formspree.io/f/PLACEHOLDER" method="POST" className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Name *</label>
                  <input type="text" name="name" required placeholder="Your name" className="w-full bg-[#0A1628] border border-[#1E3A5F] focus:border-[#F97316] text-white placeholder-gray-600 rounded-lg px-4 py-3 text-sm outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Email *</label>
                  <input type="email" name="email" required placeholder="your@email.com" className="w-full bg-[#0A1628] border border-[#1E3A5F] focus:border-[#F97316] text-white placeholder-gray-600 rounded-lg px-4 py-3 text-sm outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Phone</label>
                  <input type="tel" name="phone" placeholder="(713) 000-0000" className="w-full bg-[#0A1628] border border-[#1E3A5F] focus:border-[#F97316] text-white placeholder-gray-600 rounded-lg px-4 py-3 text-sm outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Message *</label>
                  <textarea name="message" required rows={5} placeholder="How can we help?" className="w-full bg-[#0A1628] border border-[#1E3A5F] focus:border-[#F97316] text-white placeholder-gray-600 rounded-lg px-4 py-3 text-sm outline-none transition-colors resize-none" />
                </div>
                <button type="submit" className="w-full bg-[#F97316] hover:bg-orange-500 text-white font-bold py-3.5 rounded-lg transition-all">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#0A1628] text-center">
        <p className="text-gray-400 mb-4">Need a formal quote?</p>
        <Link href="/get-a-quote/" className="inline-block bg-[#F97316] hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-lg text-lg transition-all">
          Get a Free Quote →
        </Link>
      </section>
    </>
  )
}
