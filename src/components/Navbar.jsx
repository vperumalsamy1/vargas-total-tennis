import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo.svg'
import logoWhite from '../assets/logo-white.svg'

const NAV_LINKS = [
  { label: 'About',    to: 'about' },
  { label: 'Programs', to: 'programs' },
  { label: 'Pricing',  to: 'pricing' },
  { label: 'Reviews',  to: 'testimonials' },
  { label: 'Contact',  to: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  // Switch to solid white navbar after 60px of scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = `text-sm font-medium cursor-pointer transition-colors duration-200 ${
    scrolled ? 'text-gray-700 hover:text-vtt-primary' : 'text-white/90 hover:text-white'
  }`

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white border-b border-black/[0.08]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo — swaps between white (transparent) and colour (scrolled) */}
        <Link to="hero" smooth duration={500} className="cursor-pointer flex-shrink-0">
          <img
            src={scrolled ? logo : logoWhite}
            alt="Vargas Total Tennis"
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              smooth
              duration={500}
              offset={-64}
              className={linkClass}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          to="contact"
          smooth
          duration={500}
          offset={-64}
          className="hidden md:inline-flex items-center bg-vtt-primary hover:bg-vtt-dark text-white text-sm font-medium px-5 py-2.5 rounded-lg cursor-pointer transition-colors duration-200"
        >
          Book a lesson
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className={`md:hidden p-2 rounded-md transition-colors ${
            scrolled ? 'text-gray-700' : 'text-white'
          }`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile slide-down drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="md:hidden bg-white border-t border-black/[0.06] overflow-hidden"
          >
            <div className="px-6 pt-2 pb-5 flex flex-col">
              {NAV_LINKS.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  smooth
                  duration={500}
                  offset={-64}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-gray-700 hover:text-vtt-primary cursor-pointer py-3 border-b border-black/[0.05] last:border-0"
                >
                  {label}
                </Link>
              ))}
              <Link
                to="contact"
                smooth
                duration={500}
                offset={-64}
                onClick={() => setMenuOpen(false)}
                className="mt-4 block bg-vtt-primary hover:bg-vtt-dark text-white text-sm font-medium px-5 py-3 rounded-lg cursor-pointer text-center transition-colors duration-200"
              >
                Book a lesson
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
