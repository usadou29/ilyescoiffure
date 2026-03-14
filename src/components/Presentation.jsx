import { Scissors, Award, Users, Sparkles } from 'lucide-react'

const Presentation = () => {
  const features = [
    {
      icon: Scissors,
      title: 'Coupe Précise',
      description: 'Chaque coupe est réalisée avec soin et attention aux détails pour un résultat parfait.',
    },
    {
      icon: Award,
      title: 'Expertise',
      description: 'Des années d\'expérience dans la coiffure masculine et l\'art de la barbe.',
    },
    {
      icon: Users,
      title: 'Accueil Chaleureux',
      description: 'Une ambiance conviviale où vous vous sentirez comme chez vous.',
    },
    {
      icon: Sparkles,
      title: 'Produits Qualité',
      description: 'Nous utilisons des produits professionnels pour prendre soin de vos cheveux.',
    },
  ]

  return (
    <section id="presentation" className="py-24 bg-barber-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-barber-gold text-sm font-semibold uppercase tracking-widest mb-4 block">
            Le Salon
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Bienvenue chez <span className="gold-gradient">Ilyes Coiffure</span>
          </h2>
          <div className="w-24 h-1 gold-bg mx-auto rounded-full" />
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Intérieur du salon de coiffure"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-barber-800 border border-barber-600 rounded-xl p-6 shadow-xl max-w-xs hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gold-bg flex items-center justify-center">
                  <Award className="w-6 h-6 text-barber-900" />
                </div>
                <div>
                  <p className="text-white font-semibold">Excellence</p>
                  <p className="text-gray-400 text-sm">Reconnu à Étampes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="space-y-6">
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white">
              Votre barber de confiance au cœur d'Étampes
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Situé au <span className="text-barber-gold">11 Avenue de la Libération</span>, Ilyes Coiffure 
              est bien plus qu'un salon de coiffure. C'est un lieu où l'art de la coupe masculine 
              est pratiqué avec passion et précision.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Que vous recherchiez une coupe classique, un dégradé moderne ou une barbe 
              parfaitement taillée, nous mettons notre expertise à votre service dans 
              une ambiance détendue et professionnelle.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Notre engagement : vous offrir une expérience premium, des conseils personnalisés 
              et un résultat qui vous ressemble, à des prix accessibles.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-barber-700">
              <div className="text-center">
                <p className="font-display text-3xl font-bold gold-gradient">+10</p>
                <p className="text-gray-400 text-sm mt-1">Années d'expérience</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl font-bold gold-gradient">1000+</p>
                <p className="text-gray-400 text-sm mt-1">Clients satisfaits</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl font-bold gold-gradient">5★</p>
                <p className="text-gray-400 text-sm mt-1">Note moyenne</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-barber-800 border border-barber-700 rounded-xl p-6 card-hover"
            >
              <div className="w-14 h-14 rounded-xl bg-barber-700 group-hover:bg-barber-gold/20 flex items-center justify-center mb-4 transition-colors">
                <feature.icon className="w-7 h-7 text-barber-gold" />
              </div>
              <h4 className="text-white font-semibold text-lg mb-2">{feature.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Presentation
