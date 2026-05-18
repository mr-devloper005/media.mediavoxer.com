import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { fetchTaskPosts } from '@/lib/task-data'
import { CATEGORY_OPTIONS, normalizeCategory } from '@/lib/categories'

export const FOOTER_OVERRIDE_ENABLED = true

const footerLinks = {
  Platform: [
    { label: 'Home',        href: '/' },
    { label: 'Latest News', href: '/updates' },
    { label: 'Contact',     href: '/contact' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Help',  href: '/help' },
  ],
  Legal: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms',   href: '/terms' },
    { label: 'Cookies', href: '/cookies' },
  ],
}

export function FooterOverride() {
  return (
    <footer className="mt-0 bg-[#0d2233]">
      {/* Orange top accent line */}
      <div className="h-1 w-full bg-[#F96E2A]" />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.6fr_0.7fr_0.7fr_0.7fr]">

          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo-mark.svg"
                alt={SITE_CONFIG.name + ' logo'}
                width={40}
                height={40}
                className="rounded-xl"
              />
              <p className="text-lg font-black text-white">{SITE_CONFIG.name}</p>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-7 text-[#7aacbf]">
              Modern press release publishing with strong readability, structured discovery, and responsive distribution pages built for journalists and brands.
            </p>
            <Link
              href="/register"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#F96E2A] px-5 py-2.5 text-sm font-bold text-white shadow-[0_4px_16px_rgba(249,110,42,0.35)] transition hover:bg-[#ff7d35]"
            >
              Submit a Release <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#78B3CE]">{heading}</p>
              <div className="mt-4 grid gap-3 text-sm">
                {links.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    className="text-[#7aacbf] transition hover:text-white"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-sm text-[#4a7a8f]">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="rounded-full border border-[#78B3CE]/30 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#78B3CE]">
              Press Network
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
