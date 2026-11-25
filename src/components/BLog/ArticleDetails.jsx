import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  HiArrowLeft,
  HiCalendar,
  HiCamera,
  HiClock,
  HiEnvelope,
  HiHome,
  HiLink,
  HiListBullet,
  HiShare,
  HiTag,
} from 'react-icons/hi2'
import { FaLinkedinIn, FaWhatsapp, FaXTwitter } from 'react-icons/fa6'
import { posts } from '../../data/articles.jsx'
import Notfound from '../Notfound/Notfound.jsx'

function formatDate(date) {
  return new Intl.DateTimeFormat('ar-EG', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(`${date}T00:00:00`))
}

export default function ArticleDetails() {
  const { slug } = useParams()
  const [copyMessage, setCopyMessage] = useState('')
  const article = posts.find((post) => post.slug === slug)

  if (!article) {
    return <Notfound description="المقال الذي تبحث عنه غير موجود. يمكنك الرجوع إلى المدونة وتصفح المقالات المتاحة." />
  }

  let sectionIndex = 0
  const contentBlocks = article.content
    .split(/\n\s*\n/)
    .map((text) => text.trim())
    .filter(Boolean)
    .map((text) => {
      if (text.startsWith('## ')) {
        return {
          type: 'heading',
          id: `section-${sectionIndex++}`,
          text: text.slice(3),
        }
      }

      return { type: 'paragraph', text }
    })
  const sections = contentBlocks.filter((block) => block.type === 'heading')
  const relatedPosts = posts
    .filter((post) => post.category === article.category && post.slug !== article.slug)
    .slice(0, 3)
  const articleUrl = window.location.href
  const encodedArticleUrl = encodeURIComponent(articleUrl)
  const encodedTitle = encodeURIComponent(article.title)

  const copyArticleLink = async () => {
    try {
      await navigator.clipboard.writeText(articleUrl)
      setCopyMessage('تم نسخ رابط المقال')
    } catch {
      setCopyMessage('تعذر نسخ الرابط. انسخه من شريط العنوان.')
    }
  }

  return (
    <article className="min-h-screen bg-[#0a0a0a] text-white" dir="rtl">
      <header className="relative min-h-[500px] overflow-hidden md:h-[60vh]">
        <img
          src={article.image}
          alt={article.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/30 to-transparent" />

        <div className="absolute left-4 right-4 top-6 sm:left-8 sm:right-8 sm:top-8">
          <nav
            className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm backdrop-blur-md"
            aria-label="مسار التنقل"
          >
            <Link to="/" aria-label="الرئيسية" className="text-white/70 transition-colors hover:text-white">
              <HiHome className="h-4 w-4" />
            </Link>
            <HiArrowLeft className="h-3 w-3 shrink-0 text-white/30" />
            <Link to="/blog" className="text-white/70 transition-colors hover:text-white">المدونة</Link>
            <HiArrowLeft className="h-3 w-3 shrink-0 text-white/30" />
            <span className="max-w-[200px] truncate font-medium text-orange-400">{article.category}</span>
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 md:p-12">
          <div className="mx-auto max-w-5xl text-right">
            <div className="mb-5 flex flex-wrap items-center justify-start gap-3">
              <Link
                to={`/blog?category=${encodeURIComponent(article.category)}`}
                className="rounded-full bg-orange-500 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-orange-600"
              >
                {article.category}
              </Link>
              <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
                <span className="flex items-center gap-2">
                  <HiCalendar className="h-4 w-4" />
                  {formatDate(article.date)}
                </span>
                <span className="flex items-center gap-2">
                  <HiClock className="h-4 w-4" />
                  {article.readTime}
                </span>
              </div>
            </div>

            <h1 className="mb-6 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              {article.title}
            </h1>

            <div className="flex w-fit items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="h-14 w-14 rounded-full object-cover ring-2 ring-orange-500/50"
              />
              <div>
                <p className="font-bold">{article.author.name}</p>
                <p className="text-sm text-white/60">{article.author.role}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_350px] lg:gap-12">
          <div className="order-2 min-w-0 text-right lg:order-1">
            <div className="mb-10 rounded-2xl border border-orange-500/20 bg-gradient-to-r from-orange-500/10 to-yellow-500/5 p-6">
              <p className="text-lg italic leading-relaxed text-neutral-200">“{article.excerpt}”</p>
            </div>

            <div className="space-y-6">
              {contentBlocks.map((block, index) => (
                block.type === 'heading' ? (
                  <h2
                    key={block.id}
                    id={block.id}
                    className="mt-14 flex scroll-mt-28 items-center gap-4 text-right text-2xl font-bold text-white md:text-3xl"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10">
                      <HiCamera className="h-5 w-5 text-orange-500" />
                    </span>
                    {block.text}
                  </h2>
                ) : (
                  <p key={index} className="text-lg leading-relaxed text-neutral-300">
                    {block.text}
                  </p>
                )
              ))}
            </div>

            {article.tags.length > 0 && (
              <section className="mt-14 rounded-2xl border border-[#262626] bg-[#111111] p-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10">
                    <HiTag className="h-5 w-5 text-orange-500" />
                  </span>
                  <h2 className="font-bold">الوسوم</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Link
                      key={tag}
                      to={`/blog?search=${encodeURIComponent(tag)}`}
                      className="rounded-full border border-[#262626] bg-[#1a1a1a] px-4 py-2 text-sm text-neutral-400 transition-colors hover:border-orange-500/50 hover:text-orange-500"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </section>
            )}

            <section className="mt-6 rounded-2xl border border-[#262626] bg-[#111111] p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10">
                    <HiShare className="h-5 w-5 text-orange-500" />
                  </span>
                  <h2 className="font-bold">شارك المقال</h2>
                </div>
                <div className="flex gap-2">
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodedArticleUrl}&text=${encodedTitle}`}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="مشاركة على إكس"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#262626] bg-[#1a1a1a] text-neutral-400 transition-colors hover:border-transparent hover:bg-[#1da1f2] hover:text-white"
                  >
                    <FaXTwitter />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedArticleUrl}`}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="مشاركة على لينكدإن"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#262626] bg-[#1a1a1a] text-neutral-400 transition-colors hover:border-transparent hover:bg-[#0077b5] hover:text-white"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href={`https://wa.me/?text=${encodedTitle}%20${encodedArticleUrl}`}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="مشاركة على واتساب"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#262626] bg-[#1a1a1a] text-neutral-400 transition-colors hover:border-transparent hover:bg-[#25d366] hover:text-white"
                  >
                    <FaWhatsapp />
                  </a>
                  <button
                    type="button"
                    onClick={copyArticleLink}
                    aria-label="نسخ رابط المقال"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#262626] bg-[#1a1a1a] text-neutral-400 transition-colors hover:border-transparent hover:bg-orange-500 hover:text-white"
                  >
                    <HiLink className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <p className="mt-3 min-h-5 text-sm text-orange-400" aria-live="polite">{copyMessage}</p>
            </section>

            <section className="mt-6 rounded-2xl border border-[#262626] bg-gradient-to-br from-[#161616] to-[#111111] p-8">
              <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="h-24 w-24 rounded-2xl object-cover ring-4 ring-orange-500/20"
                />
                <div className="flex-1 text-center sm:text-right">
                  <span className="text-xs font-semibold uppercase tracking-wider text-orange-500">كاتب المقال</span>
                  <h2 className="mt-1 text-xl font-bold">{article.author.name}</h2>
                  <p className="mb-3 text-sm text-neutral-500">{article.author.role}</p>
                  <p className="text-right text-sm leading-relaxed text-neutral-400">
                    مصور شغوف بمشاركة المعرفة والخبرات في مجال {article.category}.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <aside className="order-1 lg:order-2">
            <div className="space-y-6 text-right lg:sticky lg:top-28">
              {sections.length > 0 && (
                <section className="rounded-2xl border border-[#262626] bg-[#111111] p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10">
                      <HiListBullet className="h-5 w-5 text-orange-500" />
                    </span>
                    <h2 className="font-bold">محتويات المقال</h2>
                  </div>
                  <nav className="space-y-2" aria-label="محتويات المقال">
                    {sections.map((section, index) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="group flex items-center gap-3 rounded-xl p-3 text-neutral-400 transition-all hover:bg-orange-500/5 hover:text-orange-500"
                      >
                        <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#1a1a1a] text-xs font-bold text-neutral-500 transition-colors group-hover:bg-orange-500/10 group-hover:text-orange-500">
                          {index + 1}
                        </span>
                        <span className="text-sm">{section.text}</span>
                      </a>
                    ))}
                  </nav>
                </section>
              )}

              <section className="rounded-2xl border border-[#262626] bg-[#111111] p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-[#0a0a0a] p-4 text-center">
                    <HiClock className="mx-auto mb-2 h-6 w-6 text-orange-500" />
                    <p className="font-bold">{article.readTime}</p>
                    <p className="mt-1 text-xs text-neutral-500">وقت القراءة</p>
                  </div>
                  <div className="rounded-xl bg-[#0a0a0a] p-4 text-center">
                    <HiCalendar className="mx-auto mb-2 h-6 w-6 text-orange-500" />
                    <p className="text-sm font-bold">{formatDate(article.date)}</p>
                    <p className="mt-1 text-xs text-neutral-500">تاريخ النشر</p>
                  </div>
                </div>
              </section>

              <section className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-yellow-500/5 p-6 text-center">
                <HiEnvelope className="mx-auto mb-4 h-10 w-10 text-orange-500" />
                <h2 className="mb-2 font-bold">لا تفوّت جديدنا</h2>
                <p className="mb-4 text-sm text-neutral-400">اشترك للحصول على أحدث المقالات</p>
                <Link
                  to="/blog"
                  className="block w-full rounded-xl bg-orange-500 py-3 text-center font-semibold text-white transition-colors hover:bg-orange-600"
                >
                  تصفح المزيد
                </Link>
              </section>
            </div>
          </aside>
        </div>

        {relatedPosts.length > 0 && (
          <section className="mt-20 border-t border-[#262626] pt-12">
            <div className="mb-10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-500/30 bg-orange-500/10">
                  <HiCamera className="h-6 w-6 text-orange-500" />
                </span>
                <div>
                  <h2 className="text-2xl font-bold">مقالات قد تعجبك</h2>
                  <p className="text-sm text-neutral-500">مقالات أخرى في {article.category}</p>
                </div>
              </div>
              <Link
                to={`/blog?category=${encodeURIComponent(article.category)}`}
                className="hidden items-center gap-2 text-orange-500 transition-colors hover:text-orange-400 sm:flex"
              >
                عرض الكل
                <HiArrowLeft className="h-5 w-5" />
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group relative overflow-hidden rounded-2xl border border-[#262626] bg-[#111111] transition-all duration-500 hover:border-orange-500/30"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent" />
                    <span className="absolute right-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="mb-3 line-clamp-2 font-bold transition-colors group-hover:text-orange-500">
                      {post.title}
                    </h3>
                    <div className="flex items-center justify-between gap-3 text-sm text-neutral-500">
                      <span className="flex min-w-0 items-center gap-2">
                        <img src={post.author.avatar} alt="" className="h-6 w-6 rounded-full object-cover" />
                        <span className="truncate">{post.author.name}</span>
                      </span>
                      <span className="shrink-0">{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  )
}
