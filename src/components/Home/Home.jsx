import {
  HiArrowLeft,
  HiClock,
  HiEnvelope,
  HiFolder,
  HiInformationCircle,
  HiNewspaper,
  HiPencil,
  HiStar,
  HiUser,
  HiUsers,
} from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import { categories as articleCategories, posts } from '../../data/articles.jsx'

const heroStats = [
  { value: String(posts.length), label: 'مقالة', icon: HiNewspaper },
  { value: '10 ألف+', label: 'قارئ', icon: HiUsers },
  { value: String(articleCategories.length), label: 'تصنيفات', icon: HiFolder },
  { value: '6', label: 'كاتب', icon: HiPencil },
]

const categoryIcons = {
  إضاءة: HiPencil,
  بورتريه: HiUser,
  'مناظر طبيعية': HiStar,
  تقنيات: HiFolder,
  معدات: HiNewspaper,
}

const categories = articleCategories.map((category) => ({
  ...category,
  icon: categoryIcons[category.name],
}))

const featuredArticles = posts.filter((article) => article.featured).slice(0, 3)
const latestArticles = posts
  .filter((article) => !article.featured)
  .sort((a, b) => b.date.localeCompare(a.date))
  .slice(0, 3)

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#0A0A0A] text-white" dir="rtl">
      <section className="relative isolate min-h-[620px] overflow-hidden border-b border-slate-800/40 px-4 py-20 sm:px-6 md:min-h-[680px] md:py-24">
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(38,38,38,.5) 1px, transparent 1px), linear-gradient(90deg,rgba(38,38,38,.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-[#f36812]/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#f36812]/30 bg-[#f36812]/10 px-5 py-2 text-sm font-medium text-neutral-300">
            <i className="h-2 w-2 animate-pulse rounded-full bg-[#f36812]" />
            مرحباً بك في عدسة
          </span>

          <h1 className="mt-8 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            اكتشف <span className="text-[#f36812]">فن</span>
            <br />
            التصوير الفوتوغرافي
          </h1>
          <p className="mx-auto mb-10 mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400 md:text-xl">
            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
          </p>

          <div className="mb-14 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="#latest" className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#f36812] px-8 font-bold transition-colors hover:bg-[#ff7a2b]">
              استكشف المقالات
              <HiArrowLeft className="h-5 w-5" />
            </a>
            <a href="#categories" className="inline-flex h-14 items-center justify-center gap-3 rounded-full border border-slate-700 px-8 font-bold text-neutral-300 transition-colors hover:border-[#f36812] hover:text-[#f36812]">
              <HiInformationCircle className="h-5 w-5" />
              اعرف المزيد
            </a>
          </div>

          <div className="mx-auto grid max-w-3xl grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {heroStats.map(({ value, label, icon: Icon }) => (
              <article key={label} className="rounded-2xl border border-slate-800 bg-[#161616]/80 p-4 transition-colors duration-300 hover:border-[#f36812]/40">
                <Icon className="mx-auto mb-2 h-6 w-6 text-[#f36812]" />
                <strong className="block text-2xl font-bold text-[#f36812] md:text-3xl">{value}</strong>
                <span className="mt-1 block text-sm text-neutral-500">{label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0A0A0A] px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#f36812]/30 bg-[#f36812]/10 px-4 py-1.5 text-xs font-bold text-[#f36812]">
                <span className="flex items-center gap-1" dir="ltr" aria-hidden="true">
 
                  <i className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#f36812]/60 [animation-delay:150ms]" />
                  <i className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#f36812] [animation-delay:300ms]" />
                </span>
                مميز
              </span>
              <h2 className="text-3xl font-bold sm:text-4xl">مقالات مختارة</h2>
              <p className="mt-3 text-neutral-400">محتوى منتقى لبدء رحلة تعلمك</p>
            </div>
            <Link to="/blog" className="inline-flex items-center gap-2 rounded-xl bg-[#f36812] px-5 py-3 text-sm font-bold hover:bg-[#ff7a2b]">
              عرض الكل
              <HiArrowLeft className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {featuredArticles.map((article) => (
              <Link key={article.slug} to={`/blog/${article.slug}`} className="group block">
                <article className="overflow-hidden rounded-3xl border border-[#262626] transition-colors duration-500 hover:border-[#f36812]/30">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative h-72 overflow-hidden md:order-1 md:h-[360px]">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[#f36812] to-[#f59e0b] px-3 py-1.5 text-xs font-bold">
                        <HiStar className="h-3.5 w-3.5" />
                        مميز
                      </span>
                    </div>
                    <div className="flex flex-col justify-center bg-[#161616] p-6 md:order-2 md:p-8">
                      <div className="mb-4 flex items-center gap-3">
                        <span className="rounded-full border border-[#f36812]/20 bg-[#f36812]/10 px-3 py-1 text-xs font-bold text-[#f36812]">{article.category}</span>
                        <span className="flex items-center gap-1 text-sm text-neutral-500"><HiClock className="h-4 w-4" /> {article.readTime}</span>
                      </div>
                      <h3 className="text-2xl font-bold leading-tight transition-colors duration-300 group-hover:text-[#f36812]">{article.title}</h3>
                      <p className="mb-6 mt-4 line-clamp-3 leading-relaxed text-neutral-400">{article.excerpt}</p>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="relative shrink-0">
                            <img
                              src={article.author.avatar}
                              alt={article.author.name}
                              className="h-12 w-12 rounded-full object-cover ring-2 ring-[#262626]"
                            />
                            <span className="absolute -bottom-1 -left-1 h-4 w-4 rounded-full border-2 border-[#161616] bg-[#f36812]" />
                          </div>
                          <div>
                            <p className="text-sm font-bold">{article.author.name}</p>
                            <p className="text-xs text-neutral-500">{article.date}</p>
                          </div>
                        </div>
                        <span className="inline-flex items-center gap-2 text-sm font-bold text-[#f36812]">
                          اقرأ المقال
                          <HiArrowLeft className="h-5 w-5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="categories" className="px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#f36812]/30 bg-[#f36812]/10 px-4 py-1.5 text-xs font-bold text-[#f36812]">
            <span className="flex items-center gap-1" dir="ltr" aria-hidden="true">
      
              <i className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#f36812]/60 [animation-delay:100ms]" />
              <i className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#f36812] [animation-delay:350ms]" />
            </span>
            التصنيفات
          </span>
          <h2 className="mt-6 text-3xl font-extrabold sm:text-5xl">استكشف حسب الموضوع</h2>
          <p className="mt-4 text-slate-400">اعثر على محتوى مصمم حسب اهتماماتك</p>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {categories.map(({ name, count, icon: Icon }) => (
              <Link key={name} to={`/blog?category=${encodeURIComponent(name)}`} className="group relative overflow-hidden rounded-2xl border border-[#262626] bg-[#161616] p-6 text-right transition-colors duration-500 hover:border-[#f36812]/30">
                <div className="absolute inset-0 bg-gradient-to-br from-[#f36812] to-[#f59e0b] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative z-10">
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-[#f36812]/20 bg-[#f36812]/10 text-[#f36812] group-hover:border-transparent group-hover:bg-white/20 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mb-1 text-lg font-bold">{name}</h3>
                  <p className="text-sm text-neutral-500 group-hover:text-white/80">{count} مقالة</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="latest" className="py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#f36812]/30 bg-[#f36812]/10 px-4 py-1.5 text-xs font-bold text-[#f36812]">
                <span className="flex items-center gap-1" dir="ltr" aria-hidden="true">
 
                  <i className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#f36812]/60 [animation-delay:150ms]" />
                  <i className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#f36812] [animation-delay:300ms]" />
                </span>
                الأحدث
              </span>
              <h2 className="text-3xl font-extrabold sm:text-5xl">أحدث المقالات</h2>
              <p className="mt-3 text-slate-400">محتوى جديد طازج من المطبعة</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {latestArticles.map((article) => (
              <Link key={article.slug} to={`/blog/${article.slug}`} className="group overflow-hidden rounded-2xl border border-[#262626] bg-[#161616] transition-colors duration-300 hover:border-[#f36812]/30">
                <article>
                  <div className="relative h-52 overflow-hidden">
                    <img src={article.image} alt={article.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-[#0a0a0a]/80 px-3 py-1 text-xs font-semibold">{article.category}</span>
                  </div>
                  <div className="p-6">
                    <div className="mb-3 flex items-center gap-3 text-sm text-neutral-500">
                      <span className="flex items-center gap-1"><HiClock className="h-4 w-4" /> {article.readTime}</span>
                      <span>{article.date}</span>
                    </div>
                    <h3 className="mb-3 text-xl font-bold leading-tight transition-colors duration-300 group-hover:text-[#f36812]">{article.title}</h3>
                    <p className="mb-5 line-clamp-2 text-sm leading-relaxed text-neutral-400">{article.excerpt}</p>
                    <div className="flex items-center justify-between border-t border-[#262626] pt-4">
                      <div><p className="text-sm font-medium">{article.author.name}</p><p className="text-xs text-neutral-500">{article.author.role}</p></div>
                      <span className="grid h-8 w-8 place-items-center rounded-full border border-[#f36812]/20 bg-[#f36812]/10 text-[#f36812]"><HiArrowLeft className="h-4 w-4" /></span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-4xl rounded-[32px] border border-slate-800/80 bg-[#161616] px-6 py-14 text-center md:px-12">
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-[#f36812] text-white"><HiEnvelope className="h-7 w-7" /></span>
          <h2 className="mt-6 text-3xl font-extrabold sm:text-5xl">اشترك في <span className="text-[#f36812]">نشرتنا الإخبارية</span></h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني.</p>
          <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
            <input required type="email" placeholder="أدخل بريدك الإلكتروني" className="h-14 flex-1 rounded-2xl border border-slate-800 bg-[#0A0A0A] px-6 text-right text-white outline-none focus:border-[#f36812]" />
            <button type="submit" className="h-14 rounded-2xl bg-[#f36812] px-8 font-bold hover:bg-[#ff7a2b]">اشترك الآن</button>
          </form>
        </div>
      </section>
    </main>
  )
}
