# LinkedIn Optimization Notes

Last updated: July 22, 2026

This file contains LinkedIn-ready content based on the actual codebases and docs from:

- `C:\Users\cedri\OneDrive\Desktop\kadora-digital`
- `C:\Users\cedri\OneDrive\Desktop\clonedrepo\MetroSevn-AWS`
- `C:\Users\cedri\OneDrive\Desktop\clonedrepo\St-Joachim-Admin`
- `C:\Users\cedri\OneDrive\Desktop\clonedrepo\St-Joachim-App`

Use this as the source of truth when updating:

- Headline
- About
- Top Skills
- Featured
- Project entries
- Experience bullets

## 1. Recommended Headline

Primary version:

`Full-Stack Developer | React, Next.js, TypeScript, Node.js, React Native | Building SaaS, Internal Tools, E-commerce, and Mobile Apps`

Shorter version:

`Software Engineer | React, Next.js, TypeScript, Node.js, React Native`

## 2. Recommended About

```text
I am a Full-Stack Developer focused on building modern web and mobile applications using React, Next.js, TypeScript, Node.js, and React Native.

I work across frontend, backend, and product implementation. My experience includes SaaS platforms, internal tools, client portals, e-commerce systems, dashboards, and mobile apps. I care about clean UI, stable user flows, and shipping features that are useful in real business settings.

I have worked with React, Next.js, Vite, Tailwind CSS, Node.js, Express, Supabase, PostgreSQL, AWS, API integrations, and mobile workflows using React Native and Expo. I am comfortable building user interfaces, connecting backend services, handling authentication, improving performance, and shipping production-ready features across web and mobile products.

Open to full-time opportunities in remote, hybrid, or onsite roles within Manila and anywhere in Luzon.
```

## 3. Top 5 Skills For Profile

Use these instead of generic broad labels:

- `React.js`
- `Next.js`
- `TypeScript`
- `Node.js`
- `React Native`

## 4. Strong Skills To Add In The Full Skills Section

- `JavaScript`
- `Tailwind CSS`
- `PostgreSQL`
- `Supabase`
- `Express.js`
- `AWS Lambda`
- `Amazon Cognito`
- `Amazon S3`
- `CloudFront`
- `Vite`
- `Expo`
- `REST APIs`
- `Git`
- `Responsive Web Design`
- `Full-Stack Development`

## 5. Featured Section

Recommended order:

1. Portfolio website
2. Resume PDF
3. Kadora project
4. MetroSevn project
5. Parish Connect project

If LinkedIn asks for titles, use:

- `Portfolio | Selected Web and Mobile Projects`
- `Resume | Cedrick Espiritu`
- `Kadora | Full-Stack Client Portal and Admin Workspace`
- `MetroSevn | E-commerce and AWS Migration Project`
- `Parish Connect | Parish Mobile App and Admin CMS`

## 6. Project Entry - Kadora

### Project name

`Kadora | Full-Stack Client Portal, Admin Workspace, and Marketing Site`

### Description

```text
Kadora is a full-stack platform built for a creative services business, combining a public marketing site, client portal, and internal admin workspace in one Next.js application.

I worked across product implementation for client-facing and internal workflows. The platform includes onboarding, creative ticket submission, content planning, booking-related flows, billing visibility, module-gated features, and role-based access for both clients and admins.

I also worked on AI-assisted creative generation features, including image generation and editing workflows using fal.ai, OpenAI GPT-Image-2, Ideogram, Sharp, and brand-context analysis pipelines. The system supports branded asset generation, reference-aware creative output, and stored generation history inside the dashboard experience.

Tech used: Next.js, React, TypeScript, Tailwind CSS, Supabase Auth, Supabase Postgres, Supabase Storage, Resend, fal.ai, Sharp.
```

### Suggested skills

- `Next.js`
- `React.js`
- `TypeScript`
- `Supabase`
- `PostgreSQL`

### What is confirmed from the repo

- Full-stack client portal, admin workspace, and marketing site
- Client dashboard for tickets, calendar, AI generation, billing, stats, and settings
- Admin panel for clients, tickets, team management, industries, availability, and operations
- AI generation routes at:
  - `src/app/api/ai/generate/route.ts`
  - `src/app/api/ai/edit/route.ts`
