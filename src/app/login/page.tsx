import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle2, Newspaper, Radio } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { LOGIN_PAGE_OVERRIDE_ENABLED, LoginPageOverride } from '@/overrides/login-page'

export default function LoginPage() {
  if (LOGIN_PAGE_OVERRIDE_ENABLED) return <LoginPageOverride />

  return (
    <div className="min-h-screen bg-[#FBF8EF] text-[#0d2233]">
      <NavbarShell />
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-stretch">

          {/* ── Left panel — dark navy brand side ── */}
          <div className="relative overflow-hidden rounded-[2rem] bg-[#0d2233] p-8 shadow-[0_24px_70px_rgba(13,34,51,0.28)] lg:p-10">
            {/* glow blobs */}
            <div className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-[#F96E2A] opacity-[0.12] blur-[80px]" />
            <div className="pointer-events-none absolute bottom-0 -left-10 h-48 w-48 rounded-full bg-[#78B3CE] opacity-15 blur-[60px]" />
            {/* dot pattern */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
              style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

            <div className="relative">
              {/* Logo mark */}
              <div className="flex items-center gap-3">
                <Image src="/logo-mark.svg" alt="Media Mediavoxer" width={40} height={40} className="rounded-xl" />
                <div>
                  <p className="text-sm font-black text-white">Media Mediavoxer</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#78B3CE]">Press Media Network</p>
                </div>
              </div>

              {/* Headline */}
              <h1 className="mt-8 text-3xl font-black leading-tight tracking-[-0.04em] text-white lg:text-4xl">
                Welcome Back to<br />
                <span className="text-[#F96E2A]">Your Newsroom</span>
              </h1>
              <p className="mt-4 text-sm leading-7 text-[#a8c8d8]">
                Access your media dashboard to manage press releases, monitor updates, and keep your newsroom active.
              </p>

              {/* Feature list */}
              <ul className="mt-8 space-y-3">
                {[
                  'Publish press releases in minutes',
                  'Reach 850+ media partners globally',
                  'SEO-optimised newsroom pages',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[#a8c8d8]">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F96E2A]/20">
                      <CheckCircle2 className="h-3 w-3 text-[#F96E2A]" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Live badge */}
              <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-[#F96E2A]/40 bg-[#F96E2A]/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#F96E2A]">
                <Radio className="h-3 w-3 animate-pulse" />
                Live Press Network
              </div>
            </div>
          </div>

          {/* ── Right panel — form ── */}
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-[0_16px_50px_rgba(13,34,51,0.1)]">
            {/* top accent */}
            <div className="h-1.5 bg-[#F96E2A]" />

            <div className="p-8 lg:p-10">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C9E6F0]">
                  <Newspaper className="h-5 w-5 text-[#78B3CE]" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#78B3CE]">Welcome back</p>
                  <p className="text-lg font-black text-[#0d2233]">Sign in to your account</p>
                </div>
              </div>

              <form className="mt-8 grid gap-4">
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-[0.16em] text-[#78B3CE]">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="h-12 w-full rounded-xl border border-[#C9E6F0] bg-[#FBF8EF] px-4 text-sm text-[#0d2233] outline-none transition focus:border-[#F96E2A] focus:ring-2 focus:ring-[#F96E2A]/20 placeholder:text-[#78B3CE]/50"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-[0.16em] text-[#78B3CE]">
                    Password
                  </label>
                  <input
                    type="password"
                    className="h-12 w-full rounded-xl border border-[#C9E6F0] bg-[#FBF8EF] px-4 text-sm text-[#0d2233] outline-none transition focus:border-[#F96E2A] focus:ring-2 focus:ring-[#F96E2A]/20 placeholder:text-[#78B3CE]/50"
                    placeholder="••••••••"
                  />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-[#3a6070]">
                    <input type="checkbox" className="h-4 w-4 rounded border-[#C9E6F0] accent-[#F96E2A]" />
                    Remember me
                  </label>
                  <Link href="/forgot-password" className="font-semibold text-[#78B3CE] transition hover:text-[#F96E2A]">
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="mt-2 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#F96E2A] text-sm font-bold text-white shadow-[0_6px_20px_rgba(249,110,42,0.4)] transition hover:bg-[#ff7d35] hover:-translate-y-0.5"
                >
                  Sign In <ArrowRight className="h-4 w-4" />
                </button>
              </form>

              {/* Divider */}
              <div className="my-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-[#C9E6F0]" />
                <span className="text-xs font-bold text-[#78B3CE]">OR</span>
                <div className="h-px flex-1 bg-[#C9E6F0]" />
              </div>

              <p className="text-center text-sm text-[#3a6070]">
                Don&apos;t have an account?{' '}
                <Link href="/register" className="font-bold text-[#0d2233] underline underline-offset-2 transition hover:text-[#F96E2A]">
                  Create one free
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
