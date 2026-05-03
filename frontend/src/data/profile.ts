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

  bio: `I'm an Economic Advisory professional who believes the insight only matters if it changes what happens next.
  Over five years, I've helped organizations across financial services, energy, utilities, mining, and the public sector translate macroeconomic conditions into decisions they can act on — at the executive table, inside operating models, and through the transactions that reshape them. My work spans the full advisory lifecycle: designing policy programs for a $2.6B provincial budget, supporting a $2.3B M&A integration, and building quantitative models that give leaders confidence when the stakes are high and the environment is moving fast.
  I lead with a thesis-driven, model-backed approach — starting with the economic forces shaping an industry, then working inward to where they land at the process and strategy level. That's the gap I've spent my career closing: between what the macro environment is signalling and what a business should actually do about it.
  I'm building toward a leadership role at the intersection of economics and enterprise strategy — helping Canadian organizations navigate rate cycles, trade disruption, and structural transformation before those forces catch up to them. I believe the next generation of advisory belongs to those who move fluently between macroeconomic analysis and organizational action. That's the kind of advisor I'm becoming.
  My academic foundation includes three degrees from Schulich and York University — a Specialized Honours B.A. in Financial and Business Economics, a Master of Management from Schulich, and an MBA in Finance & Strategic Management currently in progress. I've twice represented York at the Bank of Canada Governor's Challenge, presenting monetary policy recommendations directly to the Governing Council. That experience — turning complex economic data into a recommendation a decision-maker can act on — shaped how I approach every engagement since.
  Outside of work, you'll find me at the gym, on a track somewhere, or walking Tobin across the city.`,

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
      workId: 'kpmg-advisory',
      bullets: [
        'Advised CxO and product teams across financial services, utilities, energy, and mining on operational and economic risk, translating analysis into executive decisions in complex, fast-moving environments.',
        'Supported a $2.3B M&A integration, analyzing technology and governance ecosystems to quantify synergies and guide strategic trade-off decisions.',
        'Built quantitative models and scenario frameworks — including an Alteryx revenue-validation model across $200M in annual exposure — to strengthen financial transparency and executive confidence.',
        'Published risk methodology for AI products; led business development contributing $2.5M in new annual revenue.',
      ],
    },
      {
      company: 'KPMG LLP',
      role: ' Consultant, Risk Advisory',
      years: '2021 – 2023',
      location: 'Toronto, ON',
      workId: 'kpmg-advisory',
      bullets: [
        'Advised clients across diversiefied industries on risk and change mangement starategies, design, and implementation, to ensure completeness and accuracy of financial, operational, and regulatory reporting.',
      ],
    },
    {
      company: 'Ontario Public Service — Ministry of Children, Community & Social Services',
      role: 'Analyst, Operational Finance Branch',
      years: '2018 – 2019',
      location: 'Toronto, ON',
      workId: 'ontario-ministry',
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
      workId: 'boc-challenge',
    },
    {
      name: "Dean's Cup Strategy Competition",
      organizer: 'Schulich School of Business',
      year: '2021',
      result: '2nd Place',
      description: 'Led a six-member team through four consulting-style cases spanning market entry, sustainability, M&A, and return-to-office strategy.',
      workId: 'deans-cup',
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
    { emoji: '🏋️', name: 'Gym', tagline: 'Early mornings, heavy lifts, cardio, clear head.' },
    { emoji: '🏸', name: 'Badminton', tagline: 'Fast-paced, competitive, great stress relief.' },
  ],

  goals: {
    headline: 'Building at the intersection of economics and technology.',
    body: `After five years advising organizations across government and consulting on economic risk and strategy, I'm now focused on scaling that practice through technology. Econometrics.AI is the infrastructure layer — making quantitative economic analysis accessible outside traditional advisory engagements. Alongside that, I'm deepening my advisory practice, expanding into speaking and thought leadership, and completing my MBA.`,
    focus: [
      'Building Econometrics.AI — from MVP to a production advisory tool',
      'Growing an independent economic advisory practice',
      'Publishing economic analysis and market commentary',
      'Completing the Schulich MBA in Finance & Strategic Management',
    ],
  },

  engagements: [
    {
      id: 'kpmg-advisory',
      sector: 'IT Assurance & Strategy',
      client: 'KPMG LLP — Client Advisory',
      scope: 'Client Advisory — IT Assurance & Strategy',
      outcomes: [
        'Led SOX/ICOFR IT assessments and SOC 1/SOC 2 attestations across 15+ engagements spanning a national stock exchange operator, a pension investment board, Canadian chartered banks, a national telecom provider, a healthcare & benefits administration platform, and FinTech payments companies.',
        'Served as client lead and senior in-charge across engagements with a B2B SaaS platform, a global gold mining company, a regulated municipal utility, and a national employee health, benefits, and pension administration platform — overseeing scoping, budgeting, team management, and Audit Committee reporting.',
        'Directed ERP implementation reviews across major enterprise platforms (SAP, OneStream, NetSuite, Salesforce, Workiva, ServiceNow) to assess control effectiveness ahead of go-live, during hyper care, and post implementation upgrades.',
        'Delivered IT risk and change management strategy advisory to clients navigating large-scale technology transformations, identifying control gaps and recommending governance improvements.',
        'Secured and renewed multi-year engagements ranging from $750K to $2M annually through consistent delivery and strategic client relationships.',
      ],
      tags: ['SOX/ICOFR', 'SOC 1/SOC 2', 'IT Risk', 'ERP Review', 'Change Management', 'Audit Committee'],
      year: '2021 – 2025',
    },
    {
      id: 'kpmg-practice',
      sector: 'Risk Services',
      client: 'KPMG LLP — Internal Practice',
      scope: 'Practice Development — Risk Methodology & AI Governance',
      outcomes: [
        'Collaborated on the modernization of internal risk management methodology frameworks to improve consistency, efficiency, and quality across the Risk Services practice.',
        'Developed new assurance product offerings for AI systems, defining assessment criteria and testing procedures for emerging technology governance based on surveys with industry partners, clients, and subject matter experts.',
      ],
      tags: ['Risk Methodology', 'AI Governance', 'Product Development', 'Assurance'],
      year: '2021 – 2025',
    },
    {
      id: 'ontario-ministry',
      sector: 'Public Sector',
      client: 'Ontario Government Ministry — Deputy Minister\'s Office',
      scope: 'Financial & Business Advisory (Operational Finance Branch)',
      outcomes: [
        'Built Tableau, PowerBI, and ARC GIS dashboards supporting $2.3B in operational reporting, used directly in Deputy Minister and Minister briefings.',
        'Designed the data framework and executed a 10% budget reduction across a developmental disabilities portfolio, consolidating 250+ transfer payment agencies.',
        'Led financial and operational onboarding for incoming Deputy Minister and Minister following a provincial government transition.',
        'Designed and piloted a $50M/yr direct payment model for disability support services — replacing a multi-step transfer payment system with potential savings exceeding 25%.',
        'Managed program integration for a social services division, rerouting transfer payments, IT systems, and coordinating Finance, HR, and operational staff.',
        'Led financial and operational requirements for a ministry-wide data platform migration from Cognos to Azure, coordinating across Treasury Board Secretariat and external consulting teams.',
      ],
      tags: ['Tableau', 'PowerBI', 'ARC GIS', 'Azure', 'Public Finance', 'Policy', 'Operational Reporting', 'Controller'],
      year: '2018 – 2020',
    },
    {
      id: 'ma-advisory',
      sector: 'M&A Advisory',
      client: 'Private Manufacturing Company',
      scope: 'Internal Deals Advisor — ~$25M Equity Sale',
      outcomes: [
        'Supported a ~$25M equity sale, conducting 3-statement, DCF, and sensitivity analyses to validate the asking price.',
        'Led the representation selection process — drafting RFP materials, evaluating responses, and interviewing candidates on behalf of ownership.',
        'Facilitated mock negotiations with ownership to stress-test positions ahead of buyer conversations.',
      ],
      tags: ['M&A', 'DCF', '3-Statement Modeling', 'Deal Advisory', 'Valuation'],
      year: '2021',
    },
    {
      id: 'etf-analyst',
      sector: 'Asset Management',
      client: 'Boutique Asset Manager',
      scope: 'ETF Product & Operations (ETF Analyst)',
      outcomes: [
        'Built Python-based financial models for new ETF product launches using FactSet data, coordinating with the head trader and product team on go-live readiness.',
        'Designed and implemented an automated workflow for daily asset management operations (rebalancing, distributions, income, fee recognition), cutting daily workload for the head trader by 75%.',
      ],
      tags: ['Python', 'FactSet', 'ETF', 'Financial Modeling', 'Automation', 'Asset Management'],
      year: '2021',
    },
    {
      id: 'mba-capstone',
      sector: 'Strategy Consulting',
      client: 'Craft Beverage Industry',
      scope: 'Market Strategy — MBA Capstone Project (Master of Management)',
      outcomes: [
        'Diagnosed slumping sales for a regional craft brewery despite market-wide growth through primary survey research and competitive analysis using data from the provincial craft brewers association and liquor board.',
        'Identified weak branding and limited product selection as root causes; designed new branding materials and a product line recommendation aligned with local market preferences.',
      ],
      tags: ['Market Research', 'Consumer Insights', 'Brand Strategy', 'Primary Research'],
      year: '2021',
    },
    {
      id: 'boc-challenge',
      sector: 'Case Competition',
      client: "Bank of Canada Governor's Challenge — Finalist (×2)",
      scope: "Monetary Policy Research Competition (York University, 2016 & 2017)",
      outcomes: [
        'Modeled inflation drivers and macroeconomic conditions in R across a 10-week research cycle.',
        'Presented monetary policy recommendations on the overnight interest rate directly to the Bank of Canada Governing Council.',
        'Represented York University as a finalist in both 2016 and 2017.',
      ],
      tags: ['Econometrics', 'R', 'Monetary Policy', 'Macroeconomics', 'Research'],
      year: '2017',
    },
    {
      id: 'deans-cup',
      sector: 'Case Competition',
      client: "Dean's Cup Strategy Competition — 2nd Place",
      scope: 'Multi-case Strategy Competition (Schulich School of Business)',
      outcomes: [
        'B2B Air Purification: Market-entry strategy for Canadian expansion, focused on supply chain structure.',
        'Sustainability Consulting Firm: Growth strategy for westward geographic expansion.',
        'National Bank: Return-to-office transformation strategy for a post-COVID environment.',
        'Boutique Fitness Brand: Joint-venture growth strategy into a new urban market targeting corporate customers.',
      ],
      tags: ['Strategy', 'Market Entry', 'Growth Strategy', 'Transformation'],
      year: '2021',
    },
  ],

  articles: [
    {
      slug: 'why-economics-belongs-in-the-boardroom',
      title: 'Why Economics Belongs in the Boardroom',
      date: '2025-03-01',
      excerpt: 'Most organizations treat economics as a background condition — something that happens to them. The ones that win treat it as a strategic input.',
      body: [
        'Most organizations treat economics as a background condition — interest rates change, inflation moves, commodity prices shift, and the business responds. The ones that consistently outperform their peers do something different: they treat economic conditions as a strategic input, not an exogenous shock.',
        'The distinction matters more than it sounds. When economics is a background condition, strategy is reactive. When it\'s a strategic input, decisions about capital allocation, market entry, pricing, and workforce are made with a forward-looking economic thesis — one that can be tested, updated, and stress-tested against scenarios.',
        'This is not a new idea. It\'s what the best macro hedge funds have always done. What\'s changed is that the data and tooling to do this kind of analysis are no longer exclusive to firms with large research departments. The opportunity, for advisory practices and businesses willing to build the capability, is significant.',
      ],
      tags: ['Strategy', 'Economics', 'Advisory'],
      featured: true,
    },
    {
      slug: 'the-case-for-quantitative-advisory',
      title: 'The Case for Quantitative Advisory',
      date: '2025-01-15',
      excerpt: 'Qualitative frameworks are necessary but insufficient. Here\'s why the next generation of advisory work will be model-driven.',
      body: [
        'Advisory work has always relied on frameworks — Porter\'s Five Forces, the BCG Matrix, McKinsey\'s 7-S. These tools are useful. They structure thinking, create shared language, and provide a repeatable process for analyzing complex situations.',
        'But frameworks alone can\'t answer the questions that matter most today. When a CFO asks "what happens to our revenue if inflation stays elevated for 18 months?" or "how does a 150bps rate move affect our cost of capital?" — the answer requires a model, not a matrix.',
        'Quantitative advisory isn\'t about replacing judgment with algorithms. It\'s about giving judgment a stronger foundation. The firms and practitioners that develop this capability — the ability to move between qualitative strategy and quantitative modeling — will define the next generation of high-value advisory work.',
      ],
      tags: ['Advisory', 'Quantitative Methods', 'Economics'],
      featured: true,
    },
  ],
}
