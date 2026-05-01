import { motion } from 'framer-motion'
import { IconMail, IconLinkedin, IconGithub, IconInstagram } from '@/components/ui/social-icons'
import type { ContactInfo } from '@/types/profile'

interface Props {
  contact: ContactInfo
}

export function Contact({ contact }: Props) {
  const links = [
    { label: contact.email, href: `mailto:${contact.email}`, Icon: IconMail },
    { label: 'LinkedIn', href: contact.linkedin, Icon: IconLinkedin },
    ...(contact.github ? [{ label: 'GitHub', href: contact.github, Icon: IconGithub }] : []),
    { label: 'Instagram', href: 'https://www.instagram.com/_bharat97/', Icon: IconInstagram },
  ]

  return (
    <section id="contact" className="min-h-screen flex items-center py-20">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="backdrop-blur-md bg-black/40 border border-white/10 rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl font-semibold text-white mb-4">Get in Touch</h2>
          <p className="text-white/60 mb-10 max-w-lg mx-auto leading-relaxed">
            {contact.inquiryPrompt}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {links.map(({ label, href, Icon }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/50 hover:text-white transition-colors"
              >
                <Icon />
                <span className="text-sm">{label}</span>
              </a>
            ))}
          </div>
          <p className="text-white/20 text-xs mt-16">
            © {new Date().getFullYear()} Econometrics.AI
          </p>
        </motion.div>
      </div>
    </section>
  )
}
