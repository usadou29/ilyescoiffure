import { useState, useEffect } from 'react'
import { Menu, X, Scissors } from 'lucide-react'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#accueil', label: 'Accueil' },
    { href: '#presentation', label: 'Le Salon' },
    { href: '#tarifs', label: 'Tarifs' },
    { href: '#horaires', label: 'Horaires' },
    { href: '#contact', label: 'Contact' },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-barber-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#accueil"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('#accueil')
            }}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-full gold-bg flex items-center justify-center">
              <Scissors className="w-5 h-5 text-barber-900" />
            </div>
            <span className="text-xl font-display font-semibold text-white group-hover:text-barber-gold transition-colors">
              Ilyes Coiffure
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(link.href)
                }}
                className="text-gray-300 hover:text-barber-gold transition-colors text-sm font-medium uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:0627470350"
              className="px-6 py-2.5 gold-bg text-barber-900 font-semibold rounded-full hover:opacity-90 transition-opacity text-sm"
            >
              Appeler
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-barber-gold transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-barber-800 border-t border-barber-600">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(link.href)
                  }}
                  className="block text-gray-300 hover:text-barber-gold transition-colors text-base font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:0627470350"
                className="block w-full text-center px-6 py-3 gold-bg text-barber-900 font-semibold rounded-full mt-4"
              >
                Appeler maintenant
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
