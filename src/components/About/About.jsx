import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { HiArrowPath, HiBolt, HiBookOpen, HiCheck, HiHandRaised, HiNewspaper, HiPencil, HiUserGroup, HiViewfinderCircle } from 'react-icons/hi2'

const stats = [
  { value: '+2 مليون', label: 'قارئ شهرياً', icon: HiUserGroup },
  { value: '+500', label: 'مقالة منشورة', icon: HiNewspaper },
  { value: '+50', label: 'كاتب خبير', icon: HiPencil },
  { value: '+15', label: 'تصنيف', icon: HiBookOpen },
]

const values = [
  { title: 'الجودة أولاً', description: 'محتوى مدروس ومكتوب بخبرة', icon: HiViewfinderCircle, featured: false },
  { title: 'تركيز عملي', description: 'أمثلة واقعية يمكن تطبيقها اليوم', icon: HiBolt, featured: false },
  { title: 'المجتمع', description: 'نتعلم معاً من المصورين', icon: HiHandRaised, featured: false },
  { title: 'دائماً محدث', description: 'أحدث الاتجاهات وأفضل الممارسات', icon: HiArrowPath, featured: false },
]

const team = [
  { name: 'سالم أحمد', role: 'مصور محترف', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&crop=face' },
  { name: 'محمد علي', role: 'مصور بورتريه', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&h=160&fit=crop&crop=face' },
  { name: 'إبراهيم حسن', role: 'مصور طبيعة', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=160&h=160&fit=crop&crop=face' },
  { name: 'داود خالد', role: 'مدرب تصوير', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=160&h=160&fit=crop&crop=face' },
  { name: 'ليث محمود', role: 'فنان بصري', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=160&h=160&fit=crop&crop=face' },
  { name: 'جمال عبدالله', role: 'مصور ومراجع تقني', image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=160&h=160&fit=crop&crop=face' },
  { name: 'خالد الفيصل', role: 'مصور فلكي', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=160&h=160&fit=crop&crop=face' },
  { name: 'سامي الحربي', role: 'خبير تعديل صور', image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=160&h=160&fit=crop&crop=face' },
  { name: 'رامي الخطيب', role: 'مصور ماكرو', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&crop=face' },
  { name: 'خالد الفيصل', role: 'مصور فلكي', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=160&h=160&fit=crop&crop=face' },
  { name: 'نادر سعيد', role: 'مصور شوارع', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=160&h=160&fit=crop&crop=face' },
  { name: 'منصور الزهراني', role: 'مصور زفاف', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=160&h=160&fit=crop&crop=face' },
  { name: 'عمر الراشد', role: 'مصور حياة برية', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&h=160&fit=crop&crop=face' },
  { name: 'فهد السبيعي', role: 'مصور ميدان', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=160&h=160&fit=crop&crop=face' },
  { name: 'كرم الفهد', role: 'خبير تقني', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=160&h=160&fit=crop&crop=face' },
]

export default function About() {
  return (
    <>
      <section id="about" className="bg-[#0A0A0A] text-white" dir="rtl">
        <div className="rounded-[32px] p-4 [background-image:radial-gradient(circle_at_10%_40%,rgba(243,104,18,0.05),transparent_28%),linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:40px_40px] sm:p-6 md:p-10 md:[background-size:64px_64px]">
          <div className="mx-auto flex max-w-5xl flex-col items-center px-4 py-4 text-center">
            <span className="mb-8 flex items-center gap-2 rounded-full border border-[#f36812]/30 bg-[#f36812]/10 px-5 py-2 text-sm font-bold text-[#f36812]">
              <span className="flex items-center gap-1" aria-hidden="true">
               
                <i className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#f36812]/60 [animation-delay:100ms]" />
                <i className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#f36812] [animation-delay:350ms]" />
              </span>
              من نحن
            </span>

            <h1 className="text-3xl font-extrabold leading-[1.35] sm:text-4xl md:text-5xl lg:text-6xl">
              مهمتنا هي <span className="text-[#f36812]">الإعلام والإلهام</span>
            </h1>

            <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-400 sm:mt-8 sm:text-base sm:leading-8 md:text-lg md:leading-9">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.
            </p>

            <div className="mt-10 grid w-full grid-cols-2 gap-3 sm:mt-12 md:grid-cols-4">
              {stats.map(({ value, label, icon: Icon }) => (
                <article key={label} className="flex min-h-36 flex-col items-center justify-center rounded-2xl border border-slate-800 bg-[#161616] px-2 py-4 sm:min-h-40 md:rounded-3xl">
                  <Icon className="mb-4 h-8 w-8 text-[#f36812]" />
                  <strong className="text-3xl font-bold text-[#f36812]">{value}</strong>
                  <span className="mt-2 text-sm text-slate-500">{label}</span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-800/70 bg-[#161616] px-4 py-12 text-white sm:px-6 sm:py-16 md:py-20" dir="rtl">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-extrabold leading-[1.35] sm:text-4xl md:text-5xl">
            <span className="text-[#f36812]">|</span> قيمنا <span className="text-[#f36812]">|</span>
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">المبادئ التي توجه كل ما نقوم بإنشائه</p>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map(({ title, description, icon: Icon, featured }) => (
              <article
                key={title}
                className={`group flex flex-col items-center justify-center rounded-3xl border py-3 transition-colors duration-300 hover:border-[#f36812]/60 hover:bg-[#151514] ${featured ? 'border-[#f36812]/40 bg-[#2a1a12]' : 'border-slate-800 bg-[#161616]'}`}
              >
                <Icon className="mb-5 h-10 w-10 text-[#f36812]" />
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0A0A0A] px-4 py-12 text-white sm:px-6 sm:py-16 md:py-20" dir="rtl">
        <div className="mx-auto max-w-6xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#f36812]/30 bg-[#f36812]/10 px-5 py-2 text-sm font-bold text-[#f36812]">
            <span className="flex items-center gap-1" aria-hidden="true" dir="ltr">
              <i className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#f36812]/30" />
              <i className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#f36812]/60 [animation-delay:150ms]" />
              <i className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#f36812] [animation-delay:300ms]" />
            </span>
            فريقنا
          </span>
          <h2 className="mt-6 text-3xl font-extrabold leading-[1.35] sm:text-4xl md:text-5xl">
            تعرف على <span className="text-[#f36812]">كتابنا</span>
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">فريقنا من المصورين والكتاب ذوي الخبرة نساهم في مشاركة المعرفة مع المجتمع</p>

          <div className="mt-12 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
            {team.map((member) => (
              <article
                key={`${member.name}-${member.role}`}
                className="group flex min-h-64 flex-col items-center justify-center rounded-2xl border border-slate-800/70 bg-[#161616] p-6 text-center transition-colors duration-300 hover:border-[#f36812]/30"
              >
                <div className="relative mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-24 w-24 rounded-full object-cover ring-4 ring-[#262626] transition-all duration-300 group-hover:ring-[#f36812]/30"
                  />
                  <span className="absolute -bottom-1 -right-1 grid h-6 w-6 place-items-center rounded-full border-2 border-[#161616] bg-[#f36812] text-white">
                    <HiCheck className="h-3 w-3" />
                  </span>
                </div>
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-[#f36812]">{member.role}</p>
                <div className="mt-5 flex justify-center gap-3">
                  <a className="grid h-9 w-9 place-items-center rounded-xl bg-[#262626] text-neutral-500 transition-colors hover:bg-[#f36812] hover:text-white" href="#" aria-label={`${member.name} على إكس`}><FaXTwitter /></a>
                  <a className="grid h-9 w-9 place-items-center rounded-xl bg-[#262626] text-neutral-500 transition-colors hover:bg-neutral-700 hover:text-white" href="#" aria-label={`${member.name} على جيت هاب`}><FaGithub /></a>
                  <a className="grid h-9 w-9 place-items-center rounded-xl bg-[#262626] text-neutral-500 transition-colors hover:bg-blue-600 hover:text-white" href="#" aria-label={`${member.name} على لينكدإن`}><FaLinkedinIn /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#d94f10] via-[#f36812] to-[#f59e0b] px-4 py-16 sm:px-6 sm:py-20" dir="rtl">
        <div className="absolute inset-0 opacity-30" aria-hidden="true">
          <div className="absolute right-10 top-10 h-64 w-64 rounded-full bg-white/20 blur-[100px]" />
          <div className="absolute bottom-10 left-10 h-48 w-48 rounded-full bg-white/20 blur-[80px]" />
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            لديك أسئلة؟ دعنا نتحدث!
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
            نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة،
            أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:hello@adasah.com"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0a0a0a] px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-900"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              تواصل معنا
            </a>

            <a
              href="#blog"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-[#0a0a0a]"
            >
              تصفح المقالات
            </a>
          </div>
        </div>
      </section>

    </>
  )
}
