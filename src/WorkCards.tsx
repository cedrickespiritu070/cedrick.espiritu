import './WorkCards.css'

type BadgeType = 'SHIPPED' | 'ACQUIRED' | 'CONCEPT' | 'WINNER'

interface WorkCard {
  id: number
  title: string
  badge: BadgeType
  description: string
  company: string
  year: string
  bgColor: string
}

const CARDS: WorkCard[] = [
  {
    id: 1,
    title: 'First Draft Relaunch',
    badge: 'SHIPPED',
    description: "Redesigning the underlying design system, creating web and mobile wireframing kits and supporting redesigning the UI as part of Figma's post-config relaunch.",
    company: 'Figma',
    year: '2024',
    bgColor: '#d4d0f0',
  },
  {
    id: 2,
    title: 'Notifications',
    badge: 'SHIPPED',
    description: "Improving the information architecture and parseability of Figma's notification feed with a visual redesign. Includes a scalable and robust system to support future notifications.",
    company: 'Figma',
    year: '2024',
    bgColor: '#b8d4b8',
  },
  {
    id: 3,
    title: 'ChromeOS PWA',
    badge: 'SHIPPED',
    description: 'Adding progressive web app (PWA) support for downloading Figma on Chromebooks and ChromeOS. Announced and presented during the Google I/O 2024 Chrome keynote.',
    company: 'Figma',
    year: '2024',
    bgColor: '#f0e4b4',
  },
  {
    id: 4,
    title: 'Octoshop',
    badge: 'ACQUIRED',
    description: 'Co-founded a startup for online shopping with price comparison and cashback rewards. Grew to 10k users before acquisition.',
    company: 'Octoshop',
    year: '2023',
    bgColor: '#1a237e',
  },
  {
    id: 5,
    title: 'Account Settings',
    badge: 'SHIPPED',
    description: "Redesigning Facebook's account settings to match the new design language and improve discoverability of privacy controls.",
    company: 'Meta',
    year: '2022',
    bgColor: '#fce4ec',
  },
  {
    id: 6,
    title: 'Museum AR/VR',
    badge: 'CONCEPT',
    description: 'A side project exploring AR/VR technology to make museums more accessible and engaging for visitors worldwide.',
    company: 'Side Project',
    year: '2023',
    bgColor: '#212121',
  },
  {
    id: 7,
    title: 'Design System v3',
    badge: 'SHIPPED',
    description: 'Building and maintaining a comprehensive design system used across all Xbox gaming products and experiences.',
    company: 'Xbox',
    year: '2021',
    bgColor: '#e8f5e9',
  },
  {
    id: 8,
    title: 'Michroma Design Tool',
    badge: 'CONCEPT',
    description: 'Exploring AI-assisted color palette generation for design tools. Winner of internal hackathon.',
    company: 'Side Project',
    year: '2023',
    bgColor: '#0d1b2a',
  },
  {
    id: 9,
    title: 'GitHub Profile Redesign',
    badge: 'CONCEPT',
    description: 'A conceptual redesign of GitHub user profiles to better showcase developer identity and contributions.',
    company: 'Side Project',
    year: '2024',
    bgColor: '#f5f0e8',
  },
  {
    id: 10,
    title: 'Bolt × Supabase Hackathon',
    badge: 'WINNER',
    description: 'Built a real-time collaborative mood board tool in 48 hours. Won first place in the design category.',
    company: 'Hackathon',
    year: '2024',
    bgColor: '#1a1a1a',
  },
  {
    id: 11,
    title: 'Instok Inventory',
    badge: 'SHIPPED',
    description: 'End-to-end redesign of the inventory management dashboard for small business owners.',
    company: 'Instok',
    year: '2020',
    bgColor: '#e3f2fd',
  },
  {
    id: 12,
    title: 'Figma AI Features',
    badge: 'SHIPPED',
    description: 'Designing the UX for AI-powered design suggestions and auto-layout improvements in Figma.',
    company: 'Figma',
    year: '2024',
    bgColor: '#7c4dff',
  },
  {
    id: 13,
    title: 'Xbox Game Pass UI',
    badge: 'SHIPPED',
    description: 'Redesigning the Game Pass subscription flow and library browsing experience across console and web.',
    company: 'Xbox',
    year: '2022',
    bgColor: '#107c10',
  },
  {
    id: 14,
    title: 'Vulnerability Dashboard',
    badge: 'CONCEPT',
    description: 'A security-focused dashboard concept for tracking and managing software vulnerabilities at scale.',
    company: 'Side Project',
    year: '2023',
    bgColor: '#2d2d2d',
  },
  {
    id: 15,
    title: 'Neuroscience App',
    badge: 'CONCEPT',
    description: 'Bridging my background in neuroscience with design — an app for tracking cognitive performance and mental health.',
    company: 'Side Project',
    year: '2024',
    bgColor: '#fce4ec',
  },
]

const BADGE_COLORS: Record<BadgeType, string> = {
  SHIPPED: 'rgba(0,0,0,0.07)',
  ACQUIRED: 'rgba(0,0,0,0.07)',
  CONCEPT: 'rgba(0,0,0,0.07)',
  WINNER: 'rgba(255, 200, 0, 0.2)',
}

export default function WorkCards() {
  return (
    <section className="work-section">
      <div className="work-grid">
        {CARDS.map((card) => (
          <article key={card.id} className="work-card">
            <div
              className="work-card-thumb"
              style={{ backgroundColor: card.bgColor }}
            />
            <div className="work-card-body">
              <div className="work-card-header">
                <h3 className="work-card-title">{card.title}</h3>
                <span
                  className="work-card-badge"
                  style={{ backgroundColor: BADGE_COLORS[card.badge] }}
                >
                  {card.badge} ↗
                </span>
              </div>
              <p className="work-card-desc">{card.description}</p>
              <p className="work-card-meta">
                {card.company} <span className="work-card-dot">·</span> {card.year}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
