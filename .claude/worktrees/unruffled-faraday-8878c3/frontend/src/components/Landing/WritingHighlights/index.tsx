import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { Article } from '@/types/profile'

interface Props {
  articles: Article[]
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })
}

export function WritingHighlights({ articles }: Props) {
  const featured = articles.filter((a) => a.featured).slice(0, 3)

  return (
    <section id="writing" className="min-h-screen flex items-center py-20">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="backdrop-blur-md bg-black/40 border border-white/10 rounded-2xl p-8 md:p-12"
        >
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-2xl font-semibold text-white">Writing</h2>
            <Link
              to="/writing"
              className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              View all →
            </Link>
          </div>
          <div className="space-y-4">
            {featured.map((article) => (
              <Link
                key={article.slug}
                to={`/writing/${article.slug}`}
                className="block rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors group"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-white font-semibold group-hover:text-blue-300 transition-colors">
                    {article.title}
                  </h3>
                  <span className="text-white/30 text-xs flex-shrink-0 mt-1">
                    {formatDate(article.date)}
                  </span>
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-3">{article.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-blue-400/80 border border-blue-400/30 rounded-full px-2.5 py-0.5 bg-blue-400/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
