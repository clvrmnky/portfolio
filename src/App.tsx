import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AssetsPage from './pages/AssetsPage'
import GoldenFrame from './pages/GoldenFrame'
import TextFrameCasePage from './pages/TextFrameCasePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/assets" element={<AssetsPage />} />
      <Route path="/golden" element={<GoldenFrame />} />
      <Route path="/case-study/textframe" element={<TextFrameCasePage />} />
    </Routes>
  )
}

export default App
