export interface SocialLink {
  label: string
  href: string
  icon: 'Linkedin' | 'Mail' | 'Github' | 'Globe' | 'Twitter' | 'Instagram'
}


export interface EducationEntry {
  institution: string
  degree: string
  years: string
  highlights: string[]
}

export interface WorkEntry {
  company: string
  role: string
  years: string
  location: string
  bullets: string[]
}

export interface CompetitionEntry {
  name: string
  organizer: string
  year: string
  result: string
  description: string
}

export interface LeadershipEntry {
  organization: string
  role: string
  years: string
  description: string
}

export interface ProjectEntry {
  id: string
  name: string
  tagline: string
  description: string
  tags: string[]
  isFlagship: boolean
  ctaLabel: string
  ctaHref: string
  externalUrl?: string
}

export interface HobbyEntry {
  emoji: string
  name: string
  tagline: string
}

export interface EngagementEntry {
  sector: string
  client: string
  scope: string
  outcomes: string[]
  tags: string[]
  year: string
}

export interface Article {
  slug: string
  title: string
  date: string
  excerpt: string
  body: string[]
  tags: string[]
  featured: boolean
}

export interface Goals {
  headline: string
  body: string
  focus: string[]
}

export interface ContactInfo {
  email: string
  linkedin: string
  github?: string
  calendlyUrl?: string
  inquiryPrompt: string
}

export interface Profile {
  name: string
  title: string
  tagline: string
  location: string
  photoUrl: string
  social: SocialLink[]
  bio: string
  education: EducationEntry[]
  experience: WorkEntry[]
  competitions: CompetitionEntry[]
  leadership: LeadershipEntry[]
  projects: ProjectEntry[]
  contact: ContactInfo
  hobbies: HobbyEntry[]
  engagements: EngagementEntry[]
  articles: Article[]
  goals: Goals
}
