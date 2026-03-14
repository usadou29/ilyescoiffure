import { Clock, Calendar, AlertCircle } from 'lucide-react'

const Horaires = () => {
  const schedule = [
    { day: 'Lundi', hours: 'Fermé', isOpen: false },
    { day: 'Mardi', hours: '09:30 – 20:00', isOpen: true },
    { day: 'Mercredi', hours: '09:30 – 20:00', isOpen: true },
    { day: 'Jeudi', hours: '09:30 – 20:00', isOpen: true },
    { day: 'Vendredi', hours: '09:30 – 20:00', isOpen: true },
    { day: 'Samedi', hours: '09:30 – 20:00', isOpen: true },
    { day: 'Dimanche', hours: '09:30 – 20:00', isOpen: true },
  ]

  const today = new Date().getDay()
  const dayNames = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
  const todayName = dayNames[today]
  const todaySchedule = schedule.find(s => s.day === todayName)

  return (
    <section id="horaires" className="py-24 bg-barber-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-barber-gold text-sm font-semibold uppercase tracking-widest mb-4 block">
            Planification
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Nos <span className="gold-gradient">Horaires</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Ouvert 6 jours sur 7 pour vous accueillir dans les meilleures conditions.
            Sur rendez-vous ou en passant.
          </p>
          <div className="w-24 h-1 gold-bg mx-auto rounded-full mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Schedule Card */}
          <div className="bg-barber-800 rounded-2xl border border-barber-700 overflow-hidden">
            <div className="p-6 border-b border-barber-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-barber-gold/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-barber-gold" />
                </div>
                <h3 className="text-white font-semibold text-xl">Horaires d'ouverture</h3>
              </div>
            </div>

            <div className="divide-y divide-barber-700">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-4 ${
                    item.day === todayName ? 'bg-barber-gold/10' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {item.day === todayName && (
                      <span className="w-2 h-2 rounded-full bg-barber-gold animate-pulse" />
                    )}
                    <span className={`font-medium ${
                      item.day === todayName ? 'text-barber-gold' : 'text-white'
                    }`}>
                      {item.day}
                    </span>
                    {item.day === todayName && (
                      <span className="text-xs bg-barber-gold/20 text-barber-gold px-2 py-0.5 rounded-full">
                        Aujourd'hui
                      </span>
                    )}
                  </div>
                  <span className={item.isOpen ? 'text-gray-300' : 'text-gray-500'}>
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            {/* Today's Status */}
            <div className="bg-barber-800 rounded-2xl border border-barber-700 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-barber-gold/20 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-barber-gold" />
                </div>
                <h3 className="text-white font-semibold text-xl">Aujourd'hui</h3>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className={`w-3 h-3 rounded-full ${
                  todaySchedule?.isOpen ? 'bg-green-500 animate-pulse' : 'bg-red-500'
                }`} />
                <span className="text-lg text-white">
                  {todaySchedule?.isOpen ? 'Ouvert' : 'Fermé'}
                </span>
              </div>
              <p className="text-gray-400">
                {todaySchedule?.isOpen 
                  ? `Nous sommes ouverts aujourd'hui de ${todaySchedule.hours}. N'hésitez pas à passer ou à appeler pour prendre rendez-vous.`
                  : `Le salon est fermé aujourd'hui. Nous vous accueillons dès demain.`
                }
              </p>
            </div>

            {/* Note */}
            <div className="bg-barber-800/50 rounded-2xl border border-barber-700 p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-barber-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold mb-2">Conseil</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Pour éviter l'attente, nous vous recommandons de prendre rendez-vous, 
                    surtout en fin de semaine et le week-end. Vous pouvez nous appeler 
                    directement au <a href="tel:0627470350" className="text-barber-gold hover:underline">06 27 47 03 50</a>.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="tel:0627470350"
              className="flex items-center justify-center gap-3 w-full py-4 gold-bg text-barber-900 font-bold rounded-xl hover:shadow-lg hover:shadow-barber-gold/20 transition-all"
            >
              <Clock className="w-5 h-5" />
              Prendre rendez-vous
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Horaires
