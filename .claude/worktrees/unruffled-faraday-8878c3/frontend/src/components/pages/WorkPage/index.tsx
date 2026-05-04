import { Layout } from '@/components/Layout'
import { profile } from '@/data/profile'

export function WorkPage() {
  const sorted = [...profile.engagements].sort((a, b) => parseInt(b.year) - parseInt(a.year))

  return (
    <Layout fixedSection="work">
      <div className="min-h-screen pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-md bg-black/40 border border-white/10 rounded-2xl p-8 md:p-12">
            <h1 className="text-3xl font-semibold text-white mb-2">Project Book</h1>
            <p className="text-white/50 text-sm mb-12 max-w-xl leading-relaxed">
              A selection of client engagements across sectors. Client names are anonymized in keeping with
              confidentiality obligations. For further information on specific projects, please contact me directly.
            </p>
            <div className="space-y-6">
              {sorted.map((eng, i) => (
                <div key={i} id={eng.id} className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <span className="text-xs font-semibold text-blue-400 border border-blue-400/30 rounded-full px-2.5 py-0.5 bg-blue-400/10">
                        {eng.sector}
                      </span>
                    </div>
                    <span className="text-white/30 text-xs flex-shrink-0">{eng.year}</span>
                  </div>
                  <p className="text-white/40 text-sm mb-1">{eng.client}</p>
                  <h2 className="text-white font-semibold mb-4">{eng.scope}</h2>
                  <ul className="space-y-2 mb-5">
                    {eng.outcomes.map((o, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-white/70">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                        {o}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {eng.tags.map((tag) => (
                      <span key={tag} className="text-xs text-white/40 border border-white/10 rounded-full px-2.5 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
