import type { Profile } from '@/types/profile'

// ─────────────────────────────────────────────────────────────────────────────
// OWNER: This is your content file. Edit the values below to update the site.
// Save the file — the browser updates automatically.
// ─────────────────────────────────────────────────────────────────────────────

export const profile: Profile = {
  name: 'Bharat Soni',
  title: 'Economic and Strategic Advisor',
  tagline: 'Translating macro-economic data into decisions that move businesses forward.',
  location: 'Toronto, Canada',
  photoUrl: '/bharat_soni.jpg', // Add your photo: place photo.jpg in frontend/public/ then set this to '/photo.jpg'

  social: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/bharatsoni97',
      icon: 'Linkedin',
    },
    {
      label: 'Email',
      href: 'mailto:bharatsoni@hotmail.ca',
      icon: 'Mail',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/bharatsoni97',
      icon: 'Github',
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/_bharat97/',
      icon: 'Instagram',
    },
  ],

  bio: `I'm an economic and strategic advisor with a background in financial and business economics and five years of experience applying that training across government and consulting. I've worked inside a provincial ministry designing policy programs for a $2.6B budget, and at KPMG advising firms across financial services, energy, utilities, and mining on how economic forces shape operations and strategy.

My work sits at the intersection of macroeconomic analysis and operational reality — where the insight only matters if it changes the decision. I'm building Econometrics.AI to extend that practice: giving businesses direct access to the quantitative economic analysis that typically lives inside advisory engagements.

I hold three degrees from Schulich and York University, including an accelerated MBA in progress, and have twice represented York at the Bank of Canada Governor's Challenge.`,

  education: [
    {
      institution: 'Schulich School of Business, York University',
      degree: 'Master of Business Administration (MBA)',
      years: '2026 – Present',
      highlights: [
        'Accelerated part-time stream; specialization in Finance & Strategic Management',
      ],
    },
    {
      institution: 'Schulich School of Business, York University',
      degree: 'Master of Management (MMgt)',
      years: '2020 – 2021',
      highlights: [
        "GPA 3.8/4.0 | Dean's List | Academic Excellence Scholarship",
        'Capstone: Sober Island Brewing Company — redesigned go-to-market strategy through primary research and demand forecasting',
      ],
    },
    {
      institution: 'York University',
      degree: 'Specialized Honours B.A., Financial and Business Economics',
      years: '2015 – 2020',
      highlights: [
        'Focus: Macroeconomics, Econometrics, International Trade & FX, Monetary & Fiscal Policy, Labour Economics',
        "Bank of Canada Governor's Challenge participant — 2016 and 2017",
      ],
    },
  ],

  experience: [
    {
      company: 'KPMG LLP',
      role: 'Senior Consultant, Risk Advisory',
      years: '2023 – 2025',
      location: 'Toronto, ON',
      bullets: [
        'Advised CxO and product teams across financial services, utilities, energy, and mining on operational and economic risk, translating analysis into executive decisions in complex, fast-moving environments.',
        'Supported a $2.3B M&A integration, analyzing technology and governance ecosystems to quantify synergies and guide strategic trade-off decisions.',
        'Built quantitative models and scenario frameworks — including an Alteryx revenue-validation model across $200M in annual exposure — to strengthen financial transparency and executive confidence.',
        'Published risk methodology for AI products; led business development contributing $2.5M in new annual revenue.',
      ],
    },
    {
      company: 'Ontario Public Service — Ministry of Children, Community & Social Services',
      role: 'Analyst, Operational Finance Branch',
      years: '2018 – 2019',
      location: 'Toronto, ON',
      bullets: [
        'Designed business-intelligence tools supporting a provincial consolidation strategy across 256 agencies and $250M in annualized savings.',
        'Conducted a Commonwealth jurisdictional scan across five countries and three provinces, commissioned by the Deputy Minister, to inform social-services modernization policy.',
        'Led migration from IBM Cognos to Microsoft Azure, enabling $50M in automated annual transfer payments and scalable self-service reporting.',
        'Prepared bilingual executive communications and leadership transition materials supporting seamless integration of merged ministries.',
      ],
    },
  ],

  competitions: [
    {
      name: "Bank of Canada Governor's Challenge",
      organizer: 'Bank of Canada',
      year: '2016, 2017',
      result: 'Finalist (×2)',
      description: "Modeled inflation drivers and macroeconomic conditions in R across a 10-week research cycle, presenting monetary-policy recommendations on the overnight interest rate directly to the Bank's Governing Council.",
    },
    {
      name: "Dean's Cup Strategy Competition",
      organizer: 'Schulich School of Business',
      year: '2021',
      result: '2nd Place',
      description: 'Led a six-member team through four consulting-style cases spanning market entry, sustainability, M&A, and return-to-office strategy.',
    },
  ],

  leadership: [
    {
      organization: 'York Economics Association',
      role: 'Alumni Keynote Speaker',
      years: '2024 – Present',
      description: 'Delivered annual keynote to economics graduates on economics-enabled careers in advisory, consulting, and public policy.',
    },
    {
      organization: 'Schulich School of Business — Centre for Career Development',
      role: 'Ambassador',
      years: '2026 – Present',
      description: 'Connect students with alumni and industry leaders, organizing career panels and networking events that advance graduate employment outcomes.',
    },
    {
      organization: 'York University',
      role: 'C4 Capstone Mentor',
      years: '2026 – Present',
      description: 'Mentor cross-disciplinary graduate and undergraduate teams through live client engagements, guiding strategic leadership and decision-making on complex, ambiguous problems for Canadian organizations.',
    },
  ],

  projects: [
    {
      id: 'econometrics-ai',
      name: 'Econometrics.AI',
      tagline: 'Macro-economic analytical workbench for advisory practice.',
      description:
        'A professional web application for selecting macro-economic indicators, ' +
        'overlaying them on a shared chart canvas, and running econometric models ' +
        '(AR, ARIMA, VAR, EWMA) with full diagnostic output. Built to demonstrate ' +
        'quantitative capability and serve as the delivery platform for client advisory work.',
      tags: ['React', 'TypeScript', 'FastAPI', 'Python', 'Econometrics', 'Plotly.js'],
      isFlagship: true,
      ctaLabel: 'Open Tool',
      ctaHref: '/app',
    },
  ],

  contact: {
    email: 'bharatsoni@hotmail.ca',
    linkedin: 'https://www.linkedin.com/in/bharatsoni97',
    github: 'https://github.com/bharatsoni97',
    inquiryPrompt:
      'Open to advisory engagements, quantitative research collaborations, and speaking opportunities.',
  },

  hobbies: [
    { emoji: '🚗', name: 'Miata', tagline: 'Weekend drives, manual shifts, pure driving joy.' },
    { emoji: '🐕', name: 'My Dog', tagline: 'Best co-pilot and reason to go outside.' },
    { emoji: '🏋️', name: 'Gym', tagline: 'Early mornings, heavy lifts, clear head.' },
    { emoji: '🏸', name: 'Badminton', tagline: 'Fast-paced, competitive, great stress relief.' },
  ],
}
