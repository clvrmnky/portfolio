import Background from './components/layout/Background/Background'
import Nav from './components/sections/Nav/Nav'
import Hero from './components/sections/Hero/Hero'
import Work from './components/sections/Work/Work'
import Methods from './components/sections/Methods/Methods'
import Quote from './components/sections/Quote/Quote'
import FuiCursor from './components/layout/Background/FuiCursor'
import ScrollRuler from './components/layout/ScrollRuler/ScrollRuler'
import AssetsPage from './pages/AssetsPage'
import GoldenFrame from './pages/GoldenFrame'
import TextFrameCasePage from './pages/TextFrameCasePage'

const path = window.location.pathname

function App() {
  if (path === '/assets') return <AssetsPage />
  if (path === '/golden') return <GoldenFrame />
  if (path === '/case-study/textframe') return <TextFrameCasePage />

  return (
    <>
      <Background />
      <FuiCursor />
      <ScrollRuler />
      <Nav />
      <Hero>
        <Work />
        <Methods />
        <Quote />
      </Hero>
    </>
  )
}

export default App
