import { motion } from 'framer-motion'

interface Props {
  bio: string
}

export function Bio({ bio }: Props) {
  return (
    <section id="bio" className="min-h-screen flex items-center py-20">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="backdrop-blur-md bg-black/40 border border-white/10 rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-2xl font-semibold text-white mb-8">About</h2>
          <div className="flex gap-6">
            <div className="w-1 flex-shrink-0 bg-white/30 rounded-full" />
            <p className="text-white/80 leading-relaxed text-lg max-w-3xl whitespace-pre-line">
              {bio}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
