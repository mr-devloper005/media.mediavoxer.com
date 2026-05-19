import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle2, Globe2, Megaphone, Radio } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { REGISTER_PAGE_OVERRIDE_ENABLED, RegisterPageOverride } from '@/overrides/register-page'

const perks = [
  { icon: Megaphone, title: 'Instant Publishing',   body: 'Go live with your first press release in under 5 minutes.' },
  { icon: Globe2,    title: 'Global Distribution',  body: 'Reach 850+ media partners and journalists worldwide.' },
  { icon: CheckCircle2, title: 'Free to Start',     body: 'No credit card required. Publish your first release free.' },
]

export default function RegisterPage() {
  if (REGISTER_PAGE_OVERRIDE_ENABLED) return <RegisterPageOverride />

  return (
    <div className="min-h-screen bg-[#FBF8EF] text-[#0d2233]">
      <NavbarShell />
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">

          {/* ── Left panel — dark navy brand side ── */}
          <div className="relative overflow-hidden rounded-[2rem] bg-[#0d2233] p-8 shadow-[0_24px_70px_rgba(13,34,51,0.28)] lg:p-10">
            {/* glow blobs */}
            <div className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-[#F96E2A] opacity-[0.12] blur-[80px]" />
            <div className="pointer-events-none absolute bottom-0 -left-10 h-48 w-48 rounded-full bg-[#78B3CE] opacity-15 blur-[60px]" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
              style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

            <div className="relative">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <Image src="/logo-mark.svg" alt="Media Mediavoxer" width={40} height={40} className="rounded-xl" />
                <div>
                  <p className="text-sm font-black text-white">Media Mediavoxer</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#78B3CE]">Press Media Network</p>
                </div>
              </div>

              <h1 className="mt-8 text-3xl font-black leading-tight tracking-[-0.04em] text-white lg:text-4xl">
                Start Publishing<br />
                <span className="text-[#F96E2A]">Press Releases Today</span>
              </h1>
              <p className="mt-4 text-sm leading-7 text-[#a8c8d8]">
                Join thousands of brands and agencies using Media Mediavoxer to distribute verified updates with a modern newsroom experience.
              </p>

              {/* Perk cards */}
              <div className="mt-8 space-y-4">
                {perks.map((p, i) => (
                  <div key={p.title}
                    className={`flex items-start gap-4 rounded-2xl p-4 ${i === 0 ? 'bg-[#F96E2A]/15 border border-[#F96E2A]/30' : 'bg-white/5 border border-white/10'}`}>
                    <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${i === 0 ? 'bg-[#F96E2A]' : 'bg-[#78B3CE]/20'}`}>
                      <p.icon className={`h-4 w-4 ${i === 0 ? 'text-white' : 'text-[#78B3CE]'}`} />
                    </div>
                    <div>
                      <p className="text-sm font-black text-white">{p.title}</p>
                      <p className="mt-0.5 text-xs leading-5 text-[#a8c8d8]">{p.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#F96E2A]/40 bg-[#F96E2A]/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#F96E2A]">
                <Radio className="h-3 w-3 animate-pulse" />
                Live Press Network
              </div>
            </div>
          </div>

          {/* ── Right panel — form ── */}
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-[0_16px_50px_rgba(13,34,51,0.1)]">
            <div className="h-1.5 bg-[#F96E2A]" />

            <div className="p-8 lg:p-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#78B3CE]">Get started free</p>
              <p className="mt-1 text-xl font-black text-[#0d2233]">Create your account</p>
              <p className="mt-1 text-sm text-[#3a6070]">No credit card required.</p>

              <form className="mt-7 grid gap-4">
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-[0.16em] text-[#78B3CE]">Full name</label>
                  <input
                    type="text"
                    className="h-12 w-full rounded-xl border border-[#C9E6F0] bg-[#FBF8EF] px-4 text-sm text-[#0d2233] outline-none transition focus:border-[#F96E2A] focus:ring-2 focus:ring-[#F96E2A]/20 placeholder:text-[#78B3CE]/50"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-[0.16em] text-[#78B3CE]">Email address</label>
                  <input
                    type="email"
                    className="h-12 w-full rounded-xl border border-[#C9E6F0] bg-[#FBF8EF] px-4 text-sm text-[#0d2233] outline-none transition focus:border-[#F96E2A] focus:ring-2 focus:ring-[#F96E2A]/20 placeholder:text-[#78B3CE]/50"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-[0.16em] text-[#78B3CE]">Password</label>
                  <input
                    type="password"
                    className="h-12 w-full rounded-xl border border-[#C9E6F0] bg-[#FBF8EF] px-4 text-sm text-[#0d2233] outline-none transition focus:border-[#F96E2A] focus:ring-2 focus:ring-[#F96E2A]/20 placeholder:text-[#78B3CE]/50"
                    placeholder="Min. 8 characters"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-[0.16em] text-[#78B3CE]">Organization type</label>
                  <select className="h-12 w-full rounded-xl border border-[#C9E6F0] bg-[#FBF8EF] px-4 text-sm text-[#0d2233] outline-none transition focus:border-[#F96E2A] focus:ring-2 focus:ring-[#F96E2A]/20">
                    <option value="">Select your organization type</option>
                    <option>Agency</option>
                    <option>Startup</option>
                    <option>Enterprise</option>
                    <option>Publisher</option>
                    <option>Individual</option>
                  </select>
                </div>

                {/* Terms */}
                <label className="flex items-start gap-2.5 text-sm text-[#3a6070]">
                  <input type="checkbox" className="mt-0.5 h-4 w-4 shrink-0 rounded border-[#C9E6F0] accent-[#F96E2A]" />
                  <span>
                    I agree to the{' '}
                    <Link href="/terms" className="font-bold text-[#0d2233] underline underline-offset-2 hover:text-[#F96E2A]">Terms of Service</Link>
                    {' '}and{' '}
                    <Link href="/privacy" className="font-bold text-[#0d2233] underline underline-offset-2 hover:text-[#F96E2A]">Privacy Policy</Link>
                  </span>
                </label>

                <button
                  type="submit"
                  className="mt-1 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#F96E2A] text-sm font-bold text-white shadow-[0_6px_20px_rgba(249,110,42,0.4)] transition hover:bg-[#ff7d35] hover:-translate-y-0.5"
                >
                  Create Free Account <ArrowRight className="h-4 w-4" />
                </button>
              </form>

              <div className="my-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-[#C9E6F0]" />
                <span className="text-xs font-bold text-[#78B3CE]">OR</span>
                <div className="h-px flex-1 bg-[#C9E6F0]" />
              </div>

              <p className="text-center text-sm text-[#3a6070]">
                Already have an account?{' '}
                <Link href="/login" className="font-bold text-[#0d2233] underline underline-offset-2 transition hover:text-[#F96E2A]">
                  Sign in
                </Link>
              </p>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  )
}
