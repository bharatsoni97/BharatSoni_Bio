import { Link } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { profile } from '@/data/profile'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })
}

export function WritingPage() {
  const sorted = [...profile.articles].sort((a, b) => b.date.localeCompare(a.date))

  return (
    <Layout>
      <div className="min-h-screen pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-md bg-black/40 border border-white/10 rounded-2xl p-8 md:p-12">
            <h1 className="text-3xl font-semibold text-white mb-2">Writing</h1>
            <p className="text-white/50 text-sm mb-12 max-w-xl leading-relaxed">
              Economic analysis, strategic commentary, and perspectives on advisory practice.
            </p>
            <div className="space-y-4">
              {sorted.map((article) => (
                <Link
                  key={article.slug}
                  to={`/writing/${article.slug}`}
                  className="block rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors group"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h2 className="text-white font-semibold group-hover:text-blue-300 transition-colors">
                      {article.title}
                    </h2>
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
          </div>
        </div>
      </div>
    </Layout>
  )
}
