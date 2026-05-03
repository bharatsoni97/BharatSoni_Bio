import { Layout } from '@/components/Layout'

export function WritingPage() {
  return (
    <Layout fixedSection="writing">
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="backdrop-blur-md bg-black/40 border border-white/10 rounded-2xl p-12 md:p-16 text-center max-w-lg w-full">
          <h1 className="text-3xl font-semibold text-white mb-4">Writing</h1>
          <p className="text-white/50 text-sm leading-relaxed">Coming soon.</p>
        </div>
      </div>
    </Layout>
  )
}
