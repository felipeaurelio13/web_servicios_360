import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2 font-['Roboto_Slab']">
            <span className="font-bold text-xl md:text-2xl text-[#e85700]">
              EVOTING
            </span>
            <span className="hidden sm:inline text-xs text-gray-400 font-normal">
              Servicios 360°
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 font-['Roboto_Slab']">
            <a href="#plataformas" className="text-[#595a4a] hover:text-[#e85700] transition-colors">
              Plataformas
            </a>
            <a href="#nosotros" className="text-[#595a4a] hover:text-[#e85700] transition-colors">
              Nosotros
            </a>
            <button className="bg-[#e85700] hover:bg-[#c44a00] text-white px-6 py-2 rounded transition-colors">
              Contáctanos
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-[#e85700]" />
            ) : (
              <Menu className="w-6 h-6 text-[#e85700]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <a
              href="#plataformas"
              className="block py-2 text-[#595a4a] hover:text-[#e85700] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Plataformas
            </a>
            <a
              href="#nosotros"
              className="block py-2 text-[#595a4a] hover:text-[#e85700] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Nosotros
            </a>
            <button
              className="w-full mt-2 bg-[#e85700] hover:bg-[#c44a00] text-white px-6 py-2 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contáctanos
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
