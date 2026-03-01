import Background from '../components/layout/Background/Background'
import Nav from '../components/sections/Nav/Nav'
import Hero from '../components/sections/Hero/Hero'
import Work from '../components/sections/Work/Work'
import Methods from '../components/sections/Methods/Methods'
import Quote from '../components/sections/Quote/Quote'
import FuiCursor from '../components/layout/Background/FuiCursor'
import ScrollRuler from '../components/layout/ScrollRuler/ScrollRuler'

export default function HomePage() {
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
