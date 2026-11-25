import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { categories } from '../../data/articles.jsx'
import { siteInfo } from '../../data/siteData.jsx'

export default function Footer() {
  return (
    <footer className="border-t border-[#202b3e] bg-[#161616] text-white" dir="rtl">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-9 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.35fr_0.7fr_0.7fr_1.35fr] lg:gap-12 lg:py-16">
        <section>
          <Link className="group flex w-fit flex-row-reverse items-center gap-2 transition-transform duration-300 hover:-translate-y-[3px]" to="/">
            <strong className="text-2xl">عدسة</strong>
            <b className="order-2 grid h-12 w-12 place-items-center rounded-xl bg-[#f36812] text-2xl" aria-hidden="true">ع</b>
          </Link>
          <p className="my-6 max-w-sm leading-8 text-[#9ca3af]">
            مدونة متخصصة في فن التصوير الفوتوغرافي،
            نشارك معكم أسرار المحترفين ونصائح عملية
            لتطوير مهاراتكم.
          </p>
          <div className="flex gap-2" aria-label="روابط التواصل الاجتماعي">
            <a className="grid h-11 w-11 place-items-center rounded-2xl border border-[#273449] bg-[#161616] text-[#9ca3af] transition-all duration-300 hover:scale-110 hover:border-[#f36812] hover:bg-[#f36812] hover:text-white active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f36812]" href={siteInfo.social.youtube} target="_blank" rel="noreferrer" aria-label="يوتيوب"><FaYoutube /></a>
            <a className="grid h-11 w-11 place-items-center rounded-2xl border border-[#273449] bg-[#161616] text-[#9ca3af] transition-all duration-300 hover:scale-110 hover:border-[#f36812] hover:bg-[#f36812] hover:text-white active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f36812]" href={siteInfo.social.linkedin} target="_blank" rel="noreferrer" aria-label="لينكدإن"><FaLinkedinIn /></a>
            <a className="grid h-11 w-11 place-items-center rounded-2xl border border-[#273449] bg-[#161616] text-[#9ca3af] transition-all duration-300 hover:scale-110 hover:border-[#f36812] hover:bg-[#f36812] hover:text-white active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f36812]" href={siteInfo.social.github} target="_blank" rel="noreferrer" aria-label="جيت هاب"><FaGithub /></a>
            <a className="grid h-11 w-11 place-items-center rounded-2xl border border-[#273449] bg-[#161616] text-[#9ca3af] transition-all duration-300 hover:scale-110 hover:border-[#f36812] hover:bg-[#f36812] hover:text-white active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f36812]" href={siteInfo.social.twitter} target="_blank" rel="noreferrer" aria-label="إكس"><FaXTwitter /></a>
          </div>
        </section>

        <section className="flex flex-col items-start pt-2">
          <h3 className="mb-5 text-lg font-bold">استكشف</h3>
          <Link to="/" className="group mb-4 flex items-center gap-2 text-[#9ca3af] transition-colors duration-300 hover:text-[#f36812] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f36812]"><span className="w-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:w-3 group-hover:opacity-100" aria-hidden="true">›</span><span>الرئيسية</span></Link>
          <Link to="/blog" className="group mb-4 flex items-center gap-2 text-[#9ca3af] transition-colors duration-300 hover:text-[#f36812] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f36812]"><span className="w-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:w-3 group-hover:opacity-100" aria-hidden="true">›</span><span>المدونة</span></Link>
          <Link to="/about" className="group mb-4 flex items-center gap-2 text-[#9ca3af] transition-colors duration-300 hover:text-[#f36812] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f36812]"><span className="w-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:w-3 group-hover:opacity-100" aria-hidden="true">›</span><span>من نحن</span></Link>
        </section>

        <section className="flex flex-col items-start pt-2">
          <h3 className="mb-5 text-lg font-bold">التصنيفات</h3>
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/blog?category=${encodeURIComponent(category.name)}`}
              className="group mb-4 flex items-center gap-2 text-[#9ca3af] transition-colors duration-300 hover:text-[#f36812] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f36812]"
            >
              <span className="w-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:w-3 group-hover:opacity-100" aria-hidden="true">‹</span>
              <span>{category.name}</span>
            </Link>
          ))}
        </section>

        <section className="pt-2">
          <h3 className="mb-5 text-lg font-bold">ابقَ على اطلاع</h3>
          <p className="mb-5 max-w-sm leading-8 text-[#9ca3af]">اشترك للحصول على أحدث المقالات والتحديثات.</p>
          <form className="flex flex-col gap-3" onSubmit={(event) => event.preventDefault()}>
            <input className="h-12 rounded-full border border-[#161616] bg-[#182232] px-5 text-right text-white outline-none transition-colors duration-300 focus:border-[#f36812] focus:ring-2 focus:ring-[#f36812]/30" type="email" placeholder="أدخل بريدك الإلكتروني" aria-label="البريد الإلكتروني" />
            <button className="h-12 cursor-pointer rounded-full bg-[#f36812] font-bold text-white transition-all duration-300 hover:-translate-y-[3px] hover:bg-[#ff7a2b] active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f36812]" type="submit">اشترك</button>
          </form>
        </section>
      </div>

      <div className="mx-auto flex min-h-18 max-w-7xl flex-col items-center justify-center gap-3 border-t border-[#202b3e] px-4 py-5 text-sm text-[#7f899a] sm:flex-row sm:justify-between sm:px-6">
        <p>© 2026 عدسة. صنع بكل <span className="text-[#f36812] text-xl font-bold" aria-label="حب">♥</span> جميع الحقوق محفوظة.</p>
        <div className="flex gap-6">
          <a className="transition-colors duration-300 hover:text-[#f36812] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f36812]" href="mailto:hello@adasah.com?subject=سياسة%20الخصوصية">سياسة الخصوصية</a>
          <a className="transition-colors duration-300 hover:text-[#f36812] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f36812]" href="mailto:hello@adasah.com?subject=شروط%20الخدمة">شروط الخدمة</a>
        </div>
      </div>
    </footer>
  )
}