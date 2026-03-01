import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AssetsPage from './pages/AssetsPage'
import GoldenFrame from './pages/GoldenFrame'
import TextFrameCasePage from './pages/TextFrameCasePage'
import AiReasoningPage from './pages/AiReasoningPage'
import AgreeRatePage from './pages/AgreeRatePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/assets" element={<AssetsPage />} />
      <Route path="/golden" element={<GoldenFrame />} />
      {/* Legacy route — backward compat */}
      <Route path="/case-study/textframe" element={<TextFrameCasePage />} />
      {/* /work/* case study routes */}
      <Route path="/work/evidence-ux" element={<TextFrameCasePage />} />
      <Route path="/work/ai-reasoning" element={<AiReasoningPage />} />
      <Route path="/work/agree-rate" element={<AgreeRatePage />} />
      {/* Catch-all → home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
