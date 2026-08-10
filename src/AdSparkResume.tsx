const workExperience = [
  {
    role: 'Software Engineer',
    type: 'Full-time',
    company: 'Divine Software Systems LLC',
    period: 'Sep 2024 - Mar 2026',
    setup: 'Hybrid',
    location: 'Fremont, California & Quezon City, Philippines',
    bullets: [
      'Set up development environments, repositories, and workflows as the company\'s first technical hire, helping the team collaborate across multiple concurrent client projects.',
      'Developed modern web applications using React, Next.js, TypeScript, Tailwind CSS, Vite, and REST APIs across active client projects.',
      'Handled UAT, release preparation, and production support across shipped applications.',
      'Delivered end-to-end product work from planning and prototyping through implementation, QA, presentation, and deployment.',
      'Implemented secure payment and order flows using Stripe APIs, webhooks, and realtime backend sync for user-facing commerce features.',
      'Supported product issues, launch readiness, and live-system fixes while keeping existing flows stable.',
    ],
    stack: 'React.js, TypeScript, Vite, REST APIs, Expo, Supabase, Stripe API, Webhooks',
  },
  {
    role: 'Jr. Laravel Website Developer',
    type: 'Full-time',
    company: 'Simply Be Found',
    period: 'Aug 2023 - Aug 2024',
    setup: 'On-site',
    location: 'Colorado, USA',
    bullets: [
      'Developed responsive websites for digital marketing clients using HTML, CSS, JavaScript, and PHP (Laravel).',
      'Collaborated through GitHub-based workflows for version control and team integration.',
      'Built reusable UI components that reduced implementation time for recurring campaign builds.',
    ],
    stack: 'HTML, CSS, JavaScript, PHP, Laravel',
  },
]

const projects = [
  {
    name: 'MetroSevn - Full-stack Ecommerce Platform (AWS-Native Migration)',
    role: 'Full-Stack Developer',
    bullets: [
      'Migrated the ecommerce platform from a simpler stack into an AWS-native architecture using Lambda, RDS PostgreSQL, S3, CloudFront, Cognito, API Gateway, and Amplify.',
      'Implemented a serverless backend architecture for storefront operations, authentication, product management, and secure checkout flows.',
      'Handled auth, infrastructure, API integration, and deployment across a production-ready shopping experience.',
      'Integrated external commerce workflows and secure asset delivery with cloud-hosted infrastructure and caching strategy.',
    ],
    stack: 'AWS, Lambda, RDS PostgreSQL, S3, CloudFront, Cognito, API Gateway, Amplify',
  },
  {
    name: 'Kadora',
    role: 'Full-Stack Developer',
    bullets: [
      'Built a full-stack client portal and admin platform using Next.js, React, TypeScript, and Supabase.',
      'Developed authenticated product workflows across onboarding, tickets, calendar, billing, settings, analytics, and internal admin management.',
      'Implemented role-based access, server-side data flows, storage integration, and API-driven features across client-facing and internal systems.',
      'Supported AI-powered content generation features including branded asset uploads, prompt workflows, and image generation pipeline integration.',
    ],
    stack: 'Next.js, React, TypeScript, Supabase, REST APIs, Tailwind CSS, Resend, Sharp',
  },
  {
    name: 'Parish Connect Apps (12+ Mobile & Admin Systems)',
    role: 'Software Engineer',
    bullets: [
      'Contributed to a whitelabel product ecosystem powering 12 parish-branded mobile apps and admin systems.',
      'Supported interface flows, shipping-ready UI systems, and product delivery across mobile and admin experiences.',
      'Helped support a live product footprint that reached published app-store releases and multi-parish adoption.',
    ],
    stack: 'React Native, Expo, TypeScript, Supabase, PostgreSQL',
  },
  {
    name: 'RFV Allianz System (Finance & Operations Platform)',
    role: 'Software Engineer',
    bullets: [
      'Worked on finance and operations modules covering purchase orders, sales, delivery tracking, dashboards, and internal reporting.',
      'Built workflow-heavy interfaces and reporting tools used across accounting and sales operations.',
      'Contributed to scalable product architecture for multi-department internal systems.',
    ],
    stack: 'REST APIs, React, Node.js, Supabase, Turborepo',
  },
  {
    name: 'PERA Operations Module (Fuel Inventory System)',
    role: 'Lead Developer',
    bullets: [
      'Built an end-to-end operations module for fuel inventory management including purchase orders, item receipts, pricing, and asset transfer tracking.',
      'Developed dashboards for real-time inventory visibility and operational monitoring.',
    ],
    stack: 'React, Node.js, Supabase, Expo, Turborepo',
  },
  {
    name: 'CFO Dashboard (Sales & Performance Analytics)',
    role: 'Lead Developer',
    bullets: [
      'Developed KPI dashboards and reporting tools for executive-level decision making.',
      'Implemented sales tracking, product mix analysis, and target-versus-actual reporting features.',
      'Integrated data import and visualization workflows for performance monitoring.',
    ],
    stack: 'React, Node.js, Supabase, Turborepo, Figma',
  },
]

