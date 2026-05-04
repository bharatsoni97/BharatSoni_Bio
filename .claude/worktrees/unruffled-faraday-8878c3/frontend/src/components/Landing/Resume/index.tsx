import { motion } from 'framer-motion'
import { useState } from 'react'

export function Resume() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const formspreeId = import.meta.env.VITE_FORMSPREE_ID

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!formspreeId) return
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="resume" className="min-h-screen flex items-center py-20">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="backdrop-blur-md bg-black/40 border border-white/10 rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-2xl font-semibold text-white mb-10">Resume</h2>
          <div className="grid md:grid-cols-2 gap-10">

            {/* Download */}
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-medium">Generic Resume</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                A general overview of my background, experience, and education.
              </p>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 self-start px-5 py-2.5 rounded-lg bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors"
              >
                Download PDF
              </a>
            </div>

            {/* Request form */}
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-medium">Request a Tailored Resume</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Paste a job description and I'll send you a version tailored to the role.
              </p>
              {status === 'sent' ? (
                <p className="text-blue-400 text-sm">Request received — I'll be in touch shortly.</p>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <input
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-blue-400/50"
                  />
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Your email"
                    className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-blue-400/50"
                  />
                  <textarea
                    name="jobDescription"
                    required
                    rows={5}
                    placeholder="Paste the job description here…"
                    className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-blue-400/50 resize-none"
                  />
                  {!formspreeId && (
                    <p className="text-yellow-400/70 text-xs">
                      Form not yet configured — add VITE_FORMSPREE_ID to .env
                    </p>
                  )}
                  {status === 'error' && (
                    <p className="text-red-400 text-xs">Something went wrong — try emailing directly.</p>
                  )}
                  <button
                    type="submit"
                    disabled={status === 'sending' || !formspreeId}
                    className="self-start px-5 py-2.5 rounded-lg bg-blue-500 text-white text-sm font-medium hover:bg-blue-400 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? 'Sending…' : 'Send Request'}
                  </button>
                </form>
              )}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
