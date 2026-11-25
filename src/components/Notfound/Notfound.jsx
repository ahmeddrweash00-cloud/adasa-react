import { HiFaceFrown, HiHome, HiNewspaper } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

export default function Notfound({ description = 'الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار الصحيح.' }) {
  return (
    <main className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden bg-[#0a0a0a] px-4 py-16 text-center" dir="rtl">
      <div
        className="absolute inset-0 [background-image:linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] [background-size:60px_60px]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 opacity-40" aria-hidden="true">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-orange-500/20 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 animate-pulse rounded-full bg-yellow-500/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-lg">
        <div className="relative mb-6">
          <h1 className="bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 bg-clip-text text-[140px] font-black leading-none text-transparent select-none md:text-[180px]">
            404
          </h1>
          <span className="pointer-events-none absolute inset-0 text-[140px] font-black leading-none text-orange-500/20 blur-2xl select-none md:text-[180px]" aria-hidden="true">
            404
          </span>
        </div>

        <div className="relative mx-auto mb-8 grid h-28 w-28 place-items-center rounded-full border border-orange-500/30 bg-gradient-to-br from-orange-500/20 to-yellow-500/20">
          <HiFaceFrown className="h-14 w-14 text-orange-500" aria-hidden="true" />
          <span className="absolute -right-2 -top-2 h-5 w-5 rotate-12 animate-bounce rounded-lg bg-orange-500" />
          <span className="absolute -bottom-1 -left-3 h-4 w-4 animate-pulse rounded-full bg-yellow-500" />
        </div>

        <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">عفواً! الصفحة غير موجودة</h2>
        <p className="mb-8 text-lg text-neutral-400">{description}</p>

        <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-bold text-white transition-colors hover:bg-orange-600"
            to="/"
          >
            <HiHome className="h-5 w-5" aria-hidden="true" />
            الذهاب للرئيسية
          </Link>
          <Link
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#262626] bg-[#161616] px-6 py-3 font-bold text-white transition-colors hover:border-orange-500/50"
            to="/blog"
          >
            <HiNewspaper className="h-5 w-5" aria-hidden="true" />
            تصفح المقالات
          </Link>
        </div>

        <div className="border-t border-[#262626] pt-8">
          <p className="mb-4 text-sm text-neutral-500">قد تجد هذه مفيدة:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link className="font-medium text-orange-500 hover:text-orange-400 hover:underline" to="/blog">المدونة</Link>
            <span className="text-neutral-600" aria-hidden="true">•</span>
            <Link className="font-medium text-orange-500 hover:text-orange-400 hover:underline" to="/about">من نحن</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
