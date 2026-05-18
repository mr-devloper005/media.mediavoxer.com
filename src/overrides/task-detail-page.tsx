import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Facebook, Linkedin, Newspaper, Share2, Twitter } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { ContentImage } from '@/components/shared/content-image'
import { fetchTaskPostBySlug, fetchTaskPosts, buildPostUrl } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import type { SitePost } from '@/lib/site-connector'
import { SITE_CONFIG } from '@/lib/site-config'
import { formatRichHtml, RichContent } from '@/components/shared/rich-content'
import { ContentImage } from '@/components/shared/content-image'

export const TASK_DETAIL_PAGE_OVERRIDE_ENABLED = true

function imageFor(index: number) {
  const images = [
    'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1500&q=80',
    'https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1500&q=80',
    'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1500&q=80',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1500&q=80',
  ]
  return images[index % images.length]
}

export async function TaskDetailPageOverride({ slug }: { task: TaskKey; slug: string }) {
  const post = await fetchTaskPostBySlug('mediaDistribution', slug)
  if (!post) notFound()
  const related = (await fetchTaskPosts('mediaDistribution', 8, { fresh: false }))
    .filter((item) => item.slug !== slug)
    .slice(0, 3)
  const content = (post.content || {}) as Record<string, unknown>
  const html = formatRichHtml((content.body as string) || post.summary || '', 'Post body will appear here.')
  const subtitle = typeof content.subtitle === 'string' ? content.subtitle : post.summary

  return (
    <div className="min-h-screen bg-[#FBF8EF] text-[#0d2233]">
      <NavbarShell />

      {/* ── Steel blue gradient hero header ── */}
      <section className="relative overflow-hidden py-14" style={{background: 'linear-gradient(135deg, #1a4a6b 0%, #78B3CE 60%, #5a9ab8 100%)'}}>
        <div className="pointer-events-none absolute -top-20 right-0 h-80 w-80 rounded-full bg-[#F96E2A] opacity-[0.12] blur-[90px]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px'}} />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
          <Link href="/updates"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/20 px-4 py-1.5 text-xs font-bold text-white backdrop-blur-sm transition hover:bg-white/30">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Newsroom
          </Link>

          <div className="inline-flex items-center gap-2 rounded-full border border-[#F96E2A]/60 bg-[#F96E2A]/20 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-white">
            <Newspaper className="h-3 w-3" /> Press Release
          </div>

          <h1 className="mt-4 max-w-4xl text-3xl font-black leading-tight tracking-[-0.04em] text-white drop-shadow-sm sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          {subtitle ? (
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/85">{subtitle}</p>
          ) : null}

          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-white/70">
            <span className="font-bold text-white">{post.authorName || 'Editorial Desk'}</span>
            <span className="opacity-40">•</span>
            <Link href="/" className="transition hover:text-white">Home</Link>
            <span className="opacity-40">/</span>
            <Link href="/updates" className="transition hover:text-white">Latest News</Link>
            <span className="opacity-40">/</span>
            <span className="max-w-[200px] truncate opacity-70">{post.title}</span>
          </div>
        </div>
      </section>

      {/* Orange accent line */}
      <div className="h-1 bg-[#F96E2A]" />

      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <article className="overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_60px_rgba(13,34,51,0.1)]">
          {/* Cover image */}
          <div className="relative h-72 overflow-hidden sm:h-[440px]">
            <ContentImage src={imageFor(0)} alt={post.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d2233]/40 to-transparent" />
            {/* Category badge on image */}
            <span className="absolute bottom-4 left-4 rounded-full bg-[#F96E2A] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white shadow-lg">
              {String((content.category as string) || 'General')}
            </span>
          </div>

          {/* Article body */}
          <div className="p-7 sm:p-10">
            <div className="prose prose-lg max-w-none text-[#2a4a60] prose-headings:font-black prose-headings:text-[#0d2233] prose-headings:tracking-tight prose-p:leading-8 prose-a:text-[#F96E2A] prose-a:no-underline hover:prose-a:underline">
              <RichContent html={html} />
            </div>

            {/* Share bar */}
            <div className="mt-10 rounded-2xl border border-[#C9E6F0] bg-[#C9E6F0]/20 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#78B3CE]">Share this release</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {[
                  { label: 'Share',    icon: Share2 },
                  { label: 'Twitter',  icon: Twitter },
                  { label: 'LinkedIn', icon: Linkedin },
                  { label: 'Facebook', icon: Facebook },
                ].map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    className="inline-flex items-center gap-2 rounded-full border border-[#C9E6F0] bg-white px-4 py-2 text-sm font-semibold text-[#0d2233] transition hover:border-[#F96E2A] hover:bg-[#F96E2A] hover:text-white"
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {hero ? (
              <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-[1.25rem] border border-border bg-muted shadow-sm">
                <ContentImage src={hero} alt={post.title} fill className="object-cover" priority />
              </div>
            ) : null}

            <RichContent html={html} className="article-content mt-10 max-w-none text-[1.05rem] leading-[1.75] text-foreground/90" />
          </div>
        </article>

        {/* Related releases */}
        {related.length > 0 && (
          <div className="mt-14">
            <div className="mb-6 flex items-end justify-between">
              <h2 className="text-2xl font-black tracking-[-0.03em] text-[#0d2233]">Related Releases</h2>
              <Link href="/updates" className="text-sm font-bold text-[#78B3CE] hover:text-[#F96E2A] transition">
                View all →
              </Link>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {related.map((item, index) => (
                <Link
                  key={item.id}
                  href={`/updates/${item.slug}`}
                  className="group overflow-hidden rounded-[1.5rem] bg-white shadow-[0_8px_28px_rgba(13,34,51,0.08)] transition hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(13,34,51,0.14)]"
                >
                  <div className="relative h-44 overflow-hidden">
                    <ContentImage
                      src={imageFor(index + 1)}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d2233]/40 to-transparent" />
                  </div>
                  <div className="p-4">
                    <p className="line-clamp-2 text-sm font-black text-[#0d2233]">{item.title}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#F96E2A]">
                      Read more <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                  <div className="h-0.5 w-0 bg-[#F96E2A] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
