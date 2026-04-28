import { Link } from 'react-router-dom'

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
  platform: string
  overview: string
  features: string[]
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
    year: '2026',
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
    platform: 'iOS, Android',
    features: [
      'Production iOS & Android app',
      '40+ tournament scoring formats',
      'Real-time leaderboard via Supabase',
      'Advanced handicap & tiebreaker system',
      'App Store & Play Store listed',
    ],
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
    slug: 'metrosevn-ecommerce',
    title: 'MetroSevn Ecommerce',
    badge: 'SHIPPED',
    description:
      'Full-stack e-commerce storefront for MetroSevn, a Lipa-based streetwear brand — built from scratch with React, TypeScript, and Supabase. Features a Stripe-integrated checkout pipeline, product catalog, persistent cart, and a custom brand identity designed from the ground up.',
    company: 'MetroSevn',
    year: '2026',
    bgColor: '#0d1220',
    thumbnail: '/projects-media/metrosevn/metrosevn-thumbnail.jpg',
    role: 'Full-Stack Developer & Brand Designer',
    platform: 'Web',
    features: [
      'Stripe checkout pipeline with Edge Function webhook',
      'Persistent cart & session management',
      'Supabase real-time inventory & auth',
      'Custom brand design system',
      'Deployed & SEO-optimized on Vercel',
    ],
    overview:
      'Engineered a custom, ground-up e-commerce platform for a Lipa-based streetwear brand. I was responsible for the entire product lifecycle, covering brand identity, UI/UX design, and the full-stack technical implementation.',
    sections: [
      {
        title: 'The Problem',
        body: 'The brand lacked a digital footprint and a secure way to process orders. They required a high-performance storefront that reflected their "street-culture" aesthetic — moving away from generic, cookie-cutter templates to a bespoke design system.',
      },
      {
        title: 'Technical Stack',
        body: 'Frontend: React 19, TypeScript 5.7, Vite 6, Tailwind CSS 3. State & Routing: React Router DOM v7. Backend & DB: Supabase (PostgreSQL, Auth, Edge Functions). Infrastructure: Deno (Runtime), Vercel (Deployment). Payments: Stripe API (sandbox).',
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
    id: 2,
    slug: 'parish-connect',
    title: 'Parish Connect',
    badge: 'SHIPPED',
    description:
      'Whitelabel platform digitizing the pastoral and administrative operations of Roman Catholic parishes — a single codebase powering 12+ parish-branded mobile apps and a web admin panel.',
    company: 'Divine Software Systems',
    year: '2025',
    bgColor: '#1e1a2e',
    live: 'https://www.parishconnectapp.com/',
    thumbnail: '/projects-media/parish-connect/parish-connect-thumbnail.gif',
    images: [
      '/projects-media/parish-connect/parish-connect-page-1.jpg',
      '/projects-media/parish-connect/parish-connect-page-2.jpg',
      '/projects-media/parish-connect/parish-connect-page-3.jpg',
      '/projects-media/parish-connect/parish-connect-page-4.jpg',
    ],
    role: 'UI/UX Designer',
    platform: 'iOS, Android, Web',
    features: [
      'Whitelabel for 12+ parish-branded apps',
      'Push notifications & PDF downloads',
      'Native calendar integration',
      'Full web-based admin panel',
      'Scripture readings & mass schedule',
    ],
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
    id: 3,
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
    platform: 'Web, Mobile',
    features: [
      '4-app Turbo monorepo architecture',
      'Multi-level document approval workflow',
      'Financial reports with PDF & Excel export',
      'Role-based access via Supabase RLS',
      'Full accounting & operations suite',
    ],
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
    id: 4,
    slug: 'tulay-app',
    title: 'Tulay App',
    badge: 'SHIPPED',
    description:
      'High-performance digital ticketing and e-wallet platform for live events in the Philippines and the US — mobile-first, cashless, with real-time analytics and Stripe-powered payments.',
    company: 'Divine Software Systems',
    year: '2024',
    bgColor: '#2a1a0e',
    live: 'https://www.tulayticketing.com/',
    thumbnail: '/projects-media/tulay/tulay-page-1.jpg',
    images: [
      '/projects-media/tulay/tulay-page-2.jpg',
      '/projects-media/tulay/tulay-page-3.jpg',
      '/projects-media/tulay/tulay-page-4.jpg',
      '/projects-media/tulay/tulay-page-5.jpg',
      '/projects-media/tulay/tulay-page-6.jpg',
      '/projects-media/tulay/tulay-page-7.jpg',
      '/projects-media/tulay/tulay-page-8.jpg',
      '/projects-media/tulay/tulay-page-9.jpg',
    ],
    role: 'Lead Multimedia Designer & Software Engineer',
    platform: 'Web, Mobile',
    features: [
      'Dynamic QR code ticketing',
      'Stripe-powered secure payments',
      'Real-time sales analytics dashboard',
      'Mobile-first cashless experience',
    ],
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
    id: 5,
    slug: 'wings-of-angels',
    title: 'Wings of Angels Transport',
    badge: 'SHIPPED',
    description:
      'Full-stack transport management system built for medical and mortuary logistics — real-time job dispatching, technician coordination, PDF documentation, and multi-role dashboards across iOS, Android, and Web.',
    company: 'Divine Software Systems',
    year: '2024',
    bgColor: '#0d1b2e',
    thumbnail: '/projects-media/woa/woa-thumbnail.jpg',
    images: [
      '/projects-media/woa/woa-page-1.jpg',
      '/projects-media/woa/woa-page-2.jpg',
      '/projects-media/woa/woa-page-3.jpg',
    ],
    live: 'https://play.google.com/store/apps/details?id=com.divinesoftware.mynewapp&pcampaignid=web_share',
    role: 'Mobile Developer & Designer',
    platform: 'iOS, Android, Web',
    features: [
      'Cross-platform iOS, Android & Web',
      'Real-time job dispatching system',
      'Multi-role dashboard (dispatcher, tech, admin)',
      'PDF report generation',
      'Push notifications & offline sync',
    ],
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
    id: 6,
    slug: 'dss-brand-identity',
    title: 'DSS Brand Identity',
    badge: 'SHIPPED',
    description:
      'Comprehensive brand identity system for Divine Software Systems — logo architecture, color theory, safe zones, and a 13-page technical brand manual built for scale across digital and print.',
    company: 'Divine Software Systems',
    year: '2024',
    bgColor: '#0a1828',
    live: 'https://www.divinesoftwaresystems.com/',
    thumbnail: '/projects-media/dss-brand-identity/dss-page-1.jpg',
    images: [
      '/projects-media/dss-brand-identity/dss-page-2.jpg',
      '/projects-media/dss-brand-identity/dss-page-3.jpg',
      '/projects-media/dss-brand-identity/dss-page-4.jpg',
      '/projects-media/dss-brand-identity/dss-page-5.jpg',
      '/projects-media/dss-brand-identity/dss-page-6.jpg',
      '/projects-media/dss-brand-identity/dss-page-7.jpg',
      '/projects-media/dss-brand-identity/dss-page-8.jpg',
      '/projects-media/dss-brand-identity/dss-page-9.jpg',
      '/projects-media/dss-brand-identity/dss-page-10.jpg',
      '/projects-media/dss-brand-identity/dss-page-11.jpg',
      '/projects-media/dss-brand-identity/dss-page-12.jpg',
      '/projects-media/dss-brand-identity/dss-page-13.jpg',
    ],
    role: 'Lead Graphic Designer',
    platform: 'Print, Digital',
    features: [
      'Vertical & horizontal logo lockups',
      'Strict safe zone & spacing rules',
      'Black & white high-contrast variant',
      '13-page technical brand manual',
      'Scales from 16px to large-format print',
    ],
    overview:
      'As the Lead Graphic Designer for this project, I was tasked to build the visual foundation for Divine Software Systems from the ground up. My goal was to create a design system that feels both "high-tech" and "high-trust," ensuring the brand stays consistent whether it\'s on a favicon or a large-scale print. I primarily used Adobe Illustrator for the core identity work and Adobe Photoshop for the layout and production of the brand guidelines.',
    sections: [
      {
        title: 'Problem',
        body: 'Divine Software Systems needed more than just a logo — they needed a professional identity that could bridge the gap between innovation and reliability. The brand\'s personality is built on being professional and inclusive, but without a clear set of rules, the visual execution would end up fragmented. They needed a system that could scale across different platforms without losing its premium feel or technical integrity.',
      },
      {
        title: 'Process',
        body: 'I started with the Logo Architecture in Illustrator, designing a flexible system that includes both vertical and horizontal lockups to handle different spatial constraints. To keep the brand looking clean, I defined a strict Safe Zone (1/2 x) to prevent visual clutter. For the Color Theory, I chose Light Ocean Blue (#4598ec) as the primary driver to represent trust and the future-forward direction they wanted. I also stress-tested the mark by creating a Black and White version for high-contrast environments and dark-mode UI. Everything was compiled into a 13-page technical manual so any future developer or designer knows exactly how to handle the assets.',
      },
      {
        title: 'Outcome',
        body: 'The result is a comprehensive Brand Identity System that is fully production-ready. I delivered a complete kit of parts — from scaling rules (as small as 16px) to a defined color palette (#282828 for depth and #f3f3f3 for clarity). By setting these guardrails, DSS always looks polished and "Divine" regardless of the medium or use case.',
      },
    ],
  },
  {
    id: 7,
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
    platform: 'Web',
    features: [
      'Immersive 360° panoramic room viewers',
      'Survey-driven onboarding flow',
      'Embedded PDF facility guide viewer',
      'Google Analytics integrated',
      'Fully mobile responsive',
    ],
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
]

const BADGE_CLASSES: Record<BadgeType, string> = {
  SHIPPED: 'bg-black/7 dark:bg-white/10',
  ACQUIRED: 'bg-black/7 dark:bg-white/10',
  CONCEPT: 'bg-black/7 dark:bg-white/10',
  WINNER: 'bg-[rgba(255,200,0,0.2)]',
}

export default function WorkCards() {
  return (
    <section className="bg-[#f1f1ee] dark:bg-[#111110] border-t border-black/10 dark:border-white/10">
      <div className="grid grid-cols-3 px-12 pt-12 pb-20 gap-y-10 gap-x-8 max-[960px]:grid-cols-2 max-[960px]:px-6 max-[960px]:pt-8 max-[960px]:pb-[60px] max-[960px]:gap-y-8 max-[960px]:gap-x-5 max-[600px]:grid-cols-1 max-[600px]:px-5 max-[600px]:pt-6 max-[600px]:pb-12">
        {CARDS.map((card) => (
          <Link
            key={card.id}
            to={`/projects/${card.slug}`}
            className="flex flex-col cursor-pointer transition-opacity duration-[250ms] hover:opacity-85"
          >
            <div
              className="w-full h-[280px] rounded-xl overflow-hidden shrink-0 relative"
              style={{ backgroundColor: card.bgColor }}
            >
              {card.thumbnail && (
                <img
                  src={card.thumbnail}
                  alt={card.title}
                  className="w-full h-full object-cover object-top block"
                />
              )}
            </div>
            <div className="pt-4 flex flex-col gap-2">
              <div className="flex items-center gap-[10px] flex-wrap">
                <h3 className="text-[18px] font-bold text-black dark:text-white leading-[1.2] tracking-[-0.2px]">{card.title}</h3>
                <span
                  className={`text-[11px] font-semibold text-black/60 dark:text-white/60 px-[10px] py-[3px] rounded-full tracking-[0.3px] whitespace-nowrap shrink-0 ${BADGE_CLASSES[card.badge]}`}
                >
                  {card.badge} ↗
                </span>
              </div>
              <p className="text-sm leading-[1.6] text-black/50 dark:text-white/50 line-clamp-3">{card.description}</p>
              <p className="text-[13px] text-black/45 dark:text-white/45 font-medium mt-1">
                {card.company} <span className="mx-1 opacity-50">·</span> {card.year}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
