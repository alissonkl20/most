import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App
