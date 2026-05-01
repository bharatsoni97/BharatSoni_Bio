import { motion } from 'framer-motion'
import type { EducationEntry } from '@/types/profile'

interface Props {
  education: EducationEntry[]
}

export function AcademicExperience({ education }: Props) {
  return (
    <section id="academic" className="min-h-screen flex items-center py-20">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="backdrop-blur-md bg-black/40 border border-white/10 rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-2xl font-semibold text-white mb-10">Education</h2>
          <div className="space-y-8">
            {education.map((entry, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8">
                <div className="md:w-36 flex-shrink-0 text-sm text-white/50 pt-0.5">
                  {entry.years}
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg">{entry.institution}</h3>
                  <p className="text-white/70 mb-2">{entry.degree}</p>
                  {entry.highlights.length > 0 && (
                    <ul className="space-y-1">
                      {entry.highlights.map((h, j) => (
                        <li key={j} className="text-sm text-white/60 flex gap-2">
                          <span className="text-blue-400 mt-1">›</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
