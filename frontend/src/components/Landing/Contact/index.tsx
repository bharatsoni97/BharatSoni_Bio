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
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-black/40 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <span className="text-white/30 text-xs hidden sm:block">
          © {new Date().getFullYear()} Bharat Soni
        </span>
        <div className="flex items-center gap-6 mx-auto sm:mx-0">
          {links.map(({ label, href, Icon }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              title={label}
              className="flex items-center gap-1.5 text-white/50 hover:text-white transition-colors text-sm"
            >
              <Icon />
              <span className="hidden md:inline">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
