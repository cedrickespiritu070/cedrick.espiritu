import { useParams, Link } from 'react-router-dom'
import { useState, useEffect, useRef, useCallback } from 'react'
import { CARDS } from './WorkCards'
import type { BadgeType } from './WorkCards'
import './ProjectDetail.css'

const BADGE_COLORS: Record<BadgeType, string> = {
  SHIPPED:  'rgba(0,0,0,0.07)',
  ACQUIRED: 'rgba(0,0,0,0.07)',
  CONCEPT:  'rgba(0,0,0,0.07)',
  WINNER:   'rgba(255, 200, 0, 0.2)',
}

const SIDEBAR_FEATURES = [
  'Production-ready codebase',
  'Full design system included',
  'Mobile-first responsive layout',
  'Accessible & WCAG compliant',
  'Documented component library',
]

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

  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length])

  const onPointerDown = (e: React.PointerEvent) => { dragStart.current = e.clientX }
  const onPointerUp   = (e: React.PointerEvent) => {
    const delta = e.clientX - dragStart.current
    if (Math.abs(delta) > 40) delta < 0 ? next() : prev()
  }

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
      <div className="pd-not-found">
        <p>Project not found.</p>
        <Link to="/">← Back to home</Link>
      </div>
    )
  }

  return (
    <article className="pd-root">

      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <defs>
          <filter id="pd-grain" x="-8%" y="-8%" width="116%" height="116%">
            <feTurbulence type="fractalNoise" baseFrequency="0.82" numOctaves="5" seed="5" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      <div className="pd-inner">
        <Link to="/" className="pd-back">← Back</Link>

        <div className="pd-columns">

          {/* LEFT */}
          <div className="pd-left">

            {/* Slider */}
            <div
              className="pd-slider"
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
                      className="pd-slide-img"
                      style={{ opacity: i === current ? 1 : 0 }}
                    />
                  ))}
                  <span className="pd-slide-counter">{current + 1} / {images.length}</span>
                  {images.length > 1 && (
                    <>
                      <button className={`pd-arrow pd-arrow-left${hovered ? ' pd-arrow-visible' : ''}`} onClick={prev} aria-label="Previous">‹</button>
                      <button className={`pd-arrow pd-arrow-right${hovered ? ' pd-arrow-visible' : ''}`} onClick={next} aria-label="Next">›</button>
                    </>
                  )}
                </>
              ) : (
                <div className="pd-slide-placeholder" />
              )}
            </div>

            {/* Dot thumbnails */}
            {hasImages && images.length > 1 && (
              <div className="pd-thumbs">
                {images.map((src, i) => (
                  <button key={i} className={`pd-thumb${i === current ? ' pd-thumb-active' : ''}`} onClick={() => setCurrent(i)}>
                    <img src={src} alt={`thumb ${i + 1}`} />
                  </button>
                ))}
              </div>
            )}

            {/* Title + Badge */}
            <div className="pd-title-row">
              <h1 className="pd-title">{project.title}</h1>
              <span className="pd-badge" style={{ backgroundColor: BADGE_COLORS[project.badge] }}>
                {project.badge} ↗
              </span>
            </div>

            {/* Meta */}
            <div className="pd-meta">
              {[
                { label: 'Company',  value: project.company  },
                { label: 'Year',     value: String(project.year) },
                { label: 'Role',     value: project.role     },
                { label: 'Duration', value: project.duration },
                { label: 'Platform', value: project.platform },
              ].map(({ label, value }) => (
                <div key={label} className="pd-meta-col">
                  <span className="pd-meta-label">{label}</span>
                  <span className="pd-meta-value">{value}</span>
                </div>
              ))}
            </div>

            {project.links ? (
              <div className="pd-live-links">
                {project.links.map((link) => (
                  <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="pd-live">
                    {link.label} ↗
                  </a>
                ))}
              </div>
            ) : project.live ? (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="pd-live">
                Live Site ↗
              </a>
            ) : null}

            <hr className="pd-divider" />
            <p className="pd-overview">{project.overview}</p>

            <div className="pd-sections">
              {project.sections.map((section) => (
                <div key={section.title} className="pd-section">
                  <h2 className="pd-section-title">{section.title}</h2>
                  <p className="pd-section-body">{section.body}</p>
                </div>
              ))}
            </div>

            {/* Mobile bottom-bar spacer */}
            <div className="pd-mobile-spacer" />
          </div>

          {/* DIVIDER */}
          <div className="pd-vdivider" aria-hidden="true" />

          {/* RIGHT sidebar */}
          <aside className="pd-sidebar">
            <div className="pd-sidebar-inner">
              <div className="pd-sidebar-strip" style={{ background: project.bgColor }} />

              <div className="pd-sidebar-body">
                <div>
                  <h3 className="pd-sidebar-name">{project.title}</h3>
                  <p className="pd-sidebar-company">{project.company} · {project.year}</p>
                </div>

                <hr className="pd-divider" />

                <ul className="pd-features">
                  {SIDEBAR_FEATURES.map((f) => (
                    <li key={f} className="pd-feature-item">
                      <span className="pd-check">
                        <svg viewBox="0 0 12 12" fill="none" width="10" height="10">
                          <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <hr className="pd-divider" />

                {project.links ? (
                  <div className="pd-sidebar-links">
                    {project.links.map((link) => (
                      <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="pd-cta">
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                ) : project.live ? (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="pd-cta">
                    View Live Site ↗
                  </a>
                ) : (
                  <button className="pd-cta pd-cta-disabled" disabled>Not Publicly Deployed</button>
                )}

                <div className="pd-sidebar-meta">
                  <div>
                    <p className="pd-meta-label">Duration</p>
                    <p className="pd-meta-value">{project.duration}</p>
                  </div>
                  <div>
                    <p className="pd-meta-label">Platform</p>
                    <p className="pd-meta-value">{project.platform}</p>
                  </div>
                  <div className="pd-sidebar-meta-full">
                    <p className="pd-meta-label">Role</p>
                    <p className="pd-meta-value">{project.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Mobile fixed bottom bar */}
      <div className="pd-mobile-bar">
        <div className="pd-mobile-bar-inner">
          <div>
            <span className="pd-meta-label">Project</span>
            <p style={{ fontWeight: 700, fontSize: 14, color: '#000', margin: 0 }}>{project.title}</p>
          </div>
          {project.live ? (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="pd-cta pd-cta-sm">Live Site ↗</a>
          ) : (
            <span className="pd-cta pd-cta-disabled pd-cta-sm">Not Deployed</span>
          )}
        </div>
      </div>
    </article>
  )
}
