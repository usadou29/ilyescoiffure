import { Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-barber-800 border-t border-barber-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/logo.png" 
                alt="Ilyes Coiffure" 
                className="h-10 w-auto object-contain"
              />
              <span className="text-xl font-display font-semibold text-white">
                Ilyes Coiffure
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Votre salon de coiffure premium à Étampes. 
              L'art de la coupe masculine avec passion et précision depuis plus de 10 ans.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-barber-700 flex items-center justify-center text-gray-400 hover:bg-barber-gold hover:text-barber-900 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-barber-700 flex items-center justify-center text-gray-400 hover:bg-barber-gold hover:text-barber-900 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <a href="#accueil" className="text-gray-400 hover:text-barber-gold transition-colors text-sm">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#presentation" className="text-gray-400 hover:text-barber-gold transition-colors text-sm">
                  Le Salon
                </a>
              </li>
              <li>
                <a href="#tarifs" className="text-gray-400 hover:text-barber-gold transition-colors text-sm">
                  Tarifs
                </a>
              </li>
              <li>
                <a href="#horaires" className="text-gray-400 hover:text-barber-gold transition-colors text-sm">
                  Horaires
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-barber-gold transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-barber-gold flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  11 Av. de la Libération<br />
                  91150 Étampes
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-barber-gold flex-shrink-0" />
                <a href="tel:0627470350" className="text-gray-400 hover:text-barber-gold transition-colors text-sm">
                  06 27 47 03 50
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-barber-gold flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Mar-Dim : 9h30-20h
                </span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">Coupe Homme</li>
              <li className="text-gray-400 text-sm">Coupe Enfant</li>
              <li className="text-gray-400 text-sm">Coupe + Barbe</li>
              <li className="text-gray-400 text-sm">Taille de Barbe</li>
              <li className="text-gray-400 text-sm">Contours & Dessins</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-barber-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Ilyes Coiffure. Tous droits réservés.
          </p>
          <p className="text-gray-500 text-sm">
            Salon de coiffure à Étampes
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
