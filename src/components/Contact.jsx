import { Phone, MapPin, Clock, Mail, Instagram, Facebook } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-barber-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-barber-gold text-sm font-semibold uppercase tracking-widest mb-4 block">
            Contact
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Prenez <span className="gold-gradient">Contact</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Une question ? Envie de prendre rendez-vous ?
            N'hésitez pas à nous contacter, nous vous répondrons avec plaisir.
          </p>
          <div className="w-24 h-1 gold-bg mx-auto rounded-full mt-6" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Phone Card */}
          <a
            href="tel:0627470350"
            className="group bg-barber-800 rounded-2xl border border-barber-700 p-8 hover:border-barber-gold/50 transition-all card-hover"
          >
            <div className="w-16 h-16 rounded-2xl bg-barber-gold/20 flex items-center justify-center mb-6 group-hover:bg-barber-gold/30 transition-colors">
              <Phone className="w-8 h-8 text-barber-gold" />
            </div>
            <h3 className="text-white font-semibold text-xl mb-2">Téléphone</h3>
            <p className="text-gray-400 text-sm mb-4">
              Appelez-nous directement pour prendre rendez-vous
            </p>
            <p className="text-barber-gold font-semibold text-lg">
              06 27 47 03 50
            </p>
          </a>

          {/* Address Card */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=11+Avenue+de+la+Libération+91150+Étampes"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-barber-800 rounded-2xl border border-barber-700 p-8 hover:border-barber-gold/50 transition-all card-hover"
          >
            <div className="w-16 h-16 rounded-2xl bg-barber-gold/20 flex items-center justify-center mb-6 group-hover:bg-barber-gold/30 transition-colors">
              <MapPin className="w-8 h-8 text-barber-gold" />
            </div>
            <h3 className="text-white font-semibold text-xl mb-2">Adresse</h3>
            <p className="text-gray-400 text-sm mb-4">
              Venez nous rendre visite au salon
            </p>
            <p className="text-barber-gold font-semibold">
              11 Av. de la Libération<br />
              91150 Étampes
            </p>
          </a>

          {/* Hours Card */}
          <div className="bg-barber-800 rounded-2xl border border-barber-700 p-8">
            <div className="w-16 h-16 rounded-2xl bg-barber-gold/20 flex items-center justify-center mb-6">
              <Clock className="w-8 h-8 text-barber-gold" />
            </div>
            <h3 className="text-white font-semibold text-xl mb-2">Horaires</h3>
            <p className="text-gray-400 text-sm mb-4">
              Ouvert 6 jours sur 7
            </p>
            <p className="text-barber-gold font-semibold">
              Mar-Dim : 9h30-20h
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Lundi : Fermé
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
            Prêt pour une nouvelle coupe ?
          </h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Ne perdez pas une minute de plus. Appelez-nous maintenant et réservez votre créneau.
          </p>
          <a
            href="tel:0627470350"
            className="inline-flex items-center gap-3 px-10 py-5 gold-bg text-barber-900 font-bold rounded-full hover:shadow-lg hover:shadow-barber-gold/20 transition-all text-lg"
          >
            <Phone className="w-6 h-6" />
            Appeler maintenant
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
