import Link from 'next/link'
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

export const CONTACT_PAGE_OVERRIDE_ENABLED = true

export function ContactPageOverride() {
  return (
    <div className="min-h-screen bg-[#FBF8EF] text-[#0d2233]">
      <NavbarShell />

      {/* ── Steel blue gradient hero header ── */}
      <section className="relative overflow-hidden py-14" style={{background: 'linear-gradient(135deg, #1a4a6b 0%, #78B3CE 60%, #5a9ab8 100%)'}}>
        <div className="pointer-events-none absolute -top-20 right-0 h-80 w-80 rounded-full bg-[#F96E2A] opacity-[0.12] blur-[90px]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px'}} />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <span className="inline-flex rounded-full border border-[#F96E2A]/60 bg-[#F96E2A]/20 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.24em] text-white">
            Support Desk
          </span>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white drop-shadow-sm sm:text-5xl">Contact Us</h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/85">
            Tell us about your publishing needs, distribution questions, or partnership requests. Our media support team responds within one business day.
          </p>
        </div>
      </section>

      {/* Orange accent line */}
      <div className="h-1 bg-[#F96E2A]" />

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">

          {/* ── Contact form ── */}
          <section className="overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_60px_rgba(13,34,51,0.1)]">
            {/* Form header strip */}
            <div className="bg-[#0d2233] px-8 py-6">
              <h2 className="text-2xl font-black text-white">Send us a message</h2>
              <p className="mt-1 text-sm text-[#7aacbf]">We'll get back to you within 24 hours.</p>
            </div>

            <form className="p-7 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  className="h-12 rounded-xl border border-[#C9E6F0] bg-[#FBF8EF] px-4 text-sm text-[#0d2233] outline-none transition focus:border-[#F96E2A] focus:ring-2 focus:ring-[#F96E2A]/20 placeholder:text-[#78B3CE]/60"
                  placeholder="Your name"
                />
                <input
                  className="h-12 rounded-xl border border-[#C9E6F0] bg-[#FBF8EF] px-4 text-sm text-[#0d2233] outline-none transition focus:border-[#F96E2A] focus:ring-2 focus:ring-[#F96E2A]/20 placeholder:text-[#78B3CE]/60"
                  placeholder="Phone number"
                />
                <input
                  type="email"
                  className="sm:col-span-2 h-12 rounded-xl border border-[#C9E6F0] bg-[#FBF8EF] px-4 text-sm text-[#0d2233] outline-none transition focus:border-[#F96E2A] focus:ring-2 focus:ring-[#F96E2A]/20 placeholder:text-[#78B3CE]/60"
                  placeholder="Email address"
                />
                <select className="h-12 rounded-xl border border-[#C9E6F0] bg-[#FBF8EF] px-4 text-sm text-[#0d2233] outline-none transition focus:border-[#F96E2A] focus:ring-2 focus:ring-[#F96E2A]/20">
                  <option>Organization type</option>
                  <option>Agency</option>
                  <option>Startup</option>
                  <option>Enterprise</option>
                  <option>Publisher</option>
                </select>
                <select className="h-12 rounded-xl border border-[#C9E6F0] bg-[#FBF8EF] px-4 text-sm text-[#0d2233] outline-none transition focus:border-[#F96E2A] focus:ring-2 focus:ring-[#F96E2A]/20">
                  <option>Subject</option>
                  <option>Distribution Support</option>
                  <option>Pricing Question</option>
                  <option>Partnership</option>
                  <option>Technical Issue</option>
                </select>
                <textarea
                  className="sm:col-span-2 min-h-[150px] rounded-xl border border-[#C9E6F0] bg-[#FBF8EF] px-4 py-3 text-sm text-[#0d2233] outline-none transition focus:border-[#F96E2A] focus:ring-2 focus:ring-[#F96E2A]/20 placeholder:text-[#78B3CE]/60"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#F96E2A] px-7 py-3 text-sm font-bold text-white shadow-[0_6px_20px_rgba(249,110,42,0.4)] transition hover:bg-[#ff7d35] hover:-translate-y-0.5"
              >
                Send Message <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </section>

          {/* ── Sidebar ── */}
          <aside className="space-y-4">
            {/* Contact info card */}
            <div className="overflow-hidden rounded-[1.5rem] bg-white shadow-[0_10px_30px_rgba(13,34,51,0.08)]">
              <div className="bg-[#0d2233] px-6 py-5">
                <h3 className="font-black text-white">Get in Touch</h3>
              </div>
              <div className="space-y-4 p-6">
                {[
                  { icon: Mail,   label: 'Email',  value: 'press@mediavoxer.com' },
                  { icon: Phone,  label: 'Phone',  value: '+1 (800) 555-0199' },
                  { icon: MapPin, label: 'Office', value: 'Media District, New York, NY' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F96E2A]/10">
                      <item.icon className="h-4 w-4 text-[#F96E2A]" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#78B3CE]">{item.label}</p>
                      <p className="mt-0.5 text-sm font-semibold text-[#0d2233]">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Response time card */}
            <div className="overflow-hidden rounded-[1.5rem] bg-[#0d2233]">
              <div className="h-1 bg-[#F96E2A]" />
              <div className="p-6">
                <h3 className="font-black text-white">Response Time</h3>
                <p className="mt-3 text-sm leading-7 text-[#7aacbf]">
                  Our media support team typically responds within{' '}
                  <strong className="text-[#F96E2A]">1 business day</strong>. For urgent press inquiries, mark your subject as "Urgent".
                </p>
              </div>
            </div>

            {/* CTA card */}
            <div className="overflow-hidden rounded-[1.5rem] bg-[#F96E2A]">
              <div className="p-6">
                <h3 className="font-black text-white">Ready to Publish?</h3>
                <p className="mt-2 text-sm leading-6 text-white/85">
                  Submit your press release and reach thousands of media partners today.
                </p>
                <Link
                  href="/register"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#0d2233] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#1a3a50]"
                >
                  Submit a Release <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  )
}
