import {
  SiReact, SiTypescript, SiVite, SiTailwindcss, SiReactrouter,
  SiExpo, SiNodedotjs, SiExpress, SiServerless, SiLaravel, SiPhp,
  SiPostgresql, SiSupabase, SiFirebase, SiRedis,
  SiFigma, SiJavascript, SiHtml5, SiCss,
  SiNextdotjs, SiVuedotjs,
  SiGooglecloud, SiVercel, SiTurborepo,
  SiDocker, SiGithub, SiPostman, SiJira,
  SiStripe, SiMeta, SiTiktok,
  SiGreensock, SiThreedotjs,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import type { IconType } from 'react-icons'

interface Skill {
  label: string
  icon?: IconType
  color?: string
  img?: string
}

const SKILLS: { category: string; items: Skill[] }[] = [
  {
    category: 'Frontend',
    items: [
      { label: 'React',        icon: SiReact,       color: '#61DAFB' },
      { label: 'Next.js',      icon: SiNextdotjs,   color: '#ffffff' },
      { label: 'TypeScript',   icon: SiTypescript,  color: '#3178C6' },
      { label: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { label: 'Vite',         icon: SiVite,        color: '#646CFF' },
      { label: 'React Router', icon: SiReactrouter, color: '#CA4245' },
      { label: 'Vue',          icon: SiVuedotjs,    color: '#4FC08D' },
      { label: 'GSAP',         icon: SiGreensock,   color: '#88CE02' },
      { label: 'Three.js',     icon: SiThreedotjs,  color: '#ffffff' },
      { label: 'Lenis' },
      { label: 'Zustand' },
    ],
  },
  {
    category: 'Backend & Data',
    items: [
      { label: 'Supabase',             icon: SiSupabase,    color: '#3ECF8E' },
      { label: 'PostgreSQL',           icon: SiPostgresql,  color: '#4169E1' },
      { label: 'Node.js',              icon: SiNodedotjs,  color: '#339933' },
      { label: 'Express',              icon: SiExpress,    color: '#888888' },
      { label: 'Firebase',             icon: SiFirebase,    color: '#FFCA28' },
      { label: 'Redis',                icon: SiRedis,       color: '#FF4438' },
      { label: 'AWS RDS',              icon: FaAws,         color: '#FF9900' },
      { label: 'AWS Cognito',          icon: FaAws,         color: '#FF9900' },
    ],
  },
  {
    category: 'Mobile',
    items: [
      { label: 'React Native', icon: SiReact,       color: '#61DAFB' },
      { label: 'Expo',         icon: SiExpo,        color: '#ffffff' },
      { label: 'Expo Router',  icon: SiExpo,        color: '#ffffff' },
      { label: 'NativeWind',   icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    items: [
      { label: 'AWS Lambda',           icon: FaAws,        color: '#FF9900' },
      { label: 'API Gateway',          icon: FaAws,        color: '#FF9900' },
      { label: 'S3 & CloudFront',      icon: FaAws,        color: '#FF9900' },
      { label: 'AWS Amplify',          icon: FaAws,        color: '#FF9900' },
      { label: 'Serverless Framework', icon: SiServerless,  color: '#FD5750' },
      { label: 'GCP',                  icon: SiGooglecloud, color: '#4285F4' },
      { label: 'Vercel',               icon: SiVercel,      color: '#ffffff' },
      { label: 'Turborepo',            icon: SiTurborepo,   color: '#EF4444' },
      { label: 'Laravel',              icon: SiLaravel,     color: '#FF2D20' },
      { label: 'PHP',                  icon: SiPhp,         color: '#777BB4' },
    ],
  },
  {
    category: 'Design',
    items: [
      { label: 'Figma',       icon: SiFigma,          color: '#F24E1E' },
      { label: 'Photoshop',   img: 'https://skillicons.dev/icons?i=ps' },
      { label: 'Illustrator', img: 'https://skillicons.dev/icons?i=ai' },
    ],
  },
  {
    category: 'Tools',
    items: [
      { label: 'Docker',  icon: SiDocker,  color: '#2496ED' },
      { label: 'GitHub',  icon: SiGithub,  color: '#ffffff' },
      { label: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { label: 'Jira',    icon: SiJira,    color: '#0052CC' },
      { label: 'CI/CD' },
    ],
  },
  {
    category: 'API Integrations',
    items: [
      { label: 'Stripe API',       icon: SiStripe, color: '#635BFF' },
      { label: 'Meta Graph API',   icon: SiMeta,   color: '#0082FB' },
      { label: 'TikTok Shop API',  icon: SiTiktok, color: '#EE1D52' },
    ],
  },
  {
    category: 'Languages',
    items: [
      { label: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { label: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { label: 'PHP',        icon: SiPhp,        color: '#777BB4' },
      { label: 'HTML',       icon: SiHtml5,      color: '#E34F26' },
      { label: 'CSS',        icon: SiCss,        color: '#1572B6' },
    ],
  },
]

export default function Skills() {
  return (
    <section className="bg-[#f1f1ee] dark:bg-[#111110] border-t border-black/10 dark:border-white/10 px-12 py-14 max-[900px]:px-6 max-[900px]:py-10 max-[480px]:px-5">
      <div className="max-w-[1248px] mx-auto">
        <p className="text-[13px] font-semibold tracking-[0.08em] uppercase text-black/35 dark:text-white/35 mb-8">
          Tech & Tools
        </p>
        <div className="grid grid-cols-3 gap-x-10 gap-y-10 max-[900px]:grid-cols-2 max-[480px]:grid-cols-1">
          {SKILLS.map((group) => (
            <div key={group.category}>
              <p className="text-[13px] font-bold text-black/40 dark:text-white/40 mb-3 uppercase tracking-[0.06em]">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item.label}
                    className="flex items-center gap-[7px] text-[13px] font-medium text-black/70 dark:text-white/60 bg-black/[0.06] dark:bg-white/[0.07] px-3 py-[5px] rounded-full"
                  >
                    {item.img ? (
                      <img src={item.img} alt={item.label} width={13} height={13} style={{ flexShrink: 0 }} />
                    ) : item.icon ? (
                      <item.icon size={13} color={item.color} style={{ flexShrink: 0 }} />
                    ) : null}
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