- `fal.ai` is actively used through `@fal-ai/client`
- Uses `Next.js 16`, `React 19`, `TypeScript`, `Tailwind CSS 4`, `Supabase`, `Resend`, and `Sharp`

## 7. Project Entry - MetroSevn

### Project name

`MetroSevn | E-commerce Storefront and AWS Migration Project`

### Description

```text
MetroSevn is a custom e-commerce and operations project that combines a public storefront with an admin dashboard for TikTok Shop settlement and partner operations workflows.

I worked on full-stack implementation across the frontend, backend, and infrastructure-facing parts of the project. The storefront was built with React, TypeScript, Vite, and Tailwind CSS, while the backend used serverless API routes and custom TikTok Shop integrations.

A major part of the project involved migrating core platform pieces from Supabase to AWS. This included moving the data layer to AWS RDS PostgreSQL, shifting authentication to Amazon Cognito, migrating storage to S3 and CloudFront, and routing backend workflows through Lambda and API Gateway.

Tech used: React, TypeScript, Vite, Tailwind CSS, AWS Lambda, API Gateway, Amazon Cognito, RDS PostgreSQL, S3, CloudFront, TikTok Shop API.
```

### Suggested skills

- `React.js`
- `TypeScript`
- `AWS Lambda`
- `Amazon Cognito`
- `PostgreSQL`

### What is confirmed from the repo

- Public storefront plus private dashboard
- TikTok Shop integration with signed API requests
- AWS migration phases documented in detail
- Migration work includes:
  - Supabase to RDS
  - Supabase Auth to Cognito
  - Supabase Storage to S3 and CloudFront
  - serverless backend deployment through Lambda and API Gateway

## 8. Project Entry - Parish Connect

### Project name

`Parish Connect | Parish Mobile App and Admin CMS`

### Description

```text
Parish Connect is a church community platform made up of a mobile app and a web-based admin CMS for managing parish content, announcements, events, bulletins, readings, prayers, services, galleries, staff records, and community updates.

I contributed across both the admin and mobile experience. The admin side provides publishing and management workflows for parish staff, while the mobile app delivers content to parishioners through a structured, module-based experience.

The mobile app includes engagement features such as push notifications, event reminders, content access, and parish information flows. The overall system was built to help parishes manage communication, content delivery, and community engagement through one connected platform.

Tech used: React, Vite, React Native, Expo, Supabase, Tailwind CSS, NativeWind, Expo Notifications.
```

### Suggested skills

- `React Native`
- `Expo`
- `React.js`
- `Supabase`
- `Tailwind CSS`

### What is confirmed from the repos

- Web admin repo: `St-Joachim-Admin`
- Mobile app repo: `St-Joachim-App`
- Admin uses `React`, `Vite`, `Tailwind`, and `Supabase`
- Mobile app uses `React Native`, `Expo`, `expo-notifications`, and `Supabase`
- Modules visible in code include announcements, events, bulletin, readings, prayers, services, gallery, analytics, staff management, and community ads

## 9. Experience Bullet Style Guide

For LinkedIn experience bullets, use this pattern:

- what the product was
- what you built
- what stack you used
- what workflow or business problem it solved

Examples you can adapt:

- Built responsive web interfaces and product workflows using `React`, `Next.js`, and `TypeScript`
- Developed backend features and API-driven flows using `Node.js`, `Express`, `Supabase`, and `PostgreSQL`
- Implemented authentication, role-based access, dashboard modules, and internal operations tools
- Contributed to mobile product delivery using `React Native`, `Expo`, and notification workflows
- Worked across full-stack product development for SaaS platforms, internal tools, client portals, and e-commerce systems

## 10. Search Optimization Notes

To improve recruiter search visibility, make sure these exact keywords appear in your profile naturally:

- `React`
- `Next.js`
- `TypeScript`
- `Node.js`
- `React Native`
- `Supabase`
- `PostgreSQL`
- `AWS`
- `Vite`
- `Expo`
- `Full-Stack Developer`
- `Software Engineer`

Best places to repeat them:

- headline
- about
- experience bullets
- projects
- skills

## 11. What To Update First On LinkedIn

Priority order:

1. Update `Headline`
2. Update `About`
3. Add the top 5 skills
4. Add `Kadora`, `MetroSevn`, and `Parish Connect` to Projects
5. Pin your portfolio and resume in `Featured`
6. Rewrite recent experience bullets to match the projects and stack above

