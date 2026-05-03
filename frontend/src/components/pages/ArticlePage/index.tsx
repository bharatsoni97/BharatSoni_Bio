import { useParams, Link } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { profile } from '@/data/profile'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })
}

export function ArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const article = profile.articles.find((a) => a.slug === slug)

  return (
    <Layout>
      <div className="min-h-screen pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="backdrop-blur-md bg-black/40 border border-white/10 rounded-2xl p-8 md:p-12">
            <Link
              to="/writing"
              className="text-white/40 hover:text-white text-sm transition-colors mb-8 inline-block"
            >
              ← Back to Writing
            </Link>

            {!article ? (
              <p className="text-white/60">Article not found.</p>
            ) : (
              <>
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-blue-400/80 border border-blue-400/30 rounded-full px-2.5 py-0.5 bg-blue-400/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="text-3xl font-semibold text-white mb-3 leading-snug">
                  {article.title}
                </h1>
                <p className="text-white/40 text-sm mb-10">{formatDate(article.date)}</p>
                <div className="space-y-6">
                  {article.body.map((paragraph, i) => (
                    <p key={i} className="text-white/75 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}
