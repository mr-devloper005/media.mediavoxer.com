import Link from 'next/link'
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Globe2,
  Megaphone,
  Newspaper,
  Quote,
  Radio,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Zap,
} from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { ContentImage } from '@/components/shared/content-image'
import { fetchTaskPosts } from '@/lib/task-data'

export const HOME_PAGE_OVERRIDE_ENABLED = true

function excerpt(text?: string | null, max = 120) {
  const v = (text || '').trim()
  if (!v) return 'Read the full press release for complete details.'
  return v.length > max ? v.slice(0, max - 3).trimEnd() + '...' : v
}

const IMAGES = [
  'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1400&q=80',
]
const img = (i: number) => IMAGES[i % IMAGES.length]

export async function HomePageOverride() {
  const posts = await fetchTaskPosts('mediaDistribution', 12, { fresh: false })
  const featured = posts[0]
  const topStories = posts.slice(1, 4)
  const latest = posts.slice(0, 6)

  const features = [
    { icon: Megaphone, title: 'Broadcast Instantly', body: 'Publish releases in minutes with a structured newsroom layout built for journalists and search engines.' },
    { icon: Globe2,    title: 'Global Distribution', body: 'Reach media partners, journalists, and readers across every device with SEO-optimised article pages.' },
    { icon: BarChart3, title: 'Track Your Reach',    body: 'Monitor distribution performance and understand exactly how your stories land with your audience.' },
  ]

  const stats = [
    { value: '12K+', label: 'Releases Published' },
    { value: '850+', label: 'Media Partners' },
    { value: '98%',  label: 'Uptime' },
    { value: '4.9★', label: 'Publisher Rating' },
  ]

  const testimonials = [
    { quote: 'Media Mediavoxer gave our announcements a newsroom-grade look that journalists actually preferred over our old PDF releases.', author: 'Aarav Mehta',   role: 'Head of Comms, NexaSoft' },
    { quote: 'The article pages feel premium on every device. Our press releases now get picked up by outlets we never reached before.',    author: 'Sophia Turner', role: 'PR Manager, Orbit Finance' },
    { quote: 'We went live in a day. The visual quality made our startup look like an established media brand from the very first post.',   author: 'Daniel Brooks', role: 'Founder, LaunchGrid' },
  ]

  return (
    <div className="min-h-screen bg-[#FBF8EF] text-[#0d2233]">
      <NavbarShell />
      <main>

        {/* ═══════════════════════════════════════════════
            HERO — gradient flows from dark navy header
        ═══════════════════════════════════════════════ */}
        <section className="relative overflow-hidden" style={{background: 'linear-gradient(160deg, #0d2233 0%, #1a4a6b 35%, #78B3CE 75%, #8ec5d6 100%)'}}>
          {/* orange glow top-right */}
          <div className="pointer-events-none absolute -top-20 -right-20 h-[500px] w-[500px] rounded-full bg-[#F96E2A] opacity-[0.13] blur-[100px]" />
          {/* dot pattern */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px'}} />

          <div className="relative mx-auto max-w-7xl px-4 pt-14 pb-0 sm:px-6 lg:pt-20">
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">

              {/* ── Left copy ── */}
              <div className="pb-14 lg:pb-20">
                {/* live badge */}
                <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/20 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.24em] text-white backdrop-blur-sm">
                  <Radio className="h-3 w-3 animate-pulse text-[#F96E2A]" />
                  Live Press Network
                </span>

                <h1 className="mt-5 text-5xl font-black leading-[1.05] tracking-[-0.04em] text-white drop-shadow-sm sm:text-6xl lg:text-7xl">
                  Where<br />
                  <span className="text-[#F96E2A] drop-shadow-[0_2px_8px_rgba(249,110,42,0.5)]">News</span><br />
                  Breaks First
                </h1>

                <p className="mt-5 max-w-md text-base leading-8 text-white/85">
                  Publish company announcements, product launches, and media stories through a modern newsroom built for clarity, trust, and reach.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href="/updates"
                    className="group inline-flex items-center gap-2 rounded-full bg-[#F96E2A] px-7 py-3.5 text-sm font-bold text-white shadow-[0_8px_30px_rgba(249,110,42,0.5)] transition hover:bg-[#ff7d35] hover:-translate-y-0.5">
                    Explore Newsroom
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </Link>
                  <Link href="/register"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 bg-white/15 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/25 hover:border-white">
                    Submit a Release
                  </Link>
                </div>

                {/* stats row */}
                <div className="mt-9 flex flex-wrap gap-6 border-t border-white/20 pt-7">
                  {stats.map((s) => (
                    <div key={s.label}>
                      <p className="text-2xl font-black text-white">{s.value}</p>
                      <p className="text-xs font-semibold text-white/70">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Right — image card with floating story cards ── */}
              <div className="hidden lg:block py-14">
                <div className="relative h-[420px] overflow-hidden rounded-3xl bg-[#1a4a6b] shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
                  <ContentImage src={img(0)} alt="newsroom" fill className="object-cover" />
                  {/* gradient overlay so cards are readable */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d2233]/90 via-[#0d2233]/20 to-transparent" />
                  {/* floating story cards */}
                  <div className="absolute bottom-4 left-4 right-4 space-y-3">
                    {topStories.slice(0, 2).map((post, i) => (
                      <Link key={post.id} href={`/updates/${post.slug}`}
                        className="flex items-start gap-3 rounded-2xl border border-white/10 bg-[#0d2233]/85 p-4 backdrop-blur-md transition hover:bg-[#0d2233]">
                        <span className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-black ${i === 0 ? 'bg-[#F96E2A] text-white' : 'bg-[#78B3CE]/40 text-white'}`}>
                          {i + 1}
                        </span>
                        <div>
                          <p className="line-clamp-1 text-sm font-bold text-white">{post.title}</p>
                          <p className="mt-0.5 line-clamp-1 text-xs text-[#C9E6F0]/80">{excerpt(post.summary, 70)}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            TICKER / BREAKING BAR
        ═══════════════════════════════════════════════ */}
        <div className="overflow-hidden bg-[#F96E2A] py-2.5">
          <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
            {[...Array(3)].map((_, ri) => (
              <span key={ri} className="flex shrink-0 items-center gap-8 px-8 text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                {['Breaking News', 'Press Release', 'Media Update', 'Newsroom Alert', 'Latest Release', 'Industry Update'].map((t) => (
                  <span key={t} className="flex items-center gap-2">
                    <Zap className="h-3 w-3" />{t}
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>


        {/* ═══════════════════════════════════════════════
            FEATURED RELEASE — cream bg, big card
        ═══════════════════════════════════════════════ */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F96E2A] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-white">
                <TrendingUp className="h-3 w-3" /> Featured Release
              </span>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-[#0d2233]">Top Story</h2>
            </div>
            <Link href="/updates" className="hidden text-sm font-bold text-[#78B3CE] underline underline-offset-4 hover:text-[#F96E2A] transition sm:block">
              View all →
            </Link>
          </div>

          {featured ? (
            <article className="group grid overflow-hidden rounded-[2rem] bg-[#0d2233] shadow-[0_32px_80px_rgba(13,34,51,0.28)] lg:grid-cols-[1.3fr_0.7fr]">
              <div className="relative min-h-[360px] overflow-hidden">
                <ContentImage src={img(1)} alt={featured.title} fill className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0d2233]/60 via-transparent to-transparent" />
                {/* orange accent bar */}
                <div className="absolute left-0 top-0 h-full w-1.5 bg-[#F96E2A]" />
              </div>
              <div className="flex flex-col justify-between p-8 lg:p-10">
                <div>
                  <span className="inline-flex rounded-full bg-[#78B3CE]/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9E6F0]">
                    Breaking Release
                  </span>
                  <h3 className="mt-4 text-2xl font-black leading-snug text-white">{featured.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#a8c8d8]">{excerpt(featured.summary, 160)}</p>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <span className="flex items-center gap-2 text-xs text-[#78B3CE]">
                    <Newspaper className="h-3.5 w-3.5" />
                    {featured.authorName || 'Editorial Desk'}
                  </span>
                  <Link href={`/updates/${featured.slug}`}
                    className="inline-flex items-center gap-2 rounded-full bg-[#F96E2A] px-5 py-2.5 text-sm font-bold text-white shadow-[0_6px_20px_rgba(249,110,42,0.4)] transition hover:bg-[#ff7d35]">
                    Read release <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ) : null}
        </section>

        {/* ═══════════════════════════════════════════════
            FEATURES — sky-blue bg, icon cards
        ═══════════════════════════════════════════════ */}
        <section className="bg-[#C9E6F0] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mb-12 text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#78B3CE] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-white">
                <Sparkles className="h-3 w-3" /> Why Choose Us
              </span>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-[#0d2233]">
                Built for Modern<br />Press Distribution
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {features.map((f, i) => (
                <article key={f.title}
                  className={`relative overflow-hidden rounded-[1.5rem] p-8 transition hover:-translate-y-1 ${i === 1 ? 'bg-[#0d2233] text-white shadow-[0_20px_60px_rgba(13,34,51,0.3)]' : 'bg-white shadow-[0_10px_40px_rgba(120,179,206,0.2)]'}`}>
                  {i === 1 && <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[#F96E2A] opacity-10 blur-3xl" />}
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${i === 1 ? 'bg-[#F96E2A]' : 'bg-[#C9E6F0]'}`}>
                    <f.icon className={`h-7 w-7 ${i === 1 ? 'text-white' : 'text-[#78B3CE]'}`} />
                  </div>
                  <h3 className={`mt-6 text-xl font-black ${i === 1 ? 'text-white' : 'text-[#0d2233]'}`}>{f.title}</h3>
                  <p className={`mt-3 text-sm leading-7 ${i === 1 ? 'text-[#a8c8d8]' : 'text-[#3a6070]'}`}>{f.body}</p>
                  {i === 1 && (
                    <Link href="/updates" className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-[#F96E2A] hover:gap-2.5 transition-all">
                      Explore newsroom <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════════════
            LATEST NEWS GRID — cream bg
        ═══════════════════════════════════════════════ */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <span className="inline-flex rounded-full bg-[#F96E2A]/12 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#F96E2A]">
                Latest News
              </span>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-[#0d2233]">Fresh from the Wire</h2>
            </div>
            <Link href="/updates"
              className="rounded-full border-2 border-[#0d2233] bg-transparent px-5 py-2 text-sm font-bold text-[#0d2233] transition hover:bg-[#0d2233] hover:text-white">
              All releases
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latest.map((post, index) => (
              <Link key={post.id} href={`/updates/${post.slug}`}
                className="group relative overflow-hidden rounded-[1.5rem] bg-white shadow-[0_8px_32px_rgba(13,34,51,0.08)] transition hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(13,34,51,0.16)]">
                {/* image */}
                <div className="relative h-52 overflow-hidden">
                  <ContentImage src={img(index + 2)} alt={post.title} fill className="object-cover transition duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d2233]/50 to-transparent" />
                  {/* category pill on image */}
                  <span className="absolute bottom-3 left-3 rounded-full bg-[#F96E2A] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                    Press Release
                  </span>
                </div>
                {/* body */}
                <div className="p-5">
                  <h3 className="line-clamp-2 text-lg font-black leading-snug text-[#0d2233]">{post.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#4a6a7a]">{excerpt(post.summary, 100)}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#78B3CE] transition group-hover:gap-2.5 group-hover:text-[#F96E2A]">
                    Read story <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
                {/* orange bottom accent on hover */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#F96E2A] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            TRUST BANNER — dark navy, full-bleed
        ═══════════════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-[#0d2233] py-16">
          <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-[#F96E2A] opacity-[0.08] blur-[100px]" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#78B3CE] opacity-10 blur-[80px]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div>
                <span className="inline-flex rounded-full border border-[#F96E2A]/40 bg-[#F96E2A]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#F96E2A]">
                  Why Teams Choose Us
                </span>
                <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] text-white">
                  The Press Platform<br />Built for Results
                </h2>
                <ul className="mt-7 space-y-4">
                  {[
                    { icon: ShieldCheck, text: 'Verified publishing-first release pages with structured metadata.' },
                    { icon: Newspaper,   text: 'Structured newsroom and archive experience for journalists.' },
                    { icon: CheckCircle2,text: 'Clean mobile-first layout with fast load times and SEO signals.' },
                  ].map((item) => (
                    <li key={item.text} className="flex items-start gap-3 text-sm text-[#a8c8d8]">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F96E2A]/20">
                        <item.icon className="h-3.5 w-3.5 text-[#F96E2A]" />
                      </span>
                      {item.text}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/updates"
                    className="inline-flex items-center gap-2 rounded-full bg-[#F96E2A] px-6 py-3 text-sm font-bold text-white shadow-[0_8px_24px_rgba(249,110,42,0.4)] transition hover:bg-[#ff7d35]">
                    Browse Newsroom <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-[#78B3CE]/40 px-6 py-3 text-sm font-semibold text-[#C9E6F0] transition hover:bg-[#78B3CE]/10">
                    Talk to our team
                  </Link>
                </div>
              </div>

              {/* partner grid */}
              <div className="grid grid-cols-3 gap-3">
                {['Reuters', 'Bloomberg', 'MarketWatch', 'FedEx', 'TechWire', 'StartupBeat'].map((name, i) => (
                  <div key={name}
                    className={`flex items-center justify-center rounded-2xl border px-3 py-5 text-center text-sm font-bold transition hover:-translate-y-0.5 ${i === 0 ? 'border-[#F96E2A]/50 bg-[#F96E2A]/10 text-[#F96E2A]' : 'border-[#78B3CE]/20 bg-[#78B3CE]/8 text-[#C9E6F0]'}`}>
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════════════
            TESTIMONIALS — sky-blue bg
        ═══════════════════════════════════════════════ */}
        <section className="bg-[#C9E6F0] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mb-12 text-center">
              <span className="inline-flex rounded-full bg-[#78B3CE] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-white">
                Testimonials
              </span>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-[#0d2233]">What Publishers Say</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((t, i) => (
                <article key={t.author}
                  className={`relative overflow-hidden rounded-[1.5rem] p-7 transition hover:-translate-y-1 ${i === 1 ? 'bg-[#F96E2A] text-white shadow-[0_20px_50px_rgba(249,110,42,0.35)]' : 'bg-white shadow-[0_10px_30px_rgba(120,179,206,0.18)]'}`}>
                  <Quote className={`h-8 w-8 ${i === 1 ? 'text-white/40' : 'text-[#F96E2A]'}`} />
                  <p className={`mt-4 text-sm leading-7 ${i === 1 ? 'text-white/90' : 'text-[#3a6070]'}`}>{t.quote}</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-black ${i === 1 ? 'bg-white/20 text-white' : 'bg-[#78B3CE] text-white'}`}>
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <p className={`text-sm font-black ${i === 1 ? 'text-white' : 'text-[#0d2233]'}`}>{t.author}</p>
                      <p className={`text-xs ${i === 1 ? 'text-white/70' : 'text-[#78B3CE]'}`}>{t.role}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            FINAL CTA — orange gradient, full-bleed
        ═══════════════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-[#F96E2A] py-20">
          <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDBoNnY2aC02di02em0xMiAwaDZ2NmgtNnYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40" />
          <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.24em] text-white">
              <Sparkles className="h-3 w-3" /> Ready to Publish?
            </span>
            <h2 className="mt-6 text-5xl font-black leading-tight tracking-[-0.04em] text-white sm:text-6xl">
              Your Story Deserves<br />to Be Heard
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-white/85">
              Launch your newsroom with a polished, media-ready layout designed for clarity, trust, and discoverability across every device.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link href="/register"
                className="inline-flex items-center gap-2 rounded-full bg-[#0d2233] px-8 py-4 text-sm font-black text-white shadow-[0_10px_40px_rgba(13,34,51,0.4)] transition hover:bg-[#1a3a50] hover:-translate-y-0.5">
                Start Publishing Free
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/50 bg-transparent px-8 py-4 text-sm font-bold text-white transition hover:bg-white/15 hover:border-white">
                Talk to our team
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
