import { motion } from 'framer-motion'
import type { WorkEntry } from '@/types/profile'

interface Props {
  experience: WorkEntry[]
}

export function ProfessionalExperience({ experience }: Props) {
  return (
    <section id="experience" className="min-h-screen flex items-center py-20">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="backdrop-blur-md bg-black/40 border border-white/10 rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-2xl font-semibold text-white mb-10">Experience</h2>
          <div className="relative pl-6 border-l border-white/20 space-y-10">
            {experience.map((entry, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[1.625rem] top-1.5 w-3 h-3 rounded-full bg-blue-400 border-2 border-black/40" />
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="text-white font-semibold text-lg">{entry.company}</h3>
                    <p className="text-blue-400 text-sm font-medium">{entry.role}</p>
                  </div>
                  <div className="text-right text-sm text-white/50">
                    <div>{entry.years}</div>
                    <div>{entry.location}</div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {entry.bullets.map((bullet, j) => (
                    <li key={j} className="text-sm text-white/70 flex gap-2">
                      <span className="text-blue-400 mt-0.5 flex-shrink-0">›</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
