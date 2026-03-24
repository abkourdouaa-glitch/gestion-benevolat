import { Heart, Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react";


const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="bg-gradient-to-br from-gray-900 via-green-900 to-indigo-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold">VolontAction</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Connecter les bénévoles et les associations pour créer un impact positif dans nos communautés.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-green-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-green-400 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-pink-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-green-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Navigation
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-green-400 to-indigo-400 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white hover:translate-x-2 inline-block transition-all duration-300">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#presentation" className="text-gray-300 hover:text-white hover:translate-x-2 inline-block transition-all duration-300">
                  Présentation
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white hover:translate-x-2 inline-block transition-all duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Ressources
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-green-400 to-indigo-400 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li>
    
                <a href="FormBenevolat" className="text-gray-300 hover:text-white hover:translate-x-2 inline-block transition-all duration-300">
                  Devenir Bénévole
                </a>
             
              </li>
              <li>
                <a href="FormAssociation" className="text-gray-300 hover:text-white hover:translate-x-2 inline-block transition-all duration-300">
                  Inscrire une Association
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Contact
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-green-400 to-indigo-400 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  123 Rue de la Solidarité<br />
                  75001 Rabat, Maroc
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <a href="tel:+33123456789" className="text-gray-300 hover:text-white transition-colors">
                  +212 1 23 05 67 74
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-400 flex-shrink-0" />
                <a href="mailto:contact@volontaction.fr" className="text-gray-300 hover:text-white transition-colors">
                  contact@volontaction.fr
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 VolontAction. Tous droits réservés.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Conditions d'utilisation
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Mentions légales
              </a>
            </div>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-white/10 hover:bg-green-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Retour en haut"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;