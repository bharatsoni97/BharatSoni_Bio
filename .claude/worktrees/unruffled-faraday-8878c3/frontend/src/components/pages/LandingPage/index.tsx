import { profile } from '@/data/profile'
import { Layout } from '@/components/Layout'
import { Hero } from '@/components/Landing/Hero'
import { Bio } from '@/components/Landing/Bio'
import { AcademicExperience } from '@/components/Landing/AcademicExperience'
import { ProfessionalExperience } from '@/components/Landing/ProfessionalExperience'
import { CaseCompetitions } from '@/components/Landing/CaseCompetitions'
import { Leadership } from '@/components/Landing/Leadership'
import { Projects } from '@/components/Landing/Projects'
import { Goals } from '@/components/Landing/Goals'
import { WritingHighlights } from '@/components/Landing/WritingHighlights'
import { Resume } from '@/components/Landing/Resume'
import { Hobbies } from '@/components/Landing/Hobbies'

export function LandingPage() {
  return (
    <Layout>
      <Hero data={profile} />
      <Bio bio={profile.bio} />
      <AcademicExperience education={profile.education} />
      <ProfessionalExperience experience={profile.experience} />
      <CaseCompetitions competitions={profile.competitions} />
      <Leadership leadership={profile.leadership} />
      <Projects projects={profile.projects} />
      <Goals goals={profile.goals} />
      <WritingHighlights articles={profile.articles} />
      <Resume />
      <Hobbies hobbies={profile.hobbies} />
    </Layout>
  )
}
