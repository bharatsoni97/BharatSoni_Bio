import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const anchorLinks = [
  { label: 'Home',         href: '#hero',         section: 'hero' },
  { label: 'About',        href: '#bio',          section: 'bio' },
  { label: 'Academic',     href: '#academic',     section: 'academic' },
  { label: 'Experience',   href: '#experience',   section: 'experience' },
  { label: 'Competitions', href: '#competitions', section: 'competitions' },
  { label: 'Leadership',   href: '#leadership',   section: 'leadership' },
  { label: 'Projects',     href: '#projects',     section: 'projects' },
  { label: 'Contact',      href: '#contact',      section: 'contact' },
]

const routeLinks = [
  { label: 'Work',    href: '/work' },
  { label: 'Writing', href: '/writing' },
  { label: 'Gallery', href: '/gallery' },
]

interface Props {
  activeSection: string
}

function NavLinks({
  activeSection,
  onHome,
  pathname,
  onClose,
}: {
  activeSection: string
  onHome: boolean
  pathname: string
  onClose?: () => void
}) {
  return (
    <nav className="flex flex-col gap-0.5 px-2 py-2">
      {anchorLinks.map((link) => {
        const isActive = onHome && activeSection === link.section
        return (
          <a
            key={link.href}
            href={onHome ? link.href : `${import.meta.env.BASE_URL}${link.href}`}
            onClick={onClose}
            className="relative flex items-center pl-3 pr-2 py-1.5 text-sm rounded-lg transition-colors hover:bg-white/5"
            style={{ color: isActive ? 'white' : 'rgba(255,255,255,0.5)' }}
          >
            {isActive && (
              <motion.div
                layoutId="nav-indicator"
                className="absolute left-0 top-1 bottom-1 w-0.5 bg-blue-400 rounded-full"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            {link.label}
          </a>
        )
      })}

      <div className="my-1 h-px bg-white/10 mx-1" />

      {routeLinks.map((link) => {
        const isActive = pathname.startsWith(link.href)
        return (
          <Link
            key={link.href}
            to={link.href}
            onClick={onClose}
            className="relative flex items-center pl-3 pr-2 py-1.5 text-sm rounded-lg transition-colors hover:bg-white/5"
            style={{ color: isActive ? 'white' : 'rgba(255,255,255,0.5)' }}
          >
            {isActive && (
              <motion.div
                layoutId="nav-indicator"
                className="absolute left-0 top-1 bottom-1 w-0.5 bg-blue-400 rounded-full"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            {link.label}
          </Link>
        )
      })}
    </nav>
  )
}

export function Nav({ activeSection }: Props) {
  const { pathname } = useLocation()
  const onHome = pathname === '/' || pathname === ''
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Desktop: floating vertical sidebar */}
      <aside className="hidden lg:flex flex-col fixed left-4 top-1/2 -translate-y-1/2 z-50 w-44 rounded-2xl bg-black/30 backdrop-blur-md border border-white/10 shadow-xl">
        <Link
          to="/"
          className="px-4 pt-4 pb-3 text-sm font-semibold text-white tracking-wide border-b border-white/10"
        >
          Bharat<span className="text-blue-400"> Soni</span>
        </Link>
        <NavLinks activeSection={activeSection} onHome={onHome} pathname={pathname} />
      </aside>

      {/* Mobile/Tablet: floating pill toggle + drawer */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen((o) => !o)}
          className="fixed top-4 left-4 z-50 flex items-center gap-2 bg-black/30 backdrop-blur-md border border-white/10 rounded-full px-3 py-2 shadow-lg text-white"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={16} /> : <Menu size={16} />}
          <span className="text-sm font-semibold">
            Bharat<span className="text-blue-400"> Soni</span>
          </span>
        </button>

        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40"
                onClick={() => setIsOpen(false)}
              />
              <motion.div
                key="drawer"
                initial={{ x: -280, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -280, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="fixed left-4 top-16 bottom-4 w-56 z-50 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-y-auto"
              >
                <NavLinks
                  activeSection={activeSection}
                  onHome={onHome}
                  pathname={pathname}
                  onClose={() => setIsOpen(false)}
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
