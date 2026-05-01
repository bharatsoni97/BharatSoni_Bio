import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const navLinks = [
  { label: 'About', href: '#bio', section: 'bio' },
  { label: 'Education', href: '#academic', section: 'academic' },
  { label: 'Experience', href: '#experience', section: 'experience' },
  { label: 'Competitions', href: '#competitions', section: 'competitions' },
  { label: 'Leadership', href: '#leadership', section: 'leadership' },
  { label: 'Projects', href: '#projects', section: 'projects' },
  { label: 'Contact', href: '#contact', section: 'contact' },
  { label: 'Hobbies', href: '#hobbies', section: 'hobbies' },
]

interface Props {
  activeSection: string
}

export function Nav({ activeSection }: Props) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="text-sm font-semibold text-white tracking-wide">
          Bharat<span className="text-blue-400"> Soni</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.section
            return (
              <a
                key={link.href}
                href={link.href}
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
        </nav>

        <Link to="/app">
          <Button size="sm">Open Tool →</Button>
        </Link>
      </div>
    </header>
  )
}
