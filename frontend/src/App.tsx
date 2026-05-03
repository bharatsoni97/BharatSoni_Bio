import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LandingPage } from '@/components/pages/LandingPage'
import { WorkPage } from '@/components/pages/WorkPage'
import { WritingPage } from '@/components/pages/WritingPage'
import { ArticlePage } from '@/components/pages/ArticlePage'

function AppStub() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-semibold mb-2">Econometrics.AI</h1>
        <p className="text-muted-foreground">Analytical workbench — coming soon.</p>
      </div>
    </div>
  )
}

export function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<AppStub />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/writing" element={<WritingPage />} />
        <Route path="/writing/:slug" element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  )
}
