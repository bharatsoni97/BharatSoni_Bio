import { motion } from 'framer-motion'
import type { LeadershipEntry } from '@/types/profile'

interface Props {
  leadership: LeadershipEntry[]
}

export function Leadership({ leadership }: Props) {
  return (
    <section id="leadership" className="min-h-screen flex items-center py-20">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="backdrop-blur-md bg-black/40 border border-white/10 rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-2xl font-semibold text-white mb-10">Leadership</h2>
          <div className="space-y-6">
            {leadership.map((entry, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8 pb-6 border-b border-white/10 last:border-0 last:pb-0"
              >
                <div className="md:w-36 flex-shrink-0 text-sm text-white/50 pt-0.5">
                  {entry.years}
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold">{entry.organization}</h3>
                  <p className="text-blue-400 text-sm font-medium mb-1">{entry.role}</p>
                  <p className="text-white/60 text-sm leading-relaxed">{entry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
