import { profile } from '@/data/profile'
import { Layout } from '@/components/Layout'
import { Hero } from '@/components/Landing/Hero'
import { Bio } from '@/components/Landing/Bio'
import { AcademicExperience } from '@/components/Landing/AcademicExperience'
import { ProfessionalExperience } from '@/components/Landing/ProfessionalExperience'
import { CaseCompetitions } from '@/components/Landing/CaseCompetitions'
import { Leadership } from '@/components/Landing/Leadership'
import { Projects } from '@/components/Landing/Projects'
import { Contact } from '@/components/Landing/Contact'

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
      <Contact contact={profile.contact} />
    </Layout>
  )
}
