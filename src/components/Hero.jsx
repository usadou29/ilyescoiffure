import { Phone, MapPin, Clock, ChevronDown } from 'lucide-react'

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-barber-900/60 via-barber-900/70 to-barber-900" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-barber-800/80 border border-barber-gold/30 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-barber-gold text-sm font-medium">
            Ouvert aujourd'hui
          </span>
        </div>

        {/* Main Title */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up">
          <span className="text-white">Ilyes</span>
          <br />
          <span className="gold-gradient">Coiffure</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-gray-300 mb-4 font-light animate-slide-up" style={{ animationDelay: '0.1s' }}>
          L'art de la coupe masculine à Étampes
        </p>

        {/* Description */}
        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-base sm:text-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Un salon de coiffure moderne où tradition et style se rencontrent.
          Coupes précises, barbes parfaites, service premium.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <a
            href="tel:0627470350"
            className="group flex items-center gap-3 px-8 py-4 gold-bg text-barber-900 font-bold rounded-full hover:shadow-lg hover:shadow-barber-gold/20 transition-all text-lg"
          >
            <Phone className="w-5 h-5" />
            06 27 47 03 50
          </a>
          <button
            onClick={() => scrollToSection('#tarifs')}
            className="flex items-center gap-3 px-8 py-4 border-2 border-barber-gold text-barber-gold font-semibold rounded-full hover:bg-barber-gold hover:text-barber-900 transition-all text-lg"
          >
            <Clock className="w-5 h-5" />
            Voir les tarifs
          </button>
        </div>

        {/* Quick Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center justify-center gap-3 text-gray-300">
            <MapPin className="w-5 h-5 text-barber-gold" />
            <span className="text-sm">11 Av. de la Libération, Étampes</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-gray-300">
            <Clock className="w-5 h-5 text-barber-gold" />
            <span className="text-sm">Mar-Dim : 9h30-20h</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-gray-300">
            <Phone className="w-5 h-5 text-barber-gold" />
            <span className="text-sm">Sur rendez-vous</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('#presentation')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-barber-gold transition-colors animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  )
}

export default Hero
