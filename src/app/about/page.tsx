import Link from 'next/link'
import { ArrowRight, CheckCircle2, Globe2, Newspaper, TrendingUp, Users, Zap } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

const values = [
  {
    icon: Newspaper,
    title: 'Editorial Quality First',
    body: 'Every release page is structured for readability, credibility, and newsroom-style scanning that journalists trust.',
  },
  {
    icon: Globe2,
    title: 'Distribution-Aware Design',
    body: 'Our platform is built around visibility goals — from category discovery to media reach across every device.',
  },
  {
    icon: Zap,
    title: 'Fast Publishing Workflow',
    body: 'Teams can create, review, and publish updates quickly without ever compromising on presentation quality.',
  },
]

const stats = [
  { value: '12K+', label: 'Published Releases' },
  { value: '850+', label: 'Media Partners' },
  { value: '120+', label: 'Industry Categories' },
  { value: '24/7', label: 'Global Visibility' },
]

const team = [
  { name: 'Priya Sharma',   role: 'Head of Editorial',    initial: 'P' },
  { name: 'James Okafor',   role: 'Distribution Lead',    initial: 'J' },
  { name: 'Lena Müller',    role: 'Product Design',       initial: 'L' },
  { name: 'Carlos Rivera',  role: 'Engineering',          initial: 'C' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FBF8EF] text-[#0d2233]">
      <NavbarShell />
      <main>

        {/* ── Hero header — steel blue gradient (matches home page) ── */}
        <section
          className="relative overflow-hidden py-16"
          style={{ background: 'linear-gradient(135deg, #1a4a6b 0%, #78B3CE 60%, #5a9ab8 100%)' }}
        >
          {/* decorative glows */}
          <div className="pointer-events-none absolute -top-20 right-0 h-80 w-80 rounded-full bg-[#F96E2A] opacity-[0.12] blur-[90px]" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#F96E2A]/60 bg-[#F96E2A]/20 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.24em] text-white">
              <TrendingUp className="h-3 w-3" /> About Us
            </span>
            <h1 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.04em] text-white drop-shadow-sm sm:text-5xl lg:text-6xl">
              Built for Modern<br />
              <span className="text-[#F96E2A]">Press Media</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/85">
              Media Mediavoxer helps organizations publish announcements and updates with a polished newsroom experience that feels modern, trustworthy, and easy to navigate.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/updates"
                className="inline-flex items-center gap-2 rounded-full bg-[#F96E2A] px-6 py-3 text-sm font-bold text-white shadow-[0_6px_20px_rgba(249,110,42,0.45)] transition hover:bg-[#ff7d35] hover:-translate-y-0.5">
                Browse Newsroom <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/50 bg-white/15 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/25">
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Orange accent line */}
        <div className="h-1 bg-[#F96E2A]" />

        {/* ── Stats strip ── */}
        <section className="border-b border-[#C9E6F0] bg-[#C9E6F0]/30">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-3xl font-black text-[#F96E2A]">{s.value}</p>
                  <p className="mt-1 text-sm font-semibold text-[#2a5570]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Our story + values ── */}
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">

            {/* Story card */}
            <article className="overflow-hidden rounded-[2rem] bg-white shadow-[0_16px_50px_rgba(13,34,51,0.1)]">
              {/* card header strip */}
              <div className="bg-[#0d2233] px-7 py-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#78B3CE]/40 bg-[#78B3CE]/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#C9E6F0]">
                  <Newspaper className="h-3 w-3" /> Our Story
                </span>
                <h2 className="mt-3 text-2xl font-black text-white">Why We Built This</h2>
              </div>
              <div className="p-7">
                <p className="text-sm leading-8 text-[#3a6070]">
                  We created Media Mediavoxer for teams that want more than a basic feed. The product combines structured listing surfaces, focused article reading, and strong visual hierarchy so every release carries authority.
                </p>
                <p className="mt-3 text-sm leading-8 text-[#3a6070]">
                  The result is a platform where journalists can scan quickly, audiences can read comfortably, and brands can publish confidently — all from one clean newsroom.
                </p>

                {/* inline stats */}
                <div className="mt-7 grid gap-4 sm:grid-cols-3">
                  {[
                    ['12K+', 'Published releases'],
                    ['120+', 'Industry categories'],
                    ['24/7', 'Global visibility'],
                  ].map(([value, label]) => (
                    <div key={label}
                      className="rounded-2xl border border-[#C9E6F0] bg-[#FBF8EF] p-4 text-center">
                      <p className="text-2xl font-black text-[#F96E2A]">{value}</p>
                      <p className="mt-0.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#78B3CE]">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            {/* Values cards */}
            <div className="grid gap-4 content-start">
              {values.map((item, i) => (
                <article key={item.title}
                  className={`overflow-hidden rounded-2xl transition hover:-translate-y-0.5 ${i === 1 ? 'bg-[#0d2233] shadow-[0_12px_36px_rgba(13,34,51,0.2)]' : 'bg-white shadow-[0_8px_28px_rgba(13,34,51,0.08)]'}`}>
                  <div className={`h-1 w-full ${i === 1 ? 'bg-[#F96E2A]' : 'bg-[#78B3CE]'}`} />
                  <div className="p-5">
                    <div className="flex items-start gap-4">
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${i === 1 ? 'bg-[#F96E2A]' : 'bg-[#C9E6F0]'}`}>
                        <item.icon className={`h-5 w-5 ${i === 1 ? 'text-white' : 'text-[#78B3CE]'}`} />
                      </div>
                      <div>
                        <h3 className={`text-base font-black ${i === 1 ? 'text-white' : 'text-[#0d2233]'}`}>{item.title}</h3>
                        <p className={`mt-1.5 text-sm leading-7 ${i === 1 ? 'text-[#a8c8d8]' : 'text-[#3a6070]'}`}>{item.body}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Team section — sky blue bg ── */}
        <section className="bg-[#C9E6F0] py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mb-10 text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#78B3CE] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-white">
                <Users className="h-3 w-3" /> The Team
              </span>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-[#0d2233]">People Behind the Platform</h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member, i) => (
                <div key={member.name}
                  className={`overflow-hidden rounded-2xl text-center transition hover:-translate-y-1 ${i === 0 ? 'bg-[#F96E2A] shadow-[0_12px_36px_rgba(249,110,42,0.3)]' : 'bg-white shadow-[0_8px_24px_rgba(120,179,206,0.18)]'}`}>
                  <div className={`h-1 ${i === 0 ? 'bg-[#0d2233]' : 'bg-[#F96E2A]'}`} />
                  <div className="p-6">
                    <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full text-2xl font-black ${i === 0 ? 'bg-white/20 text-white' : 'bg-[#0d2233] text-white'}`}>
                      {member.initial}
                    </div>
                    <p className={`mt-4 font-black ${i === 0 ? 'text-white' : 'text-[#0d2233]'}`}>{member.name}</p>
                    <p className={`mt-1 text-xs font-bold uppercase tracking-[0.16em] ${i === 0 ? 'text-white/75' : 'text-[#78B3CE]'}`}>{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Mission banner — dark navy ── */}
        <section className="relative overflow-hidden bg-[#0d2233] py-16">
          <div className="pointer-events-none absolute -top-20 right-0 h-80 w-80 rounded-full bg-[#F96E2A] opacity-[0.08] blur-[90px]" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-60 w-60 rounded-full bg-[#78B3CE] opacity-10 blur-[70px]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div>
                <span className="inline-flex rounded-full border border-[#F96E2A]/40 bg-[#F96E2A]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#F96E2A]">
                  Our Mission
                </span>
                <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-white sm:text-4xl">
                  Giving Every Story<br />the Platform It Deserves
                </h2>
                <p className="mt-4 text-sm leading-8 text-[#a8c8d8]">
                  We believe every organization — from startups to enterprises — deserves a professional newsroom. Our mission is to make press release publishing accessible, beautiful, and effective for everyone.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    'Structured, journalist-friendly release pages',
                    'SEO-optimised metadata on every article',
                    'Mobile-first design for every reader',
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-[#a8c8d8]">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F96E2A]/20">
                        <CheckCircle2 className="h-3 w-3 text-[#F96E2A]" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              {/* CTA card */}
              <div className="overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
                <div className="h-2 bg-[#F96E2A]" />
                <div className="p-8">
                  <h3 className="text-xl font-black text-[#0d2233]">Ready to work with us?</h3>
                  <p className="mt-3 text-sm leading-7 text-[#3a6070]">
                    Whether you are launching a product, sharing company milestones, or publishing regular updates, Media Mediavoxer gives you a refined publishing surface tailored for media communication.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link href="/contact"
                      className="inline-flex items-center gap-2 rounded-full bg-[#F96E2A] px-6 py-3 text-sm font-bold text-white shadow-[0_6px_20px_rgba(249,110,42,0.35)] transition hover:bg-[#ff7d35]">
                      Contact Us <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link href="/updates"
                      className="inline-flex items-center gap-2 rounded-full border-2 border-[#C9E6F0] bg-[#FBF8EF] px-6 py-3 text-sm font-bold text-[#0d2233] transition hover:bg-[#C9E6F0]">
                      Browse Newsroom
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
