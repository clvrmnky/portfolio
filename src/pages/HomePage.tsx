import Background from '../components/layout/Background/Background'
import Nav from '../components/sections/Nav/Nav'
import Hero from '../components/sections/Hero/Hero'
import Work from '../components/sections/Work/Work'
import Quote from '../components/sections/Quote/Quote'
import FuiCursor from '../components/layout/Background/FuiCursor'
import ScrollRuler from '../components/layout/ScrollRuler/ScrollRuler'
import ContextBridge from '../components/sections/ContextBridge/ContextBridge'
import Thesis from '../components/sections/Thesis/Thesis'
import Leadership from '../components/sections/Leadership/Leadership'
import Velocity from '../components/sections/Velocity/Velocity'

export default function HomePage() {
  return (
    <>
      <Background />
      <FuiCursor />
      <ScrollRuler />
      <Nav />
      <Hero>
        <ContextBridge />
        <Thesis />
        <Work />
        <Leadership />
        <Velocity />
        <Quote />
      </Hero>
    </>
  )
}
