import { MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { SocialIconMap } from '@/components/ui/social-icons'
import type { Profile, SocialLink } from '@/types/profile'

function SocialLinkItem({ link }: { link: SocialLink }) {
  const Icon = SocialIconMap[link.icon]
  return (
    <a
      href={link.href}
      target={link.href.startsWith('mailto') ? undefined : '_blank'}
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
    >
      <Icon />
      <span>{link.label}</span>
    </a>
  )
}

interface Props {
  data: Profile
}

export function Hero({ data }: Props) {
  return (
    <section id="hero" className="min-h-screen flex items-end pb-24">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1
            className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight"
            style={{ textShadow: '0 2px 24px rgba(0,0,0,0.6)' }}
          >
            {data.name}
          </h1>
          <p className="text-blue-400 text-lg md:text-xl font-medium tracking-widest uppercase mb-4">
            {data.title}
          </p>
          <p className="text-white/70 mb-6 max-w-xl leading-relaxed">
            {data.tagline}
          </p>
          <div className="flex items-center gap-1.5 text-white/50 text-sm mb-8">
            <MapPin size={14} />
            <span>{data.location}</span>
          </div>
          <div className="flex flex-wrap gap-5">
            {data.social.map((link) => (
              <SocialLinkItem key={link.label} link={link} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
