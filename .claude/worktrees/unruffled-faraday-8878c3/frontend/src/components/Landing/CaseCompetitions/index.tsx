import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { CompetitionEntry } from '@/types/profile'

interface Props {
  competitions: CompetitionEntry[]
}

export function CaseCompetitions({ competitions }: Props) {
  return (
    <section id="competitions" className="min-h-screen flex items-center py-20">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="backdrop-blur-md bg-black/40 border border-white/10 rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-2xl font-semibold text-white mb-10">Case Competitions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {competitions.map((entry, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/10 bg-white/5 p-5 flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    {entry.workId ? (
                      <Link
                        to={`/work#${entry.workId}`}
                        className="text-white font-semibold hover:text-blue-300 transition-colors inline-flex items-center gap-1.5 group"
                      >
                        {entry.name}
                        <span className="text-white/20 text-xs group-hover:text-blue-400 transition-colors">↗</span>
                      </Link>
                    ) : (
                      <h3 className="text-white font-semibold">{entry.name}</h3>
                    )}
                    <p className="text-white/50 text-sm">
                      {entry.organizer} · {entry.year}
                    </p>
                  </div>
                  <span className="flex-shrink-0 text-xs font-semibold text-blue-400 border border-blue-400/40 rounded-full px-2.5 py-0.5 bg-blue-400/10">
                    {entry.result}
                  </span>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">{entry.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
