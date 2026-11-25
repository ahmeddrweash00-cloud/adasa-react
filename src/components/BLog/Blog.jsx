import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { HiBars3, HiCalendar, HiClock, HiMagnifyingGlass, HiSquares2X2 } from 'react-icons/hi2'
import { categories, posts } from '../../data/articles.jsx'
import Notfound from '../Notfound/Notfound.jsx'

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [viewMode, setViewMode] = useState('grid')
  const categoryOptions = ['جميع المقالات', ...categories.map((category) => category.name)]
  const requestedCategory = searchParams.get('category')
  const activeCategory = categoryOptions.includes(requestedCategory)
    ? requestedCategory
    : 'جميع المقالات'
  const search = searchParams.get('search') ?? ''

  const filteredArticles = posts.filter((article) => {
    const matchesCategory = activeCategory === 'جميع المقالات' || article.category === activeCategory
    const searchableText = [
      article.title,
      article.excerpt,
      article.content,
      article.category,
      article.author.name,
      ...article.tags,
    ].join(' ').toLocaleLowerCase()
    const matchesSearch = searchableText.includes(search.trim().toLocaleLowerCase())
    return matchesCategory && matchesSearch
  })

  const updateSearchParams = (key, value, replace = false) => {
    const nextParams = new URLSearchParams(searchParams)
    if (value) {
      nextParams.set(key, value)
    } else {
      nextParams.delete(key)
    }
    setSearchParams(nextParams, { replace })
  }

  if (search.trim() && filteredArticles.length === 0) {
    return <Notfound description="لم نعثر على مقالات تطابق عبارة البحث. جرّب كلمات أخرى أو تصفح جميع المقالات." />
  }

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white" dir="rtl">
      <section className="relative overflow-hidden px-4 py-16 text-center sm:px-6 md:py-20">
        <div className="absolute inset-0 [background-image:linear-gradient(rgba(38,38,38,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,.5)_1px,transparent_1px)] [background-size:60px_60px]" />
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#f36812]/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#f36812]/30 bg-[#f36812]/10 px-5 py-2 text-sm font-bold text-[#f36812]">
            <span className="flex items-center gap-1" dir="ltr" aria-hidden="true">
             
              <i className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#f36812] [animation-delay:300ms]" />
            </span>
            مدونتنا
          </span>
          <h1 className="mt-6 text-4xl font-bold sm:text-5xl md:text-6xl">
            استكشف <span className="text-[#f36812]">مقالاتنا</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-400">
            اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
          </p>
        </div>
      </section>
      <section className="sticky top-20 z-40 border-b border-[#262626] bg-[#0A0A0A]/95 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.18)] backdrop-blur-xl md:top-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 sm:px-6 lg:flex-row lg:justify-between">
          <label className="relative w-full lg:w-80">
            <HiMagnifyingGlass className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-500" />
            <input
              type="search"
              value={search}
              onChange={(event) => updateSearchParams('search', event.target.value, true)}
              placeholder="ابحث في المقالات..."
              className="h-12 w-full rounded-xl border border-[#262626] bg-[#161616] px-5 text-right text-white outline-none focus:border-[#f36812]/60"
            />
          </label>

          <div className="flex w-full flex-wrap justify-center gap-2 lg:w-auto">
            {categoryOptions.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => updateSearchParams(
                  'category',
                  category === 'جميع المقالات' ? '' : category,
                )}
                className={`rounded-xl px-4 py-2 cursor-pointer text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-[#f36812] text-white'
                    : 'border border-[#262626] bg-[#161616] text-neutral-400 hover:border-[#f36812]/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-neutral-400" aria-live="polite">
              عرض <span className="font-bold text-white">{filteredArticles.length}</span> مقال
            </p>
            <div className="inline-flex w-fit items-center gap-1 rounded-xl border border-[#262626] bg-[#161616] p-1" role="group" aria-label="طريقة عرض المقالات">
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                aria-label="عرض شبكي"
                aria-pressed={viewMode === 'grid'}
                className={`grid h-11 cursor-pointer w-11 place-items-center rounded-lg transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-[#f36812] text-white'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <HiSquares2X2 className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode('list')}
                aria-label="عرض قائمة"
                aria-pressed={viewMode === 'list'}
                className={`cursor-pointer grid h-11 w-11 place-items-center rounded-lg transition-colors ${
                  viewMode === 'list'
                    ? 'bg-[#f36812] text-white'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <HiBars3 className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
          {filteredArticles.length > 0 ? (
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3' : 'flex flex-col gap-6'}>
            {filteredArticles.map((article) => (
              <Link
                key={article.slug}
                to={`/blog/${article.slug}`}
                className="group block overflow-hidden rounded-2xl border border-[#262626] bg-[#161616] transition-colors duration-300 hover:border-[#f36812]/30"
              >
                <article className={viewMode === 'list' ? 'flex flex-col md:flex-row' : 'block'}>
                  <div className={`relative overflow-hidden ${
                    viewMode === 'list' ? 'h-52 md:h-auto md:w-[26%] md:shrink-0' : 'h-52'
                  }`}>
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-[#0a0a0a]/80 px-3 py-1 text-xs font-semibold">
                      {article.category}
                    </span>
                  </div>

                  <div className={`p-6 ${
                    viewMode === 'list' ? 'flex flex-1 flex-col justify-center' : ''
                  }`}>
                    <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-neutral-500">
                      <span className="flex items-center gap-1"><HiClock className="h-4 w-4" /> {article.readTime}</span>
                      <span className="flex items-center gap-1"><HiCalendar className="h-4 w-4" /> {article.date}</span>
                    </div>
                    <h2 className="mb-3 text-xl font-bold leading-tight transition-colors duration-300 group-hover:text-[#f36812]">
                      {article.title}
                    </h2>
                    <p className="mb-5 line-clamp-2 text-sm leading-relaxed text-neutral-400">{article.excerpt}</p>
                    <div className="flex items-center justify-between border-t border-[#262626] pt-4">
                      <div>
                        <p className="text-sm font-medium">{article.author.name}</p>
                        <p className="text-xs text-neutral-500">{article.author.role}</p>
                      </div>
                      <span className="grid h-9 w-9 place-items-center rounded-full border border-[#f36812]/20 text-[#f36812] transition-colors group-hover:bg-[#f36812] group-hover:text-white" aria-hidden="true">
                        ا
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-[#262626] bg-[#161616] px-6 py-12 text-center">
              <p className="text-lg font-bold">لا توجد مقالات مطابقة</p>
              <p className="mt-2 text-sm text-neutral-400">جرّب تغيير التصنيف أو عبارة البحث.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
