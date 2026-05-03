import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const anchorLinks = [
  { label: 'About',      href: '#bio',        section: 'bio' },
  { label: 'Experience', href: '#experience', section: 'experience' },
  { label: 'Projects',   href: '#projects',   section: 'projects' },
  { label: 'Goals',      href: '#goals',      section: 'goals' },
]

const routeLinks = [
  { label: 'Work',    href: '/work' },
  { label: 'Writing', href: '/writing' },
  { label: 'Gallery', href: '/gallery' },
]

interface Props {
  activeSection: string
}

export function Nav({ activeSection }: Props) {
  const { pathname } = useLocation()
  const onHome = pathname === '/' || pathname === ''

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-sm font-semibold text-white tracking-wide">
          Bharat<span className="text-blue-400"> Soni</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {/* Anchor links — only highlight active section when on homepage */}
          {anchorLinks.map((link) => {
            const isActive = onHome && activeSection === link.section
            return (
              <a
                key={link.href}
                href={onHome ? link.href : `${import.meta.env.BASE_URL}${link.href}`}
                className="relative text-sm transition-colors pb-0.5"
                style={{ color: isActive ? 'white' : 'rgba(255,255,255,0.5)' }}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-0.5 left-0 right-0 h-px bg-blue-400"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            )
          })}

          {/* Divider */}
          <span className="w-px h-4 bg-white/10" />

          {/* Route links */}
          {routeLinks.map((link) => {
            const isActive = pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                to={link.href}
                className="relative text-sm transition-colors pb-0.5"
                style={{ color: isActive ? 'white' : 'rgba(255,255,255,0.5)' }}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-0.5 left-0 right-0 h-px bg-blue-400"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            )
          })}
        </nav>

        <Link to="/app">
          <Button size="sm">Open Tool →</Button>
        </Link>
      </div>
    </header>
  )
}
