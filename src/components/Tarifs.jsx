import { Scissors, Sparkles, User, Palette, Droplets } from 'lucide-react'

const Tarifs = () => {
  const services = [
    {
      icon: User,
      name: 'Coupe Homme',
      price: '12 €',
      description: 'Coupe classique ou moderne, shampoing inclus',
      popular: true,
    },
    {
      icon: User,
      name: 'Coupe Enfant',
      price: '10 €',
      description: 'Jusqu\'à 12 ans, coupe adaptée et soignée',
      popular: false,
    },
    {
      icon: User,
      name: 'Coupe + Barbe',
      price: '15 €',
      description: 'Le combo parfait pour un look complet',
      popular: true,
    },
    {
      icon: User,
      name: 'Barbe Simple',
      price: '10 €',
      description: 'Taille et entretien de la barbe',
      popular: false,
    },
    {
      icon: Scissors,
      name: 'Contours',
      price: '5 €',
      description: 'Rafraîchissement rapide des contours',
      popular: false,
    },
    {
      icon: Palette,
      name: 'Dessin',
      price: '5 €',
      description: 'Design personnalisé sur coupe ou barbe',
      popular: false,
    },
    {
      icon: Droplets,
      name: 'Shampoing',
      price: '5 €',
      description: 'Shampoing et soin du cuir chevelu',
      popular: false,
    },
  ]

  return (
    <section id="tarifs" className="py-24 bg-barber-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-barber-gold text-sm font-semibold uppercase tracking-widest mb-4 block">
            Nos Prestations
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Nos <span className="gold-gradient">Tarifs</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Des prix transparents et accessibles pour une qualité premium.
            Chaque prestation est réalisée avec soin et professionnalisme.
          </p>
          <div className="w-24 h-1 gold-bg mx-auto rounded-full mt-6" />
        </div>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-barber-900 rounded-2xl p-6 border transition-all duration-300 card-hover ${
                service.popular
                  ? 'border-barber-gold shadow-lg shadow-barber-gold/10'
                  : 'border-barber-700 hover:border-barber-600'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 gold-bg text-barber-900 text-xs font-bold rounded-full uppercase tracking-wider">
                    Populaire
                  </span>
                </div>
              )}

              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  service.popular ? 'bg-barber-gold/20' : 'bg-barber-800'
                }`}>
                  <service.icon className={`w-6 h-6 ${
                    service.popular ? 'text-barber-gold' : 'text-gray-400'
                  }`} />
                </div>
                <div className="text-right">
                  <span className="font-display text-3xl font-bold gold-gradient">
                    {service.price}
                  </span>
                </div>
              </div>

              <h3 className="text-white font-semibold text-xl mb-2">{service.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>

              {service.popular && (
                <div className="mt-4 pt-4 border-t border-barber-800">
                  <a
                    href="tel:0627470350"
                    className="flex items-center justify-center gap-2 w-full py-3 border border-barber-gold text-barber-gold rounded-lg hover:bg-barber-gold hover:text-barber-900 transition-all font-medium"
                  >
                    <Sparkles className="w-4 h-4" />
                    Réserver
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            * Les tarifs peuvent varier selon la complexité de la prestation.
            Contactez-nous pour un devis personnalisé.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Tarifs
