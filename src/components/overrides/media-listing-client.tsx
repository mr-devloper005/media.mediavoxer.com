'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Search, SlidersHorizontal } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import { ContentImage } from '@/components/shared/content-image'

type Props = { posts: SitePost[] }

function categoryOf(post: SitePost) {
  const c = post.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
  return typeof c.category === 'string' && c.category.trim() ? c.category.trim() : 'General'
}

function dateFilter(dateValue: string | undefined | null, range: string) {
  if (!dateValue) return range === 'all'
  if (range === 'all') return true
  const now = Date.now()
  const t = new Date(dateValue).getTime()
  if (!Number.isFinite(t)) return true
  const day = 86400000
  if (range === '7d')   return now - t <= 7 * day
  if (range === '30d')  return now - t <= 30 * day
  if (range === '365d') return now - t <= 365 * day
  return true
}

const IMAGES = [
  'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80',
]

export function MediaListingClient({ posts }: Props) {
  const [query,     setQuery]     = useState('')
  const [category,  setCategory]  = useState('all')
  const [dateRange, setDateRange] = useState('all')

  const categories = useMemo(
    () => ['all', ...Array.from(new Set(posts.map(categoryOf)))],
    [posts],
  )

  const filtered = useMemo(() => posts.filter((post) => {
    const q = query.trim().toLowerCase()
    const matchQ = !q || post.title.toLowerCase().includes(q) || (post.summary || '').toLowerCase().includes(q) || categoryOf(post).toLowerCase().includes(q)
    const matchC = category === 'all' || categoryOf(post) === category
    const matchD = dateFilter(post.publishedAt ?? undefined, dateRange)
    return matchQ && matchC && matchD
  }), [posts, query, category, dateRange])

  return (
    <>
      {/* ── Filter bar ── */}
      <div className="mb-8 overflow-hidden rounded-[1.5rem] bg-white shadow-[0_8px_30px_rgba(13,34,51,0.08)]">
        {/* header strip */}
        <div className="flex items-center gap-2 border-b border-[#C9E6F0] bg-[#0d2233] px-5 py-3">
          <SlidersHorizontal className="h-4 w-4 text-[#78B3CE]" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9E6F0]">Filter Releases</span>
        </div>
        <div className="grid gap-3 p-5 md:grid-cols-[1fr_200px_200px]">
          <label className="relative block">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#78B3CE]" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="h-12 w-full rounded-xl border border-[#C9E6F0] bg-[#FBF8EF] pl-10 pr-4 text-sm text-[#0d2233] outline-none transition focus:border-[#F96E2A] focus:ring-2 focus:ring-[#F96E2A]/20"
              placeholder="Search press releases..."
            />
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="h-12 rounded-xl border border-[#C9E6F0] bg-[#FBF8EF] px-3 text-sm text-[#0d2233] outline-none transition focus:border-[#F96E2A] focus:ring-2 focus:ring-[#F96E2A]/20"
          >
            {categories.map((c) => (
              <option key={c} value={c}>{c === 'all' ? 'All categories' : c}</option>
            ))}
          </select>
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="h-12 rounded-xl border border-[#C9E6F0] bg-[#FBF8EF] px-3 text-sm text-[#0d2233] outline-none transition focus:border-[#F96E2A] focus:ring-2 focus:ring-[#F96E2A]/20"
          >
            <option value="all">Any date</option>
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="365d">Last 12 months</option>
          </select>
        </div>
      </div>

      {/* ── Results count ── */}
      <p className="mb-5 text-sm font-semibold text-[#78B3CE]">
        {filtered.length} release{filtered.length !== 1 ? 's' : ''} found
      </p>

      {/* ── Cards grid ── */}
      {filtered.length ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, index) => (
            <Link
              key={post.id}
              href={`/updates/${post.slug}`}
              className="group relative overflow-hidden rounded-[1.5rem] bg-white shadow-[0_8px_28px_rgba(13,34,51,0.08)] transition hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(13,34,51,0.14)]"
            >
              {/* image */}
              <div className="relative h-48 overflow-hidden">
                <ContentImage
                  src={IMAGES[index % IMAGES.length]}
                  alt={post.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2233]/50 to-transparent" />
                {/* category pill */}
                <span className="absolute bottom-3 left-3 rounded-full bg-[#F96E2A] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                  {categoryOf(post)}
                </span>
              </div>

              {/* body */}
              <div className="p-5">
                <h2 className="line-clamp-2 text-lg font-black leading-snug text-[#0d2233]">{post.title}</h2>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#4a6a7a]">
                  {post.summary || 'Read the complete press release details.'}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#78B3CE] transition group-hover:gap-2.5 group-hover:text-[#F96E2A]">
                  Read more <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>

              {/* orange bottom slide-in */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#F96E2A] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>
      ) : (
        <div className="rounded-[1.5rem] border-2 border-dashed border-[#C9E6F0] bg-white p-14 text-center">
          <p className="text-base font-bold text-[#78B3CE]">No press releases match your filters.</p>
          <p className="mt-1 text-sm text-[#a8c8d8]">Try adjusting your search or category.</p>
        </div>
      )}
    </>
  )
}
