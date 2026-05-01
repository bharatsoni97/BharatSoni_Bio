import { motion } from 'framer-motion'
import type { HobbyEntry } from '@/types/profile'

interface Props {
  hobbies: HobbyEntry[]
}

export function Hobbies({ hobbies }: Props) {
  return (
    <section id="hobbies" className="min-h-screen flex items-center py-20">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="backdrop-blur-md bg-black/40 border border-white/10 rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-2xl font-semibold text-white mb-10">Outside the Office</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {hobbies.map((hobby, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/10 bg-white/5 p-6 flex flex-col items-center text-center gap-3"
              >
                <span className="text-4xl">{hobby.emoji}</span>
                <h3 className="text-white font-semibold">{hobby.name}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{hobby.tagline}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
