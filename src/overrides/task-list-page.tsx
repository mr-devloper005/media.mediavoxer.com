import { Newspaper, TrendingUp } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPosts } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { MediaListingClient } from '@/components/overrides/media-listing-client'

export const TASK_LIST_PAGE_OVERRIDE_ENABLED = true

export async function TaskListPageOverride(_: { task: TaskKey; category?: string }) {
  const posts = await fetchTaskPosts('mediaDistribution', 24, { fresh: false })

  return (
    <div className="min-h-screen bg-[#FBF8EF] text-[#0d2233]">
      <NavbarShell />

      {/* ── Steel blue gradient hero header ── */}
      <section className="relative overflow-hidden py-14" style={{background: 'linear-gradient(160deg, #0d2233 0%, #1a4a6b 35%, #78B3CE 75%, #8ec5d6 100%)'}}>
        <div className="pointer-events-none absolute -top-20 right-0 h-80 w-80 rounded-full bg-[#F96E2A] opacity-[0.12] blur-[90px]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px'}} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/20 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.24em] text-white backdrop-blur-sm">
            <TrendingUp className="h-3 w-3 text-[#F96E2A]" /> Newsroom
          </span>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white drop-shadow-sm sm:text-5xl">
            Latest News &amp; Press Releases
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/85">
            Browse recent media updates with category and date filters. Search by title, topic, or summary to find exactly what you need.
          </p>

          {/* stat pills */}
          <div className="mt-6 flex flex-wrap gap-3">
            {['12K+ Releases', '850+ Partners', 'Daily Updates'].map((s) => (
              <span key={s} className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/15 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-sm">
                <Newspaper className="h-3 w-3" /> {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Orange accent strip ── */}
      <div className="h-1 bg-[#F96E2A]" />

      {/* ── Content ── */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <MediaListingClient posts={posts} />
      </main>

      <Footer />
    </div>
  )
}
