import { Link } from 'react-router-dom'
import './WorkCards.css'

export type BadgeType = 'SHIPPED' | 'ACQUIRED' | 'CONCEPT' | 'WINNER'

export interface ProjectSection {
  title: string
  body: string
}

export interface WorkCard {
  id: number
  slug: string
  title: string
  badge: BadgeType
  description: string
  company: string
  year: string
  bgColor: string
  role: string
  duration: string
  platform: string
  overview: string
  sections: ProjectSection[]
  live?: string
  links?: { label: string; url: string }[]
  thumbnail?: string
  images?: string[]
}

export const CARDS: WorkCard[] = [
  {
    id: 0,
    slug: 'trackshot',
    title: 'TrackShot',
    badge: 'SHIPPED',
    description:
      'Production-ready mobile golf tournament management app for iOS and Android. Supports 40+ scoring formats, real-time leaderboards, advanced handicap calculations, and side games like Skins and Closest to the Pin.',
    company: 'Divine Software Systems',
    year: '2025',
    bgColor: '#1c3a1c',
    thumbnail: '/projects-media/trackshot/trackshot.gif',
    links: [
      { label: 'Website', url: 'https://www.trackshotgolf.com/' },
      { label: 'App Store', url: 'https://apps.apple.com/us/app/trackshot-golf/id6757467326' },
      { label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.trackshot.app&pcampaignid=web_share' },
    ],
    images: [
      '/projects-media/trackshot/trackshot-page-1.png',
      '/projects-media/trackshot/trackshot-page-2.jpg',
      '/projects-media/trackshot/trackshot-page-3.jpg',
    ],
    role: 'Mobile Developer & Designer',
    duration: '— months',
    platform: 'iOS, Android',
    overview:
      'TrackShot is a production-ready mobile golf tournament management app for iOS and Android, supporting 40+ scoring formats, real-time leaderboards, advanced handicap calculations, and side games like Skins and Closest to the Pin. I contributed across both development and design — handling all graphic materials from early prototyping through App Store and Google Play submission, including the store preview images and marketing assets.',
    sections: [
      {
        title: 'Problem',
        body: 'Golf tournament management involves a lot of moving parts: dozens of scoring formats, real-time score syncing across multiple devices on the course, handicap calculations per format, team management, side game tracking, and push notifications — all in a mobile-first experience. There was no single tool that handled this end-to-end. On top of that, as the leaderboard grows with more participants and score entries, recalculating standings on every score change creates database pressure that needed a caching layer to stay performant.',
      },
      {
        title: 'Process',
        body: 'I worked across the full product lifecycle. On the design side, I created all UI mockups and prototypes, then produced the final App Store and Google Play graphic assets including screenshots and preview images. On the engineering side, the app is built with React Native + Expo using file-based routing via Expo Router. Supabase powers the backend — PostgreSQL with Row-Level Security, Realtime WebSocket subscriptions for live score updates, Edge Functions (Deno) for push notifications, and Storage for avatars and course images. Auth supports both Google and Apple Sign-In. Integrated Redis to cache leaderboard state so standings are served from memory instead of recomputing from the database on every score change.',
      },
      {
        title: 'Outcome',
        body: 'TrackShot shipped to both the App Store and Google Play. The app handles 40+ tournament formats with live scoring, real-time leaderboard updates, a full handicap system with 14 allowance types, 7 tiebreaker methods, and team/side game management. The Redis leaderboard caching integration is in active development and will significantly reduce database load as the user base grows.',
      },
    ],
  },
  {
    id: 1,
    slug: 'wings-of-angels',
    title: 'Wings of Angels Transport',
    badge: 'SHIPPED',
    description:
      'Full-stack transport management system built for medical and mortuary logistics — real-time job dispatching, technician coordination, PDF documentation, and multi-role dashboards across iOS, Android, and Web.',
    company: 'Divine Software Systems',
    year: '2025',
    bgColor: '#0d1b2e',
    thumbnail: '/projects-media/woa/woa-thumbnail.jpg',
    images: [
      '/projects-media/woa/woa-page-1.jpg',
      '/projects-media/woa/woa-page-2.jpg',
      '/projects-media/woa/woa-page-3.jpg',
    ],
    live: 'https://play.google.com/store/apps/details?id=com.divinesoftware.mynewapp&pcampaignid=web_share',
    role: 'Mobile Developer & Designer',
    duration: '— months',
    platform: 'iOS, Android, Web',
    overview:
      'Wings of Angels (WOA) is a full-stack transport management system built for medical and mortuary logistics — handling real-time job dispatching, technician coordination, PDF documentation, and multi-role dashboards across iOS, Android, and Web. I was involved in the project from design through deployment: I handled all graphic materials starting from prototyping in Figma, produced the final app preview images and screenshots submitted to both the App Store and Google Play Store, and contributed to the frontend development across the Expo/React Native codebase. Currently implementing Redis (via Upstash) for server-side Query Result Caching on the dispatcher and admin dashboards to reduce redundant Firestore reads.',
    sections: [
      {
        title: 'Problem',
        body: 'The app had no server-side caching layer — every dashboard load triggered full Firestore collection scans, pulling 500+ documents per user regardless of role or relevance. This caused slow load times, high Firestore read costs, and redundant network calls across multiple simultaneous users. On the design side, the app lacked polished store-ready visuals and needed a consistent design language from prototype to production.',
      },
      {
        title: 'Process',
        body: 'On the design side, I built out the full prototype in Figma — covering user flows for dispatchers, technicians, and admins — then translated those designs into production screens within the Expo codebase. I also created all store assets including app preview images, screenshots, and metadata graphics for both the Apple App Store and Google Play Store submissions. On the engineering side, I analyzed Firestore query patterns across the dashboard components to identify the highest-cost read operations and scoped a Redis caching strategy using Upstash (serverless Redis over HTTP, compatible with Firebase Cloud Functions) — targeting dashboard query results first, caching job lists by user role and status with short TTLs (30–60 seconds) to balance freshness against read reduction.',
      },
      {
        title: 'Outcome',
        body: 'The app shipped to both the App Store and Google Play Store with complete store listings including custom preview images and screenshots. The multi-role platform supports dispatchers, technicians, and management with real-time job tracking, PDF report generation, push notifications, and offline sync. Redis-based Query Result Caching on the dashboard is currently in progress — projected to reduce Firestore reads by 60–70% on dashboard load, cutting operational costs and improving response times for high-traffic dispatch windows.',
      },
    ],
  },
  {
    id: 2,
    slug: 'rfv-allianz',
    title: 'RFV Allianz App',
    badge: 'SHIPPED',
    description:
      'Full-stack enterprise web application digitizing the financial operations of RFV Allianz — spanning accounting, CFO analytics, daily sales tracking, and a client portal, all in a single Turbo monorepo.',
    company: 'RFV Allianz',
    year: '2025',
    bgColor: '#1a1a2e',
    thumbnail: '/projects-media/rfv/rfv-thumbnail.jpg',
    images: [
      '/projects-media/rfv/rfv-page-1.jpg',
      '/projects-media/rfv/rfv-page-2.jpg',
    ],
    role: 'Frontend Developer & UI Designer',
    duration: '— months',
    platform: 'Web',
    overview:
      'RFV Allianz System is a full-stack enterprise web application built to digitize and centralize the financial operations of RFV Allianz. The system spans four interconnected web apps — a full accounting platform, a CFO sales dashboard, a daily sales tracker, and a client portal — all managed as a single Turbo monorepo. I was involved in the front-end development and UI design, handling prototyping and implementation of key modules from accounting workflows to operations management.',
    sections: [
      {
        title: 'Problem',
        body: 'RFV Allianz had no centralized digital system to manage their financial and operational workflows. Approval chains for payment requests were manual and fragmented, there was no unified executive view of sales performance, and inventory tracking for fuels operations had no digital system at all. Accounting staff had to manage Purchase Orders, Disbursement Vouchers, and Journal Entries across disconnected tools, making auditing, reporting, and approvals slow and error-prone.',
      },
      {
        title: 'Process',
        body: 'The system was designed and built as a monorepo using Turbo and pnpm, separating concerns across four apps — FINANCE (core accounting), CFO (executive dashboard), JTA (daily sales), and RFVP CLIENT (client portal). A shared component library and Tailwind config were extracted into shared packages to keep UI consistent across all apps. The backend was built on Node.js + Express with PostgreSQL via Supabase, using Row-Level Security to enforce role-based data access at the database level. A multi-level document approval workflow (Requestor → Endorser → Accounting Head → Treasury) was implemented for RFP, APV, and DV documents. Financial reports (P&L, Balance Sheet, Cash Flow, Trial Balance) were built with PDF and Excel export. An operations module was built separately for fuels inventory, covering Purchase Orders, Item Receipts, Sales Orders, and Delivery Receipts. Prototyping was done before each major module to align on UI and flow before building.',
      },
      {
        title: 'Outcome',
        body: 'Shipped a production-ready system with 4 deployed web apps covering accounting, CFO analytics, daily sales tracking, and client-level reporting. The approval workflow eliminated manual handoffs for financial documents and gave accounting staff full traceability. The CFO dashboard provided live visibility into sales distribution, product mix, and GM-level performance. Fuels inventory went from untracked to fully auditable with purchase-to-delivery coverage. The system now serves multiple user roles — Admin, Accounting Head, Accounting Staff, Treasury, Operations, Endorser, and Requestor — each with scoped access and dedicated workflows.',
      },
    ],
  },
  {
    id: 3,
    slug: 'tulay-app',
    title: 'Tulay App',
    badge: 'SHIPPED',
    description:
      'High-performance digital ticketing and e-wallet platform for live events in the Philippines and the US — mobile-first, cashless, with real-time analytics and Stripe-powered payments.',
    company: 'Tulay',
    year: '2024',
    bgColor: '#2a1a0e',
    role: 'Lead Multimedia Designer & Software Engineer',
    duration: '— months',
    platform: 'Web, Mobile',
    overview:
      'Tulay (Filipino for "bridge") is a high-performance digital platform designed to revolutionize the live events industry in the Philippines and the US. Originally conceptualized as a vendor-centric payment solution, the project evolved into a comprehensive digital mobile ticketing e-wallet. As the Lead Multimedia Designer and Software Engineer, I handled the end-to-end creative process — from the initial high-fidelity prototyping in Figma to the production of all graphic marketing materials and the final technical implementation.',
    sections: [
      {
        title: 'Problem',
        body: 'The live events industry was plagued by outdated, hardware-heavy systems, long physical queues, and high transaction fees (often 15–20% per ticket). Businesses and organizers lacked real-time insights into their sales, while consumers faced barriers to entry due to a lack of secure, instant digital delivery options for tickets. There was a clear need for a cashless economy solution that could work across any device without costly overhead.',
      },
      {
        title: 'Process',
        body: 'I designed a minimalist, neo-brutalist aesthetic to ensure the platform felt modern yet functional. The initial e-wallet UI — originally featuring Inventory Overview and Revenue Tracking — was pivoted into an event-centric dashboard as the scope evolved. I created all preview screenshots and infographics to communicate the app\'s scalability, emphasizing features like dynamic QR codes and real-time analytics. On the engineering side, I integrated the Stripe API for secure, bank-level encryption and utilized Supabase for real-time data handling, ensuring ticket discovery and checkout were seamless.',
      },
      {
        title: 'Outcome',
        body: 'Shipped a fully digital, mobile-first ticketing stack that eliminates the need for printed tickets and long lines. Tulay offers organizers a white-label solution with low transaction fees and real-time usher management tools. The platform successfully bridges the gap between local payment systems (like GCash and Maya) and global transaction standards, providing a unified, secure experience for users in both the Philippines and the United States.',
      },
    ],
  },
  {
    id: 4,
    slug: 'parish-connect',
    title: 'Parish Connect',
    badge: 'SHIPPED',
    description:
      'Whitelabel platform digitizing the pastoral and administrative operations of Roman Catholic parishes — a single codebase powering 12+ parish-branded mobile apps and a web admin panel.',
    company: 'Divine Software Systems',
    year: '2025',
    bgColor: '#1e1a2e',
    thumbnail: '/projects-media/parish-connect/parish-connect-thumbnail.gif',
    images: [
      '/projects-media/parish-connect/parish-connect-page-1.jpg',
      '/projects-media/parish-connect/parish-connect-page-2.jpg',
      '/projects-media/parish-connect/parish-connect-page-3.jpg',
      '/projects-media/parish-connect/parish-connect-page-4.jpg',
    ],
    role: 'UI/UX Designer',
    duration: '— months',
    platform: 'iOS, Android, Web',
    overview:
      'Parish Connect is a whitelabel platform that digitizes the pastoral and administrative operations of Roman Catholic parishes. A single codebase powers 12+ parish-branded apps — each customized to its own parish identity. The project ships as two products: a cross-platform mobile app for parishioners and a web-based admin panel for parish staff. My role covered all graphic and visual work — from early wireframes and interactive prototypes through to production-ready UI assets and the app store preview and screenshot images.',
    sections: [
      {
        title: 'Problem',
        body: 'Parish staff were managing everything manually — printed weekly bulletins, handwritten family records, phone-tree announcements — with no central system and no way to reach parishioners consistently. At the same time, each of the 12+ partner parishes needed a distinct branded identity without the overhead of maintaining separate codebases.',
      },
      {
        title: 'Process',
        body: 'Designed and prototyped the full UI across both the mobile app and admin panel, covering screens for announcements, events, mass schedules, bulletins, community and family records, gallery, ministry pages, prayers, readings, priest profiles, and an audit log system. Produced all production-ready graphic assets and parish-specific branding materials. Created all preview and screenshot images used across app store listings and parish marketing. The admin panel and backend were built in parallel by the dev team using React + Vite + Tailwind + Supabase on the frontend and Node.js/Express on the backend; the mobile app used React Native (Expo) + NativeWind + Supabase.',
      },
      {
        title: 'Outcome',
        body: 'A fully deployed, live system serving 12+ parishes — each with their own branded app. Parish admins use the web panel to manage content across all modules (announcements, events, bulletins, mass songs, family records, gallery, ads, and more) while parishioners access everything through the mobile app with push notifications, PDF downloads, scripture readings, and native calendar integration.',
      },
    ],
  },
  {
    id: 16,
    slug: 'metrosevn-ecommerce',
    title: 'MetroSevn Ecommerce',
    badge: 'SHIPPED',
    description:
      'Full-stack e-commerce storefront for MetroSevn, a Lipa-based streetwear brand — built from scratch with React, TypeScript, Supabase, and Zustand. Includes a product catalog, persistent cart, full checkout-to-order flow, and a custom brand identity designed from the ground up.',
    company: 'MetroSevn',
    year: '2025',
    bgColor: '#0d1220',
    role: 'Full-Stack Developer & Brand Designer',
    duration: '— months',
    platform: 'Web',
    overview:
      'Engineered a custom, ground-up e-commerce platform for a Lipa-based streetwear brand. I was responsible for the entire product lifecycle, covering brand identity, UI/UX design, and the full-stack technical implementation.',
    sections: [
      {
        title: 'The Problem',
        body: 'The brand lacked a digital footprint and a secure way to process orders. They required a high-performance storefront that reflected their "street-culture" aesthetic — moving away from generic, cookie-cutter templates to a bespoke design system.',
      },
      {
        title: 'Technical Stack',
        body: 'Frontend: React 19, TypeScript 5.7, Vite 6, Tailwind CSS 3. State & Routing: Zustand (Persisted), React Router DOM v7. Backend & DB: Supabase (PostgreSQL, Auth, Edge Functions). Infrastructure: Deno (Runtime), Vercel (Deployment). Payments: Stripe API integration.',
      },
      {
        title: 'Implementation Details',
        body: 'Design System: Developed a custom Tailwind configuration featuring a brand-specific palette (ms-blue, ms-black) and a multi-typeface system (Playfair Display / DM Mono). Implemented an animated grain overlay via CSS to achieve a gritty, analog aesthetic. Architecture: Built a component-driven architecture with a focus on type safety and performance. Integrated Supabase for real-time inventory and user authentication. Checkout Flow: Engineered a secure payment pipeline using Supabase Edge Functions (Deno) — Function A handles Stripe Session creation and cart validation; Function B is a webhook listener that processes Stripe events to update order statuses in PostgreSQL. State Management: Utilized Zustand for persistent cart state and implemented a 2-second polling mechanism on the success page to ensure real-time payment confirmation before rendering the receipt.',
      },
      {
        title: 'Outcome',
        body: 'Delivered a production-ready, SEO-optimized storefront. The final product features a seamless end-to-end user journey — from product discovery and persistent cart management to secure checkout — all while maintaining a cohesive brand identity inspired by local urban culture.',
      },
    ],
    live: 'https://metro-sevn-ecommerce.vercel.app/',
  },
  {
    id: 6,
    slug: 'ublc-360',
    title: 'UBLC 360',
    badge: 'SHIPPED',
    description:
      'Interactive virtual tour website for the University of Batangas Learning Commons — immersive 360° panoramic room viewers, an embedded PDF facility guide, and a survey-driven onboarding flow.',
    company: 'University of Batangas Lipa',
    year: '2023',
    bgColor: '#0a1628',
    thumbnail: '/projects-media/ublc/ublc-thumbnail.gif',
    images: [
      '/projects-media/ublc/ublc-page-1.jpg',
    ],
    role: 'Frontend Developer & Designer',
    duration: '— months',
    platform: 'Web',
    overview:
      'UBLC 360 is an interactive virtual tour website for the University of Batangas Lipa Campus\'s Learning Commons facilities. I handled the project from graphic materials through to production — designing visual assets and building the full front-end.',
    sections: [
      {
        title: 'Problem',
        body: 'Students and visitors had no way to explore campus facilities remotely or in advance, making orientation and navigation difficult without a physical visit.',
      },
      {
        title: 'Process',
        body: 'Built a static multi-page site with a guided survey flow to personalize the experience, then integrated immersive 360° panoramic room viewers using Panolens.js and Three.js. Added a PDF facility guide viewer via PDF.js and ensured full mobile responsiveness with dedicated CSS breakpoint stylesheets.',
      },
      {
        title: 'Outcome',
        body: 'Shipped a fully functional virtual campus tour featuring interactive 360° building walkthroughs, an embedded PDF guide viewer, and a survey-driven onboarding flow — giving users an immersive way to explore the campus from any device, tracked via Google Analytics.',
      },
    ],
    live: 'https://ublc-360.vercel.app/',
  },
  {
    id: 7,
    slug: 'snipers-security',
    title: 'Snipers Security',
    badge: 'SHIPPED',
    description:
      'Company website for Snipers Security, a professional security services firm — multi-page SPA with animated stat counters, scroll-triggered reveals, image carousels, and a serverless contact form.',
    company: 'Snipers Security',
    year: '2024',
    bgColor: '#111111',
    role: 'Frontend Developer & Designer',
    duration: '— months',
    platform: 'Web',
    overview:
      'A company website for Snipers Security, a professional security services firm. I handled the full pipeline — from creating the graphic materials and visual assets to coding and shipping the site to production.',
    sections: [
      {
        title: 'Problem',
        body: 'The company lacked a professional web presence to present their business and security service offerings. They needed a modern, responsive site with a working contact channel — without the overhead of managing a custom backend.',
      },
      {
        title: 'Process',
        body: 'Built a multi-page single-page application (SPA) in React 18 with lazy-loaded routes for fast initial load. Styled entirely with Tailwind CSS utility classes for a consistent, responsive layout across breakpoints. Integrated Formspree to handle contact form submissions without a custom server. Added polish through animated stat counters (react-countup), scroll-triggered reveals (react-intersection-observer), and image carousels (react-slick).',
      },
      {
        title: 'Outcome',
        body: 'Shipped a fully responsive, production-ready website with 5 pages — Home, Business Services, Security Services, About Us, and Contact Us — featuring code-splitting, lazy loading, and a functional contact form live in production.',
      },
    ],
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
          <Link
            key={card.id}
            to={`/projects/${card.slug}`}
            className="work-card"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div
              className="work-card-thumb"
              style={{ backgroundColor: card.bgColor }}
            >
              {card.thumbnail && (
                <img
                  src={card.thumbnail}
                  alt={card.title}
                  className="work-card-thumb-img"
                />
              )}
            </div>
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
          </Link>
        ))}
      </div>
    </section>
  )
}
