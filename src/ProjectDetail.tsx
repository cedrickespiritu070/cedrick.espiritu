import { useParams, Link } from 'react-router-dom'
import { useState, useEffect, useRef, useCallback } from 'react'
import { CARDS } from './WorkCards'
import type { BadgeType } from './WorkCards'

const BADGE_CLASSES: Record<BadgeType, string> = {
  SHIPPED:  'bg-black/7 dark:bg-white/10',
  ACQUIRED: 'bg-black/7 dark:bg-white/10',
  CONCEPT:  'bg-black/7 dark:bg-white/10',
  WINNER:   'bg-[rgba(255,200,0,0.2)]',
}

const META_LABEL = "text-[13px] font-bold text-black dark:text-white"
const META_VALUE = "text-[13px] text-black/45 dark:text-white/45"

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = CARDS.find((c) => c.slug === slug)

  const images: string[] = [
    ...(project?.thumbnail ? [project.thumbnail] : []),
    ...(project?.images ?? []),
  ]
  const hasImages = images.length > 0

  const [current, setCurrent] = useState(0)
  const [hovered, setHovered] = useState(false)
  const dragStart = useRef<number>(0)
  const thumbsRef = useRef<HTMLDivElement>(null)

  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length])

  const onPointerDown = (e: React.PointerEvent) => { dragStart.current = e.clientX }
  const onPointerUp   = (e: React.PointerEvent) => {
    const delta = e.clientX - dragStart.current
    if (Math.abs(delta) > 40) delta < 0 ? next() : prev()
  }

  const scrollThumbs = (dir: 'left' | 'right') => {
    thumbsRef.current?.scrollBy({ left: dir === 'right' ? 240 : -240, behavior: 'smooth' })
  }

  useEffect(() => {
    const el = thumbsRef.current?.children[current] as HTMLElement | undefined
    el?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }, [current])

  useEffect(() => {
    if (!hasImages) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [prev, next, hasImages])

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-[16px] text-black/45 dark:text-white/45 bg-[#f1f1ee] dark:bg-[#111110]">
        <p>Project not found.</p>
        <Link to="/" className="text-black dark:text-white underline inline-flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M12 5l-7 7 7 7"/></svg>
          Back to home
        </Link>
      </div>
    )
  }

  return (
    <article className="bg-[#f1f1ee] dark:bg-[#111110] min-h-svh relative">

      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <filter id="pd-grain" x="-8%" y="-8%" width="116%" height="116%">
            <feTurbulence type="fractalNoise" baseFrequency="0.82" numOctaves="5" seed="5" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      <div className="max-w-[1400px] mx-auto px-12 pt-12 pb-[100px] max-[900px]:px-6 max-[900px]:pt-8">

        <Link to="/" className="inline-flex items-center gap-2 mb-9 text-[13px] font-semibold text-black/40 dark:text-white/40 tracking-[0.2px] transition-colors duration-200 hover:text-black dark:hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M12 5l-7 7 7 7"/></svg>
          Back
        </Link>

        <div className="grid grid-cols-[6fr_1px_4fr] items-start max-[900px]:grid-cols-1">

          {/* LEFT */}
          <div className="flex flex-col gap-6 pr-14 min-w-0 max-[900px]:pr-0">

            {/* Slider */}
            <div
              className={`relative w-full aspect-video rounded-2xl overflow-hidden shrink-0 active:cursor-grabbing ${hasImages ? 'cursor-grab' : ''}`}
              style={{ background: project.bgColor }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onPointerDown={hasImages ? onPointerDown : undefined}
              onPointerUp={hasImages ? onPointerUp : undefined}
            >
              {hasImages ? (
                <>
                  {images.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`${project.title} screenshot ${i + 1}`}
                      draggable={false}
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[450ms] ease-out pointer-events-none"
                      style={{ opacity: i === current ? 1 : 0 }}
                    />
                  ))}
                  <span className="absolute bottom-3 right-[14px] text-[11px] font-bold tracking-[0.5px] text-black/50 dark:text-white/50 bg-white/55 dark:bg-black/40 backdrop-blur-[6px] px-[10px] py-[3px] rounded-full">
                    {current + 1} / {images.length}
                  </span>
                  {images.length > 1 && (
                    <>
                      <button
                        className={`absolute top-1/2 -translate-y-1/2 left-3 w-[38px] h-[38px] rounded-full border-[1.5px] border-black/12 dark:border-white/12 bg-white/70 dark:bg-white/15 backdrop-blur-[6px] text-[20px] leading-none text-black/60 dark:text-white/60 flex items-center justify-center cursor-pointer transition-[opacity,background,color] duration-200 hover:bg-white/95 dark:hover:bg-white/30 hover:text-black dark:hover:text-white ${hovered ? 'opacity-100' : 'opacity-0'}`}
                        onClick={prev}
                        aria-label="Previous"
                      >‹</button>
                      <button
                        className={`absolute top-1/2 -translate-y-1/2 right-3 w-[38px] h-[38px] rounded-full border-[1.5px] border-black/12 dark:border-white/12 bg-white/70 dark:bg-white/15 backdrop-blur-[6px] text-[20px] leading-none text-black/60 dark:text-white/60 flex items-center justify-center cursor-pointer transition-[opacity,background,color] duration-200 hover:bg-white/95 dark:hover:bg-white/30 hover:text-black dark:hover:text-white ${hovered ? 'opacity-100' : 'opacity-0'}`}
                        onClick={next}
                        aria-label="Next"
                      >›</button>
                    </>
                  )}
                </>
              ) : (
                <div className="w-full h-full" />
              )}
            </div>

            {/* Thumbnail filmstrip */}
            {hasImages && images.length > 1 && (
              <div className="flex items-center gap-[6px] w-full max-[900px]:gap-1">
                <button
                  className="shrink-0 w-7 h-7 rounded-full border border-black/12 dark:border-white/12 bg-white dark:bg-[#1a1a1a] cursor-pointer flex items-center justify-center text-[18px] leading-none text-black/45 dark:text-white/45 transition-[background,color] duration-200 p-0 hover:bg-black/6 dark:hover:bg-white/10 hover:text-black dark:hover:text-white max-[900px]:w-6 max-[900px]:h-6 max-[900px]:text-[15px]"
                  onClick={() => scrollThumbs('left')}
                  aria-label="Scroll left"
                >‹</button>
                <div className="pd-thumbs flex gap-2 overflow-x-auto flex-1" ref={thumbsRef}>
                  {images.map((src, i) => (
                    <button
                      key={i}
                      className={`shrink-0 w-16 h-[44px] rounded-lg overflow-hidden border-2 cursor-pointer transition-[opacity,border-color,transform] duration-200 bg-transparent p-0 hover:opacity-80 max-[900px]:w-[52px] max-[900px]:h-9 max-[900px]:rounded-md max-[480px]:w-11 max-[480px]:h-[30px] max-[480px]:rounded-[5px] ${i === current ? 'border-black/35 dark:border-white/35 opacity-100 scale-105' : 'border-transparent opacity-50'}`}
                      onClick={() => setCurrent(i)}
                    >
                      <img src={src} alt={`thumb ${i + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
                <button
                  className="shrink-0 w-7 h-7 rounded-full border border-black/12 dark:border-white/12 bg-white dark:bg-[#1a1a1a] cursor-pointer flex items-center justify-center text-[18px] leading-none text-black/45 dark:text-white/45 transition-[background,color] duration-200 p-0 hover:bg-black/6 dark:hover:bg-white/10 hover:text-black dark:hover:text-white max-[900px]:w-6 max-[900px]:h-6 max-[900px]:text-[15px]"
                  onClick={() => scrollThumbs('right')}
                  aria-label="Scroll right"
                >›</button>
              </div>
            )}

            {/* Title + Badge */}
            <div className="flex items-center gap-3 flex-wrap">
              <h1
                className="text-[clamp(28px,3.5vw,48px)] font-bold tracking-[-1.5px] leading-[1.08] text-black dark:text-white m-0"
                style={{ fontFamily: "'Space Grotesk', Georgia, sans-serif" }}
              >
                {project.title}
              </h1>
              <span
                className={`text-[11px] font-semibold text-black/60 dark:text-white/60 px-3 py-1 rounded-full tracking-[0.3px] whitespace-nowrap ${BADGE_CLASSES[project.badge]}`}
              >
                {project.badge} ↗
              </span>
            </div>

            {/* Meta */}
            <div className="flex gap-10 flex-wrap">
              {[
                { label: 'Company',  value: project.company  },
                { label: 'Year',     value: String(project.year) },
                { label: 'Role',     value: project.role     },
                { label: 'Platform', value: project.platform },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-[3px]">
                  <span className={META_LABEL}>{label}</span>
                  <span className={META_VALUE}>{value}</span>
                </div>
              ))}
            </div>

            {/* Live links */}
            {project.links ? (
              <div className="flex flex-wrap gap-2 mb-8">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[13px] font-bold text-black dark:text-white px-[18px] py-2 border-[1.5px] border-black/18 dark:border-white/18 rounded-full transition-[background-color,border-color] duration-200 w-fit hover:bg-black/5 dark:hover:bg-white/8 hover:border-black/30 dark:hover:border-white/30"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            ) : project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[13px] font-bold text-black dark:text-white px-[18px] py-2 border-[1.5px] border-black/18 dark:border-white/18 rounded-full transition-[background-color,border-color] duration-200 w-fit hover:bg-black/5 dark:hover:bg-white/8 hover:border-black/30 dark:hover:border-white/30"
              >
                Live Site ↗
              </a>
            ) : null}

            <hr className="border-0 border-t border-black/10 dark:border-white/10 my-2" />
            <p className="text-[15px] leading-[1.75] text-black/55 dark:text-white/55 m-0">{project.overview}</p>

            <div className="flex flex-col gap-10 mt-2">
              {project.sections.map((section) => (
                <div key={section.title} className="flex flex-col gap-[10px]">
                  <h2 className="text-[11px] font-bold text-black/30 dark:text-white/30 tracking-[0.8px] uppercase m-0">{section.title}</h2>
                  <p className="text-[15px] leading-[1.75] text-black/55 dark:text-white/55 m-0">{section.body}</p>
                </div>
              ))}
            </div>

            {/* Mobile bottom-bar spacer */}
            <div className="hidden h-20 max-[900px]:block" />
          </div>

          {/* DIVIDER */}
          <div className="w-px bg-black/10 dark:bg-white/10 self-stretch max-[900px]:hidden" aria-hidden="true" />

          {/* RIGHT sidebar */}
          <aside className="sticky top-20 h-fit pl-12 max-[900px]:hidden">
            <div className="border border-black/10 dark:border-white/10 rounded-2xl overflow-hidden bg-white/45 dark:bg-white/6">
              <div className="px-6 pt-5 pb-7 flex flex-col gap-4">
                <div>
                  <h3
                    className="text-[20px] font-bold tracking-[-0.5px] text-black dark:text-white mb-1"
                    style={{ fontFamily: "'Space Grotesk', Georgia, sans-serif" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-xs text-black/40 dark:text-white/40 m-0">{project.company} · {project.year}</p>
                </div>

                <hr className="border-0 border-t border-black/10 dark:border-white/10 my-2" />

                <ul className="list-none m-0 p-0 flex flex-col gap-[10px]">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-center gap-[10px] text-[13px] text-black/65 dark:text-white/65 font-medium">
                      <span className="shrink-0 w-[18px] h-[18px] rounded-full bg-black/6 dark:bg-white/10 flex items-center justify-center text-black/50 dark:text-white/50">
                        <svg viewBox="0 0 12 12" fill="none" width="10" height="10">
                          <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <hr className="border-0 border-t border-black/10 dark:border-white/10 my-2" />

                {project.links ? (
                  <div className="flex flex-col gap-2">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center px-5 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black text-[13px] font-bold tracking-[0.2px] transition-[background-color] duration-200 hover:bg-[#222] dark:hover:bg-[#e0e0e0]"
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                ) : project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-5 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black text-[13px] font-bold tracking-[0.2px] transition-[background-color] duration-200 hover:bg-[#222] dark:hover:bg-[#e0e0e0]"
                  >
                    View Live Site ↗
                  </a>
                ) : (
                  <button
                    className="block w-full text-center px-5 py-3 rounded-full bg-black/7 dark:bg-white/10 text-black/30 dark:text-white/30 text-[13px] font-bold tracking-[0.2px] border-0 cursor-not-allowed hover:bg-black/7 dark:hover:bg-white/10"
                    disabled
                  >
                    Not Publicly Deployed
                  </button>
                )}

                <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                  <div>
                    <p className={META_LABEL}>Platform</p>
                    <p className={META_VALUE}>{project.platform}</p>
                  </div>
                  <div className="col-span-full">
                    <p className={META_LABEL}>Role</p>
                    <p className={META_VALUE}>{project.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Mobile fixed bottom bar */}
      <div className="pd-mobile-bar hidden fixed bottom-0 left-0 right-0 z-50 backdrop-blur-[12px] border-t border-black/10 dark:border-white/10 px-6 py-3 max-[900px]:block">
        <div className="flex items-center justify-between gap-4 max-w-[600px] mx-auto">
          <div>
            <span className={META_LABEL}>Project</span>
            <p className="font-bold text-sm text-black dark:text-white m-0">{project.title}</p>
          </div>
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="w-auto px-5 py-[10px] rounded-full bg-black dark:bg-white text-white dark:text-black text-[13px] font-bold tracking-[0.2px] transition-[background-color] duration-200 hover:bg-[#222] dark:hover:bg-[#e0e0e0]"
            >
              Live Site ↗
            </a>
          ) : (
            <span className="w-auto px-5 py-[10px] rounded-full bg-black/7 dark:bg-white/10 text-black/30 dark:text-white/30 text-[13px] font-bold cursor-not-allowed">
              Not Deployed
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
