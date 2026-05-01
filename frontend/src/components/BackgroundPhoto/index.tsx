import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface Props {
  activeSection: string
  photos: Record<string, string>
}

export function BackgroundPhoto({ activeSection, photos }: Props) {
  const src = photos[activeSection]

  return (
    <div className="fixed inset-0 -z-10">
      <AnimatePresence mode="sync">
        {src && (
          <motion.div
            key={activeSection}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          >
            <PhotoImage src={src} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Always-on overlay — keeps text readable regardless of photo brightness */}
      <div className="absolute inset-0 bg-black/50" />
    </div>
  )
}

function PhotoImage({ src }: { src: string }) {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <img
      src={src}
      alt=""
      className="w-full h-full object-cover"
      onError={() => setVisible(false)}
    />
  )
}
