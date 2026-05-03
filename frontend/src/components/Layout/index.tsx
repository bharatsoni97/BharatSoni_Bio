import { useActiveSection } from '@/hooks/useActiveSection'
import { BackgroundPhoto } from '@/components/BackgroundPhoto'
import { sectionPhotos } from '@/data/sectionPhotos'
import { Nav } from '@/components/Nav'
import { Contact } from '@/components/Landing/Contact'
import { profile } from '@/data/profile'

interface Props {
  children: React.ReactNode
  fixedSection?: string
}

export function Layout({ children, fixedSection }: Props) {
  const activeSection = useActiveSection()
  const section = fixedSection ?? activeSection

  return (
    <div className="min-h-screen">
      <BackgroundPhoto activeSection={section} photos={sectionPhotos} />
      <Nav activeSection={activeSection} />
      <main className="pb-16">{children}</main>
      <Contact contact={profile.contact} />
    </div>
  )
}
