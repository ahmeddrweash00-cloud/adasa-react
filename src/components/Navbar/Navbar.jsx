import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HiBars3, HiMagnifyingGlass, HiXMark } from 'react-icons/hi2'

const links = [
  { label: 'الرئيسية', href: '/' },
  { label: 'المدونة', href: '/blog' },
  { label: 'من نحن', href: '/about' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#262626] py-2 bg-[#0A0A0A]/95 text-white backdrop-blur-xl" dir="rtl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link className="group flex items-center gap-3" to="/" aria-label="عدسة - الصفحة الرئيسية">
            <img className="h-12 w-12 rounded-xl object-cover" src="/logo-GdqARQRt.png" alt="" />
            <div className="flex flex-col items-end leading-tight">
              <strong className="text-xl">عدسة</strong>
              <span className="mt-1 hidden text-xs tracking-wide text-[#f36812]/80 sm:block">
                عالم التصوير الفوتوغرافي
              </span>
            </div>
          </Link>

          <nav className="hidden items-center rounded-full border border-[#262626] bg-[#161616] p-1.5 md:flex" aria-label="التنقل الرئيسي">
            {links.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                end={link.href === '/'}
                className={({ isActive }) => `rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? 'bg-[#f36812] text-white'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex" dir="ltr">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl border border-transparent px-3 py-3 text-neutral-500 transition-colors duration-300 hover:border-[#262626] hover:bg-[#161616] hover:text-[#f36812]"
              aria-label="البحث"
            >
              <HiMagnifyingGlass className="h-5 w-5" />
              <span>Search</span>
            </button>
            <Link
              to="/blog"
              className="rounded-full bg-[#f36812] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#ff7a2b]"
            >
              ابدأ القراءة
            </Link>
          </div>

          <button
            type="button"
            className="grid h-12 w-12 place-items-center rounded-xl border border-transparent text-neutral-400 transition-colors md:hidden"
            aria-label={isOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <HiXMark className="h-6 w-6" /> : <HiBars3 className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <nav className="mb-4 rounded-2xl border border-[#262626] bg-[#161616] p-2 md:hidden" dir="rtl" aria-label="قائمة الهاتف">
            {links.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                end={link.href === '/'}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `block rounded-xl px-4 py-3 text-sm font-medium ${
                  isActive
                    ? 'border border-[#f36812]/30 bg-[#f36812]/10 text-[#f36812]'
                    : 'text-neutral-400'
                }`}
              >
                {link.label}
              </NavLink>
            ))}
            <Link to="/blog" onClick={() => setIsOpen(false)} className="mt-2 block rounded-xl bg-[#f36812] px-4 py-3 text-center text-sm font-bold text-white">
              ابدأ القراءة
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
