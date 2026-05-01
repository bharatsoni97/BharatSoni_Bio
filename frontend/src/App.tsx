import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LandingPage } from '@/components/pages/LandingPage'

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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<AppStub />} />
      </Routes>
    </BrowserRouter>
  )
}