const skills = [
  ['Databases', 'PostgreSQL, MySQL'],
  ['Frameworks & Libraries', 'React, Next.js, React Native, Expo, Tailwind CSS, Vite, Laravel, Vue.js'],
  ['Programming Languages', 'JavaScript, TypeScript, PHP'],
  ['Tools & Platforms', 'Figma, Node.js, Express, Supabase, REST APIs, AWS, Google Cloud Platform (GCP), Vercel, Postman, Docker, Github, Jira, CI/CD'],
  ['API Integrations', 'Meta Graph API, Stripe API, TikTok Shop API'],
  ['Security-Adjacent', 'Authentication flows, secure payment handling, webhook integrations, cloud deployments, production issue triage'],
  ['Soft Skills', 'Communication, Teamwork, Problem Solving, Critical Thinking, Adaptability'],
  ['Languages', 'English, Tagalog'],
] as const

const education = [
  {
    school: 'University of Batangas - Lipa Campus',
    location: 'Lipa City',
    degree: 'Bachelor of Multimedia Arts',
    period: '2020 - 2024',
    meta: ['CGPA : 1.77', 'Cum Laude'],
  },
  {
    school: 'Asian Institute of Computer Studies',
    location: 'Lipa',
    degree: 'Information and Communication Technology',
    period: '2018 - 2020',
    meta: ['CGPA : 96', 'Best in Thesis - Resume QR Code Generator', 'Leadership Awardee'],
  },
]

const awards = [
  'Cum Laude - University of Batangas Lipa City (2024)',
  'Leadership Award - AICS Lipa (2020)',
]

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3 text-[13px] font-extrabold uppercase tracking-[0.08em] text-black dark:text-white">
      {children}
    </h2>
  )
}

export default function AdSparkResume() {
  return (
    <section className="bg-[#f1f1ee] px-4 py-6 dark:bg-[#111110] sm:px-6 lg:px-8 print:bg-white print:px-0 print:py-0">
      <div className="mx-auto max-w-[860px] bg-white px-8 py-10 text-black shadow-[0_10px_30px_rgba(0,0,0,0.08)] dark:bg-white dark:text-black sm:px-10 print:max-w-none print:shadow-none">
        <header className="border-b border-black pb-4">
          <h1 className="text-[28px] font-extrabold leading-tight">Cedrick Espiritu</h1>
          <p className="mt-1 text-[15px] font-bold">Software Engineer | Product Development, Web Applications, APIs</p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[13px] leading-6">
            <span>09853823940</span>
            <span>cedrickespiritu070@gmail.com</span>
            <span>linkedin</span>
            <span>GitHub</span>
            <span>Website</span>
            <span>Batangas, Philippines</span>
          </div>
        </header>

        <div className="mt-6 space-y-6 text-[13.5px] leading-[1.55]">
          <section>
            <SectionTitle>About Me</SectionTitle>
            <p>
              Software engineer with experience building modern web and mobile products using React, Next.js, TypeScript, React Native, Supabase, and AWS-backed services. Strong in product implementation, user-facing features, practical integrations, authentication flows, debugging production issues, and shipping production-ready applications across web, internal tools, dashboards, ecommerce systems, and workflow-heavy products. Background in multimedia and design strengthens interface clarity, but my primary focus is software engineering.
            </p>
          </section>

          <section>
            <SectionTitle>Work Experiences</SectionTitle>
            <div className="space-y-5">
              {workExperience.map((item) => (
                <article key={`${item.role}-${item.company}`}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="font-extrabold">{item.role}</p>
                      <p className="font-medium">{item.type}</p>
                      <p className="font-medium">{item.company}</p>
                    </div>
                    <div className="sm:text-right">
                      <p>{item.period}</p>
                      <p>{item.setup}</p>
                      <p>{item.location}</p>
                    </div>
                  </div>
                  <ul className="mt-2 list-disc space-y-1 pl-5 marker:text-black">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <p className="mt-2"><span className="font-extrabold">Technologies / Skills Used :</span> {item.stack}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <SectionTitle>Projects</SectionTitle>
            <div className="space-y-5">
              {projects.map((project) => (
                <article key={project.name}>
                  <p className="font-extrabold">{project.name}</p>
                  <p className="font-medium">{project.role}</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 marker:text-black">
                    {project.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <p className="mt-2"><span className="font-extrabold">Technologies / Tools Used :</span> {project.stack}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <SectionTitle>Skills</SectionTitle>
            <div className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
              {skills.map(([label, value]) => (
                <p key={label}><span className="font-extrabold">{label} :</span> {value}</p>
              ))}
            </div>
          </section>

          <section>
            <SectionTitle>Educations</SectionTitle>
            <div className="space-y-4">
              {education.map((item) => (
                <article key={item.school}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="font-extrabold">{item.school}</p>
                      <p className="font-medium">{item.degree}</p>
                    </div>
                    <div className="sm:text-right">
                      <p>{item.location}</p>
                      <p>{item.period}</p>
                    </div>
                  </div>
                  <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
                    {item.meta.map((meta) => (
                      <span key={meta}>{meta}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <SectionTitle>Awards & Achievements</SectionTitle>
            <ul className="list-disc space-y-1 pl-5 marker:text-black">
              {awards.map((award) => (
                <li key={award}>{award}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  )
}
