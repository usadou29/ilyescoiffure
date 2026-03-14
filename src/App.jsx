import Hero from './components/Hero'
import Presentation from './components/Presentation'
import Tarifs from './components/Tarifs'
import Horaires from './components/Horaires'
import Contact from './components/Contact'
import Localisation from './components/Localisation'
import Footer from './components/Footer'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="min-h-screen bg-barber-900">
      <Navigation />
      <main>
        <Hero />
        <Presentation />
        <Tarifs />
        <Horaires />
        <Localisation />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
