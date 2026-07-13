const EXPERIENCE = [
  {
    period: 'Sep 2024-Mar 2026',
    company: 'Divine Software Systems LLC',
    location: 'Fremont, California & Quezon City, Philippines',
    role: 'Software Engineer',
    desc: "I joined as the company's first technical hire and helped shape how the team built and shipped products. Most of my work there was on web and mobile apps, from product UI to implementation and release.",
  },
  {
    period: 'Aug 2023-Aug 2024',
    company: 'Simply Be Found',
    location: 'Colorado, USA',
    role: 'Jr. Laravel Website Developer',
    desc: 'I built responsive websites and reusable components for digital marketing clients using Laravel, HTML, CSS, and JavaScript while working inside a shared team workflow.',
  },
  {
    period: 'Jul 2020-Aug 2023',
    company: 'Corner Route',
    location: 'Philippines',
    role: 'Multimedia Designer',
    desc: 'This was where I spent most of my time doing design work for both print and digital. It also gave me the eye I still use now for layout, hierarchy, and clarity in interfaces.',
  },
  {
    period: 'Mar 2019-Jul 2020',
    company: 'Freelance',
    role: 'Graphic Designer',
    desc: 'I took on freelance design work for logos, marketing materials, and website assets. It was an early part of my career that later carried over into how I think about interface work in code.',
  },
]

export default function About() {
  return (
    <section
      className="relative min-h-[calc(100svh-72px)] overflow-x-hidden bg-[#f0eeea] dark:bg-[#111110]"
    >

      <svg style={{ display: 'none' }} aria-hidden="true">
        <defs>
          <filter id="vblur-filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8 0" />
          </filter>
        </defs>
      </svg>

      <div className="max-w-[1248px] mx-auto grid grid-cols-[338px_1fr] gap-16 items-start p-16 max-[900px]:grid-cols-1 max-[900px]:px-6 max-[900px]:py-10">

        <div className="w-full rounded-2xl overflow-hidden bg-[#2a2a2a] aspect-[4/5]">
          <img
            src="/my-picture.webp"
            alt="Cedrick Espiritu"
            className="w-full h-full object-cover object-top block"
            onError={(e) => { e.currentTarget.style.display = 'none' }}
          />
        </div>

        <div className="flex flex-col gap-8 pt-1">

          <div>
            <div className="relative inline-block">
              <h1 className="text-[clamp(40px,5vw,72px)] font-extrabold leading-none text-black dark:text-white m-0 relative z-10">
                Hello,
              </h1>
              <div
                aria-hidden="true"
                className="about-vblur absolute top-0 left-0 h-[117%] overflow-hidden pointer-events-none whitespace-nowrap opacity-70 z-20"
              >
                <h1 className="text-[clamp(40px,5vw,72px)] font-extrabold leading-none text-black dark:text-white m-0">Hello,</h1>
              </div>
            </div>

            <h1 className="text-[clamp(40px,5vw,72px)] font-extrabold leading-none text-black/30 dark:text-white/30 m-0">
              I'm Cedrick Espiritu
            </h1>

            <div className="text-[clamp(13px,1.3vw,17px)] italic text-black/40 dark:text-white/40 mt-6 m-0">
              /seh · drik · es · pi · ri · tu/
            </div>
          </div>

          <p className="text-[clamp(15px,1.6vw,20px)] leading-[1.65] text-black/60 dark:text-white/60 m-0 max-w-[560px]">
            I like building things that people can actually use. These days that mostly means <strong className="font-bold text-black dark:text-white">web and mobile products</strong>, and I enjoy the process of taking an idea and turning it into something <strong className="font-bold text-black dark:text-white">real, useful, and ready to ship</strong>.
          </p>

          <div className="grid grid-cols-2 gap-10 max-[900px]:grid-cols-1 max-[900px]:gap-6">
            <div>
              <p className="text-[clamp(15px,1.6vw,20px)] font-bold text-black dark:text-white mb-3 m-0">What I do</p>
              <p className="text-[clamp(14px,1.4vw,18px)] leading-[1.65] text-black/60 dark:text-white/60 m-0">
                Most of my work now is around <strong className="font-bold text-black dark:text-white">dashboards, internal tools, client portals, ecommerce, and mobile apps</strong>. I care a lot about making things feel <strong className="font-bold text-black dark:text-white">clear, stable, and well put together</strong>, not just technically working.
              </p>
            </div>
            <div>
              <p className="text-[clamp(15px,1.6vw,20px)] font-bold text-black dark:text-white mb-3 m-0">Out of office</p>
              <p className="text-[clamp(14px,1.4vw,18px)] leading-[1.65] text-black/60 dark:text-white/60 m-0">
               When I'm not building things, I love traveling, playing video games, playing guitar, riding my scooter, and capturing moments through photography.
              </p>
            </div>
          </div>

          <div className="flex gap-5 items-center">
            <a href="https://www.linkedin.com/in/cedrick-espiritu" target="_blank" rel="noreferrer" aria-label="LinkedIn"
              className="text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors duration-200">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="mailto:cedrickespiritu070@gmail.com" aria-label="Email"
              className="text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors duration-200">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>

        </div>
      </div>

      <div className="w-full overflow-hidden">
        <div
          className="flex gap-1 will-change-transform"
          style={{ animation: 'marquee 31s linear infinite' }}
        >
          {[...['pic-01','pic-02','pic-03','pic-04','pic-05','pic-06','pic-07','pic-08','pic-09'],
             ...['pic-01','pic-02','pic-03','pic-04','pic-05','pic-06','pic-07','pic-08','pic-09']].map((name, i) => (
            <div
              key={i}
              className="relative bg-[#2a2a2a] w-[280px] shrink-0 overflow-hidden aspect-[4/5]"
            >
              <img
                src={`/my-pics/${name}.webp`}
                alt={name}
                className="w-full h-full object-cover block"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-2556px); }
        }
      `}</style>

      <div className="max-w-[1248px] mx-auto grid grid-cols-[260px_1fr] px-16 py-20 max-[900px]:grid-cols-1 max-[900px]:gap-6 max-[900px]:px-6 max-[900px]:py-10">
        <span className="text-[clamp(15px,1.6vw,20px)] font-bold text-black dark:text-white pt-0.5">Experience</span>
        <div className="flex flex-col">
          {EXPERIENCE.map((job, i) => (
            <div
              key={i}
              className="grid grid-cols-[182px_1fr] gap-8 pb-[52px] max-[900px]:grid-cols-1 max-[900px]:gap-1"
            >
              <span className="text-[clamp(14px,1.4vw,18px)] text-black/45 dark:text-white/45 pt-0.5 tabular-nums">{job.period}</span>
              <div>
                <p className="text-[clamp(15px,1.6vw,20px)] font-bold text-black dark:text-white mb-1 m-0">{job.company}</p>
                <p className="text-[clamp(14px,1.4vw,18px)] text-black/45 dark:text-white/45 mb-0.5 m-0">{job.role}</p>
                {'location' in job && <p className="text-[clamp(13px,1.2vw,16px)] text-black/30 dark:text-white/30 mb-3 m-0">{(job as any).location}</p>}
                <p className="text-[clamp(14px,1.4vw,18px)] leading-[1.65] text-black/45 dark:text-white/45 m-0">{job.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
