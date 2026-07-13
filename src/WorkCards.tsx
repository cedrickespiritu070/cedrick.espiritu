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
    slug: 'kadora-digital',
    title: 'Kadora Digital',
    badge: 'SHIPPED',
    description:
      'SaaS-style operations platform that combines a marketing site, client portal, and internal admin workspace. Centralizes onboarding, ticketing, scheduling, billing visibility, and AI-assisted workflows in one product.',
    company: 'Personal Project',
    year: '2026',
    bgColor: '#031417',
    thumbnail: '/projects-media/kadora/kadora-thumbnail.jpg',
    images: [
      '/projects-media/kadora/01-landing-clean.png',
      '/projects-media/kadora/02-dashboard-clean.png',
      '/projects-media/kadora/03-tickets-clean.png',
      '/projects-media/kadora/04-ai-clean.png',
      '/projects-media/kadora/05-what-we-do-clean.png',
      '/projects-media/kadora/06-how-it-works-clean.png',
      '/projects-media/kadora/07-pricing-clean.png',
    ],
    role: 'Full-Stack Product Developer',
    platform: 'Web',
    features: [
      'Role-aware client workspace and onboarding',
      'Creative ticketing, session booking, and comment threads',
      'Admin dashboard with kanban workflows and team assignment',
      'AI image generation with credit-based limits',
      'Content calendar, billing visibility, and plan-based gating',
    ],
    overview:
      'Kadora Digital is a SaaS-style platform built for a creative services business, combining a public marketing site, client portal, and internal admin workspace. I built the system to unify client communication, structured service requests, scheduling, billing visibility, and AI-assisted workflows in one operational layer.',
    sections: [
      {
        title: 'The Problem',
        body: 'Creative service operations often become fragmented across chat threads, email, spreadsheets, and disconnected tools. That makes it harder for clients to submit requests clearly, track progress, and stay aligned, while internal teams lose operational visibility across assignments, approvals, scheduling, and delivery workflows.',
      },
      {
        title: 'Technical Stack',
        body: 'Frontend: Next.js 16, React 19, TypeScript, Tailwind CSS 4, Framer Motion, Radix UI, dnd-kit, react-dropzone. Backend: Supabase Auth, PostgreSQL, Supabase Storage, server actions, and route handlers. AI: Claude Haiku for product and prompt analysis, fal.ai pipelines for GPT-Image-2, FLUX Schnell, and Ideogram-based generation flows. Infra and services: Resend for transactional email, Sharp for image processing, and role-based route protection built around a multi-surface App Router architecture.',
      },
      {
        title: 'Implementation Details',
        body: 'The platform is structured into three distinct surfaces: a public marketing site, a client dashboard, and an internal admin workspace, all within one Next.js App Router codebase. I implemented role-aware routing and protected flows for onboarding, ticket operations, calendar visibility, and internal team access. On the client side, users can submit creative requests, upload attachments, monitor schedules, view billing tiers, and generate branded visuals. On the admin side, the team can manage clients, move tickets through kanban workflows, assign work by talent, coordinate operational bookings, and oversee content planning.',
      },
      {
        title: 'Outcome',
        body: 'Kadora Digital became a unified operating layer for the business, replacing fragmented tools with one structured platform. The result is a clearer client experience, stronger internal workflow control, and a scalable foundation for expanding service offerings under a single product.',
      },
    ],
  },
  {
    id: 1,
    slug: 'metrosevn-ecommerce',
    title: 'MetroSevn Ecommerce',
    badge: 'SHIPPED',
    description:
      'Custom e-commerce storefront built with React, TypeScript, and AWS services. Features a Stripe-integrated checkout pipeline, product catalog, persistent cart, and a tailored shopping experience.',
    company: 'MetroSevn',
    year: '2026',
    bgColor: '#0d1220',
    thumbnail: '/projects-media/metrosevn/metrosevn-thumbnail2.jpg',
    role: 'Full-Stack Developer',
    platform: 'Web',
    features: [
      'Stripe checkout pipeline with webhook handling',
      'Session management via Zustand and AWS Cognito',
      'AWS RDS PostgreSQL for inventory',
      'Google OAuth federation through Cognito',
      'Custom storefront UI and shopping flow',
      'Deployed on AWS Amplify, Lambda, and API Gateway',
    ],
    overview:
      'Engineered a custom, ground-up e-commerce platform for a Lipa-based streetwear brand. I handled the full-stack implementation and frontend experience, delivering a tailored storefront instead of relying on generic templates.',
    sections: [
      {
        title: 'The Problem',
        body: 'The brand lacked a digital storefront and a secure way to process orders. They needed a high-performance shopping experience that reflected their identity while avoiding generic, template-driven ecommerce patterns.',
      },
      {
        title: 'Technical Stack',
        body: 'Frontend: React 19, TypeScript 5.7, Vite 6, Tailwind CSS 3. State and routing: React Router DOM v7, Zustand. Backend: AWS Lambda (Node.js 20.x) plus Express.js via serverless-http. Database: AWS RDS PostgreSQL 17. Auth: AWS Cognito with hosted UI, PKCE auth-code flow, and Google OAuth federation. Infra: AWS Amplify, API Gateway, S3, CloudFront, and SSM Parameter Store.',
      },
      {
        title: 'Implementation Details',
        body: 'I built a custom storefront with a brand-specific design system, a persistent cart flow, secure checkout handling, and an AWS-native backend split across dedicated Lambdas. The frontend implements a dependency-free PKCE OIDC client, while the backend uses secure token verification and environment-managed secrets to keep the stack production-ready.',
      },
      {
        title: 'Outcome',
        body: 'Delivered a production-ready storefront with a seamless end-to-end user journey, from product discovery and persistent cart management to secure checkout. The result was a tailored shopping experience that matched the brand and avoided the limits of cookie-cutter ecommerce templates.',
      },
    ],
    live: 'https://main.d2qdwnnlnucxe9.amplifyapp.com/',
  },
  {
    id: 2,
    slug: 'sony-a7r3',
    title: 'Sony a7R III Showcase',
    badge: 'SHIPPED',
    description:
      'A cinematic, scroll-driven product showcase featuring a long-form GSAP scroll journey, HTML5 Canvas frame sequence playback, and an interactive Three.js 3D model.',
    company: 'Personal Project',
    year: '2026',
    bgColor: '#0c0c0c',
    thumbnail: '/projects-media/sony-a7r3/sony-a7r3.gif',
    role: 'Frontend Developer',
    platform: 'Web',
    overview:
      'Built as a personal project to explore advanced scroll engineering and 3D rendering in the browser. The goal was to present the Sony a7R III through a cinematic, data-driven layout that translated product specs into motion and spatial depth.',
    features: [
      'GSAP ScrollTrigger journey across 1200vh',
      'HTML5 Canvas frame sequence playback',
      'Three.js 3D camera model with scroll-driven rotation',
      'Horizontal feature panels with scroll pinning',
      'Lenis smooth scroll paired with GSAP scrub',
    ],
    sections: [
      {
        title: 'The Concept',
        body: 'A personal project built to push what is possible in the browser through scroll-synchronized frame sequences, a live 3D model, and cinematic spec reveals. The product details became the content and the scroll became the interaction.',
      },
      {
        title: 'Technical Approach',
        body: 'The main challenge was synchronizing Lenis smooth scroll, GSAP ScrollTrigger, and Three.js RAF without jank. Frame sequence playback uses 300 JPEGs preloaded as ImageBitmap objects and rendered onto a sticky canvas. The 3D section drives a GLTF camera model via a shared mutable ref so scroll progress updates the model without triggering React re-renders.',
      },
      {
        title: 'Outcome',
        body: 'Shipped a fully interactive product showcase to Vercel with a long-form scroll journey, a Three.js explore section, horizontal panels, and animated spec callouts. The project demonstrates end-to-end ownership of a complex, performance-sensitive animation system in Next.js.',
      },
    ],
    links: [
      { label: 'Live Site', url: 'https://sony-alpha.vercel.app/' },
      { label: 'GitHub', url: 'https://github.com/cedrickespiritu070/sony-a7r3' },
    ],
  },
  {
    id: 3,
    slug: 'trackshot',
    title: 'TrackShot',
    badge: 'SHIPPED',
    description:
      'Production-ready mobile golf tournament management app for iOS and Android with 40+ scoring formats, live leaderboards, and advanced handicap logic.',
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
    role: 'Software Engineer',
    platform: 'iOS, Android',
    features: [
      'Production iOS and Android app',
      '40+ tournament scoring formats',
      'Real-time leaderboard via Supabase',
      'Advanced handicap and tiebreaker system',
      'App Store and Play Store listed',
    ],
    overview:
      'TrackShot is a production-ready mobile golf tournament management app for iOS and Android, supporting 40+ scoring formats, real-time leaderboards, advanced handicap calculations, and side games like Skins and Closest to the Pin. I contributed across product implementation and mobile delivery, helping shape the app experience from prototyping through store submission.',
    sections: [
      {
        title: 'Problem',
        body: 'Golf tournament management involves dozens of scoring formats, real-time score syncing across multiple devices, handicap calculations per format, team management, side game tracking, and push notifications. As the leaderboard grows, recalculating standings on every score change also creates database pressure that needs a caching layer to stay performant.',
      },
      {
        title: 'Process',
        body: 'I worked across the product lifecycle, contributing to prototyping, mobile UI implementation, and release preparation. The app is built with React Native and Expo Router, while Supabase powers PostgreSQL, Realtime subscriptions, Edge Functions for push notifications, and Storage. Auth supports both Google and Apple sign-in. I also integrated Redis to cache leaderboard state so standings are served from memory instead of being recomputed on every score change.',
      },
      {
        title: 'Outcome',
        body: 'TrackShot shipped to both the App Store and Google Play. The app supports live scoring, real-time leaderboard updates, a full handicap system, multiple tiebreaker methods, and team and side-game management. The Redis leaderboard caching work provides a path to lower database load as usage grows.',
      },
    ],
  },
  {
    id: 4,
    slug: 'parish-connect',
    title: 'Parish Connect',
    badge: 'SHIPPED',
    description:
      'Whitelabel platform digitizing parish operations through 12+ parish-branded mobile apps and a shared web admin panel.',
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
    role: 'Product Engineer',
    platform: 'iOS, Android, Web',
    features: [
      'Whitelabel support for 12+ parish apps',
      'Push notifications and PDF downloads',
      'Native calendar integration',
      'Full web-based admin panel',
      'Scripture readings and mass schedule modules',
    ],
    overview:
      'Parish Connect is a whitelabel platform that digitizes the pastoral and administrative operations of Roman Catholic parishes. A single codebase powers 12+ parish-branded apps and a web-based admin panel. My role focused on product design, interface systems, and shipping-ready UI assets across the platform.',
    sections: [
      {
        title: 'Problem',
        body: 'Parish staff were managing everything manually, from printed weekly bulletins to handwritten family records and phone-tree announcements. At the same time, each partner parish needed a distinct branded identity without the overhead of maintaining separate codebases.',
      },
      {
        title: 'Process',
        body: 'I designed and prototyped the full UI across both the mobile app and admin panel, covering announcements, events, mass schedules, bulletins, community records, gallery, ministry pages, prayers, readings, priest profiles, and audit logs. The engineering team built the platform in parallel using React, Vite, Tailwind, Supabase, Node.js, Express, React Native, and Expo.',
      },
      {
        title: 'Outcome',
        body: 'The result was a live system serving 12+ parishes, each with its own branded app. Parish admins manage content across all modules through the web panel, while parishioners access schedules, readings, bulletins, and notifications through the mobile experience.',
      },
    ],
  },
  {
    id: 5,
    slug: 'rfv-allianz',
    title: 'RFV Allianz App',
    badge: 'SHIPPED',
    description:
      'Enterprise web application for accounting, CFO analytics, daily sales tracking, and client reporting, all managed in one Turbo monorepo.',
    company: 'RFV Allianz',
    year: '2025',
    bgColor: '#1a1a2e',
    thumbnail: '/projects-media/rfv/rfv-thumbnail.jpg',
    images: [
      '/projects-media/rfv/rfv-page-1.jpg',
      '/projects-media/rfv/rfv-page-2.jpg',
    ],
    role: 'Software Engineer',
    platform: 'Web, Mobile',
    features: [
      '4-app Turbo monorepo architecture',
      'Multi-level document approval workflow',
      'Financial reports with PDF and Excel export',
      'Role-based access via Supabase RLS',
      'Accounting and operations modules',
    ],
    overview:
      'RFV Allianz System is a full-stack enterprise web application built to digitize and centralize the financial operations of RFV Allianz. The system spans four interconnected web apps and a shared monorepo. I contributed to frontend architecture and implementation across key modules from accounting workflows to operations management.',
    sections: [
      {
        title: 'Problem',
        body: 'RFV Allianz had no centralized digital system to manage financial and operational workflows. Approval chains were manual, executive sales visibility was fragmented, and fuels inventory tracking had no digital system at all.',
      },
      {
        title: 'Process',
        body: 'The system was built as a monorepo using Turbo and pnpm, separating concerns across FINANCE, CFO, JTA, and the client portal. Shared UI packages kept the interface consistent, while the backend used Node.js, Express, PostgreSQL, and Supabase RLS. I helped implement workflow-heavy modules and aligned UI decisions with the underlying accounting and operations logic.',
      },
      {
        title: 'Outcome',
        body: 'The team shipped a production-ready system covering accounting, CFO analytics, daily sales tracking, and client-level reporting. The approval workflow improved traceability, while dashboard and operations modules gave multiple departments clearer visibility into financial and inventory activity.',
      },
    ],
  },
  {
    id: 6,
    slug: 'tulay-app',
    title: 'Tulay App',
    badge: 'SHIPPED',
    description:
      'Digital ticketing and e-wallet platform for live events in the Philippines and the US with mobile-first purchasing, QR ticketing, and real-time analytics.',
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
    role: 'Software Engineer',
    platform: 'Web, Mobile',
    features: [
      'Dynamic QR code ticketing',
      'Stripe-powered secure payments',
      'Real-time sales analytics dashboard',
      'Mobile-first cashless experience',
    ],
    overview:
      'Tulay is a digital ticketing and e-wallet platform built for live events in the Philippines and the US. I contributed across product prototyping and engineering implementation, helping bring the experience from concept to production.',
    sections: [
      {
        title: 'Problem',
        body: 'The live events industry relied on outdated, hardware-heavy systems, long physical queues, and high ticketing fees. Organizers lacked real-time sales visibility, while consumers had no seamless digital delivery flow for tickets.',
      },
      {
        title: 'Process',
        body: 'I helped shape the product interface as the scope evolved from an e-wallet into an event-centric ticketing platform. On the engineering side, I integrated Stripe for secure payments and used Supabase for real-time data handling, making ticket discovery, checkout, and operations flows seamless across devices.',
      },
      {
        title: 'Outcome',
        body: 'The result was a fully digital, mobile-first ticketing stack that removed printed tickets and reduced queue friction. Tulay gave organizers a white-label platform with lower transaction overhead and real-time event operations visibility.',
      },
    ],
  },
  {
    id: 7,
    slug: 'wings-of-angels',
    title: 'Wings of Angels Transport',
    badge: 'SHIPPED',
    description:
      'Cross-platform transport management system for medical and mortuary logistics with dispatch workflows, technician coordination, PDF reports, and multi-role dashboards.',
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
    role: 'Mobile Developer',
    platform: 'iOS, Android, Web',
    features: [
      'Cross-platform iOS, Android, and Web',
      'Real-time job dispatching system',
      'Multi-role dashboard for dispatcher, tech, and admin',
      'PDF report generation',
      'Push notifications and offline sync',
    ],
    overview:
      'Wings of Angels is a full-stack transport management system built for medical and mortuary logistics. I contributed to product implementation across the Expo and React Native codebase, helped prepare the app for production release, and worked on performance improvements for the dashboard layer.',
    sections: [
      {
        title: 'Problem',
        body: 'Dashboard loads triggered full Firestore collection scans, pulling hundreds of documents per user regardless of role or relevance. That caused slow load times, high Firestore read costs, and redundant network activity during dispatch-heavy periods.',
      },
      {
        title: 'Process',
        body: 'I mapped the user flows for dispatchers, technicians, and admins, then translated them into production screens within the Expo codebase. I also analyzed Firestore query patterns and scoped a Redis caching strategy using Upstash to reduce repeated reads on role-specific dashboard views.',
      },
      {
        title: 'Outcome',
        body: 'The app shipped to both stores with multi-role workflows for dispatchers, technicians, and management. The caching work created a path to lower operational cost and improve dashboard response times during high-traffic dispatch windows.',
      },
    ],
  },
  {
    id: 8,
    slug: 'dss-brand-identity',
    title: 'DSS Brand Identity',
    badge: 'SHIPPED',
    description:
      'Comprehensive brand identity system for Divine Software Systems, including logo architecture, safe zones, and a technical brand manual.',
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
    role: 'Brand Designer',
    platform: 'Print, Digital',
    features: [
      'Vertical and horizontal logo lockups',
      'Safe zone and spacing rules',
      'Black and white high-contrast variant',
      '13-page technical brand manual',
      'Scales from small digital sizes to print',
    ],
    overview:
      'A brand identity system created for Divine Software Systems. I am keeping this project in the portfolio as part of my background, but it represents an earlier design-focused phase rather than my current specialization.',
    sections: [
      {
        title: 'Problem',
        body: 'The company needed a professional identity that balanced innovation with reliability and could stay consistent across different media.',
      },
      {
        title: 'Process',
        body: 'I designed a flexible logo system, defined spacing and safe-zone rules, tested monochrome variants, and compiled the work into a technical manual so future teams would have clear implementation guidelines.',
      },
      {
        title: 'Outcome',
        body: 'The result was a production-ready brand system with clear rules for scaling, spacing, contrast, and usage across digital and print contexts.',
      },
    ],
  },
  {
    id: 9,
    slug: 'ublc-360',
    title: 'UBLC 360',
    badge: 'SHIPPED',
    description:
      'Interactive virtual tour website with immersive 360 viewers, a PDF facility guide, and a guided onboarding flow.',
    company: 'University of Batangas Lipa',
    year: '2023',
    bgColor: '#0a1628',
    thumbnail: '/projects-media/ublc/ublc-thumbnail.gif',
    images: [
      '/projects-media/ublc/ublc-page-1.jpg',
    ],
    role: 'Frontend Developer',
    platform: 'Web',
    features: [
      'Immersive 360 panoramic room viewers',
      'Survey-driven onboarding flow',
      'Embedded PDF facility guide viewer',
      'Google Analytics integration',
      'Mobile responsive implementation',
    ],
    overview:
      'UBLC 360 is an interactive virtual tour website for the University of Batangas Lipa Campus Learning Commons. I handled the frontend build and the digital experience design from concept to production.',
    sections: [
      {
        title: 'Problem',
        body: 'Students and visitors had no way to explore campus facilities remotely or in advance, making orientation and navigation difficult without a physical visit.',
      },
      {
        title: 'Process',
        body: 'I built a static multi-page experience with a guided survey flow, then integrated 360 panoramic room viewers using Panolens.js and Three.js. I also added a PDF guide viewer via PDF.js and ensured mobile responsiveness across breakpoints.',
      },
      {
        title: 'Outcome',
        body: 'The finished site gave users an immersive way to explore campus facilities from any device, complete with interactive room viewers, a PDF guide, and a guided onboarding flow.',
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
                  {card.badge} {'>'}
                </span>
              </div>
              <p className="text-sm leading-[1.6] text-black/50 dark:text-white/50 line-clamp-3">{card.description}</p>
              <p className="text-[13px] text-black/45 dark:text-white/45 font-medium mt-1">
                {card.company} <span className="mx-1 opacity-50">.</span> {card.year}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
