import { motion } from 'framer-motion'
import type { Goals as GoalsType } from '@/types/profile'

interface Props {
  goals: GoalsType
}

export function Goals({ goals }: Props) {
  return (
    <section id="goals" className="min-h-screen flex items-center py-20">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="backdrop-blur-md bg-black/40 border border-white/10 rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-2xl font-semibold text-white mb-2">Where I'm Going</h2>
          <p className="text-blue-400 font-medium mb-6">{goals.headline}</p>
          <p className="text-white/70 leading-relaxed mb-10 max-w-3xl">{goals.body}</p>
          <ul className="space-y-3">
            {goals.focus.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                <span className="text-white/80">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
