/** All the text on the site lives here, so updating the portfolio never means touching components. */

export interface Project {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  image: string;
  imageAlt: string;
  code: string;
  demo: string;
}

export interface Job {
  period: string;
  role: string;
  company: string;
  place: string;
  summary: string;
  current?: boolean;
}

export interface SkillGroup {
  title: string;
  items: string;
}

export const profile = {
  name: "Francesc Gimenez Gil",
  shortName: "Francesc Gimenez",
  role: "Front-end developer & UX/UI designer",
  location: "Barcelona",
  email: "fgimgil@gmail.com",
  linkedin: "https://www.linkedin.com/in/francesc-gimenez-gil-9802ab28b/",
  github: "https://github.com/franziskus16",
  cv: "Francesc_Gimenez_CV.pdf",
  intro:
    "I take web products from Figma to production, building fast, accessible interfaces with Vue.js and TypeScript, and measuring what they do for the business.",
};

export const highlights = [
  { value: "+20%", label: "Core Web Vitals and search rankings in the last year", accent: true },
  { value: "10+ yrs", label: "designing and building for the web" },
  { value: "Vue · React · Angular", label: "all three with TypeScript, tests and live demos" },
];

export const projects: Project[] = [
  {
    slug: "pet-meal-planner",
    title: "Pet Meal Planner",
    summary:
      "Multi-step form with a persistent A/B test, analytics ready for Google Tag Manager and a hexagonal architecture. Tested with Vitest and Playwright.",
    tags: ["Nuxt 4", "Vue 3", "TypeScript", "Pinia"],
    image: "projects/pet-meal-planner.webp",
    imageAlt: "Pet Meal Planner home page",
    code: "https://github.com/franziskus16/nuxt-pet-diet-form",
    demo: "https://franziskus16.github.io/nuxt-pet-diet-form/",
  },
  {
    slug: "loopi",
    title: "Loopi",
    summary:
      "Online shop with search, category filters and a cart built with Context and useReducer. Tested with Vitest and React Testing Library.",
    tags: ["React 19", "TypeScript", "Tailwind"],
    image: "projects/loopi.webp",
    imageAlt: "Loopi product collection page",
    code: "https://github.com/franziskus16/loopi",
    demo: "https://loopi.vercel.app",
  },
  {
    slug: "airports-explorer",
    title: "Airports Explorer",
    summary:
      "Browse international airports with login, route guards, an HTTP interceptor and app state managed with NgRx.",
    tags: ["Angular 22", "NgRx", "Signals"],
    image: "projects/airports-explorer.webp",
    imageAlt: "Airports Explorer list of airports",
    code: "https://github.com/franziskus16/angular-airports-explorer",
    demo: "https://franziskus16.github.io/angular-airports-explorer/",
  },
];

export const experience: Job[] = [
  {
    period: "2025 – Present",
    role: "Senior Front-End Developer",
    company: "Your New Self (Multiestetica)",
    place: "Barcelona",
    summary:
      "Features across a Vue.js and TypeScript monorepo for a leading aesthetics platform, from Figma to production. SEO, SEM and GA4/GTM tracking focused on conversion, and AI-assisted product work with Claude Code.",
    current: true,
  },
  {
    period: "2019 – 2024",
    role: "Front-End Developer & UX/UI Designer",
    company: "Larcier-Intersentia",
    place: "Barcelona / Luxembourg",
    summary:
      "Responsive sites and reusable Vue components for a European legal publisher. Led wireframes, prototypes and user flows, and ran usability and A/B tests.",
  },
  {
    period: "2017 – 2019",
    role: "Front-End Developer",
    company: "3D Tech Omega Zeta",
    place: "Barcelona",
    summary: "Turned UX wireframes and mockups into responsive, interactive features.",
  },
  {
    period: "2009 – 2017",
    role: "Web & Graphic Designer",
    company: "Freelance",
    place: "Barcelona",
    summary: "Custom WordPress sites, brand identities and print work for clients across many industries.",
  },
];

export const skills: SkillGroup[] = [
  {
    title: "Build",
    items: "Vue.js, Nuxt, React, Angular, TypeScript, Pinia, NgRx, Tailwind, SASS, Vitest, Playwright",
  },
  {
    title: "Design",
    items: "UX/UI, design systems, wireframes and prototypes in Figma, accessibility, branding",
  },
  {
    title: "Grow",
    items: "Core Web Vitals, SEO and SEM, Google Analytics 4, Google Tag Manager, conversion",
  },
  {
    title: "AI",
    items: "Claude Code, agent-based front-end workflows, AI-assisted product definition",
  },
];

export const about = [
  "I studied Arts and Design at Escola Massana (UAB) and spent an Erasmus year at the Universität der Künste in Berlin, then moved into code at Ubiqum Code Academy. That mix is still how I work: I care about how things look and how they are built.",
  "Lately I have been going deep on AI, with courses on LLMs, RAG, MCP and agentic workflows, and using Claude Code in my daily work.",
  "I speak Catalan, Spanish and English. Outside work: comics, videogames, cinema, football and travelling.",
];
