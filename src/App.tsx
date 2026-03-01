import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AssetsPage from './pages/AssetsPage'
import GoldenFrame from './pages/GoldenFrame'
import TextFrameCasePage from './pages/TextFrameCasePage'
import AiReasoningPage from './pages/AiReasoningPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/assets" element={<AssetsPage />} />
      <Route path="/golden" element={<GoldenFrame />} />
      <Route path="/case-study/textframe" element={<TextFrameCasePage />} />
      <Route path="/work/ai-reasoning" element={<AiReasoningPage />} />
    </Routes>
  )
}

export default App
