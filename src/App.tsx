import Background from './components/layout/Background/Background'
import Nav from './components/sections/Nav/Nav'
import Hero from './components/sections/Hero/Hero'
import Work from './components/sections/Work/Work'
import Methods from './components/sections/Methods/Methods'
import Quote from './components/sections/Quote/Quote'
import FuiCursor from './components/layout/Background/FuiCursor'

function App() {
  return (
    <>
      <Background />
      <FuiCursor />
      <Nav />
      <main>
        <Hero />
        <Work />
        <Methods />
        <Quote />
      </main>
    </>
  )
}

export default App
