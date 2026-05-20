'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'

export const NAVBAR_OVERRIDE_ENABLED = true

const topLinks = [
  { label: 'About Us',    href: '/about' },
  { label: 'Latest News', href: '/updates' },
  { label: 'Contact',     href: '/contact' },
]

const primaryLinks = [
  { label: 'Newsroom', href: '/updates' },
  { label: 'About',    href: '/about' },
  { label: 'Contact',  href: '/contact' },
]

export function NavbarOverride() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#0d2233]">

      {/* ── Top utility bar ── */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#78B3CE]">
            Media Mediavoxer — Press Release Network
          </span>
          <div className="hidden items-center gap-6 sm:flex">
            {topLinks.map((item) => (
              <Link key={item.label} href={item.href}
                className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#78B3CE] transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main nav ── */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">

        {/* Logo */}
        <Link href="/" className="group inline-flex items-center gap-3">
          <Image
            src="/logo-mark.svg"
            alt={SITE_CONFIG.name + ' logo'}
            width={42}
            height={42}
            className="rounded-xl"
            priority
          />
          <div>
            <p className="text-[15px] font-black leading-none tracking-tight text-white">
              {SITE_CONFIG.name}
            </p>
            <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#78B3CE]">
              Press Media Network
            </p>
          </div>
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden items-center gap-1 md:flex">
          {primaryLinks.map((item) => (
            <Link key={item.label} href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-[#C9E6F0] transition hover:bg-white/10 hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <Link href="/register"
            className="hidden rounded-full bg-[#F96E2A] px-5 py-2.5 text-sm font-bold text-white shadow-[0_4px_16px_rgba(249,110,42,0.45)] transition hover:bg-[#ff7d35] hover:shadow-[0_6px_22px_rgba(249,110,42,0.55)] sm:inline-flex">
            Submit Release
          </Link>
          <button type="button" onClick={() => setOpen(v => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 md:hidden"
            aria-label="Toggle navigation">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      {open && (
        <div className="border-t border-white/10 bg-[#0d2233] px-4 py-4 md:hidden">
          <div className="grid gap-2">
            {primaryLinks.map((item) => (
              <Link key={item.label} href={item.href} onClick={() => setOpen(false)}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-[#C9E6F0] transition hover:bg-white/10 hover:text-white">
                {item.label}
              </Link>
            ))}
            <Link href="/register" onClick={() => setOpen(false)}
              className="rounded-xl bg-[#F96E2A] px-4 py-3 text-center text-sm font-bold text-white">
              Submit Release
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
