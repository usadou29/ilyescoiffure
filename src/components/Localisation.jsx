import { MapPin, Navigation } from 'lucide-react'

const Localisation = () => {
  return (
    <section className="py-24 bg-barber-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-barber-gold text-sm font-semibold uppercase tracking-widest mb-4 block">
            Où nous trouver
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Notre <span className="gold-gradient">Adresse</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Situé en plein cœur d'Étampes, facilement accessible et avec des places de stationnement à proximité.
          </p>
          <div className="w-24 h-1 gold-bg mx-auto rounded-full mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Map Placeholder / Info */}
          <div className="bg-barber-900 rounded-2xl border border-barber-700 overflow-hidden flex flex-col">
            <div className="p-8 flex-1">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-barber-gold/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-barber-gold" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-xl mb-2">Adresse</h3>
                  <p className="text-gray-300 text-lg">
                    11 Avenue de la Libération
                  </p>
                  <p className="text-gray-400">
                    91150 Étampes, France
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-400">
                  <Navigation className="w-5 h-5 text-barber-gold" />
                  <span>Proche du centre-ville d'Étampes</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Navigation className="w-5 h-5 text-barber-gold" />
                  <span>Stationnement facile à proximité</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Navigation className="w-5 h-5 text-barber-gold" />
                  <span>Accessible en transports en commun</span>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=11+Avenue+de+la+Libération+91150+Étampes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 border-2 border-barber-gold text-barber-gold font-semibold rounded-xl hover:bg-barber-gold hover:text-barber-900 transition-all"
              >
                <Navigation className="w-5 h-5" />
                Ouvrir dans Google Maps
              </a>
            </div>

            {/* Mini Map Visual */}
            <div className="h-48 bg-barber-800 relative overflow-hidden">
              <div className="absolute inset-0 opacity-30">
                <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3a3a3a" strokeWidth="1"/>
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  {/* Roads */}
                  <line x1="0" y1="100" x2="400" y2="100" stroke="#4a4a4a" strokeWidth="8" />
                  <line x1="200" y1="0" x2="200" y2="200" stroke="#4a4a4a" strokeWidth="6" />
                  <line x1="100" y1="0" x2="100" y2="200" stroke="#3a3a3a" strokeWidth="4" />
                  <line x1="300" y1="0" x2="300" y2="200" stroke="#3a3a3a" strokeWidth="4" />
                </svg>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-4 h-4 bg-barber-gold rounded-full animate-ping absolute" />
                  <div className="w-4 h-4 bg-barber-gold rounded-full relative border-2 border-barber-900" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-barber-900/90 px-3 py-1.5 rounded-lg">
                <span className="text-barber-gold text-sm font-medium">Ilyes Coiffure</span>
              </div>
            </div>
          </div>

          {/* Photo / Atmosphere */}
          <div className="relative rounded-2xl overflow-hidden min-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Extérieur salon de coiffure"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-barber-900 via-barber-900/50 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="bg-barber-900/90 backdrop-blur-sm rounded-xl p-6 border border-barber-700">
                <p className="text-gray-300 text-sm mb-2">Votre barber à</p>
                <p className="font-display text-2xl font-bold text-white mb-2">Étampes</p>
                <p className="text-barber-gold text-sm">
                  À deux pas du centre-ville
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Localisation
