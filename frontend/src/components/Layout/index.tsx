import { useActiveSection } from '@/hooks/useActiveSection'
import { BackgroundPhoto } from '@/components/BackgroundPhoto'
import { sectionPhotos } from '@/data/sectionPhotos'
import { Nav } from '@/components/Nav'

interface Props {
  children: React.ReactNode
}

export function Layout({ children }: Props) {
  const activeSection = useActiveSection()

  return (
    <div className="min-h-screen">
      <BackgroundPhoto activeSection={activeSection} photos={sectionPhotos} />
      <Nav activeSection={activeSection} />
      <main>{children}</main>
    </div>
  )
}
